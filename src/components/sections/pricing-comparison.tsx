import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PricingComparisonTable() {
    const comparisonData = [
        {
            category: "Core Features",
            items: [
                { feature: "Users included", starter: "5", professional: "20", enterprise: "Unlimited" },
                { feature: "ERPNext Modules", starter: "Basic (Accts, CRM)", professional: "All Modules", enterprise: "All Modules + Custom" },
                { feature: "Storage", starter: "5 GB", professional: "50 GB", enterprise: "Unlimited" },
                { feature: "Multi-currency", starter: true, professional: true, enterprise: true },
                { feature: "Multi-company", starter: false, professional: "Up to 3", enterprise: "Unlimited" },
            ]
        },
        {
            category: "Support & Services",
            items: [
                { feature: "Support Channel", starter: "Email", professional: "Email & Chat", enterprise: "24/7 Priority" },
                { feature: "Response Time", starter: "48 Hours", professional: "12 Hours", enterprise: "1 Hour (SLA)" },
                { feature: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
                { feature: "Training Sessions", starter: "Pre-recorded", professional: "3 Live Sessions", enterprise: "Custom On-site" },
            ]
        },
        {
            category: "Technical Specs",
            items: [
                { feature: "API Access", starter: false, professional: true, enterprise: true },
                { feature: "Custom Scripts", starter: false, professional: "Restricted", enterprise: "Full Access" },
                { feature: "Daily Backups", starter: true, professional: true, enterprise: true },
                { feature: "Uptime SLA", starter: "99.0%", professional: "99.9%", enterprise: "99.99%" },
            ]
        }
    ];

    const renderCell = (value: string | boolean) => {
        if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
        if (value === false) return <X className="w-5 h-5 text-gray-300 mx-auto" />;
        return <span className="font-medium text-gray-700">{value}</span>;
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
            <Table>
                <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead className="w-[300px] text-lg font-bold text-[#1A5276]">Feature</TableHead>
                        <TableHead className="text-center text-lg font-bold text-[#1A5276]">Starter</TableHead>
                        <TableHead className="text-center text-lg font-bold text-orange-600 bg-orange-50/50">Professional</TableHead>
                        <TableHead className="text-center text-lg font-bold text-[#1A5276]">Enterprise</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {comparisonData.map((section, idx) => (
                        <React.Fragment key={idx}>
                            <TableRow className="bg-gray-50/50 hover:bg-gray-100/50">
                                <TableCell colSpan={4} className="py-3 font-bold text-sm uppercase tracking-wider text-gray-500 pl-6">
                                    {section.category}
                                </TableCell>
                            </TableRow>
                            {section.items.map((item, itemIdx) => (
                                <TableRow key={itemIdx} className={itemIdx % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                                    <TableCell className="font-medium text-gray-700 py-4 pl-6 flex items-center gap-2">
                                        {item.feature}
                                        {/* Example Tooltip if needed */}
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <HelpCircle className="w-4 h-4 text-gray-300 hover:text-gray-500 transition-colors" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Details about {item.feature}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </TableCell>
                                    <TableCell className="text-center py-4">{renderCell(item.starter)}</TableCell>
                                    <TableCell className="text-center py-4 bg-orange-50/10 font-medium">{renderCell(item.professional)}</TableCell>
                                    <TableCell className="text-center py-4">{renderCell(item.enterprise)}</TableCell>
                                </TableRow>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
