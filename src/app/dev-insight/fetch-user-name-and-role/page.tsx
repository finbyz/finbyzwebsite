"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function FetchUserNameAndRole() {
  const snippetName = "Fetch User Name and Role";
  const language = "javascript";
  const category = "User Data Retrieval";
  const code = `//Session User
frappe.session.user
//Fetch Session User Role
frappe.user_role
//Print Session User Name
msgprint(frappe.session.user.name);
//Fetch Employee Name
frappe.db.get_value(\"Employee\", {"user": frappe.session.user}, \"name\")`;

  return (
    <>
      <CodeSnippetHero
        title="How to fetch the current user's name and role using Frappe JavaScript API?"
        description="This snippet demonstrates how to retrieve the logged-in session user's name and role using Frappe's client-side JavaScript API. It also shows how to fetch the related Employee record's name linked to the user."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="leading-relaxed text-gray-700">
          This code snippet provides a straightforward way to access session user information and roles
          directly from the client-side using the Frappe JavaScript APIs. It is useful for web applications
          built on the Frappe framework where you need to dynamically display or work with the logged-in user’s
          identity and their assigned permissions or roles. Additionally, it shows how to pull data from related
          doctype records, like fetching the Employee name associated with the current user. This helps
          developers quickly integrate user-related checks and personalized UI elements in their
          Frappe applications.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Retrieves the currently logged-in session user's username and role; Fetches the employee name related to that user from the database."
        whenToUse="Use when you need to identify the logged-in user, their role information, or fetch related employee data in client scripts."
        prerequisites={["Frappe application with user session established", "Employee doctype linked to User records"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.session.user",
            description: "Accesses the current logged-in user's basic session information.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/session"
          },
          {
            title: "frappe.user_role",
            description: "Provides the roles assigned to the user.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/user"
          },
          {
            title: "frappe.db.get_value",
            description: "Fetches a value from a DocType given filters, here used to get Employee name linked to user.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Access current session user",
            explanation: "Use frappe.session.user to get the logged-in user's basic session identifier.",
            code: "frappe.session.user",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Get user roles",
            explanation: "Retrieve the roles assigned to the logged-in user with frappe.user_role.",
            code: "frappe.user_role",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Display user's name",
            explanation: "Use msgprint to show the session user's name on the UI.",
            code: "msgprint(frappe.session.user.name);",
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Fetch linked Employee name",
            explanation: "Query the Employee DocType to get the name value of the employee linked to the current user.",
            code: "frappe.db.get_value(\"Employee\", { user: frappe.session.user }, \"name\")",
            language: "javascript"
          }
        ]}
      />

      <CodeBlock
        code={code}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <Troubleshooting
        items={[
          {
            problem: "frappe.session.user is undefined or null",
            solution: "Ensure the user session is fully initialized and user is logged in before accessing session data."
          },
          {
            problem: "frappe.user_role does not return expected roles",
            solution: "Verify roles are correctly assigned to the user in the Frappe backend and refresh session."
          },
          {
            problem: "frappe.db.get_value returns null or does not find Employee",
            solution: "Check that an Employee record exists and is linked properly to the user via the 'user' field."
          }
        ]}
      />
    </>
  );
}
