#!/usr/bin/env node
/**
 * TEXVENTURE blog publisher.
 *
 * Reads the frozen 30-topic queue (content/queue.json), takes the next unpublished
 * article from content/articles/<slug>.json, validates it against the editorial and
 * internal-linking rules, regenerates src/data/generated-articles.ts, commits and pushes
 * to GitHub (Vercel auto-deploys), then verifies the live URL.
 *
 * Usage:
 *   node scripts/publish-next.mjs --validate-only    # validate next article, write nothing
 *   node scripts/publish-next.mjs --stage            # validate + write the TS file, no commit
 *   node scripts/publish-next.mjs --publish          # validate + write + commit + push + verify deploy
 *   node scripts/publish-next.mjs --status           # show queue progress
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = path.resolve(process.cwd());
const P = {
  queue: path.join(ROOT, 'content/queue.json'),
  map: path.join(ROOT, 'content/keyword-map.json'),
  articles: path.join(ROOT, 'content/articles'),
  state: path.join(ROOT, 'content/published.json'),
  log: path.join(ROOT, 'content/publish-log.jsonl'),
  lock: path.join(ROOT, 'content/.publish.lock'),
  gen: path.join(ROOT, 'src/data/generated-articles.ts'),
  images: path.join(ROOT, 'public/images'),
};

const HOME = 'https://texventure.com';
const QUOTE = 'https://quote.texventure.com/';
const HOMEPAGE_ANCHORS = [
  'Clothing Manufacturer in Bangladesh',
  'Trusted Clothing Manufacturer in Bangladesh',
  'Best Clothing Manufacturer in Bangladesh',
  'TEXVENTURE',
];

/* ------------------------------- helpers -------------------------------- */
const readJson = (p, fb) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : fb);
const writeJson = (p, v) => fs.writeFileSync(p, JSON.stringify(v, null, 2) + '\n');
const norm = (u) => u.replace(HOME, '').replace(/\/+$/, '') || '/';
const words = (s) => s.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`|-]/g, ' ')
  .split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w));

function sh(cmd, opts = {}) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: opts.quiet ? 'pipe' : 'inherit', ...opts });
}

function loadState() {
  return readJson(P.state, { published: [], failed: [], updatedAt: null });
}

function nextTopic() {
  const queue = readJson(P.queue);
  const state = loadState();
  const done = new Set(state.published.map((p) => p.slug));
  return queue.topics.find((t) => !done.has(t.slug)) || null;
}

function articlePath(slug) {
  return path.join(P.articles, `${slug}.json`);
}

/* ------------------------------ validation ------------------------------ */
function validate(a, topic, state) {
  const errors = [];
  const warns = [];
  const body = a.content || '';

  // 1. identity
  if (a.slug !== topic.slug) errors.push(`slug mismatch: ${a.slug} != ${topic.slug}`);
  if (!a.title || a.title.length < 25) errors.push('title missing or too short');
  if (!a.excerpt || a.excerpt.length < 80) errors.push('excerpt missing or too short');
  if (!a.metaTitle) errors.push('metaTitle missing');
  if (a.metaTitle && (a.metaTitle.length < 40 || a.metaTitle.length > 70))
    warns.push(`metaTitle length ${a.metaTitle.length} (target 50-60)`);
  if (a.metaDescription && (a.metaDescription.length < 140 || a.metaDescription.length > 170))
    warns.push(`metaDescription length ${a.metaDescription.length} (target 150-160)`);

  // 2. length
  const wc = words(body).length;
  if (wc < 1500) errors.push(`word count ${wc} < 1500`);

  // 3. keyword placement
  const kw = topic.primaryKeyword.toLowerCase();
  const first300 = words(body).slice(0, 300).join(' ').toLowerCase();
  if (!a.title.toLowerCase().includes(kw.split(' ')[0])) warns.push('primary keyword not in title');
  if (!first300.includes(kw.split(' ')[0])) warns.push('primary keyword not in first 300 words');

  // 4. internal links
  const links = [...body.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)].map((m) => ({ anchor: m[1], url: m[2] }));
  const homeLinks = links.filter((l) => norm(l.url) === '/');
  if (homeLinks.length !== 1)
    errors.push(`homepage links = ${homeLinks.length} (must be exactly 1)`);
  else if (!HOMEPAGE_ANCHORS.includes(homeLinks[0].anchor))
    errors.push(`homepage anchor "${homeLinks[0].anchor}" not in approved list`);

  const quoteLinks = links.filter((l) => l.url.includes('quote.texventure.com'));
  if (quoteLinks.length !== 1) errors.push(`quote CTA links = ${quoteLinks.length} (must be exactly 1)`);

  const internal = links.filter((l) => l.url.startsWith('/') || l.url.startsWith(HOME));
  const seen = new Map();
  for (const l of internal) {
    const key = norm(l.url);
    if (seen.has(key)) errors.push(`duplicate internal destination: ${key}`);
    seen.set(key, l.anchor);
  }

  // 5. no invented URLs
  const existing = new Set([
    '/', '/about', '/services', '/certifications', '/esg-transparency', '/get-a-quote',
    '/private-label-clothing-manufacturer-bangladesh', '/streetwear-manufacturer-bangladesh',
    '/custom-clothing-manufacturer-bangladesh', '/blog',
    '/products/knit-wear', '/products/wovens', '/products/circular-knit', '/products/denim',
    '/products/sweaters', '/products/work-wear', '/products/active-wear', '/products/womens-wear',
    '/products/mens-wear', '/products/kids-wear',
    '/blog/what-is-moq', '/blog/how-to-find-a-clothing-manufacturer',
    '/blog/cost-to-manufacture-a-hoodie', '/blog/bangladesh-vs-china-vs-vietnam',
  ]);
  const publishedBlogs = state.published.map((p) => `/blog/${p.slug}`);
  publishedBlogs.forEach((u) => existing.add(u));
  for (const l of internal) {
    const key = norm(l.url);
    if (key !== '/' && !existing.has(key)) errors.push(`unknown internal URL (would 404): ${key}`);
    if (key === `/blog/${topic.slug}`) errors.push('article links to itself');
  }

  // 6. structure
  const h2s = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
  if (h2s.length < 4) errors.push(`only ${h2s.length} H2 sections (need 4+)`);
  if (!/^##\s*Frequently Asked Questions/im.test(body)) errors.push('missing "## Frequently Asked Questions" section');
  const faqQ = [...body.matchAll(/^###\s+(.+\?)\s*$/gm)].length;
  if (faqQ < 3) errors.push(`only ${faqQ} FAQ questions (need 3+, format "### Question?")`);
  if (body.includes('```')) errors.push('code fences not supported by renderer');

  // 7. image
  if (!a.featuredImage) errors.push('featuredImage missing');
  else {
    const p = path.join(ROOT, 'public', a.featuredImage.replace(/^\//, ''));
    if (!fs.existsSync(p)) errors.push(`featured image not found in public/: ${a.featuredImage}`);
  }
  if (!a.imageAlt || a.imageAlt.length < 20) errors.push('imageAlt missing or too short');

  // 8. uniqueness across queue + existing
  const qMap = readJson(P.map, { topics: [] });
  const clash = qMap.topics.filter((t) => t.slug !== topic.slug &&
    t.primary.toLowerCase() === topic.primaryKeyword.toLowerCase());
  if (clash.length) errors.push(`primary keyword also assigned to ${clash.map((c) => c.slug).join(', ')}`);
  const existingKw = Object.values(qMap.existingPages || {});
  if (existingKw.includes(topic.primaryKeyword.toLowerCase()))
    errors.push(`primary keyword already targets an existing page: ${topic.primaryKeyword}`);

  // 9. word-count reporting
  return { errors, warns, wc, h2s: h2s.length, faq: faqQ, links: internal.length };
}

/* --------------------------- code generation ---------------------------- */
function escapeTs(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function buildTs(extra = null) {
  const state = loadState();
  const slugs = state.published.map((p) => p.slug);
  if (extra && !slugs.includes(extra.slug)) slugs.push(extra.slug);
  const parts = [];
  for (const slug of slugs) {
    const f = articlePath(slug);
    if (!fs.existsSync(f)) continue;
    const a = readJson(f);
    parts.push(`  {
    slug: ${JSON.stringify(a.slug)},
    title: ${JSON.stringify(a.title)},
    excerpt: ${JSON.stringify(a.excerpt)},
    content: \`${escapeTs(a.content)}\`,
    category: ${JSON.stringify(a.category)},
    tags: ${JSON.stringify(a.tags)},
    author: { name: ${JSON.stringify(a.author.name)}, role: ${JSON.stringify(a.author.role)} },
    publishedAt: ${JSON.stringify(a.publishedAt)},
    readTimeMinutes: ${a.readTimeMinutes},
    featuredImage: ${JSON.stringify(a.featuredImage)},
    imageAlt: ${JSON.stringify(a.imageAlt)},
    metaDescription: ${JSON.stringify(a.metaDescription)},
  },`);
  }
  const out = `// AUTO-GENERATED by scripts/publish-next.mjs — do not edit by hand.
// Source of truth: content/articles/*.json + content/published.json
import type { GuideArticle } from './guides';

export const generatedArticles: GuideArticle[] = [
${parts.join('\n')}
];
`;
  fs.writeFileSync(P.gen, out);
  return parts.length;
}

/* ------------------------------- publish -------------------------------- */
function pushWithRetry(branch = 'main', tries = 3) {
  for (let i = 1; i <= tries; i++) {
    try {
      execSync(`git push origin ${branch}`, { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' });
      return true;
    } catch (e) {
      const msg = (e.stderr || e.message || '').toString().trim().split('\n').pop();
      console.error(`[git] push attempt ${i} failed: ${msg}`);
      if (i === tries) return false;
      execSync('sleep 5');
    }
  }
  return false;
}

function acquireLock() {
  if (fs.existsSync(P.lock)) {
    const lock = readJson(P.lock, {});
    const age = (Date.now() - (lock.at || 0)) / 1000;
    if (age < 900) return false;
    console.warn(`[publisher] stale lock (${Math.round(age)}s) — overriding`);
  }
  writeJson(P.lock, { pid: process.pid, at: Date.now() });
  return true;
}
const releaseLock = () => { try { fs.unlinkSync(P.lock); } catch {} };

function appendLog(entry) {
  fs.appendFileSync(P.log, JSON.stringify(entry) + '\n');
}

async function verifyDeploy(slug, phrase, tries = 24) {
  const url = `${HOME}/blog/${slug}`;
  for (let i = 1; i <= tries; i++) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 texventure-publisher' } });
      if (r.ok) {
        const html = await r.text();
        if (!phrase || html.includes(phrase)) return { ok: true, status: r.status, url, attempts: i };
      }
      process.stdout.write(`[verify] attempt ${i}: ${r.status}\n`);
    } catch (e) {
      process.stdout.write(`[verify] attempt ${i}: ${e.message}\n`);
    }
    await new Promise((r) => setTimeout(r, 15000));
  }
  return { ok: false, url };
}

async function main() {
  const mode = process.argv.includes('--publish') ? 'publish'
    : process.argv.includes('--stage') ? 'stage'
    : process.argv.includes('--status') ? 'status' : 'validate';

  if (process.argv.includes('--rebuild')) {
    const n = buildTs();
    console.log(`[rebuild] generated-articles.ts rebuilt with ${n} article(s)`);
    return;
  }

  if (process.argv.includes('--recheck')) {
    const state = loadState();
    const last = state.published[state.published.length - 1];
    if (!last) { console.log('[recheck] nothing published yet'); return; }
    const f = articlePath(last.slug);
    const phrase = fs.existsSync(f) ? words(readJson(f).excerpt).slice(0, 6).join(' ') : '';
    const dep = await verifyDeploy(last.slug, phrase);
    last.deploy = dep.ok ? 'live' : 'unverified';
    writeJson(P.state, state);
    console.log(`[recheck] ${last.slug}: ${last.deploy}`);
    return;
  }

  if (mode === 'status') {
    const queue = readJson(P.queue);
    const state = loadState();
    console.log(`queue: ${queue.topics.length} · published: ${state.published.length} · failed: ${state.failed.length}`);
    const next = nextTopic();
    if (next) console.log(`next: #${next.order} ${next.slug} — ${next.title}`);
    else console.log('queue complete');
    state.published.forEach((p) => console.log(`  ✓ #${p.order} ${p.slug} → ${p.url} (${p.commit || 'n/a'})`));
    return;
  }

  const topic = nextTopic();
  if (!topic) { console.log('[publisher] queue complete — nothing to publish'); process.exit(2); }

  const file = articlePath(topic.slug);
  if (!fs.existsSync(file)) {
    console.error(`[publisher] no article file for next topic: content/articles/${topic.slug}.json`);
    process.exit(4);
  }
  const article = readJson(file);
  const state = loadState();
  const v = validate(article, topic, state);

  console.log(`[validate] #${topic.order} ${topic.slug} — ${v.wc} words, ${v.h2s} H2, ${v.faq} FAQ, ${v.links} internal links`);
  v.warns.forEach((w) => console.log(`  warn: ${w}`));
  if (v.errors.length) {
    v.errors.forEach((e) => console.error(`  ERROR: ${e}`));
    console.error('[validate] FAILED — nothing written');
    process.exit(3);
  }
  console.log('[validate] PASSED');

  if (mode === 'validate') return;

  if (!acquireLock()) { console.error('[publisher] another run holds the lock'); process.exit(5); }
  try {
    if (mode === 'stage') {
      const nStaged = buildTs(article);
      console.log(`[stage] generated-articles.ts rebuilt with ${nStaged} article(s) — not committed`);
      return;
    }

    // mark published in state (before generating so the article is included)
    state.published.push({
      order: topic.order, slug: topic.slug, title: article.title,
      url: `${HOME}/blog/${topic.slug}`, publishedAt: article.publishedAt,
      words: v.wc, at: new Date().toISOString(), commit: null, deploy: 'pending',
    });
    state.updatedAt = new Date().toISOString();
    writeJson(P.state, state);

    const n = buildTs();
    console.log(`[build] generated-articles.ts rebuilt with ${n} article(s)`);

    sh('git add content src/data/generated-articles.ts');
    const msg = `blog: publish #${topic.order} "${article.title}"`;
    sh(`git commit -q -m ${JSON.stringify(msg)}`);
    const commit = sh('git rev-parse --short HEAD', { quiet: true }).trim();
    if (!pushWithRetry()) { console.error('[git] push failed after retries'); process.exit(6); }
    console.log(`[git] pushed ${commit}`);

    // record commit
    const s2 = loadState();
    const rec = s2.published.find((p) => p.slug === topic.slug);
    rec.commit = commit;
    writeJson(P.state, s2);
    sh('git add content/published.json');
    sh(`git commit -q -m ${JSON.stringify(`log: ${topic.slug} ${commit}`)}`);
    pushWithRetry();

    const phrase = words(article.excerpt).slice(0, 6).join(' ');
    const dep = await verifyDeploy(topic.slug, phrase);
    const s3 = loadState();
    const rec3 = s3.published.find((p) => p.slug === topic.slug);
    rec3.deploy = dep.ok ? 'live' : 'unverified';
    writeJson(P.state, s3);

    appendLog({ at: new Date().toISOString(), order: topic.order, slug: topic.slug, commit,
      words: v.wc, url: dep.url, deploy: rec3.deploy, attempts: dep.attempts || null });

    if (dep.ok) console.log(`[deploy] live: ${dep.url} (after ${dep.attempts} checks)`);
    else console.error(`[deploy] not verified yet: ${dep.url} — run again to re-check`);
  } finally {
    releaseLock();
  }
}

main().catch((e) => { console.error('[publisher] fatal:', e.message); releaseLock(); process.exit(1); });
