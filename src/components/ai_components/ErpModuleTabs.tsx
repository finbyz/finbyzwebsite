import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  icon: React.ReactNode; // or image path
}

const modules: ModuleDef[] = [
  { key: "account", title: "Account", icon: <Image src="/icons/account.svg" alt="Account" width={24} height={24} /> },
  { key: "crm", title: "CRM", icon: <Image src="/icons/crm.svg" alt="CRM" width={24} height={24} /> },
  { key: "inventory", title: "Inventory", icon: <Image src="/icons/inventory.svg" alt="Inventory" width={24} height={24} /> },
  { key: "purchase", title: "Purchase", icon: <Image src="/icons/purchase.svg" alt="Purchase" width={24} height={24} /> },
  { key: "manufacturing", title: "Manufacturing", icon: <Image src="/icons/manufacturing.svg" alt="Manufacturing" width={24} height={24} /> },
  { key: "human_resource", title: "Human Resource", icon: <Image src="/icons/hr.svg" alt="Human Resource" width={24} height={24} /> },
  { key: "asset", title: "Asset", icon: <Image src="/icons/asset.svg" alt="Asset" width={24} height={24} /> },
  { key: "project", title: "Project", icon: <Image src="/icons/project.svg" alt="Project" width={24} height={24} /> },
  { key: "support", title: "Support", icon: <Image src="/icons/support.svg" alt="Support" width={24} height={24} /> },
  { key: "exim", title: "Exim", icon: <Image src="/icons/exim.svg" alt="Exim" width={24} height={24} /> },
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
    imageSrc: "/images/account-module.png",
  },
  crm: {
    description: "The CRM Module of ERP solutions allows you to optimally manage your relationship with customers ...",
    features: [
      "Manage full conversion cycle from Lead → Inquiry → Customer",
      "Follow-up call reminders",
      "Timeline feature per customer/lead",
    ],
    imageSrc: "/images/crm-module.png",
  },
  inventory: {
    description: "Inventory module helps manage stock levels, movements, tracking across warehouses etc.",
    features: ["Stock movement tracking", "Min/Max reordering rules", "Batch / serial management"],
    imageSrc: "/images/inventory-module.png",
  },
  purchase: {
    description: "Purchase module streamlines procurement, supplier management, purchase orders etc.",
    features: ["Supplier quotations", "PO generation & tracking", "Approval workflows"],
    imageSrc: "/images/purchase-module.png",
  },
  manufacturing: {
    description: "Manufacturing module handles production planning, BOM, work orders etc.",
    features: ["Bill of Materials", "Work order routing", "Capacity planning"],
    imageSrc: "/images/manufacturing-module.png",
  },
  human_resource: {
    description: "HR module for employee data, payroll, attendance etc.",
    features: ["Employee records", "Attendance & leave", "Payroll processing"],
    imageSrc: "/images/hr-module.png",
  },
  asset: {
    description: "Asset module handles fixed assets, depreciation etc.",
    features: ["Asset acquisition", "Depreciation scheduling", "Asset disposal"],
    imageSrc: "/images/asset-module.png",
  },
  project: {
    description: "Project module for managing projects, tasks, budgets etc.",
    features: ["Task management", "Project budgeting", "Milestone tracking"],
    imageSrc: "/images/project-module.png",
  },
  support: {
    description: "Support module to manage tickets, SLAs, issue resolution.",
    features: ["Ticketing system", "SLA tracking", "Agent assignments"],
    imageSrc: "/images/support-module.png",
  },
  exim: {
    description: "Exim (Import / Export) module for handling global trade processes.",
    features: ["Import/export documentation", "Customs formalities", "Trade compliance"],
    imageSrc: "/images/exim-module.png",
  },
};

export default function ErpModulesTabs() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Other Modules of ERP</h2>
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="flex flex-wrap justify-center space-x-2 border-b border-gray-200 overflow-x-auto">
            {modules.map((mod) => (
              <TabsTrigger
                key={mod.key}
                value={mod.key}
                className={cn(
                  "flex items-center px-4 py-2 space-x-2 text-sm font-medium transition",
                  "data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:border-transparent",
                  "hover:bg-blue-50 data-[state=inactive]:text-gray-600"
                )}
              >
                {mod.icon}
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
