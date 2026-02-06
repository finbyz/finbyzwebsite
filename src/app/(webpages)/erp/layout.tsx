
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Resource Planning (ERP) Solutions | Finbyz Tech",
    description: "Streamline your entire business operation with our comprehensive ERP solutions. From finance to supply chain, gain complete control and visibility.",
    keywords: "ERP Solutions, Enterprise Resource Planning, Business Management Software, ERPNext Implementation, Financial Management, Supply Chain Management",
    openGraph: {
        title: "Enterprise Resource Planning (ERP) Solutions | Finbyz Tech",
        description: "Streamline your entire business operation with our comprehensive ERP solutions. From finance to supply chain, gain complete control and visibility.",
        type: "website",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    );
}
