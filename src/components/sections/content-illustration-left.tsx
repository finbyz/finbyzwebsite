import Image from "next/image";
import FrappeImage from "../Common/FrappeImage";
import "@/styles/components/unified-container.css";

export interface ContentIllustrationLeftData {
  component_type?: "Text";
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
}

export default function ContentIllustrationLeft({ data }: { data?: any }) {
  // Support either raw data object or a manifest object with example.data
  const resolved: ContentIllustrationLeftData | undefined =
    (data?.example?.data as ContentIllustrationLeftData) ||
    (data?.data as ContentIllustrationLeftData) ||
    (data as ContentIllustrationLeftData);

  const component_type = resolved?.component_type ?? "Text";
  const title = resolved?.title ?? "";
  const paragraphs = resolved?.paragraphs ?? [];
  const imageSrc = resolved?.imageSrc ?? "";
  const imageAlt = resolved?.imageAlt ?? "Illustration";

  return (
    <section className="py-12 md:py-16 section-spacing-optimized">
      <div className="unified-container-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            {imageSrc && (
              <FrappeImage
                fileUrl={`${imageSrc}`}
                alt={imageAlt}
                className="w-[320px] md:w-[380px] lg:w-[420px] h-auto"
                lazyLoad={false}
                loadPrivate={true}
              />
            )}
          </div>
          <div className="lg:col-span-8">
            <h2 className="unified-heading-secondary text-[#1A5276]">{title}</h2>
            <div className="text-slate-700 unified-text-responsive">
              {paragraphs?.map((p, idx) => (
                <p key={idx} className="text-justify unified-text-content">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


