import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function FieldVisibilityPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Set Dynamic Field Visibility in Frappe DocTypes"
        description="Learn to control field visibility in Frappe DocTypes using `eval:` conditions. This guide covers common scenarios like checking field values, comparing numbers, and using `in_list`."
        snippetName="Field Visibility Evaluation"
        language="javascript"
        category="Frappe DocType Customization"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In the Frappe Framework, creating dynamic and user-friendly forms is crucial for a good user experience. One of the most powerful declarative features is the ability to conditionally show or hide fields based on the state of other data in the form. This is achieved using JavaScript-like expressions in the 'Visible On' property of a DocType field.",
          "This snippet collection showcases various conditions you can use to control field visibility without writing a single line of a Client Script. These expressions are evaluated in real-time by the Frappe framework, making your forms responsive and intuitive."
        ]}
      />
      <CodeBlock
        language="javascript"
        code={`// Show a field only if 'myfield' is not blank (has any value)
eval:doc.myfield

// Show a field only if 'myfield' has a specific value
eval:doc.myfield=='My Value'

// Show a field based on a numerical comparison
eval:doc.age > 18

// Show a field if either of two Checkbox fields are ticked
eval:doc.if_crm=='Yes' || doc.if_erp=='Yes'

// Show a field if a Select field's value is one of several options
eval:in_list(["Option A", "Option B"], doc.field2)

eval:in_list(["Receive", "Pay"], doc.payment_type) && doc.party_type

// A more complex real-world example from Purchase Order DocType
// Shows a button to get items from Material Requests under specific conditions
eval:doc.supplier && doc.docstatus===0 && (!(doc.items && doc.items.length) || (doc.items.length==1 && !doc.items[0].item_code))

// Another example using in_list for sales segmentation
eval:in_list(["IT Outsourcing- Full-time or Part-time", "IT Outsourcing-Enterprise Package"], doc.quotation_segment)`}
      />
      <CodeOverview
        whatItDoes="These snippets provide a set of logical expressions to dynamically control the visibility of a field within a Frappe DocType form. The conditions are evaluated against the current document's data to decide whether a field should be shown or hidden."
        whenToUse="Use these expressions in the 'Visible On' property of any field within a DocType definition. This is the preferred method for simple, declarative visibility rules that don't require complex logic, avoiding the need for a custom Client Script."
        prerequisites={["Administrator or System Manager role with access to DocType customization.", "A basic understanding of the fields and data types within your target DocType."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "The 'doc' Object",
            description: "In Frappe forms, `doc` is a client-side JavaScript object that holds all the data for the current record being viewed or edited. You can access any field's value using dot notation, like `doc.field_name`.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/docfield#depends-on"
          },
          {
            title: "'eval:' Prefix",
            description: "The `eval:` prefix instructs the Frappe framework to evaluate the following string as a JavaScript expression. This allows you to write dynamic conditions directly in the DocType field properties.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/docfield#visible-on"
          },
          {
            title: "in_list() Function",
            description: "`in_list()` is a built-in Frappe utility function available in these expressions. It checks if a given value exists within an array. The syntax is `in_list(array_of_values, value_to_check)`.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/utils#frappein_list"
          },
          {
            title: "DocType Field Properties",
            description: "'Visible On' is a property found in the 'Display' section of a field's configuration within a DocType. This is where you insert the `eval:` expressions to control its visibility.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/docfield"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Navigate to the DocType List",
            explanation: "From the Awesome Bar, search for 'DocType List' and open it. Find the DocType you wish to modify, for example, 'Sales Order'.",
            code: null,
            language: null
          },
          {
            stepNumber: 2,
            title: "Select the Field to Modify",
            explanation: "In the DocType's field list, find the field you want to make conditionally visible. For instance, a custom field named 'delivery_instructions'. Click to expand its properties.",
            code: null,
            language: null
          },
          {
            stepNumber: 3,
            title: "Locate the 'Visible On' Property",
            explanation: "Scroll down to the 'Display' section within the field's settings. You will find a textbox labeled 'Visible On'.",
            code: null,
            language: null
          },
          {
            stepNumber: 4,
            title: "Enter the Visibility Condition",
            explanation: "Enter your condition, prefixed with `eval:`. Let's say we only want to show 'delivery_instructions' if the 'order_type' is 'Sales'.",
            code: "eval:doc.order_type=='Sales'",
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Save and Test",
            explanation: "Click the 'Save' button at the top right of the DocType page. Now, open or create a new Sales Order record. The 'delivery_instructions' field will only appear when you set the 'Order Type' to 'Sales'.",
            code: null,
            language: null
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The field is not appearing or disappearing as expected.",
            solution: "Double-check the fieldname in your expression (e.g., `doc.my_field_name`). Fieldnames must be exact and are case-sensitive. Open the browser's developer console (F12) to check for any JavaScript errors that might be preventing the script from running."
          },
          {
            problem: "My condition with multiple checks (`&&` or `||`) is not working correctly.",
            solution: "When mixing AND (`&&`) and OR (`||`) operators, always use parentheses `()` to group your logic and ensure the correct order of operations. For example: `eval:(doc.status=='Open' && doc.total > 100) || doc.is_priority==1`."
          },
          {
            problem: "The condition does not work on page load, only after a value changes.",
            solution: "This can happen if the dependent field's value is set by a script after the form renders. Most of the time, Frappe handles this automatically. If it persists, a simple Client Script using `frm.set_df_property` on the `refresh` trigger might be a more robust solution for complex scenarios."
          }
        ]}
      />
    </main>
  );
}
