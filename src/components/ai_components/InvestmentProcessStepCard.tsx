// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// interface InvestmentProcessStepCardProps {
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
// }

// export default function InvestmentProcessStepCard({ title, description, image, alt }: InvestmentProcessStepCardProps) {
//   return (
//     <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/90 dark:bg-zinc-900/80">
//       <CardHeader className="flex flex-row items-center gap-4 pb-2">
//         <div className="flex-shrink-0">
//         <Image
//           src={image}
//           alt={alt}
//           width={56}
//           height={56}
//           className="rounded-lg object-contain bg-zinc-100 dark:bg-zinc-800 p-2"
//           unoptimized
//         />
//         </div>
//         <CardTitle className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{title}</CardTitle>
//       </CardHeader>
//       <CardContent className="pt-0 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
//         {description}
//       </CardContent>
//     </Card>
//   );
// }
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface InvestmentProcessStepCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function InvestmentProcessStepCard({
  title,
  description,
  image,
  alt,
}: InvestmentProcessStepCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl">
      <CardHeader className="flex flex-col items-center gap-4 pb-2">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={alt}
            width={180}      // bigger and clear
            height={180}
            className="object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            unoptimized
          />
        </div>
        <CardTitle className="text-xl font-bold text-black text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 text-base text-black leading-relaxed text-center min-h-[80px]">
        {description}
      </CardContent>
    </Card>
  );
}

// -----------------------------
// Example Grid Layout for Multiple Cards
// -----------------------------

interface CardsGridProps {
  cards: InvestmentProcessStepCardProps[];
}

export function CardsGrid({ cards }: CardsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card) => (
        <InvestmentProcessStepCard
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
          alt={card.alt}
        />
      ))}
    </div>
  );
}
