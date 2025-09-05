import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FD Management in ERPNext | Fixed Deposit Management ERP Solution - Finbyz Tech',
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
