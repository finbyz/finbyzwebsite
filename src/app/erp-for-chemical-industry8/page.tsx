import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function ErpForChemicalIndustry8Page() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-erp-for-chemical-industry8"
			pageKey="erp-for-chemical-industry8"
		/>
	);
}
