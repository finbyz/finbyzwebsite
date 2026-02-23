'use client'
import React from 'react'
import Section from '@/components/sections/Section'
import { motion } from 'framer-motion'
import DynamicHero from '@/components/sections/dynamic-hero'
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid'
import { LazyCompanyHistoryTimeline } from "@/lib/lazy-components";
import CTA from '@/components/sections/cta'

export default function Page() {
  return (
    <div className="bg-white text-slate-800">

      {/* --- Hero Section with Background Overlay --- */}
      <Section
        style={{
          backgroundImage: 'url(/images/our-story-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <DynamicHero
            headline="Our Story"
            highlightWords={['Story']}
            description="From vision to innovation — Finbyz Tech was founded to empower organizations through intelligent technology, automation, and digital transformation. Discover how we turned an idea into a global success story."
            heroImage={{
              alt: 'Our Story - Finbyz Team',
              src: '/FinByz Logo 2025 copy.png',
            }}
            primaryButton={{
              text: 'Join Our Journey',
              action: () => {
                const el = document.getElementById('journey')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              },
            }}
            secondaryButton={{
              text: 'Explore Our Vision',
              action: () => {
                const el = document.getElementById('mission')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              },
            }}
            accentColor="orange"
          />
        </div>
      </Section>

      {/* --- Our Journey --- */}
      <Section id="journey" className="py-16">
        <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#1A5276] mb-4">
              Our Journey So Far
            </h2>
            <p className="text-slate-900 text-base md:text-lg mb-5 text-justify">
              Founded in <b>2016</b>, Finbyz Tech began as a small team of ERP
              enthusiasts determined to simplify complex business processes
              through technology. What started as a vision to empower small
              businesses quickly grew into a mission to digitally transform
              enterprises worldwide.
            </p>
            <p className="text-slate-900 text-base md:text-lg mb-5 text-justify">
              Today, Finbyz Tech stands as a trusted global technology partner,
              serving clients in <b>12+ countries</b> with expertise in
              ERPNext, AI, and business automation. Our journey reflects our
              unwavering focus on innovation, agility, and measurable business
              impact.
            </p>
          </motion.div>

          <motion.img
            src="/AboutUs-removebg-preview.png"
            alt="Finbyz Journey"
            className="rounded-2xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </Section>

      {/* --- Meet the Team --- */}
      <Section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          
          <motion.h2
            className="text-4xl font-bold text-[#1A5276] mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Driven by People, Defined by Innovation
          </motion.h2>

          <motion.p
            className="text-slate-700 text-base md:text-lg mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our team of passionate developers, analysts, designers, and innovators works
            tirelessly to deliver transformative digital solutions. We believe
            great technology is built by great teams — driven by collaboration,
            creativity, and curiosity.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {[
              { src: '/images/mukesh-sir.jpeg', alt: 'Mukesh Sir' },
              { src: '/images/nishita-mam.jpeg', alt: 'Nishita Mam' },
              { src: '/images/ravin-ramoliya.jpg', alt: 'Ravin Ramoliya' },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.src}
                  alt={member.alt}
                  className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>


      {/* Our Milestones Timeline - Lazy loaded for performance */}
      <LazyCompanyHistoryTimeline />


      {/* --- Mission & Vision --- */}
      <Section id="mission" className="bg-gray-50 py-16">
        <div className="container-custom grid md:grid-cols-2 gap-10 items-start">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/our-mission.jpeg"
              alt="Finbyz Mission"
              className="rounded-2xl shadow-md mb-6"
            />
            <h3 className="text-3xl font-semibold text-[#1A5276] mb-3">
              Our Mission
            </h3>
            <p className="text-slate-900 text-base md:text-lg leading-relaxed">
              To empower organizations of every scale with intelligent digital
              solutions that streamline workflows, improve collaboration, and
              foster sustainable growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/our-vision.jpeg"
              alt="Finbyz Vision"
              className="rounded-2xl shadow-md mb-6"
            />
            <h3 className="text-3xl font-semibold text-[#1A5276] mb-3">
              Our Vision
            </h3>
            <p className="text-slate-900 text-base md:text-lg leading-relaxed">
              To be a global leader in ERP and AI-driven business transformation
              by enabling enterprises to achieve operational excellence,
              intelligent decision-making, and long-term innovation.
            </p>
          </motion.div>

        </div>
      </Section>

      {/* --- Core Values --- */}
      <Section className="py-16">
        <ResponsiveCardGrid
          data={{
            title: 'Core Values',
            subtitle: 'The principles that drive Finbyz Tech forward',
            cards: [
              {
                id: 1,
                title: 'Innovation',
                description:
                  'We constantly explore new technologies and creative solutions to deliver cutting-edge results for our clients.',
                icon: 'Lightbulb',
                iconColor: '#ffffff',
                iconBg: '#1A5276',
              },
              {
                id: 2,
                title: 'Integrity',
                description:
                  'Trust and transparency are at the heart of every partnership we build and every project we deliver.',
                icon: 'Shield',
                iconColor: '#ffffff',
                iconBg: '#FF8C00',
              },
              {
                id: 3,
                title: 'Collaboration',
                description:
                  'We work hand-in-hand with clients, valuing teamwork, shared goals, and open communication.',
                icon: 'Users',
                iconColor: '#ffffff',
                iconBg: '#27AE60',
              },
              {
                id: 4,
                title: 'Excellence',
                description:
                  'From design to delivery, we commit to the highest standards of performance, quality, and customer success.',
                icon: 'Star',
                iconColor: '#ffffff',
                iconBg: '#8E44AD',
              },
            ],
            variant: 'iconCard',
          }}
        />
      </Section>

      {/* --- Global Impact --- */}
      <Section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <motion.div
          className="container-custom text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10">Our Global Impact</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { value: "12+", label: "Countries Served" },
              { value: "200+", label: "Successful Projects" },
              { value: "7000+", label: "Active Users" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-bold text-[#FF8C00]">{item.value}</h3>
                <p className="text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
