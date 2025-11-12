"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function SpanTableCellLookPage() {
  const snippetName = "Span Table Cell Look";
  const language = "html";
  const category = "Print Formatting";
  const snippetCode = `<p style=\"width: 95%; display: table;\">\n\t<span style=\"display: table-cell; width:1px;white-space:nowrap;\">Lorry Challan No. :  </span>\n\t<span style=\"display: table-cell; border-bottom: 1px solid black;text-align:center;\">{{ doc.name }} </span> \n</p>`;

  return (
    <>
      <CodeSnippetHero
        title="How can you create a clean span table cell look for print formats in HTML?"
        description="This snippet demonstrates how to use HTML and inline CSS to create a 'span table cell look' that elegantly displays tabular data with spanning and aligned cells in print formats."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="leading-relaxed text-gray-700">
          This code snippet presents a practical and visually effective way to display key-value pairs
          in print format layouts using HTML tables combined with inline CSS styles. Instead of
          simple table cells, it uses CSS <code>display: table-cell</code> within span elements to
          create a structured and clean look, including cell spanning with <code>colspan</code> attributes.
          This approach is especially useful in printable documents like invoices, challans, or
          reports where clarity and alignment of data are critical.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          The snippet shows how different pieces of information such as the lorry challan number,
          dates, origin and destination, and transport details can be neatly formatted to enhance
          readability and visual appeal. Using this method helps maintain consistent spacing,
          text alignment, and borders for underline effects, improving the overall print quality.
        </p>
      </section>

      <CodeBlock
        code={snippetCode}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Provides a method to format print layout tables with span table cell looks using HTML and inline CSS. It achieves alignment and styling using display table-cell and colspan attributes."
        whenToUse="Use this snippet when you need a clean, well-aligned printable layout for documents like challans, invoices, or reports that require precise data alignment and underlined text styling."
        prerequisites={[
          "Basic understanding of HTML tables",
          "Familiarity with inline CSS styling",
          "Experience with print formatting or templating in web documents"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "display: table-cell",
            description: "The CSS property used on span elements to mimic table cell behavior for flexible formatting.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
          },
          {
            title: "colspan attribute",
            description: "HTML attribute on td elements to span a cell across multiple columns, creating flexible layouts.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan"
          },
          {
            title: "Inline CSS for print formats",
            description: "Using inline CSS styles directly in HTML to ensure consistent rendering in printed documents.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_for_print"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create a table layout",
            explanation: "Define a table with appropriate cellpadding, cellspacing, and width to suit print format needs.",
            code: `<table cellpadding=\"2\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n  <tbody> ... </tbody>\n</table>`,
            language: "html"
          },
          {
            stepNumber: 2,
            title: "Use td with colspan",
            explanation: "Leverage the colspan attribute to let table cells span multiple columns for flexible layout.",
            code: `<td colspan=\"2\" width=\"50%\" valign=\"top\"> ... </td>`,
            language: "html"
          },
          {
            stepNumber: 3,
            title: "Apply display: table-cell on span",
            explanation: "Inside the td, use spans with CSS display set to table-cell to create side-by-side cell-like segments.",
            code: `<span style=\"display: table-cell; width: 1px; white-space: nowrap;\">Label: </span>\n<span style=\"display: table-cell; border-bottom: 1px solid black; text-align: center;\">Value</span>`,
            language: "html"
          },
          {
            stepNumber: 4,
            title: "Align and style content",
            explanation: "Use inline styles for width, white-space, border-bottom for underline effect, and text alignment for clear presentation.",
            code: `<p style=\"width: 95%; display: table; float: right;\"> ... </p>`,
            language: "html"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Table cells content not aligned properly",
            solution: "Ensure that each span inside the td has 'display: table-cell' and appropriate widths set to prevent wrapping and maintain alignment."
          },
          {
            problem: "Underline border not showing",
            solution: "Check that border-bottom style is correctly applied inline on the span that should have the underline and that its display is set to table-cell."
          },
          {
            problem: "Content overlaps or is cut off in print",
            solution: "Adjust table width and colspan values to fit content within print margins and avoid overflow."
          }
        ]}
      />
    </>
  );
}
