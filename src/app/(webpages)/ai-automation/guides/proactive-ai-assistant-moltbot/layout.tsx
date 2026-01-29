import { Metadata } from 'next';
import StructureData from '@/components/seo/StructureData';
import { LazyBusinessSlider } from '@/lib/lazy-components';
import { getFaqs, getPageData } from '@/lib/getPageData';
import FAQ from '@/components/ai_components/FAQ';
import FinbyzGallery from '@/components/sections/FinbyzGallery';
import { fetchFrappeSchemaData } from '@/lib/fetchFrappeSeoData';

const PAGE_SLUG = 'ai-automation/guides/proactive-ai-assistant-moltbot';

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchFrappeSchemaData({
        name: PAGE_SLUG,
        type: "webpage"
    })

    const metadata: Metadata = {
        title: pageData?.data?.seo_title || pageData?.data?.title || 'Proactive AI Personal Assistant | Moltbot - Ultimate Life Organizer',
        description: pageData?.data?.small_description || 'Discover how proactive AI assistants like Moltbot eliminate decision fatigue through predictive scheduling, seamless integration, and contextual awareness.',
        keywords: pageData?.data?.keywords || 'proactive AI assistant, Moltbot, Clawdbot, AI life organizer, self-hosted AI agent',
        alternates: {
            canonical: `https://finbyz.tech/${PAGE_SLUG}`,
        },
        openGraph: {
            title: pageData?.data?.seo_title || pageData?.data?.title || 'Proactive AI Personal Assistant | Moltbot',
            description: pageData?.data?.small_description || 'Discover the future of intelligent life automation with Moltbot',
            url: `https://finbyz.tech/${PAGE_SLUG}`,
            type: 'website',
            images: [
                {
                    url: 'https://finbyz.tech/images/ai-automation-og.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Proactive AI Personal Assistant',
                },
            ],
        },
        twitter: {  
            card: 'summary_large_image',
            title: pageData?.data?.seo_title || pageData?.data?.title || 'Proactive AI Personal Assistant | Moltbot',
            description: pageData?.data?.small_description || 'Discover the future of intelligent life automation',
        },
    };

    return metadata;
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const data = await getPageData('Web Page', PAGE_SLUG);
    const faqsGroup = await getFaqs('Web Page', PAGE_SLUG);

    return (
        <>
            {children}
            {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
            {(data.galleryItems.length > 0 || data.relatedReads.length > 0) ? (
                <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} />
            ) : null}
            <LazyBusinessSlider />
            <StructureData name={PAGE_SLUG} type="webpage" />
        </>
    );
}
