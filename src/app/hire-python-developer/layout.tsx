import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated Python Developers | Python Development Services India - FinByz Tech',
  description: '',
  keywords: [],
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
