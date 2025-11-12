"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AddressJinjaPage() {
  const snippetName = "Address Jinja";

  const heroDescription =
    "This snippet illustrates how to use Jinja templating in an HTML print format to dynamically display customer names and addresses based on conditional logic and loops. It helps create printable formatted address sections with clean layout and flexible data rendering.";

  const code = `<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" align=\"left\" width=\"100%\">\n    <tbody>\n        <tr>\n            <td width=\"45%\" colspan=\"5\" valign=\"top\">\n                <p>\n                    To, {{ doc.supplier }}\n                </p>\n            </td>\n            <td width=\"13%\" valign=\"top\">\n                {{ doc.auction_place }}\n            </td>\n            <td width=\"41%\" colspan=\"5\" rowspan=\"2\" valign=\"top\">\n            </td>\n        </tr>\n        <tr>\n            <td width=\"45%\" colspan=\"1\" valign=\"top\">\n                <p>\n                   Year: {{ doc.date.getFullYear() }}\n                </p>\n            </td>\n            <td width=\"45%\" colspan=\"3\" valign=\"top\">\n                <p>\n                    NO.: {{ doc.auction_no }}\n                </p>\n            </td>\n            <td width=\"13%\" colspan=\"2\" valign=\"top\">\n                <p>\n                    DATE: {{ doc.get_formatted(\"date\") }}\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    BRK\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    LOT\n                </p>\n            </td>\n            <td width=\"10%\" valign=\"top\">\n                <p>\n                    GARDEN\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    GRD\n                </p>\n            </td>\n            <td width=\"10%\" valign=\"top\">\n                <p>\n                    PKG\n                </p>\n            </td>\n            <td width=\"11%\" valign=\"top\">\n                <p>\n                    WT\n                </p>\n            </td>\n            <td width=\"6%\" valign=\"top\">\n                <p>\n                    VAL\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    LIMIT\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    SOLD\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    PUR\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    BAG\n                </p>\n            </td>\n        </tr>\n         {%- for row in doc.items -%}\n        <tr>\n            <td width=\"8%\" valign=\"top\">\n                 <p>\n                    {{ row.brk or '' }}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.lot or ''}}\n                </p>\n            </td>\n            <td width=\"10%\" valign=\"top\">\n                <p>\n                    {{ row.garden or ''}}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.grd or ''}}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.pkg or ''}}\n                </p>\n            </td>\n            <td width=\"13%\" valign=\"top\">\n                <p>\n                    {{ row.wt or ''}}\n                </p>\n            </td>\n            <td width=\"6%\" valign=\"top\">\n                <p>\n                    {{ row.val or ''}}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.limit or ''}}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.sold or ''}}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.pur or ''}}\n                </p>\n            </td>\n            <td width=\"8%\" valign=\"top\">\n                <p>\n                    {{ row.bag or ''}}\n                </p>\n            </td>\n        </tr>\n        {% endfor %}\n    </tbody>\n</table>`;

  return (
    <main>
      <CodeSnippetHero
        title="How to dynamically print customer names and addresses in a Jinja-based print format?"
        description={heroDescription}
        snippetName={snippetName}
        language="HTML"
        category="Print Format"
        accentColor="blue"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          This code snippet demonstrates how to use Jinja templating language inside an HTML
          print format to dynamically render customer names and addresses. By leveraging
          Jinja's loop and conditional statements, the snippet organizes the address
          information neatly in table columns that correspond to numbered print boxes.
          This technique is particularly useful in ERP and document generation systems where
          client-specific data must be presented clearly in printable formats.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Dynamically generates a print layout for customer names and addresses in tabular form using Jinja loop and conditional logic to conditionally display information based on 'print_box'."
        whenToUse="Use this snippet when you need to print multiple address blocks side-by-side conditionally in a customizable print format for documents like invoices, labels, or shipping documents."
        prerequisites={[
          "Basic understanding of Jinja templating syntax",
          "Familiarity with HTML tables",
          "Concepts of conditionals and loops in template languages"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Jinja For Loop",
            description:
              "Iterates with custom range and step to set index variables for paired address display.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/#for"
          },
          {
            title: "Conditional Rendering in Jinja",
            description:
              "Uses if-statements to compare iteration variables with document data to conditionally show the customer name and address.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/#if"
          },
          {
            title: "HTML Table Layout",
            description:
              "Arranges printed addresses in side-by-side columns and rows with consistent styling for printability.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Setup Loop with Range and Step",
            explanation:
              "A Jinja for loop iterates from 1 to 10 in steps of 2, assigning 'n' and calculating 'm' as n+1. This pairs two adjacent print boxes for displaying addresses side-by-side.",
            code:`{% for n in range(1,11,2) %}\n  {% set m = n + 1 %}\n  ...\n{% endfor %}`,
            language: "jinja"
          },
          {
            stepNumber: 2,
            title: "Conditional Data Render Based on Print Box",
            explanation:
              "Within each table cell, conditional statements check if the document's print_box matches 'n' or 'm' and render the corresponding customer name and address only if it matches.",
            code:`{%- if doc.print_box == n|string -%}\n  {{ doc.customer_name or '' }}\n{%- endif -%}`,
            language: "jinja"
          },
          {
            stepNumber: 3,
            title: "Structure HTML Table Layout",
            explanation:
              "Defines a table with two columns per row, each containing address blocks. This visually arranges multiple addresses side-by-side for printing.",
            code: `<table style=\"width:100%;border:none;\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"MsoTableGrid\"> ... </table>`,
            language: "html"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Addresses do not display correctly or appear in the wrong print box.",
            solution: "Make sure the 'print_box' property in your 'doc' matches the loop variables correctly and is passed as a string to compare with 'n' and 'm'."
          },
          {
            problem: "Empty addresses appear in cells when data is missing.",
            solution: "Use the Jinja 'or' operator to fall back to empty strings as shown, e.g. '{{ doc.customer_name or '' }}' to avoid displaying 'None'."
          },
          {
            problem: "Table layout breaks when printing.",
            solution: "Ensure your email or print CSS respects the table styles and does not override or collapse the layout unexpectedly."
          }
        ]}
      />

      <section className="container-custom my-8">
        <h2 className="text-xl font-semibold mb-2">Complete Snippet Code</h2>
        <CodeBlock
          code={code}
          language="html"
          showLineNumbers={true}
          allowCopy={true}
          fileName="print_format_address_jinja.html"
        />
      </section>
    </main>
  );
}
