"use client";
import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function GiplPackingListPage() {
  const snippetName = "GIPL Packing List";
  const language = "html";
  const category = "Print Format";

  const description =
    'This snippet provides a comprehensive HTML print format template designed for generating the packing list document for shipments. It includes detailed company, consignee, and shipment data, dynamically populated through Jinja templating syntax used in ERP systems like Frappe/ERPNext.';

  const codeSnippet = `<p align=\"center\">\n    <strong>PACKAGING LIST</strong>\n    <strong></strong>\n</p>\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n    <tbody>\n        <tr>\n            <td width=\"51%\" colspan=\"4\" rowspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>{{ doc.company }}</strong>\n                </p>\n                <p>\n                    Plot No.123, Road No.6,\n                </p>\n                <p>\n                    Phase-I,G.I.D.C.,Kathwada,\n                </p>\n                <p>\n                    Ahmedabad-382430, Gujarat (India)\n                </p>\n                <p>\n                    Ph. No.+91-79-29708677\n                </p>\n            </td>\n            <td width=\"29%\" colspan=\"3\" valign=\"top\">\n                <p>\n                    <strong>Invoice No. &amp; Date</strong>\n                </p>\n                <p>\n                    {{ doc.name }} {{ doc.get_formatted(\"posting_date\") }}<strong></strong>\n                </p>\n            </td>\n            <td width=\"18%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Exporter's Ref. No.</strong>\n                </p>\n                <p>\n                    {{ doc.company_iec or '' }}\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width=\"48%\" colspan=\"5\" valign=\"top\">\n                <p>\n                    <strong>Buyer\'s Order No. &amp; Date</strong>\n                </p>\n                                <p>\n                    {{ doc.po_no or ''}} {{ doc.get_formatted(\"po_date\") or '' }}\n                </p>\n\n            </td>\n        </tr>\n        <tr>\n            <td width=\"51%\" colspan=\"4\" valign=\"top\">\n                <p>\n                    <strong>Consignee</strong>\n                </p>\n                <p>\n                    <strong>{{ doc.consignee_name or ''}}</strong>\n                </p>\n                <p>\n                    {{ doc.shipping_address or ''}}\n                </p>\n               \n            </td>\n            <td width=\"48%\" colspan=\"5\" valign=\"top\">\n                <p>\n                <strong>Buyer (if other than consignee)</strong></p>\n			{%- if doc.customer_address != doc.shipping_address_name -%}\n			<p>\n                    <strong>{{ doc.customer_name or ''}}</strong>\n                </p>\n			<p>\n				{{ doc.address_display or '' }}\n			</p>\n			{%- endif -%}\n            </td>\n        </tr>\n        <tr>\n            <td width=\"24%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Pre-Carriage by</strong>\n                    <br/>\n                    {{ doc.pre_carriage_by or '' }}\n                </p>\n            </td>\n            <td width=\"26%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Place of Receipt by Pre-carrier</strong>\n                </p>\n                <p>\n                    {{ doc.place_of_precarrier or '' }}\n                </p>\n            </td>\n            <td width=\"23%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Country of Origin of Goods</strong>\n                </p>\n                <p>\n                    {{ doc.country_of_origin }}\n                </p>\n            </td>\n            <td width=\"25%\" colspan=\"3\" valign=\"top\">\n                <p>\n                    <strong>Country of Final Destination</strong>\n                </p>\n                <p>\n                    {{ doc.country_of_destination }}\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width=\"24%\" colspan=\"2\" valign=\"top\">\n                <p>\n                <strong>Vessel / Flight No.</strong></p>\n                <p> {{ doc.vessel_no or '' }} </p>\n            </td>\n            <td width=\"26%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Port of Loading</strong>\n                </p>\n                <p>\n                    {{ doc.port_of_loading or '' }}\n                </p>\n            </td>\n            <td width=\"48%\" colspan=\"5\" rowspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Terms of Delivery &amp; Payment</strong>\n                </p>\n                <p>\n                {{ doc.payment_terms or '' }}</p>\n                \n            </td>\n        </tr>\n        <tr>\n            <td width=\"24%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Port of Discharge</strong>\n                </p>\n                <p>\n                    {{ doc.port_of_discharge or '' }}\n                </p>\n            </td>\n            <td width=\"26%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>Place of Delivery</strong>\n                </p>\n                <p>\n                    {{ doc.country_of_destination or '' }}\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width=\"33%\" colspan=\"3\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>MARKS</strong>\n                </p>\n            </td>\n            <td width=\"41%\" colspan=\"3\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>DESCRIPTION OF GOODS</strong>\n                </p>\n            </td>\n            <td width=\"25%\" colspan=\"3\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>BAG SIZE</strong>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width=\"33%\" colspan=\"3\" valign=\"top\">\n                <p align=\"center\">\n                    LINEAR LOW DENSITY POLYETHYLENE POWDER (LLDPE)\n                </p>\n            </td>\n            <td width=\"41%\" colspan=\"3\" valign=\"top\">\n                <p align=\"center\">\n                    H.S.Code : {%- for row in doc.items -%} <strong>{{ row.hs_code or ''}} </strong> {% endfor %}\n                </p>\n            </td>\n            <td width=\"25%\" colspan=\"3\" valign=\"top\">\n                <p align=\"center\">\n                    {%- for row in doc.items -%}{{ row.packed_in\n  or '' }}\n                </p>\n                <p align=\"center\">\n                    {{ row.packaging_material or '' }}\n                </p>{% endfor %}\n            </td>\n        </tr>\n        <tr>\n            <td width=\"16%\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>MARKS</strong>\n                </p>\n            </td>\n            <td width=\"16%\" colspan=\"2\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>PACKING SIZE</strong>\n                </p>\n            </td>\n            <td width=\"18%\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>NO OF BAGS</strong>\n                </p>\n            </td>\n            <td width=\"23%\" colspan=\"2\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>DESCRIPTION</strong>\n                </p>\n            </td>\n            <td width=\"11%\" colspan=\"2\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>NET Weight</strong>\n                </p>\n            </td>\n            <td width=\"13%\" valign=\"top\">\n                <p align=\"center\">\n                    <strong>Gross Weight</strong>\n                </p>\n            </td>\n        </tr>{%- for row in doc.items -%}\n        <tr>\n            <td width=\"16%\" valign=\"top\">\n                <p>\n                    <strong>LLDP</strong>\n                </p>\n                <p>\n                    Linear Low Density Polyethylene\n                </p>\n            </td>\n            <td width=\"16%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong>1 </strong>\n                    Bag of {{ row.packed_in or '' }} each\n                </p>\n            </td>\n            <td width=\"18%\" valign=\"top\">\n                <p align=\"right\">\n                    <strong>{{ row.total_bags or '' }}</strong>\n                    Bags of\n                </p>\n                <p align=\"right\">\n                    (Sr.<strong> {{ row.bag_no_from or '' }}</strong> to <strong>{{ row.bag_no_to or '' }}</strong> Bag)\n                </p>\n            </td>\n            <td width=\"23%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    {{ row.item_name or '' }}\n                </p>\n                <p>\n                    Batch Code {{ row.batch_no or ''}} \n                </p>\n            </td>\n            <td width=\"11%\" colspan=\"2\" valign=\"top\">\n                <p align=\"right\">\n                    {{ row.net_wt }} {{ row.uom_nt }}\n                </p>\n            </td>\n            <td width=\"13%\" valign=\"top\">\n                <p align=\"right\">\n                    {{ row.gross_wt }} {{ row.uom_gt }}\n                </p>\n            </td>\n        </tr> {% endfor %}\n        <tr>\n            <td width=\"16%\" valign=\"top\">\n                <p>\n                    <strong>Total</strong>\n                </p>\n            </td>\n            <td width=\"16%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong></strong>\n                </p>\n            </td>\n            <td width=\"18%\" valign=\"top\">\n                <p align=\"right\">\n                    <strong>{{ doc.total_bags }} Bags</strong>\n                    <strong></strong>\n                </p>\n            </td>\n            <td width=\"23%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    <strong></strong>\n                </p>\n            </td>\n            <td width=\"11%\" colspan=\"2\" valign=\"top\">\n                <p align=\"right\">\n                    <strong> {{ doc.total_nt_wt or '' }} Kgs</strong>\n                    <strong></strong>\n                </p>\n            </td>\n            <td width=\"13%\" valign=\"top\">\n                <p align=\"right\">\n                    <strong>{{ doc.total_gr_wt or '' }} Kgs</strong>\n                    <strong></strong>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width=\"70%\" colspan=\"5\" valign=\"bottom\">\n                <p>\n                    Declaration:\n                </p>\n                <p>\n                    We declare that this Invoice shows the actual price of the\n                    goods Described and that all particulars and true and\n                    correct.\n                </p>\n            </td>\n            <td width=\"29%\" colspan=\"4\" valign=\"bottom\">\n                <p>\n                    <strong>For GREENAGE INDUSTRIES</strong>\n                </p><br><br><br><br>\n                <p>\n                    <strong>AUTHORISED SIGNATORY</strong>\n                </p>\n            </td>\n        </tr>\n    </tbody>\n</table>`;

  return (
    <main>
      <CodeSnippetHero
        title="How to create a comprehensive packing list print format template with dynamic data?"
        description={
          'This HTML snippet implements a detailed packaging list print format using Jinja templating syntax to dynamically populate shipment, buyer, consignee, and product details within ERP systems.'
        }
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="green"
      />

      <section className="container-custom py-6 px-4">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p>
          The <strong>GIPL Packing List</strong> snippet is an HTML template designed as a print format for packaging lists typically used in shipping and logistics processes within enterprise resource planning (ERP) systems. Utilizing Jinja templating,
          it dynamically inserts important shipment information including company details, buyer and consignee addresses, invoice numbers, item descriptions, weights, and other critical shipping data.
          <br />
          This packing list helps streamline export documentation and facilitates clear communication between exporters, importers, and shipment handlers. Its structured table layout ensures all required details are clearly presented.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Generates an HTML print format for a detailed packaging list document with dynamic fields populated from ERP system data."
        whenToUse="Use this snippet when you need a comprehensive shipping packing list integrated within your ERP print formats displaying shipment and item specifics clearly for export documentation."
        prerequisites={[
          "Familiarity with Jinja templating syntax and ERPNext/Frappe print formats",
          "Understanding of HTML tables and styling",
          "Knowledge of the documented ERP data model for packaging/shipping"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Jinja Templating",
            description:
              "Used to dynamically insert ERP document data into the HTML layout for personalized and context-aware print formats.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/"
          },
          {
            title: "ERP Packing List Use",
            description:
              "Standardizes the packaging list details essential for customs, freight, and buyer communication.",
            relatedLink: "https://docs.erpnext.com/docs/v13/user/manual/en/stock/packing-slip"
          },
          {
            title: "HTML Table Layout",
            description:
              "Organizes data in rows and columns for clarity and easy reading in printed documents.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Set up your ERP Print Format",
            explanation:
              "Begin by creating a new print format in your ERP system (like Frappe/ERPNext) and setting it to use HTML with Jinja templating.",
            code: "",
            language: ""
          },
          {
            stepNumber: 2,
            title: "Define the Static HTML Structure",
            explanation:
              "Write an HTML table layout that matches the desired physical packing list format including company and consignee details sections.",
            code: `<p align=\"center\"><strong>PACKAGING LIST</strong></p>` +
              "\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\"> ... </table>",
            language: "html"
          },
          {
            stepNumber: 3,
            title: "Insert Dynamic Fields Using Jinja",
            explanation:
              "Replace static text placeholders with Jinja templating variables and loops to dynamically display document data such as items, quantities, and addresses.",
            code: `{{ doc.company }}`,
            language: "jinja"
          },
          {
            stepNumber: 4,
            title: "Test and Customize",
            explanation:
              "Preview the print format with real document data to verify correct rendering and modify styling or content as needed.",
            code: "",
            language: ""
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Dynamic fields do not render data correctly.",
            solution:
              "Confirm that the document object 'doc' is provided to the print format renderer and the field names match the ERP data model exactly."
          },
          {
            problem: "Table layout looks broken or misaligned in print preview.",
            solution:
              "Ensure that all table rows and columns have consistent colspan and rowspan attributes, and test in different browsers/printers."
          },
          {
            problem: "Jinja loops or conditions cause errors.",
            solution: "Double-check Jinja syntax and confirm the iterable variables are lists or dictionaries as expected."
          }
        ]}
      />
    </main>
  );
}
