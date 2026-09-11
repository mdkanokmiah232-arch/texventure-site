import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SessionUser {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface SessionPayload {
  user: SessionUser;
  exp: number;
}

// ─── Secrets ─────────────────────────────────────────────────────────────────

function getAuthSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('AUTH_SECRET environment variable is not set.');
  return new TextEncoder().encode(secret);
}

// ─── Token Creation / Verification ────────────────────────────────────────────

export async function createSessionToken(user: SessionUser): Promise<string> {
  const secret = getAuthSecret();
  return new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifySessionToken(
  token: string
): Promise<SessionPayload | null> {
  try {
    const secret = getAuthSecret();
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// ─── Cookie Helpers ──────────────────────────────────────────────────────────

const COOKIE_NAME = 'texventure_session';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await verifySessionToken(token);
  if (!payload) return null;

  // Check expiry
  if (payload.exp * 1000 < Date.now()) return null;

  return payload.user;
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, COOKIE_OPTIONS);
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// ─── Request Helpers ─────────────────────────────────────────────────────────

export async function getSessionFromRequest(req: NextRequest): Promise<SessionUser | null> {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await verifySessionToken(token);
  if (!payload) return null;

  if (payload.exp * 1000 < Date.now()) return null;

  return payload.user;
}

// ─── Input Validation ─────────────────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function sanitizeSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

export function sanitizeString(input: string): string {
  return input.replace(/[<>]/g, '').trim().slice(0, 10000);
}
