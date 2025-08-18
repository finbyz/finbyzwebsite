import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minimal Page',
  description: 'A minimal page example',
  keywords: ["minimal","simple","clean"],
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
