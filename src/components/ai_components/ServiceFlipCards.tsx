import FlipCard from '@/components/ai_components/FlipCard';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardData {
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
}

interface ServiceFlipCardsProps {
  cards: CardData[];
}

export default function ServiceFlipCards({ cards }: ServiceFlipCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      {cards.map((card, idx) => (
        <FlipCard
          key={card.title}
          className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          front={
            <div className="flex flex-col items-center justify-center py-8 px-4">
              <Image src={card.image} alt={card.alt} width={64} height={64} className="mb-4" />
              <h4 className="text-lg font-semibold text-primary text-center">{card.title}</h4>
            </div>
          }
          back={
            <div className="flex flex-col justify-between h-full py-8 px-4">
              <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
              <div className="flex justify-center">
                <Link href={card.link} className="inline-flex items-center gap-2 text-primary hover:underline font-medium group">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
}
