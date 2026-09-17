'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface AdminUser {
  id: string;
  email: string;
  username: string;
  role: 'owner' | 'editor';
  is_active: boolean;
  created_at: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({ email: '', username: '', password: '', role: 'editor' as 'editor' | 'owner' });

  useEffect(() => { loadUsers(); }, []);

  async function loadUsers() {
    try {
      const res = await fetch('/api/admin/users');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUsers(data.users || []);
    } catch { toast.error('Failed to load users'); } finally { setLoading(false); }
  }

  function updateField(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleInvite() {
    if (!formData.email || !formData.username) {
      toast.error('Email and username are required');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to invite user');
      }
      toast.success('User invited!');
      setShowModal(false);
      setFormData({ email: '', username: '', password: '', role: 'editor' });
      await loadUsers();
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : 'Failed to invite user');
    } finally {
      setSaving(false);
    }
  }

  async function toggleRole(user: AdminUser) {
    if (user.role === 'owner') return;
    const newRole = user.role === 'editor' ? 'owner' : 'editor';
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });
      if (!res.ok) throw new Error();
      toast.success(`Role updated to ${newRole}`);
      await loadUsers();
    } catch { toast.error('Failed to update role'); }
  }

  async function toggleActive(user: AdminUser) {
    if (users.filter(u => u.role === 'owner' && u.is_active).length === 1 && user.role === 'owner' && !user.is_active) {
      toast.error('Cannot deactivate the last owner');
      return;
    }
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: !user.is_active }),
      });
      if (!res.ok) throw new Error();
      toast.success(user.is_active ? 'User deactivated' : 'User activated');
      await loadUsers();
    } catch { toast.error('Failed to update user'); }
  }

  const ownerCount = users.filter(u => u.role === 'owner' && u.is_active).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">User Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage admin users and their roles.</p>
        </div>
        <button onClick={() => setShowModal(true)}
          className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] transition">
          + Invite User
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading…</div>
        ) : users.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">No users found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-600">User</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Role</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Joined</th>
                <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#08CCD4]/20 text-[#08CCD4] flex items-center justify-center text-xs font-bold shrink-0">
                        {user.username?.[0]?.toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.username}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.role === 'owner' ? 'bg-purple-50 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.is_active ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-xs">{new Date(user.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      {user.role !== 'owner' && (
                        <button onClick={() => toggleRole(user)} className="text-xs font-medium text-purple-600 hover:underline" title="Promote to owner">
                          Make Owner
                        </button>
                      )}
                      {user.role === 'owner' && ownerCount > 1 && (
                        <button onClick={() => toggleRole(user)} className="text-xs font-medium text-gray-500 hover:underline">
                          Make Editor
                        </button>
                      )}
                      <button
                        onClick={() => toggleActive(user)}
                        disabled={user.role === 'owner' && ownerCount === 1 && user.is_active}
                        className="text-xs font-medium text-red-500 hover:underline disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        {user.is_active ? 'Deactivate' : 'Activate'}
                      </button>
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
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Invite New User</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Username *</label>
                <input type="text" value={formData.username} onChange={e => updateField('username', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Email *</label>
                <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Password *</label>
                <input type="password" value={formData.password} onChange={e => updateField('password', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Role</label>
                <select value={formData.role} onChange={e => updateField('role', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20">
                  <option value="editor">Editor</option>
                  <option value="owner">Owner</option>
                </select>
                <p className="mt-1 text-xs text-gray-400">Owners can manage settings, menu, and users.</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">Cancel</button>
              <button onClick={handleInvite} disabled={saving}
                className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition">
                {saving ? 'Inviting…' : 'Invite User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
