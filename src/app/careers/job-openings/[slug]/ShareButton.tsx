'use client';

import { Share2 } from 'lucide-react';

export function ShareButton({ title }: { title: string }) {
  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({ title, url: window.location.href }).catch(() => {});
    } else if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href).catch(() => {});
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Share Job
    </button>
  );
}
