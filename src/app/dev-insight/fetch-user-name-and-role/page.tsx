"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function FetchUserNameAndRole() {
  const snippetName = "Fetch User Name and Role";
  const language = "Python";
  const category = "Frappe Data Retrieval";

  // Original snippet reformatted with proper Python syntax for clarity
  const codeSnippet = `# Fetch full name of the session user
frappe.db.get_value("User", {"name": frappe.session.user}, "full_name")

# Fetch roles of the session user
frappe.get_roles(frappe.session.user)

# Fetch full name of the user with variable 'manager'
frappe.db.get_value("User", {"name": manager}, "full_name")

# Fetch employee name linked to session user
frappe.db.get_value("Employee", {"user": frappe.session.user}, "name")

# Fetch designation of employee based on user_id
frappe.db.get_value("Employee", {"user_id": doc.modified_by}, "designation")
`;

  return (
    <>
      <CodeSnippetHero
        title="How to fetch user full name and roles using Frappe Framework?"
        description="Retrieve user details like full name, associated roles, and linked employee information programmatically using Frappe's database API and session context."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg leading-relaxed">
          This example demonstrates how to programmatically fetch user-related data in the Frappe Framework using Python API calls. When building Frappe-based applications, accessing details such as
          the session user's full name, their roles, or employee associations is a common requirement. Leveraging <code>frappe.db.get_value</code> and <code>frappe.get_roles</code>, developers
          can obtain precise information efficiently. This snippet showcases multiple typical queries used in Frappe to retrieve data from the <code>User</code> and <code>Employee</code> DocTypes,
          helping you understand how to work with session context and variable user references.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Fetches user full names, role lists, and employee-related fields using Frappe's ORM API. Uses session user identity or passed variables to query DocType data."
        whenToUse="When you need to programmatically access user details or roles within a logged-in Frappe session or from other user references for permissions, display, or business logic."
        prerequisites={[
          "Basic understanding of Frappe Framework and its DocType data model.",
          "Access to server-side scripting in Frappe apps.",
          "Familiarity with Python and Frappe's API conventions."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.db.get_value",
            description: "Primary method to fetch a single field value from a specified DocType record based on filters.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/database#frappe.db.get_value"
          },
          {
            title: "frappe.get_roles",
            description: "Fetches the list of roles assigned to a given user, useful for permission and workflow decisions.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/user#frappe.get_roles"
          },
          {
            title: "Session user context",
            description: "Represents the currently logged-in user in Frappe; useful for retrieving personalized data and enforcing access.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/session"
          },
          {
            title: "DocType",
            description: "Frappe's fundamental data structure representing database tables that hold business data.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/doctype"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Get Full Name of Session User",
            explanation: "Use frappe.db.get_value to fetch the 'full_name' field from the 'User' DocType where the name matches the currently logged-in session user.",
            code: "frappe.db.get_value(\"User\", {\"name\": frappe.session.user}, \"full_name\")",
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Retrieve Roles of Session User",
            explanation: "Call frappe.get_roles with the session user to get an array of roles assigned to the current user.",
            code: "frappe.get_roles(frappe.session.user)",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Fetch Full Name for Any User",
            explanation: "You can also fetch details for any username stored in a variable (e.g., 'manager') using frappe.db.get_value to retrieve the full_name.",
            code: "frappe.db.get_value(\"User\", {\"name\": manager}, \"full_name\")",
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Fetch Employee Name Linked to Session User",
            explanation: "Query the 'Employee' DocType for the name of the employee record associated with the current session user.",
            code: "frappe.db.get_value(\"Employee\", {\"user\": frappe.session.user}, \"name\")",
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Get Employee Designation by User ID",
            explanation: "Fetch the 'designation' field from 'Employee' DocType for the employee linked to a specific user_id, here accessed via doc.modified_by.",
            code: "frappe.db.get_value(\"Employee\", { \"user_id\": doc.modified_by }, \"designation\")",
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "frappe.db.get_value returns None or does not find the field",
            solution: "Ensure the field name exists in the DocType and filters match an existing record. Also verify correct spelling and case sensitivity."
          },
          {
            problem: "frappe.get_roles returns an empty list",
            solution: "Check if the user has roles assigned in the system. If the user is a guest or inactive, roles may not be returned."
          },
          {
            problem: "Accessing frappe.session.user raises error",
            solution: "Make sure your code runs in a context where session is initialized, such as request handlers or scheduled jobs with proper context."
          }
        ]}
      />
    </>
  );
}
