import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";


const SnippetPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Remove Orphaned Workspace Sidebar Items in Frappe"
        description="Remove orphaned Frappe Workspace Sidebar Items using frappe.get_all and frappe.delete_doc to fix TypeError in the frontend caused by missing workspace links."
        snippetName="how-to-remove-orphaned-workspace-sidebar-items-in-frappe"
        language="Python"
        category="Python API"
        accentColor="blue"
      />
      <CodeSnippetInstroduction paragraphs={[
        "This snippet demonstrates how to identify and remove orphaned Frappe Workspace Sidebar Items using `frappe.get_all` and `frappe.delete_doc` to resolve frontend TypeErrors.",
        "It identifies and removes `Workspace Sidebar Item` records that reference non-existent `Workspace` documents, resolving related frontend errors.",
        "Use this snippet after a Frappe/ERPNext version update or data migration where orphaned child table entries might cause UI issues."
      ]} />
      <CodeBlock
        code={`# Preview first
existing = set(frappe.get_all("Workspace", pluck="name"))
bad_items = frappe.get_all(
    "Workspace Sidebar Item",
    filters={"link_type": "Workspace"},
    fields=["name", "parent", "label", "link_to"]
)
bad_items = [r for r in bad_items if r.link_to not in existing]
print(f"Found {len(bad_items)} orphaned items:")
for row in bad_items:
    print(row)
    
# Delete them
for row in bad_items:
    frappe.delete_doc("Workspace Sidebar Item", row.name, ignore_permissions=True)

frappe.db.commit()
print("Done. Deleted", len(bad_items), "orphaned sidebar items.")`}
        language="python"
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="Identifies and removes orphaned Workspace Sidebar Item records that reference non-existent Workspace documents, cleaning up database inconsistencies that cause frontend TypeErrors."
        whenToUse="Use this snippet after a Frappe/ERPNext version update or data migration where orphaned child table entries might cause UI issues. It's particularly useful when encountering 'TypeError: Cannot read properties of undefined (reading 'public')' errors in the frontend."
        prerequisites={[
          "Frappe/ERPNext installed and running.",
          "Bench access or access to Frappe console.",
          "Understanding of Frappe DocTypes and database operations."
        ]}
      />
      <KeyConcepts concepts={[
        {
          title: "Workspace",
          description: "A Frappe DocType representing a dashboard or module grouping in the UI.",
          relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes"
        },
        {
          title: "Workspace Sidebar Item",
          description: "A child DocType linked to Workspace, defining items in its sidebar navigation.",
          relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes"
        },
        {
          title: "frappe.get_all",
          description: "Retrieves records from a specified DocType, optionally filtered.",
          relatedLink: "https://frappeframework.com/docs/user/en/api/frappe.client#frappe.client.get_all"
        },
        {
          title: "frappe.delete_doc",
          description: "Permanently deletes a DocType record from the database.",
          relatedLink: "https://frappeframework.com/docs/user/en/api/frappe.model.delete_doc#frappe.delete_doc"
        },
        {
          title: "frappe.db.commit",
          description: "Commits pending database changes to make them permanent.",
          relatedLink: "https://frappeframework.com/docs/user/en/api/frappe.database.database#frappe.database.database.commit"
        }
      ]} />
      <StepByStepTutorial steps={[
        {
          stepNumber: 1,
          title: "Identify Existing Workspaces",
          explanation: "Get a set of all active Workspace names to use for validating linked sidebar items.",
          code: `existing = set(frappe.get_all("Workspace", pluck="name"))`,
          language: "python"
        },
        {
          stepNumber: 2,
          title: "Find Orphaned Sidebar Items",
          explanation: "Query all Workspace Sidebar Items and filter for those whose linked Workspace no longer exists.",
          code: `bad_items = frappe.get_all(
    "Workspace Sidebar Item",
    filters={"link_type": "Workspace"},
    fields=["name", "parent", "label", "link_to"]
)
bad_items = [r for r in bad_items if r.link_to not in existing]`,
          language: "python"
        },
        {
          stepNumber: 3,
          title: "Delete Orphaned Records",
          explanation: "Iterate through the identified orphaned items and delete each one using `frappe.delete_doc`, then commit the database changes.",
          code: `for row in bad_items:
    frappe.delete_doc("Workspace Sidebar Item", row.name, ignore_permissions=True)

frappe.db.commit()`,
          language: "python"
        }
      ]} />

    </main>
  );
};

export default SnippetPage;
