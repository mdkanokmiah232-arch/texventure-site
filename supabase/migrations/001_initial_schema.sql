-- ============================================================
-- TexVenture CMS - Initial Schema Migration
-- ============================================================
-- Run this in your Supabase SQL editor to set up the database.

-- ============================================================
-- ADMIN_USERS
-- ============================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username    TEXT UNIQUE NOT NULL,
  email       TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role        TEXT NOT NULL DEFAULT 'admin',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- BLOG_POSTS
-- ============================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title                TEXT NOT NULL,
  slug                 TEXT UNIQUE NOT NULL,
  excerpt              TEXT,
  content              TEXT,
  featured_image       TEXT,
  category             TEXT,
  tags                 TEXT[] DEFAULT '{}',
  author_name          TEXT,
  author_role          TEXT,
  published_at         TIMESTAMPTZ,
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status               TEXT NOT NULL DEFAULT 'draft',
  meta_title           TEXT,
  meta_description     TEXT,
  read_time_minutes    INTEGER DEFAULT 5,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PAGE_SEO
-- ============================================================
CREATE TABLE IF NOT EXISTS page_seo (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path       TEXT UNIQUE NOT NULL,
  meta_title      TEXT,
  meta_description TEXT,
  og_title        TEXT,
  og_description  TEXT,
  canonical_url   TEXT,
  robots          TEXT DEFAULT 'index, follow',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx       ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_status_idx     ON blog_posts(status);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx  ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS page_seo_path_idx          ON page_seo(page_path);

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER admin_users_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER page_seo_updated_at
  BEFORE UPDATE ON page_seo
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
