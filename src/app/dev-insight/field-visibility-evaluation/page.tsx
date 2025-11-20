"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function FieldVisibilityEvaluationPage() {
  const snippetName = "Field Visibility Evaluation";
  const language = "javascript";
  const category = "Form Visibility";

  const codeSnippet = `//if field is not blank
eval:doc.myfield

//if field has my value
eval:doc.myfield=='My Value'
eval:doc.age>18
eval:doc.if_crm=='Yes' || doc.if_erp=='Yes'

//If field1 Option A or Option B, show field2
eval:in_list(["Option A", "Option B"], doc.field2)
eval:in_list(["Receive", "Pay"], doc.payment_type) && doc.party_type

//Purchase Order field get_items_from_open_material_requests:
eval:doc.supplier && doc.docstatus===0 && (!(doc.items && doc.items.length) || (doc.items.length==1 && !doc.items[0].item_code))

eval:in_list([
  "IT Outsourcing- Full-time or Part-time",
  "IT Outsourcing-Enterprise Package",
  "IT Outsourcing-Standard Package",
  "Call Center Outsourcing"
], doc.quotation_segment)
`;

  return (
    <>
      <CodeSnippetHero
        title="How can I dynamically control field visibility using JavaScript in Doctype fields?"
        description="This snippet demonstrates how to use JavaScript evaluation expressions in the 'Visible On' property of Doctype fields to control their visibility based on various field values and conditions."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom py-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          In many ERP and web applications, it’s essential to control the visibility of form fields dynamically, based on user inputs or other document properties. This code snippet
          provides practical examples of how to use JavaScript evaluation expressions within the "Visible On" property of Doctype fields — a feature commonly used in the ERPNext and Frappe frameworks.
          By leveraging expressions using <code>eval:</code> and functions like <code>in_list</code>, fields can appear or hide seamlessly according to logical conditions such as the value of other fields, user roles, or document status.
          This approach improves form usability by showing only relevant fields to the user, reducing clutter and potential confusion.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
        referenceLink={"https://frappeframework.com/docs/user/en/customize-forms/doctype-field-properties#visible-on"}
        referenceLinkText="Frappe Doctype Field Visible On Documentation"
      />

      <CodeOverview
        whatItDoes="Provides JavaScript expressions to evaluate when to show or hide fields dynamically within Doctype forms."
        whenToUse="Use when you want to conditionally display fields based on current document values or user input without creating new backend logic."
        prerequisites={[
          "Understanding of Doctype and field properties in ERPNext/Frappe.",
          "Basic JavaScript knowledge for writing conditions.",
          "Familiarity with document properties and field naming."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "eval: Prefix",
            description: "Indicates the field uses a JavaScript expression to determine visibility.",
            relatedLink: "https://frappeframework.com/docs/user/en/customize-forms/doctype-field-properties#visible-on"
          },
          {
            title: "Document Object (doc)",
            description: "Represents current document’s data allowing field value access within expressions.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/document"
          },
          {
            title: "in_list Function",
            description: "Utility to check if a value exists in a list, useful for visibility conditions.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/utils#in_list"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the field whose visibility you want to control",
            explanation: "Open the Doctype customization and select the field you want to conditionally hide or show.",
            code: "",
            language: ""
          },
          {
            stepNumber: 2,
            title: "Use 'Visible On' property with eval expressions",
            explanation: "Enter JavaScript conditions prefixed with 'eval:' to specify when the field should be visible.",
            code: "eval:doc.myfield == 'My Value'",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Use helper functions as needed",
            explanation: "Functions like in_list() allow multiple value checks in a concise manner.",
            code: "eval:in_list(['Option A', 'Option B'], doc.field2)",
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Test visibility behavior in the form",
            explanation: "Reload and test the form to verify fields appear or disappear correctly based on your conditions.",
            code: "",
            language: ""
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Field does not become visible despite correct condition.",
            solution: "Confirm the exact fieldname and ensure your 'eval:' expression has no syntax errors. Use console logs for debugging."
          },
          {
            problem: "Visibility condition causes form errors or reload issues.",
            solution: "Check that all referenced fields exist and are correctly typed. Avoid overly complex conditions that may slow rendering."
          },
          {
            problem: "Using in_list returns false unexpectedly.",
            solution: "Make sure the value you’re checking is exactly as expected with no case or trailing whitespace mismatch."
          }
        ]}
      />
    </>
  );
}
