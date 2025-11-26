'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import YouTubeEmbed from '@/components/sections/YouTubeEmbed';
import CTA from '@/components/sections/cta';
import ProcessStepImageCard from '@/components/ai_components/ProcessStepImageCard';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { BsQrCode } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdOutlinePayment } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { GiReceiveMoney } from 'react-icons/gi';
import { Banknote as LuBanknote } from 'lucide-react';
import Link from 'next/link';
import QuoteBlock from '@/components/ai_components/QuoteBlock';

export default function Page() {
  return (
    <>
      <div className='mt-6'></div>
      <HeroSection
        headline="Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation"
        highlightWords={["Electronic Invoicing", "Argentina"]}
        description="Implement AFIP-compliant electronic invoicing in ERPNext for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations."
        primaryButton={{
          text: 'Get Started',
          action: "#invoice"
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: () => {
            if (typeof window !== 'undefined') window.location.href = '/contact';
          }
        }}
        heroImage={{
          alt: 'Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation',
          src: '/images/Line Banner-41 (2)_11zon.png',
        }}
      />

      {/* Introduction & Compliance Overview */}
      <Section>
        <div className="container-custom py-8 flex flex-col gap-8">
        <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2 text-[#1A5276]">Introduction</h3>
          <div className="text-justify animate-fadeinup">
            <p className="text-lg text-gray-700">
              ERPNext is a versatile open-source ERP system that allows businesses to manage various operations efficiently. Implementing electronic-invoicing compliance in ERPNext ensures seamless integration with government tax regulations. It automates invoice generation, validation, and real-time reporting to tax authorities. This customization reduces manual errors, enhances accuracy, and streamlines financial operations. Businesses benefit from improved efficiency and compliance with legal standards.
            </p>
          </div>
        </div>
      </Section>


      <Section useGradient>
        <div className="container-custom py-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
            <span className='text-[#1A5276]'>Setup</span>
            </h3>
            <p className="text-gray-700 mb-4">
            Follow these steps to set up the Argentina Compliance doctype and enable electronic-invoicing features in ERPNext: 
            </p>
            <List
              title="1. Prerequisites"
              items={[
                'ERPNext version 14 or later is installed and running.',
                'You have System Manager or Administrator role.',
                'Your company’s Tax ID (CUIT) and AFIP Certificate & Key are available.',
                'Your system timezone is configured for Argentina/Buenos_Aires.'
              ]}
            />

            <List
              title="2. Installation"
              items={[
                'Navigate to your ERPNext bench directory: cd ~/frappe-bench',
                'Get the app from the repository: bench get-app argentina_compliance ',
                'Install the app on your site: bench --site yoursite.domain install-app argentina_compliance',
                'Restart the bench: bench restart'
              ]}
            />

            <List
              title="3. Installation Behavior "
              items={[
                'Tax Templates for VAT will be automatically created in the system.',
                'Required fields for Electronic Invoice will be automatically added in the Sales Invoice Doctype.',
                'Required Doctypes such as AFIP Setting and Electronic Invoice Log will be automatically created in the system.',
              ]}
            />

            <List
              title="4. Initial Configuration"
              items={[
                
              ]}
            />

            

      <Section>
        <div className="">
        <h6 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#1A5276]">Step 1: Create Required file</h6>
          <h6 className="text-2xl font-semibold mb-2 flex items-center gap-2 py-4">CSR (Certificate Signing Request)</h6>
        </div>
      </Section>

      <Section>
        <div className="text-justify">
          <div className="space-y-3 animate-fade-in-up">
          <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            1. Para obtener el certificado por primera vez, hay que dar de alta al DN. Para esto hay que presentar una ‘solicitud de certificado’ o ‘Certificate Signing Request’ (CSR).
            </p>
            <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            2. El CSR se genera en su computadora, usando la herramienta OpenSSL… Primero hay que generar una clave privada en formato PKCS10 con un mínimo de 2048 bits: openssl genrsa -out MiClavePrivada 2048.
            </p>
            <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
              3. Luego hay que generar el CSR propiamente dicho:
              <br />
              openssl req 
              <br />
              -new
              <br />
              -key MiClavePrivada
              <br />
              -subj "/C=AR/O=subj_o/CN=subj_cn/serialNumber=CUIT subj_cuit"
              <br />
              -out MiPedidoCSR
            </p>
            <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            4. Observar que en el serialNumber se escribe ‘CUIT’ seguido de un espacio en blanco y a continuación los 11 dígitos de la CUIT sin separadores.
            </p>

          </div>
        </div>
      </Section>


      <Section>
        <div className="">
          <h6 className="text-2xl font-semibold mt-4 flex items-center gap-2 py-8">Creating the Certificate in AFIP </h6>
        </div>
      </Section>

      <Section>
        <div className="text-justify">
          <div className="space-y-3 animate-fade-in-up">
          <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            1. Opción: ‘Nuevo Certificado’ para acceder al formulario para crear un DN y el certificado inicialmente asociado al mismo.
            </p>
            <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            2. Los campos a ingresar en el formulario son:
               <br />
              – Nombre simbólico del DN. 
              <br />
              – CUIT del contribuyente.
              <br />
              – Solicitud de certificado en formato PKCS10.
              <br />
            </p>
            <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            4. Luego presionar ‘Crear DN y Obtener Certificado’. Si no hay errores, el sistema devuelve un certificado x509 en formato PEM.
            </p>

            <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
            5. Luego hay que copiarlo y pegarlo en un editor de texto plano, para grabarlo en su disco duro local.
            </p>

          </div>
        </div>
      </Section>

      <Section>
        <div className="">
          <h6 className="text-2xl font-semibold mt-4 flex items-center gap-2 py-8">PFX Creation </h6>
        </div>
      </Section>

      <Section>
        <div className="text-justify">
          <div className="space-y-3 animate-fade-in-up">
          <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
          Si se necesita crear un archivo PFX se puede usar OpenSSL. Por ejemplo:
               <br />
               openssl pkcs12 
              <br />
              -export
              <br />
              -inkey MiClavePrivada
              <br />
              -in certificado.pem
              <br />
              -out certificado.pfx
            </p>

          </div>
        </div>
      </Section>


      <Section>
        <div className="">
          <h6 className="text-2xl font-semibold mt-4 flex items-center gap-2 py-8">Production Certificate (ARCA)</h6>
        </div>
        <List
              title=""
              items={[
                'Ingresar al portal de ARCA (www.arca.gob.ar) y presionar el botón ‘Iniciar sesión’.',
                'Ingresar su ‘CUIT / CUIL / CDI’ y ‘clave’ y cliquear en ‘INGRESAR.',
                'Seleccionar el servicio ‘Administración de Certificados Digitales’.',
                'Cliquear en ‘Nueva Relación’… Seleccionar el servicio ‘Administración de Certificados Digitales’… Presionar el botón ‘Confirmar’.',
                'Salir del sistema y volver a ingresar.',
                'Seleccionar el contribuyente.',
                'Cliquear en ‘Agregar alias’.',
                'Elegir un nombre para el alias y subir un CSR.',
                'Cliquear en ‘Ver’… para poder visualizar y descargar a su PC el certificado.',

              ]}
            />
      </Section>
     
      <Section>
        <div className="">
        <h6 className="text-2xl font-semibold mb-2 mt-6 flex items-center gap-2 text-[#1A5276]">Step 2: Configuring AFIP Settings </h6>
        </div>
      </Section>

      <Section>
        <div className="text-justify space">
          <div className="space-y-3 animate-fade-in-up">
          <p className="text-lg font-semibold py-4">
            1. Go to: Accounting -- Argentina Integration -- AFIP Settings 
            </p>
            <p className="text-lg font-semibold py-4">
            2. Go to Credentials Tab.
            </p>
            <ProcessStepImageCard
              step="3"
              title="Fill in the following details in the row: "
              description="
              Comapny, 
              CUIT Number, 
              Use SandBox Environment: Testing or Production, 
              Certificate File & Private Key : Upload "
              image="/images/afip_setting.png"
              alt="Generate Electronic-Invoice"
            />
            <ProcessStepImageCard
              step="4"
              title="Click Generate Token  button and it will Validate Connection to ensure the credentials are correct. "
              description=""
              image="/images/token.jpeg"
              alt="Generate Electronic-Invoice"
            />
            <ProcessStepImageCard
              step="5"
              title="Save the DOC."
              description=""
              image="/images/save.png"
              alt="Generate Electronic-Invoice"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="">
        <h6 className="text-2xl font-semibold mb-2 mt-6 flex items-center gap-2 py-8 text-[#1A5276]">Step 3: Set Company VAT and Fiscal Information </h6>
        </div>
      </Section>

      <Section>
        <div className="text-justify space">
          <div className="space-y-3 animate-fade-in-up">
          <p className="text-lg font-semibold py-4">
            1. Go to: Accounting -- Company  
            </p>
           
            <ProcessStepImageCard
              step="2"
              title="Under the Argentina Compliance section, configure the following: "
              description="
              Center your VAT Category (e.g., Responsable Inscripto / Monotributista) and Confirm your Tax ID (CUIT)"
              image="/images/confirm_tax.png"
              alt="Generate Electronic-Invoice"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="">
        <h6 className="text-2xl font-semibold mb-2 mt-6 flex items-center gap-2 py-8 text-[#1A5276]">Step 4:  Sales Invoice Configuration</h6>
        </div>
      </Section>

      <p className="text-lg font-semibold py-4">
        1. Go to AFIP setting and Details Tab. 
      </p>

      <p className="text-lg font-semibold py-4">
         2. In the Table row Select the Naming Series of the Sales Invoice for the Point of Sale created on the AFIP Portal.      
      </p>

      <p className="text-lg font-semibold py-4">
         3. Enter the POS Number (Recieved from AFIP portal )  corresponding to the Naming Series. 
      </p>

      <p className="text-lg font-semibold py-4">
         4. Save the Document
      </p>        

          </div>
        </div>
      </Section>

      {/* Custom Fields Section */}
      <Section useGradient>
        <div className="container-custom py-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
              {/* <HiOutlineDocumentText className="text-blue-500" size={28} /> */}
            <span className='text-[#1A5276]'>Custom Fields to Support Legal Compliance</span>
            </h3>
            <p className="text-gray-700 mb-4">
              To ensure seamless electronic-invoicing compliance within ERPNext, custom fields are introduced to meet regulatory requirements and facilitate tax reporting.
            </p>
            <List
              title=""
              items={[
                'Dedicated fields to generate the CAE (Authorization Code) and track its expiration date for each invoice.',
                'Custom fields to manage VAT statuses for both customers and the company, ensuring compliance with local tax regulations.',
                'Support for multiple payment methods, including bank transfers, credit/debit cards, and digital wallets.',
                'Custom fields to manage VAT statuses for both customers and the company, ensuring compliance with local tax regulations. ',
                'Customer-specific tax identification fields to accommodate different tax categories, such as exempt, general, and reduced VAT rates.'
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Enhanced Form Organization */}
      <Section>
        <div className="container-custom py-8 grid  gap-8 items-center">
          <div>
          <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
              {/* <HiOutlineDocumentText className="text-blue-500" size={28} /> */}
            <span className='text-[#1A5276]'>Enhanced Form Organization </span>
            </h3>
            <p className="text-gray-700 mb-4">
            To improve user experience and ensure a structured layout, form enhancements are implemented in ERPNext: 
            </p>
            <List
              title=""
              items={[
                'Tab Breaks: Grouping electronic invoicing fields into logical sections to enhance navigation and user efficiency.',
                'Column Breaks: Optimizing field placement for better readability and workflow organization.',
                'Predefined Select Fields: Standardized dropdown options for VAT statuses, payment methods, and tax categories to reduce manual errors and ensure consistency.'
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Process Flow Section */}
      <Section useGradient>
        <div className="container-custom py-8" id="invoice">
          <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
              {/* <HiOutlineDocumentText className="text-blue-500" size={28} /> */}
            <span className='text-[#1A5276]'>Process Flow for Sales Invoice with Electronic-Invoice Generation</span>
            </h3>
            <p className="text-gray-700">
              A streamlined process flow is established to integrate electronic-invoicing into the sales invoice workflow:
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Here's a quick video demonstrating the process flow integrating Electronic-Invoice into the sales invoice:</p>
            <YouTubeEmbed
              url="https://www.youtube.com/embed/OYy3NZDI3-c?si=saOyQFlCHPgX7O2T"
              title="Electronic-Invoice Process Flow Demo"
              className="rounded-xl shadow-lg w-full h-[320px] md:h-[420px]"
            />
          </div>
         {/* md:grid-cols-2 */}
          <div className="grid  gap-8">
            <ProcessStepImageCard
              step="1"
              title="Create and Save Sales Invoice"
              description="Enter customer, item, and payment details, ensuring accuracy before saving as a draft."
              image="/images/Create and Save SI.png"
              alt="Create and Save Sales Invoice"
            />
            <ProcessStepImageCard
              step="2"
              title="Final Edits and Save"
              description="Make necessary corrections and updates, then save the invoice for validation."
              image="/images/Final Edits and Save.png"
              alt="Final Edits and Save"
            />
            <ProcessStepImageCard
              step="3"
              title="Generate Electronic-Invoice"
              description="Communicate with the tax authority for validation and authorization. Retrieve the CAE (Authorization Code) and expiration date."
              image="/images/Generate E-Invoice.png"
              alt="Generate Electronic-Invoice"
            />
            <ProcessStepImageCard
              step="3.1"
              title="Electronic-Invoice Details"
              description="View the generated CAE and expiration date for the invoice."
              image="/images/Generate E-Invoice-1.png"
              alt="Generate Electronic-Invoice Details"
            />
            <ProcessStepImageCard
              step="4"
              title="Submit Sales Invoice"
              description="Finalize and submit the invoice after successful Electronic-Invoice generation."
              image="/images/Submit Sales Invoice.png"
              alt="Submit Sales Invoice"
            />
            <ProcessStepImageCard
              step="5"
              title="QR Code"
              description="Embed a QR code on the invoice, enabling instant verification by tax authorities and customers."
              image="/images/QR Code.png"
              alt="QR Code"
            />
          </div>
        </div>
      </Section>

      {/* Support for Various Business Scenarios */}
      <Section>
        <div className="container-custom py-8 items-center">
          <div>
          <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
              {/* <HiOutlineDocumentText className="text-blue-500" size={28} /> */}
            <span className='text-[#1A5276]'>Support for Various Business Scenarios</span>
            </h3>
            <p className="text-gray-700 mb-4">
              ERPNext customizations cater to different business models and regulatory requirements:
            </p>
            <List
              title=""
              items={[
                'Multi-Payment Method Handling: Process payments through cash, bank transfers, credit cards, and online gateways.',
                'Multi-VAT Status Management: Assign appropriate VAT rates and exemptions based on customer and product categories.'
              ]}
            />
          </div>
        </div>
      </Section>

      {/* How We Can Help Companies in Argentina */}
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2 text-[#1A5276] ">How We Can Help Companies in Argentina</h3>
            <p className="text-gray-700 mb-4">
              Our tailored ERPNext localization solution ensures businesses can seamlessly comply with Argentina's electronic-invoicing regulations while enhancing operational efficiency. Here's how we assist:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <TbApi className="text-blue-500" size={24} />
                <span className="font-semibold">Compliance with AFIP Regulations</span>
              </div>
              <p className="text-gray-600 text-sm">
                Integration with AFIP's electronic-invoicing API to validate and authorize invoices. Automatic generation of CAE and management of its expiration dates.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold">Streamlined Invoicing Process</span>
              </div>
              <p className="text-gray-600 text-sm">
                Elimination of manual processes by automating invoice validation and submission. Reduction in errors with predefined options and enhanced form organization.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <GiReceiveMoney className="text-purple-500" size={24} />
                <span className="font-semibold">End-to-End Implementation Support</span>
              </div>
              <p className="text-gray-600 text-sm">
                Customization of ERPNext to include all required fields and features. Comprehensive training and documentation to ensure smooth adoption. Ongoing support for maintenance and future updates as regulations evolve.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <LuBanknote className="text-yellow-500" size={24} />
                <span className="font-semibold">Scalable and Cost-Effective Solution</span>
              </div>
              <p className="text-gray-600 text-sm">
                Leveraging open-source ERPNext minimizes software licensing costs. Modular design allows scalability as businesses grow.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conclusion & CTA */}
      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-2 text-[#1A5276]">Conclusion</h2>
          <div className="text-gray-900 text-lg">
            <p>
              Implementing electronic-invoicing compliance in ERPNext streamlines tax reporting, reduces manual errors, and enhances regulatory adherence. With custom fields, optimized workflows, and security enhancements, businesses can ensure seamless, accurate, and legally compliant invoicing.<br/>Know more about our <Link href="/erpnext-software" className="text-blue-600 underline" target="_blank">ERP Software </Link> and  <Link href="/hire-erpnext-implementer" className="text-blue-600 underline" target="_blank">ERP Implementation Services</Link>.
            </p>
          </div>

          
          <h2 className="text-2xl font-bold text-[#1A5276]">Documentation </h2>
          <div className="text-gray-900 text-lg">
            <p>
            Complete documentation for Argentina Electronic Invoicing in ERPNext is available <Link href="/argentina-electronic-invoicing-erpnext-afip-compliance-automation" className="text-blue-600 underline" target="_blank">here</Link>.
            </p>
          </div>

          
          <h2 className="text-2xl font-bold text-[#1A5276]">License </h2>
          
          <div className="text-gray-900 text-lg">
            <p>
            GNU GPL V3. (See <Link href="https://github.com/finbyz/argentina_compliance/blob/version-15/license.txt" className="text-blue-600 underline" target="_blank">license.txt</Link> for more information).
            </p>
          </div>

          


          <div className="mt-6">
            <CTA
              data={{
                subheading: {
                  text: 'Ready to Automate Your Invoicing?',
                  icon: 'BsQrCode'
                },
                title: 'Get AFIP-Compliant Electronic Invoicing in ERPNext',
                highlightText: "Electronic Invoicing in ERPNext",
                description: 'Contact us to implement seamless, automated, and compliant invoicing for your business in Argentina.',
                primaryButton: {
                  text: 'Request a Demo',
                  icon: 'HiOutlineDocumentText',
                  action: () => {
                    if (typeof window !== 'undefined') window.location.href = '/contact';
                  }
                },
                secondaryButton: {
                  text: 'Learn More',
                  icon: 'TbApi',
                  action: "#invoice"
                },
                trustIndicator: {
                  text: 'Trusted by leading businesses in Argentina',
                  icon: 'FaCheckCircle'
                }
              }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
