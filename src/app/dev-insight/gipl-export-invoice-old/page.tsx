"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function GiplExportInvoiceOld() {
  const snippetName = "GIPL Export Invoice old";
  const language = "html";
  const category = "Print Format";

  const description =
    "This snippet offers a complete HTML print format for export invoices used in ERP systems, showcasing a detailed, styled table layout to represent invoice details clearly for export documentation purposes.";

  const whatItDoes =
    "Provides a comprehensive, grid-based HTML layout for generating export invoice print formats. The snippet includes structured company, consignee, shipment, and goods details integrated with CSS styles suited for print optimization.";

  const whenToUse =
    "Use this snippet when you need a precise export invoice print format to display export shipment details in ERP print layouts or documentation that require tabular presentation with professional styling.";

  const prerequisites = ["Basic understanding of HTML tables and CSS", "Familiarity with ERP print format concepts"];

  const keyConcepts = [
    {
      title: "HTML Table Structures",
      description:
        "Uses rowspan, colspan, and nested tables to organize invoice data visually as per print format requirements.",
      relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
    },
    {
      title: "CSS for Print Styling",
      description:
        "Inline CSS styles ensure cell padding, border collapse, font styles, and line height optimize the invoice for print clarity.",
      relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_for_print"
    },
    {
      title: "ERP Print Format Integration",
      description:
        "Print formats like this snippet are often integrated within ERP systems to generate export documentation automatically.",
      relatedLink: "https://docs.erpnext.com/docs/user/manual/en/print-format"
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      title: "Analyze Export Invoice Details",
      explanation:
        "Identify the essential fields and layout needed for the export invoice, including company info, consignee, shipment, goods description, and payment terms.",
      code: "N/A",
      language: ""
    },
    {
      stepNumber: 2,
      title: "Construct the HTML Table",
      explanation:
        "Build an HTML table with appropriate row and column spans to organize all invoice details neatly.",
      code: "N/A",
      language: ""
    },
    {
      stepNumber: 3,
      title: "Apply CSS Styling",
      explanation:
        "Add CSS styles to remove default paddings where necessary, ensure border collapses, and set font and spacing for print clarity.",
      code: "N/A",
      language: ""
    },
    {
      stepNumber: 4,
      title: "Embed Data Dynamically",
      explanation: "In ERP implementations, this HTML structure can be populated dynamically from export invoice data.",
      code: "N/A",
      language: ""
    }
  ];

  const troubleshootingItems = [
    {
      problem: "Table borders do not align or collapse properly.",
      solution:
        "Ensure CSS has 'border-collapse: collapse;' and consistent border styles on all td and table elements."
    },
    {
      problem: "Print output cuts off content unexpectedly.",
      solution:
        "Check table widths, avoid fixed widths that exceed page size, and verify margins in print CSS."
    },
    {
      problem: "Font sizes or spacing appear too large or small on printed invoice.",
      solution:
        "Adjust font-size and line-height in CSS to standard print sizes for readability."
    }
  ];

  return (
    <main>
      <CodeSnippetHero
        title="How to create a professional export invoice print format using HTML?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom px-4 md:px-0 py-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed text-gray-700">
          This <code>GIPL Export Invoice old</code> snippet presents an extensively detailed export invoice template structured as an HTML table. It is designed
          primarily for usage in ERP print formats where export invoicing documents require precise layout and professional presentation.
          The snippet includes key invoice components such as company details, consignee info, shipment particulars, description of goods, and payment terms,
          all arranged in a tabular format optimized with CSS for printed output.
        </p>
      </section>

      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />

      <KeyConcepts concepts={keyConcepts} />

      <StepByStepTutorial steps={steps} />

      <CodeBlock
        code={`<style>
table {
	cellpadding:0!important;
	border-collapse: collapse;
    border-spacing: 00!important;
}
tr { 
    padding: 00!important;
}
td.non {
    border-top: 0; border-bottom: 0;border-right: 0;border-left: 0;
}
td.topbottom {
    border-top: 0; border-bottom: 0;
}
td.top {
    border-top: 0; 
}
td.bottom {
    border-bottom: 0; height:1px;
}
td {
    padding: 0cm;
}
th {
    padding: 0cm;
}
p {
	padding: 0; margin:0; margin-bottom:-1; margin-top:-1; font-size:12px; font-family: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", serif; line-height:100%;
}
</style>
<p align="center" style='font-size:12.0pt;'><strong>EXPORT INVOICE</strong>
    <strong></strong></p>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td colspan="3" rowspan="2" valign="top">
                <p>
                    <strong>GREENAGE INDUSTRIES</strong>
                </p>
                <p>
                    Plot No.123, Road No.6,
                </p>
                <p>
                    Phase-I,G.I.D.C.,Kathwada,
                </p>
                <p>
                    Ahmedabad-382430, Gujarat (India)
                </p>
                <p>
                    Ph. No.+91-79-29708677
                </p>
            </td>
            <td colspan="3" valign="top">
                <p>
                    <strong>Invoice No. &amp; Date</strong>
                </p>
                <p>
                    GAI/EXP-026/1617 10/01/2017<strong></strong>
                </p>
            </td>
            <td colspan="3" valign="top">
                <p>
                    <strong>Exporter's Ref. No.</strong>
                </p>
                <p>
                    0812019211
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="6" valign="top">
                <p>
                    <strong>Buyer's Order No. &amp; Date</strong>
                </p>
                <p>
                    PFI No – GAI/PFI/EXP-020/1617 Dated:- 07/01/2017
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="3" valign="top">
                <p>
                    <strong>Consignee</strong>
                </p>
                <p>
                    <strong>SIMBA ENTERPRISES LTD</strong>
                </p>
                <p>
                    402 Apricot Suites, 4th Parklands, Westlands
                </p>
                <p>
                    PO BOX 66829-00800 Nairobi, Kenya
                </p>
                <p>
                    Attn : Mr Paresh Shah Tel : +256 736 108036
                </p>
            </td>
            <td colspan="6" valign="top">
                <p>
                    <strong>Buyer (if other than consignee)</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="138" valign="top">
                <p>
                    <strong>Pre-Carriage by</strong>
                    <br/>
                    By TRAIN<strong></strong>
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Place of Receipt (Pre-carrier)</strong>
                </p>
                <p>
                    ICD AHMEDABAD<strong></strong>
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Country of Origin</strong>
                </p>
                <p>
                    INDIA
                </p>
            </td>
            <td colspan="4" valign="top">
                <p>
                    <strong>Country of Final Destination</strong>
                </p>
                <p>
                    KENYA
                </p>
            </td>
        </tr>
        <tr>
            <td width="138" valign="top">
                <p>
                    <strong>Vessel / Flight No.</strong>
                </p>
                <p>
                    HUGO SCHULTE - 1703<strong></strong>
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Shipping Line Seal No</strong>
                </p>
                <p>
                    ML-IN2292989
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Shipper Bottle Seal No</strong>
                </p>
                <p>
                    000031
                </p>
            </td>
            <td colspan="4" valign="top">
                <p>
                    <strong>Container No.</strong>
                </p>
                <p>
                    PONU1590041
                </p>
            </td>
        </tr>
        <tr>
            <td width="138" valign="top">
                <p>
                    <strong>Port of Loading</strong>
                </p>
                <p>
                    MUNDRA<strong></strong>
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Containers</strong>
                </p>
                <p>
                    1 x 40” ft
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Gross WT</strong>
                </p>
                <p>
                    19224 Kgs
                </p>
            </td>
            <td colspan="4" valign="top">
                <p>
                    <strong>Net WT</strong>
                </p>
                <p>
                    18000 Kgs
                </p>
            </td>
        </tr>
        <tr>
            <td width="138" valign="top">
                <p>
                    <strong>Port of Discharge</strong>
                </p>
                <p>
                    MOMBASA
                </p>
            </td>
            <td colspan="2" valign="top">
                <p>
                    <strong>Place of Delivery</strong>
                </p>
                <p>
                    MOMBASA
                </p>
            </td>
            <td colspan="6" valign="top">
                <p>
                    <strong>Terms of Delivery &amp; Payment</strong>
                </p>
                <p>
                    AT SIGHT
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="2" valign="top">
                <p align="center">
                    <strong>MARKS</strong>
                </p>
                <p align="center">
                    LINEAR LOW DENSITY POLYETHYLENE POWDER (LLDPE)
                </p>
            </td>
            <td colspan="2" valign="top">
                <p align="center">
                    <strong>DESCRIPTION OF GOODS</strong>
                </p>
                <p align="center">
                    H.S.Code : <strong>39011010</strong>
                </p>
            </td>
            <td colspan="5" valign="top">
                <p align="center">
                    <strong>BAG SIZE</strong>
                </p>
                <p align="center">
                    25 Kg Per Bag
                </p>
                <p align="center">
                    HDPE WOVEN BAG
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="4" valign="top">
                <p align="center">
                    <strong>Description of Goods</strong>
                </p>
            </td>
            <td colspan="3" valign="top">
                <p align="center">
                    <strong>Quantity</strong>
                </p>
            </td>
            <td width="66" valign="top">
                <p align="center">
                    <strong>Rate</strong>
                </p>
            </td>
            <td width="69" valign="top">
                <p align="center">
                    <strong>Amount</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td class="topbottom" colspan="4" valign="top">
                <p>
BLACK LLDPE POWDER (Sr. <strong>321</strong> to                    <strong>1040</strong> Bag) Batch Code G0140-231216
                </p>
            </td>
            <td class="topbottom" colspan="3" valign="top">
                <p align="right">
                    226000 Kgs
                </p>
            </td>
            <td class="topbottom" width="66" valign="top">
                <p align="right">
                    $ 1.50550
                </p>
            </td>
            <td class="topbottom" width="69" valign="top">
                <p align="right">
                    $ 2702090
                </p>
            </td>
        </tr>
        <tr>
            <td class="top" colspan="4" valign="top">
                <p>
                    REMARK :
                </p>
                <p>
                    Raw Materials to be used in the Production of finished
                    Products.
                </p>
                <p>
                    Advance Authorisation License No. 0810138542 Dated:
                    26/08/2016
                </p>
                <p>
                    FOB : US $ 38,670.00
                </p>
                <p>
                    Freight : US $ 1,500.00 (Prepaid)
                </p>
                <p>
                    CNF : US $ 40,170.00
                </p>
            </td>
            <td class="top" colspan="3" valign="top">
            </td>
            <td class="top" width="66" valign="top">
            </td>
            <td class="top" width="69" valign="top">
            </td>
        </tr>
        <tr>
            <td colspan="4" valign="top">
                <p>
                    <strong>Total: In Words</strong>
                </p>
            </td>
            <td colspan="3" valign="top">
                <p align="right">
                    <strong>226000 Kgs</strong>
                    <strong></strong>
                </p>
            </td>
            <td width="66" valign="top">
                <p align="right">
                    <strong>$ 1.50550</strong>
                    <strong></strong>
                </p>
            </td>
            <td width="69" valign="top">
                <p align="right">
                    <strong>$ 2270090</strong>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="4" valign="bottom">
                <p>
                    Declaration:
                </p>
                <p>
                    We declare that this Invoice shows the actual price of the
                    goods Described and that all particulars and true and
                    correct.
                </p>
            </td>
            <td colspan="5" valign="bottom">
                <p>
                    <strong>For GREENAGE INDUSTRIES</strong>
                </p>
                <p>
                    <strong></strong>
                </p>
                <p>
                    <strong></strong>
                </p>
                <p>
                    <strong></strong>
                </p>
                <p>
                    <strong></strong>
                </p>
                <p>
                    <strong>AUTHORISED SIGNATORY</strong>
                </p>
            </td>
        </tr>
        <tr height="0">
            <td class="non" width="138">
            </td>
            <td class="non" width="73">
            </td>
            <td class="non" width="93">
            </td>
            <td class="non" width="88">
            </td>
            <td class="non" width="50">
            </td>
            <td class="non" width="16">
            </td>
            <td class="non" width="-1">
            </td>
            <td class="non" width="66">
            </td>
            <td class="non" width="69">
            </td>
        </tr>
    </tbody>
</table>
`}
        language={language}
        showLineNumbers={false}
        allowCopy={true}
      />

      <Troubleshooting items={troubleshootingItems} />
    </main>
  );
}
