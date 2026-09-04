import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  light?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  brand: 'bg-[#08CCD4]/10 text-[#08CCD4]',
  success: 'bg-green-50 text-green-700',
  warning: 'bg-amber-50 text-amber-700',
  outline: 'border border-gray-200 text-gray-600',
};

const lightVariantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/10 text-white/80',
  brand: 'bg-white/10 text-white border border-white/20',
  success: 'bg-white/10 text-white/80',
  warning: 'bg-white/10 text-white/80',
  outline: 'border border-white/20 text-white/80',
};

export default function Badge({ children, variant = 'default', className = '', light = false }: BadgeProps) {
  const styles = light ? lightVariantStyles[variant] : variantStyles[variant];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
