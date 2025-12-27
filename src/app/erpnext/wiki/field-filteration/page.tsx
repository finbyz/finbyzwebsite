import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const FieldFiltrationPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Dynamically Filter Link Fields in Frappe ERPNext"
        description="Learn how to apply dynamic filters to Link and Child Table fields in Frappe ERPNext using the get_query method in custom Client Scripts for context-aware selections."
        snippetName="Field Filtration"
        language="javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In ERP systems like Frappe and ERPNext, ensuring data integrity and improving user experience often involves guiding users to select the correct records. A common requirement is to filter the options in a 'Link' field based on other data entered on the form. For instance, you might want to show only the invoices belonging to a selected customer.",
          "Frappe provides a powerful client-side API, `get_query`, to achieve this. By overriding this function for a specific field, you can dynamically pass filters to the backend query that populates the Link field's dropdown, creating a context-aware and intuitive user interface."
        ]}
      />
      <CodeBlock 
        code={`// Example 1: Basic filter on a standard Link Field
// This code filters the 'topic_name' Link Field based on the value in the 'subject_name' field.
cur_frm.fields_dict.topic_name.get_query = function(doc) {
	return {
		filters: {
			"subject": doc.subject_name
		}
	}
};

// Example 2: Filtering a Link Field within a Child Table
// This script filters the 'batch_no' field inside the 'items' child table, based on the 'item_name' in the same row.
cur_frm.fields_dict.items.grid.get_field("batch_no").get_query = function(doc, cdt, cdn) {
	let row = locals[cdt][cdn];
	return {
		filters: {
			"item": row.item_name,
		}
	}
};`}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="These scripts dynamically filter the options available in a Link Field based on values from other fields in the current document, both on the main form and within child table rows."
        whenToUse="Use this in a Client Script, typically within the `onload` or a field's `onchange` event, whenever you need to restrict user selections in a Link Field to a context-specific subset of records."
        prerequisites={[
          "Basic understanding of Frappe DocTypes and fields.",
          "Familiarity with creating and attaching Client Scripts in ERPNext.",
          "Access to a Frappe development environment to apply the script."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "cur_frm",
            description: "A global object in Frappe's client-side scripting environment that represents the current form being viewed. It provides access to the form's data (doc), fields (fields_dict), and various methods to manipulate the form.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#cur_frm"
          },
          {
            title: "get_query",
            description: "A function property on a Link Field controller that can be overridden to customize the query used to fetch options for that field. It must return an object containing a 'filters' key.",
            relatedLink: "https://frappeframework.com/docs/user/en/guides/app-development/running-custom-queries-on-link-fields"
          },
          {
            title: "Link Field",
            description: "A Frappe field type that creates a link to another DocType, allowing users to select a record from that DocType. It is rendered as a dropdown with a search-as-you-type functionality.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/field-types#link"
          },
          {
            title: "Child Table (Grid)",
            description: "A field type that allows you to embed a table of records from another DocType (a Child DocType) within a parent form. Accessing fields within a child table requires navigating through the grid object.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/child-doctypes"
          }
        ]}
      />
      <StepByStepTutorial 
        steps={[
            {
                stepNumber: 1,
                title: "Create a New Client Script",
                explanation: "Navigate to the 'Client Script' list in your Frappe/ERPNext desk. Create a new script and select the DocType you want to apply the filter to. For example, if you are filtering fields on a Sales Invoice, select 'Sales Invoice'.",
                code: `// Select 'Sales Invoice' in the 'Select DocType' field in the Client Script form`,
                language: "bash"
            },
            {
                stepNumber: 2,
                title: "Apply a Basic Filter to a Main Form Field",
                explanation: "To filter a standard Link Field on the main form, access the field via `cur_frm.fields_dict`. In this example, we filter invoices to show only those matching the selected customer and that are submitted (`docstatus: 1`).",
                code: `frappe.ui.form.on('Sales Order', {
    refresh: function(frm) {
        frm.fields_dict.invoice_no.get_query = function(doc) {
            return {
                filters: {
                    'docstatus': 1,
                    'customer': doc.customer
                }
            }
        };
    }
});`,
                language: "javascript"
            },
            {
                stepNumber: 3,
                title: "Filter a Link Field Inside a Child Table",
                explanation: "Filtering a field in a child table (grid) is slightly different. You need to access the child table field first, then the grid, and finally use `get_field()` to target the specific field inside the table. The function receives `cdt` and `cdn` to get the current row's data from the `locals` dictionary.",
                code: `frappe.ui.form.on('Purchase Order', {
    refresh: function(frm) {
        frm.fields_dict.items.grid.get_field("batch_no").get_query = function(doc, cdt, cdn) {
            let item_row = locals[cdt][cdn];
            return {
                filters: {
                    'item': item_row.item_code, // Filter batches by the item in the current row
                    'warehouse': item_row.warehouse
                }
            };
        };
    }
});`,
                language: "javascript"
            },
            {
                stepNumber: 4,
                title: "Using 'IN' Operator for Multiple Values",
                explanation: "Instead of a key-value object, you can pass an array of arrays to the filters. This allows for more complex operators like 'in', 'not in', 'like', etc. This is useful for filtering against a predefined list of values.",
                code: `frappe.ui.form.on('Task', {
    refresh: function(frm) {
        frm.fields_dict.project.get_query = function(doc) {
            return {
                filters: [
                    ['project_type', 'in', ['Internal', 'Maintenance', 'Support']]
                ]
            };
        };
    }
});`,
                language: "javascript"
            }
        ]}
      />
      <Troubleshooting 
        items={[
            {
                problem: "Filter is not applying or no options are shown in the dropdown.",
                solution: "First, check for typos in all field names, both in your script and in the DocType definition. Use `console.log(doc)` or `console.log(row)` inside the `get_query` function to inspect the object in your browser's developer console. This ensures the source field (e.g., `doc.customer`) has a value when the query runs. Also, confirm that records matching your filter criteria actually exist in the target DocType."
            },
            {
                problem: "Console error: 'Cannot read property 'get_query' of undefined'",
                solution: "This error indicates that the path to your field is incorrect. For standard fields, double-check `cur_frm.fields_dict.your_field_name`. For child table fields, the path is longer and must be exact: `cur_frm.fields_dict.child_table_name.grid.get_field(\"link_field_in_child\")`. Verify all fieldnames against your DocType."
            },
            {
                problem: "The filter needs to be updated when another field changes.",
                solution: "Instead of attaching the script to the `refresh` or `onload` event, attach it to the `onchange` event of the source field. For example, `frm.set_query('invoice_no', function() { ... })` can be called inside the `customer` field's change event handler to re-apply the filter whenever the customer is changed."
            }
        ]}
      />
    </main>
  );
};

export default FieldFiltrationPage;
