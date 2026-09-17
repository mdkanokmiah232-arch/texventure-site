
INSERT INTO public.admin_users (email, username, password_hash, role, is_active)
VALUES ('admin@texventure.com', 'admin', '$2b$10$1N0vr/Wp8V/cgy4I4FWm7OdUtOV1BdyjyNRO.OIOa./F.5vWkVX.q', 'owner', true)
ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash, role = 'owner';
