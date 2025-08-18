"use client";

import { useState } from "react";
import TimelineComponent from "@/components/ui/TimelineComponent";
import AlternativeTimeline from "@/components/ui/AlternativeTimeline";
import VerticalTimeline from "@/components/ui/VerticalTimeline";
import ScrollTimeline from "@/components/ui/ScrollTimeline";
import YearFilterTimeline from "@/components/ui/YearFilterTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Grid3X3, 
  ArrowRight, 
  Clock, 
  Palette,
  Layout,
  MousePointer,
  Filter
} from "lucide-react";

export default function TimelineDemo() {
  const [activeTimeline, setActiveTimeline] = useState<'grid' | 'horizontal' | 'vertical' | 'scroll' | 'year-filter'>('year-filter');

  const timelineOptions = [
    {
      id: 'grid',
      name: 'Grid Timeline',
      description: 'Filterable grid layout with year-based filtering',
      icon: Grid3X3,
      features: ['Year filtering', 'Grid layout', 'Category icons', 'Stats section']
    },
    {
      id: 'horizontal',
      name: 'Horizontal Timeline',
      description: 'Dark theme with horizontal scrolling cards',
      icon: ArrowRight,
      features: ['Horizontal scroll', 'Dark theme', 'Achievement lists', 'Progress indicator']
    },
    {
      id: 'vertical',
      name: 'Vertical Timeline',
      description: 'Classic vertical timeline with alternating sides',
      icon: Layout,
      features: ['Vertical layout', 'Alternating sides', 'Color-coded cards', 'Impact sections']
    },
    {
      id: 'scroll',
      name: 'Scroll Timeline',
      description: 'Single section with scroll-based navigation',
      icon: MousePointer,
      features: ['Scroll navigation', 'Full-screen', 'Keyboard controls', 'Progress bar']
    },
    {
      id: 'year-filter',
      name: 'Year Filter Timeline',
      description: 'Horizontal year navigation with single card display',
      icon: Filter,
      features: ['Year buttons', 'Single card', 'Clean design', 'Category icons']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="py-16 text-center">
        <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          Timeline Components
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Five Different Timeline Approaches
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Explore different ways to showcase Finbyz's journey through the years.
        </p>
      </div>

      {/* Timeline Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {timelineOptions.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transition-all duration-300 ${
                activeTimeline === option.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                  : 'hover:shadow-md hover:scale-102'
              }`}
              onClick={() => setActiveTimeline(option.id as any)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  activeTimeline === option.id
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  <option.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {option.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">{option.description}</p>
                <div className="space-y-2">
                  {option.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-sm text-slate-500">
                      <Clock className="w-3 h-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline Components */}
      <div className="mb-16">
        {activeTimeline === 'grid' && <TimelineComponent />}
        {activeTimeline === 'horizontal' && <AlternativeTimeline />}
        {activeTimeline === 'vertical' && <VerticalTimeline />}
        {activeTimeline === 'scroll' && <ScrollTimeline />}
        {activeTimeline === 'year-filter' && <YearFilterTimeline />}
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Palette className="w-6 h-6" />
              Component Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Grid Timeline</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Horizontal Timeline</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Vertical Timeline</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Scroll Timeline</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">Year Filter Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-700">Layout</td>
                    <td className="py-4 px-4 text-center text-slate-600">Grid with filtering</td>
                    <td className="py-4 px-4 text-center text-slate-600">Horizontal scroll</td>
                    <td className="py-4 px-4 text-center text-slate-600">Vertical alternating</td>
                    <td className="py-4 px-4 text-center text-slate-600">Single section scroll</td>
                    <td className="py-4 px-4 text-center text-slate-600">Year navigation + card</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-700">Theme</td>
                    <td className="py-4 px-4 text-center text-slate-600">Light</td>
                    <td className="py-4 px-4 text-center text-slate-600">Dark</td>
                    <td className="py-4 px-4 text-center text-slate-600">Light</td>
                    <td className="py-4 px-4 text-center text-slate-600">Dark</td>
                    <td className="py-4 px-4 text-center text-slate-600">Light</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-700">Navigation</td>
                    <td className="py-4 px-4 text-center text-slate-600">Year filtering</td>
                    <td className="py-4 px-4 text-center text-slate-600">Navigation buttons</td>
                    <td className="py-4 px-4 text-center text-slate-600">Hover effects</td>
                    <td className="py-4 px-4 text-center text-slate-600">Scroll/Keyboard</td>
                    <td className="py-4 px-4 text-center text-slate-600">Year buttons</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-700">Interactivity</td>
                    <td className="py-4 px-4 text-center text-slate-600">Filter buttons</td>
                    <td className="py-4 px-4 text-center text-slate-600">Scroll buttons</td>
                    <td className="py-4 px-4 text-center text-slate-600">Hover effects</td>
                    <td className="py-4 px-4 text-center text-slate-600">Scroll wheel</td>
                    <td className="py-4 px-4 text-center text-slate-600">Button clicks</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium text-slate-700">Additional Features</td>
                    <td className="py-4 px-4 text-center text-slate-600">Stats section</td>
                    <td className="py-4 px-4 text-center text-slate-600">Achievement lists</td>
                    <td className="py-4 px-4 text-center text-slate-600">Impact sections</td>
                    <td className="py-4 px-4 text-center text-slate-600">Progress bar</td>
                    <td className="py-4 px-4 text-center text-slate-600">Category icons</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-700">Best For</td>
                    <td className="py-4 px-4 text-center text-slate-600">Overview & filtering</td>
                    <td className="py-4 px-4 text-center text-slate-600">Detailed exploration</td>
                    <td className="py-4 px-4 text-center text-slate-600">Chronological story</td>
                    <td className="py-4 px-4 text-center text-slate-600">Immersive experience</td>
                    <td className="py-4 px-4 text-center text-slate-600">Clean & simple</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Guide */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800">
              How to Use These Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">1. Import the Component</h4>
              <code className="text-sm bg-slate-100 p-2 rounded block">
                import YearFilterTimeline from "@/components/ui/YearFilterTimeline";
              </code>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">2. Use in Your Page</h4>
              <code className="text-sm bg-slate-100 p-2 rounded block">
                {`<YearFilterTimeline />`}
              </code>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">3. Navigation Methods</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Click year buttons to navigate between items</li>
                <li>• "All" button shows the latest item (2025)</li>
                <li>• Single card displays detailed information</li>
                <li>• Category icons and badges for visual appeal</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 