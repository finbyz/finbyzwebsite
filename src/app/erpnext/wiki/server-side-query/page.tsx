import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetIntroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const ServerSideQueryPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Dynamically Filter Link Fields in ERPNext using Server-Side Queries"
        description="Learn to apply dynamic, context-aware filters to Link Fields in ERPNext Client Scripts using frm.set_query to call server-side Python methods."
        snippetName="Server Side Query"
        language="javascript"
        category="Frappe Client Script"
        accentColor="blue"
      />
      <CodeSnippetIntroduction
        paragraphs={[
          "In Frappe and ERPNext, Link Fields are powerful but often need to be filtered based on other data entered in the form. For example, you might want to show only contacts belonging to a selected customer, or items from a specific warehouse. Standard filters set in the DocType are static.",
          "The `frm.set_query` method in Frappe's client-side API provides a robust solution. It allows you to override the default search behavior of a Link Field and delegate the filtering logic to a custom, whitelisted Python method on the server. This enables dynamic, real-time filtering that can significantly improve user experience and data integrity."
        ]}
      />
      <CodeBlock
        code={`// Example 1: Filter Items in a Child Table based on a parent field
frm.set_query("item_code", "items", function(doc, cdt, cdn) {
    return {
        query: "erpnext.controllers.queries.item_query",
        filters: frm.doc.enquiry_type === "Maintenance" ?
            {"is_service_item": "Yes"} : {"is_sales_item": "Yes"}
    };
});


// Example 2: Filter Contacts based on a linked Supplier (Broker)
cur_frm.set_query("broker_contact", function() {
	if(cur_frm.doc.broker) {
		return {
			query: "frappe.contacts.doctype.contact.contact.contact_query",
			filters: { link_doctype: "Supplier", link_name: cur_frm.doc.broker } 
		};
	}
	else frappe.throw(__("Please set Broker"));
});


// Example 3: Filter Contacts in a Child Table based on parent Customer
cur_frm.set_query("contact", "escalations", function(doc, cdt, cdn) {
	return {
		query: "frappe.contacts.doctype.contact.contact.contact_query",
		filters: { link_doctype: "Customer", link_name: cur_frm.doc.customer } 
	};
});`}
        language="javascript"
        referenceLink="https://frappe.github.io/frappe/user/en/guides/app-development/overriding-link-query-by-custom-script.html"
        referenceLinkText="Official Frappe Framework Documentation"
        showLineNumbers={true}
      />
      <CodeOverview
        whatItDoes="This snippet demonstrates how to override the default query for a Link Field in a Frappe form. It allows you to apply dynamic filters by calling a server-side Python method that returns a filtered list of records based on other values in the current document."
        whenToUse="Use this in a Client Script, typically within the 'onload' or 'refresh' events, or on a field's 'change' event trigger. It's ideal when a Link Field's options need to be filtered based on real-time data from the form (e.g., filtering items by category, or contacts by linked customer)."
        prerequisites={["A basic understanding of Frappe Client Scripts.", "A whitelisted Python method on the server to handle the query logic."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frm.set_query",
            description: "A client-side Frappe API method used to override the default query for a Link Field. It can be applied to fields in the parent DocType or within a Child Table. It tells the system to call a specific server-side Python method for fetching the list of options.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/api/form#frmset_query"
          },
          {
            title: "Server-Side Query Method",
            description: "A whitelisted Python function that receives the query request from the client. It must be located in a Python file within your Frappe app and is responsible for building and returning a query that Frappe's list view can execute. It receives filters and text from the client.",
            relatedLink: "https://frappe.github.io/frappe/user/en/guides/app-development/overriding-link-query-by-custom-script.html"
          },
          {
            title: "Whitelisting (@frappe.whitelist)",
            description: "A security decorator in Frappe that exposes a Python function to be callable from the client-side (e.g., via AJAX calls or set_query). Without this decorator, the server will reject the request.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/basics/server_side_scripting#whitelisted-functions"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the Target Field and Trigger",
            explanation: "First, determine which Link Field you want to filter and when the filter should be applied. In our example, we'll filter the 'item_code' field inside the 'items' child table. The filter logic depends on the 'enquiry_type' field in the parent document, so we'll trigger this on form load or refresh.",
            code: `// Target field: 'item_code'\n// Child Table (if applicable): 'items'\n// Triggering field: 'enquiry_type' change or form refresh`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Create the Client Script",
            explanation: "In your DocType, create a new Client Script. Use the `frappe.ui.form.on` hook to attach your code to an event like 'refresh'. Inside, call `frm.set_query`. The first argument is the field name, the second is the child table name (if applicable), and the third is a function that returns the query object.",
            code: `frappe.ui.form.on('Your DocType', {
    refresh: function(frm) {
        frm.set_query("item_code", "items", function(doc, cdt, cdn) {
            // Query logic will go here
        });
    }
});`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Define the Server-Side Query Path and Filters",
            explanation: "Inside the function, return an object containing the 'query' path to your Python method and a 'filters' object. The filters object is a dictionary of key-value pairs that will be passed to your server-side method.",
            code: `frm.set_query("item_code", "items", function() {
    return {
        query: "erpnext.controllers.queries.item_query",
        filters: {
            'is_service_item': frm.doc.enquiry_type === "Maintenance" ? 1 : 0,
            'is_sales_item': frm.doc.enquiry_type === "Sales" ? 1 : 0
        }
    };
});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Implement the Python Method (Server-Side)",
            explanation: "In the specified Python file (e.g., erpnext/controllers/queries.py), create the function. It must be decorated with @frappe.whitelist(). The function receives the 'filters' dictionary from the client. Use these filters to build your database query.",
            code: `import frappe

@frappe.whitelist()
@frappe.validate_and_sanitize_search_inputs
def item_query(doctype, txt, searchfield, start, page_len, filters):
    conditions = []
    if filters.get("is_service_item"):
        conditions.append("is_service_item = 1")
    if filters.get("is_sales_item"):
        conditions.append("is_sales_item = 1")

    # Example of a simple SQL query construction
    # In production, use frappe.get_list for better permission handling
    return frappe.db.sql(f\"\"\"SELECT name, item_name, description 
        FROM \`tabItem\` 
        WHERE {' AND '.join(conditions)} AND (\`tabItem\`.\`{searchfield}\` LIKE %(txt)s) 
        ORDER BY \`tabItem\`.\`idx\` DESC, \`tabItem\`.\`name\` ASC
        LIMIT %(page_len)s OFFSET %(start)s\"\"\", {
            'txt': f'%{txt}%',
            'start': start,
            'page_len': page_len,
        })`,
            language: "python"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Filter is not applying, and the link field shows all records.",
            solution: "Ensure your Client Script is correctly attached to the DocType and is enabled. Check the browser's developer console (F12) for any JavaScript errors. Verify that the field names and child table names in `set_query` are correct. Also, make sure the Python method path is accurate and the method is whitelisted with `@frappe.whitelist()`."
          },
          {
            problem: "Error in console: 'Not a valid query' or 'Method not found'.",
            solution: "This means the Python method path in the 'query' key is incorrect or the method is not whitelisted. Double-check the dotted path ('app_name.module.filename.method_name'). After adding `@frappe.whitelist()`, you must run `bench migrate` or `bench restart` for the changes to take effect."
          },
          {
            problem: "Getting a permissions error when the query runs.",
            solution: "The server-side query method still respects user permissions. The user must have read access to the target DocType ('Item' in this case). It is best practice to use `frappe.get_list` inside your Python function instead of `frappe.db.sql`, as `get_list` automatically applies permission checks."
          }
        ]}
      />
    </main>
  );
};

export default ServerSideQueryPage;
