"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function SubtractionPage() {
  const snippetCode = `//******Subtraction***********//
frappe.ui.form.on("Advance Authorisation License", "approved_qty", function(frm) {
    calculate_remaining_qty(frm);
});

frappe.ui.form.on("Advance Authorisation License", "total_import_qty", function(frm) {
    calculate_remaining_qty(frm);
});

var calculate_remaining_qty = function(frm) {
    var remaining_qty = flt(frm.doc.approved_qty) - flt(frm.doc.total_import_qty);
    frm.set_value("remaining_qty", remaining_qty);
}`;

  return (
    <main>
      <CodeSnippetHero
        title="How can I perform subtraction between two form fields in Frappe to automatically update a third field?"
        description="This snippet shows how to subtract two numeric fields in a Frappe form and update a third field with the result, ensuring real-time calculation when input values change."
        snippetName="Subtraction"
        language="javascript"
        category="Arithmetic"
        accentColor="orange"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet demonstrates a simple yet effective method to perform subtraction
          in Frappe form scripting using JavaScript. The subtraction is done between two numeric
          fields <code className="bg-gray-100 px-1 rounded">approved_qty</code> and <code className="bg-gray-100 px-1 rounded">total_import_qty</code>.
          Whenever either of these fields changes, the script automatically calculates the difference and
          updates the <code className="bg-gray-100 px-1 rounded">remaining_qty</code> field accordingly.
          This logic ensures that the user has an up-to-date view of how much quantity remains,
          aiding inventory or licensing management scenarios commonly encountered in the Frappe framework.
        </p>
      </section>

      <CodeBlock
        code={snippetCode}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="It listens to changes in two fields of a Frappe form and subtracts the total import quantity from the approved quantity. The result is then set to another field named 'remaining_qty'."
        whenToUse="Use this pattern when you need to keep a calculated field updated automatically based on the subtraction of two other numeric fields in a Frappe form."
        prerequisites={["Basic knowledge of JavaScript", "Frappe framework form scripting", "Understanding of Frappe DocField events"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Event Listeners in Frappe Forms",
            description: "Using frappe.ui.form.on to listen to changes on specific DocField triggers recalculation dynamically.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form_events"
          },
          {
            title: "Typecasting with flt()",
            description: "Ensures values are treated as floats before arithmetic operations to prevent type coercion issues.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/utils"
          },
          {
            title: "Setting Form Values",
            description: "Updating form fields programmatically using frm.set_value() to reflect calculated data instantly.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form_scripts"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Set Up Event Handlers",
            explanation: "Attach frappe.ui.form.on event listeners to the 'approved_qty' and 'total_import_qty' fields to react on changes.",
            code: `frappe.ui.form.on("Advance Authorisation License", "approved_qty", function(frm) {
  calculate_remaining_qty(frm);
});`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create Subtraction Logic Function",
            explanation: "Define a function 'calculate_remaining_qty' that subtracts total_import_qty from approved_qty after converting both to float.",
            code: `var calculate_remaining_qty = function(frm) {
  var remaining_qty = flt(frm.doc.approved_qty) - flt(frm.doc.total_import_qty);
  frm.set_value("remaining_qty", remaining_qty);
}`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Trigger Calculation on Relevant Fields",
            explanation: "Make sure the subtraction logic runs whenever either the 'approved_qty' or 'total_import_qty' fields are modified.",
            code: `frappe.ui.form.on("Advance Authorisation License", "total_import_qty", function(frm) {
  calculate_remaining_qty(frm);
});`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Remaining quantity does not update when fields change.",
            solution: "Ensure that the event listeners are correctly bound to the exact field names and the script is included in the relevant form’s client script files."
          },
          {
            problem: "Calculation results in NaN or incorrect values.",
            solution: "Verify that flt() is used to convert values to numbers and that the form fields contain valid numeric input."
          },
          {
            problem: "Script causes slow form performance.",
            solution: "Keep the calculation function efficient and avoid heavy processing or unnecessary DOM operations in event handlers."
          }
        ]}
      />
    </main>
  );
}
