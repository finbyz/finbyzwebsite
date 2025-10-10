import { Quote } from 'lucide-react';
import React from 'react';

interface QuoteBlockProps {
  text: string;
  isHeading?: boolean;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ text, isHeading = false }) => (
  <div className="flex items-start gap-4 pb-6 animate-fade-in-left">
    <img src="/images/Quotation_marks.svg" width={42} height={42} alt="Quoate image" />
    {isHeading ? (
      <h2 className="text-lg md:text-2xl font-semibold text-muted-foreground leading-snug">{text}</h2>
    ) : (
      <p className="text-base md:text-lg text-muted-foreground leading-snug">{text}</p>
    )}
  </div>
);

export default QuoteBlock;
