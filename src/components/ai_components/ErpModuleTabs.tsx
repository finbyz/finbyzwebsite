import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  Wallet,
  Users,
  Package,
  ShoppingCart,
  Settings,
  Briefcase,
  Headphones,
  Globe,
  Building
} from "lucide-react";

type ModuleKey =
  | "account"
  | "crm"
  | "inventory"
  | "purchase"
  | "manufacturing"
  | "human_resource"
  | "asset"
  | "project"
  | "support"
  | "exim";

interface ModuleDef {
  key: ModuleKey;
  title: string;
  icon: React.ReactNode;
}

const modules: ModuleDef[] = [
  { key: "account", title: "Account", icon: <Wallet className="w-5 h-5" /> },
  { key: "crm", title: "CRM", icon: <Users className="w-5 h-5" /> },
  { key: "inventory", title: "Inventory", icon: <Package className="w-5 h-5" /> },
  { key: "purchase", title: "Purchase", icon: <ShoppingCart className="w-5 h-5" /> },
  { key: "manufacturing", title: "Manufacturing", icon: <Settings className="w-5 h-5" /> },
  { key: "human_resource", title: "HR", icon: <Users className="w-5 h-5" /> },
  { key: "asset", title: "Asset", icon: <Building className="w-5 h-5" /> },
  { key: "project", title: "Project", icon: <Briefcase className="w-5 h-5" /> },
  { key: "support", title: "Support", icon: <Headphones className="w-5 h-5" /> },
  { key: "exim", title: "Exim", icon: <Globe className="w-5 h-5" /> },
];

// Content data for each module
const moduleContent: Record<ModuleKey, { description: string; features: string[]; imageSrc: string }> = {
  account: {
    description: "Accounts module delivers insight into ... You can also manage your assets with automated depreciation entries...",
    features: [
      "Multi-company accounting with combined reports",
      "Automated payment reminders",
      "Integration with CRM",
    ],
    imageSrc: "/images/module-account.svg",
  },
  crm: {
    description: "The CRM Module of ERP solutions allows you to optimally manage your relationship with customers ...",
    features: [
      "Manage full conversion cycle from Lead → Inquiry → Customer",
      "Follow-up call reminders",
      "Timeline feature per customer/lead",
    ],
    imageSrc: "/images/module-crm.svg",
  },
  inventory: {
    description: "Inventory module helps manage stock levels, movements, tracking across warehouses etc.",
    features: ["Stock movement tracking", "Min/Max reordering rules", "Batch / serial management"],
    imageSrc: "/images/module-inventory.svg",
  },
  purchase: {
    description: "Purchase module streamlines procurement, supplier management, purchase orders etc.",
    features: ["Supplier quotations", "PO generation & tracking", "Approval workflows"],
    imageSrc: "/images/module-purchase.svg",
  },
  manufacturing: {
    description: "Manufacturing module handles production planning, BOM, work orders etc.",
    features: ["Bill of Materials", "Work order routing", "Capacity planning"],
    imageSrc: "/images/module-manufacturing.svg",
  },
  human_resource: {
    description: "HR module for employee data, payroll, attendance etc.",
    features: ["Employee records", "Attendance & leave", "Payroll processing"],
    imageSrc: "/images/module-hr.svg",
  },
  asset: {
    description: "Asset module handles fixed assets, depreciation etc.",
    features: ["Asset acquisition", "Depreciation scheduling", "Asset disposal"],
    imageSrc: "/images/asset.svg",
  },
  project: {
    description: "Project module for managing projects, tasks, budgets etc.",
    features: ["Task management", "Project budgeting", "Milestone tracking"],
    imageSrc: "/images/Project Management.svg",
  },
  support: {
    description: "Support module to manage tickets, SLAs, issue resolution.",
    features: ["Ticketing system", "SLA tracking", "Agent assignments"],
    imageSrc: "/images/module-support.svg",
  },
  exim: {
    description: "Exim (Import / Export) module for handling global trade processes.",
    features: ["Import/export documentation", "Customs formalities", "Trade compliance"],
    imageSrc: "/images/module-exim.svg",
  },
};

export default function ErpModulesTabs() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[#1A5276] text-center mb-8">Other Modules of ERP</h2>
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="flex flex-wrap justify-center space-x-2 border-b border-gray-200 overflow-x-auto">
            {modules.map((mod) => (
              <TabsTrigger
                key={mod.key}
                value={mod.key}
                className={cn(
                  "flex items-center px-4 py-2 space-x-2 text-sm font-medium transition",
                  "data-[state=active]:text-white data-[state=active]:bg-orange-600 data-[state=active]:border-transparent",
                  "hover:bg-orange-50 data-[state=inactive]:text-gray-600"
                )}
              >
                {/* {mod.icon} */}
                <span>{mod.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {modules.map((mod) => {
            const content = moduleContent[mod.key];
            return (
              <TabsContent key={mod.key} value={mod.key} className="pt-6">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{mod.title}</h3>
                    <p className="text-gray-600 mb-4">{content.description}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {content.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <img
                      src={content.imageSrc}
                      alt={`${mod.title} module`}
                      width={500}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
