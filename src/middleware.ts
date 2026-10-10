import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { NextRequest } from 'next/server';
import { getProductBySlug } from '@/data/products';

const ADMIN_ROUTES = ['/admin/dashboard', '/admin/blog', '/admin/pages'];
const ADMIN_PREFIXES = ['/admin/blog/', '/admin/api/'];

/* Legacy WordPress URLs -> current pages (all 301) */
const LEGACY_MAP: Record<string, string> = {
  // company / about
  '/home': '/',
  '/about-2': '/about',
  '/about-us': '/about',
  '/company': '/about',
  '/our-process': '/about',
  '/sample-page': '/about',
  '/buying-house': '/about',
  '/portfolio': '/about',
  '/case-studies': '/about',
  '/clients': '/about',
  '/testimonials': '/about',
  // contact
  '/contact-2': '/contact',
  '/contact-us': '/contact',
  '/careers': '/contact',
  // legal
  '/privacy': '/privacy-policy',
  '/privacy-policy-2': '/privacy-policy',
  '/terms-conditions': '/terms-of-service',
  '/tos': '/terms-of-service',
  '/terms': '/terms-of-service',
  '/cookies': '/terms-of-service',
  '/disclaimer': '/terms-of-service',
  '/returns': '/refund-policy',
  '/shipping-policy': '/refund-policy',
  // commerce leftovers
  '/shop': '/products',
  '/cart': '/products',
  '/my-account': '/products',
  '/lookbook': '/products',
  '/size-guide': '/products',
  // blog / feeds
  '/category/blog': '/blog',
  '/feed': '/blog',
  '/blog/feed': '/blog',
  '/news': '/blog',
  '/author/admin': '/blog',
  '/page/2': '/blog',
  '/2024': '/blog',
  '/2025': '/blog',
  '/blog/best-manufacturers-in-bangladesh': '/',
  // misc
  '/login': '/admin/login',
  '/quote': '/get-a-quote',
  '/faq': '/services',
  '/guidelines': '/services',
  '/moq': '/blog/what-is-moq',
  '/pricing': '/instant-quote',
  '/garment-manufacturing': '/custom-clothing-manufacturer-bangladesh',
  '/apparel-manufacturing': '/custom-clothing-manufacturer-bangladesh',
  '/custom-clothing': '/custom-clothing-manufacturer-bangladesh',
  '/private-label': '/private-label-clothing-manufacturer-bangladesh',
  '/streetwear': '/streetwear-manufacturer-bangladesh',
  '/esg': '/esg-transparency',
  '/sustainability': '/esg-transparency',
  '/quality': '/certifications',
  '/sitemap_index.xml': '/sitemap.xml',
  '/wp-sitemap.xml': '/sitemap.xml',
};

function legacyTarget(pathname: string): string | null {
  const exact = LEGACY_MAP[pathname];
  if (exact) return exact;

  // /product-category/<slug>, /product/<slug>, /product-tag/<slug>
  const m = pathname.match(/^\/(?:product-category|product|product-tag)\/([^/]+)\/?$/);
  if (m) {
    const slug = decodeURIComponent(m[1]);
    return getProductBySlug(slug) ? `/products/${slug}` : '/products';
  }
  return null;
}

function isAdminRoute(pathname: string): boolean {
  if (ADMIN_ROUTES.includes(pathname)) return true;
  return ADMIN_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function getJwtSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    // In build/CI environments without AUTH_SECRET, allow through middleware
    // but auth.ts will reject at runtime — this prevents hard crashes during build
    return new TextEncoder().encode('placeholder-build-secret-do-not-use-in-production');
  }
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Legacy WordPress URLs -> 301 permanent redirect to the relevant current page
  const target = legacyTarget(pathname);
  if (target) return NextResponse.redirect(new URL(target, req.url), 301);

  // Only protect admin routes
  if (!isAdminRoute(pathname)) return NextResponse.next();

  // Allow public admin routes through
  if (pathname === '/admin/login') return NextResponse.next();

  const token = req.cookies.get('texventure_session')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    const secret = getJwtSecret();
    const { payload } = await jwtVerify(token, secret);

    // Check expiry
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      const response = NextResponse.redirect(new URL('/admin/login', req.url));
      response.cookies.delete('texventure_session');
      return response;
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL('/admin/login', req.url));
    response.cookies.delete('texventure_session');
    return response;
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/product-category/:path*',
    '/product/:path*',
    '/product-tag/:path*',
    '/(home|about-2|about-us|company|our-process|sample-page|buying-house|portfolio|case-studies|clients|testimonials|contact-2|contact-us|careers|privacy|privacy-policy-2|terms-conditions|tos|terms|cookies|disclaimer|returns|shipping-policy|shop|cart|my-account|lookbook|size-guide|feed|news|2024|2025|login|quote|faq|guidelines|moq|pricing|garment-manufacturing|apparel-manufacturing|custom-clothing|private-label|streetwear|esg|sustainability|quality|sitemap_index.xml|wp-sitemap.xml)',
    '/category/blog',
    '/author/admin',
    '/page/2',
    '/blog/feed',
    '/blog/best-manufacturers-in-bangladesh',
  ],
};
