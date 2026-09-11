-- ============================================================
-- TexVenture CMS - Seed First Admin User
-- ============================================================
-- Run this AFTER 001_initial_schema.sql to create the first admin.
-- Replace 'YOUR_ADMIN_EMAIL' and 'YOUR_ADMIN_PASSWORD' with real values.
--
-- To generate a bcrypt hash from the command line:
--   node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password', 12).then(h => console.log(h))"
--
-- Example output from the command above, then paste the hash below:
-- INSERT INTO admin_users (username, email, password_hash, role)
-- VALUES ('admin', 'admin@texventure.com', '$2a$12$...', 'admin');

-- ═══════════════════════════════════════════════════════════
-- STEP 1: Generate your password hash
-- ═══════════════════════════════════════════════════════════
-- Run this Node command on your local machine:
--
--   node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('CHANGE_ME_123', 12).then(h => console.log(h))"
--
-- Copy the output hash and replace the hash below.
-- ═══════════════════════════════════════════════════════════

INSERT INTO admin_users (username, email, password_hash, role)
VALUES (
  'admin',
  'admin@texventure.com',
  -- REPLACE THIS HASH with the output from the node command above
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4.FOSeBgzjMADmve',
  'admin'
)
ON CONFLICT (email) DO NOTHING;
