import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function HireJavascriptDeveloperPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-hire-javascript-developer"
			pageKey="hire-javascript-developer"
		/>
	);
}
