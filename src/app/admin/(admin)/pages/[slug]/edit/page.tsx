'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface Section {
  id: string;
  page_path: string;
  section_key: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  body: string;
  button1_text: string;
  button1_link: string;
  button2_text: string;
  button2_link: string;
  image_url: string;
  image_alt: string;
  display_order: number;
  is_visible: boolean;
}

export default function AdminPageSectionsEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const decodedSlug = decodeURIComponent(slug);
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<Section>>({});

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/admin/pages/${encodeURIComponent(decodedSlug)}`);
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setSections(data.sections || []);
        if (data.sections?.length > 0) {
          setFormData(data.sections[0]);
        }
      } catch {
        toast.error('Failed to load page sections');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [decodedSlug]);

  function updateField(field: keyof Section, value: unknown) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/pages/${encodeURIComponent(decodedSlug)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Save failed');
      toast.success('Page sections saved!');
      router.push('/admin/pages');
      router.refresh();
    } catch {
      toast.error('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => router.back()} className="text-sm text-gray-500 hover:text-[#1B2A4A] mb-2">← Back</button>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">Edit Page: {decodedSlug}</h1>
          <p className="mt-1 text-sm text-gray-500">Edit the content sections for this page.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-[#1B2A4A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">Loading…</div>
      ) : sections.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">
          No sections found for this page.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
              <p className="text-xs font-semibold text-[#08CCD4] uppercase tracking-wide mb-4">
                Section: {section.section_key}
              </p>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Eyebrow</label>
              <input type="text" value={formData.eyebrow || ''} onChange={e => updateField('eyebrow', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Heading</label>
              <input type="text" value={formData.heading || ''} onChange={e => updateField('heading', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Subheading</label>
              <input type="text" value={formData.subheading || ''} onChange={e => updateField('subheading', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Body</label>
              <textarea value={formData.body || ''} onChange={e => updateField('body', e.target.value)} rows={5}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Button 1 Text</label>
              <input type="text" value={formData.button1_text || ''} onChange={e => updateField('button1_text', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Button 1 Link</label>
              <input type="text" value={formData.button1_link || ''} onChange={e => updateField('button1_link', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Button 2 Text</label>
              <input type="text" value={formData.button2_text || ''} onChange={e => updateField('button2_text', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Button 2 Link</label>
              <input type="text" value={formData.button2_link || ''} onChange={e => updateField('button2_link', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Image URL</label>
              <input type="text" value={formData.image_url || ''} onChange={e => updateField('image_url', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Image Alt</label>
              <input type="text" value={formData.image_alt || ''} onChange={e => updateField('image_alt', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
