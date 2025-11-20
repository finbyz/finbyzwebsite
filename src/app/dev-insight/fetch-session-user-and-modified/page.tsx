import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function Page() {
  const snippetName = "Fetch Session User and Modified";
  const language = "Jinja";
  const category = "Frappe Templating & Server-side Data Fetching";

  const codeSnippet = `//Session User
{{ frappe.user }}
//Last Modified By
{{ frappe.get_fullname(doc.modified_by) or "" }}
//Fetch Session User Role
{{ frappe.db.get_value("Employee", { "user_id": doc.modified_by }, "designation") or "" }}
//Fetch User With name Manager
{{ frappe.db.get_value("User",{"name":manager},"full_name") }}
//Fetch Employee Name
{{ frappe.db.get_value("Employee",{"user_id":frappe.session.user},"employee_name") }}
//Fetch User Id
{{ frappe.db.get_value("Employee", { "user_id": doc.modified_by }, "designation") }}`;

  return (
    <main>
      <CodeSnippetHero
        title="How to fetch session user and related user details in Frappe using Jinja?"
        description="This snippet demonstrates how to retrieve the current session user, the last modifying user of a document, their roles, and other related employee information using Frappe's server-side Jinja templating and database queries."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2>Introduction</h2>
        <p>
          <strong>Problem:</strong> In Frappe web templates or server-rendered pages, you often need to display user-related
          information dynamically, such as the currently logged-in user's name, who last modified a document, or details about
          specific users or employees.
          <br />
          <strong>Solution:</strong> This snippet uses Frappe's convenient Jinja variables and
          <code>frappe.db.get_value</code> server-side database queries to fetch and display user information like session user
          ID, full names, employee designations, and more within a template.
          <br />
          It leverages the <code>doc</code> object for context when available, and <code>frappe.session.user</code> for session info.
          <br />
          Note: No explicit description was provided for this snippet.
        </p>
      </section>

      <CodeBlock code={codeSnippet} language={language} showLineNumbers allowCopy />

      <CodeOverview
        whatItDoes={`This snippet shows how to fetch various user and employee details in Frappe web templates using Jinja syntax and built-in helpers.
It accesses the current session user, retrieves the full name of the last modifier of a document, fetches roles/designations from linked Employee DocTypes, and extracts employee names from the logged-in user.`}
        whenToUse={`Use this approach when you want to display dynamic user-related metadata on server-rendered Frappe pages or templates,
such as audit info, personalized greetings, or hierarchical employee details without additional client-side scripting.`}
        prerequisites={[
          "Basic understanding of Frappe templating with Jinja.",
          "A 'doc' context object is available if fetching document-specific data.",
          "Familiarity with linked DocTypes like Employee and User in Frappe."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.user & frappe.session.user",
            description: "Global Jinja variables that hold information about the currently logged-in session user.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/jinja"
          },
          {
            title: "frappe.get_fullname(user)",
            description: "Fetches the full name of a Frappe user given the username or ID.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/utils#frappe.get_fullname"
          },
          {
            title: "frappe.db.get_value",
            description: "A server-side method to retrieve a field value from any DocType record with optional filters.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappe.db.get_value"
          },
          {
            title: "Employee and User DocTypes",
            description: "Core Frappe DocTypes representing employees and users, often linked for role and designation purposes.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/models"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Retrieve Current Session User",
            explanation: "Use the built-in `frappe.user` Jinja variable to get the current logged-in user's ID or name.",
            code: "{{ frappe.user }}",
            language: "jinja"
          },
          {
            stepNumber: 2,
            title: "Get Full Name of Last Modified User",
            explanation: "Use `frappe.get_fullname` passing `doc.modified_by` to fetch the full name of the user who last modified the document.",
            code: "{{ frappe.get_fullname(doc.modified_by) or \"\" }}",
            language: "jinja"
          },
          {
            stepNumber: 3,
            title: "Fetch Designation of User who Modified the Document",
            explanation: "Query the Employee DocType to get the designation associated with the user ID in `doc.modified_by` using `frappe.db.get_value`.",
            code: "{{ frappe.db.get_value(\"Employee\", { \"user_id\": doc.modified_by }, \"designation\") or \"\" }}",
            language: "jinja"
          },
          {
            stepNumber: 4,
            title: "Fetch Full Name of a User Specified by Manager Variable",
            explanation: "Retrieve the full_name field of a User record where the name matches the variable 'manager'. Useful for dynamic user lookups.",
            code: "{{ frappe.db.get_value(\"User\", {\"name\": manager}, \"full_name\") }}",
            language: "jinja"
          },
          {
            stepNumber: 5,
            title: "Get Employee Name of the Current Session User",
            explanation: "Query the Employee DocType to fetch the employee_name linked to the current logged-in user identified by `frappe.session.user`.",
            code: "{{ frappe.db.get_value(\"Employee\", {\"user_id\": frappe.session.user}, \"employee_name\") }}",
            language: "jinja"
          },
          {
            stepNumber: 6,
            title: "Redundant Fetch of Designation",
            explanation: "Repeated retrieval of the designation field of the Employee linked to `doc.modified_by`. Could be optimized by caching.",
            code: "{{ frappe.db.get_value(\"Employee\", { \"user_id\": doc.modified_by }, \"designation\") }}",
            language: "jinja"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "`doc` is undefined or not passed to the template.",
            solution: "Ensure that the template context includes a valid `doc` object representing the current document when rendering to access `doc.modified_by` properly."
          },
          {
            problem: "`manager` variable is undefined.",
            solution: "Pass the `manager` variable in the template context or set it before using it in the Jinja expression."
          },
          {
            problem: "Returned values are empty strings or null.",
            solution: "Check that the queried DocTypes (User, Employee) and fields exist and contain data; use fallback or error handling as needed."
          }
        ]}
      />
    </main>
  );
}
