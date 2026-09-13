-- ADMIN_USERS
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('owner', 'editor')),
  is_active BOOLEAN NOT NULL DEFAULT true,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "No select" ON public.admin_users FOR SELECT USING (false);
CREATE POLICY "No insert" ON public.admin_users FOR INSERT WITH CHECK (false);
CREATE POLICY "No update" ON public.admin_users FOR UPDATE USING (false);
CREATE POLICY "No delete" ON public.admin_users FOR DELETE USING (false);

-- SEO_META
CREATE TABLE IF NOT EXISTS public.seo_meta (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path TEXT UNIQUE NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  canonical_url TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  og_type TEXT DEFAULT 'website',
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image TEXT,
  twitter_card TEXT DEFAULT 'summary_large_image',
  robots_index BOOLEAN DEFAULT true,
  robots_follow BOOLEAN DEFAULT true,
  json_ld_schema JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID
);
ALTER TABLE public.seo_meta ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.seo_meta FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.seo_meta FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin write" ON public.seo_meta FOR UPDATE USING (true);

-- PAGE_SECTIONS
CREATE TABLE IF NOT EXISTS public.page_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path TEXT NOT NULL,
  section_key TEXT NOT NULL,
  eyebrow TEXT,
  heading TEXT,
  subheading TEXT,
  body TEXT,
  button1_text TEXT,
  button1_link TEXT,
  button2_text TEXT,
  button2_link TEXT,
  image_url TEXT,
  image_alt TEXT,
  extra_data JSONB DEFAULT '{}',
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(page_path, section_key)
);
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.page_sections FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.page_sections FOR ALL USING (true);

-- STATS
CREATE TABLE IF NOT EXISTS public.stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true
);
ALTER TABLE public.stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.stats FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.stats FOR ALL USING (true);

-- FEATURE_CARDS
CREATE TABLE IF NOT EXISTS public.feature_cards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  icon TEXT,
  title TEXT NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true
);
ALTER TABLE public.feature_cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.feature_cards FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.feature_cards FOR ALL USING (true);

-- PROCESS_STEPS
CREATE TABLE IF NOT EXISTS public.process_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  step_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  button_text TEXT,
  button_link TEXT,
  display_order INTEGER DEFAULT 0
);
ALTER TABLE public.process_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.process_steps FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.process_steps FOR ALL USING (true);

-- BRANDS
CREATE TABLE IF NOT EXISTS public.brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  logo_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true
);
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.brands FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.brands FOR ALL USING (true);

-- PRODUCTS
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_description TEXT,
  thumbnail_url TEXT,
  image_alt TEXT,
  full_content TEXT,
  product_group TEXT DEFAULT 'main' CHECK (product_group IN ('main', 'category')),
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.products FOR SELECT USING (is_published = true);
CREATE POLICY "Admin write" ON public.products FOR ALL USING (true);

-- BLOG_CATEGORIES
CREATE TABLE IF NOT EXISTS public.blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT
);
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.blog_categories FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.blog_categories FOR ALL USING (true);

-- BLOG_POSTS
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  featured_image_alt TEXT,
  category_id UUID REFERENCES public.blog_categories(id),
  category TEXT,
  tags TEXT[],
  author_name TEXT,
  author_role TEXT,
  read_time_minutes INTEGER DEFAULT 5,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
  published_at TIMESTAMPTZ,
  scheduled_at TIMESTAMPTZ,
  is_featured BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  og_image TEXT,
  json_ld_schema JSONB,
  created_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Admin write" ON public.blog_posts FOR ALL USING (true);

-- FAQS
CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT,
  page_path TEXT DEFAULT '/',
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true
);
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.faqs FOR SELECT USING (is_published = true);
CREATE POLICY "Admin write" ON public.faqs FOR ALL USING (true);

-- TESTIMONIALS
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_title TEXT,
  company TEXT,
  avatar_initial TEXT,
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true
);
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.testimonials FOR SELECT USING (is_published = true);
CREATE POLICY "Admin write" ON public.testimonials FOR ALL USING (true);

-- MEDIA
CREATE TABLE IF NOT EXISTS public.media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  alt_text TEXT,
  width INTEGER,
  height INTEGER,
  file_size INTEGER,
  mime_type TEXT,
  uploaded_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.media FOR SELECT USING (true);
CREATE POLICY "Admin write" ON public.media FOR ALL USING (true);

-- MENU_ITEMS
CREATE TABLE IF NOT EXISTS public.menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  location TEXT NOT NULL CHECK (location IN ('header', 'footer_products', 'footer_company', 'footer_resources', 'footer_categories')),
  parent_id UUID REFERENCES public.menu_items(id),
  display_order INTEGER DEFAULT 0,
  is_external BOOLEAN DEFAULT false,
  is_visible BOOLEAN DEFAULT true
);
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.menu_items FOR SELECT USING (is_visible = true);
CREATE POLICY "Owner write" ON public.menu_items FOR ALL USING (true);

-- SITE_SETTINGS
CREATE TABLE IF NOT EXISTS public.site_settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  logo_url TEXT,
  logo_white_url TEXT,
  favicon_url TEXT,
  company_name TEXT DEFAULT 'TexVenture',
  address TEXT,
  phone TEXT,
  email TEXT,
  office_hours TEXT,
  whatsapp_number TEXT,
  whatsapp_message TEXT,
  facebook_url TEXT,
  linkedin_url TEXT,
  footer_description TEXT,
  copyright_text TEXT,
  certification_badges JSONB DEFAULT '[]',
  google_analytics_id TEXT,
  gsc_verification TEXT,
  meta_pixel_id TEXT,
  custom_head_script TEXT,
  custom_body_script TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Owner write" ON public.site_settings FOR ALL USING (true);
INSERT INTO public.site_settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING;

-- FORM_SUBMISSIONS
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_type TEXT NOT NULL CHECK (form_type IN ('contact', 'quote', 'instant_quote')),
  name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  country TEXT,
  product_type TEXT,
  quantity TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  ip_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert" ON public.form_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin read" ON public.form_submissions FOR SELECT USING (true);
CREATE POLICY "Admin update" ON public.form_submissions FOR UPDATE USING (true);

-- REDIRECTS
CREATE TABLE IF NOT EXISTS public.redirects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  from_path TEXT UNIQUE NOT NULL,
  to_path TEXT NOT NULL,
  status_code INTEGER DEFAULT 301,
  is_active BOOLEAN DEFAULT true,
  hit_count INTEGER DEFAULT 0
);
ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.redirects FOR SELECT USING (is_active = true);
CREATE POLICY "Owner write" ON public.redirects FOR ALL USING (true);

-- UPDATED_AT trigger function
CREATE OR REPLACE FUNCTION update_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER tr_admin_users_updated_at BEFORE UPDATE ON public.admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_seo_meta_updated_at BEFORE UPDATE ON public.seo_meta FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_page_sections_updated_at BEFORE UPDATE ON public.page_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_site_settings_updated_at BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
