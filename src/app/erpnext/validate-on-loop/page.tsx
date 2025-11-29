import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const ValidateOnLoopPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Validate All Rows in a Child Table in Frappe Framework?"
        description="Learn how to implement custom validation logic for child table rows in Frappe ERPNext using a Client Script. This snippet demonstrates iterating through items with $.each."
        snippetName="Validate on Loop"
        language="javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
            "In Frappe and ERPNext, ensuring data integrity before saving a document is crucial. The `validate` trigger in a Client Script provides the perfect hook to perform complex checks, especially on child table data.",
            "This snippet showcases two common scenarios: first, ensuring all items in a Quotation's child table have a consistent quantity for specific Item Groups, and second, verifying that all items in a Material Request are fully billed. Both examples leverage a loop to check each row individually."
        ]}
      />
      <CodeBlock 
        code={`// Validate on Loop
frappe.ui.form.on("Quotation", "validate", function(frm) {
	if (frm.doc.items[0].item_group == "Call Center Outsourcing" || frm.doc.items[0].item_group == "IT Outsourcing") { 		
		$.each(frm.doc.items || [], function(i, d) {
			if (d.qty != frm.doc.items[0].qty) {
				msgprint("Quantity for each Item must be same for Item group Call Center Outsourcing & IT Outsourcing");
				validated = false;
			}
		});
	}
});

frappe.ui.form.on("Material Request", "validate", function(frm) {
    $.each(frm.doc.items || [], function(i, d) {
		if (d.billing_status != "Fully Billed") {
			msgprint("Sales Order Billing Status should be Fully Billed for generating Material Request");
			validated = false;
        }
    });
});`}
        language="javascript"
        showLineNumbers={true}
      />
      <CodeOverview 
        whatItDoes="This Client Script iterates through all rows of a child table (named 'items') upon form validation to enforce custom business logic across multiple rows."
        whenToUse="Use this script during the 'validate' lifecycle event of a DocType. This event fires just before the document is saved, making it the ideal place to prevent submissions with invalid data."
        prerequisites={["Basic understanding of Frappe DocTypes and Client Scripting.", "A DocType with a child table (e.g., Quotation with 'items', Material Request with 'items')."]}
      />
      <KeyConcepts 
        concepts={[
            { title: "frappe.ui.form.on()", description: "A fundamental Frappe API for creating client-side event listeners. It hooks into form lifecycle events like 'onload', 'refresh', and 'validate' to trigger custom JavaScript code.", relatedLink: "https://frappeframework.com/docs/v13/user/en/guides/app-development/client-scripting#form-events" },
            { title: "The 'validate' Event", description: "This client-side event is triggered when a user saves or submits a document. It's the last point of intervention before data is sent to the server, making it perfect for validation checks that can prevent the save action.", relatedLink: "https://frappeframework.com/docs/v13/user/en/guides/app-development/client-scripting#validate" },
            { title: "frm.doc Object", description: "The 'frm.doc' object represents the current document's data in the form. You can access any field, including child tables (which are arrays), using this object (e.g., frm.doc.items).", relatedLink: "https://frappeframework.com/docs/v13/user/en/guides/app-development/client-scripting#form-script-api" },
            { title: "Child Table Iteration", description: "Child tables are stored as arrays within the 'frm.doc' object. The snippet uses jQuery's '$.each()' to loop through each row ('d') and its index ('i') in the 'frm.doc.items' array to perform checks.", relatedLink: "https://api.jquery.com/jquery.each/" },
            { title: "validated = false;", description: "In a 'validate' event handler, setting the global 'validated' variable to 'false' stops the form submission process. This is the standard mechanism to halt a save/submit action if validation fails.", relatedLink: "https://frappeframework.com/docs/v13/user/en/guides/app-development/client-scripting#validate" }
        ]}
      />
      <StepByStepTutorial 
        steps={[
            { stepNumber: 1, title: "Create or Navigate to your Client Script", explanation: "From the Awesome Bar, search for 'Client Script' and click 'New'. This will open a new Client Script form.", code: "// No code for this step. Navigate in the UI.", language: "bash" },
            { stepNumber: 2, title: "Select the Target DocType", explanation: "In the 'DocType' field of your new Client Script, select the DocType you want to apply this validation to, such as 'Quotation' or 'Material Request'.", code: "// Example: Set 'Applies To' to 'DocType' and 'DocType' to 'Quotation'.", language: "bash" },
            { stepNumber: 3, title: "Hook into the 'validate' Event", explanation: "Use the 'frappe.ui.form.on' method to specify that your code should run only when the 'validate' event occurs for the selected DocType.", code: `frappe.ui.form.on("Quotation", "validate", function(frm) {\n    // Your validation logic goes here\n});`, language: "javascript" },
            { stepNumber: 4, title: "Implement the Loop and Validation Logic", explanation: "Inside the function, use '$.each(frm.doc.items, function(i, d) { ... })' to iterate through each row of your child table. 'items' is the fieldname of the child table.", code: `$.each(frm.doc.items || [], function(i, d) {\n    // 'd' represents the current row object\n    if (d.qty != frm.doc.items[0].qty) { \n        // Condition failed\n    }\n});`, language: "javascript" },
            { stepNumber: 5, title: "Display an Error and Halt Submission", explanation: "If a row fails your condition, use 'msgprint()' to show an error to the user and, most importantly, set 'validated = false;' to prevent the document from being saved.", code: `if (d.qty != frm.doc.items[0].qty) {\n    msgprint("Quantity for each Item must be the same.");\n    validated = false;\n}`, language: "javascript" },
            { stepNumber: 6, title: "Save and Enable the Client Script", explanation: "Ensure the 'Enabled' checkbox is checked, then save your Client Script. Clear your browser cache (Ctrl+Shift+R) and test the validation by creating or editing a document of the target DocType.", code: "// No code for this step. Save and reload.", language: "bash" }
        ]}
      />
      <Troubleshooting 
        items={[
            { problem: "The validation script runs, but the form still saves even when the condition is met.", solution: "You most likely forgot to set 'validated = false;' inside your 'if' block. Without this line, Frappe's validation process will continue and allow the save action to proceed." },
            { problem: "The script throws an error like 'Cannot read properties of undefined (reading 'length')' when iterating.", solution: "This happens if the child table has no rows. Always check if the child table exists and has rows before looping. A safe way is to use 'frm.doc.items || []' in your '$.each' loop, which provides an empty array as a fallback if 'frm.doc.items' is null or undefined." },
            { problem: "My 'msgprint' shows, but I get a server-side validation error afterward.", solution: "This can happen if you have both client-side and server-side validations. The 'validated = false;' only stops the client-side process. If the data is still sent and fails server-side validation (e.g., in a Python script), you'll see that error. Ensure your client-side logic correctly prevents invalid data from ever reaching the server." }
        ]}
      />
    </main>
  );
};

export default ValidateOnLoopPage;
