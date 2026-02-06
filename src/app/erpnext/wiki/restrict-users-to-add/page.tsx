import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetIntroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const Page = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Restrict Users from Adding or Deleting Rows in a Frappe Child Table?"
        description="Learn how to programmatically disable the 'Add Row' and 'Delete' buttons for a child table in Frappe/ERPNext using the cur_frm.toggle_enable client script method."
        snippetName="Restrict users to Add/Delete Rows"
        language="Javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetIntroduction
        paragraphs={[
          "In Frappe and ERPNext, child tables are essential for handling one-to-many relationships, such as items in a sales order. However, there are business scenarios where you need to prevent users from adding or removing rows while still allowing them to edit existing data. This could be due to form status, user permissions, or other business logic.",
          "This code snippet provides a simple and effective way to achieve this using a single line of client-side code, enhancing data integrity and user experience by dynamically controlling the UI."
        ]}
      />
      <CodeBlock
        code={`cur_frm.toggle_enable('childtable_field', false);`}
        language="javascript"
        referenceLink="https://discuss.erpnext.com/t/restrict-user-to-add-and-delete-rows-in-a-table-solved/17566"
        referenceLinkText="View original ERPNext forum discussion"
      />
      <CodeOverview
        whatItDoes="This code snippet disables the 'Add Row' and 'Delete' buttons for a specified child table field, effectively preventing users from modifying the table's structure while still allowing them to edit data within existing rows."
        whenToUse="Use this script in a Client Script that triggers on form events like 'onload', 'refresh', or when a specific field value changes. It's ideal for scenarios where child table entries should be static or controlled by another process."
        prerequisites={[
          "Basic understanding of Frappe Client Scripts.",
          "A DocType with a Child Table field."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "cur_frm Object",
            description: "The 'cur_frm' (current form) is a global object in Frappe's client-side scripting environment. It provides access to the current form's data (DocType fields), metadata, and a rich API for manipulating the form's behavior and UI.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#cur_frm"
          },
          {
            title: "toggle_enable Method",
            description: "The 'toggle_enable' method is part of the 'cur_frm' API. It is used to dynamically enable or disable a field on the form. When applied to a child table field, it specifically controls the enabled state of the 'Add Row' and 'Delete' buttons.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#frmtoggle_enable"
          },
          {
            title: "Child Table (Table Field)",
            description: "In Frappe, a Child Table is a field type that allows you to store a list of records (from another DocType) within a parent document. Each row in the table is a separate document, linked to the parent.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/field-types#table-multiselect"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Your DocType and Child Table Fieldname",
            explanation: "First, open the DocType you want to customize. In the form builder, find your child table and note its 'Fieldname'. This is the identifier you'll use in the script.",
            code: "// Example: If your child table field is named 'items',\n// the fieldname is 'items'.",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create a New Client Script",
            explanation: "Navigate to 'Client Script' from the Awesome Bar. Click 'New' to create a new script. Select the DocType you identified in the previous step.",
            code: "// In the Client Script form:\n// Select DocType: 'Your DocType Name'",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Add the Code to a Form Event",
            explanation: "In the script editor, place the code within a form event function. The 'refresh' event is usually the best choice to ensure the restriction is applied as soon as the form loads or is refreshed.",
            code: `frappe.ui.form.on('Your DocType Name', {\n    refresh: function(frm) {\n        // Replace 'childtable_field' with your actual fieldname\n        frm.toggle_enable('childtable_field', false);\n    }\n});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Save and Test",
            explanation: "Save the Client Script. Clear your browser cache (Ctrl+Shift+R) and open a document of your target DocType. The 'Add Row' and 'Delete' buttons for the specified child table should now be disabled.",
            code: "// No code for this step. Verify the UI change in the DocType form.",
            language: "javascript"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The script doesn't work; the buttons are still enabled.",
            solution: "1. Double-check that the 'childtable_field' in your script exactly matches the fieldname in the DocType. 2. Ensure the Client Script is enabled and applied to the correct DocType. 3. Clear your browser's cache (Ctrl+Shift+R) to load the latest script."
          },
          {
            problem: "I need to disable the buttons conditionally based on another field's value.",
            solution: "Place the 'toggle_enable' call inside a conditional (if/else) block that checks the value of the other field. Trigger this logic on the other field's change event as well as on 'refresh'. Example: if (frm.doc.status === 'Submitted') { frm.toggle_enable('items', false); } else { frm.toggle_enable('items', true); }"
          }
        ]}
      />
    </main>
  );
};

export default Page;
