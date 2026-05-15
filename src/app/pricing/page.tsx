import HeroSection from '@/components/sections/dynamic-hero';
import PricingClient from "./PricingClient";
export default function PricingPage() {
    return (
        <>
            <HeroSection
                headline="Transparent Pricing for Every Business"
                highlightWords={["Transparent Pricing"]}
                description="Choose a plan that fits your needs. No hidden fees, no surprise charges — just straightforward pricing for ERP, AI automation, and staff augmentation."
                heroImage={{
                    alt: 'Pricing Plans',
                    src: '/images/pricing.svg',
                }}
                primaryButton={{
                    text: 'Compare Plans',
                    action: '#compare',
                }}
                secondaryButton={{
                    text: 'Talk to Sales',
                    action: '/contact',
                }}
            />

            <section className="container-custom py-8">
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-[#1A5276] mb-2" id="compare">Choose the Right Plan</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">All plans include a 14-day free trial. No credit card required.</p>
                </div>
            </section>

            <PricingClient />
        </>
    );
}
