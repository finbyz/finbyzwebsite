"use client";

import { Eye, Heart, CheckCircle, BarChart3 } from "lucide-react";

const differentiators = [
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description: "We simplify tech jargon into action plans. No overengineering, just elegant problem-solving.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    icon: Heart,
    title: "Ownership with Empathy",
    description: "Your goals become our goals. We bring care into consulting.",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    icon: CheckCircle,
    title: "Precision in Execution",
    description: "We sweat the details — ERP flows, automations, dashboards — done right the first time.",
    iconColor: "#16A085",
    iconBg: "#E6F7F4"
  },
  {
    icon: BarChart3,
    title: "Adaptable Team Model",
    description: "Need a full-time developer or quick AI prototype? Our team scales as you grow.",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  }
];

export default function Differentiators() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1A5276" }}>
            Our Differentiators
          </h2>
          <p className="text-xl" style={{ color: "#1A5276" }}>
            What sets us apart in the technology landscape
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 transition-transform hover:scale-105"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl"
                style={{ background: item.iconBg }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.iconColor }} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "#1A5276" }}>
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Quote Section */}
        <div className="mt-12">
          <div className="rounded-2xl px-8 py-8 text-center" style={{ background: "#FFF4E5" }}>
            <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#1A5276" }}>
              "You bring the vision — <span style={{ color: '#FF8C00' }}>we'll build the roadmap.</span>"
            </div>
            <div className="mt-2 font-semibold" style={{ color: "#1A5276" }}>
              — The Finbyz Promise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

