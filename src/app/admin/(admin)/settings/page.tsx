'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface Settings {
  company_name: string;
  address: string;
  phone: string;
  email: string;
  office_hours: string;
  whatsapp_number: string;
  facebook_url: string;
  linkedin_url: string;
  footer_description: string;
  copyright_text: string;
  google_analytics_id: string;
  gsc_verification: string;
  meta_pixel_id: string;
}

export default function AdminSettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<Settings>({
    company_name: '', address: '', phone: '', email: '', office_hours: '',
    whatsapp_number: '', facebook_url: '', linkedin_url: '', footer_description: '',
    copyright_text: '', google_analytics_id: '', gsc_verification: '', meta_pixel_id: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/settings');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        if (data.settings) setSettings(data.settings);
      } catch { toast.error('Failed to load settings'); } finally { setLoading(false); }
    }
    load();
  }, []);

  function update(field: keyof Settings, value: string) {
    setSettings(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error();
      toast.success('Settings saved!');
    } catch { toast.error('Failed to save settings'); } finally { setSaving(false); }
  }

  if (loading) {
    return <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">Loading…</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">Site Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Configure your site information and integrations.</p>
        </div>
        <button onClick={handleSave} disabled={saving}
          className="rounded-lg bg-[#1B2A4A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition">
          {saving ? 'Saving…' : 'Save Settings'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold text-[#1B2A4A] mb-4">Contact Information</h2>
          <div className="space-y-4">
            {[
              { field: 'company_name' as const, label: 'Company Name' },
              { field: 'address' as const, label: 'Address' },
              { field: 'phone' as const, label: 'Phone' },
              { field: 'email' as const, label: 'Email' },
              { field: 'office_hours' as const, label: 'Office Hours' },
              { field: 'whatsapp_number' as const, label: 'WhatsApp Number' },
            ].map(({ field, label }) => (
              <div key={field}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                <input type="text" value={settings[field]} onChange={e => update(field, e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold text-[#1B2A4A] mb-4">Social & Links</h2>
          <div className="space-y-4">
            {[
              { field: 'facebook_url' as const, label: 'Facebook URL' },
              { field: 'linkedin_url' as const, label: 'LinkedIn URL' },
              { field: 'footer_description' as const, label: 'Footer Description' },
            ].map(({ field, label }) => (
              <div key={field}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                <input type="text" value={settings[field]} onChange={e => update(field, e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
            ))}
          </div>

          <h2 className="font-semibold text-[#1B2A4A] mb-4 mt-6">Analytics & SEO</h2>
          <div className="space-y-4">
            {[
              { field: 'google_analytics_id' as const, label: 'Google Analytics ID', placeholder: 'G-XXXXXXXXXX' },
              { field: 'gsc_verification' as const, label: 'GSC Verification Code' },
              { field: 'meta_pixel_id' as const, label: 'Meta Pixel ID', placeholder: 'XXXXXXXXXX' },
            ].map(({ field, label, placeholder }) => (
              <div key={field}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                <input type="text" value={settings[field]} onChange={e => update(field, e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 lg:col-span-2">
          <h2 className="font-semibold text-[#1B2A4A] mb-4">Legal</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Copyright Text</label>
              <input type="text" value={settings.copyright_text} onChange={e => update('copyright_text', e.target.value)}
                placeholder={`© ${new Date().getFullYear()} TexVenture. All rights reserved.`}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
