import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CodeSnippetPage() {
  return (
    <main>
      <CodeSnippetHero
        title="What is the Complete Document Event Lifecycle in Frappe and ERPNext?"
        description="A comprehensive guide to the Frappe Framework's document event lifecycle, detailing the sequence of server-side and client-side hooks for Save, Submit, and Cancel actions."
        snippetName="Frappe Document Event Lifecycle"
        language="plaintext"
        category="Frappe Framework"
        accentColor="orange"
      />
      <CodeSnippetInstroduction
        paragraphs={[
          "Understanding the Frappe Document Lifecycle is crucial for any developer working with ERPNext or custom Frappe apps. The framework provides a rich set of 'hooks' or 'events' that allow you to inject custom logic at specific points in a document's journey—from its creation to submission, cancellation, and deletion. This guide provides a clear reference to the sequence of these events.",
          "By leveraging the correct hook, you can enforce complex validation rules, automate calculations, modify data before it's saved, or trigger integrations with external systems. This reference details the execution order for both server-side (Python) and client-side (JavaScript) events, ensuring your custom scripts run exactly when intended.",
        ]}
      />
      <CodeBlock
        fileName="Server-Side Event Sequence (New Document)"
        language="plaintext"
        showLineNumbers={false}
        code={`# If a Document is saved for the first time (is new):
  1. before_insert
  2. before_naming
  3. autoname
  4. before_validate
  5. validate
  6. before_save
  7. after_insert
  8. on_update
  9. on_change`}
      />
      <CodeBlock
        fileName="Server-Side Event Sequences (Existing Document)"
        language="plaintext"
        showLineNumbers={false}
        code={`# If action is "Save":
  1. before_validate
  2. validate
  3. before_save
  4. on_update
  5. on_change

# If action is "Submit":
  1. before_validate
  2. validate
  3. before_submit
  4. on_update
  5. on_submit
  6. on_change

# If action is "Cancel":
  1. before_cancel
  2. on_cancel
  3. on_update

# If action is "Update After Submit":
  1. before_update_after_submit
  2. on_update_after_submit
  3. on_change`}
      />
        <CodeBlock
        fileName="Client-Side Child Table Hooks"
        language="javascript"
        showLineNumbers={false}
        code={`// These triggers are defined in a Client Script for a DocType
// Replace 'items' with the fieldname of your Child Table

frappe.ui.form.on('Sales Order', {
    // On child row add
    items_add: function(frm, cdt, cdn) {
        console.log("Row added");
    },
    // On child row move
    items_move: function(frm, cdt, cdn) {
        console.log("Row moved");
    },
    // Before child row remove
    before_items_remove: function(frm, cdt, cdn) {
        console.log("Row about to be removed");
    },
    // On child row remove
    items_remove: function(frm, cdt, cdn) {
        console.log("Row removed");
    }
});`}
      />
      <CodeOverview
        whatItDoes="Provides a comprehensive reference list of the server-side and client-side event hooks in the Frappe Framework, detailing the exact sequence in which they are triggered during a document's lifecycle."
        whenToUse="Use this guide when developing Server Scripts or Client Scripts to ensure your custom logic executes at the correct stage. It's essential for adding validation, automation, data manipulation, and integrations."
        prerequisites={[
          "Basic understanding of Frappe DocTypes",
          "Familiarity with Server Scripts or a DocType's Python controller file",
          "Knowledge of Client Scripts for form-level interactions",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Document Lifecycle",
            description: "In Frappe, the Document Lifecycle refers to the sequence of states and events a document goes through, such as 'Draft', 'Submitted', and 'Cancelled'. Each transition triggers specific server-side and client-side hooks.",
            relatedLink: "https://frappeframework.com/docs/v14/en/model/documents#document-lifecycle",
          },
          {
            title: "Server Scripts & DocType Controllers",
            description: "Server-side hooks are typically implemented in the DocType's Python controller file (e.g., `my_doctype.py`) or through the 'Server Script' DocType in the UI. This is where you place logic that needs to run on the server.",
            relatedLink: "https://frappeframework.com/docs/v14/en/user-guide/automation/server-script",
          },
          {
            title: "Client Scripts",
            description: "Client-side hooks, like child table events, are defined in a Client Script. This JavaScript code runs in the user's browser and is used to control form behavior and user interactions.",
            relatedLink: "https://frappeframework.com/docs/v14/en/user-guide/automation/client-script",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create a Server Script",
            explanation: "Navigate to 'Server Script' in the Awesomebar and create a new script. Set 'DocType' to the document you want to target (e.g., 'Sales Order') and 'Script Type' to 'Before Save'.",
            code: "// No code needed for this step. Use the Frappe UI.",
            language: "plaintext",
          },
          {
            stepNumber: 2,
            title: "Hook into the 'validate' Event",
            explanation: "You can also hook into events directly in the DocType's Python controller. Here, we'll use the 'validate' method to check a condition before the document is saved.",
            code: `from frappe.model.document import Document
import frappe

class SalesOrder(Document):
    def validate(self):
        if self.total > 10000 and not self.notes:
            frappe.throw("Notes are required for orders over 10,000")`,
            language: "python",
          },
          {
            stepNumber: 3,
            title: "Test the Validation",
            explanation: "Create a new Sales Order, set the total amount to be greater than 10,000, and leave the 'Notes' field empty. When you try to save, the system will prevent the action and display the error message from your script.",
            code: "// Try saving the document in the UI to see the validation message.",
            language: "plaintext",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "My logic in `on_update` runs, but changes I make to `doc` are not saved.",
            solution: "The `on_update` hook runs *after* the document has been saved to the database. If you need to modify the document's values before they are written, you must use the `before_save` hook instead.",
          },
          {
            problem: "Which event should I use to set a default value on a new document?",
            solution: "For setting defaults server-side, `before_insert` is the ideal place to modify the document object (`doc`) before it is first written to the database. For client-side defaults, use the `onload` event in a Client Script.",
          },
          {
            problem: "A field change isn't triggering my server script immediately.",
            solution: "Server-side hooks like `on_change` only trigger after the entire document is saved. To react to field changes in real-time on the user interface, you must use a client-side script that listens to the `frm.events` for that specific field (e.g., `frappe.ui.form.on('My DocType', { my_field_name: function(frm) { ... } });`).",
          },
        ]}
      />
    </main>
  );
}
