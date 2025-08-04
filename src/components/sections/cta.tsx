"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarCheck, FileText } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-white text-[#1A5276]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Subheading */}
          <div className="inline-flex items-center space-x-2 bg-[#1A5276] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg mx-auto">
            <CalendarCheck className="w-4 h-4" />
            <span>Talk to our Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale with <span className="text-[#FF8C00]">Smart Tech</span>? Let&apos;s Talk.
          </h2>
          <p className="text-xl text-[#1A5276] mb-8">
            Transform your business processes with AI-powered automation and expert implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg"
              aria-label="Book a demo with our experts"
              className="bg-[#1A5276] text-white hover:bg-[#154360] text-lg px-8 py-4 h-auto transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#1A5276]/40 transition-all"
            >
              <CalendarCheck className="w-5 h-5 mr-2" aria-hidden="true" />
              Book Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              aria-label="Request a custom proposal"
              className="border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white text-lg px-8 py-4 h-auto transition-all focus-visible:ring-4 focus-visible:ring-[#FF8C00]/30"
            >
              <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
              Get Proposal
            </Button>
          </div>
          {/* Trust Indicator */}
          <div className="flex items-center justify-center space-x-2 text-[#1A5276] text-sm mt-2">
            <span className="inline-flex items-center">
              <CalendarCheck className="w-4 h-4 mr-1 text-[#FF8C00]" />
              Trusted by 100+ businesses
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

