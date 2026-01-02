import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const SnippetPage = () => {

  const code = `@frappe.whitelist()
def get_purchase(item, broker_name, supplier_name):
	
	where_clause = ''
	where_clause += item and " and items = '%s'" % \
		item.replace("'", "\\'") or ""
	where_clause += broker_name and " and broker_name = '%s'" % \
		broker_name.replace("'", "\\'") or ""
	where_clause += supplier_name and " and supplier_name = '%s'" % \
		supplier_name.replace("'", "\\'") or ""
			
	return frappe.db.sql("""select name, items, date, lorry_no, bags, rate, gross_wt, net_wt, moisture, amount, tax_amount, after_tax_amount, after_commission_amount from \`tabShivshakti Purchases\` where status="Pending"
		%s""" % where_clause, as_dict=1)`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Build a Dynamic SQL WHERE Clause in a Frappe Server Script"
        description="Learn how to create flexible server-side APIs in Frappe by dynamically constructing SQL WHERE clauses based on user input. This snippet uses frappe.whitelist and frappe.db.sql."
        snippetName="Using Where Clause in SQL"
        language="Python"
        category="Frappe Server Scripting"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe and ERPNext development, it's often necessary to fetch data based on multiple, optional filters provided by the user. Hardcoding every possible filter combination is inefficient. A more robust approach is to dynamically build the SQL `WHERE` clause in a server script.",
          "This code demonstrates a common pattern for creating a whitelisted Python method that constructs a `WHERE` clause by appending conditions only if the corresponding filter values are provided. This allows for creating flexible and powerful server-side APIs for your custom applications.",
          "<strong>Important Security Note:</strong> This method of string formatting to build SQL queries is highly vulnerable to SQL Injection. The example is provided for educational purposes to understand the logic, but for production, you MUST use parameterized queries as explained in the Troubleshooting section."
        ]}
      />
      <CodeBlock
        code={code}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This server script defines a whitelisted function that dynamically constructs a SQL WHERE clause to filter records from a custom DocType based on optional parameters."
        whenToUse="Use this pattern when creating server-side APIs for reports or client scripts that require filtering on a variable number of optional fields."
        prerequisites={["A custom Frappe app", "A DocType (e.g., `Shivshakti Purchases`) with the required fields."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "@frappe.whitelist()",
            description: "A decorator that exposes a Python function as a public API endpoint. This allows it to be called from the client-side (e.g., using `frappe.call`) without the user needing special permissions, although standard DocType permission checks still apply.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/server-script#whitelisted-functions"
          },
          {
            title: "frappe.db.sql()",
            description: "The primary method for executing raw SQL queries in Frappe. It's powerful but must be used with caution to avoid SQL injection vulnerabilities. Always use the `values` parameter to pass user input safely.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappedbsql"
          },
          {
            title: "Dynamic Query Building",
            description: "The practice of constructing a query string programmatically based on variable inputs. While flexible, it requires careful handling of user input to prevent security risks like SQL injection. The safest method is to build a list of conditions and use parameterized queries.",
            relatedLink: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Set Up the Server Script",
            explanation: "In your custom Frappe app, create a new Python file or open an existing one for your API logic (e.g., `my_app/api.py`). Use the `@frappe.whitelist()` decorator to expose your function.",
            code: `import frappe\n\n@frappe.whitelist()\ndef get_purchase(item, broker_name, supplier_name):\n    # Function logic will go here`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Initialize a WHERE Clause String",
            explanation: "Create an empty string. This string will be appended with SQL conditions based on the function's arguments.",
            code: `where_clause = ''`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Conditionally Append Filters",
            explanation: "For each potential filter, check if an argument was provided. If it exists, append the corresponding SQL condition to the `where_clause` string. Note the leading 'and' which is necessary for chaining conditions.",
            code: `where_clause += item and " and items = '%s'" % item.replace("'", "\\'") or ""\nwhere_clause += broker_name and " and broker_name = '%s'" % broker_name.replace("'", "\\'") or ""\nwhere_clause += supplier_name and " and supplier_name = '%s'" % supplier_name.replace("'", "\\'") or ""`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Execute the Full Query",
            explanation: "Construct the final SQL query by combining the base select statement with your dynamic `where_clause`. Use `frappe.db.sql` to execute it and return the data `as_dict=1`.",
            code: `return frappe.db.sql("""SELECT name, items, date \nFROM \`tabShivshakti Purchases\` \nWHERE status="Pending" %s""" % where_clause, as_dict=1)`,
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Call from a Client Script (Example)",
            explanation: "You can now call this server script from the client-side using `frappe.call`. Pass your filter values in the `args` dictionary.",
            code: `frappe.call({\n    method: 'my_app.api.get_purchase',\n    args: {\n        item: 'Raw Cotton',\n        broker_name: '', // Leave empty to ignore filter\n        supplier_name: 'Example Supplier'\n    },\n    callback: function(response) {\n        if (response.message) {\n            console.log(response.message);\n        }\n    }\n});`,
            language: "javascript"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The code is vulnerable to SQL Injection.",
            solution: "The current method of string formatting (`%s`) is unsafe. You must use parameterized queries. Re-write the function to pass user input in the `values` argument of `frappe.db.sql`. This separates the query logic from the data, preventing malicious input from altering the query."
          },
          {
            problem: "The query fails with a SQL syntax error when filters are applied.",
            solution: "This happens because the dynamic `where_clause` starts with 'and'. Your base query needs a static `WHERE` condition to correctly chain the dynamic parts. A common trick is to use `WHERE 1=1` in the base query, but it is better to build a list of conditions and join them, as shown in the secure implementation."
          },
          {
            problem: "Calling the function from a Client Script gives a 'Not Found' error.",
            solution: "Ensure the `@frappe.whitelist()` decorator is present. Double-check the dotted path in `frappe.call` matches the location of your function (`app_name.path.to.file.function_name`). After creating a new whitelisted function, a `bench restart` is often required."
          }
        ]}
      />
    </main>
  );
};

export default SnippetPage;
