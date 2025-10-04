import { Mail, MapPin } from 'lucide-react';
import React from 'react';

interface ContactDetailsBlockProps {
  email: string;
  address: string;
}

const ContactDetailsBlock: React.FC<ContactDetailsBlockProps> = ({ email, address }) => (
  <div className="flex flex-col gap-4 bg-muted/50 rounded-lg p-6 border border-border animate-fade-in">
    <div className="flex items-center gap-3">
      <Mail className="text-primary" />
      <span className="font-medium">{email}</span>
    </div>
    <div className="flex items-center gap-3">
      <MapPin className="text-primary" />
      <span>{address}</span>
    </div>
  </div>
);

export default ContactDetailsBlock;
