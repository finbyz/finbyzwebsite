import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function IgnoreDoctypesOnCancelPage() {
  const snippetName = "Ignore doctypes link on Cancel version 13";
  const language = "Frappe Client Script";
  const category = "Frappe Form Customization";
  const codeSnippet = `frm.ignore_doctypes_on_cancel_all = ['Sales Invoice', 'Purchase Invoice'];  
// use above line of code in onload or refresh event for ignoring doctypes link at the time of cancellation.`;

  return (
    <main>
      <CodeSnippetHero
        title="How to ignore specific DocType links on Cancel in Frappe?"
        description="In Frappe Framework version 13, you may want to prevent certain DocType links from being available during the cancellation process. This snippet demonstrates how to configure your form to ignore links for specified DocTypes such as 'Sales Invoice' and 'Purchase Invoice' during cancel events."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In Frappe v13, when cancelling certain documents, the framework automatically shows
          links to related DocTypes (like Sales Invoice or Purchase Invoice). Sometimes, you may want to
          disable or ignore these links for specific DocTypes to avoid unwanted navigation or processing.
          <br />
          <strong>Solution:</strong> By setting the <code>ignore_doctypes_on_cancel_all</code> property on the form object
          to an array of DocType names, you instruct the form to skip displaying links for those DocTypes during
          cancellation events. This snippet demonstrates how to implement this in the onload or refresh
          event of the client script.
          <br />
          <em>Note:</em> There was no extended description provided with the snippet.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Sets the 'ignore_doctypes_on_cancel_all' property in the form scripting environment, specifying which DocTypes should be excluded from cancellation links."
        whenToUse="Use this when you want to streamline the cancellation UI process by removing unnecessary DocType links that could confuse users or cause errors during cancellation workflows."
        prerequisites={[
          "Basic knowledge of Frappe client scripting",
          "Understanding of Frappe DocType relationships",
          "Access to customize client scripts on your Frappe/ERPNext instance"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "ignore_doctypes_on_cancel_all Property",
            description: "An array property on frm that lists DocType names to ignore for cancel event links.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          },
          {
            title: "Client Script Events",
            description: "Frappe client scripts allow running JavaScript code on form events like onload or refresh.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          },
          {
            title: "DocType and Form Customization",
            description: "DocTypes are the core data models; forms can be customized to modify UI behavior on events.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctype"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify DocTypes to Ignore",
            explanation: "Decide which DocTypes should be excluded from the cancellation links – here 'Sales Invoice' and 'Purchase Invoice'.",
            code: `['Sales Invoice', 'Purchase Invoice']`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Set the ignore_doctypes_on_cancel_all Property",
            explanation: "In your client script's onload or refresh event, set the frm.ignore_doctypes_on_cancel_all property to the array of DocType names.",
            code: `frm.ignore_doctypes_on_cancel_all = ['Sales Invoice', 'Purchase Invoice'];`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Save and Test",
            explanation: "Save the client script and reload the form to verify the cancellation links for the specified DocTypes do not appear.",
            code: `// No additional code; verify through the UI`,
            language: "plaintext"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Cancellation links to unwanted DocTypes still appear after implementing the snippet.",
            solution: "Ensure that your client script with frm.ignore_doctypes_on_cancel_all is correctly added and is running on the intended doctype and event (onload or refresh). Clear browser cache if necessary."
          },
          {
            problem: "Syntax error or snippet not working in Frappe version other than v13.",
            solution: "Verify compatibility of the ignore_doctypes_on_cancel_all property with your Frappe/ERPNext version. This snippet is confirmed for v13."
          }
        ]}
      />
    </main>
  );
}
