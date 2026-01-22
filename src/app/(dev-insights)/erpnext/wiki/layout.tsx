import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERPNext Wiki | Finbyz Tech',
  description: 'Access the complete ERPNext Wiki and Knowledge Base. Learn about modules, features, and best practices for ERPNext implementation and usage.',
  keywords: ['ERPNext Wiki', 'ERPNext Documentation', 'ERPNext Guide', 'ERPNext Knowledge Base', 'Finbyz Tech'],
  openGraph: {
    title: 'ERPNext Wiki | Finbyz Tech',
    description: 'Comprehensive ERPNext resources and documentation.',
    type: 'website',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
