import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function FdManagementErpnextPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-fd-management-erpnext"
			pageKey="fd-management-erpnext"
		/>
	);
}
