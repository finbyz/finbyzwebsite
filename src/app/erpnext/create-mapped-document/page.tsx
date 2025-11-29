import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const CreateMappedDocumentPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Create a New Document from Another in Frappe using get_mapped_doc?"
        description="Learn how to use Frappe's get_mapped_doc server-side utility to map fields and create new documents like Sales Orders or Meetings from source DocTypes in Python."
        snippetName="Create Mapped Document"
        language="Python"
        category="Frappe Server Script"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe and ERPNext, it's a common requirement to create one document from another, for example, creating a Sales Order from a Quotation or a Meeting from a Schedule. The framework provides a powerful utility, `get_mapped_doc`, to streamline this process.",
          "This snippet demonstrates how to use this server-side mapping function, including basic field-to-field mapping and more advanced scenarios like populating child tables."
        ]}
      />
      <CodeBlock
        language="python"
        code={`# Import below library
from frappe.model.mapper import get_mapped_doc
import frappe

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

# Another Example for mapping different field names and child tables
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

	return doclist`}
      />
      <CodeOverview
        whatItDoes="This script defines two whitelisted Python functions that use get_mapped_doc to create a new target document (e.g., 'Meetings', 'Sales Order') from a source document, automatically mapping specified fields and handling child table data."
        whenToUse="Use this pattern in server scripts that are triggered by a custom button on a form, a workflow action, or any backend process where you need to create a related document with pre-filled data from a source."
        prerequisites={[
          "A basic understanding of Frappe DocTypes and Server Scripts.",
          "The source and target DocTypes must exist in your Frappe site."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "The @frappe.whitelist() Decorator",
            description: "This decorator exposes a Python function to be callable from the client-side (JavaScript). It's essential for functions that will be triggered by UI actions like button clicks.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/server-script#whitelisted-functions"
          },
          {
            title: "frappe.model.mapper.get_mapped_doc",
            description: "A core Frappe API function that facilitates the creation of a new document from a source document. It takes the source DocType, source document name, a mapping configuration, and an optional post-processing function.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/model#frappe.model.mapper.get_mapped_doc"
          },
          {
            title: "Field Mapping Configuration",
            description: "The 'field_map' dictionary is the heart of the mapping process. It defines which fields in the source document correspond to which fields in the target document. You can map fields with different names.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/document-links#mapping-fields"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create the Python Server Script",
            explanation: "First, create a new Python file in your custom Frappe app's module directory (e.g., `my_app/my_app/api.py`). This file will contain your whitelisted function.",
            code: `# my_app/my_app/api.py\nfrom frappe.model.mapper import get_mapped_doc\nimport frappe`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Define the Basic Mapping Function",
            explanation: "Define a whitelisted function that takes the `source_name` as an argument. Inside, call `get_mapped_doc` with the source DocType, source name, and a dictionary defining the target DocType and its `field_map`.",
            code: `import frappe\nfrom frappe.model.mapper import get_mapped_doc\n\n@frappe.whitelist()\ndef make_meeting(source_name, target_doc=None):\n    doclist = get_mapped_doc(\"Meeting Schedule\", source_name, {\n        \"Meeting Schedule\": {\n            \"doctype\": \"Meetings\",\n            \"field_map\": {\n                \"meeting_from\": \"scheduled_from\",\n                \"meeting_to\": \"scheduled_to\"\n            }\n        }\n    }, target_doc)\n    return doclist`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Handle Complex Mapping with Child Tables",
            explanation: "For more complex scenarios, like mapping items to a child table, you can pass a post-processing function (`set_missing_values` in this case) to `get_mapped_doc`. This function receives the source and target documents and allows you to programmatically add child table rows.",
            code: `@frappe.whitelist()\ndef make_so(source_name, target_doc=None):\n    def set_missing_values(source, target):\n        # Logic to map child table items\n        target.append(\"items\", {\n            \"item_code\": source.item,\n            \"item_name\": source.item_name,\n            \"qty\": source.available_qty,\n            # ... other fields\n        })\n\n    doclist = get_mapped_doc(\"Sauda Details\", source_name, {\n        \"Sauda Details\": {\n            \"doctype\": \"Sales Order\",\n            \"field_map\": {\n                \"name\": \"sauda_ref\",\n                \"shipment_to\": \"delivery_date\",\n            }\n        },\n    }, target_doc, set_missing_values)\n    return doclist`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Trigger the Function from a Custom Button",
            explanation: "Finally, add a custom button to your source DocType's form script (e.g., `Meeting Schedule.js`). This button will call the whitelisted server script function using `frappe.call`, passing the current document's name.",
            code: `frappe.ui.form.on('Meeting Schedule', {\n    refresh: function(frm) {\n        frm.add_custom_button(__('Create Meeting'), function() {\n            frappe.call({\n                method: 'my_app.my_app.api.make_meeting',\n                args: {\n                    source_name: frm.doc.name\n                },\n                callback: function(r) {\n                    if (r.message) {\n                        frappe.set_route('Form', r.message.doctype, r.message.name);\n                    }\n                }\n            });\n        });\n    }\n});`,
            language: "javascript"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The frappe.call from the client-side fails with an error indicating the method module cannot be found.",
            solution: "Ensure the Python method path in your `frappe.call` is correct. It should be in the format 'app_name.path.to.file.function_name'. Also, make sure you have run `bench restart` after adding the new Python file or function to your app."
          },
          {
            problem: "Some fields from the source document are not appearing in the newly created target document.",
            solution: "Double-check your `field_map` configuration. The keys should be the fieldnames from the source DocType and the values should be the fieldnames from the target DocType. Also, verify that the field types are compatible between the source and target fields."
          },
          {
            problem: "Child table data is missing.",
            solution: "Mapping child tables often requires a custom `set_missing_values` function passed as the last argument to `get_mapped_doc`. Ensure your function correctly iterates through source data and uses `target.append('child_table_fieldname', {...})` to create new rows in the target child table."
          }
        ]}
      />
    </main>
  );
};

export default CreateMappedDocumentPage;
