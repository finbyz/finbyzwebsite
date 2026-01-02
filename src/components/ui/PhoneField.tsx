'use client';

import React from 'react';
import { Input } from './input';
import { CountryCodeSelect } from './CountryCodeSelect';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';

interface PhoneFieldProps {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  selectClassName?: string;
  showIcon?: boolean;
  name?: string;
}

export function PhoneField({
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  placeholder = "Phone Number",
  required = false,
  className,
  inputClassName,
  selectClassName,
  showIcon = false,
  name = "mobile"
}: PhoneFieldProps) {
  return (
    <div className={cn(
      "flex items-center w-full border border-gray-200 rounded-lg bg-white transition-all duration-200",
      "focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100",
      className
    )}>
      <CountryCodeSelect
        value={countryCode}
        onChange={onCountryCodeChange}
        className={cn("country-code-select--unified", selectClassName)}
      />

      <div className="phone-field-divider" />

      <div className="relative flex-1 flex items-center">
        {showIcon && (
          <Phone className="ml-3 text-gray-400 w-5 h-5 pointer-events-none shrink-0" />
        )}
        <Input
          type="tel"
          name={name}
          placeholder={placeholder}
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value.replace(/\D/g, ''))}
          required={required}
          className={cn(
            "border-none shadow-none focus-visible:ring-0 w-full bg-transparent px-3",
            showIcon && "pl-2", // Less padding if icon is present
            inputClassName
          )}
        />
      </div>
    </div>
  );
}

export default PhoneField;
