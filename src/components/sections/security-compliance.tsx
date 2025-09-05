import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

// ============================================================================
// SECURITY COMPLIANCE SECTION COMPONENT
// ============================================================================

export interface SecurityStat {
  metric: string;
  label: string;
  description: string;
  icon?: string;
  iconColor?: string;
  iconBg?: string;
}

export interface SecurityComplianceData {
  title?: string;
  subtitle?: string;
  securityStats: SecurityStat[];
  className?: string;
}

interface SecurityComplianceProps {
  data?: SecurityComplianceData;
  className?: string;
}

/**
 * Security Compliance section component
 */
export default function SecurityCompliance({ data, className }: SecurityComplianceProps) {
  if (!data) {
    return null;
  }

  const { title, subtitle, securityStats = [] } = data;

  const getIcon = (iconName?: string): LucideIcon | null => {
    if (!iconName) return null;
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || null;
  };

  return (
    <section className={cn('py-16 bg-gray-50', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Security Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityStats.map((stat, index) => {
            const IconComponent = getIcon(stat.icon);
            
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                {IconComponent && (
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                      stat.iconBg || 'bg-green-100'
                    )}
                    style={{ backgroundColor: stat.iconBg }}
                  >
                    <IconComponent
                      size={24}
                      style={{ color: stat.iconColor || '#27AE60' }}
                    />
                  </div>
                )}

                {/* Metric */}
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.metric}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
