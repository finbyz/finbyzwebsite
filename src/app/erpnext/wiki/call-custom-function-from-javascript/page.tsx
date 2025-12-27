import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const clientScriptCode = `// On Parent Field
cur_frm.set_query("select_item", function(doc, cdt, cdn) {

	frappe.call({
		method: "eie.api.get_item_code",
		args: {
			doc: cur_frm.doc.name
		}
	});
	return {
		query: "eie.api.item_code_query"
		
	};
	
});

// On Child Table Field. 'items' is the child table fieldname
cur_frm.set_query("main_item", "items", function(doc, cdt, cdn) {

	frappe.call({
		method: "eie.api.get_item_code",
		args: {
			doc: cur_frm.doc.name
		}
	});
	return {
		query: "eie.api.item_code_query"
		
	};
	
});`;

const serverScriptCode = `from __future__ import unicode_literals
import frappe
from frappe import _


@frappe.whitelist()
def get_item_code(doc):
	# Assuming the DocType is 'Quotation'
	quote = frappe.get_doc("Quotation", doc)
	
	# NOTE: Using a global variable is not recommended in production due to concurrency issues.
	# See Troubleshooting section for a better approach using frappe.cache.
	global item_list
	item_list = []
	
	for row in quote.items:
		# Example logic: add item_code to list if 'main_item' is not set
		if not row.main_item:
			item_list.append(row.item_code)
				

@frappe.whitelist()
def item_code_query(doctype, txt, searchfield, start, page_len, filters):
    # This function simply returns the list prepared by get_item_code
    # The 'filters' argument is passed by set_query but not used here.
    # The global variable 'item_list' is accessed here.
    if txt:
        return [item for item in item_list if txt.lower() in item.lower()]
    return item_list`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Call a Python Function from a Client Script for set_query in ERPNext"
        description="Learn to dynamically filter a Link Field in Frappe/ERPNext by calling a whitelisted Python server method from a Client Script using frappe.call and cur_frm.set_query. This is ideal for filters requiring complex server-side logic."
        snippetName="Call Custom Function from Javascript"
        language="Javascript"
        category="Frappe Client Scripting"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
            "In Frappe and ERPNext, `cur_frm.set_query` is a powerful client-side method used to apply dynamic filters to Link and Dynamic Link fields. However, its query parameter can only point to a server method and cannot pass dynamic arguments directly from the form.",
            "This code snippet demonstrates a common and effective pattern to overcome this limitation. It uses `frappe.call` to execute a preparatory server-side Python function with dynamic arguments (like the current document's name). This function processes the required logic and stores the results. The `set_query` then points to a second, simpler Python function that retrieves and returns these prepared results, effectively creating a dynamic, context-aware filter."
        ]}
      />

      <CodeBlock
        code={clientScriptCode}
        language="javascript"
        fileName="your_doctype.js"
        allowCopy
        showLineNumbers
      />
      <CodeBlock
        code={serverScriptCode}
        language="python"
        fileName="api.py"
        allowCopy
        showLineNumbers
      />

      <CodeOverview
        whatItDoes="Applies a dynamic, server-side filter to a Link Field on both a parent document and within a child table by executing custom Python logic."
        whenToUse="Use this pattern when a Link Field's filter depends on complex logic that must be executed on the server, such as checking data in other documents or processing values from the current form's child table before displaying options."
        prerequisites={[
          "A custom Frappe app where you can add server-side Python scripts.",
          "A DocType with a Link Field that requires dynamic filtering.",
          "Basic understanding of Frappe Client Scripts and whitelisted server methods."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "cur_frm.set_query",
            description: "A client-side API in Frappe used to define a dynamic query for Link or Dynamic Link fields. It returns an object containing the path to a whitelisted Python function that will provide the filtered list of options.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form_api#frappeuiinformcur_frmset_query"
          },
          {
            title: "frappe.call",
            description: "The primary method for making synchronous or asynchronous calls from the client-side (Javascript) to the server-side (Python). It's essential for triggering server logic from form events.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/rest_api#frappecall"
          },
          {
            title: "@frappe.whitelist()",
            description: "A Python decorator that exposes a server-side function, making it accessible from the client-side via `frappe.call` or other API endpoints. Any function called from the client must be whitelisted.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/server_side_api#frappewhitelist"
          },
          {
            title: "Client-Server Interaction Pattern",
            description: "This snippet uses a two-step pattern: `frappe.call` runs a function to prepare data with context (e.g., doc name), and `set_query` calls another function to retrieve that prepared data. This decouples data preparation from data retrieval, working around `set_query`'s limitations.",
            relatedLink: "https://frappeframework.com/docs/user/en/guides/app-development/server-scripts"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create the Server-Side Python File",
            explanation: "In your custom Frappe app (e.g., 'eie'), create a file named `api.py` inside the app's main module directory (e.g., `eie/api.py`). This file will house our whitelisted Python functions.",
            code: `# eie/api.py\n\nfrom __future__ import unicode_literals\nimport frappe\n\n# Functions will be added here`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Define the Data Preparation Function",
            explanation: "Add the `get_item_code` function to `api.py`. This function is whitelisted to be callable from the client. It takes the document name as an argument, fetches the full document, performs the filtering logic, and stores the result in a global variable.",
            code: `@frappe.whitelist()\ndef get_item_code(doc):\n\tquote = frappe.get_doc("Quotation", doc)\n\t\n\tglobal item_list\n\titem_list = []\n\t\n\tfor row in quote.items:\n\t\tif not row.main_item:\n\t\t	item_list.append(row.item_code)`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Define the Query Function",
            explanation: "Add the `item_code_query` function to `api.py`. This is the function that `set_query` will call directly. It takes standard arguments from `set_query` and simply returns the data prepared by `get_item_code`.",
            code: `@frappe.whitelist()\ndef item_code_query(doctype, txt, searchfield, start, page_len, filters):\n\t# This function simply returns the list prepared by get_item_code\n\t# You can add search logic based on 'txt' for better UX\n\tif txt:\n\t\treturn [item for item in item_list if txt.lower() in item.lower()]\n\treturn item_list`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Implement the Client Script",
            explanation: "Create a new Client Script and apply it to your DocType. In the script, use `cur_frm.set_query` for the desired Link Field. The function will first use `frappe.call` to execute your data preparation function, then return the path to your query function.",
            code: `// Attach to a form event like 'onload' or a field's 'change' event\nfrappe.ui.form.on('Quotation', {\n    refresh: function(frm) {\n        // Setup query for a parent field\n        frm.set_query("select_item", function(doc, cdt, cdn) {\n            frappe.call({
                method: "eie.api.get_item_code",
                args: { doc: doc.name }
            });
            return { query: "eie.api.item_code_query" };
        });

        // Setup query for a child table field\n        frm.set_query("main_item", "items", function(doc, cdt, cdn) {\n            frappe.call({
                method: "eie.api.get_item_code",
                args: { doc: doc.name }
            });
            return { query: "eie.api.item_code_query" };
        });\n    }\n});`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The Link Field filter is not working, and there are no console errors.",
            solution: "Ensure your Python methods are correctly decorated with `@frappe.whitelist()`. After making changes to Python files, you must run `bench restart` for the server to pick them up. Also, verify the dotted path in your scripts (e.g., 'eie.api.get_item_code') matches your app and file name exactly."
          },
          {
            problem: "A 'PermissionError: Not permitted' error appears in the browser console.",
            solution: "This error explicitly means the Python method being called is not whitelisted. Double-check that the `@frappe.whitelist()` decorator is placed directly above the function definition for both `get_item_code` and `item_code_query`."
          },
          {
            problem: "The filter shows incorrect or outdated data, especially with multiple users.",
            solution: "Using a global variable is not safe for concurrent users. A more robust solution is to use Frappe's cache. Modify your Python script to use `frappe.cache().set(doc, item_list)` in `get_item_code` and `frappe.cache().get(doc)` in `item_code_query`. This isolates the data for each document."
          }
        ]}
      />
    </main>
  );
}
