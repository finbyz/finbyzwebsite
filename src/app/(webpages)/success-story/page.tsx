'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '@/components/sections/Section'
import DynamicHero from '@/components/sections/dynamic-hero'
import CTA from '@/components/sections/cta'


const Tldr = ({ headline, description }: { headline: string; description: string }) => (
  <div className="bg-blue-50 border-l-4 border-[#1A5276] p-4 mb-8 rounded-lg">
    <h3 className="text-lg font-semibold text-blue-800">{headline}</h3>
    <p className="text-[#1A5276] mt-1">{description}</p>
  </div>
)

const QuoteCarousel = ({ quotes }: { quotes: string[] }) => {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % quotes.length), 3000)
    return () => clearInterval(timer)
  }, [quotes.length])

  return (
    <div className="relative bg-gray-100 p-6 rounded-xl mb-12 text-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl italic text-gray-700"
        >
          “{quotes[index]}”
        </motion.p>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-orange-500 w-4' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

const ImpactMetrics = ({ stats }: { stats: { label: string; value: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
    {stats.map((stat, i) => (
      <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
        <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
        <div className="text-sm text-gray-600">{stat.label}</div>
      </div>
    ))}
  </div>
)

const StretchAssignment = ({ challenge }: { challenge: string }) => (
  <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded">
    <strong className="text-amber-800">Your stretch challenge:</strong>
    <p className="text-amber-700 text-sm mt-1">{challenge}</p>
  </div>
)


export default function Page() {
  const stories = [
    {
      year: '2016',
      title: 'Rebranded as Finbyz Tech Pvt Ltd',
      description:
        'We have successfully transformed into a tech-first enterprise, placing strategic emphasis on business process automation. This shift allows us to deliver advanced, integrated solutions that eliminate manual inefficiencies, optimize productivity, and support data-driven decision-making across all operational levels.',
      image: '/FinByz Logo 2025 copy.png',
      quote: '60% faster processing time',
    },
    {
      year: '2018',
      title: 'Specialized in Chemicals',
      description:
        'Delivered tailored solutions to manage batch-wise inventory and maintain regulatory compliance, enabling organizations to uphold traceability and meet audit and legal requirements.',
      image: '/images/chemical_engineer.jpeg',
      quote: '45% productivity boost in 6 months',
      challenge: 'What data‑driven forecast could improve your planning?'
    },
    {
      year: '2020',
      title: 'Serialized Inventory for Engineering',
      description:
        'We empowered a leading heavy machinery manufacturer with advanced bulk serialized item management, making it easier to track each asset from production to delivery with full lifecycle visibility.',
      image: '/images/engineering.jpeg',
      quote: '14‑hour lead response → <10 min',
      challenge: 'How quickly do you respond to new leads right now?'
    },
    {
      year: '2022',
      title: 'Trading Bots & Agri Commodity Suite',
      description:
        'Delivered algorithmic trading automation and ERP workflow integration for agro-trading firms, resulting in improved trade accuracy, reduced operational risk, and end-to-end process transparency.',
      image: '/images/trading-bots.jpeg',
      quote: 'Seamless multi‑country inventory',
      challenge: 'Where are the biggest silos in your supply chain?'
    },
    {
      year: '2024',
      title: 'Resource Augmentation Model',
      description:
        'Built a scalable model for businesses to onboard specialized tech teams on demand, reducing hiring overhead and accelerating delivery cycles. Additionally, deployed a domain-focused ERP for the solar pump sector, helping companies streamline operations, improve traceability, and meet regulatory requirements.',
      image: '/images/resource-augmentation.jpeg',
      quote: 'Seamless multi‑country inventory',
      challenge: 'Where are the biggest silos in your supply chain?'
    }
  ]

  const quotes = stories.map(s => s.quote)
  const metrics = [
    { label: 'Processing Speed', value: '60% faster' },
    { label: 'Productivity Gain', value: '45% ↑' },
    { label: 'Lead Response', value: '<10 min' },
    { label: 'Countries Served', value: '12+' }
  ]

  return (
    <div className="bg-white text-slate-800">
      {/* ---------------------- HERO ---------------------- */}
      <Section>
        <DynamicHero
          headline="Success Stories"
          highlightWords={['Success']}
          description="Real transformation begins with real stories. Explore how businesses across the world have scaled, automated, and innovated with Finbyz."
          heroImage={{ alt: 'Success Stories', src: '/images/success-story.jpeg' }}
          primaryButton={{ text: 'Explore Stories', action: () => document.getElementById('success-timeline')?.scrollIntoView({ behavior: 'smooth' }) }}
          secondaryButton={{ text: 'Work With Us', action: 'https://finbyz.tech/contact' }}
          accentColor="orange"
        />
      </Section>

      
      

      {/* ---------------------- QUOTE CAROUSEL ---------------------- */}
      <Section className="py-4">
        <QuoteCarousel quotes={quotes} />
      </Section>

      {/* ---------------------- IMPACT METRICS ---------------------- */}
      <Section className="py-4 bg-gray-50">
        <ImpactMetrics stats={metrics} />
      </Section>

      {/* ---------------------- TL;DR SUMMARY ---------------------- */}
      <Section className="py-4 bg-gray-50 text-2xl">
        <Tldr
          headline=""
          description="Finbyz helps companies automate workflows, boost productivity, and scale globally. Below are a few highlights from our journey."
        />
      </Section>

      {/* ---------------------- TIMELINE ---------------------- */}
      <Section id="success-timeline" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-[#1A5276] text-center mb-12">
            Our Impact Through the Years
          </h2>

          <div className="relative border-l-4 border-[#1A5276] max-w-4xl mx-auto">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mb-14 ml-6 relative"
              >
                <div className="absolute w-4 h-4 bg-[#FF8C00] rounded-full -left-[33px] border-white border-2"></div>

                <h3 className="text-xl font-semibold text-[#1A5276]">{story.year}</h3>

                <div className="bg-white shadow-md rounded-xl p-5 mt-3 hover:shadow-lg transition-all duration-300">
                <img
                  src={story.image}
                  alt={story.title}
                  className={`rounded-lg h-56 object-contain mb-4 ${
                    index === 0 ? 'w-96  mx-auto' : 'w-full object-cover'
                  }`}
                />

                  <h4 className="text-lg font-bold text-slate-900 mb-2">{story.title}</h4>
                  <p className="text-slate-700 leading-relaxed mb-3">{story.description}</p>
                  {/* <StretchAssignment challenge={story.challenge} /> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------- VIDEO SECTION (optional) ---------------------- */}
      <Section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6">FinByz Tech Pvt Ltd</h2>
          <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/G4DUVm-vCh4"
            title="Finbyz Demo"
            className="w-full aspect-video rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          </div>
        </div>
      </Section>

      {/* ---------------------- CTA ---------------------- */}
      <Section className="py-12">
        <CTA
          data={{
           subheading: { text: 'Be the Next Success Story', icon: 'Rocket' },
           title: 'Your Transformation Could Be the Next Case Study',
           highlightText: 'Next',
           description:
          'Whether you’re scaling, automating, or modernizing—your story has the potential to inspire millions. Let’s build it together.',

            primaryButton: { text: 'Work With Us', icon: 'MessageCircle', action: 'https://finbyz.tech/contact' },
            secondaryButton: { text: 'Explore Our Stories', icon: 'Zap', action: () => document.getElementById('success-timeline')?.scrollIntoView({ behavior: 'smooth' }) },
            trustIndicator: { text: '200+ Success Stories | 12+ Countries | 7000+ Active Users', icon: 'CheckCircle' }
          }}
        />
      </Section>
    </div>
  )
}