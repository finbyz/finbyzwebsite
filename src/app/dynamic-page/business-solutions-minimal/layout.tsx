import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Solutions - Minimal',
  description: 'Essential business solutions for modern enterprises',
  keywords: ["business","solutions","enterprise","technology"],
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
