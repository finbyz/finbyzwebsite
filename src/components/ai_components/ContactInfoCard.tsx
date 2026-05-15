import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ContactInfoCardProps {
  phoneNumbers: Array<{ label: string; number: string; href: string }>;
  email: { label: string; href: string };
  address: string;
  office: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ phoneNumbers, email, address, office }) => {
  return (
    <div className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/95 rounded-2xl shadow-xl p-8 flex flex-col gap-8 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-2 h-20 bg-orange-500/50 rounded-full" />

      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Contact Information</h2>
        <p className="text-white/60 text-sm">Reach out to us through any of these channels</p>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-orange-500/20 rounded-xl p-3">
            <Phone className="text-orange-400 w-5 h-5" aria-label="Phone" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            {phoneNumbers.map((item, idx) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex items-center justify-between text-white hover:text-orange-400 transition-all duration-200 border-b border-white/10 pb-2 last:border-0 last:pb-0"
                aria-label={item.label}
              >
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{item.label}</span>
                  <br />
                  <span className="text-base font-medium">{item.number}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-orange-500/20 rounded-xl p-3">
            <Mail className="text-orange-400 w-5 h-5" aria-label="Email" />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
            <Link
              href={email.href}
              className="text-white hover:text-orange-400 transition-all duration-200 font-medium"
              aria-label="Email"
            >
              {email.label}
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 bg-orange-500/20 rounded-xl p-3">
            <MapPin className="text-orange-400 w-5 h-5" aria-label="Location" />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{office}</p>
            <p className="text-white leading-relaxed">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
