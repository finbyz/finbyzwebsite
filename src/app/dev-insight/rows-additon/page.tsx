"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function RowsAdditionPage() {
  const snippetName = "Rows Addition";
  const language = "javascript";
  const category = "Form Scripting";

  const code = `frappe.ui.form.on("Child Table DocType", "child_field", function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	let total_qty = 0;
	$.each(frm.doc.child_table || [], function(i, d) {
		total += flt(d.child_field);
	});
	frm.set_value("total_field", total);
});

// Exp 1
frappe.ui.form.on("FC-Form Purchase Invoice Detail", "grand_total", function(frm, cdt, cdn) {
	let total = 0;
	$.each(frm.doc.invoices || [], function(i, d) {
		total += flt(d.grand_total);
	});
	frm.set_value("total_amount", total);
});

//Exp 2
frappe.ui.form.on("Sales Invoice Item", "qty", function(frm, cdt, cdn) {
	let total_qty = 0;
	$.each(frm.doc.items || [], function(i, d) {
		total_qty += flt(d.qty);
	});
	frm.set_value("total_quantity", total_qty);
});

// Exp 3 Row Addition On validate Event
frappe.ui.form.on("Sales Invoice", {
	validate: function(frm) {
		let total_qty = 0;
		$.each(frm.doc.items || [], function(i, d) {
			total_qty += flt(d.qty);
		});
		frm.set_value("net_weight", total_qty);
	}
});`;

  return (
    <main>
      <CodeSnippetHero
        title="How to dynamically calculate the sum of child table rows in Frappe forms?"
        description="This snippet demonstrates how to sum values from child table rows and update a total field in the parent form dynamically using Frappe UI form scripting in JavaScript."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet provides practical examples of how to calculate and update total or aggregate values by iterating over child table entries in a Frappe form.
          It covers various scenarios including updating totals on field change events or on form validation.
          Such behavior is commonly required in business applications for invoices, orders, and other transactional documents where a parent record summarizes numeric values from its child records.
          Implementing this client-side logic enhances user experience by providing immediate total calculations without requiring server interactions.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Calculates the sum of a specific field across all rows of a child table and sets the cumulative value in a parent form field."
        whenToUse="When you have a child table inside a Frappe form and want to dynamically compute total amounts, quantities, or other numeric aggregations as users modify rows."
        prerequisites={[
          "Basic understanding of Frappe framework client scripting",
          "Familiarity with JavaScript and jQuery",
          "Knowledge of Frappe forms and child table structures"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe Form Events",
            description: "Leveraging frappe.ui.form.on to trigger functions on specific field changes or form events.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form"
          },
          {
            title: "Child Table Iteration",
            description: "Using jQuery's $.each to iterate over the child table rows in frm.doc.",
            relatedLink: "https://api.jquery.com/jquery.each/"
          },
          {
            title: "Updating Parent Field",
            description: "Setting aggregate values on the parent document with frm.set_value.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#set-value"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Child Table and Field",
            explanation: "Determine the child table DocType and the child field you want to sum.",
            code: `frappe.ui.form.on("Child Table DocType", "child_field", function(frm, cdt, cdn) { ... });`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Iterate Over Child Table Rows",
            explanation: "Use $.each to loop through each row of the child table array in frm.doc.",
            code: `let total = 0;\n$.each(frm.doc.child_table || [], function(i, d) {\n  total += flt(d.child_field);\n});`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Update Parent Field with Total",
            explanation: "Set the calculated total on the desired parent form field using frm.set_value.",
            code: `frm.set_value("total_field", total);`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Use Appropriate Event Triggers",
            explanation: "Attach the logic to relevant form events such as field change or form validate for up-to-date totals.",
            code: `frappe.ui.form.on("Sales Invoice", { validate: function(frm) { ... } });`,
            language: "javascript"
          }
        ]}
      />

      <CodeBlock
        code={code}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <Troubleshooting
        items={[
          {
            problem: "Total values not updating when child fields are modified.",
            solution: "Ensure the event is correctly attached to the child field or the form event triggering the calculation. Double-check the child table field names and form field names are accurate."
          },
          {
            problem: "Total remains zero or incorrect.",
            solution: "Verify the use of the flt() function to convert values to float before summation. Also, confirm the child table array is not undefined or empty."
          },
          {
            problem: "JavaScript errors in console related to frm or jQuery.",
            solution: "Make sure frappe and jQuery are loaded in the environment as this snippet relies on these frameworks."
          }
        ]}
      />
    </main>
  );
}
