import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface AdvantageListProps {
  items: Array<{ description: string, link?: { href: string, text: string } }>;
}

const AdvantageList: React.FC<AdvantageListProps> = ({ items }) => (
  <ul className="space-y-6">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3 animate-fade-in-up">
        <span className="mt-1 text-primary">
          <CheckCircle size={24} />
        </span>
        <p className="text-base text-muted-foreground">
          {item.description}
          {item.link && (
            <>
              {' '}
              <Link href={item.link.href} className="text-primary underline hover:text-primary/80 transition-colors">
                {item.link.text}
              </Link>
            </>
          )}
        </p>
      </li>
    ))}
  </ul>
);

export default AdvantageList;
