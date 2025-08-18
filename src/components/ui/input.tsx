/**
 * @fileoverview Input Component
 * 
 * A flexible, accessible input component with comprehensive styling and validation support.
 * Supports all HTML input types, file uploads, and includes focus/error states.
 * 
 * @component Input
 * @example
 * ```tsx
 * // Basic text input
 * <Input placeholder="Enter your name" />
 * 
 * // Email input with validation
 * <Input 
 *   type="email" 
 *   placeholder="Enter your email"
 *   required 
 * />
 * 
 * // Password input
 * <Input 
 *   type="password" 
 *   placeholder="Enter password"
 *   aria-describedby="password-error"
 * />
 * 
 * // File upload input
 * <Input 
 *   type="file" 
 *   accept="image/*"
 *   multiple 
 * />
 * 
 * // Number input with constraints
 * <Input 
 *   type="number" 
 *   min="0" 
 *   max="100"
 *   step="1"
 * />
 * 
 * // Input with error state
 * <Input 
 *   aria-invalid="true"
 *   aria-describedby="error-message"
 *   placeholder="Invalid input"
 * />
 * ```
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input component interface extending HTML input props.
 * Supports all standard HTML input attributes and types.
 */
interface InputProps extends React.ComponentProps<"input"> {
  /** Additional CSS classes to apply */
  className?: string
  /** HTML input type attribute */
  type?: string
  /** Whether the input is disabled */
  disabled?: boolean
  /** Whether the input is required */
  required?: boolean
  /** Placeholder text */
  placeholder?: string
  /** Current value of the input */
  value?: string | number | readonly string[]
  /** Default value of the input */
  defaultValue?: string | number | readonly string[]
  /** Name attribute for form submission */
  name?: string
  /** ID attribute for accessibility */
  id?: string
  /** ARIA attributes for accessibility */
  "aria-describedby"?: string
  /** ARIA invalid state */
  "aria-invalid"?: boolean | "true" | "false"
  /** Input event handlers */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
}

/**
 * Versatile input component with comprehensive styling and accessibility features.
 * 
 * Features:
 * - Supports all HTML input types (text, email, password, file, number, etc.)
 * - Built-in focus and error states with visual indicators
 * - File upload support with custom styling
 * - Responsive design with mobile optimizations
 * - Full accessibility support with ARIA attributes
 * - Dark mode support
 * 
 * @param props - Input properties
 * @param props.className - Additional CSS classes
 * @param props.type - HTML input type (text, email, password, file, number, etc.)
 * @param props.placeholder - Placeholder text
 * @param props.disabled - Whether input is disabled
 * @param props.required - Whether input is required
 * @param props.value - Controlled input value
 * @param props.defaultValue - Uncontrolled input default value
 * @param props.name - Form field name
 * @param props.id - Unique identifier
 * @param props.aria-describedby - ID of element describing the input
 * @param props.aria-invalid - Whether input has invalid value
 * @param props.onChange - Change event handler
 * @param props.onFocus - Focus event handler
 * @param props.onBlur - Blur event handler
 * @param props.onKeyDown - Key down event handler
 * @param props.onKeyUp - Key up event handler
 * 
 * @returns HTML input element with enhanced styling and accessibility
 * 
 * @example
 * ```tsx
 * // Controlled input with validation
 * const [email, setEmail] = useState("")
 * const [error, setError] = useState("")
 * 
 * const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   const value = e.target.value
 *   setEmail(value)
 *   
 *   if (value && !/\S+@\S+\.\S+/.test(value)) {
 *     setError("Please enter a valid email address")
 *   } else {
 *     setError("")
 *   }
 * }
 * 
 * return (
 *   <div className="space-y-2">
 *     <Input
 *       type="email"
 *       placeholder="Enter your email"
 *       value={email}
 *       onChange={handleEmailChange}
 *       aria-invalid={!!error}
 *       aria-describedby={error ? "email-error" : undefined}
 *       required
 *     />
 *     {error && (
 *       <p id="email-error" className="text-sm text-destructive">
 *         {error}
 *       </p>
 *     )}
 *   </div>
 * )
 * 
 * // File upload with preview
 * const [files, setFiles] = useState<FileList | null>(null)
 * 
 * return (
 *   <div className="space-y-4">
 *     <Input
 *       type="file"
 *       accept="image/*"
 *       multiple
 *       onChange={(e) => setFiles(e.target.files)}
 *       className="cursor-pointer"
 *     />
 *     {files && (
 *       <div className="grid grid-cols-2 gap-2">
 *         {Array.from(files).map((file, index) => (
 *           <img
 *             key={index}
 *             src={URL.createObjectURL(file)}
 *             alt={file.name}
 *             className="w-full h-24 object-cover rounded"
 *           />
 *         ))}
 *       </div>
 *     )}
 *   </div>
 * )
 * ```
 */
function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
