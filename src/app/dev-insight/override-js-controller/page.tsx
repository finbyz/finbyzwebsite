import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `// erpnext file : erpnext/public/js/controllers/transactions.js

// override TransactionController exists in above transaction.js - override only one function that is required.
erpnext.TransactionController = erpnext.TransactionController.extend({
    batch_no: function(doc, cdt, cdn) {
        let item = frappe.get_doc(cdt, cdn);
        // this.apply_price_list(item, true);
    },
});`;

export default function OverrideJsController() {
  return (
    <>
      <CodeSnippetHero
        title="How to Override a Function in a Frappe JS Controller?"
        description="This snippet shows how to extend and override a specific function of an existing Frappe JS Controller to customize transaction behavior without altering the core source."
        snippetName="Override Js Controller"
        language="Frappe Framework"
        category="Frappe Frontend"
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In Frappe/ERPNext, developers sometimes need to modify the behavior of existing
          client-side controllers, such as the TransactionController, without directly changing core files. Direct
          modifications can lead to upgrade issues and conflicts.
          <br />
          <br />
          <strong>Solution:</strong> This snippet demonstrates overriding a single method within an existing controller by
          extending it. The example shows how to override the <code>batch_no</code> function to customize logic related
          to batch number processing while keeping the rest of the original controller intact.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        fileName="erpnext/public/js/controllers/transactions.js"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={`This overrides the existing 'batch_no' method in the TransactionController to customize batch number related functionality. The code fetches the current child document (item) at given doctype and docname using 'frappe.get_doc'. The commented out line hints where to apply price list logic if needed.`}
        whenToUse={`Use this pattern when you want to modify or enhance just one or a few specific methods of a Frappe JS controller without copying or modifying the whole file, thus preserving upgrade safety.`}
        prerequisites={[
          "Basic understanding of Frappe framework client scripting.",
          "Knowledge of JavaScript prototypal inheritance and Frappe's extend pattern.",
          "Familiarity with ERPNext transaction flows if overriding TransactionController."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe JS Controllers",
            description: "Controllers in Frappe that contain JavaScript methods to handle client-side logic for DocTypes and forms.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/controllers"
          },
          {
            title: "Extending Controllers",
            description: "Extending existing Frappe controllers enables customization without modifying source files directly.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#controller-extension"
          },
          {
            title: "frappe.get_doc",
            description: "Function to retrieve a child document instance given doctype and docname for manipulation.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/frappe#get-doc"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Locate the original controller file",
            explanation: "Identify the location of the Frappe/ERPNext JS controller you wish to override, here it's transactions.js under erpnext/public/js/controllers.",
            code: "// erpnext/public/js/controllers/transactions.js",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Extend the existing controller",
            explanation: "Use the extend method on the existing controller to override the method you want, leaving other methods untouched.",
            code: "erpnext.TransactionController = erpnext.TransactionController.extend({});",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Override the specific method",
            explanation: "Define the function you want to override with your custom code. Use frappe.get_doc to fetch child doc data if needed.",
            code: `batch_no: function(doc, cdt, cdn) {
    let item = frappe.get_doc(cdt, cdn);
    // your custom logic here
},`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Test your override",
            explanation: "Reload your Frappe app and test the customized controller method to ensure it behaves as expected.",
            code: "// No code: test in UI",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Overridden function is not called",
            solution: "Ensure your extension code is loaded after the original controller and check for JavaScript errors in the console."
          },
          {
            problem: "Changes break other functionalities",
            solution: "Override only what you need and avoid changing global controller logic; use extensive testing before deployment."
          }
        ]}
      />
    </>
  );
}
