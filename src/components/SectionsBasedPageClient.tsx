'use client';

import { SectionsBasedRenderer, useSectionsBasedPage } from '@/components/SectionsBasedRenderer';

interface SectionData {
	type: string;
	data?: Record<string, any>;
	id?: string;
	className?: string;
}

interface PageData {
	metadata: {
		title: string;
		description: string;
		keywords?: string[];
	};
	sections: SectionData[];
}

export function SectionsBasedPageClient({
	pageData,
	className,
	pageKey,
}: {
	pageData: PageData;
	className?: string;
	pageKey: string;
}) {
	const { renderedSections, handleSectionRender } = useSectionsBasedPage(pageData);

	return (
		<div className="min-h-screen">
			<SectionsBasedRenderer
				pageData={pageData}
				onSectionRender={handleSectionRender}
				className={className || ''}
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


