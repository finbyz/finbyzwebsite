import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function ForwardContractErpnextPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-forward-contract-erpnext"
			pageKey="forward-contract-erpnext"
		/>
	);
}
