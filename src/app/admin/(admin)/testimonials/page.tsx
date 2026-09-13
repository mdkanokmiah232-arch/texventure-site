'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_title: string;
  company: string;
  avatar_initial: string;
  display_order: number;
  is_published: boolean;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<Testimonial | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<Testimonial>>({});

  useEffect(() => { loadTestimonials(); }, []);

  async function loadTestimonials() {
    try {
      const res = await fetch('/api/admin/testimonials');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch { toast.error('Failed to load'); } finally { setLoading(false); }
  }

  function openNew() {
    setEditItem(null);
    setFormData({ quote: '', author_name: '', author_title: '', company: '', avatar_initial: '', display_order: 0, is_published: true });
    setShowModal(true);
  }

  function openEdit(t: Testimonial) {
    setEditItem(t);
    setFormData({ ...t });
    setShowModal(true);
  }

  function updateField(field: keyof Testimonial, value: unknown) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const method = editItem ? 'PUT' : 'POST';
      const url = editItem ? `/api/admin/testimonials/${editItem.id}` : '/api/admin/testimonials';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error();
      toast.success(editItem ? 'Updated!' : 'Created!');
      setShowModal(false);
      await loadTestimonials();
    } catch { toast.error('Failed to save'); } finally { setSaving(false); }
  }

  async function handleDelete(t: Testimonial) {
    if (!confirm(`Delete testimonial from "${t.author_name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/testimonials/${t.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      toast.success('Deleted');
      await loadTestimonials();
    } catch { toast.error('Failed to delete'); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">Testimonials</h1>
          <p className="mt-1 text-sm text-gray-500">Manage customer testimonials.</p>
        </div>
        <button onClick={openNew} className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] transition">+ Add Testimonial</button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading…</div>
        ) : testimonials.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">No testimonials yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-600">Author</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Company</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Order</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {testimonials.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#08CCD4]/20 text-[#08CCD4] flex items-center justify-center text-xs font-bold shrink-0">
                        {t.avatar_initial || t.author_name?.[0]?.toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{t.author_name}</p>
                        <p className="text-xs text-gray-500">{t.author_title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{t.company}</td>
                  <td className="px-6 py-4 text-gray-500">{t.display_order}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${t.is_published ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {t.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => openEdit(t)} className="text-xs font-medium text-[#08CCD4] hover:underline">Edit</button>
                      <button onClick={() => handleDelete(t)} className="text-xs font-medium text-red-500 hover:underline">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">{editItem ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Quote *</label>
                <textarea value={formData.quote || ''} onChange={e => updateField('quote', e.target.value)} rows={4}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                  placeholder="The testimonial quote…" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Author Name *</label>
                  <input type="text" value={formData.author_name || ''} onChange={e => updateField('author_name', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Avatar Initial</label>
                  <input type="text" value={formData.avatar_initial || ''} onChange={e => updateField('avatar_initial', e.target.value.slice(0, 1))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                    placeholder="J" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Job Title</label>
                  <input type="text" value={formData.author_title || ''} onChange={e => updateField('author_title', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Company</label>
                  <input type="text" value={formData.company || ''} onChange={e => updateField('company', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
                  <input type="number" value={formData.display_order || 0} onChange={e => updateField('display_order', Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" checked={formData.is_published ?? true} onChange={e => updateField('is_published', e.target.checked)}
                      className="rounded border-gray-300 text-[#08CCD4] focus:ring-[#08CCD4]" />
                    Published
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">Cancel</button>
              <button onClick={handleSave} disabled={saving}
                className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition">
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
