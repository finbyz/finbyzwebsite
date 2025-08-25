'use client';

import { HtmlComponentsRenderer, useHtmlComponentsPage } from '@/components/HtmlComponentsRenderer';

interface ComponentData {
	type: string;
	component: string;
	data: any;
}

interface HtmlSection {
	type: string;
	components: ComponentData[];
}

interface HtmlPageData {
	metadata: {
		title: string;
		description: string;
		keywords?: string[];
		companyName?: string;
		viewport?: string;
	};
	sections: HtmlSection[];
}

export function HtmlComponentsPageClient({
	pageData,
	className,
	pageKey,
}: {
	pageData: HtmlPageData;
	className?: string;
	pageKey: string;
}) {
	const { renderedSections, handleSectionRender } = useHtmlComponentsPage(pageData);

	return (
		<div className={`min-h-screen ${className || ''}`}>
			<HtmlComponentsRenderer
				pageData={pageData}
				onSectionRender={handleSectionRender}
			/>
			<div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-xs">
				<h3 className="font-semibold text-sm text-gray-800 mb-2">Page Info</h3>
				<div className="text-xs text-gray-600 space-y-1">
					<div>Page: {pageKey}</div>
					<div>Sections: {pageData.sections.length}</div>
					<div>Rendered: {renderedSections.length}</div>
					<div className="text-xs text-gray-500 mt-2">
						{renderedSections.map((section, index) => (
							<div key={index} className="truncate">✓ {section}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}


