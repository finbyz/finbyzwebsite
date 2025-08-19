/**
 * @fileoverview Responsive Card Grid Component
 * 
 * A responsive card grid component that automatically handles different numbers of cards
 * in rows based on the count:
 * - 2 cards: 1 row (2 columns)
 * - 3 cards: 1 row (3 columns)
 * - 4 cards: 1 row (4 columns)
 * - 6 cards: 2 rows (3 columns each)
 * - 8 cards: 2 rows (4 columns each)
 * 
 * @component ResponsiveCardGrid
 * @example
 * ```tsx
 * const cards = [
 *   {
 *     id: 1,
 *     title: "Software Development",
 *     description: "Innovative Solutions to Automate your Business!",
 *     image: "/path/to/image.jpg"
 *   },
 *   // ... more cards
 * ];
 * 
 * <ResponsiveCardGrid cards={cards} />
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Award, TrendingUp, Globe, Target, BarChart3, Zap, Shield, Cpu } from "lucide-react"

export interface CardItem {
  id: string | number
  title: string
  description: string
  image?: string
  imageAlt?: string
  className?: string
  icon?: string
  iconBg?: string
  iconColor?: string
}

interface ResponsiveCardGridProps {
  cards: CardItem[]
  className?: string
  cardClassName?: string
  showImage?: boolean
  imageHeight?: number
  imageWidth?: number
}

/**
 * Responsive card grid component that automatically adjusts layout based on card count.
 * 
 * @param props - Component properties
 * @param props.cards - Array of card items to display
 * @param props.className - Additional CSS classes for the grid container
 * @param props.cardClassName - Additional CSS classes for individual cards
 * @param props.showImage - Whether to show images (default: true)
 * @param props.imageHeight - Height of the image (default: 200)
 * @param props.imageWidth - Width of the image (default: 300)
 * 
 * @returns Responsive card grid element
 */
export function ResponsiveCardGrid({
  cards,
  className,
  cardClassName,
  showImage = true,
  imageHeight = 200,
  imageWidth = 300,
}: ResponsiveCardGridProps) {
  const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
    Award,
    TrendingUp,
    Globe,
    Target,
    BarChart3,
    Zap,
    Shield,
    Cpu,
  }
  // Calculate grid layout based on number of cards
  const getGridLayout = (count: number) => {
    switch (count) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      case 5:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      case 6:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 7:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      case 8:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      default:
        // For more than 8 cards, use a flexible grid
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    }
  }

  // Use only the 4 brand colors (blue, orange, green, purple)
  const fullPalette = [
    "#1A5276", // blue
    "#FF8C00", // orange
    "#27AE60", // green
    "#8E44AD", // purple
  ]

  const getPaletteSubset = (count: number): string[] => {
    const size = Math.min(count, fullPalette.length)
    return fullPalette.slice(0, size)
  }

  const palette = getPaletteSubset(cards.length)
  const gridLayout = getGridLayout(cards.length)

  return (
    <div
      className={cn(
        "grid gap-6 w-full",
        gridLayout,
        className
      )}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          className={cn(
            "flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
            cardClassName,
            card.className
          )}
        >
          {card.icon && iconMap[card.icon] ? (
            <div className="w-full flex items-center justify-center pt-6">
              <div
                className="w-16 h-16 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,.12)] flex items-center justify-center"
                style={{ backgroundColor: card.iconBg || palette[index % palette.length] || "#1A5276" }}
              >
                {React.createElement(iconMap[card.icon]!, { size: 28, color: card.iconColor || "#fff" })}
              </div>
            </div>
          ) : (
            showImage && card.image && (
            <div className="relative w-full overflow-hidden rounded-t-xl">
              <Image
                src={card.image}
                alt={card.imageAlt || card.title}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                priority={false}
              />
            </div>
            )
          )}
          <CardHeader className="flex-1">
            <CardTitle className="text-lg font-semibold leading-tight">
              {card.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

/**
 * Alternative version with more compact layout for smaller cards
 */
export function CompactCardGrid({
  cards,
  className,
  cardClassName,
  showImage = true,
  imageHeight = 150,
  imageWidth = 250,
}: ResponsiveCardGridProps) {
  const getCompactGridLayout = (count: number) => {
    switch (count) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      case 6:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      case 8:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    }
  }

  const gridLayout = getCompactGridLayout(cards.length)

  return (
    <div
      className={cn(
        "grid gap-4 w-full",
        gridLayout,
        className
      )}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          className={cn(
            "flex flex-col h-full transition-all duration-300 hover:shadow-md hover:scale-[1.01]",
            cardClassName,
            card.className
          )}
        >
          {showImage && card.image && (
            <div className="relative w-full overflow-hidden rounded-t-xl">
              <Image
                src={card.image}
                alt={card.imageAlt || card.title}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                priority={false}
              />
            </div>
          )}
          <CardHeader className="flex-1 p-4">
            <CardTitle className="text-base font-semibold leading-tight">
              {card.title}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground leading-relaxed">
              {card.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

export default ResponsiveCardGrid
