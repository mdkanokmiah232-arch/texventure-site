'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface MenuItem {
  id: string;
  label: string;
  url: string;
  location: string;
  parent_id: string | null;
  display_order: number;
  is_external: boolean;
  is_visible: boolean;
}

const LOCATIONS = ['header', 'footer_products', 'footer_company', 'footer_resources', 'footer_categories'];

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<MenuItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<MenuItem>>({});

  useEffect(() => { loadItems(); }, []);

  async function loadItems() {
    try {
      const res = await fetch('/api/admin/menu');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(data.items || []);
    } catch { toast.error('Failed to load menu items'); } finally { setLoading(false); }
  }

  function openNew(location = 'header') {
    setEditItem(null);
    setFormData({ label: '', url: '', location, parent_id: null, display_order: 0, is_external: false, is_visible: true });
    setShowModal(true);
  }

  function openEdit(item: MenuItem) {
    setEditItem(item);
    setFormData({ ...item });
    setShowModal(true);
  }

  function updateField(field: keyof MenuItem, value: unknown) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const method = editItem ? 'PUT' : 'POST';
      const url = editItem ? `/api/admin/menu/${editItem.id}` : '/api/admin/menu';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error();
      toast.success(editItem ? 'Updated!' : 'Created!');
      setShowModal(false);
      await loadItems();
    } catch { toast.error('Failed to save'); } finally { setSaving(false); }
  }

  async function handleDelete(item: MenuItem) {
    if (!confirm(`Delete "${item.label}"?`)) return;
    try {
      const res = await fetch(`/api/admin/menu/${item.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      toast.success('Deleted');
      await loadItems();
    } catch { toast.error('Failed to delete'); }
  }

  async function moveUp(item: MenuItem) {
    const sameLocation = items.filter(i => i.location === item.location && i.is_visible);
    const idx = sameLocation.findIndex(i => i.id === item.id);
    if (idx <= 0) return;
    const prev = sameLocation[idx - 1];
    await fetch(`/api/admin/menu/${item.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ display_order: prev.display_order + 1 }) });
    await loadItems();
  }

  async function moveDown(item: MenuItem) {
    const sameLocation = items.filter(i => i.location === item.location && i.is_visible);
    const idx = sameLocation.findIndex(i => i.id === item.id);
    if (idx >= sameLocation.length - 1) return;
    const next = sameLocation[idx + 1];
    await fetch(`/api/admin/menu/${item.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ display_order: next.display_order - 1 }) });
    await loadItems();
  }

  const grouped = LOCATIONS.reduce((acc, loc) => {
    acc[loc] = items.filter(i => i.location === loc).sort((a, b) => a.display_order - b.display_order);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const locationLabels: Record<string, string> = {
    header: 'Header Navigation',
    footer_products: 'Footer Products',
    footer_company: 'Footer Company',
    footer_resources: 'Footer Resources',
    footer_categories: 'Footer Categories',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1B2A4A]">Menu Items</h1>
        <p className="mt-1 text-sm text-gray-500">Manage header and footer navigation. Drag to reorder.</p>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">Loading…</div>
      ) : (
        <div className="space-y-6">
          {LOCATIONS.map(location => (
            <div key={location} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-[#1B2A4A]">{locationLabels[location]}</h2>
                <button onClick={() => openNew(location)}
                  className="rounded-lg bg-[#1B2A4A] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1e3357] transition">
                  + Add Item
                </button>
              </div>
              {grouped[location]?.length === 0 ? (
                <div className="p-6 text-center text-gray-400 text-sm">No items. Add one above.</div>
              ) : (
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-50">
                    {grouped[location]?.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition">
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-300 text-xs">≡</span>
                            <div>
                              <p className="font-medium text-gray-900">{item.label}</p>
                              <p className="text-xs text-gray-400">{item.url}</p>
                            </div>
                            {item.is_external && <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">ext</span>}
                          </div>
                        </td>
                        <td className="px-6 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => moveUp(item)} disabled={idx === 0}
                              className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs">↑</button>
                            <button onClick={() => moveDown(item)} disabled={idx === grouped[location].length - 1}
                              className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs">↓</button>
                            <button onClick={() => openEdit(item)} className="text-xs font-medium text-[#08CCD4] hover:underline">Edit</button>
                            <button onClick={() => handleDelete(item)} className="text-xs font-medium text-red-500 hover:underline">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">{editItem ? 'Edit Menu Item' : 'Add Menu Item'}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Label *</label>
                <input type="text" value={formData.label || ''} onChange={e => updateField('label', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">URL *</label>
                <input type="text" value={formData.url || ''} onChange={e => updateField('url', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Location</label>
                <select value={formData.location || 'header'} onChange={e => updateField('location', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20">
                  {LOCATIONS.map(l => <option key={l} value={l}>{locationLabels[l]}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
                  <input type="number" value={formData.display_order || 0} onChange={e => updateField('display_order', Number(e.target.value))}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
                <div className="flex flex-col gap-2 pt-5">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" checked={formData.is_external ?? false} onChange={e => updateField('is_external', e.target.checked)}
                      className="rounded border-gray-300 text-[#08CCD4] focus:ring-[#08CCD4]" />
                    External Link
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" checked={formData.is_visible ?? true} onChange={e => updateField('is_visible', e.target.checked)}
                      className="rounded border-gray-300 text-[#08CCD4] focus:ring-[#08CCD4]" />
                    Visible
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
