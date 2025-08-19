"use client";

import React from "react";
import { Phone, Headset, BriefcaseBusiness, Mail, MapPin, CircleUserRound } from "lucide-react";

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon?: string;
}

export interface ContactWithMapData {
  title?: string;
  subtitle?: string;
  items?: ContactItem[];
  addressTitle?: string;
  addressLines?: string[];
  mapEmbedUrl?: string; // Google Maps embed URL
}

function getIconComponent(name?: string) {
  const map: Record<string, React.ElementType> = {
    phone: Phone,
    headset: Headset,
    briefcase: BriefcaseBusiness,
    mail: Mail,
    user: CircleUserRound,
    pin: MapPin,
  };
  return name && map[name] ? map[name] : CircleUserRound;
}

export default function ContactWithMap({
  data = {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    items: [
      { label: "Sales Inquiry", value: "+91-9925701446", href: "tel:+919925701446", icon: "phone" },
      { label: "Service & Support", value: "+91-8200899005", href: "tel:+918200899005", icon: "headset" },
      { label: "Job Interviews", value: "079 48912428", href: "tel:+9107948912428", icon: "briefcase" },
      { label: "info@finbyz.tech", value: "info@finbyz.tech", href: "mailto:info@finbyz.tech", icon: "mail" },
    ],
    addressTitle: "Registered Office",
    addressLines: [
      "504-Addor Ambition, Nr. Navrang Circle, Vimal House",
      "Navrangpura, Ahmedabad, Gujarat 380009",
    ],
    mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3816282476478!2d72.5582982!3d23.046466399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848b56e4b749%3A0x4b6f73a235b252e3!2sFinByz%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1755512221321!5m2!1sen!2sin",
  },
}: {
  data?: ContactWithMapData;
}) {
  const {
    title = "Contact Us",
    subtitle,
    items = [],
    addressTitle = "Registered Office",
    addressLines = [],
    mapEmbedUrl = "",
  } = data;

  return (
    <section className="w-full py-8 md:py-10 bg-white">
      <div className="container-fluid mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Contact details */}
          <div className=" bg-[#0f1115] text-white p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{title}</h2>
            {subtitle && <p className="text-white/70 mb-6 text-sm md:text-base">{subtitle}</p>}

            <div className="space-y-4">
              {items.map((item, idx) => {
                const Icon = getIconComponent(item.icon);
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm grid place-items-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      {item.label && item.label !== item.value && (
                        <div className="text-white/75 text-xs md:text-sm">{item.label}</div>
                      )}
                      {item.href ? (
                        <a href={item.href} className="text-base md:text-lg font-semibold break-words hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-base md:text-lg font-semibold break-words">{item.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Address */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm grid place-items-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm md:text-base font-semibold mb-1">{addressTitle}</div>
                  <div className="text-white/80 text-sm md:text-base">
                    {addressLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live map */}
          <div className=" overflow-hidden shadow-xl min-h-[320px]">
            {mapEmbedUrl ? (
              <iframe
                title="Company Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                className="min-h-[320px] md:min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="h-full w-full grid place-items-center bg-gray-100 text-gray-500">Map unavailable</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


