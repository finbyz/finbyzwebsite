"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetCode = `// This code filters topic_name on \"subject\"
cur_frm.fields_dict.topic_name.get_query = function(doc) {
	return {
		filters: {
			\"subject\": doc.subject_name
		}
	}
};

// Example 2: filters invoice no based on customer
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

// Example: Filtering invoice_no field inside grid
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

// Filter on child table
// Filter Batch no.
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

export default function Page() {
  return (
    <>
      <CodeSnippetHero
        title="How to dynamically filter form fields based on related data in JavaScript?"
        description="This solution demonstrates how to implement dynamic filters on form fields in JavaScript by customizing the get_query method, enabling you to filter options based on contextual data like linked fields or child table rows."
        snippetName="Field Filteration"
        language="Javascript"
        category="Form Filtering"
        accentColor="blue"
      />

      <section className="container-custom py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          This code snippet illustrates how to apply dynamic filtering to form fields in JavaScript, particularly useful in ERP or CRM systems with complex forms. It leverages the <code>get_query</code> function to tailor the available options of a field based on the current document's state or related fields.
          Such filtering helps improve data entry accuracy and user experience by showing only relevant options filtered by criteria like related customers, suppliers, document status, or child table fields.
          The snippet covers various scenarios including filtering on single fields, table fields inside grid forms, list filters with multiple conditions, and filtering in child tables.
        </p>
      </section>

      <CodeBlock
        code={snippetCode}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://frappeframework.com/docs/user/en/api/client-side-scripting#filters"
        referenceLinkText="Frappe get_query Filters Documentation"
      />

      <CodeOverview
        whatItDoes="Provides flexible filtering of form fields dynamically in JavaScript by customizing the get_query methods to return filters tailored to the current document context."
        whenToUse="Use this when you want to restrict form field options based on other field values or the document's data, such as filtering invoices by customer or filtering batch numbers in child tables."
        prerequisites={[
          "Understanding of JavaScript client scripting",
          "Basic knowledge of ERPNext/Frappe client-side methods",
          "Familiarity with form structures including child tables"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "get_query",
            description: "A client-side method used to dynamically add filter conditions to link fields or table fields in the form.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-side-scripting#get_query"
          },
          {
            title: "Filters object",
            description: "An object or array of conditions defining which records to show based on linked field values or other criteria.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-side-scripting#filters"
          },
          {
            title: "Child Table Filtering",
            description: "Filtering selections inside child table rows by accessing local child document data.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-side-scripting#child-table-fields"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Understand the form fields",
            explanation: "Identify which fields need dynamic filtering based on other fields or table contexts.",
            code: "cur_frm.fields_dict.topic_name.get_query = function(doc) {\n  return { filters: { \"subject\": doc.subject_name } };\n};",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Filter table fields inside grid",
            explanation: "Access grid fields and apply filters similarly to restrict options in table cells.",
            code: "cur_frm.fields_dict.invoices.grid.get_field(\"invoice_no\").get_query = function(doc) {\n  return { filters: { \"docstatus\": 1, \"supplier\": doc.supplier, \"company\": doc.company } };\n};",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Filter child table fields",
            explanation: "Use child doc locals to filter fields inside child table rows dynamically.",
            code: "cur_frm.fields_dict.items.grid.get_field(\"batch_no\").get_query = function(doc, cdt, cdn) {\n  let d = locals[cdt][cdn];\n  return { filters: { \"item\": d.item_name } };\n};",
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Use list filters",
            explanation: "Pass complex filters arrays to restrict list field options based on multiple conditions or inclusion lists.",
            code: "cur_frm.fields_dict.project.get_query = function(doc) {\n  return { filters: [[\"project_type\", \"in\", [\"Cloud Computing\", \"IT Outsourcing, Full-Time\", \"IT Outsourcing, Part-Time Enterprise Plus\"]]] };\n};",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Filters not applying on the field",
            solution: "Ensure get_query function is assigned correctly and that the field names in filters match the linked doctype fields exactly."
          },
          {
            problem: "Filtered results are empty or incorrect",
            solution: "Verify the filter conditions reference valid document properties or local child table data, and confirm data types match."
          },
          {
            problem: "No options showing on child table field",
            solution: "Make sure to use correct cdt and cdn parameters to access child row data via locals in get_query."
          }
        ]}
      />
    </>
  );
}
