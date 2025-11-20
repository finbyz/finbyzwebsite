import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AddDoctypeInRenameTool() {
  const snippetName = "Add Doctype In Rename Tool";
  const language = "Python";
  const category = "Frappe Utilities";
  const codeSnippet = `# Refer get_doctypes function from erpnext.utilities.doctype.rename_tool.rename_tool.get_doctypes

# Enable renaming in DocType
frappe.db.set_value("DocType", "Journal Entry", "allow_rename", 1, update_modified=False)

# After renaming operation, disable renaming in DocType
frappe.db.set_value("DocType", "Journal Entry", "allow_rename", 0, update_modified=False)`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Enable Renaming of DocTypes in Frappe Framework?"
        description="When you want to rename a DocType, you need to set the allow_rename property to 1 before renaming and reset it back to 0 after the operation. This snippet demonstrates how to toggle this flag programmatically using frappe.db.set_value."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: By default, Frappe DocTypes do not allow renaming for data
          integrity and stability. To rename a DocType (like "Journal Entry"), you
          must temporarily enable its renaming ability by setting the
          <code>allow_rename</code> property.
          <br />
          Solution: This snippet outlines how to toggle the <code>allow_rename</code>{" "}
          property on the DocType before and after the rename operation using
          <code>frappe.db.set_value</code> in Python, ensuring safe and permitted
          renaming.
          <br />
          Note: The snippet references the <code>get_doctypes</code> function from
          ERPNext's rename tool utility for context.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="This snippet enables the renaming feature on a DocType by setting its allow_rename flag to 1 before a rename operation, and disables it by resetting the flag to 0 after the rename is completed."
        whenToUse="Use this when you need to programmatically rename DocTypes that do not allow renaming by default in Frappe Framework to avoid manual toggling."
        prerequisites={[
          "Access to Frappe's backend Python environment",
          "Proper permissions to update DocType records",
          "Understanding of Frappe DocType concepts and ERPNext utilities"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "allow_rename property of DocType",
            description: "A flag that controls whether a DocType can be renamed in Frappe.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/frappe/model/documents#doctype-properties"
          },
          {
            title: "frappe.db.set_value",
            description: "Standard Frappe method to update a field's value in database documents.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappe-db-set-value"
          },
          {
            title: "DocType in Frappe Framework",
            description: "Defines a data model in Frappe representing a database table and its fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctype"
          },
          {
            title: "ERPNext Rename Tool",
            description: "Utility to safely rename DocTypes and linked documents in ERPNext.",
            relatedLink: "https://github.com/frappe/erpnext/blob/develop/erpnext/utilities/doctype/rename_tool/rename_tool.py"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Enable the allow_rename flag on the DocType",
            explanation: "Before starting a rename operation on a DocType like 'Journal Entry', set its allow_rename flag to 1 to allow renaming.",
            code: `frappe.db.set_value("DocType", "Journal Entry", "allow_rename", 1, update_modified=False)` ,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Perform the renaming operation",
            explanation: "Rename the DocType using your preferred method or Frappe's rename tool while the allow_rename flag is enabled.",
            code: "# perform rename via Frappe or ERPNext UI or code",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Disable the allow_rename flag on the DocType",
            explanation: "After renaming is completed, set allow_rename back to 0 to prevent unintended future renaming.",
            code: `frappe.db.set_value("DocType", "Journal Entry", "allow_rename", 0, update_modified=False)` ,
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Renaming operation fails or is disallowed.",
            solution: "Ensure that allow_rename is set to 1 on the DocType before renaming and that you have sufficient permissions."
          },
          {
            problem: "DocType renaming does not propagate to linked documents.",
            solution: "Use ERPNext's full rename utility or scripts to ensure linked documents and references are updated correctly."
          }
        ]}
        />
    </main>
  );
}
