import { getPageData } from '@/lib/getPageData';
import type { Metadata } from 'next';
import ERPNextServicesSchema from '@/components/seo/ERPNextServicesSchema';

const PAGE_ROUTE = '/erpnext/services';
const PAGE_DOCTYPE = 'Web Page';

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageData(PAGE_DOCTYPE, PAGE_ROUTE);

    if (!pageData) {
        return {
            title: "Comprehensive ERPNext Services: Implementation, Development & Global Support",
            description: "Transform your business operations with Finbyz Tech—Your Certified Frappe Partner. Expert ERPNext implementation, custom development, migration services, and 24/7 support across 12+ countries."
        }
    }

    return {
        title: "Comprehensive ERPNext Services: Implementation, Development & Global Support",
        description: "Transform your business operations with Finbyz Tech—Your Certified Frappe Partner. Expert ERPNext implementation, custom development, migration services, and 24/7 support across 12+ countries.",
    };
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <ERPNextServicesSchema />
        </main>
    );
}
