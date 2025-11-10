import Link from 'next/link';
import Script from 'next/script';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQ = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services"
}: FAQProps) => {
  const faqStructureData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="structured-faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructureData) }}
      />
      <div className="container-custom py-12">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              {title}
            </h1>
            <p className="text-slate-600 text-lg">
              {subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-slate-200 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 hover:bg-slate-50 -mx-6 px-6 rounded-t-lg">
                  <span className="font-semibold text-slate-900 text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-5">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Still have questions?
            </p>
            <Link 
              className='px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors inline-block' 
              href='/contact#contact-form-section'
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;