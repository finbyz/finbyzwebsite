"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function FetchSessionUserAndModified() {
  const snippetName = "Fetch Session User and Modified";
  const language = "jinja";
  const category = "Data Fetching";

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
    <>
      <CodeSnippetHero
        title="How to fetch session user information and related user data in Jinja using Frappe?"
        description="This snippet demonstrates how to retrieve session user details, the last user who modified a document, user roles, and employee details directly within Jinja templates using Frappe's database API. Useful for dynamic template rendering based on user context."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom mt-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-6 text-gray-700">
          This code snippet leverages the Frappe framework’s Jinja templating to fetch various user-related information at runtime within templates. It covers how to access the session
          user, fetch the full name of the last person who modified a document, retrieve the user’s role or designation from the Employee doctype, and get specific user and
          employee details. These techniques are essential when building dynamic content that adapts based on the current user’s identity and roles, enhancing personalization and
          data-driven UI behavior within Frappe-based applications.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers
        allowCopy
        referenceLink=""
        referenceLinkText=""
      />

      <CodeOverview
        whatItDoes="Fetches session user details, last modified user name, user roles, and employee information dynamically inside Jinja templates using Frappe's API calls."
        whenToUse="Use this snippet when you need to display or utilize user and modification metadata directly within your web templates or reports built on Frappe."
        prerequisites={[
          "Basic knowledge of Jinja templating",
          "Understanding of Frappe framework's user and Employee doctypes",
          "Access to frappe.db.get_value and frappe.session methods"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.user",
            description: "Provides the current logged-in session user ID in the template.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/jinja#frappe-user"
          },
          {
            title: "frappe.get_fullname",
            description: "Retrieves the full name of a user by their user ID.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/jinja#frappe-get-fullname"
          },
          {
            title: "frappe.db.get_value",
            description: "Fetches field values from a specific doctype optionally filtered by conditions.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappe-db-get-value"
          },
          {
            title: "doc.modified_by",
            description: "A standard field representing the last user who modified the document.",
            relatedLink: "https://frappeframework.com/docs/user/en/model/standard-fields"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Get Current Session User",
            explanation: "Use {{ frappe.user }} in your Jinja template to access the currently logged-in user's ID.",
            code: "{{ frappe.user }}",
            language: "jinja"
          },
          {
            stepNumber: 2,
            title: "Retrieve Last Modified User's Full Name",
            explanation: "Use frappe.get_fullname(doc.modified_by) to obtain the full name of the user who last modified the document.",
            code: "{{ frappe.get_fullname(doc.modified_by) or \"\" }}",
            language: "jinja"
          },
          {
            stepNumber: 3,
            title: "Fetch User Role or Designation",
            explanation: "Query the Employee doctype for the user's designation based on their user ID.",
            code: "{{ frappe.db.get_value(\"Employee\", { \"user_id\": doc.modified_by }, \"designation\") or \"\" }}",
            language: "jinja"
          },
          {
            stepNumber: 4,
            title: "Get Full Name for Manager",
            explanation: "Fetches the full name of a User given the user's name variable 'manager'.",
            code: "{{ frappe.db.get_value(\"User\", {\"name\": manager}, \"full_name\") }}",
            language: "jinja"
          },
          {
            stepNumber: 5,
            title: "Fetch Employee Name for Session User",
            explanation: "Retrieve the employee_name from the Employee doctype using the current session user ID.",
            code: "{{ frappe.db.get_value(\"Employee\", {\"user_id\": frappe.session.user}, \"employee_name\") }}",
            language: "jinja"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "frappe.get_fullname(doc.modified_by) returns empty or null",
            solution: "Ensure 'doc.modified_by' is set and the user exists. Also, verify permissions to access user data in your context."
          },
          {
            problem: "frappe.db.get_value returns unexpected null values",
            solution: "Check that the conditions and field names are correct and that the referenced records exist in the database. Double-check spelling and data integrity."
          },
          {
            problem: "Session user info not accessible",
            solution: "Confirm that a user session exists and that the template has permission to access 'frappe.user' and 'frappe.session.user' properties."
          }
        ]}
      />
    </>
  );
}
