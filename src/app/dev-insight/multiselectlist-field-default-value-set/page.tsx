import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `frappe.query_reports["Your Report Name"] = {
    "filters": [
        {
            // Define filters here as needed
        }
    ],
    onload: function(report) {
        let status_filter = report.get_filter('status');
        if (status_filter && (!status_filter.get_value() || status_filter.get_value().length === 0)) {
            status_filter.set_value(['To Deliver and Bill']);
        }
    },
};`;

export default function MultiSelectListDefaultValue() {
  return (
    <main>
      <CodeSnippetHero
        title="How to set default value for a MultiSelectList filter in Frappe reports?"
        description="Ensure a MultiSelectList filter has a default selected value on report load to improve report usability and avoid empty filter states."
        snippetName="MultiSelectList field default value set"
        language="Frappe Client Script"
        category="Frappe Frontend"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: When using MultiSelectList type filters in Frappe query reports, users may see empty filter values on initial
          load, causing confusion or requiring manual selection.
        </p>
        <p>
          Solution: By using the <code>onload</code> function of the report you can programmatically check the filter's current
          value and set a default selection if none exists. This enhances user experience by showing relevant default filter
          values right away.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        showLineNumbers
        allowCopy
      />

      <CodeOverview
        whatItDoes="Defines a Frappe query report with filters and uses the onload callback to check the 'status' filter. If this MultiSelectList filter is empty, it sets a default value 'To Deliver and Bill'."
        whenToUse="Use this pattern when you want to assign default selections for MultiSelectList filters in query reports to guide users and avoid empty filter defaults."
        prerequisites={[
          "Basic understanding of Frappe query reports",
          "Frappe DocType and filters mechanism",
          "JavaScript knowledge to write the onload logic"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.query_reports",
            description: "Defines client-side configuration for query reports including filters and event handlers.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/query-reports"
          },
          {
            title: "MultiSelectList Filter",
            description: "A Frappe filter field type that allows selecting multiple values.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/query-reports#filter"
          },
          {
            title: "onload Event",
            description: "An event triggered when the report loads, used for initialization and setting default filter values.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/query-reports#events"
          },
          {
            title: "Filter API - get_filter and set_value",
            description: "Methods to retrieve filters and programmatically set their values in Frappe reports.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/query-reports#filter-api"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Define the Query Report Filters",
            explanation: "Set up the filters array inside the report definition. Even if empty or incomplete, declare it so filters exist.",
            code: `"filters": [
  {
    // Define your filter fields here
  }
],`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Implement the onload Function",
            explanation: "Use the onload event handler to get the filter object by name and check its current value.",
            code: `onload: function(report) {
  let status_filter = report.get_filter('status');
  // Additional logic
},`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Set Default Value if Filter is Empty",
            explanation: "Check if the filter has no value or is empty, then set the default value using set_value.",
            code: `if (status_filter && (!status_filter.get_value() || status_filter.get_value().length === 0)) {
  status_filter.set_value(['To Deliver and Bill']);
}`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Default value not applied, filter remains empty on load.",
            solution: "Ensure the filter name matches exactly and the onload function is included within the correct report declaration. Also check spelling case and report name."
          },
          {
            problem: "Error: set_value is not a function or get_filter returns undefined.",
            solution: "Confirm the report object is correctly passed to onload and that the filter actually exists with the name used."
          },
          {
            problem: "Default values are cleared when other filters change.",
            solution: "Consider setting defaults only in onload or handle filter change events separately if needed."
          }
        ]}
      />
    </main>
  );
}
