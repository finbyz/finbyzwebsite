import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Components Showcase - SectionsBasedRenderer',
  description: 'Complete demonstration of all available components from the sections folder',
  keywords: ["components","showcase","sections","renderer","demo"],
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
