import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const Page = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Fetch User Data in Frappe & ERPNext Jinja Templates"
        description="Learn how to fetch current session user details, modified by user, and other employee data using frappe.db.get_value and frappe.user in Frappe Jinja templates."
        snippetName="Fetch Session User and Modified"
        language="Jinja"
        category="Frappe Jinja Templates"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In the Frappe framework, Jinja templating is a powerful feature used for creating dynamic content in Print Formats, Custom HTML fields, and Web Pages. A common requirement is to display information related to the current user or the users who have interacted with a document. This collection of snippets provides a practical guide to fetching various user details directly within your Jinja templates.",
          "These examples leverage built-in Frappe API methods that are safely exposed to the Jinja rendering context, allowing you to perform simple database queries and access session information without writing complex server scripts."
        ]}
      />
      <CodeBlock 
        code={`// Get the ID of the current session user
{{ frappe.user }}

// Get the full name of the user who last modified the document
{{ frappe.get_fullname(doc.modified_by) or "" }}

// Fetch the designation of the modifying user from the Employee DocType
{{ frappe.db.get_value("Employee", { "user_id": doc.modified_by }, "designation") or "" }}

// Fetch a user's full name by their ID (assuming 'manager' is a variable)
{{ frappe.db.get_value("User",{"name":manager},"full_name") }}

// Fetch the employee_name of the current session user
{{ frappe.db.get_value("Employee",{"user_id":frappe.session.user},"employee_name") }}
`}
        language="jinja"
      />
      <CodeOverview 
        whatItDoes="This collection of Jinja snippets demonstrates various methods to retrieve user-related information within a Frappe Framework template. It covers fetching the current session user, the user who last modified a document, and related details like full name or designation from linked DocTypes."
        whenToUse="Use these snippets in any Frappe context that supports Jinja templating. This is most common in custom Print Formats, custom HTML fields on a Form, or in web pages to display user-specific information dynamically without needing a separate server script."
      />
      <KeyConcepts 
        concepts={[
          {
            title: "Session User Variables",
            description: "`frappe.user` and `frappe.session.user` are context variables available in Jinja templates that provide the User ID (typically the email address) of the currently logged-in user.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/jinja#frappe-session"
          },
          {
            title: "The `doc` Object",
            description: "In the context of a Print Format or Form, the `doc` object represents the current document being processed. You can access its fields, like `doc.modified_by` or `doc.owner`, to get data directly from the document.",
            relatedLink: "https://frappeframework.com/docs/user/en/print-formats"
          },
          {
            title: "frappe.db.get_value",
            description: "A whitelisted Frappe API method that allows you to safely fetch a single value from the database directly within a Jinja template. It requires the DocType, filters, and the field name you want to retrieve.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappedbget_value"
          }
        ]}
      />
      <StepByStepTutorial 
        steps={[
          {
            stepNumber: 1,
            title: "Access Your Print Format",
            explanation: "Navigate to the Print Format list and select the one you wish to customize, for example, for the 'Sales Invoice' DocType. Ensure you are using a Custom Print Format by checking the 'Custom Format' checkbox and selecting 'Jinja' as the templating engine.",
            code: `// Navigate via the Awesomebar: 'Print Format List'`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Insert Jinja Code to Display Creator's Name",
            explanation: "In the 'HTML' field of your Print Format, find a suitable location to display the full name of the user who created the document. We'll use `frappe.get_fullname` and the `doc.owner` field.",
            code: `<div>\n    <strong>Created By:</strong>\n    {{ frappe.get_fullname(doc.owner) }}\n</div>`,
            language: "html"
          },
          {
            stepNumber: 3,
            title: "Fetch a Related Value from Another DocType",
            explanation: "Now, let's fetch the designation of the user who last modified the document. We'll query the 'Employee' DocType using `frappe.db.get_value`, filtering by the `user_id`.",
            code: `<div>\n    <strong>Last Modified By (Designation):</strong>\n    {{ frappe.db.get_value("Employee", { "user_id": doc.modified_by }, "designation") or "N/A" }}\n</div>`,
            language: "html"
          },
          {
            stepNumber: 4,
            title: "Save and Preview the Changes",
            explanation: "Save the Print Format. Now, open a document of the corresponding type (e.g., a Sales Invoice) and go to Print > Select your custom format. The user's name and designation should now be visible.",
            code: "// No code for this step. Preview the print format.",
            language: "bash"
          }
        ]}
      />
      <Troubleshooting 
        items={[
          {
            problem: "The Jinja snippet doesn't display any value, and no error is shown.",
            solution: "This often happens if `frappe.db.get_value` finds no matching record. Always use an `or \"\"` or `or \"Default Value\"` fallback to handle cases where data might not exist. Also, verify that the user specified in the filter (e.g., `doc.modified_by`) has a corresponding record in the target DocType (e.g., an 'Employee' record)."
          },
          {
            problem: "An error about 'PermissionError' or a non-whitelisted method appears.",
            solution: "Jinja templates in Frappe run in a restricted environment. You can only call methods that are explicitly whitelisted. Ensure you are using allowed methods like `frappe.db.get_value` and `frappe.get_fullname`. Attempting to use methods like `frappe.db.get_list` or any method that modifies data will result in a security error."
          }
        ]}
      />
    </main>
  );
};

export default Page;
