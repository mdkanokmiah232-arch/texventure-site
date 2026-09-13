import AdminLayout from '@/components/admin/AdminLayout';

export default function layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
