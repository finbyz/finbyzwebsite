import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function AdvancedAuthorisationLicenceErpnextPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-advanced-authorisation-licence-erpnext"
			pageKey="advanced-authorisation-licence-erpnext"
		/>
	);
}
