import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function HireWebApplicationDevelopersPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-hire-web-application-developers"
			pageKey="hire-web-application-developers"
		/>
	);
}
