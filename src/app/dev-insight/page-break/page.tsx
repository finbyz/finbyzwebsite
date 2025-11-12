"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function PageBreakSnippet() {
  const snippetName = "Page Break";
  const code = `<div class=\"page-break\"></div>`;

  return (
    <>
      <CodeSnippetHero
        title="How can I insert a page break in my HTML print layout?"
        description="This snippet demonstrates how to use a simple div element with a 'page-break' class to force a page break in print formats, improving document print layout control."
        snippetName={snippetName}
        language="html"
        category="Print Format"
        accentColor="blue"
      />

      <section className="container-custom mt-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          When designing printable documents with HTML and CSS, controlling where a page break
          occurs is essential for organizing content logically and ensuring the printed output looks professional.
          This code snippet shows a simple yet effective way to insert a page break in your HTML by using
          a dedicated &lt;div&gt; with a class that can be styled to indicate where the printer should break the page.
          This technique is especially useful for print formats such as invoices, reports, or multi-page documents.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Inserts a page break in printed documents by using a div with a CSS class that enforces a page break."
        whenToUse="Use this snippet when you want to control pagination in printed HTML documents to prevent content from splitting incorrectly across pages."
      />

      <KeyConcepts
        concepts={[
          {
            title: "Page Break in CSS",
            description: "The 'page-break-before', 'page-break-after', and 'page-break-inside' CSS properties control page breaks when printing.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after"
          },
          {
            title: "Print Media Styling",
            description: "CSS media queries targeting print allow for styles that apply only during printing.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/print"
          },
          {
            title: "Semantic HTML",
            description: "Using a div with a meaningful class name helps maintain clear structure and styling for print.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Add a div to your HTML where you want the page break",
            explanation: "Insert a &lt;div&gt; element with the class 'page-break' exactly at the point where you want the printed page to break.",
            code: `<div class=\"page-break\"></div>`,
            language: "html"
          },
          {
            stepNumber: 2,
            title: "Define the CSS class to enforce the page break",
            explanation: "In your CSS, add the .page-break class with the 'page-break-after: always' rule (or 'page-break-before') to force the page break when printing.",
            code: `@media print {
  .page-break {
    page-break-after: always;
  }
}`,
            language: "css"
          },
          {
            stepNumber: 3,
            title: "Test printing your page",
            explanation: "Use the browser print preview to verify that the page breaks appear at the intended locations.",
            code: "",
            language: ""
          }
        ]}
      />

      <CodeBlock
        code={code}
        language="html"
        allowCopy={true}
        showLineNumbers={false}
      />

      <Troubleshooting
        items={[
          {
            problem: "Page break not showing when printing",
            solution: "Ensure the CSS is correctly scoped inside a @media print rule and the class name matches exactly. Also verify browser print support."
          },
          {
            problem: "Page break causes unwanted blank pages",
            solution: "Check content height and adjust layout to prevent excessive whitespace before or after the page break."
          }
        ]}
      />
    </>
  );
}
