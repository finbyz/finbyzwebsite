import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const TriggerOnRowDeletionPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Trigger a Client Script on Child Table Row Deletion in Frappe?"
        description="Learn how to execute a Frappe Client Script when a user adds or removes a row from a Child Table using the 'fieldname_add' and 'fieldname_remove' triggers."
        snippetName="Trigger on Row deletion"
        language="Javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe application development, a common requirement is to dynamically respond to user actions within child tables (also known as Table fields). This could involve recalculating totals, validating data, or triggering other logic when a row is added, moved, or deleted.",
          "Frappe's client-side API provides a powerful and specific set of triggers for these events. By attaching an event handler to the Child DocType, you can precisely control the form's behavior, ensuring data integrity and a responsive user experience."
        ]}
      />
      <CodeBlock
        code={`// Assuming your parent DocType is 'Item' and has a Table Field 'color' linked to the 'Item Color' DocType.
// The client script MUST be for the CHILD DocType: 'Item Color'.

frappe.ui.form.on('Item Color', {
    // This trigger fires AFTER a row is removed.
    color_remove: function(frm) {
        // 'frm' is the parent form object (Item form).
        // You can access the remaining rows via frm.doc.color
        console.log('A row was removed. Remaining rows:', frm.doc.color);
        frappe.msgprint('A color row was removed.');
        // Your custom logic, like recalculating totals, can go here.
    },
    // This trigger fires AFTER a new row is added.
    color_add: function(frm, cdt, cdn) {
        // 'cdt' is the child doctype name ('Item Color')
        // 'cdn' is the child doc name (the unique ID of the new row)
        console.log('A new row was added:', cdn);
        frappe.msgprint('New color row added!');
        // You can get the new row's data via locals
        let new_row = locals[cdt][cdn];
        console.log('New row data:', new_row);
    }
});`}
        language="javascript"
        referenceLink="https://frappe.io/docs/user/en/guides/app-development/trigger-event-on-deletion-of-grid-row"
        referenceLinkText="Frappe Docs: Trigger Event on Deletion of Grid Row"
        showLineNumbers={true}
      />
      <CodeOverview
        whatItDoes="This script attaches event handlers to a Child Table within a Frappe form. It allows developers to execute custom Javascript code precisely when a row is added or removed by the user."
        whenToUse="Use this pattern when you need to perform actions in response to changes in a child table. Common use cases include recalculating totals in the parent DocType, validating entries, or triggering API calls based on the child table's contents."
        prerequisites={[
          "A Parent DocType with a Table field (Child Table).",
          "Basic knowledge of Frappe Client Scripting."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on Event Handler",
            description: "The primary function for attaching client-side event listeners in Frappe. It targets a specific DocType and an event name. For child tables, the event is scoped to the Child DocType's name.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frappeuiformon"
          },
          {
            title: "Child Table Triggers (fieldname_add / fieldname_remove)",
            description: "These are special triggers fired on the Child DocType's form event handler. 'fieldname' must be replaced with the actual fieldname of the Table field in the Parent DocType. These events give you access to the parent form object ('frm') at the moment of the action.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/trigger-event-on-deletion-of-grid-row"
          },
          {
            title: "The Form Object ('frm')",
            description: "Within the child table trigger, the 'frm' object is the controller for the PARENT form view. It provides access to the parent document's data (frm.doc), metadata, and methods to interact with the UI, like frm.refresh_field() or frm.set_value().",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#form-api"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Your DocTypes and Fieldnames",
            explanation: "First, identify your Parent DocType, Child DocType, and the fieldname of the child table in the Parent DocType. For our example, Parent is 'Sales Invoice', Child is 'Sales Invoice Item', and the table fieldname is 'items'.",
            code: `// Parent DocType: Sales Invoice\n// Child DocType: Sales Invoice Item\n// Table Fieldname in Sales Invoice: 'items'`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create a New Client Script for the Child DocType",
            explanation: "Navigate to 'Client Script' in your Frappe desk and create a new script. Set 'Select DocType' to the *Child DocType*, which is 'Sales Invoice Item' in this case. This is a crucial step; the event handler must be attached to the Child DocType.",
            code: `// In Frappe Desk:\n// 1. Go to Client Script List\n// 2. Click 'New'\n// 3. Select DocType: 'Sales Invoice Item'`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Implement the 'items_remove' Trigger",
            explanation: "In the script, use 'frappe.ui.form.on' for the 'Sales Invoice Item' DocType. The event name will be 'items_remove', where 'items' is the fieldname. Inside the function, you can write your logic. The 'frm' object here refers to the parent form ('Sales Invoice').",
            code: `frappe.ui.form.on('Sales Invoice Item', {\n    items_remove: function(frm) {\n        console.log('An item was removed!');\n        // The 'frm' object is the parent form (Sales Invoice)\n        // Example: Recalculate total\n        let total = 0;\n        (frm.doc.items || []).forEach(item => {\n            total += item.amount;\n        });\n        frm.set_value('grand_total', total);\n        frm.refresh_field('grand_total');\n    }\n});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Implement the 'before_items_remove' Trigger (Optional)",
            explanation: "If you need to access the data of the row *before* it gets deleted or want to prevent deletion, use the 'before_fieldname_remove' trigger. This trigger receives 'cdt' and 'cdn' arguments.",
            code: `frappe.ui.form.on('Sales Invoice Item', {\n    before_items_remove: function(frm, cdt, cdn) {\n        let row = frappe.get_doc(cdt, cdn);\n        if (row.is_billed) {\n            frappe.throw('Cannot remove an item that has already been billed.');\n        }\n    }\n});`,
            language: "javascript"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "My script is not firing when I delete a row.",
            solution: "Ensure the Client Script is attached to the *Child DocType*, not the Parent. Also, double-check that the trigger name exactly matches the pattern 'fieldname_remove', where 'fieldname' is the name of the Table field in the Parent DocType."
          },
          {
            problem: "How do I get the data of the specific row that was just removed?",
            solution: "The 'fieldname_remove' trigger fires *after* the row is deleted from the form's data. To access the row's data, use the 'before_fieldname_remove' trigger. It provides 'cdt' (Child DocType Name) and 'cdn' (Child Doc Name) arguments, allowing you to get the row's data with 'frappe.get_doc(cdt, cdn)' before it's deleted."
          },
          {
            problem: "I'm getting an 'undefined' error when trying to access 'frm.doc.items'.",
            solution: "This can happen if the last row is deleted. The 'frm.doc.items' array might become null or undefined. Always check for its existence before trying to iterate over it, for example: '(frm.doc.items || []).forEach(...)'."
          }
        ]}
      />
    </main>
  );
};

export default TriggerOnRowDeletionPage;
