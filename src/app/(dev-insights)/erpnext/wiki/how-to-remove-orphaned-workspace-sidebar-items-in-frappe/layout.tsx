export { generateAutoMetadata as generateMetadata } from '@/lib/seo-metadata';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
