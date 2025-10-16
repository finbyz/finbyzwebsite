import { Phone, Mail, MapPin } from 'lucide-react';
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
    <div className="bg-black rounded-xl shadow-lg p-6 flex flex-col gap-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Phone className="text-white w-6 h-6" aria-label="Phone" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            {phoneNumbers.map((item, idx) => (
              <Link
                key={item.number}
                href={item.href}
                className="text-white hover:underline transition"
                aria-label={item.label}
              >
                <span className="font-medium">{item.label}</span>
                <br />
                <span className="text-base">{item.number}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="text-white w-6 h-6" aria-label="Email" />
          <Link
            href={email.href}
            className="text-white hover:underline transition"
            aria-label="Email"
          >
            {email.label}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white">{office}</span><br />
          <MapPin className="text-white w-6 h-6" aria-label="Location" />

          <span className="text-white">{address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
