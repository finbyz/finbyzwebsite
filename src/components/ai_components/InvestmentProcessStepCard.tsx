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
    // <Card className="border-none shadow-none hover:shadow-lg transition-shadow duration-300 bg-transparent">
    //   <CardHeader className="flex flex-row items-center gap-6 pb-2">
    //     <div className="flex-shrink-0">
    //       <Image
    //         src={image}
    //         alt={alt}
    //         width={80} 
    //         height={80}
    //         className="rounded-xl object-contain p-2"
    //         unoptimized
    //       />
    //     </div>
    //     <CardTitle className="text-xl font-semibold text-black">
    //       {title}
    //     </CardTitle>
    //   </CardHeader>
    //   <CardContent className="pt-0 text-gray-700 text-base leading-relaxed">
    //     {description}
    //   </CardContent>
    // </Card>
 <Card className="border-none shadow-none hover:shadow-lg transition-shadow duration-300 bg-transparent overflow-hidden">
  <div className="w-full bg-white">
    <Image
      src={image}
      alt={alt}
      width={400} 
      height={300}
      className="w-full h-auto object-contain p-2"
      unoptimized
    />
  </div>
  <CardHeader className="pb-2">
    <CardTitle className="text-xl font-semibold text-black">
      {title}
    </CardTitle>
  </CardHeader>
  <CardContent className="pt-0 text-gray-700 text-base leading-relaxed">
    {description}
  </CardContent>
</Card>
  );
}
