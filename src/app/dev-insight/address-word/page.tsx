"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AddressWordSnippetPage() {
  const code = `<html>
<head>
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:\"Cambria Math\";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:\"Segoe UI\";
	panose-1:2 11 5 2 4 2 4 2 2 3;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:8.0pt;
	margin-left:0cm;
	line-height:107%;
	font-size:11.0pt;
	font-family:\"Calibri\",sans-serif;}
p.MsoAcetate, li.MsoAcetate, div.MsoAcetate
	{mso-style-link:\"Balloon Text Char\";
	margin:0cm;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:\"Segoe UI\",sans-serif;}
span.BalloonTextChar
	{mso-style-name:\"Balloon Text Char\";
	mso-style-link:\"Balloon Text\";
	font-family:\"Segoe UI\",sans-serif;}
.MsoChpDefault
	{font-family:\"Calibri\",sans-serif;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
-->
td.padding {
    width: 50%!important; padding-left: 1cm!important; padding-top: 1cm!important; height:134.14pt!important; vertical-align:centre!important;
	}

p.MsoNew {
	margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal; font-size:14.0pt;
}

</style>

</head>
<body lang=EN-US>
<div>
<table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 width=\"100%\"
 style='width:100.0%;border:none'>
 <tr style='height:134.14pt'>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"1\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"1\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>

  </td>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"2\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"2\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
 </tr>
 <tr style='height:134.14pt'>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"3\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"3\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"4\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"4\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
 </tr>
 <tr style='height:134.14pt'>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"5\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"5\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"6\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"6\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
 </tr>
 <tr style='height:134.14pt'>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"7\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"7\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"8\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"8\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
 </tr>
 <tr style='height:134.14pt'>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"9\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"9\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"10\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"10\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
 </tr>
 <tr style='height:134.14pt'>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"11\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"11\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
  <td class=\"padding\">
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'> {%-if doc.print_box == \"12\" -%} {{ doc.company or '' }} {%-endif-%}</span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span style='font-size:14.0pt'>{%-if doc.print_box == \"12\" -%} {{ doc.address or '' }} {%-endif-%}</span></p>
  </td>
 </tr>
</table>
</div>
</body>
</html>`;

  return (
    <main>
      <CodeSnippetHero
        title="How to dynamically display company and address in print formats using Address Word snippet?"
        description="This snippet enables conditional display of company and address fields in Frappe/ERPNext print formats using print box identifiers for precise printing layout control."
        snippetName="Address word"
        language="HTML"
        category="Print Format"
        accentColor="blue"
      />

      <section className="container-custom py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet is designed for use in print formats within platforms like Frappe or ERPNext. It provides a way to conditionally render company names and addresses based on the print box identifier assigned to a block. Such functionality is essential for documents where different sections or boxes need distinct address blocks, such as multi-address printing or segmented letterheads. By using Jinja templating syntax with the print_box variable, the snippet ensures only the corresponding company and address appear in the designated print box area. This approach offers flexibility, customization, and clarity when creating dynamic printable documents.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="html"
        fileName="address-word.html"
        showLineNumbers
        allowCopy
      />

      <CodeOverview
        whatItDoes="Conditionally displays company and address details inside a print format based on the print box number (1 to 12). It uses template if-statements to render the right information for each print box."
        whenToUse="Use this snippet when your print format requires multiple address boxes or company info blocks that must appear selectively depending on the print box setting."
        prerequisites={[
          "Basic understanding of Jinja/Twig templating syntax.",
          "Knowledge of Frappe or ERPNext print formats.",
          "Familiarity with HTML and CSS for print styling."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Print Box Variable",
            description: "A variable used in print formats to differentiate content areas for conditional rendering.",
            relatedLink: "https://frappeframework.com/docs/user/en/print-format"
          },
          {
            title: "Jinja Templating",
            description: "Template language used here to conditionally inject company and address data into HTML.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/#if-statement"
          },
          {
            title: "Responsive Table Layout",
            description: "HTML table with two equal width columns and row height for consistent print layout.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Understand the 'doc.print_box' variable",
            explanation: "Recognize that 'doc.print_box' determines which print box is active. This snippet checks its value to conditionally show company and address.",
            code: `{%-if doc.print_box == \"1\" -%} {{ doc.company or '' }} {%-endif-%}`,
            language: "jinja"
          },
          {
            stepNumber: 2,
            title: "Structure the Layout in Table",
            explanation: "Create a table layout with two columns per row, each with padding and height to form print boxes.",
            code: `<td class=\"padding\">...</td>`,
            language: "html"
          },
          {
            stepNumber: 3,
            title: "Repeat for Multiple Print Boxes",
            explanation: "Duplicate the conditional blocks for print_box values 1 through 12 to support multiple sections on the print format.",
            code: "{%-if doc.print_box == '2' -%} ... {%-endif-%}",
            language: "jinja"
          },
          {
            stepNumber: 4,
            title: "Apply CSS Styles for Print",
            explanation: "Use CSS to set font sizes, padding, and element heights for proper print rendering.",
            code: `td.padding { width: 50%!important; padding-left: 1cm!important; padding-top: 1cm!important; height:134.14pt!important; vertical-align:centre!important; }`,
            language: "css"
          },
          {
            stepNumber: 5,
            title: "Integrate Snippet into Print Format",
            explanation: "Embed this HTML and templating code into your print format document for dynamic address rendering.",
            code: `<!-- Place this snippet in your ERPNext Print Format HTML -->`,
            language: "html"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Company or address does not show in print box.",
            solution: "Ensure the 'doc.print_box' variable matches one of the print box numbers in your snippet and that 'doc.company' and 'doc.address' data are properly set."
          },
          {
            problem: "Layout looks broken or misaligned.",
            solution: "Check CSS padding and width rules. Make sure the table is not overridden by other styles and that the height is set correctly."
          },
          {
            problem: "Print box variable not recognized.",
            solution: "Confirm that 'print_box' is defined in the document context and accessible in the print format template."
          }
        ]}
      />
    </main>
  );
}
