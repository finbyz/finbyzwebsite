import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Web Application Developers | Web App Development Services India - Finbyz Tech',
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
