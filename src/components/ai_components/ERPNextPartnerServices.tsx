import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Wrench, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="text-primary w-8 h-8 mb-2" />, 
    title: "Consultation and Development of Strategy",
    description: "We offer strategic consultation aligned with your business goals, ensuring that ERPNext becomes a core driver of your success. As a top ERPNext Partner in Gujarat, we ensure your digital transformation is handled with precision."
  },
  {
    icon: <Wrench className="text-primary w-8 h-8 mb-2" />, 
    title: "Custom Implementation",
    description: "As a certified ERPNext Partner specializing in manufacturing ERP solutions, we tailor implementations to fit your business workflows and industry-specific requirements with expert-level customization and configuration."
  },
  {
    icon: <LifeBuoy className="text-primary w-8 h-8 mb-2" />, 
    title: "Ongoing Support and Maintenance",
    description: "With our certification as a Frappe Partner, we provide continuous support, upgrades, and performance optimization to keep your ERP system efficient and reliable long-term."
  }
];

export default function ERPNextPartnerServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, idx) => (
        <Card key={service.title} className="border-none shadow-lg hover:scale-[1.03] transition-transform duration-300 bg-white/90 cursor-pointer hover:shadow-xl ">
          <CardHeader className="flex flex-col items-center">
            {service.icon}
            <CardTitle className="text-lg text-center font-semibold mb-2">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-center">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
