import type { MetadataRoute } from 'next';
import { createClientSupabase } from '@/lib/supabase';
import { getAllProductSlugs } from '@/data/products';
import { guides } from '@/data/guides';

const SITE_URL = 'https://texventure.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/certifications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/esg-transparency`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/get-a-quote`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/instant-quote`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/private-label-clothing-manufacturer-bangladesh`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/streetwear-manufacturer-bangladesh`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/custom-clothing-manufacturer-bangladesh`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Fetch blog posts from DB, fall back to static guides
  let blogPages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${SITE_URL}/blog/${guide.slug}`,
    lastModified: new Date(guide.updatedAt || guide.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  try {
    const supabase = createClientSupabase();
    const { data: dbPosts } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_at')
      .eq('status', 'published');
    if (dbPosts && dbPosts.length > 0) {
      blogPages = dbPosts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch {
    // Use static guides as fallback
  }

  // Fetch product slugs from DB, fall back to static data
  let productPages: MetadataRoute.Sitemap = getAllProductSlugs().map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  try {
    const supabase = createClientSupabase();
    const { data: dbProducts } = await supabase
      .from('products')
      .select('slug, updated_at')
      .eq('is_visible', true);
    if (dbProducts && dbProducts.length > 0) {
      productPages = dbProducts.map((product) => ({
        url: `${SITE_URL}/products/${product.slug}`,
        lastModified: new Date(product.updated_at || now),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }));
    }
  } catch {
    // Use static product slugs as fallback
  }

  return [...staticPages, ...blogPages, ...productPages];
}
