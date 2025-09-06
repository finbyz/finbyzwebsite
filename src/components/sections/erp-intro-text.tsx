 
import Image from "next/image";
import "@/styles/components/unified-container.css";

export interface ERPIntroTextData {
  component_type?: "Text";
  title: string;
  paragraphs: string[];
  highlightLink?: { text: string; href: string };
}

export default function ERPIntroText({
  data,
}: {
  data?: ERPIntroTextData;
}) {
  // Support either raw data object or a manifest object with example.data
  const resolved: ERPIntroTextData | undefined =
    (data as any)?.example?.data || (data as any)?.data || (data as any);

  const content: ERPIntroTextData =
    resolved ?? {
      component_type: "Text",
      title: "Looking for Leading ERP Software Development Company?",
      paragraphs: [
        "ERP systems are essential for the efficient functioning of modern businesses. As a leading ERP software provider, we understand the importance of integrating business processes, streamlining data management, and enhancing overall productivity. With technology evolving rapidly, ERP solutions—especially open-source options like ERPNext—have become more accessible and effective for businesses of all sizes. At Finbyz Tech, we offer premium ERP software development services in Ahmedabad, empowering organizations to overcome operational challenges and drive sustainable growth.",
      ],
      highlightLink: {
        text: "benefits of ERP implementation",
        href: "#",
      },
    };

  // Ensure paragraphs is always an array with fallback
  const paragraphs = content.paragraphs || [
    "ERP systems are essential for the efficient functioning of modern businesses. As a leading ERP software provider, we understand the importance of integrating business processes, streamlining data management, and enhancing overall productivity."
  ];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="unified-container-full">
        <div className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-x-4 md:gap-x-6 items-start w-fit justify-center">
          <div className="mt-1 md:mt-0">
            <Image src="/Quotation%20Mark.png" alt="Quote" width={80} height={80} className="w-12 md:w-16 h-auto" />
          </div>
          <h4 className="text-2xl md:text-3xl lg:text-[25px] font-semibold leading-tight text-[#1A5276]">
            {content.title || "Looking for Leading ERP Software Development Company?"}
          </h4>
          <div className="col-start-2 max-w-[1040px]">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-slate-700 text-base md:text-lg leading-8 md:leading-9 text-justify mb-6 md:mb-7"
                style={{ hyphens: 'auto' as const }}
              >
                {injectHighlight(paragraph, content.highlightLink)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Replace the highlight text with a stylized anchor if present
 */
function injectHighlight(text: string, highlight?: { text: string; href: string }) {
  if (!highlight || !highlight.text) return text;

  const parts = text.split(highlight.text);
  if (parts.length === 1) return text;

  return (
    <>
      {parts[0]}
      <a
        href={highlight.href}
        className="text-[#1A5276] font-semibold underline decoration-2 underline-offset-2 hover:text-[#154360]"
      >
        {highlight.text}
      </a>
      {parts.slice(1).join(highlight.text)}
    </>
  );
}


