import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Execute Patch before uninstalling finbyz dashboard app";
const codeSnippet = `lst = frappe.db.get_list("Dashboard Chart",{"module":"Finbyz Dashboard"})
for d in lst:
    doc = frappe.get_doc("Dashboard Chart",d)
    doc.db_set('module',None)
    doc.db_set('is_standard',0)

if frappe.db.exists("Dashboard Chart",{"source":"Top Moving Items Balance"}):
	source_list =  frappe.db.get_list("Dashboard Chart",{"source":"Top Moving Items Balance"})
	for source in source_list:
		doc = frappe.get_doc("Dashboard Chart",source)
		doc.delete()

if frappe.db.exists("Dashboard Chart Source","Top Moving Items Balance"):
	doc = frappe.get_doc("Dashboard Chart Source","Top Moving Items Balance")
	doc.delete()

if frappe.db.exists("Dashboard Chart",{"source":"Top Sales Item To Deliver"}):
	source_list = frappe.db.get_list("Dashboard Chart",{"source":"Top Sales Item To Deliver"})
	for source in source_list:
			doc = frappe.get_doc("Dashboard Chart",source)
			doc.delete()

if frappe.db.exists("Dashboard Chart Source","Top Sales Item To Deliver"):
	doc = frappe.get_doc("Dashboard Chart Source","Top Sales Item To Deliver")
	doc.delete()

doc = frappe.get_doc("Dashboard Chart Source","Warehouse wise Stock Value")
doc.db_set('module',"Stock")

doc = frappe.get_doc("Dashboard Chart Source","Account Balance Timeline")
doc.db_set('module',"Accounts")

if frappe.db.exists("Number Card","Quantity to be Deliver"):
	doc = frappe.get_doc("Number Card","Quantity to be Deliver")
	doc.delete()
	
if frappe.db.exists("Number Card","Items to Receive"):
	frappe.db.delete('Number Card','Items to Receive')
	
if frappe.db.exists("Number Card","Items to Deliver"):
	frappe.db.delete('Number Card','Items to Deliver')

frappe.db.sql("""
delete from `tabCustom Field` where name like '%Dashboard%'
""")

frappe.db.sql("""
delete from `tabProperty Setter` where name like '%Dashboard%'
""")

# At the time of installation comment the patch
# -patch in frappe - frappe.patches.v13_0.create_custom_dashboards_cards_and_charts
`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to execute a patch to clean up Finbyz Dashboard app data before uninstalling?"
        description="This patch script cleans Dashboard Chart, Dashboard Chart Source, and Number Card records related to the Finbyz Dashboard app before uninstalling it, ensuring no orphaned references remain. It safely updates, deletes, and clears module references to prepare the system for a clean uninstall."
        snippetName={snippetName}
        language="Python"
        category="Frappe Patch"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <b>Problem:</b> When uninstalling the Finbyz Dashboard app, residual Dashboard Charts, Dashboard Chart Sources, and Number Cards can remain in the database causing orphaned and inconsistent data.
          <br />
          <b>Solution:</b> This patch script methodically unsets the module field, resets standard flags, deletes specific dashboard components, cleans related number cards, and removes custom fields and property setters related to dashboards. Running this patch before uninstalling prevents leftover data issues and maintains database integrity.
          <br />
          <em>Note:</em> No detailed description was provided originally for the snippet.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Executes database clean-up of all Dashboard Charts, Dashboard Chart Sources, and Number Cards linked to the Finbyz Dashboard app before its uninstallation. It modifies records by unsetting the 'module' field, setting 'is_standard' to 0, and deletes specific dashboard records and related customizations."
        whenToUse="Use this patch when you want to uninstall the Finbyz Dashboard app and need to ensure dependent dashboard and number card records are cleaned to avoid leftover data issues."
        prerequisites={["Access to Frappe Bench environment to run patches.", "Basic knowledge of Frappe DocTypes and patch execution."]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.db.get_list",
            description: "Fetches a list of documents matching filters from the database.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database"
          },
          {
            title: "frappe.get_doc",
            description: "Retrieves a full document object for manipulation and updates.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/document"
          },
          {
            title: "doc.db_set",
            description: "Updates a document field directly using the database without saving the whole document.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/document#db-set"
          },
          {
            title: "Deleting Documents in Frappe",
            description: "Use doc.delete() or frappe.db.delete to remove documents from the database.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#delete"
          },
          {
            title: "Patches in Frappe",
            description: "Patches modify data/schema changes during app installs or updates.",
            relatedLink: "https://frappeframework.com/docs/user/en/guides/app-development/patches"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Clear module and standard flags on Dashboard Charts",
            explanation: "Fetch all Dashboard Chart records linked to the Finbyz Dashboard module and update their 'module' field to None and 'is_standard' flag to 0 to detach them from the app.",
            code: `lst = frappe.db.get_list("Dashboard Chart", {"module": "Finbyz Dashboard"})\nfor d in lst:\n    doc = frappe.get_doc("Dashboard Chart", d)\n    doc.db_set('module', None)\n    doc.db_set('is_standard', 0)`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Delete Dashboard Charts and Sources for specific sources",
            explanation: "Check existence and delete Dashboard Charts and Dashboard Chart Sources related to 'Top Moving Items Balance' and 'Top Sales Item To Deliver' sources to remove outdated charts.",
            code: `if frappe.db.exists("Dashboard Chart", {"source": "Top Moving Items Balance"}):\n    source_list = frappe.db.get_list("Dashboard Chart", {"source": "Top Moving Items Balance"})\n    for source in source_list:\n        doc = frappe.get_doc("Dashboard Chart", source)\n        doc.delete()\n\nif frappe.db.exists("Dashboard Chart Source", "Top Moving Items Balance"):...`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Update module fields of key Dashboard Chart Sources",
            explanation: "Set the 'module' field appropriately for 'Warehouse wise Stock Value' and 'Account Balance Timeline' dashboard chart sources.",
            code: `doc = frappe.get_doc("Dashboard Chart Source", "Warehouse wise Stock Value")\ndoc.db_set('module', "Stock")\n\ndoc = frappe.get_doc("Dashboard Chart Source", "Account Balance Timeline")\ndoc.db_set('module', "Accounts")`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Delete specific Number Cards",
            explanation: "Remove Number Card records titled 'Quantity to be Deliver', 'Items to Receive', and 'Items to Deliver' to fully clean dashboard related cards.",
            code: `if frappe.db.exists("Number Card", "Quantity to be Deliver"):\n    doc = frappe.get_doc("Number Card", "Quantity to be Deliver")\n    doc.delete()\n\nif frappe.db.exists("Number Card", "Items to Receive"):\n    frappe.db.delete('Number Card', 'Items to Receive')\n\nif frappe.db.exists("Number Card", "Items to Deliver"):\n    frappe.db.delete('Number Card', 'Items to Deliver')`,
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Remove Custom Fields and Property Setters related to Dashboards",
            explanation: "Execute raw SQL queries to delete Custom Fields and Property Setters whose names contain 'Dashboard' to avoid leftover UI customizations.",
            code: `frappe.db.sql("""delete from \`tabCustom Field\` where name like '%Dashboard%'""")\nfrappe.db.sql("""delete from \`tabProperty Setter\` where name like '%Dashboard%'""")`,
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Patch does not remove all dashboard data as expected.",
            solution: "Ensure all related Dashboard Chart Sources and Number Cards are included in the patch. Verify the names and filters used match exact DocType entries."
          },
          {
            problem: "Errors occur running doc.delete().",
            solution: "Check for dependencies or permissions that might prevent deletion. Running the patch with administrator privileges might be necessary."
          },
          {
            problem: "Module field remains set after patch execution.",
            solution: "Use doc.db_set explicitly and confirm commit of transaction if running in a script outside patch system."
          }
        ]}
      />
    </main>
  );
}
