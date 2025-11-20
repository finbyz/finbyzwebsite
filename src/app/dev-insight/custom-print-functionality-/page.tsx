import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

const codeSnippet = `frappe.ui.form.on('Sales Order', {
	refresh: function(frm) {
		if(!frm.doc.printout_taken){
			frm.add_custom_button(__('Print'), function(){
				cur_frm.print_doc();
			
			}) 
		} 
	},
})

//IN Report 

Here the solution: "onload": function(frm) { frm.page.add_inner_button__("Print"), function() { frm.print_report(); }); }`;

export default function CustomPrintFunctionality() {
  return (
    <main>
      <CodeSnippetHero
        title="How to trigger custom Print functionality in Frappe forms and reports?"
        description="Problem: How to call the print trigger function from a custom button in a DocType form or report in Frappe? Solution: Use client scripts to add custom Print buttons that programmatically invoke the print dialog."
        snippetName="Custom Print functionality"
        language="Frappe Client Script"
        category="Frappe Form Customization"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          In Frappe Framework, end users may want to add custom Print buttons to
          their DocType forms or reports to trigger the print dialog programmatically.
          This snippet illustrates how to add such buttons in the Sales Order form and reports.
          The problem is to integrate a custom UI action with the internal print trigger functions.
          The solution demonstrates how to leverage the client script API
          to add buttons on form refresh or report load that invoke print functions
          like <code>cur_frm.print_doc()</code> for DocTypes and <code>frm.print_report()</code> for reports.
          This enhances the user experience by simplifying the print process
          without modifying backend code.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Adds a custom 'Print' button on the Sales Order form's refresh event and on report load to programmatically trigger print dialogs."
        whenToUse="Use this approach when you want users to print documents or reports via a customized button action in Frappe forms or reports without backend code changes."
        prerequisites={[
          "Basic knowledge of Frappe client scripting",
          "Access to form or report client script customization",
          "Frappe Desk UI familiarity"
        ]}
      />

      <KeyConcepts
        concepts=[
          {
            title: "frappe.ui.form.on",
            description:
              "A function to attach client script event handlers for DocType forms, including actions on refresh, validate, etc.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#frappe-ui-form"
          },
          {
            title: "frm.add_custom_button",
            description:
              "API method to add a custom button to a DocType form's toolbar that can trigger custom JavaScript functions.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#frm-add_custom_button"
          },
          {
            title: "Print functions (cur_frm.print_doc, frm.print_report)",
            description:
              "Methods to programmatically invoke the print dialog for DocTypes and reports respectively.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#frappe-frm-object"
          },
          {
            title: "frm.page.add_inner_button",
            description: "Adds buttons inside the report's page area for easy user actions.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#reports"
          }
        ]
      />

      <StepByStepTutorial
        steps={
          [
            {
              stepNumber: 1,
              title: "Add client script for Sales Order DocType",
              explanation:
                "Attach a refresh event handler using frappe.ui.form.on for 'Sales Order' to check if the print button is already taken, and add a custom 'Print' button if not.",
              code:
                "frappe.ui.form.on('Sales Order', {\n refresh: function(frm) {\n  if(!frm.doc.printout_taken){\n    frm.add_custom_button(__('Print'), function(){\n      cur_frm.print_doc();\n    }) \n  } \n },\n})",
              language: "javascript"
            },
            {
              stepNumber: 2,
              title: "Add print button on report load",
              explanation:
                "For reports, use the 'onload' client script event to add an inner button that triggers the print_report method to print the report.",
              code:
                "onload: function(frm) {\n  frm.page.add_inner_button(__('Print'), function() {\n    frm.print_report();\n  });\n}",
              language: "javascript"
            }
          ]
        }
      />

      <Troubleshooting
        items={
          [
            {
              problem: "Custom Print button does not show on form refresh.",
              solution: "Ensure that the client script is correctly attached for the specific DocType and that no JavaScript errors occur in the browser console. Also verify that 'printout_taken' is properly checked."
            },
            {
              problem: "Print dialog doesn't open when clicking the custom button.",
              solution: "Confirm that 'cur_frm' and 'frm' are correctly referenced in the client script and that the functions 'print_doc()' or 'print_report()' are supported for your version of Frappe/ERPNext."
            }
          ]
        }
      />
    </main>
  );
}
