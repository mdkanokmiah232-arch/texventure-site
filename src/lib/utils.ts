import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with clsx.
 * Handles conflicting class names and deduplicates them.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-primary text-white", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
