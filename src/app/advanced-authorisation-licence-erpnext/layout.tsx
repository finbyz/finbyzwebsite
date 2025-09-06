import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Authorisation Licence',
  description: 'This app in ERPNext helps manage Advance Authorisation Licences, which exempt import duties on raw materials for manufacturing export products. The app ensures licenses are properly utilized to prevent penalties and loss of duty drawback benefits.',
  keywords: ["Advanced Authorisation Licence","ERPNext","Advance Authorization License","Import Duty Exemption","Export License Management","Duty Drawback","Foreign Trade Policy","India Trade License"],
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
