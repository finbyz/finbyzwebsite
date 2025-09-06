import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function ProductifyPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-productify"
			pageKey="productify"
		/>
	);
}
