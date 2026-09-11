import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

const ADMIN_ROUTES = ['/admin/dashboard', '/admin/blog', '/admin/pages'];
const ADMIN_PREFIXES = ['/admin/blog/', '/admin/api/'];

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
  ],
};
