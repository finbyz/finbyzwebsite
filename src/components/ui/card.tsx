/**
 * @fileoverview Card Component System
 * 
 * A flexible card component system with multiple sub-components for building
 * structured content containers. Supports responsive design and container queries.
 * 
 * @component Card
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description text</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content goes here</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * 
 * // Card with action in header
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Project Dashboard</CardTitle>
 *     <CardDescription>Overview of your projects</CardDescription>
 *     <CardAction>
 *       <Button size="sm">View All</Button>
 *     </CardAction>
 *   </CardHeader>
 *   <CardContent>
 *     <div className="space-y-2">
 *       <div className="flex justify-between">
 *         <span>Active Projects</span>
 *         <span className="font-semibold">12</span>
 *       </div>
 *     </div>
 *   </CardContent>
 * </Card>
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Main card container component.
 * Provides the base styling and structure for card content.
 * 
 * @param props - Card container properties
 * @param props.className - Additional CSS classes
 * @param props.children - Card content
 * 
 * @returns Card container element
 * 
 * @example
 * ```tsx
 * <Card className="max-w-sm">
 *   <CardHeader>
 *     <CardTitle>Featured Post</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     <p>This is the main content area of the card.</p>
 *   </CardContent>
 * </Card>
 * ```
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Card header component for title, description, and optional action.
 * Uses container queries for responsive layout adjustments.
 * 
 * @param props - Card header properties
 * @param props.className - Additional CSS classes
 * @param props.children - Header content (typically CardTitle, CardDescription, CardAction)
 * 
 * @returns Card header element
 * 
 * @example
 * ```tsx
 * <CardHeader>
 *   <CardTitle>Product Name</CardTitle>
 *   <CardDescription>Product description</CardDescription>
 *   <CardAction>
 *     <Button size="sm">Edit</Button>
 *   </CardAction>
 * </CardHeader>
 * ```
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Card title component for main heading text.
 * 
 * @param props - Card title properties
 * @param props.className - Additional CSS classes
 * @param props.children - Title text content
 * 
 * @returns Card title element
 * 
 * @example
 * ```tsx
 * <CardTitle>User Profile</CardTitle>
 * ```
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Card description component for subtitle or explanatory text.
 * Uses muted foreground color for secondary information.
 * 
 * @param props - Card description properties
 * @param props.className - Additional CSS classes
 * @param props.children - Description text content
 * 
 * @returns Card description element
 * 
 * @example
 * ```tsx
 * <CardDescription>
 *   This is additional information about the card content.
 * </CardDescription>
 * ```
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Card action component for buttons or interactive elements in the header.
 * Positioned in the top-right corner when used within CardHeader.
 * 
 * @param props - Card action properties
 * @param props.className - Additional CSS classes
 * @param props.children - Action elements (typically buttons)
 * 
 * @returns Card action element
 * 
 * @example
 * ```tsx
 * <CardAction>
 *   <Button size="sm" variant="outline">Settings</Button>
 * </CardAction>
 * ```
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Card content component for main card body content.
 * Provides consistent padding and spacing.
 * 
 * @param props - Card content properties
 * @param props.className - Additional CSS classes
 * @param props.children - Main content elements
 * 
 * @returns Card content element
 * 
 * @example
 * ```tsx
 * <CardContent>
 *   <div className="space-y-4">
 *     <p>Main content paragraph</p>
 *     <ul className="list-disc list-inside">
 *       <li>Feature 1</li>
 *       <li>Feature 2</li>
 *     </ul>
 *   </div>
 * </CardContent>
 * ```
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Card footer component for actions or additional information.
 * Typically contains buttons or links for card actions.
 * 
 * @param props - Card footer properties
 * @param props.className - Additional CSS classes
 * @param props.children - Footer content (typically buttons or links)
 * 
 * @returns Card footer element
 * 
 * @example
 * ```tsx
 * <CardFooter>
 *   <Button className="w-full">Primary Action</Button>
 *   <Button variant="outline" className="w-full">Secondary Action</Button>
 * </CardFooter>
 * ```
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
