import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const MakeFieldReadOnlyPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Make a Field Read-Only Dynamically in Frappe ERPNext"
        description="Learn to dynamically set field properties like read-only, required, or options in ERPNext and Frappe using Client Scripts with cur_frm.set_df_property."
        snippetName="Make Read only field"
        language="javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe and ERPNext, creating a dynamic and responsive user interface is key to building effective applications. One common requirement is to change a field's properties based on user input or document state, such as making a field read-only after a document is submitted or based on the value of another field. This can be easily achieved using Frappe's Client Script API.",
          "This guide explores the two primary methods for controlling field properties on the client-side: the standard `cur_frm.set_df_property` function and the more direct `frappe.meta.get_docfield` method. We'll cover how to make fields read-only, required, and even how to update options for select fields."
        ]}
      />
      <CodeBlock
        code={`// Method 1: Using cur_frm.set_df_property (Recommended)

// Make a field read-only
cur_frm.set_df_property("net_weight", "read_only", 1);

// Make a field required based on a condition
cur_frm.set_df_property("cheque_no", "reqd", doc.voucher_type == "Bank Entry");

// General Syntax: cur_frm.set_df_property(FIELDNAME, PROPERTY, VALUE);


// Method 2: Directly manipulating the docfield object

var df = frappe.meta.get_docfield("Sales Invoice", "customer_name", cur_frm.doc.name);
if (df) {
    df.read_only = 1;
    cur_frm.refresh_field("customer_name"); // UI refresh is needed
}

// Example: Dynamically setting options for a Select field in a child table
var child_df = frappe.meta.get_docfield("Employer Project Details", "company_name", cur_frm.doc.name);
if(child_df) {
    child_df.options = ["Tech M", "Wipro", "TCS"];
    cur_frm.refresh_field("employer_project_details"); // Refresh the whole child table field
}`}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This snippet demonstrates how to programmatically change a field's properties, such as making it read-only, required, or updating its options, directly from a Frappe Client Script."
        whenToUse="Use this in Client Script triggers like `onload`, `refresh`, or on a field's `onchange` event to create a responsive and context-aware user interface in any DocType form."
        prerequisites={["Basic understanding of Frappe DocTypes", "Familiarity with creating Client Scripts in Frappe."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "cur_frm",
            description: "A global object in Frappe Client Scripts that represents the current form being viewed. It provides access to the document's data (`cur_frm.doc`), metadata, and a rich API for form manipulations.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form_api#cur_frm"
          },
          {
            title: "cur_frm.set_df_property",
            description: "The standard API function to change a property of a DocField. It takes three arguments: the fieldname, the property to change (e.g., 'read_only', 'reqd', 'hidden', 'options'), and the new value. This method automatically handles UI refreshes.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form_api#frmset_df_property"
          },
          {
            title: "frappe.meta.get_docfield",
            description: "A lower-level function that retrieves the complete DocField object for a given field. This is useful for more complex manipulations but requires a manual UI refresh using `cur_frm.refresh_field()` after modification.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/frappe-meta#frappemetaget_docfield"
          },
          {
            title: "Client Script Events",
            description: "These are JavaScript triggers that execute code at specific points in the form lifecycle. Common events include `onload` (when the form loads), `refresh` (after data is saved/refreshed), and `field_name_onchange` (when a specific field's value changes).",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/desk/scripting/client-script"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the DocType and Fields",
            explanation: "First, determine which DocType you want to modify. For this example, we'll use the 'Sales Order' DocType. We want to make the 'delivery_date' field read-only if the 'status' is 'Delivered'.",
            code: `// DocType: Sales Order
// Trigger Field: status
// Target Field: delivery_date`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create a New Client Script",
            explanation: "Navigate to 'Client Script' from the Awesome Bar. Click 'Add Client Script', and select 'Sales Order' for the 'DocType'.",
            code: `// In ERPNext Desk:
// Go to > Client Script List > Add Client Script
// Select DocType: Sales Order`,
            language: "text"
          },
          {
            stepNumber: 3,
            title: "Write the Script Logic",
            explanation: "We'll use the `refresh` event handler. This code will run every time the form is loaded or refreshed. It checks the document's status and sets the 'read_only' property accordingly.",
            code: `frappe.ui.form.on('Sales Order', {
    refresh: function(frm) {
        // Set a variable for the condition to make it cleaner
        var is_delivered = frm.doc.status === 'Delivered';

        // Set the 'delivery_date' field's read_only property
        frm.set_df_property('delivery_date', 'read_only', is_delivered);
    }
});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Save and Test",
            explanation: "Save the Client Script and ensure it is enabled. Now, navigate to any 'Sales Order' document. If the status is 'Delivered', the 'Delivery Date' field will be non-editable. If you change the status to something else and save, the field will become editable again upon refresh.",
            code: `// 1. Save the Client Script.
// 2. Make sure the 'Enabled' checkbox is checked.
// 3. Go to a Sales Order form and reload the page.
// 4. Observe the 'delivery_date' field's state based on the 'status'.`,
            language: "text"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The field is not changing its property as expected.",
            solution: "Check the browser's developer console (F12) for any JavaScript errors. Double-check that the fieldname and DocType name are spelled correctly in your script. Also, ensure the Client Script is marked as 'Enabled'."
          },
          {
            problem: "`set_df_property` doesn't work for a specific row in a child table.",
            solution: "`cur_frm.set_df_property` targets the entire field definition. To change a field in a specific row, you need a different approach. You must iterate through the child table rows and use `frappe.model.set_df_property(cdt, cdn, fieldname, prop, value)` where 'cdt' is the child DocType and 'cdn' is the row name."
          },
          {
            problem: "Getting a 'Cannot set property of undefined' error.",
            solution: "This typically happens when using `frappe.meta.get_docfield` and the script runs before the form's metadata is fully loaded, or if the field/DocType name is incorrect. Prefer `cur_frm.set_df_property` as it's safer. If you must use `get_docfield`, ensure your code runs within a standard form event like `onload` or `refresh`."
          }
        ]}
      />
    </main>
  );
};

export default MakeFieldReadOnlyPage;
