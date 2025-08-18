import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Landing Page',
  description: 'A clean and simple landing page example',
  keywords: ["landing page","simple","example"],
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
