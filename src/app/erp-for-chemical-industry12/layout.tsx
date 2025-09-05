import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Component Showcase',
  description: 'A comprehensive demonstration of all available components in the system',
  keywords: ["components","showcase","demo","ui","sections"],
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
