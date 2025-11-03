

'use client';

import { useState } from 'react';
import { Linkedin, Mail, Award, Users, TrendingUp, Globe } from 'lucide-react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";


const teamMembers = [
  {
    id: 1,
    name: "Mukesh Variyani",
    role: "Managing Director",
    department: "Leadership",
    bio: "Mukesh believed professional management practice can help companies outshine peers, leading Finbyz through IT and Financial expertise.",
    image: "/images/mukesh-sir.jpeg",
    linkedin: "https://www.linkedin.com/in/mukeshvariyani/",
    email: "mukesh@finbyz.tech",
    color: "#1A5276",
  },
  {
    id: 2,
    name: "Nishita Variyani",
    role: "Director",
    department: "Talent and Acquisition",
    bio: "Nishita builds Finbyz’s strong development team, driving innovation with her background in Computer Science.",
    image: "/images/nishita-mam.jpeg",
    linkedin: "https://www.linkedin.com/in/nishita-variyani-36b464189/",
    email: "nishita@finbyz.tech",
    color: "#1A5276",
  },
  {
    id: 3,
    name: "Ravin Ramoliya",
    role: "Functional Consultant",
    department: "Functional Consultant",
    bio: "With 30+ ERP implementations, Ravin brings deep functional knowledge and strong client connection skills.",
    image: "/images/ravin-ramoliya.jpg",
    linkedin: "https://www.linkedin.com/in/ravin-ramoliya-a35259172/",
    email: "ravin@finbyz.tech",
    color: "#FF8C00",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-white">
              Meet the Minds Behind <span className="text-[#FF8C00]">Finbyz</span>
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate innovators, leaders, and experts driving digital transformation through ERP excellence.
            </p>

            <div className="grid grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { icon: Users, number: "50+", label: "Team Members" },
                { icon: Award, number: "10+", label: "Years Experience" },
                { icon: TrendingUp, number: "200+", label: "Projects Delivered" },
                { icon: Globe, number: "12+", label: "Countries" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center"
                >
                  <stat.icon className="w-8 h-8 mb-3 text-[#1A5276]" />
                  <div className="text-4xl font-black mb-2 text-[#1A5276]">{stat.number}</div>
                  <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1A5276] mb-14">
              Our Core Team
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-center group transition-all duration-500 hover:scale-105"
                >
                  {/* Circle Image */}
                  <div className="relative w-48 h-48 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1A5276] to-[#FF8C00] p-[3px]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                    {/* Social Icons on Hover */}
                    <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        className="bg-white p-2 rounded-full hover:bg-[#1A5276] hover:text-white transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-white p-2 rounded-full hover:bg-[#FF8C00] hover:text-white transition-all"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-sm font-semibold text-[#1A5276] uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm max-w-xs">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A5276] mb-6">
              Join Our Amazing Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
              Be part of a company that thrives on innovation, collaboration, and growth.
            </p>
            
            <Link
              href="https://web.finbyz.tech/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#FF8C00] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </Link>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
