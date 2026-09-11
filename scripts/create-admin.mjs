#!/usr/bin/env node
/**
 * TexVenture CMS — Create First Admin User
 * =========================================
 * Run this ONCE after you have set up your Supabase project and
 * have the DATABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment.
 *
 * Usage:
 *   SUPABASE_URL=https://xxx.supabase.co \
 *   SUPABASE_SERVICE_ROLE_KEY=eyJ... \
 *   node scripts/create-admin.mjs
 *
 * Or with dotenv:
 *   node -r dotenv/config scripts/create-admin.mjs
 *
 * After running, the script will output the bcrypt hash you can paste
 * into supabase/migrations/002_seed_admin.sql for future use.
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  // Get credentials from CLI args or prompt
  const args = process.argv.slice(2);
  const emailArg = args.find((a) => a.startsWith('--email='));
  const passwordArg = args.find((a) => a.startsWith('--password='));
  const usernameArg = args.find((a) => a.startsWith('--username='));

  const email = emailArg ? emailArg.replace('--email=', '') : null;
  const password = passwordArg ? passwordArg.replace('--password=', '') : null;
  const username = usernameArg ? usernameArg.replace('--username=', '') : null;

  if (!email || !password || !username) {
    console.error('Usage: node scripts/create-admin.mjs --email=admin@example.com --password=SECRET --username=admin');
    console.error('');
    console.error('Alternatively, set EMAIL, PASSWORD, USERNAME environment variables and re-run without args.');
    process.exit(1);
  }

  console.log(`\nCreating admin user:`);
  console.log(`  Email:    ${email}`);
  console.log(`  Username: ${username}`);
  console.log(`  Role:     admin`);
  console.log('');

  // Hash password
  console.log('Hashing password…');
  const password_hash = await bcrypt.hash(password, 12);
  console.log(`Hash: ${password_hash}`);
  console.log('');

  // Insert
  console.log('Inserting into admin_users table…');
  const { data, error } = await supabase
    .from('admin_users')
    .insert({
      username,
      email: email.toLowerCase().trim(),
      password_hash,
      role: 'admin',
    })
    .select('id, username, email, role, created_at')
    .single();

  if (error) {
    if (error.code === '23505') {
      // Unique violation — user already exists
      console.log('\n⚠️  An admin user with this email already exists.');
      console.log('   Update the existing user instead:');
      console.log(`   UPDATE admin_users SET password_hash = '${password_hash}' WHERE email = '${email}';`);
      process.exit(0);
    }
    console.error('Error inserting user:', error.message);
    process.exit(1);
  }

  console.log('\n✅ Admin user created successfully!');
  console.log('');
  console.log('User details:');
  console.log(`  ID:       ${data.id}`);
  console.log(`  Email:    ${data.email}`);
  console.log(`  Username: ${data.username}`);
  console.log(`  Role:     ${data.role}`);
  console.log(`  Created:  ${data.created_at}`);
  console.log('');
  console.log('You can now log in at /admin/login with these credentials.');
  console.log('');
  console.log('To persist this user for future deployments, add this to supabase/migrations/002_seed_admin.sql:');
  console.log(`
INSERT INTO admin_users (username, email, password_hash, role)
VALUES (
  '${username}',
  '${email}',
  '${password_hash}',
  'admin'
)
ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash;
`);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
