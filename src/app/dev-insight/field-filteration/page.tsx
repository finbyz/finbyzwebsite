import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Field Filteration";
const language = "Frappe Client Script";
const category = "Frappe Form Customization";

const codeSnippet = `// This code filters topic_name on \"subject\"
cur_frm.fields_dict.topic_name.get_query = function(doc) {
	return {
		filters: {
			\"subject\": doc.subject_name
		}
	}
};

// filters invoice no based on customer
cur_frm.fields_dict.invoice_no.get_query = function(doc) {
	return {
		filters: {
			\"docstatus\": 1,
			\"customer\": doc.customer
		}
	}
};

// Filter Table Field \"tablefied_name\"
cur_frm.fields_dict.doctype_field_name.grid.get_field("tablefied_name").get_query = function(doc) {
	return {
		filters: {
			\"docstatus\": 1,
			\"supplier\": doc.supplier,
			\"company\": doc.company,
		}
	}
};

// eg.
cur_frm.fields_dict.invoices.grid.get_field("invoice_no").get_query = function(doc) {
	return {
		filters: {
			\"docstatus\": 1,
			\"supplier\": doc.supplier,
			\"company\": doc.company,
		}
	}
};

// In List Filter 
cur_frm.fields_dict.project.get_query = function(doc) {
	return {
		\"filters\": [
	   	["project_type", "in", ["Cloud Computing","IT Outsourcing, Full-Time","IT Outsourcing, Part-Time Enterprise Plus","IT Outsourcing, Part-Time Standard","IT Outsourcing, Part-Time Enterprise"]]
		]
	};
}; 

//Filter on child table
//Filter Batch no.
cur_frm.fields_dict.items.grid.get_field("batch_no").get_query = function(doc,cdt,cdn) {
	let d = locals[cdt][cdn];
	return {
		filters: {
			\"item\": d.item_name,
		}
	}
};

// filter in get value

frappe.db.exists("Stock Ledger Entry", {'company':self.company,'warehouse':row.get('t_warehouse'),'batch_no':row.batch_no,'voucher_no':('!=',self.name)})
`;

export default function FieldFilterationPage() {
  return (
    <>
      <CodeSnippetHero
        title="How to filter Link and Child Table fields dynamically in Frappe Client Script?"
        description="This problem involves filtering Link and Child Table fields based on parent DocType or row values in Frappe forms using get_query. The solution applies filters dynamically to ensure users only select relevant data."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When customizing Frappe forms, you often need dynamic filtering of Link fields or Child Table fields based on
          values from the parent DocType or the child table row itself. Without filtering, users might see irrelevant or too many options.
          <br />
          <strong>Solution:</strong> Use the <code>get_query</code> method on Frappe form fields to apply custom filters dynamically. The
          <code>get_query</code> function can access the current document (<code>doc</code>), and for child tables, the child row data
          (<code>locals[cdt][cdn]</code>) to build filter objects that limit query results.
          <br />
          This snippet shows multiple examples including filtering:
          <ul>
            <li>Link fields filtered by another field value</li>
            <li>Child Table Link fields using current row values</li>
            <li>Complex filters with multiple conditions and list matching</li>
          </ul>
          Note: The snippet does not include a formal description but covers typical use cases for Frappe client-side filtering.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Defines custom get_query functions on various Frappe form fields to filter their available options based on conditions. Filters may depend on values in the current form document or child table row data.
            It demonstrates filtering Link fields in standard and child table fields using dynamic filters in get_query."
        whenToUse="Use these patterns when you want to limit Link field options in a Frappe form dynamically so users select only valid or relevant entries. This avoids data errors and improves UX."
        prerequisites={[
          "Basic knowledge of Frappe forms and Link fields",
          "Understanding client scripts usage in Frappe",
          "Familiarity with JavaScript and filters syntax in get_query"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe get_query method",
            description:
              "The get_query method on form fields allows you to dynamically provide query filters so that the Link field shows filtered options.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#restrict-link-field-values-using-get_query"
          },
          {
            title: "Filtering Child Table Fields",
            description:
              "To filter child table link fields, get_query has access to cdt and cdn to retrieve specific child row data from locals.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#filtering-child-table-fields"
          },
          {
            title: "frappe.db.exists",
            description: "Checks the existence of a document matching filters, useful for validation and conditional logic in scripts.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/databases#exists"
          },
          {
            title: "Dynamic Filters in Frappe Forms",
            description:
              "Use filters in get_query as an object or array to specify exact or complex conditions for querying the linked DocType.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#filtering"
          },
          {
            title: "Dynamic filtering Using locals",
            description:
              "Use `locals[cdt][cdn]` to access child table row data needed for filtering fields inside those rows.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#working-with-child-tables"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Define get_query for a regular Link field",
            explanation:
              "Assign get_query to the Link field, return a filter object using values from the current parent form document (<code>doc</code>). This limits the Link field's options based on another field's value.",
            code: `cur_frm.fields_dict.topic_name.get_query = function(doc) {
  return {
    filters: { "subject": doc.subject_name }
  }
};`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Filter a Link field inside a Child Table",
            explanation:
              "Use get_query on a child table field by accessing it via <code>grid.get_field</code>. Access child row data with <code>locals[cdt][cdn]</code> to filter options based on the child's field values.",
            code: `cur_frm.fields_dict.items.grid.get_field("batch_no").get_query = function(doc, cdt, cdn) {
  let d = locals[cdt][cdn];
  return {
    filters: { "item": d.item_name }
  };
};`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Apply multiple conditions and array filters",
            explanation:
              "You can filter using multiple key-value filters or use array filters for complex conditions such as 'in' filters for lists of values.",
            code: `cur_frm.fields_dict.project.get_query = function(doc) {
  return {
    filters: [["project_type", "in", ["Cloud Computing","IT Outsourcing, Full-Time","IT Outsourcing, Part-Time Enterprise Plus"]]]
  };
};`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Use frappe.db.exists for additional validation",
            explanation:
              "frappe.db.exists is used in scripts to check if a record exists with certain conditions, helping avoid duplicates or invalid selections.",
            code: `frappe.db.exists("Stock Ledger Entry", {
  'company': self.company,
  'warehouse': row.get('t_warehouse'),
  'batch_no': row.batch_no,
  'voucher_no': ('!=', self.name)
});`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Filtered Link fields still show all records",
            solution: "Ensure get_query is defined correctly, is returning a filters object, and that field names match the DocType. Refresh the form after script changes."
          },
          {
            problem: "Child table filters don't restrict options as expected",
            solution: "Verify you access child row data with locals[cdt][cdn]. Check the field names and ensure cdt and cdn parameters are passed correctly."
          },
          {
            problem: "frappe.db.exists returns unexpected results or errors",
            solution: "Validate the filter syntax and correct use of operators. The filter dictionary keys must match field names exactly."
          }
        ]}
      />
    </>
  );
}
