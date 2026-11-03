# Automated blog publishing (30-topic queue)

The 30 topics come from `TEXVENTURE – SEO Blog Topic Research & Topical Authority Strategy`
and are frozen in `content/queue.json` in priority order. Nothing in this pipeline researches
new topics, renames titles or reorders the queue.

## Files

| Path | Role |
|---|---|
| `content/queue.json` | The 30 approved topics, frozen order, anchor rotation input |
| `content/keyword-map.json` | Central keyword map (primary/secondary/long-tail/intent) used for cannibalization checks |
| `content/articles/<slug>.json` | One article per file — the content source of truth |
| `content/published.json` | Publishing state: order, commit, deploy status, word count |
| `content/publish-log.jsonl` | Append-only publishing log (one JSON line per publish) |
| `content/.publish.lock` | Execution lock, ignored by git, stale after 15 minutes |
| `src/data/generated-articles.ts` | Auto-generated TS layer merged into `src/data/guides.ts` |
| `scripts/publish-next.mjs` | Validator + publisher |

## Commands

```bash
node scripts/publish-next.mjs --status         # queue progress + next topic
node scripts/publish-next.mjs --validate-only  # validate the next article, write nothing
node scripts/publish-next.mjs --stage          # validate + regenerate the TS file (no commit)
node scripts/publish-next.mjs --publish        # validate + commit + push + wait for Vercel + log
node scripts/publish-next.mjs --recheck        # re-verify the last published URL
```

Exit codes: `0` published/staged · `2` queue complete · `3` validation failed · `4` article file
missing · `5` lock held · `6` push failed.

## Validation gates (all must pass before a commit exists)

- Word count ≥ 1500.
- Exactly one homepage link, anchor must be one of the four approved anchors.
- Exactly one `quote.texventure.com` CTA.
- No duplicate internal destination; every internal URL must exist (no invented URLs).
- No self-link; no link to an unpublished blog.
- ≥ 4 H2 sections, `## Frequently Asked Questions` with ≥ 3 `###` questions.
- Featured image must exist in `public/images/`.
- Primary keyword must be unique across the queue and must not match an existing page's target.

## Automation

A Hermes cron job fires `*/10 * * * *` (Asia/Dhaka), writes the next article, validates it and
runs `--publish`. The job stops acting once `--status` reports `queue complete`.
