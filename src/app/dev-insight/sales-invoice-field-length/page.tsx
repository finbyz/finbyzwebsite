import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function SalesInvoiceFieldLength() {
  const snippetName = "Sales Invoice Field Length";
  const codeSnippet = `# Custom field length for exim app.
# This snippet would be used to increase or modify field length in Sales Invoice DocType

# Note: Usually done via Customize Form or via custom app patch.

# Example (Python):
# from frappe.custom.doctype.custom_field.custom_field import create_custom_field

# create_custom_field("Sales Invoice", {
#   "fieldname": "custom_field",
#   "label": "Custom Field",
#   "fieldtype": "Data",
#   "length": 100  # increase length here
# })
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Customize Field Length in Sales Invoice DocType in Frappe?"
        description="Problem: Default field lengths in the Sales Invoice DocType may be insufficient for some custom apps like Exim. Solution: Customize field length via Frappe's DocType customization or programmatically within your custom app."
        snippetName={snippetName}
        language="Python"
        category="Frappe Form Customization"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: In some cases, the default length of Data fields in Sales
          Invoice DocType limits the data you can store, which is problematic
          for certain processes like imports and exports (Exim apps).
          Solution: You can extend the field length by customizing the DocType
          either manually via Customize Form or programmatically via custom
          scripts or patches in your Frappe app, allowing for larger data
          storage per field.
          <br />
          Note: Since no detailed code was provided, this example outlines the
          usual approach to customize field lengths in Frappe.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Shows how to programmatically customize the length of a custom field in the Sales Invoice DocType to support larger data input."
        whenToUse="Use this approach when the default field length in a DocType is too short for your business needs or data import requirements."
        prerequisites={[
          "Basic understanding of Frappe Framework DocTypes and field customization",
          "Access to the Frappe app's backend to apply patches or use hooks"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Sales Invoice DocType",
            description: "The Sales Invoice DocType represents sales transactions and is widely used in ERPNext. Customizing its fields affects invoice data entry.",
            relatedLink: "https://docs.erpnext.com/docs/v14/user/manual/en/accounts/sales-invoice"
          },
          {
            title: "DocType Customization",
            description: "Modifying fields such as length, label, or type in Frappe's standard or custom DocTypes using Customize Form or programmatically.",
            relatedLink: "https://frappeframework.com/docs/user/en/customize-erpnext/customize-form"
          },
          {
            title: "Custom Fields",
            description: "Adding or modifying fields dynamically without touching core DocType source code, critical for app-specific extensions.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/custom-fields"
          },
          {
            title: "Python Scripting in Frappe",
            description: "Using Python functions like create_custom_field to modify DocTypes programmatically during migration or app setup.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/custom-fields"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Field Length Limitation",
            explanation: "Analyze the Sales Invoice DocType fields to find which fields have insufficient length for your use case, such as a custom field that needs to hold more data.",
            code: `# No code needed; use the UI or DocType definition to inspect field properties.
\`,\`language: "plaintext"
          },
          {
            stepNumber: 2,
            title: "Decide Customization Approach",
            explanation: "Choose whether to customize via Customize Form (for quick UI changes) or programmatically via Python scripts for version control and packaging.",
            code: \`# Customize Form: UI based
# Programmatic: Use create_custom_field in Python
`,
            language: "plaintext"
          },
          {
            stepNumber: 3,
            title: "Customize Field Length Programmatically",
            explanation: "Use Frappe's create_custom_field method to set the 'length' property of the custom field to the desired value.",
            code: `from frappe.custom.doctype.custom_field.custom_field import create_custom_field

create_custom_field("Sales Invoice", {
  "fieldname": "custom_field",
  "label": "Custom Field",
  "fieldtype": "Data",
  "length": 100  # Set increased length here
})
`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Apply and Test",
            explanation: "Apply the customization, clear caches if needed, and test by entering longer data values in the Sales Invoice custom field.",
            code: `# After script deployment:
# bench clear-cache
# bench restart
# Test in UI or through data import.
`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Field length not changing after customization",
            solution: "Ensure you cleared cache and restarted Frappe. Also verify no conflicting customizations or patches override the change."
          },
          {
            problem: "Long data cut off during import",
            solution: "Check the target field length and increase it further if needed, then re-import the data."
          },
          {
            problem: "Customization script throws errors",
            solution: "Verify that 'frappe' is correctly imported and you have permission to modify DocTypes. Run scripts in bench console or as part of app patch."
          }
        ]}
      />
    </main>
  );
}
