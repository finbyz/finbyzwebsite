import Image from "next/image";

export interface ContentIllustrationRightData {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
}

export default function ContentIllustrationRight({ data }: { data?: any }) {
  // Support either raw data object or a manifest object with example.data
  const resolved: ContentIllustrationRightData | undefined =
    (data?.example?.data as ContentIllustrationRightData) ||
    (data?.data as ContentIllustrationRightData) ||
    (data as ContentIllustrationRightData);

  const title = resolved?.title ?? "";
  const paragraphs = resolved?.paragraphs ?? [];
  const imageSrc = resolved?.imageSrc ?? "";
  const imageAlt = resolved?.imageAlt ?? "Illustration";

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-6">{title}</h2>
            <div className="text-slate-700 text-base md:text-lg leading-8">
              {paragraphs?.map((p, idx) => (
                <p key={idx} className="text-justify">{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={420}
                height={320}
                className="w-[320px] md:w-[380px] lg:w-[420px] h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


