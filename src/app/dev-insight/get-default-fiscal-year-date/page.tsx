import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function GetDefaultFiscalYearDate() {
  const snippetName = "Get default fiscal year date";
  const code = `// To get default user/global fiscal year, start_date and end_date, use:
frappe.defaults.get_user_default("fiscal_year")
frappe.defaults.get_user_default("year_start_date")
frappe.defaults.get_user_default("year_end_date")`;

  return (
    <main>
      <CodeSnippetHero
        title="How to get the default fiscal year and its start/end dates in Frappe?"
        description="This snippet shows how to retrieve the default fiscal year and its start and end dates defined in user or global defaults in Frappe, simplifying date-based logic in ERPNext customizations."
        snippetName={snippetName}
        language="javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When customizing ERPNext or Frappe apps, you often need to
          reference the fiscal year and its boundaries to filter transactions or
          build reports. The fiscal year is typically configured globally or per user,
          so you need a reliable way to fetch this information programmatically.
          <br />
          <br />
          <strong>Solution:</strong> Frappe provides a convenient API,
          <code>frappe.defaults.get_user_default</code>, to get the current user's default
          settings for fiscal year, year start date, and year end date. This snippet
          demonstrates how to access these defaults easily in client-side scripts.
          <br />
          <br />
          Note: This snippet assumes you are working within the Frappe client-side
          environment where <code>frappe</code> is globally available.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Retrieves the default user's fiscal year and its starting and ending dates from Frappe defaults."
        whenToUse="Use this snippet when you need to reference the current fiscal year and its date range in custom client scripts, reports, or workflows in Frappe/ERPNext."
        prerequisites={[
          "Basic understanding of Frappe client scripting.",
          "frappe.defaults namespace available (client-side).",
          "Fiscal year configured in the system or user defaults."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.defaults.get_user_default",
            description: "API to fetch default values set globally or per user, commonly used to get settings like fiscal year.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/frappe.defaults#get_user_default"
          },
          {
            title: "Fiscal Year in ERPNext",
            description: "Defines the financial year period used for accounting and reporting.",
            relatedLink: "https://docs.erpnext.com/docs/v13/user/manual/en/accounts/fiscal-year"
          },
          {
            title: "Client Scripting in Frappe",
            description: "Allows customization of forms and workflows on the client/browser side.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the user's fiscal year default",
            explanation: "Use frappe.defaults.get_user_default with the key 'fiscal_year' to fetch the default fiscal year name or identifier set for the current user or fallback to global defaults.",
            code: "frappe.defaults.get_user_default('fiscal_year')",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Retrieve fiscal year start date",
            explanation: "Fetch the 'year_start_date' default to get the beginning date of the fiscal year, which is useful for filtering records based on date.",
            code: "frappe.defaults.get_user_default('year_start_date')",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Retrieve fiscal year end date",
            explanation: "Similarly, get the 'year_end_date' default value to know when the fiscal year ends.",
            code: "frappe.defaults.get_user_default('year_end_date')",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "frappe.defaults.get_user_default returns undefined",
            solution: "Ensure the fiscal year and dates are set in user defaults or global defaults. Also, make sure the code is executed in Frappe's client context where frappe.defaults is available."
          },
          {
            problem: "Incorrect fiscal year dates retrieved",
            solution: "Verify that the fiscal year settings in ERPNext or Frappe are configured correctly and that the defaults have not been overridden unintentionally.",
          },
          {
            problem: "Cannot access frappe object",
            solution: "Make sure your script runs in client-side context in a Frappe app or include frappe via context in server scripts appropriately."
          }
        ]}
      />
    </main>
  );
}
