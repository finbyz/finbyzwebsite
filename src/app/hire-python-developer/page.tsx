import { SectionsBasedPageClient } from '@/components/SectionsBasedPageClient';
import pageData from './page-data.json';

export default function HirePythonDeveloperPage() {
	return (
		<SectionsBasedPageClient
			pageData={pageData as any}
			className="dynamic-page-hire-python-developer"
			pageKey="hire-python-developer"
		/>
	);
}
