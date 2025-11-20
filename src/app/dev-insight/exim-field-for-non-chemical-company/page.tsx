import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `Exim Fields For Non Chemical Company`;

export default function EximFieldForNonChemicalCompany() {
  return (
    <main>
      <CodeSnippetHero
        title="How to define Exim fields for a Non Chemical Company in Frappe?"
        description="This snippet addresses how to create and structure Exim fields specifically tailored for a non-chemical company within Frappe Framework, solving customization and data management challenges."
        snippetName="Exim Field For Non Chemical Company"
        language="Frappe"
        category="Frappe Form Customization"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Defining Exim (Export-Import) related fields specifically for a non-chemical company in Frappe poses a challenge as the data structures and fields required might differ. A generic "Exim Fields" approach may not capture non-chemical-specific requirements.
          <br />
          <strong>Solution:</strong> The solution involves creating Frappe DocType fields, possibly with child tables and link fields, customized to suit non-chemical companies. This provides a flexible, structured data capture and management within Frappe forms.
          <br />
          <em>Note:</em> The provided snippet text is minimal, so this page explains the concept and typical approach.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="text"
        showLineNumbers={false}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Defines Exim-specific fields tailored for non-chemical companies in a Frappe DocType, ensuring relevant data capture and business logic alignment."
        whenToUse="Use this when customizing ERPNext or any Frappe app to support non-chemical company export-import data that differs from chemical industry requirements."
        prerequisites={[
          "Basic understanding of Frappe DocType customization",
          "Frappe Framework access",
          "Familiarity with form customization in ERPNext"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe DocType",
            description: "The fundamental building block in Frappe to define database tables and forms, used here to create custom Exim fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/tutorial/doctype"
          },
          {
            title: "Child Table",
            description: "A table embedded in a parent DocType used to manage multiple related entries, useful for listing multiple Exim entries.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/backend/child-table"
          },
          {
            title: "Link Field",
            description: "A field type in Frappe linking to another DocType, facilitating relational data management.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/field-types#link"
          },
          {
            title: "Client Script",
            description: "Scripts run in the frontend to customize form behavior and validation, enhancing user interaction with Exim fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          },
          {
            title: "Form Customization",
            description: "Adjusting Frappe forms (DocTypes) to suit specific business needs, here to tailor Exim data for a non-chemical company.",
            relatedLink: "https://frappeframework.com/docs/user/en/interface/form-customization"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Required Exim Fields",
            explanation:
              "Analyze and decide which Exim fields are necessary for the non-chemical company to capture relevant export-import data.",
            code: `// This is a conceptual list, no code snippet provided
{
  fieldname: 'custom_field',
  label: 'Custom Exim Field',
  fieldtype: 'Data'
}`,
            language: "json"
          },
          {
            stepNumber: 2,
            title: "Customize the DocType",
            explanation:
              "Using the Frappe doctype editor, add the identified Exim fields, including child tables if multiple entries need to be stored.",
            code: `// Example JSON for child table field
{
  fieldname: 'exim_entry',
  label: 'Exim Entry',
  fieldtype: 'Table',
  options: 'Exim Entry'
}`,
            language: "json"
          },
          {
            stepNumber: 3,
            title: "Add Link Fields",
            explanation:
              "Create Link fields to connect Exim data to other relevant DocTypes, like 'Company' or 'Supplier', to maintain relational data integrity.",
            code: `{
  fieldname: 'supplier',
  label: 'Supplier',
  fieldtype: 'Link',
  options: 'Supplier'
}`,
            language: "json"
          },
          {
            stepNumber: 4,
            title: "Test and Iterate",
            explanation:
              "Once fields are added, test in Frappe UI, validate correct data capture, and iterate based on feedback.",
            code: `// No specific code; test within Frappe interface
`,
            language: "text"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Exim fields not appearing in form after customization.",
            solution: "Clear Frappe cache and reload the form; ensure fields are saved correctly in the DocType definition."
          },
          {
            problem: "Child table entries do not save properly.",
            solution: "Check child DocType permissions and ensure child table field options point to the correct DocType."
          },
          {
            problem: "Link field dropdown is empty.",
            solution: "Verify that the options field in the Link field matches an existing DocType and the current user has read permissions."
          }
        ]}
      />
    </main>
  );
}
