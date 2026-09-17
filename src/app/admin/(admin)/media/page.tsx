'use client';

import { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';

interface MediaItem {
  id: string;
  filename: string;
  url: string;
  alt_text: string;
  width: number | null;
  height: number | null;
  file_size: number | null;
  mime_type: string | null;
  created_at: string;
}

function formatBytes(bytes: number | null) {
  if (!bytes) return '—';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export default function AdminMediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { loadMedia(); }, []);

  async function loadMedia() {
    try {
      const res = await fetch('/api/admin/media');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(data.media || []);
    } catch { toast.error('Failed to load media'); } finally { setLoading(false); }
  }

  async function handleUpload(file: File) {
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File must be under 5MB');
      return;
    }
    if (!file.type.startsWith('image/')) {
      toast.error('Only image files are allowed');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/media/upload', { method: 'POST', body: formData });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Upload failed');
      }
      toast.success('Image uploaded!');
      await loadMedia();
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(item: MediaItem) {
    if (!confirm(`Delete "${item.filename}"?`)) return;
    try {
      const res = await fetch(`/api/admin/media/${item.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      toast.success('Deleted');
      await loadMedia();
    } catch { toast.error('Failed to delete'); }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;
    Array.from(files).forEach(handleUpload);
    e.target.value = '';
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">Media Library</h1>
          <p className="mt-1 text-sm text-gray-500">Upload and manage images. Max 5MB per file.</p>
        </div>
        <div>
          <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition flex items-center gap-2"
          >
            {uploading ? (
              <>Uploading…</>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload Images
              </>
            )}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">Loading…</div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">
          No media yet. Click &quot;Upload Images&quot; to add some.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
              <div className="aspect-square bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <img src={item.url} alt={item.alt_text || item.filename} className="object-cover w-full h-full" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                  <button
                    onClick={() => handleDelete(item)}
                    className="opacity-0 group-hover:opacity-100 transition bg-red-500 text-white rounded-lg px-3 py-1.5 text-xs font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-gray-700 truncate" title={item.filename}>{item.filename}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{formatBytes(item.file_size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
