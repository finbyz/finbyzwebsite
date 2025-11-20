import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function KomalVersionBenchUpdate() {
  const snippetName = "Komal Version/Bench Update";
  const language = "Python";
  const category = "Frappe Backend Customization";
  const codeSnippet = `#	if not strip_html(cstr(self.description)).strip():
#		self.description = self.item_name

INSIDE THE VALIDATE FUNCTION

TO ALLOW EMPTY DESCRIPTION VIA DATA IMPORT

REASON:
    CLIENT HAS NO LOCAL OR CUSTOM APP SO CANNOT OVERRIDE STANDARD FUNCTIONALITY. SO DIRECT EDITED ERPNEXT CODE.

** WHEN UPDATE VERSION OR BENCH FOLLOW THE BELOW STEPS ** 
- CONNECT TO SSH
- GO TO \"frappe-bench/apps/erpnext/erpnext/stock/doctype/item/item.py\"
- FIND def validate():
- LOCATE AND COMMENT THE CODE 
    #	if not strip_html(cstr(self.description)).strip():
    #		self.description = self.item_name
- Reference Link: 
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to allow empty description in ERPNext Item doctype validation?"
        description="When importing data, ERPNext's standard validate method in the Item DocType forces description to be non-empty by copying item_name. This snippet shows how to comment out that code to allow empty descriptions without a custom app."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> The standard ERPNext Item DocType <code>validate</code> function contains a check that if the <code>description</code> field is empty,
          it automatically sets the description to the item name. This is enforced by code that strips HTML tags and checks if the description is blank.
          This behavior blocks importing items with an empty description.
        </p>
        <p>
          <strong>Solution:</strong> To allow importing items with empty <code>description</code> fields, the validation lines are commented out inside<br /> the
          <code>validate</code> method in <code>item.py</code>. This direct modification bypasses the standard overwrite when no local or custom app exists to override the method.
        </p>
        <p>
          <strong>Note:</strong> This is a backend Python customization done by editing ERPNext core code and should be done carefully to avoid upgrade issues.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        fileName="frappe-bench/apps/erpnext/erpnext/stock/doctype/item/item.py"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink={""}
        referenceLinkText={""}
      />

      <CodeOverview
        whatItDoes="Comments out the lines in the validate method of ERPNext's Item DocType to prevent the automatic overwrite of empty description fields."
        whenToUse="When you want to allow items imported via data import to have empty descriptions without forcing them to the item name. Useful if no custom app exists to override validation."
        prerequisites={[]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "ERPNext Item DocType",
            description: "Item is a standard ERPNext DocType representing products in inventory.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/erpnext/stock/doctype/item"
          },
          {
            title: "Validation in DocTypes",
            description: "The validate() method runs before saving a document to enforce rules.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/model#doc-events"
          },
          {
            title: "strip_html() utility",
            description: "Utility function used to remove HTML tags from text fields in ERPNext.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/utils"
          },
          {
            title: "Data Import in ERPNext",
            description: "Allows bulk importing of records but can be impacted by validation methods.",
            relatedLink: "https://docs.erpnext.com/docs/v13/user/manual/en/data/data-import"
          },
          {
            title: "Customizing ERPNext without Apps",
            description: "Direct code modification is possible but discouraged; use with caution.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/customization"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Connect to Server via SSH",
            explanation: "Access the ERPNext server's terminal via SSH to edit source files.",
            code: "ssh user@your-server-ip",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Navigate to Item DocType Source File",
            explanation: "Go to the location of the item.py file containing the Item DocType class and its validate method.",
            code: "cd frappe-bench/apps/erpnext/erpnext/stock/doctype/item",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Edit the validate() Method",
            explanation: "Open item.py in an editor (vim/nano) and find the validate function.",
            code: "vim item.py",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Comment Out Description Override Code",
            explanation: "Locate the lines that check if the description is empty and override it with item_name. Comment them out.",
            code: "#\tif not strip_html(cstr(self.description)).strip():\n#\t\tself.description = self.item_name",
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Save Changes and Restart Bench",
            explanation: "Save the file and restart the bench to apply changes to ERPNext.",
            code: "bench restart",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The Item description is still replaced by the item name after data import.",
            solution: "Ensure you have commented out exactly the two lines in the validate method and restarted the bench.",
          },
          {
            problem: "Editing core ERPNext files may break future upgrades.",
            solution: "Consider creating a custom app to override validation or using patches instead of direct edits.",
          }
        ]}
      />
    </main>
  );
}
