import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERP for Chemical ',
  description: 'Streamline your operations with Finbyz\'s specialized Chemical ERP software. Built on ERPNext, our solution offers robust formula management, compliance, and batch traceability for chemical manufacturers. Boost efficiency & control.',
  keywords: ["Advanced Chemical ERP Software ERPNext for Chemical Manufacturing Finbyz"],
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
