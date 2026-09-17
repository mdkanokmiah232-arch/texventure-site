'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Submission {
  id: string;
  form_type: 'contact' | 'quote' | 'instant_quote';
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  country: string | null;
  product_type: string | null;
  quantity: string | null;
  message: string | null;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

const FORM_TYPE_LABELS: Record<string, string> = {
  contact: 'Contact Form',
  quote: 'Get a Quote',
  instant_quote: 'Instant Quote',
};

export default function AdminInboxPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selected, setSelected] = useState<Submission | null>(null);

  useEffect(() => { loadSubmissions(); }, []);

  async function loadSubmissions() {
    try {
      const params = new URLSearchParams();
      if (filterType) params.set('form_type', filterType);
      if (filterStatus) params.set('status', filterStatus);
      const res = await fetch(`/api/admin/inbox?${params}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSubmissions(data.submissions || []);
    } catch { toast.error('Failed to load submissions'); } finally { setLoading(false); }
  }

  useEffect(() => { loadSubmissions(); }, [filterType, filterStatus]);

  async function updateStatus(id: string, status: 'read' | 'replied') {
    try {
      const res = await fetch('/api/admin/inbox', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error();
      toast.success('Status updated');
      if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
      await loadSubmissions();
    } catch { toast.error('Failed to update status'); }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this submission? This cannot be undone.')) return;
    try {
      const res = await fetch('/api/admin/inbox', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error();
      toast.success('Deleted');
      if (selected?.id === id) setSelected(null);
      await loadSubmissions();
    } catch { toast.error('Failed to delete'); }
  }

  const unread = submissions.filter(s => s.status === 'new').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1B2A4A]">Form Inbox</h1>
        <p className="mt-1 text-sm text-gray-500">
          {unread > 0 ? <span className="text-red-500 font-medium">{unread} unread</span> : 'All caught up'} — manage form submissions.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select value={filterType} onChange={e => setFilterType(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20">
          <option value="">All Forms</option>
          <option value="contact">Contact</option>
          <option value="quote">Get a Quote</option>
          <option value="instant_quote">Instant Quote</option>
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20">
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading…</div>
        ) : submissions.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">No submissions found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-600">From</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Form</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Subject</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Date</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {submissions.map((s) => (
                <tr key={s.id} className={`hover:bg-gray-50/50 transition cursor-pointer ${s.status === 'new' ? 'bg-blue-50/30' : ''}`}
                  onClick={() => { setSelected(s); if (s.status === 'new') updateStatus(s.id, 'read'); }}>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{s.name || '—'}</p>
                    <p className="text-xs text-gray-500">{s.email || '—'}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{FORM_TYPE_LABELS[s.form_type] || s.form_type}</td>
                  <td className="px-6 py-4 text-gray-700 truncate max-w-xs">{s.message?.slice(0, 60) || s.product_type || '—'}</td>
                  <td className="px-6 py-4 text-gray-400 text-xs">{new Date(s.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      s.status === 'new' ? 'bg-blue-50 text-blue-700' : s.status === 'read' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={(e) => { e.stopPropagation(); updateStatus(s.id, 'replied'); }}
                        className="text-xs font-medium text-[#08CCD4] hover:underline" title="Mark as replied">
                        Mark Replied
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); handleDelete(s.id); }}
                        className="text-xs font-medium text-red-500 hover:underline" title="Delete this submission">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-[#1B2A4A]">Submission Details</h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {FORM_TYPE_LABELS[selected.form_type]} — {new Date(selected.created_at).toLocaleString()}
              </p>
            </div>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              selected.status === 'new' ? 'bg-blue-50 text-blue-700' : selected.status === 'read' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'
            }`}>
              {selected.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {selected.name && <div><p className="text-xs text-gray-500">Name</p><p className="font-medium">{selected.name}</p></div>}
            {selected.email && <div><p className="text-xs text-gray-500">Email</p><p className="font-medium">{selected.email}</p></div>}
            {selected.phone && <div><p className="text-xs text-gray-500">Phone</p><p className="font-medium">{selected.phone}</p></div>}
            {selected.company && <div><p className="text-xs text-gray-500">Company</p><p className="font-medium">{selected.company}</p></div>}
            {selected.country && <div><p className="text-xs text-gray-500">Country</p><p className="font-medium">{selected.country}</p></div>}
            {selected.product_type && <div><p className="text-xs text-gray-500">Product Type</p><p className="font-medium">{selected.product_type}</p></div>}
            {selected.quantity && <div><p className="text-xs text-gray-500">Quantity</p><p className="font-medium">{selected.quantity}</p></div>}
          </div>
          {selected.message && (
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-1">Message</p>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-4">{selected.message}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
