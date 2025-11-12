"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CalculationsOnChildRows() {
  const snippetName = "Calculations on Child rows";
  const language = "javascript";
  const category = "Form Scripting";
  const description =
    "This snippet demonstrates how to perform arithmetic calculations on child table rows using the Frappe framework form scripting, updating fields reactively based on user inputs.";

  const code = `frappe.ui.form.on("Cutting Iss", {
	qtyno: function(frm, cdt, cdn){
		frm.trigger("calculate_qtykg")
	},
	
	wtpc: function(frm, cdt, cdn){
		frm.trigger("calculate_qtykg")
	},
	
	calculate_qtykg: function(frm, cdt, cdn){
        	var d = locals[cdt][cdn];
        	frappe.model.set_value(cdt, cdn, "qtykg", flt(d.wtpc * d.qtyno))
	}
})

//Example 2: Calculate MFI Result Greenage
frappe.ui.form.on("Quality Inspection Reading", "observation1", function(frm,cdt,cdn) {
	calculate_mfi(frm,cdt,cdn);
});
frappe.ui.form.on("Quality Inspection Reading", "observation2", function(frm,cdt,cdn) {
    	calculate_mfi(frm,cdt,cdn);
});

var calculate_mfi = function(frm,cdt,cdn) {
	var d = locals[cdt][cdn];
    mfi = (flt(d.observation1) +flt(d.observation2) +flt(d.observation3) +flt(d.observation4) +flt(d.observation5)) *20 / flt(d.no_of_oberservations);
    	frappe.model.set_value(cdt,cdn,"mfi_result", mfi);
}`;

  return (
    <main>
      <CodeSnippetHero
        title="How to perform dynamic arithmetic calculations on child table rows in Frappe forms?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          This code snippet demonstrates how to handle arithmetic calculations within child rows of a Frappe form. Using event
          triggers on changes to specific child row fields, it updates dependent fields dynamically. This is useful when you want
          to maintain accurate and reactive data in nested child tables such as quantities, weights, or computed results, enabling
          a responsive and user-friendly form experience in ERPNext or Frappe-based applications.
        </p>
      </section>

      <CodeBlock
        code={code}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Sets up event handlers on child table fields to automatically calculate and update related fields such as total weight and MFI result whenever input values change."
        whenToUse="Use this approach when you need real-time updates and arithmetic computations on child table rows within Frappe forms, particularly for ERP or data entry applications involving detail lines."
        prerequisites={[
          "Basic familiarity with Frappe framework form scripting",
          "Understanding of child tables and field events in Frappe",
          "JavaScript fundamentals including event handling"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "Register event handlers that respond to field changes or form events within a Frappe DocType or child table.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form-events"
          },
          {
            title: "frm.trigger",
            description: "Manually trigger a function on the form or child table row to chain calculations or refresh values.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#frm-trigger"
          },
          {
            title: "frappe.model.set_value",
            description: "Programmatically update the value of a field in a particular child row or main document.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/model#frappe-model-set_value"
          },
          {
            title: "flt",
            description: "Utility function to convert values to float safely for arithmetic operations.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/utils#flt"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Set up event handlers on child table fields",
            explanation: "Use frappe.ui.form.on on the child DocType to listen for changes on relevant fields such as qtyno and wtpc.",
            code: "frappe.ui.form.on(\"Cutting Iss\", { qtyno: function(frm, cdt, cdn) { frm.trigger(\"calculate_qtykg\") }, wtpc: function(frm, cdt, cdn) { frm.trigger(\"calculate_qtykg\") }, ... })",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create calculation function",
            explanation: "Define a function calculate_qtykg that reads values from the current child row and sets the calculated qtykg field.",
            code: "calculate_qtykg: function(frm, cdt, cdn) { var d = locals[cdt][cdn]; frappe.model.set_value(cdt, cdn, \"qtykg\", flt(d.wtpc * d.qtyno)) }",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Handle multi-field aggregation",
            explanation: "For more complex calculations like MFI result, trigger a helper function that sums observations and calculates the weighted result.",
            code: "var calculate_mfi = function(frm, cdt, cdn) { var d = locals[cdt][cdn]; mfi = (flt(d.observation1) + flt(d.observation2) + flt(d.observation3) + flt(d.observation4) + flt(d.observation5)) * 20 / flt(d.no_of_oberservations); frappe.model.set_value(cdt, cdn, \"mfi_result\", mfi); }",
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Bind calculation to field changes",
            explanation: "Attach the calculate_mfi function to various observation fields so the result updates whenever an input changes.",
            code: "frappe.ui.form.on(\"Quality Inspection Reading\", \"observation1\", function(frm, cdt, cdn) { calculate_mfi(frm, cdt, cdn); }); frappe.ui.form.on(\"Quality Inspection Reading\", \"observation2\", function(frm, cdt, cdn) { calculate_mfi(frm, cdt, cdn); });",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Calculated fields not updating on child row modification",
            solution: "Ensure that frm.trigger is called on the appropriate events and that field names exactly match those in your child DocType."
          },
          {
            problem: "NaN or incorrect calculation results",
            solution: "Use flt() to safely convert values to float and check for undefined or empty inputs before performing arithmetic."
          },
          {
            problem: "Calculation function not firing",
            solution: "Verify the event handlers are registered correctly on the child table DocType and fields, with correct casing and spelling."
          }
        ]}
      />
    </main>
  );
}
