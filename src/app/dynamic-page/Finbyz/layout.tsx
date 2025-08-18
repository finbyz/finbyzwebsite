import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finbyz',
  description: 'Comprehensive AI & ERP solutions for modern businesses with 40+ dynamic components',
  keywords: ["ERP","AI","Business Solutions","Automation"],
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
