'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Faq {
  id: string;
  question: string;
  answer: string;
  page_path: string;
  display_order: number;
  is_published: boolean;
}

const PAGE_OPTIONS = ['/', '/about', '/contact', '/products', '/services', '/get-a-quote', '/instant-quote', '/certifications'];

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterPath, setFilterPath] = useState('/');
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<Faq | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<Faq>>({});

  useEffect(() => { loadFaqs(); }, []);

  async function loadFaqs() {
    try {
      const res = await fetch('/api/admin/faqs');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setFaqs(data.faqs || []);
    } catch { toast.error('Failed to load'); } finally { setLoading(false); }
  }

  const filtered = filterPath ? faqs.filter(f => f.page_path === filterPath) : faqs;

  function openNew() {
    setEditItem(null);
    setFormData({ question: '', answer: '', page_path: filterPath || '/', display_order: 0, is_published: true });
    setShowModal(true);
  }

  function openEdit(f: Faq) {
    setEditItem(f);
    setFormData({ ...f });
    setShowModal(true);
  }

  function updateField(field: keyof Faq, value: unknown) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const method = editItem ? 'PUT' : 'POST';
      const url = editItem ? `/api/admin/faqs/${editItem.id}` : '/api/admin/faqs';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error();
      toast.success(editItem ? 'Updated!' : 'Created!');
      setShowModal(false);
      await loadFaqs();
    } catch { toast.error('Failed to save'); } finally { setSaving(false); }
  }

  async function handleDelete(f: Faq) {
    if (!confirm('Delete this FAQ?')) return;
    try {
      const res = await fetch(`/api/admin/faqs/${f.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      toast.success('Deleted');
      await loadFaqs();
    } catch { toast.error('Failed to delete'); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">FAQs</h1>
          <p className="mt-1 text-sm text-gray-500">Manage frequently asked questions.</p>
        </div>
        <button onClick={openNew} className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] transition">+ Add FAQ</button>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-600">Filter by page:</label>
        <select value={filterPath} onChange={e => setFilterPath(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20">
          <option value="">All Pages</option>
          {PAGE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">No FAQs found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-600">Question</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Page</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Order</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{f.question}</td>
                  <td className="px-6 py-4 text-gray-500">{f.page_path}</td>
                  <td className="px-6 py-4 text-gray-500">{f.display_order}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${f.is_published ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {f.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => openEdit(f)} className="text-xs font-medium text-[#08CCD4] hover:underline">Edit</button>
                      <button onClick={() => handleDelete(f)} className="text-xs font-medium text-red-500 hover:underline">Delete</button>
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
              <h2 className="text-lg font-bold text-[#1B2A4A]">{editItem ? 'Edit FAQ' : 'Add FAQ'}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Question *</label>
                <input type="text" value={formData.question || ''} onChange={e => updateField('question', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Answer *</label>
                <textarea value={formData.answer || ''} onChange={e => updateField('answer', e.target.value)} rows={5}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Page Path</label>
                  <select value={formData.page_path || '/'} onChange={e => updateField('page_path', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20">
                    {PAGE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
                  <input type="number" value={formData.display_order || 0} onChange={e => updateField('display_order', Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
                <div className="flex items-center">
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
