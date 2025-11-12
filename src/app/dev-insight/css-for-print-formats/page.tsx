"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CSSForPrintFormatsPage() {
  const snippetName = "CSS for Print Formats";
  const language = "html";
  const category = "Print Format";

  const codeSnippet = `.print-format {
margin-top: 0mm!important;
margin-bottom: 0mm!important;
margin-left: 0mm!important;
margin-right: 0mm!important;
}
table {
	cellpadding:0!important;
	border-collapse: collapse;
   	border-spacing: 00!important;
	border: 0.5px solid black!important;	
}
table.table.table-bordered.table-hover {
	cellpadding:0!important;
	border-collapse: collapse;
   	border-spacing: 00!important;
	padding: 0!important;
	padding-top: 0!important; 
	padding-bottom: 0!important;
	border: 0.5px solid black!important;
	margin-top:0!important; 
	margin-bottom:0!important;
}
.tbspace > tbody > tr > td{
	padding: 0 5px 0 7px!important; margin:0!important; border-spacing: 0!important;
}
tr { 
    padding: 0!important;border-spacing: 0!important;
}
tr.non > td {
    border-top: 1; border-bottom: 0!important;border-right: 0!important;border-left: 0!important; padding: 0!important; margin:0!important; border-spacing: 0!important; height: 0!important;
}
tr.space > td {
    padding-top: 0!important; padding-bottom: 0!important;  margin:0!important; border-spacing: 0!important;
}
tr.tint > td {
	padding: 0!important; margin:0!important; border-spacing: 0!important; height:100%!important;
}


tr.bottom > td {
    border-bottom: 0!important; padding-top: 0!important; padding-bottom: 0! margin:0!important; border-spacing: 0!important; height: 0!important;
}
tr.top > td{
    border-top: 0!important; padding-top: 0!important; padding-bottom: 0! margin:0!important; border-spacing: 0!important; height: 0!important;
}
tr.topbottom > td{
    border-top: 0; border-bottom: 0; padding-top: 0!important; padding-bottom: 0!important; margin:0!important; border-spacing: 0!important;
}
td.non {
    border-top: 0; border-bottom: 0!important;border-right: 0!important;border-left: 1!important; padding: 0!important; margin:0!important; border-spacing: 0!important; height: 0!important;
}
//none is class of table
.none td:last-child {
    border-top: 0; border-bottom: 0!important;border-right: 0!important;border-left: 0!important; padding: 0!important; margin:0!important; border-spacing: 0!important; height: 0!important;
}
.none tr > td:last-child {
    border-top: 0; border-bottom: 0!important;border-right: 0!important;border-left: 0!important; padding: 0!important; margin:0!important; border-spacing: 0!important; height: 0!important;
}
td.topborder {
    border-bottom: 0; padding-top: 0!important; padding-bottom: 0!important; margin:0!important; border-spacing: 0!important;
}

td.topbottom {
    border-top: 0; border-bottom: 0; padding-top: 0!important; padding-bottom: 0!important; margin:0!important; border-spacing: 0!important;
}
td.topbottomSpace {
    border-top: 0; border-bottom: 0; padding: 0!important; margin:0!important; border-spacing: 0!important;
}
td.top {
    border-top: 0!important; padding-top: 0!important; padding-bottom: 0! margin:0!important; border-spacing: 0!important; height: 0!important;
}
td.bottom {
    border-bottom: 0!important; padding-top: 0!important; padding-bottom: 0! margin:0!important; border-spacing: 0!important; height: 0!important;
}
.table.table-bordered.table-hover td {
    border: 0.5px solid black!important;padding-top: 0!important; padding-bottom: 0!important; margin:0!important; border-spacing: 0!important; font-size:11px; font-family: Cambria, \"Hoefler Text\", \"Liberation Serif\", Times, \"Times New Roman\", serif;
}
th.text-right {
    border: 0.5px solid black!important; padding: 0!important; margin:0!important; background-color:transparent!important; text-align:center!important; font-size:11px; font-family: Cambria, \"Hoefler Text\", \"Liberation Serif\", Times, \"Times New Roman\", serif; line-height:100%;
}
th.text-left {
    border: 0.5px solid black!important; padding: 0!important; margin:0!important; background-color:transparent!important; text-align:center!important; font-size:11px; font-family: Cambria, \"Hoefler Text\", \"Liberation Serif\", Times, \"Times New Roman\", serif; line-height:100%;
}
div.tax-break-up {
	padding: 0!important; margin-top:0!important; margin-bottom:0!important; border-spacing:0!important;
	}
p {
	font-size:11px; font-family: Cambria, \"Hoefler Text\", \"Liberation Serif\", Times, \"Times New Roman\", serif; line-height:110%;
}
p.imp {
	font-size:12px; font-family: Cambria, \"Hoefler Text\", \"Liberation Serif\", Times, \"Times New Roman\", serif;
}
`;

  return (
    <>
      <CodeSnippetHero
        title="How to apply consistent CSS styling for print formats?"
        description="This CSS snippet provides a comprehensive set of styles for print table formatting. It ensures zero margins, cell padding, border spacing, and proper border application for clean and consistent printed tables."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <main>
        <section className="container-custom my-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-base leading-relaxed">
            This code snippet defines CSS styles specifically tailored for print formats,
            especially focusing on tables. When generating printed documents from web
            content, it is crucial to control layout elements like margins, padding,
            borders, and spacing to ensure the output looks professional and clean.
            This CSS resets margins to zero, removes cell padding, collapses borders,
            and applies fine border lines to create a crisp print output.
            It's highly useful for reports, invoices, and any tabular print layout where
            formatting consistency is mandatory.
          </p>
        </section>

        <CodeBlock
          code={codeSnippet}
          language="css"
          showLineNumbers
          allowCopy
        />

        <CodeOverview
          whatItDoes="Sets zero margins for print formatting, removes cell padding and spacing, applies thin black borders, and styles tables for crisp appearance in prints."
          whenToUse="Use this CSS when preparing HTML tables and print layouts that require consistent and clean printed output, such as invoices, statements, or reports."
          prerequisites={[]}
        />

        <KeyConcepts
          concepts={[
            {
              title: "Margin Resetting",
              description: "Ensures no extra whitespace around the print content by setting all margins to 0mm.",
              relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
            },
            {
              title: "Border Collapse",
              description: "Collapses table borders so that adjacent cells share borders, reducing double lines.",
              relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse"
            },
            {
              title: "Important CSS Rule",
              description: "The !important rule is used extensively to enforce print styles overriding any other styles.",
              relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
            },
            {
              title: "Fine Border Application",
              description: "Uses 0.5px solid black borders for neat and subtle lines suitable for print.",
              relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/border"
            }
          ]}
        />

        <StepByStepTutorial
          steps={[
            {
              stepNumber: 1,
              title: "Reset margins for print format",
              explanation: "Set all margins to 0mm with !important to eliminate unwanted whitespace around the print area.",
              code: `.print-format {\n  margin-top: 0mm!important;\n  margin-bottom: 0mm!important;\n  margin-left: 0mm!important;\n  margin-right: 0mm!important;\n}`,
              language: "css"
            },
            {
              stepNumber: 2,
              title: "Collapse table borders",
              explanation: "Apply border-collapse and remove border spacing to combine adjacent table cell borders.",
              code: `table {\n  border-collapse: collapse;\n  border-spacing: 0!important;\n  border: 0.5px solid black!important;\n}`,
              language: "css"
            },
            {
              stepNumber: 3,
              title: "Remove cell padding",
              explanation: "Set padding to 0 for table cells and customize padding specifically where needed using classes.",
              code: `.tbspace > tbody > tr > td {\n  padding: 0 5px 0 7px!important;\n  margin: 0!important;\n  border-spacing: 0!important;\n}`,
              language: "css"
            },
            {
              stepNumber: 4,
              title: "Style table header and cells",
              explanation: "Use consistent fonts and sizes suitable for print with borders on headers.",
              code: `.table.table-bordered.table-hover td {\n  font-size: 11px;\n  font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', serif;\n  border: 0.5px solid black!important;\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n  margin: 0!important;\n}`,
              language: "css"
            }
          ]}
        />

        <Troubleshooting
          items={[
            {
              problem: "Borders appearing doubled in print",
              solution: "Ensure border-collapse: collapse and border-spacing: 0 are set on the table to avoid double borders."
            },
            {
              problem: "Unexpected spacing around print content",
              solution: "Check and reset all margin values on the print container to 0 using !important to override defaults."
            },
            {
              problem: "Table cells padding inconsistent",
              solution: "Use explicit cell padding rules with !important to enforce consistent padding in printed tables."
            },
            {
              problem: "Fonts or line heights not suitable for print",
              solution: "Define font-family and line-height explicitly for print tables and paragraphs for better readability."
            }
          ]}
        />
      </main>
    </>
  );
}
