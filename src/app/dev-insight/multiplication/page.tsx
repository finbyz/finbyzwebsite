"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Multiplication";
const language = "Javascript";
const category = "UI Form Interaction";
const description = "This snippet demonstrates how to dynamically calculate the area by multiplying length and width fields on a Frappe form, updating the UI instantly based on user input.";
const code = `frappe.ui.form.on("Item Group", {
	validate: function(frm) {
		frm.trigger("calculate_area");
	},

	length: function(frm) {
		frm.trigger("calculate_area");
	},

	width: function(frm) {
		frm.trigger("calculate_area");
	},

	calculate_area: function(frm) {
		if (frm.doc.length && frm.doc.width){ 
			area = flt(frm.doc.length* frm.doc.width);
			frm.set_value('area', area);
		}
	}
});
`;

export default function MultiplicationPage() {
  return (
    <>
      <CodeSnippetHero
        title="How to dynamically calculate area using length and width in a Frappe form?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="green"
      />

      <section className="container-custom mt-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet shows how to perform real-time multiplication of two input fields, <code>length</code> and <code>width</code>, inside a Frappe form for an "Item Group" doctype. The calculation updates the <code>area</code> field dynamically whenever the length or width values change or upon form validation. This approach provides instant feedback to users and helps maintain data integrity on the client side before submission.
        </p>
      </section>

      <section className="container-custom mt-12">
        <CodeBlock
          code={code}
          language={language.toLowerCase()}
          showLineNumbers={true}
          allowCopy={true}
          referenceLink=""
          referenceLinkText=""
        />
      </section>

      <section className="container-custom mt-12">
        <CodeOverview
          whatItDoes="Calculates the area by multiplying the length and width fields whenever these fields change or when the form is validated, then sets the computed area back into the form."
          whenToUse="Use this snippet when you need to perform dependent field calculations in Frappe forms to provide instant computed values based on user input."
          prerequisites={[
            "Basic familiarity with Frappe's client-side scripting API",
            "Understanding of JavaScript event handlers",
            "Fields 'length', 'width', and 'area' declared in your doctype"
          ]}
        />
      </section>

      <section className="container-custom mt-12">
        <KeyConcepts
          concepts={[
            {
              title: "frappe.ui.form.on",
              description: "Registers event handlers for specific doctype forms to react to user interactions.",
              relatedLink: "https://frappeframework.com/docs/user/en/api/form#frappe-ui-form-on"
            },
            {
              title: "frm.trigger",
              description: "Programmatically triggers another event handler in the same form script.",
              relatedLink: "https://frappeframework.com/docs/user/en/api/form#frm-trigger"
            },
            {
              title: "flt",
              description: "Utility function to safely convert a value into a floating point number.",
              relatedLink: "https://frappeframework.com/docs/user/en/api/python-utils#flt"
            },
            {
              title: "frm.set_value",
              description: "Sets a value on a form field and updates the UI accordingly.",
              relatedLink: "https://frappeframework.com/docs/user/en/api/form#frm-set-value"
            }
          ]}
        />
      </section>

      <section className="container-custom mt-12">
        <StepByStepTutorial
          steps={[
            {
              stepNumber: 1,
              title: "Attach script to doctype",
              explanation: "Use frappe.ui.form.on to register handlers for the 'Item Group' doctype.",
              code: `frappe.ui.form.on("Item Group", { ... });`,
              language: "javascript"
            },
            {
              stepNumber: 2,
              title: "Trigger calculate_area on changes",
              explanation: "Trigger calculation whenever length or width fields are changed or the form is validated.",
              code: `length: function(frm) { frm.trigger('calculate_area'); },\nwidth: function(frm) { frm.trigger('calculate_area'); },\nvalidate: function(frm) { frm.trigger('calculate_area'); }`,
              language: "javascript"
            },
            {
              stepNumber: 3,
              title: "Define calculate_area handler",
              explanation: "Perform multiplication if both length and width are present and set the area field.",
              code: `calculate_area: function(frm) {\n    if (frm.doc.length && frm.doc.width) {\n        area = flt(frm.doc.length * frm.doc.width);\n        frm.set_value('area', area);\n    }\n}`,
              language: "javascript"
            }
          ]}
        />
      </section>

      <section className="container-custom mt-12 mb-16">
        <Troubleshooting
          items={[
            {
              problem: "Calculated area does not update when length or width changes.",
              solution: "Ensure that the field names in the code exactly match the form field names and that the event handlers are properly registered."
            },
            {
              problem: `Area shows NaN or incorrect values.`,
              solution: "Verify that 'length' and 'width' fields contain valid numeric values before multiplication; you can add validation or default values as needed."
            },
            {
              problem: "The area field does not display the new value in the form.",
              solution: "Check that frm.set_value is being called correctly and the area field exists in the doctype. Refresh the form if necessary."
            }
          ]}
        />
      </section>
    </>
  );
}
