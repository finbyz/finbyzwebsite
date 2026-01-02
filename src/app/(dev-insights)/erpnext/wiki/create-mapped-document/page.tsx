import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `// Import below library
from frappe.model.mapper import get_mapped_doc

@frappe.whitelist()
def make_meeting(source_name, target_doc=None):
	
	doclist = get_mapped_doc("Meeting Schedule", source_name, {
			"Meeting Schedule":{
				"doctype": "Meetings",
				"field_map": {
					"meeting_from": "scheduled_from",
					"meeting_to": "scheduled_to"
				}
			}
	}, target_doc)
	
	return doclist

// Another Example for mapping different field names
@frappe.whitelist()
def make_so(source_name, target_doc=None):
	def set_missing_values(source, target):
		ignore_errors=True
		target.append("items", {
			"item_code": source.item,
			"item_name": source.item_name,
			"description": source.item_name,			
			"uom": source.uom,
			"stock_uom": source.stock_uom,
			"qty":source.available_qty,
			"rate":source.rate
		})
doclist = get_mapped_doc("Sauda Details", source_name, {
			"Sauda Details": {
				"doctype": "Sales Order",
				"field_map": {
					"name": "sauda_ref",
					"shipment_to": "delivery_date",
				}
			},
		}, target_doc, set_missing_values)
return doclist`;

export default function Page() {
  return (
    <>
      <CodeSnippetHero
        title="How to Create Mapped Documents in Frappe for ERPNext Customizations?"
        description="Utilize the Frappe get_mapped_doc API server-side to automate document mapping from source to target DocTypes with custom field maps and value setters."
        snippetName="Create Mapped Document"
        language="Python"
        category="Frappe Server Scripts"
        accentColor="blue"
      />

      <section className="container-custom">
        <h2>Introduction</h2>
        <p>
          In ERPNext development, automating the creation of documents based on existing records accelerates business workflows and reduces errors. This snippet demonstrates
          using Frappe's <code>get_mapped_doc</code> function in a server script to map fields from one DocType (such as <em>Meeting Schedule</em> or <em>Sauda Details</em>)
          to another (e.g., <em>Meetings</em> or <em>Sales Order</em>), handling different field names and custom child table data.
          This approach is essential when implementing custom buttons or triggers that transform data according to unique business logic within ERPNext.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        fileName="server_scripts/create_mapped_doc.py"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://frappeframework.com/docs/v14/user/en/api/model#frappe.model.mapper.get_mapped_doc"
        referenceLinkText="frappe.model.mapper.get_mapped_doc official documentation"
      />

      <CodeOverview
        whatItDoes="Automates creation of a new DocType document by mapping fields from an existing document using get_mapped_doc. Handles custom field mappings and allows custom logic to set additional values."
        whenToUse="Use in server-side triggers such as @frappe.whitelist methods called from buttons or API endpoints when data from one DocType needs to be transformed and saved as another."
        prerequisites={["Frappe server script knowledge", "Understanding of ERPNext DocType relationships", "Basic Python familiarity"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "get_mapped_doc",
            description: "Frappe API to map and create new documents based on a source document, specifying field mappings and custom callbacks.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/model#frappe.model.mapper.get_mapped_doc"
          },
          {
            title: "DocType",
            description: "The fundamental data model in ERPNext representing forms and database schema.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/documents"
          },
          {
            title: "@frappe.whitelist",
            description: "Decorator to expose server-side Python methods for client-side calls or via REST API.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/server#whitelisted-methods"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Import get_mapped_doc API",
            explanation: "Import the helper method from frappe.model.mapper to utilize its powerful document mapping capabilities.",
            code: "from frappe.model.mapper import get_mapped_doc",
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Define the mapping function",
            explanation: "Create a whitelisted function that takes a source document name and optionally a target document to populate or create.",
            code: "@frappe.whitelist()\ndef make_meeting(source_name, target_doc=None):",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Set up mapping rules",
            explanation: "Configure the from-to field mapping in a dictionary with the source DocType as key and a mapping with the target DocType and any necessary field maps.",
            code: `doclist = get_mapped_doc("Meeting Schedule", source_name, {"Meeting Schedule": {"doctype": "Meetings", "field_map": {"meeting_from": "scheduled_from", "meeting_to": "scheduled_to"}}}, target_doc)`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Handle advanced mapping with callbacks",
            explanation: "For complex transformations like mapping child tables or setting missing values, define a callback function that modifies the target document.",
            code: `def set_missing_values(source, target):\n    target.append(\"items\", {\n        \"item_code\": source.item,\n        \"item_name\": source.item_name,\n        \"description\": source.item_name,\n        \"uom\": source.uom,\n        \"stock_uom\": source.stock_uom,\n        \"qty\": source.available_qty,\n        \"rate\": source.rate\n    })`,
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Return the mapped document",
            explanation: "Return the mapped document list so it can be saved or further processed.",
            code: "return doclist",
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Mapped document fields not updating as expected.",
            solution: "Verify that field_map keys correctly match the source document field names and target document field names. Check for typos and naming mismatches."
          },
          {
            problem: "Child table entries missing after mapping.",
            solution: "Use a callback function (e.g., set_missing_values) to manually append child table rows as get_mapped_doc does not automatically map child table fields unless specified."
          },
          {
            problem: "Permission errors when calling make_meeting from client side.",
            solution: "Ensure the server function is decorated with @frappe.whitelist and the user has appropriate permissions to access the involved DocTypes."
          },
          {
            problem: "Unexpected data types or missing fields in mapped document.",
            solution: "Add logging using frappe.logger or print statements in the server function to debug source and target field values during mapping."
          }
        ]}
      />
    </>
  );
}
