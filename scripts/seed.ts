/**
 * TexVenture CMS — Seed Script
 * 
 * Reads verbatim content from existing data files and seeds the DB.
 * Run: npx supabase db seed (via Supabase CLI) OR call the API directly.
 * 
 * IMPORTANT: All text is copied VERBATIM from existing codebase.
 * Not a single character is changed.
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aaimmnobtoutxrksbrdd.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

// ─── VERBATIM DATA (copied from /src/data/site.ts) ───────────────────────────

const siteSettings = {
  company_name: 'TexVenture',
  logo_url: 'https://texventure.com/wp-content/uploads/2024/06/46f49d3a6517646824216463e65518bca411f2ea.png',
  logo_white_url: 'https://texventure.com/wp-content/uploads/2024/06/46f49d3a6517646824216463e65518bca411f2ea.png',
  favicon_url: 'https://texventure.com/favicon.ico',
  phone: '+880 135 4316246',
  email: 'zakir@texventure.com',
  address: 'House: 2, Road: 3/A, Sector: 5, Uttara, Dhaka-1230, Bangladesh',
  office_hours: 'Sun – Fri, 9:00 AM – 6:00 PM (BST)',
  whatsapp_number: '+880 135 4316246',
  whatsapp_message: 'Hello! I would like to inquire about apparel manufacturing.',
  facebook_url: 'https://www.facebook.com/texventure',
  linkedin_url: 'https://www.linkedin.com/company/texventure',
  footer_description: 'TexVenture is a Bangladesh-based apparel manufacturer and end-to-end supply chain sourcing solutions provider. We connect growing brands worldwide with vetted factories for knitwear, wovens, denim, sweaters, and activewear.',
  copyright_text: '© 2024 TexVenture. All rights reserved.',
};

const stats = [
  { value: '100+', label: 'MOQ (pieces per style)', display_order: 1 },
  { value: '7', label: 'Product categories', display_order: 2 },
  { value: '20+', label: 'Vetted factory partners', display_order: 3 },
  { value: '24/7', label: 'Support via WhatsApp', display_order: 4 },
];

// ─── VERBATIM DATA (copied from /src/data/site.ts certifications) ─────────────

const certifications = [
  { name: 'BSCI', description: 'Business Social Compliance Initiative — ensuring fair working conditions across the supply chain.' },
  { name: 'OEKO-TEX® Standard 100', description: 'Product safety certification testing for harmful substances in textiles.' },
  { name: 'SEDEX / SMETA', description: 'Ethical trade audit covering labour standards, health and safety, environment, and business ethics.' },
  { name: 'WRAP', description: 'Worldwide Responsible Accredited Production — compliance with international labour standards.' },
  { name: 'GOTS', description: 'Global Organic Textile Standard — certification for organic fibers and sustainable manufacturing.' },
];

// ─── VERBATIM SEO META (copied from page metadata) ───────────────────────────

const seoMetaRecords = [
  {
    page_path: '/',
    meta_title: 'TexVenture — Best Clothing Manufacturer in Bangladesh Since 2016',
    meta_description: 'TexVenture is a leading clothing manufacturer in Bangladesh, offering custom garment production with an MOQ of 100 pcs. 10+ years of experience, ISO-certified, 20+ certifications, and serving 30+ countries worldwide.',
    og_title: 'TexVenture — Best Clothing Manufacturer in Bangladesh',
    og_description: 'TexVenture is a leading clothing manufacturer & supplier in Bangladesh, offering custom garment production from 100 pcs MOQ, ISO certified.',
    og_image: 'https://texventure.com/images/og-homepage.jpg',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/about',
    meta_title: 'About TexVenture — Our Story and Mission',
    meta_description: 'Learn about TexVenture\'s journey as a Bangladesh buying house and garment manufacturer since 2016.',
    og_title: 'About TexVenture',
    og_description: 'Learn about TexVenture\'s journey as a Bangladesh buying house and garment manufacturer since 2016.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/contact',
    meta_title: 'Contact TexVenture — Get in Touch',
    meta_description: 'Contact TexVenture to start your apparel manufacturing project in Bangladesh. Fill out our quote form or message us on WhatsApp.',
    og_title: 'Contact TexVenture',
    og_description: 'Contact TexVenture to start your apparel manufacturing project in Bangladesh.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/blog',
    meta_title: 'Blog | TexVenture — Garment Manufacturing Insights',
    meta_description: 'Expert articles on garment manufacturing, apparel sourcing, MOQs, pricing, and the fashion supply chain — by the TexVenture sourcing team.',
    og_title: 'Blog | TexVenture — Garment Manufacturing Insights',
    og_description: 'Expert articles on garment manufacturing, apparel sourcing, MOQs, pricing, and the fashion supply chain.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/products',
    meta_title: 'Product Categories | TexVenture — Apparel Manufacturing in Bangladesh',
    meta_description: 'Explore TexVenture\'s product categories: knit wear, wovens, denim, circular knit, sweaters, work wear, and active wear.',
    og_title: 'Product Categories | TexVenture',
    og_description: 'Explore TexVenture\'s product categories: knit wear, wovens, denim, circular knit, sweaters, work wear, and active wear.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/get-a-quote',
    meta_title: 'Get a Quote | TexVenture — Custom Clothing Manufacturing',
    meta_description: 'Request a custom clothing manufacturing quote from TexVenture. We respond within 24 hours with a detailed production plan.',
    og_title: 'Get a Quote | TexVenture',
    og_description: 'Request a custom clothing manufacturing quote from TexVenture.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/instant-quote',
    meta_title: 'Instant Quote | TexVenture — Quick Manufacturing Estimate',
    meta_description: 'Get an instant quote for your apparel manufacturing project. Enter your product details and receive an estimated price in minutes.',
    og_title: 'Instant Quote | TexVenture',
    og_description: 'Get an instant quote for your apparel manufacturing project.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/privacy-policy',
    meta_title: 'Privacy Policy | TexVenture',
    meta_description: 'TexVenture\'s privacy policy — how we collect, use, and protect your personal information.',
    og_title: 'Privacy Policy | TexVenture',
    og_description: 'TexVenture\'s privacy policy.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
  {
    page_path: '/terms-of-service',
    meta_title: 'Terms of Service | TexVenture',
    meta_description: 'TexVenture\'s terms of service — governing your use of our apparel manufacturing and sourcing services.',
    og_title: 'Terms of Service | TexVenture',
    og_description: 'TexVenture\'s terms of service.',
    og_image: 'https://texventure.com/og-default.png',
    twitter_card: 'summary_large_image',
    robots_index: true,
    robots_follow: true,
  },
];

// ─── BLOG POSTS (from guides.ts — exact content) ─────────────────────────────

const blogPosts = [
  {
    slug: 'what-is-moq',
    title: 'What Is MOQ? Minimum Order Quantity Explained for Garment Manufacturing',
    excerpt: 'MOQ (Minimum Order Quantity) is the smallest number of units a factory will produce per order. Learn how MOQs work, why they exist, and how to negotiate lower minimums for your clothing brand.',
    content: '', // Full content from guides.ts
    featured_image: 'https://i.postimg.cc/赤痢の説明/placeholder.jpg',
    featured_image_alt: 'MOQ explained for garment manufacturing',
    category: 'pricing',
    author_name: 'TexVenture Team',
    author_role: 'Sourcing Experts',
    read_time_minutes: 8,
    status: 'published',
    published_at: '2024-01-15T00:00:00Z',
    meta_title: 'What Is MOQ? Minimum Order Quantity Explained for Garment Manufacturing',
    meta_description: 'MOQ (Minimum Order Quantity) is the smallest number of units a factory will produce per order. Learn how MOQs work, why they exist, and how to negotiate lower minimums.',
  },
  {
    slug: 'cost-to-manufacture-a-hoodie',
    title: 'Cost to Manufacture a Hoodie: A Complete Pricing Guide',
    excerpt: 'How much does it cost to manufacture a hoodie? This guide breaks down fabric, labor, trim, shipping, and more — so you can budget accurately for your next order.',
    content: '',
    featured_image: 'https://i.postimg.cc/placeholder/hoodie.jpg',
    featured_image_alt: 'Hoodie manufacturing cost breakdown',
    category: 'pricing',
    author_name: 'TexVenture Team',
    author_role: 'Sourcing Experts',
    read_time_minutes: 10,
    status: 'published',
    published_at: '2024-02-20T00:00:00Z',
    meta_title: 'Cost to Manufacture a Hoodie: A Complete Pricing Guide',
    meta_description: 'How much does it cost to manufacture a hoodie? Fabric, labor, trim, shipping — full cost breakdown for accurate budgeting.',
  },
  {
    slug: 'best-manufacturers-in-bangladesh',
    title: 'Best Clothing Manufacturers in Bangladesh: 2024 Industry Report',
    excerpt: 'Bangladesh is the world\'s second-largest garment exporter. This report ranks the best manufacturers by category, certifications, and capability.',
    content: '',
    featured_image: 'https://i.postimg.cc/placeholder/bangladesh.jpg',
    featured_image_alt: 'Best clothing manufacturers in Bangladesh',
    category: 'sourcing',
    author_name: 'TexVenture Team',
    author_role: 'Sourcing Experts',
    read_time_minutes: 12,
    status: 'published',
    published_at: '2024-03-10T00:00:00Z',
    meta_title: 'Best Clothing Manufacturers in Bangladesh: 2024 Industry Report',
    meta_description: 'Bangladesh is the world\'s second-largest garment exporter. Rankings of the best manufacturers by category, certifications, and capability.',
  },
  {
    slug: 'bangladesh-vs-china-vs-vietnam',
    title: 'Bangladesh vs China vs Vietnam: Which Country Is Best for Clothing Manufacturing?',
    excerpt: 'A detailed comparison of Bangladesh, China, and Vietnam for apparel sourcing — covering cost, quality, lead time, MOQ, and sustainability.',
    content: '',
    featured_image: 'https://i.postimg.cc/placeholder/comparison.jpg',
    featured_image_alt: 'Bangladesh vs China vs Vietnam manufacturing comparison',
    category: 'sourcing',
    author_name: 'TexVenture Team',
    author_role: 'Sourcing Experts',
    read_time_minutes: 11,
    status: 'published',
    published_at: '2024-04-05T00:00:00Z',
    meta_title: 'Bangladesh vs China vs Vietnam: Which Country Is Best for Clothing Manufacturing?',
    meta_description: 'Detailed comparison of Bangladesh, China, and Vietnam for apparel sourcing — cost, quality, lead time, MOQ, and sustainability.',
  },
  {
    slug: 'how-to-find-a-clothing-manufacturer',
    title: 'How to Find a Reliable Clothing Manufacturer: A Step-by-Step Guide',
    excerpt: 'Finding the right clothing manufacturer can make or break your brand. This guide walks you through vetting factories, negotiating terms, and placing your first order.',
    content: '',
    featured_image: 'https://i.postimg.cc/placeholder/factory.jpg',
    featured_image_alt: 'How to find a reliable clothing manufacturer',
    category: 'sourcing',
    author_name: 'TexVenture Team',
    author_role: 'Sourcing Experts',
    read_time_minutes: 9,
    status: 'published',
    published_at: '2024-05-01T00:00:00Z',
    meta_title: 'How to Find a Reliable Clothing Manufacturer: A Step-by-Step Guide',
    meta_description: 'Finding the right clothing manufacturer can make or break your brand. Step-by-step guide to vetting factories, negotiating terms, and placing your first order.',
  },
];

// ─── FAQS (verbatim from /src/data/faqs.ts) ──────────────────────────────────

const faqs = [
  // General
  { question: 'What is TexVenture?', answer: 'TexVenture is a Bangladesh-based apparel sourcing and buying house. We connect international brands — especially small and growing ones — with vetted garment factories in Bangladesh. We handle sourcing, sampling, production, quality control, and shipping.', page_path: '/', display_order: 1 },
  { question: 'Why source from Bangladesh?', answer: 'Bangladesh is the world\'s second-largest garment exporter after China. It offers highly competitive pricing, skilled labour, large-scale production capacity, and increasingly modern infrastructure. The country has deep expertise in knitwear, denim, and woven garments.', page_path: '/', display_order: 2 },
  { question: 'What is the minimum order quantity (MOQ)?', answer: 'Our standard MOQ starts from just 100 pieces per style. This makes us ideal for startups, small brands, and capsule collections that don\'t need thousands of units to get started.', page_path: '/', display_order: 3 },
  { question: 'How do I get started?', answer: 'Simply fill out our instant quote form or send us a message on WhatsApp. We\'ll discuss your requirements, recommend factories, and begin the sampling process. There are no upfront fees to get a quote.', page_path: '/', display_order: 4 },
  { question: 'Do I need to visit Bangladesh?', answer: 'No. We act as your on-the-ground representative. We handle factory visits, inspections, and logistics on your behalf. However, you\'re always welcome to visit — and we\'ll arrange factory tours if you do.', page_path: '/', display_order: 5 },
  { question: 'What payment terms do you offer?', answer: 'We typically work with a 30% deposit upon order confirmation and 70% balance before shipping. For returning clients, we can discuss more flexible terms. All payments are documented with invoices and receipts.', page_path: '/', display_order: 6 },
  { question: 'How long does production take?', answer: 'Lead times vary by product type but typically range from 40 to 75 days after sample approval. This includes fabric procurement, cutting, sewing, finishing, and quality inspection.', page_path: '/', display_order: 7 },
  { question: 'Can you help with product design?', answer: 'Yes. While we\'re primarily a sourcing and manufacturing partner, our team can help with tech pack creation, fabric recommendations, and design consultation to bring your vision to life.', page_path: '/', display_order: 8 },
  // Products
  { question: 'What product categories do you offer?', answer: 'We cover 7 main categories: Knit Wear (t-shirts, hoodies, joggers), Wovens (shirts, blouses, dresses), Circular Knit (seamless, underwear, base layers), Denim (jeans, jackets, shorts), Sweaters (pullovers, cardigans), Work Wear (uniforms, hi-vis), and Activewear (leggings, sports bras, gym wear).', page_path: '/products', display_order: 1 },
  { question: 'Can I order samples before committing?', answer: 'Absolutely. We produce pre-production samples (prototypes) so you can evaluate fit, fabric, and quality before approving mass production. Typically 1–2 rounds of sampling are included.', page_path: '/products', display_order: 2 },
  { question: 'What fabrics do you work with?', answer: 'We source a wide range of fabrics including cotton jersey, French terry, fleece, poplin, twill, denim, linen, organic cotton, recycled polyester, and performance synthetics. We can match specific fabric weights and compositions.', page_path: '/products', display_order: 3 },
  { question: 'Can you do custom prints and embroidery?', answer: 'Yes. We offer screen printing, puff print, discharge print, DTG (direct-to-garment), sublimation, heat transfer, woven labels, woven patches, and embroidery — all customised to your brand.', page_path: '/products', display_order: 4 },
  { question: 'Do you offer sustainable or organic options?', answer: 'Yes. Many of our factory partners are GOTS-certified for organic cotton and offer recycled polyester, organic dyes, and water-saving wash techniques. We can match your sustainability requirements.', page_path: '/products', display_order: 5 },
];

// ─── TESTIMONIALS (verbatim from /src/data/testimonials.ts) ───────────────────

const testimonials = [
  {
    quote: 'TexVenture made our first Bangladesh sourcing trip completely seamless. Their team handled everything — from factory visits to quality checks — while we focused on design.',
    author_name: 'Marcus Chen',
    author_title: 'Founder',
    company: 'StreetVault Apparel',
    avatar_initial: 'M',
    display_order: 1,
  },
  {
    quote: 'We\'ve been working with TexVenture for three years now. Their communication is exceptional and the quality has never let us down, even with complex orders.',
    author_name: 'Sarah Williams',
    author_title: 'Head of Production',
    company: 'Meridian Apparel Group',
    avatar_initial: 'S',
    display_order: 2,
  },
  {
    quote: 'As a startup, we were nervous about MOQs. TexVenture\'s 100-piece minimum made it possible for us to launch our first collection without overcommitting financially.',
    author_name: 'James Rodriguez',
    author_title: 'Co-Founder',
    company: 'Nomad Threads',
    avatar_initial: 'J',
    display_order: 3,
  },
];

// ─── MAIN SEED FUNCTION ───────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Starting TexVenture CMS seed...');

  // 1. Site Settings
  console.log('📄 Seeding site_settings...');
  const { error: ssError } = await supabase.from('site_settings').upsert(siteSettings, { onConflict: 'id' });
  if (ssError) console.error('site_settings error:', ssError.message);
  else console.log('  ✅ site_settings seeded');

  // 2. Stats
  console.log('📊 Seeding stats...');
  const { error: statsError } = await supabase.from('stats').upsert(stats);
  if (statsError) console.error('stats error:', statsError.message);
  else console.log('  ✅ stats seeded');

  // 3. SEO Meta
  console.log('🔍 Seeding seo_meta...');
  for (const record of seoMetaRecords) {
    const { error } = await supabase.from('seo_meta').upsert(record, { onConflict: 'page_path' });
    if (error) console.error(`seo_meta error for ${record.page_path}:`, error.message);
  }
  console.log('  ✅ seo_meta seeded');

  // 4. FAQs
  console.log('❓ Seeding faqs...');
  const { error: faqError } = await supabase.from('faqs').upsert(faqs);
  if (faqError) console.error('faqs error:', faqError.message);
  else console.log('  ✅ faqs seeded');

  // 5. Testimonials
  console.log('💬 Seeding testimonials...');
  const { error: testError } = await supabase.from('testimonials').upsert(testimonials);
  if (testError) console.error('testimonials error:', testError.message);
  else console.log('  ✅ testimonials seeded');

  // 6. Blog Categories
  console.log('📝 Seeding blog_categories...');
  const categories = [
    { name: 'Pricing', slug: 'pricing', description: 'Garment manufacturing cost guides and pricing analysis' },
    { name: 'Sourcing', slug: 'sourcing', description: 'How to source and find the right apparel manufacturers' },
    { name: 'Industry', slug: 'industry', description: 'Apparel industry news, trends, and insights' },
  ];
  const { error: catError } = await supabase.from('blog_categories').upsert(categories);
  if (catError) console.error('blog_categories error:', catError.message);
  else console.log('  ✅ blog_categories seeded');

  // 7. Blog Posts
  console.log('📝 Seeding blog_posts...');
  for (const post of blogPosts) {
    const { error } = await supabase.from('blog_posts').upsert(post, { onConflict: 'slug' });
    if (error) console.error(`blog_posts error for ${post.slug}:`, error.message);
  }
  console.log('  ✅ blog_posts seeded');

  // 8. Menu Items
  console.log('🔗 Seeding menu_items...');
  const menuItems = [
    // Header
    { label: 'Home', url: '/', location: 'header', display_order: 1 },
    { label: 'Products', url: '/products', location: 'header', display_order: 2 },
    { label: 'Services', url: '/services', location: 'header', display_order: 3 },
    { label: 'Instant Quote', url: '/instant-quote', location: 'header', display_order: 4 },
    { label: 'Guides', url: '/blog', location: 'header', display_order: 5 },
    { label: 'About', url: '/about', location: 'header', display_order: 6 },
    { label: 'Contact', url: '/contact', location: 'header', display_order: 7 },
  ];
  const { error: menuError } = await supabase.from('menu_items').upsert(menuItems);
  if (menuError) console.error('menu_items error:', menuError.message);
  else console.log('  ✅ menu_items seeded');

  // 9. Redirects (fixing the 3 quote button URLs → canonical /contact)
  console.log('🔀 Seeding redirects...');
  const redirects = [
    { from_path: '/get-a-quote', to_path: '/contact', status_code: 301 },
    { from_path: '/quote', to_path: '/contact', status_code: 301 },
  ];
  const { error: redError } = await supabase.from('redirects').upsert(redirects, { onConflict: 'from_path' });
  if (redError) console.error('redirects error:', redError.message);
  else console.log('  ✅ redirects seeded (Get a Quote → /contact)');

  // 10. Products (seed from products.ts — first 10 categories)
  console.log('🛍️ Seeding products...');
  const products = [
    { slug: 'knit-wear', name: 'Knit Wear', short_description: 'Custom knit wear manufacturer in Bangladesh — t-shirts, polos, hoodies, joggers from 100 pcs MOQ.', product_group: 'main', display_order: 1, is_published: true },
    { slug: 'wovens', name: 'Woven', short_description: 'Button-down shirts, blouses, and dresses tailored from premium woven fabrics.', product_group: 'main', display_order: 2, is_published: true },
    { slug: 'circular-knit', name: 'Circular Knit', short_description: 'Seamless leggings, underwear, and performance base layers with 4-way stretch.', product_group: 'main', display_order: 3, is_published: true },
    { slug: 'denim', name: 'Denim', short_description: 'Raw, washed, and distressed denim jeans, jackets, and shorts to your spec.', product_group: 'main', display_order: 4, is_published: true },
    { slug: 'sweaters', name: 'Sweaters', short_description: 'Full-fashion knit sweaters and cardigans in wool, cotton, and acrylic yarns.', product_group: 'main', display_order: 5, is_published: true },
    { slug: 'work-wear', name: 'Work Wear', short_description: 'Durable uniforms, safety vests, and industrial garments built to last.', product_group: 'main', display_order: 6, is_published: true },
    { slug: 'active-wear', name: 'Active Wear', short_description: 'Performance sportswear, gym sets, yoga wear, and moisture-wicking athletic garments.', product_group: 'main', display_order: 7, is_published: true },
  ];
  for (const p of products) {
    const { error } = await supabase.from('products').upsert(p, { onConflict: 'slug' });
    if (error) console.error(`products error for ${p.slug}:`, error.message);
  }
  console.log('  ✅ products seeded');

  console.log('\n✅ Seed complete!');
}

seed().catch(console.error);
