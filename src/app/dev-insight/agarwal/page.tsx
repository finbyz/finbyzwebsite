"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AgarwalSnippetPage() {
  const snippetName = "Agarwal";
  const language = "html";
  const category = "Print Format";
  const accentColor = "blue";

  const description =
    "This HTML snippet provides a well-structured print format for a lorry challan document, including detailed tables for shipment details, payment information, and transporter signatures, ideal for transport and logistics businesses.";

  const code = `<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">
  <tbody>
    <tr>
      <td width=\"50%\" colspan=\"2\" valign=\"top\">
        <p>
          <strong>Lorry Challan No.:</strong>
        </p>
      </td>
      <td width=\"50%\" colspan=\"2\" valign=\"top\">
        <p align=\"right\">
          <strong>Dt:</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"50%\" colspan=\"2\" valign=\"top\">
        <p>
          <strong>From :</strong>
        </p>
      </td>
      <td width=\"50%\" colspan=\"2\" valign=\"top\">
        <p align=\"right\">
          <strong>To :</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"50%\" colspan=\"2\" valign=\"top\">
        <p>
          <strong>Lorry No. :</strong>
        </p>
      </td>
      <td width=\"50%\" colspan=\"2\" valign=\"top\">
        <p align=\"right\">
          <strong>L. R. No.:</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"33%\" valign=\"top\">
        <p>
          <strong>Rate :</strong>
        </p>
      </td>
      <td width=\"29%\" colspan=\"2\" valign=\"top\">
        <p align=\"center\">
          <strong>Qty:</strong>
        </p>
      </td>
      <td width=\"36%\" valign=\"top\">
        <p align=\"right\">
          <strong>Freight:</strong>
        </p>
      </td>
    </tr>
    <tr height=\"0\">
      <td width=\"236\">
      </td>
      <td width=\"118\">
      </td>
      <td width=\"94\">
      </td>
      <td width=\"260\">
      </td>
    </tr>
  </tbody>
</table>
<p>
  <strong></strong>
</p>
<p align=\"center\">
  <strong></strong>
</p>
<div align=\"center\">
  <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">
    <tbody>
      <tr>
        <td width=\"13%\" valign=\"top\">
          <p align=\"center\">
            <strong>Date</strong>
          </p>
        </td>
        <td width=\"19%\" valign=\"top\">
          <p align=\"center\">
            <strong>Pyt Type</strong>
          </p>
        </td>
        <td width=\"43%\" valign=\"top\">
          <p align=\"center\">
            <strong>Payment Details</strong>
          </p>
        </td>
        <td width=\"23%\" valign=\"top\">
          <p align=\"center\">
            <strong>Amount</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td width=\"13%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
        <td width=\"19%\" valign=\"top\">
          <p align=\"center\">
            <strong>Cash</strong>
          </p>
        </td>
        <td width=\"43%\" valign=\"top\">
          <p align=\"center\">
            <strong>Cash a/c name</strong>
          </p>
        </td>
        <td width=\"23%\" valign=\"top\">
          <p align=\"center\">
            <strong>500.00</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td width=\"13%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
        <td width=\"19%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
        <td width=\"43%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
        <td width=\"23%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
      </tr>
      <tr>
        <td width=\"13%\" valign=\"top\">
          <p align=\"center\">
            <strong>Total</strong>
          </p>
        </td>
        <td width=\"19%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
        <td width=\"43%\" valign=\"top\">
          <p align=\"center\">
            <strong></strong>
          </p>
        </td>
        <td width=\"23%\" valign=\"top\">
          <p align=\"center\">
            <strong>22800.00</strong>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  <strong></strong>
</p>
<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">
  <tbody>
    <tr>
      <td width=\"100%\" colspan=\"2\" valign=\"top\">
        <p>
          <strong>Transporter name :</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"50%\" valign=\"top\">
        <p>
          <strong>Party Name :</strong>
        </p>
      </td>
      <td width=\"50%\" valign=\"top\">
        <p align=\"right\">
          <strong>Pan No.:</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"50%\" valign=\"top\">
        <p>
          <strong></strong>
        </p>
      </td>
      <td width=\"50%\" valign=\"top\">
        <p align=\"right\">
          <strong></strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"50%\" valign=\"top\">
        <p>
          <strong></strong>
        </p>
      </td>
      <td width=\"50%\" valign=\"top\">
        <p align=\"right\">
          <strong>For Tirupaiti Transport</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td width=\"50%\" valign=\"top\">
        <p>
          <strong>Signature of Driver/ Transporter</strong>
        </p>
      </td>
      <td width=\"50%\" valign=\"top\">
        <p align=\"right\">
          <strong></strong>
        </p>
      </td>
    </tr>
  </tbody>
</table>`;

  const whatItDoes =
    "Provides an HTML-based print format for a lorry challan document featuring shipment details, payment table, and transport signatures arranged in well-defined tables.";
  const whenToUse =
    "Use this snippet when you need a print-ready, standardized HTML format for shipping challans in transportation and logistics applications.";
  const prerequisites = [
    "Basic knowledge of HTML tables and attributes",
    "Familiarity with print styling or CSS for print optimization",
    "Understanding of logistic document layouts"
  ];

  const keyConceptsData = [
    {
      title: "HTML Tables",
      description:
        "This snippet makes extensive use of HTML tables to organize data in rows and columns, suitable for structured information display.",
      relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
    },
    {
      title: "Table Cell Attributes",
      description:
        "Usage of colspan and valign attributes to control the layout and alignment of table cells for better presentation.",
      relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"
    },
    {
      title: "Print Format Design",
      description:
        "The snippet is designed for print formats requiring clear separation of logical sections such as shipment info, payment, and signatures.",
      relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/print"
    }
  ];

  const tutorialSteps = [
    {
      stepNumber: 1,
      title: "Define Main Lorry Challan Table",
      explanation:
        "Set up the main lorry details table with rows for challan number, date, origin, destination, lorry number, and freight details.",
      code: ` <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">... </table>`,
      language: "html"
    },
    {
      stepNumber: 2,
      title: "Add Payment Details Table",
      explanation:
        "Create a table with borders defining payment date, payment type, payment details, and amount with header and totals rows.",
      code: `<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">... </table>`,
      language: "html"
    },
    {
      stepNumber: 3,
      title: "Insert Transporter and Signature Section",
      explanation:
        "Add a final table section to store transporter name, party name, PAN number, and signature fields aligned appropriately.",
      code: `<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">... </table>`,
      language: "html"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "Printed output spacing does not align correctly",
      solution:
        "Ensure your print CSS correctly handles table borders and padding; also verify no external CSS conflicts override alignment."
    },
    {
      problem: "Empty table cells are collapsing and breaking layout",
      solution:
        "Add non-breaking spaces or set minimum widths on cells to maintain table structure when content is missing."
    },
    {
      problem: "Text in table cells not aligning as intended",
      solution:
        "Use explicit text alignment attributes or CSS properties like `text-align` and vertical alignment settings."
    }
  ];

  return (
    <main>
      <CodeSnippetHero
        title="How to create a structured print-friendly lorry challan format in HTML?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor={accentColor}
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          This snippet provides a complete HTML print format for a lorry challan,
          a critical document in transportation and logistics for recording shipment details,
          freight charges, payment types, and signatures. The design makes effective use of
          tables to organize and clearly separate various pieces of information,
          making it easy to read and print.
        </p>
      </section>

      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />

      <KeyConcepts concepts={keyConceptsData} />

      <StepByStepTutorial steps={tutorialSteps} />

      <CodeBlock
        code={code}
        language={language}
        fileName="agarwal-print-format.html"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink=""
        referenceLinkText=""
      />

      <Troubleshooting items={troubleshootingItems} />
    </main>
  );
}
