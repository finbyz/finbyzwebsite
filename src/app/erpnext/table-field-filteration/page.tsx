import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetIntroduction from "@/components/code-snippets/code-introduction";

export default function CodeSnippetPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Dynamically Filter Link Fields in a Frappe/ERPNext Child Table"
        description="Learn how to apply dynamic filters to Link Fields within a child table (Grid) in Frappe ERPNext using the get_query client script method. This snippet demonstrates filtering based on parent document fields and static values."
        snippetName="Table Field Filteration"
        language="JavaScript"
        category="ERPNext Customization"
        accentColor="orange"
      />
      <CodeSnippetIntroduction
        paragraphs={[
          "In Frappe and ERPNext development, a common requirement is to filter the options available in a Link Field within a child table (Grid). This ensures data integrity and improves the user experience by only showing relevant choices. For example, when selecting invoices in a payment entry, you should only see invoices belonging to the selected supplier.",
          "This is achieved using a Client Script and the `get_query` method. By assigning a function to this method, you can dynamically pass filters to the backend query that populates the Link Field, often using values from the parent document."
        ]}
       />
      <CodeBlock
        language="javascript"
        code={`// Example 1: Filtering based on parent document fields
// Filters 'invoice_no' in the 'invoices' child table
cur_frm.fields_dict.invoices.grid.get_field("invoice_no").get_query = function(doc) {
	return {
		filters: {
			"docstatus": 1, // Only show submitted invoices
			"supplier": doc.supplier, // Match parent's supplier
			"company": doc.company, // Match parent's company
		}
	}
};

// Example 2: Filtering based on a static value
// Filters 'item' in 'container_details' table to only show 'Spares'
cur_frm.fields_dict.container_details.grid.get_field("item").get_query = function(doc) {
	return {
		filters: {
			"item_group": "Spares"
		}
	}
};

// Example 3: Filtering using an 'IN' condition with an array
// Filters 'main_item' in the 'items' table based on a list of allowed items
cur_frm.fields_dict.items.grid.get_field("main_item").get_query = function(doc) {
    // item_list would be defined elsewhere in your script
    let item_list = ["ITEM-001", "ITEM-002", "ITEM-003"];
	return {
		"filters": [
		  	["Item", "item_code", "in", item_list]
		]
	};
};`}
      />
      <CodeOverview
        whatItDoes="This script applies dynamic server-side filters to Link Fields within various child tables (Grids) of a Frappe DocType. It uses the `get_query` method to restrict the selectable options based on values from the parent document or predefined conditions."
        whenToUse="Use this script within a Client Script that is attached to a DocType. It's typically placed within the `onload` or `refresh` events to ensure the filters are applied as soon as the form loads or is refreshed."
        prerequisites={[
          "Basic understanding of Frappe DocTypes and Child Tables.",
          "Familiarity with Frappe Client Scripting."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "cur_frm Object",
            description: "The \"cur_frm\" (current form) object is a global client-side object in Frappe that provides access to the current form's data (doc), metadata (meta), and methods. It's the primary way to interact with a form's fields and triggers.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#cur_frm"
          },
          {
            title: "get_query Method",
            description: "The `get_query` method allows you to override the default query for a Link Field. By defining a function for it, you can return a dictionary of filters that will be passed to the server-side call that fetches the list of options.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/overriding-link-query-by-custom-script"
          },
          {
            title: "Child Tables (Grids)",
            description: "In Frappe, a Child Table (rendered as a Grid) allows you to store multiple records linked to a parent document. Accessing fields within a grid from a Client Script is done via `cur_frm.fields_dict.[child_table_fieldname].grid`.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/doctypes/child-doctype"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Target DocType and Fields",
            explanation: "First, determine the parent DocType you are working on. Then, identify the fieldname of the child table and the fieldname of the Link Field inside that child table that you want to filter.",
            code: `// Parent DocType: e.g., 'Payment Entry'\n// Child Table Fieldname: e.g., 'invoices'\n// Link Field in Child Table: e.g., 'invoice_no'`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create a New Client Script",
            explanation: "Navigate to 'Client Script' from the Awesome Bar. Click 'New' and select the DocType you identified in Step 1. This script will contain your custom filter logic.",
            code: `// In Frappe Desk:\n// 1. Go to Client Script List\n// 2. Click 'New'\n// 3. Select DocType: 'Payment Entry'`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Implement the get_query Logic",
            explanation: "Inside the `onload` or `refresh` event of the Client Script, write the `get_query` function. This example filters the 'invoice_no' field in the 'invoices' child table based on the parent document's 'supplier' and 'company'.",
            code: `frappe.ui.form.on('Payment Entry', {\n    refresh: function(frm) {\n        frm.fields_dict.invoices.grid.get_field("invoice_no").get_query = function(doc) {\n            // Check if supplier is set on the parent doc\n            if (doc.supplier) {\n                return {\n                    filters: {\n                        "supplier": doc.supplier,\n                        "company": doc.company,\n                        "docstatus": 1\n                    }\n                };\n            }\n        };\n    }\n});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Advanced Filtering with 'IN' Clause",
            explanation: "For more complex scenarios, you can use a list of values. This example shows how to filter the 'main_item' field to only show items whose 'item_code' is present in a pre-defined list.",
            code: `frappe.ui.form.on('Your DocType', {\n    refresh: function(frm) {\n        // Assume item_list is populated elsewhere in your script\n        let item_list = ["ITEM-001", "ITEM-002", "ITEM-003"];\n\n        frm.fields_dict.items.grid.get_field("main_item").get_query = function(doc) {\n            return {\n                "filters": [\n                      [\"Item\", \"item_code\", \"in\", item_list]\n                ]\n            };\n        };\n    }\n});`,
            language: "javascript"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The filter is not being applied, and I can see all records in the Link Field.",
            solution: "Ensure the Client Script is attached to the correct DocType and is enabled. Check for any JavaScript errors in the browser's console (F12). Also, verify that the fieldnames for the child table and the link field are correct. The logic should be placed inside an `onload` or `refresh` event to execute when the form loads."
          },
          {
            problem: "I get a JavaScript error like 'Cannot read properties of undefined (reading 'grid')'.",
            solution: "This error means `cur_frm.fields_dict.[your_child_table_fieldname]` is undefined. Double-check that the fieldname for your child table is spelled correctly in your script. It must match the 'Fieldname' in the DocType definition exactly."
          },
          {
            problem: "My filter based on a parent document field (e.g., `doc.supplier`) is not working.",
            solution: "Make sure the parent document field (`supplier` in this case) has a value *before* the filter is triggered. If the field is set by the user, you may need to define the `get_query` inside that field's change event trigger (e.g., `frappe.ui.form.on('Your DocType', { supplier: function(frm) { ... } })`) to re-apply the filter."
          }
        ]}
      />
    </main>
  );
}
