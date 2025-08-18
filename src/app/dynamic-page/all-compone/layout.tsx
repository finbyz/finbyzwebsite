import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Components Showcase - All Available Sections',
  description: 'Comprehensive demonstration of every available component from the sections folder with realistic data (style-free)',
  keywords: ["components","showcase","sections","renderer","demo","complete"],
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
