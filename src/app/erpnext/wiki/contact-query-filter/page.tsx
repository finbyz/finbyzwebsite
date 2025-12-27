import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CodeSnippetPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Set Dynamic Query Filters for Contact Link Fields in Frappe"
        description="Learn to apply dynamic filters to Contact link fields in Frappe/ERPNext using the cur_frm.set_query client script method for both parent and child table fields."
        snippetName="Contact Query Filter"
        language="Javascript"
        category="Frappe Client Script"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe ERPNext, providing users with relevant choices in Link Fields is crucial for data accuracy and user experience. The `cur_frm.set_query` method is the standard way to dynamically filter the list of records that appear in a Link Field dropdown.",
          "This snippet provides two powerful examples. The first demonstrates how to filter a standard Link Field on the main form. The second, more advanced example, shows how to apply a filter to a Link Field inside a Child Table, ensuring context-aware selections in complex forms."
        ]}
      />
      <CodeBlock
        code={`// Contact Query for a field on the parent document
cur_frm.set_query("broker_contact", function() {
	if(cur_frm.doc.broker) {
		return {
			query: "frappe.contacts.doctype.contact.contact.contact_query",
			filters: { link_doctype: "Supplier", link_name: cur_frm.doc.broker } 
		};
	}
	else frappe.throw(__("Please set Broker"));
});

// Contact query for a field within a Child Table
cur_frm.set_query("contact", "escalations", function(doc, cdt, cdn) {
	return {
		query: "frappe.contacts.doctype.contact.contact.contact_query",
		filters: { link_doctype: "Customer", link_name: cur_frm.doc.customer } 
	};
});`}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This script dynamically filters the list of selectable contacts in two different Link Fields. The first filter applies to a parent field named 'broker_contact', and the second applies to a 'contact' field within a child table named 'escalations'."
        whenToUse="Use this script in the 'onload' or 'refresh' event of a DocType's client script to apply filters when the form loads. It can also be used in a field's 'onchange' event to re-apply filters when a dependent value changes (e.g., when the 'broker' or 'customer' field is set)."
        prerequisites={[
          "A DocType with a 'Link' field pointing to the 'Contact' DocType.",
          "Basic understanding of Frappe Client Scripting and the DocType form structure.",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "cur_frm.set_query",
            description: "A fundamental Form API method in Frappe used to apply filters to Link and Dynamic Link fields. It takes the fieldname, an optional child table name, and a function that must return a query object with filters.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#cur_frmset_query",
          },
          {
            title: "Contact Query Path",
            description: "`frappe.contacts.doctype.contact.contact.contact_query` is a built-in whitelisted Python method specifically for fetching contacts. It standardizes filtering by a linked document, requiring `link_doctype` and `link_name` in the filters object.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/server-scripting/whitelisted-methods",
          },
          {
            title: "Child Table Scripting",
            description: "When using `set_query` on a child table field, you must provide the child table's fieldname as the second argument. The callback function then receives three arguments: `doc` (the current row's data object), `cdt` (Child DocType), and `cdn` (Child DocName/row ID).",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/client-scripting#child-table-or-table-multiselect-fields",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create a New Client Script",
            explanation: "Navigate to the DocType list, select the DocType you want to modify, and scroll down to the 'Client Scripts' section. Click 'Add New' to create a new Client Script.",
            code: `// Example: Navigate to 'Sales Order' DocType > Client Scripts > Add New`,
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Filter the Parent Link Field",
            explanation: "Add the first part of the script. This code targets the 'broker_contact' field. It checks if the 'broker' field (a Link to a Supplier) is set. If so, it filters the contacts to show only those linked to that specific supplier.",
            code: `cur_frm.set_query("broker_contact", function() {\n\tif(cur_frm.doc.broker) {\n\t\treturn {\n\t\t\tquery: "frappe.contacts.doctype.contact.contact.contact_query",\n\t\t\tfilters: { link_doctype: "Supplier", link_name: cur_frm.doc.broker } \n\t\t};\n\t}\n\telse frappe.throw(__("Please set Broker"));\n});`,
            language: "javascript",
          },
          {
            stepNumber: 3,
            title: "Filter the Child Table Link Field",
            explanation: "Add the second part of the script. This targets a 'contact' field inside a child table named 'escalations'. It filters the contacts to show only those linked to the main document's selected 'customer'. Note the use of `cur_frm.doc.customer` to access the parent document's data.",
            code: `cur_frm.set_query("contact", "escalations", function(doc, cdt, cdn) {\n\treturn {\n\t\tquery: "frappe.contacts.doctype.contact.contact.contact_query",\n\t\tfilters: { link_doctype: "Customer", link_name: cur_frm.doc.customer } \n\t};\n});`,
            language: "javascript",
          },
          {
            stepNumber: 4,
            title: "Save and Test",
            explanation: "Save the Client Script and clear your browser cache (Ctrl+Shift+R). Open a new form for your DocType. The 'broker_contact' and child table 'contact' fields should now be filtered based on the values in the 'broker' and 'customer' fields respectively.",
            code: `// No code needed for this step. Just test the form functionality.`,
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The filter is not working, and I can see all contacts.",
            solution: "Verify that the field names in your script (e.g., 'broker_contact', 'escalations', 'customer') exactly match the field names in your DocType. Check the browser's developer console (F12) for any JavaScript errors that might be preventing the script from running.",
          },
          {
            problem: "I get a 'Please set Broker' error even when the Broker is selected.",
            solution: "This can happen if the script runs before the broker's value is set. Ensure your script is running on a suitable trigger like 'refresh' or, even better, on the 'onchange' event of the 'broker' field itself.",
          },
          {
            problem: "The child table filter isn't applying correctly.",
            solution: "Double-check that the second argument in `set_query` is the correct fieldname for your child table (in this case, 'escalations'). Also, ensure that the parent document's field (`cur_frm.doc.customer`) has a value when you are interacting with the child table.",
          },
        ]}
      />
    </main>
  );
}
