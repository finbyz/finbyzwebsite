/**
 * @fileoverview Accordion Component System
 * 
 * A collapsible content component system built with Radix UI primitives.
 * Provides accessible, keyboard-navigable accordion functionality with smooth
 * animations and flexible content structure.
 * 
 * @component Accordion
 * @example
 * ```tsx
 * // Basic accordion
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>What is ERPNext?</AccordionTrigger>
 *     <AccordionContent>
 *       ERPNext is a comprehensive ERP system that helps businesses manage
 *       their operations efficiently.
 *     </AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item-2">
 *     <AccordionTrigger>How does AI automation work?</AccordionTrigger>
 *     <AccordionContent>
 *       AI automation uses machine learning algorithms to streamline
 *       repetitive tasks and improve efficiency.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * 
 * // Multiple accordion (multiple items can be open)
 * <Accordion type="multiple">
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Service 1</AccordionTrigger>
 *     <AccordionContent>Service 1 details...</AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item-2">
 *     <AccordionTrigger>Service 2</AccordionTrigger>
 *     <AccordionContent>Service 2 details...</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Main accordion root component that manages the accordion state.
 * Wraps the Radix UI Accordion.Root primitive.
 * 
 * @param props - Accordion root properties
 * @param props.type - Accordion type: 'single' | 'multiple'
 * @param props.collapsible - Whether items can be collapsed (single type only)
 * @param props.defaultValue - Default open items (uncontrolled)
 * @param props.value - Current open items (controlled)
 * @param props.onValueChange - Callback when open state changes
 * @param props.children - Accordion items
 * 
 * @returns Accordion root element
 * 
 * @example
 * ```tsx
 * // Single accordion with collapsible items
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="faq-1">
 *     <AccordionTrigger>Question 1</AccordionTrigger>
 *     <AccordionContent>Answer 1</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * 
 * // Multiple accordion
 * <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
 *   <AccordionItem value="item-1">...</AccordionItem>
 *   <AccordionItem value="item-2">...</AccordionItem>
 * </Accordion>
 * ```
 */
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

/**
 * Individual accordion item component.
 * Contains the trigger and content for a single accordion section.
 * 
 * @param props - Accordion item properties
 * @param props.className - Additional CSS classes
 * @param props.value - Unique identifier for the item
 * @param props.disabled - Whether the item is disabled
 * @param props.children - Item content (AccordionTrigger and AccordionContent)
 * 
 * @returns Accordion item element
 * 
 * @example
 * ```tsx
 * <AccordionItem value="faq-1" className="border rounded-lg">
 *   <AccordionTrigger>What services do you offer?</AccordionTrigger>
 *   <AccordionContent>
 *     We offer ERP implementation, AI automation, and custom development.
 *   </AccordionContent>
 * </AccordionItem>
 * ```
 */
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

/**
 * Accordion trigger component that toggles the item's open state.
 * Includes a chevron icon that rotates when the item is open.
 * 
 * @param props - Accordion trigger properties
 * @param props.className - Additional CSS classes
 * @param props.children - Trigger content (typically text)
 * @param props.disabled - Whether the trigger is disabled
 * 
 * @returns Accordion trigger element
 * 
 * @example
 * ```tsx
 * <AccordionTrigger className="text-lg font-semibold">
 *   How much does implementation cost?
 * </AccordionTrigger>
 * ```
 */
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

/**
 * Accordion content component that displays when the item is open.
 * Includes smooth animations for opening and closing.
 * 
 * @param props - Accordion content properties
 * @param props.className - Additional CSS classes
 * @param props.children - Content to display when open
 * 
 * @returns Accordion content element
 * 
 * @example
 * ```tsx
 * <AccordionContent className="text-gray-600">
 *   <p>Implementation costs vary based on your business needs.</p>
 *   <ul className="mt-2 list-disc list-inside">
 *     <li>Basic setup: $5,000 - $15,000</li>
 *     <li>Custom development: $10,000 - $50,000</li>
 *     <li>Enterprise solutions: $25,000+</li>
 *   </ul>
 * </AccordionContent>
 * ```
 */
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
