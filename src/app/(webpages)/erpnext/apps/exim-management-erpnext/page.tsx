import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe2, FileText, ShieldCheck, TrendingUp, Award, Zap, Target } from 'lucide-react';
import { contactUrl } from '@/lib/contact';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Export-Import Management (EXIM) in ERPNext"
        highlightWords={["Export-Import", "EXIM"]}
        description="The Exim App is a comprehensive Export-Import management solution built for ERPNext that addresses critical gaps in managing export-import operations. Streamline your entire export cycle from proforma invoice generation to export benefit claims."
        primaryButton={{
          text: 'Learn More',
          action: '#introduction',
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: contactUrl({ notes: 'I am interested in EXIM Management App for ERPNext', referer: '/erpnext/apps/exim-management-erpnext' }),
        }}
        heroImage={{
          alt: 'Export-Import Management Solution for ERPNext',
          src: '/images/exim.png',
        }}
      />

      <Section useGradient id="introduction">
        <div className="container-custom py-8">
          <Card className="border-none bg-muted/40 shadow-none">
            <CardHeader className="flex flex-row items-center gap-3">
              <Globe2 className="text-primary shrink-0" size={28} />
              <CardTitle className="text-2xl font-bold text-[#1A5276]">Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg text-muted-foreground">
                The Exim App is a comprehensive Export-Import management solution built for ERPNext that addresses critical gaps in managing export-import operations. This application streamlines the entire export cycle from proforma invoice generation to export benefit claims, ensuring compliance, accuracy, and profitability.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4">
                This app provides a complete guide to understanding, implementing, and utilizing the Exim App to manage your export-import business operations efficiently within ERPNext.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <List
            title="What is EXIM?"
            items={[
              'Contract management (LC - Letter of Credit) - Manage and track all LC contract terms, documents, and compliance requirements throughout the export lifecycle.',
              'Documentation generation and verification - Automatically generate 9+ export document types with standardized formats, eliminating manual errors and ensuring compliance.',
              'Export benefit claims (RoDTEP, Drawback, GST Refunds) - Automate the tracking and claiming of government incentives with balance sheet visibility and claims dashboard.',
              'Currency risk management - Centralize forward contract tracking, utilization, and cancellation with automatic exchange gain/loss calculation and maturity notifications.',
              'License tracking and compliance - Manage Advance Authorization Licenses with automatic validation, utilization tracking, and compliance enforcement to prevent penalties.',
            ]}
            iconColor="text-blue-600"
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <List
            title="Problems Addressed"
            items={[
              'Execution Gaps Against LC Contracts - Detailed contract terms are often forgotten after 1-2 months when goods are shipped, leading to penalties and charges. The app provides a checklist reminder system to verify all documents and clauses.',
              'Errors in Export Documents - Manual copy-pasting from Excel/Word leads to carried-over errors, missed critical details, and accidental sharing of sensitive information. Automated documentation eliminates these risks.',
              'Missed Claims of RoDTEP and Drawback - Government incentives are often missed due to no automated tracking, busy schedules, and no visibility of pending receivables in the balance sheet. The app automates the entire claims process.',
              'Unhedged Currency Risks - Exchange rate fluctuations, wrong forward contract usage, and forgotten maturities cause significant losses. Centralized forward contract management with proactive alerts addresses this.',
              'Penalty for License Errors - Copy-pasting old license numbers, over/under utilization of Advance Authorization Licenses, and compliance violations lead to financial penalties. Automatic validation prevents these errors.',
            ]}
            iconColor="text-orange-600"
            Icon={ShieldCheck}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8 text-[#1A5276]">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="text-blue-600 shrink-0" size={24} />
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Contract Terms (LC Management)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Comprehensive LC details capture</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Document requirements checklist</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Document specifications tracking</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Automated compliance reminders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-600 shrink-0" size={24} />
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Export Documents Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> 9+ document types auto-generated</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Standardized formats</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Error-free documentation</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Complete audit trail</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-green-600 shrink-0" size={24} />
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Export Benefits Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> RoDTEP management</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Duty Drawback tracking</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> GST Refund processing</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Automatic journal entries</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Balance sheet visibility</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Claims dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="text-purple-600 shrink-0" size={24} />
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Forward Contract Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Centralized contract repository</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Utilization tracking</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Cancellation handling</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Exchange gain/loss calculation</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Maturity notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-red-600 shrink-0" size={24} />
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Advance Authorization License</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> License details management</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Automatic validation</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Utilization tracking</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Compliance enforcement</li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Penalty prevention</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8 text-[#1A5276]">Complete Workflow</h2>

          <div className="space-y-6">
            <Card className="border border-blue-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">0</span>
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Proforma Invoice (Initial Quotation Stage)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Proforma Invoice is the initial document sent to buyers before confirming the order. The EXIM App adds critical export-related fields like Port of Loading, Port of Discharge, Inco Terms, Payment Terms, and Shipping Terms. Once accepted, it converts to Sales Order with all fields auto-populated.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-green-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Contract Setup (Sales Order Stage)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  LC Contracts contain detailed terms agreed upon during sales order creation. The Contract Terms Document captures LC number, contract specifications, payment terms, shipping terms, and document requirements. When creating invoices later, the system displays a checklist reminder to verify all documents and checks.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-amber-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Invoice Creation & Documentation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Fill in export-related details in the structured EXIM section on the Sales Invoice. The system automatically generates all required export documents including Commercial Invoice, Packing List, Custom Invoice, Export Value Declaration, Drawback Declaration, Draft B/L, VGM, Annexure CI, and INR Export details. Eliminates copy-paste errors and creates system records for audit trail.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Export Benefits Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  When creating an invoice, the system automatically captures RoDTEP and Duty Drawback rates and calculates benefit amounts. On submission, automatic Journal Vouchers are generated for receivables, with amounts appearing on the balance sheet. Create Customs Documents for claim periods, submit claims, record script numbers, manage licenses, and track payments through the dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-red-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">Currency Risk Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Add forward contract details including contract number, currency, amount, exchange rate, maturity date, and bank details. At payment entry, select the appropriate forward contract from the dropdown. The system marks contracts as utilized, tracks remaining balance, and creates Journal Vouchers for exchange gain/loss on cancellation. Set up notifications for upcoming maturities to avoid penalties.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-teal-100 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="bg-teal-100 text-teal-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                  <CardTitle className="text-lg font-semibold text-[#1A5276]">License Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Create Advance Authorization License documents with license number, issue date, validity, permitted import items, and required export items. When creating Purchase Invoices (Import) or Sales Invoices (Export), add License Reference in the EXIM section. The system validates sufficient quantity, validity period, and item specifications. Automatic deduction from license balance with real-time view of remaining capacity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <List
            title="Operational Benefits"
            items={[
              'Eliminate Manual Errors: Automated documentation prevents copy-paste mistakes across all export documents.',
              'Ensure Compliance: Built-in validations for LC terms and licenses ensure regulatory compliance at every step.',
              'Save Time: Auto-generation of 9+ export documents on a single click eliminates hours of manual work.',
              'Reduce Penalties: Proactive alerts and validation checks prevent costly compliance violations.',
            ]}
            iconColor="text-blue-600"
            Icon={Award}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <List
            title="Financial Benefits"
            items={[
              'Maximize Claims: Never miss RoDTEP or Drawback claims with automated tracking and dashboard visibility.',
              'Improve Cash Flow: Track all government receivables on your balance sheet with clear visibility of blocked funds.',
              'Manage Currency Risk: Systematic forward contract management with utilization tracking and maturity alerts.',
              'Reduce Losses: Prevent contract cancellation fees with proactive maturity notifications and centralized tracking.',
              'Better Working Capital: Visibility of blocked funds with government enables better cash flow planning.',
            ]}
            iconColor="text-green-600"
            Icon={TrendingUp}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <List
            title="Strategic Benefits"
            items={[
              'Scale Operations: Handle increasing export volumes efficiently with automated workflows and standardized processes.',
              'Audit Trail: Complete documentation history provides full traceability for audits and compliance reviews.',
              'Team Accountability: Checkbox verification system ensures every team member completes required checks.',
              'Data-Driven Decisions: Reports and dashboards provide actionable insights for management decisions.',
              'Professional Image: Error-free documentation enhances your reputation with international buyers and partners.',
            ]}
            iconColor="text-purple-600"
            Icon={Target}
          />
        </div>
      </Section>
    </>
  );
}
