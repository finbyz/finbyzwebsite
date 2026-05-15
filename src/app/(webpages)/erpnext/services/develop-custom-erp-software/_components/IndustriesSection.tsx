import Image from "next/image"
import Section from "@/components/sections/Section"
import AnimatedText from "./AnimatedText"

const industries = [
  { title: 'Chemical', image: '/images/nav-chemical.svg', alt: 'Chemical', description: '', link: '/erpnext/chemical/' },
  { title: 'Engineering', image: '/images/nav-engineering.svg', alt: 'Engineering', description: '', link: '/erpnext/engineering' },
  { title: 'Logistics', image: '/images/nav-logistics.svg', alt: 'Logistics', description: '', link: '/erpnext/logistics' },
  { title: 'Manufacturing', image: '/images/nav-manufacturing.svg', alt: 'Manufacturing', description: '', link: '/erpnext/manufacturing' },
  { title: 'Agro Commodity', image: '/images/nav-agro.svg', alt: 'Agro Commodity', description: '', link: '/erpnext/agro/erp-for-commodity-trading' },
  { title: 'Trading', image: '/images/nav-trading.svg', alt: 'Trading', description: '', link: '/erpnext/trading' },
  { title: 'Textile', image: '/images/yarn.svg', alt: 'Textile', description: '', link: '/erpnext/textile' },
  { title: 'Services', image: '/images/nav-services.svg', alt: 'Services', description: '', link: '/erpnext/services/erpnext-service-provider' },
  { title: 'Real Estate', image: '/images/icon-business-app.svg', alt: 'Real Estate', description: '', link: '' },
  { title: 'Ceramics', image: '/images/Ceramics.svg', alt: 'Ceramics', description: '', link: '' }
]

export default function IndustriesSection() {
  return (
    <Section useGradient className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-[#1A5276]">
          Industries We Serve with <span className="text-primary">Expert ERPNext Solutions</span>
        </h2>

        <AnimatedText className="mb-12 text-gray-700 text-center max-w-3xl mx-auto text-lg">
          As a trusted ERPNext Implementation Partner globally, FinByz Tech serves diverse industries with custom ERPNext solutions. Our ERPNext service providers design systems that meet unique operational needs across sectors.
        </AnimatedText>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {industries.map((industry, idx) => (
            <a
              key={idx}
              href={industry.link || undefined}
              className="group relative flex flex-col items-center justify-center 
                         bg-gray-100 rounded-full shadow-md 
                         transition-all duration-500 
                         hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] 
                         w-40 h-40"
            >
              <div className="absolute -inset-1 rounded-full bg-white opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"></div>

              <div className="w-20 h-20 mb-3 relative z-10 flex items-center justify-center">
                <Image src={industry.image} alt={industry.alt} width={500} height={500} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" title={industry.alt} />
              </div>

              <span className="text-sm sm:text-base font-semibold text-gray-800 relative z-10 text-center leading-snug transition-colors duration-300 group-hover:text-primary px-2">
                {industry.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
