import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CanNotDeleteRawProperty() {
  const snippetName = "Can Not delete Raw Property";
  const codeSnippet = "frm.set_df_property('supplied_items', 'cannot_delete_rows', 1);";
  const referenceLink = "https://github.com/frappe/frappe/pull/13439";

  return (
    <main>
      <CodeSnippetHero
        title="How to prevent users from deleting rows in a Frappe child table?"
        description="This snippet demonstrates how to use frm.set_df_property to set the 'cannot_delete_rows' property on a child table field, preventing row deletions in Frappe forms."
        snippetName={snippetName}
        language="Frappe Client Script"
        category="Frappe Form Customization"
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In Frappe forms, users can often delete rows from child tables, which might not be desirable in certain workflows.
          <br />
          <strong>Solution:</strong> The provided code uses the client-side API frm.set_df_property to set the 'cannot_delete_rows' property on the child table field named 'supplied_items'.
          Setting this property to 1 disables the delete action on the child table rows, ensuring users cannot remove them.
          <br />
          This approach leverages Frappe's form scripting capabilities to customize user interactions directly in the client form.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="js"
        allowCopy
        showLineNumbers={false}
        referenceLink={referenceLink}
        referenceLinkText="GitHub PR #13439"
      />

      <CodeOverview
        whatItDoes="Sets the 'cannot_delete_rows' property on a specified child table field to prevent users from deleting rows in that child table within a Frappe form."
        whenToUse="Use this when you want to protect critical child table data from accidental or unauthorized deletion in Frappe DocTypes."
        prerequisites={[
          "Knowledge of Frappe DocType and child table fields",
          "Access to client script customization in Frappe form",
          "Understanding of frm.set_df_property API"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frm.set_df_property",
            description: "A client-side Frappe API function to dynamically set properties on DocType form fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#frmset_df_property"
          },
          {
            title: "Child Table",
            description: "A table field type in Frappe used for storing multiple child documents related to a parent DocType.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#child-tables"
          },
          {
            title: "cannot_delete_rows Property",
            description: "Form field property that disables the ability to delete rows from a child table when set to true (1).",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#child-table-properties"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the child table field",
            explanation: "Determine the exact child table fieldname in your DocType for which you want to prevent row deletion. In this example, it's 'supplied_items'.",
            code: "// The child table fieldname 'supplied_items'",
            language: "js"
          },
          {
            stepNumber: 2,
            title: "Use frm.set_df_property in your client script",
            explanation: "Invoke frm.set_df_property to set 'cannot_delete_rows' to 1 for the given child table field. This disables the delete row option.",
            code: "frm.set_df_property('supplied_items', 'cannot_delete_rows', 1);",
            language: "js"
          },
          {
            stepNumber: 3,
            title: "Test your customization",
            explanation: "Reload your form in the Frappe UI and verify the delete option is disabled for rows in the 'supplied_items' child table.",
            code: "// Observe UI, no code change",
            language: "js"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The delete icon is still present and rows can be deleted.",
            solution: "Ensure you are setting 'cannot_delete_rows' on the correct child table fieldname and that the client script is properly loaded."
          },
          {
            problem: "The property doesn't seem to take effect after changing the code.",
            solution: "Clear browser cache and reload the form. Also verify no other scripts override this setting afterward."
          }
        ]}
    </main>
  );
}
