/**
 * @fileoverview Dialog Component System
 * 
 * A comprehensive modal dialog system built with Radix UI primitives.
 * Provides accessible, keyboard-navigable modal dialogs with overlay, animations,
 * and flexible content structure.
 * 
 * @component Dialog
 * @example
 * ```tsx
 * // Basic dialog
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Edit Profile</DialogTitle>
 *       <DialogDescription>
 *         Make changes to your profile here. Click save when you're done.
 *       </DialogDescription>
 *     </DialogHeader>
 *     <div className="grid gap-4 py-4">
 *       <div className="grid grid-cols-4 items-center gap-4">
 *         <Label htmlFor="name" className="text-right">
 *           Name
 *         </Label>
 *         <Input
 *           id="name"
 *           defaultValue="Pedro Duarte"
 *           className="col-span-3"
 *         />
 *       </div>
 *     </div>
 *     <DialogFooter>
 *       <Button type="submit">Save changes</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * 
 * // Dialog without close button
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Confirm Action</Button>
 *   </DialogTrigger>
 *   <DialogContent showCloseButton={false}>
 *     <DialogHeader>
 *       <DialogTitle>Are you sure?</DialogTitle>
 *       <DialogDescription>
 *         This action cannot be undone.
 *       </DialogDescription>
 *     </DialogHeader>
 *     <DialogFooter>
 *       <Button variant="outline">Cancel</Button>
 *       <Button variant="destructive">Delete</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Main dialog root component that manages the dialog state.
 * Wraps the Radix UI Dialog.Root primitive.
 * 
 * @param props - Dialog root properties
 * @param props.open - Whether the dialog is open (controlled)
 * @param props.defaultOpen - Whether the dialog is open by default (uncontrolled)
 * @param props.onOpenChange - Callback when open state changes
 * @param props.modal - Whether the dialog is modal (default: true)
 * @param props.children - Dialog content
 * 
 * @returns Dialog root element
 * 
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false)
 * 
 * <Dialog open={open} onOpenChange={setOpen}>
 *   <DialogTrigger>Open</DialogTrigger>
 *   <DialogContent>Content</DialogContent>
 * </Dialog>
 * ```
 */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * Dialog trigger component that opens the dialog when clicked.
 * Can be rendered as any element using the asChild prop.
 * 
 * @param props - Dialog trigger properties
 * @param props.asChild - Whether to render as child component
 * @param props.children - Trigger content
 * 
 * @returns Dialog trigger element
 * 
 * @example
 * ```tsx
 * <DialogTrigger asChild>
 *   <Button>Open Dialog</Button>
 * </DialogTrigger>
 * ```
 */
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * Dialog portal component that renders the dialog outside the normal DOM hierarchy.
 * Ensures proper z-index stacking and positioning.
 * 
 * @param props - Dialog portal properties
 * @param props.children - Portal content
 * 
 * @returns Dialog portal element
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * Dialog close component that closes the dialog when activated.
 * Can be used as a button or any other interactive element.
 * 
 * @param props - Dialog close properties
 * @param props.asChild - Whether to render as child component
 * @param props.children - Close button content
 * 
 * @returns Dialog close element
 * 
 * @example
 * ```tsx
 * <DialogClose asChild>
 *   <Button variant="outline">Cancel</Button>
 * </DialogClose>
 * ```
 */
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * Dialog overlay component that provides the backdrop for the modal.
 * Includes fade-in/out animations and click-to-close functionality.
 * 
 * @param props - Dialog overlay properties
 * @param props.className - Additional CSS classes
 * @param props.children - Overlay content
 * 
 * @returns Dialog overlay element
 * 
 * @example
 * ```tsx
 * <DialogOverlay className="bg-black/80" />
 * ```
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Dialog content component that contains the main dialog content.
 * Includes the overlay, animations, and optional close button.
 * 
 * @param props - Dialog content properties
 * @param props.className - Additional CSS classes
 * @param props.children - Dialog content
 * @param props.showCloseButton - Whether to show the close button (default: true)
 * 
 * @returns Dialog content element
 * 
 * @example
 * ```tsx
 * <DialogContent className="max-w-md">
 *   <DialogHeader>
 *     <DialogTitle>Title</DialogTitle>
 *   </DialogHeader>
 *   <div>Content goes here</div>
 *   <DialogFooter>
 *     <Button>Action</Button>
 *   </DialogFooter>
 * </DialogContent>
 * ```
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/**
 * Dialog header component for title and description.
 * Provides consistent spacing and responsive text alignment.
 * 
 * @param props - Dialog header properties
 * @param props.className - Additional CSS classes
 * @param props.children - Header content (typically DialogTitle and DialogDescription)
 * 
 * @returns Dialog header element
 * 
 * @example
 * ```tsx
 * <DialogHeader>
 *   <DialogTitle>Edit Profile</DialogTitle>
 *   <DialogDescription>
 *     Make changes to your profile here.
 *   </DialogDescription>
 * </DialogHeader>
 * ```
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * Dialog footer component for action buttons.
 * Provides responsive layout with buttons aligned to the right on larger screens.
 * 
 * @param props - Dialog footer properties
 * @param props.className - Additional CSS classes
 * @param props.children - Footer content (typically action buttons)
 * 
 * @returns Dialog footer element
 * 
 * @example
 * ```tsx
 * <DialogFooter>
 *   <Button variant="outline">Cancel</Button>
 *   <Button>Save Changes</Button>
 * </DialogFooter>
 * ```
 */
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Dialog title component for the main heading.
 * Uses semantic HTML and provides proper accessibility attributes.
 * 
 * @param props - Dialog title properties
 * @param props.className - Additional CSS classes
 * @param props.children - Title text content
 * 
 * @returns Dialog title element
 * 
 * @example
 * ```tsx
 * <DialogTitle>Confirm Action</DialogTitle>
 * ```
 */
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Dialog description component for explanatory text.
 * Uses muted foreground color and provides additional context.
 * 
 * @param props - Dialog description properties
 * @param props.className - Additional CSS classes
 * @param props.children - Description text content
 * 
 * @returns Dialog description element
 * 
 * @example
 * ```tsx
 * <DialogDescription>
 *   This action cannot be undone. This will permanently delete your account.
 * </DialogDescription>
 * ```
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
