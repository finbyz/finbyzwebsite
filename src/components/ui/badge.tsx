/**
 * @fileoverview Badge Component
 * 
 * A versatile badge component built with Radix UI and Class Variance Authority.
 * Supports multiple variants, can render as different HTML elements, and includes
 * accessibility features. Perfect for status indicators, labels, and tags.
 * 
 * @component Badge
 * @example
 * ```tsx
 * // Default badge
 * <Badge>New</Badge>
 * 
 * // Secondary variant
 * <Badge variant="secondary">Draft</Badge>
 * 
 * // Destructive variant
 * <Badge variant="destructive">Error</Badge>
 * 
 * // Outline variant
 * <Badge variant="outline">Beta</Badge>
 * 
 * // Badge with icon
 * <Badge>
 *   <CheckCircle className="w-3 h-3" />
 *   Active
 * </Badge>
 * 
 * // Badge as link
 * <Badge asChild>
 *   <Link href="/tags/react">React</Link>
 * </Badge>
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Badge variant configurations using Class Variance Authority.
 * Defines visual styles for different badge types.
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Badge component interface extending HTML span props with variant support.
 */
interface BadgeProps extends React.ComponentProps<"span">,
  VariantProps<typeof badgeVariants> {
  /** 
   * When true, renders the badge as a child component using Radix UI Slot.
   * Useful for rendering badges as links or other elements.
   * @default false
   */
  asChild?: boolean
}

/**
 * Versatile badge component with multiple variants and flexible rendering.
 * 
 * Features:
 * - Multiple visual variants (default, secondary, destructive, outline)
 * - Can render as any HTML element using asChild prop
 * - Built-in accessibility features
 * - Icon support with proper sizing
 * - Hover effects and focus states
 * - Dark mode support
 * 
 * @param props - Badge properties
 * @param props.className - Additional CSS classes
 * @param props.variant - Visual variant: 'default' | 'secondary' | 'destructive' | 'outline'
 * @param props.asChild - Whether to render as child component
 * @param props.children - Badge content (text and/or icons)
 * 
 * @returns Badge element with applied variants
 * 
 * @example
 * ```tsx
 * // Status indicators
 * <div className="space-x-2">
 *   <Badge>Active</Badge>
 *   <Badge variant="secondary">Pending</Badge>
 *   <Badge variant="destructive">Failed</Badge>
 *   <Badge variant="outline">Draft</Badge>
 * </div>
 * 
 * // Badge with icon
 * <Badge>
 *   <CheckCircle className="w-3 h-3" />
 *   Verified
 * </Badge>
 * 
 * // Badge as link
 * <Badge asChild>
 *   <Link href="/categories/technology">Technology</Link>
 * </Badge>
 * 
 * // Interactive badge
 * <Badge 
 *   className="cursor-pointer"
 *   onClick={() => console.log('Badge clicked')}
 * >
 *   Clickable Badge
 * </Badge>
 * 
 * // Custom styled badge
 * <Badge className="bg-blue-500 text-white border-blue-600">
 *   Custom Badge
 * </Badge>
 * ```
 */
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
