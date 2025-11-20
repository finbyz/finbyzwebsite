import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `// Assuming that your parent DocType is named Item and has a Child Table linked to the Item Color DocType with declaration name "color". To "catch" the delete event:
frappe.ui.form.on('Item Color', {
    color_remove: function(frm) {
        // Your code here
        // If you console.log(frm.doc.color) you will get the remaining color list
    }
});

// The same process is used to trigger the add event (when user clicks on add row button):
frappe.ui.form.on('Item Color', {
    color_remove: function(frm) {
        // Your code here
        // If you console.log(frm.doc.color) you will get the remaining color list
    },
    color_add: function(frm) {
        // Your code here
    }
});

// Notice that the handling must be done on the Child DocType Table form.ui.on and not on the Parent DocType, so a minimal full example is:
frappe.ui.form.on('Item Color', {
  color_remove: function(frm) {
     // Deleting is triggered here
  }
});
`;

export default function Page() {
  return (
    <>
      <CodeSnippetHero
        title="How to trigger an event on row deletion in a Frappe Child Table?"
        description="Detect and handle deletion of rows in a Frappe Child Table by using client-side scripting with frappe.ui.form.on and event handlers like color_remove and color_add."
        snippetName="Trigger on Row deletion"
        language="Frappe Client Script"
        category="Frappe Form Customization"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In Frappe client scripting, detecting when a user deletes a row from a Child Table is not always obvious. You need a way to trigger
          custom logic immediately when a row is removed from a child table.
        </p>
        <p>
          <strong>Solution:</strong> This snippet uses the Frappe client API "frappe.ui.form.on" on the child DocType of the table (not on the parent) and listens
          for the "fieldname_remove" event, where fieldname is the declaration name of the table field (e.g., "color"). This event fires
          right after a row is deleted, providing access to the current remaining rows through <code>frm.doc.color</code>.
        </p>
        <p>
          Other related handlers include add, move, before_remove events for the same table field, which can similarly be used to customize behavior on row
          addition or reordering.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        referenceLink="https://frappe.io/docs/user/en/guides/app-development/trigger-event-on-deletion-of-grid-row"
        referenceLinkText="Frappe docs: Trigger Event on Deletion of Grid Row"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={`This snippet listens for the deletion of rows in a Child Table by using the event "color_remove" on the Child DocType. When triggered, you can run custom code and access the updated child table rows via frm.doc.color.`}
        whenToUse={`Use this approach when you want to trigger client side actions (validation, recalculation, notifications) immediately after a user deletes rows from a Child Table in Frappe forms.`}
        prerequisites={[
          "Understanding of Frappe DocType and Child Table structure",
          "Basic knowledge of Frappe client scripting with frappe.ui.form.on",
          "Declaration name of the child table field in the parent DocType (e.g., color)"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "Registers client-side event handlers for specific DocType forms in Frappe.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          },
          {
            title: "Child Table (Child DocType)",
            description: "A tabular field within a parent DocType which stores multiple entries of another DocType.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/child-tables"
          },
          {
            title: "Fieldname events: color_remove and color_add",
            description: "Events triggered when rows are removed from or added to the Child Table named 'color'.",
            relatedLink: "https://frappe.io/docs/user/en/guides/app-development/trigger-event-on-deletion-of-grid-row"
          },
          {
            title: "frm.doc",
            description: "The current form document object which contains all fields values including child tables.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#frm-doc"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the child table fieldname",
            explanation: "Determine the declaration name of the child table field from the parent DocType (in this case, it's 'color'). This field name is used to attach event handlers.",
            code: "// Example child table field declaration: 'color'",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Add a 'remove' event handler on the child DocType",
            explanation: "Use frappe.ui.form.on on the child DocType name (e.g., 'Item Color') and listen for the '<fieldname>_remove' event to trigger logic when a row is deleted.",
            code: `frappe.ui.form.on('Item Color', {
    color_remove: function(frm) {
        // Deletion triggered here
    }
});`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Access remaining rows after deletion",
            explanation: "Inside the remove event handler, use frm.doc.color to access the updated list of rows remaining in the child table after deletion.",
            code: `color_remove: function(frm) {
    console.log(frm.doc.color); // Remaining rows
}`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Optionally handle row additions",
            explanation: "Similarly, attach handlers to 'color_add' event to detect when rows are added.",
            code: `frappe.ui.form.on('Item Color', {
    color_add: function(frm) {
        // Row added
    }
});`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Event does not trigger when deleting a row.",
            solution: "Ensure you're attaching the event handler to the child DocType (e.g., 'Item Color') and using the correct fieldname (e.g., 'color_remove')."
          },
          {
            problem: "frm.doc.color is undefined after deletion.",
            solution: "Confirm the fieldname matches the child table field in the parent DocType. Also check that child rows have been correctly saved in the form document."
          },
          {
            problem: "I want to trigger before a row is removed.",
            solution: "Use the 'before_<fieldname>_remove' event handler to intercept before deletion actually happens."
          }
        ]}
      />
    </>
  );
}
