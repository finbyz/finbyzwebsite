import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Row size too large (> 8126). Changing some columns to TEXT or BLOB may help.";
const language = "Python";
const category = "Frappe Backend";

const codeSnippet = `# ../apps/frappe/frappe/database/mariadb/schema.py

def alter(self):
	try:
		for query_parts in [add_column_query, modify_column_query, add_index_query, drop_index_query]:
			for query_body in query_parts:
				# FinByz Changes
				# query_body = ", ".join(query_parts)
				query = f"ALTER TABLE \`{self.table_name}\` {query_body}"
				frappe.db.sql(query)

	except Exception as e:
		if query := locals().get("query"):  # this weirdness is to avoid potentially unbounded vars
			# FinByz Changes
			frappe.msgprint(f"Failed to alter schema using query: {query}")
			print(f"Failed to alter schema using query: {query}")

		if e.args[0] == DUP_ENTRY:
			fieldname = str(e).split("'")[-2]
			frappe.throw(
				_("{0} field cannot be set as unique in {1}, as there are non-unique existing values").format(
					fieldname, self.table_name
				)
			)

		raise
`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to handle Row size too large (> 8126) error in Frappe MariaDB schema alterations?"
        description="This snippet demonstrates a method to execute multiple ALTER TABLE queries safely in Frappe, handling common MariaDB row size errors by suggesting column type adjustments and providing clear error feedback to the user."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When altering table schemas in MariaDB within
          Frappe, you may encounter the error "Row size too large (&gt; 8126)".
          This typically occurs when the combined size of columns exceeds the
          storage limit for a row. Columns that store large text or binary data
          should be changed to TEXT or BLOB types to mitigate this.
        </p>
        <p>
          <strong>Solution:</strong> This code runs ALTER TABLE queries for
          adding, modifying, or dropping columns and indexes within a try
          block. In case of failure, it provides user feedback via
          frappe.msgprint and prints the failing query for troubleshooting.
          It also specifically handles duplicate entry errors when setting
          unique constraints, throwing a descriptive exception.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        fileName="../apps/frappe/frappe/database/mariadb/schema.py"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={`This snippet attempts to apply multiple ALTER TABLE commands sequentially to a specified Frappe DocType's database table, handling failure scenarios gracefully. It logs the exact SQL causing an error and distinguishes the case when a unique constraint can't be added due to duplicate data in existing rows, throwing a clear exception in that case.`}
        whenToUse={`Use this technique when making schema changes in Frappe's MariaDB backend, especially if you are modifying fields or indexes that might increase row size or uniqueness constraints on data that may violate them.`}
        prerequisites={[
          "Understanding of Frappe's database schema management",
          "Basic familiarity with MariaDB ALTER TABLE syntax",
          "Error handling in Python",
          "Knowledge of Frappe's frappe.db.sql API"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe Database API",
            description: "Using frappe.db.sql for executing raw SQL queries safely within Frappe.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database"
          },
          {
            title: "MariaDB ALTER TABLE",
            description: "How to modify tables by adding, modifying, or dropping columns or indexes.",
            relatedLink: "https://mariadb.com/kb/en/alter-table/"
          },
          {
            title: "Handling Database Errors",
            description: "Capturing and responding to database exceptions including duplicate entries.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/errors"
          },
          {
            title: "Frappe Exception Throwing",
            description: "Throwing user-friendly exceptions within Frappe using frappe.throw.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/exceptions"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Iterate Over Different ALTER TABLE Query Sets",
            explanation: "The code loops through four categories of SQL modifications: adding columns, modifying columns, adding indexes, and dropping indexes. Each category is a list of SQL fragments to run.",
            code: `for query_parts in [add_column_query, modify_column_query, add_index_query, drop_index_query]:\n    for query_body in query_parts:`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Construct and execute ALTER TABLE query",
            explanation: "Inside nested loop, it constructs a full ALTER TABLE statement referencing the current table and the current query part, then executes it via frappe.db.sql.",
            code: `query = f"ALTER TABLE \`{self.table_name}\` {query_body}"\nfrappe.db.sql(query)`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Catch Exceptions and Provide User Feedback",
            explanation: "If an exception occurs, it captures the last executed query for debugging, prints it, and uses frappe.msgprint to notify the user.",
            code: `except Exception as e:\n    if query := locals().get("query"):\n        frappe.msgprint(f"Failed to alter schema using query: {query}")\n        print(f"Failed to alter schema using query: {query}")`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Handle Duplicate Entry Error Specific to Unique Constraint",
            explanation: "If the error code matches DUP_ENTRY, it extracts the field name causing the conflict and throws a clear exception explaining that uniqueness cannot be set due to duplicates.",
            code: `if e.args[0] == DUP_ENTRY:\n    fieldname = str(e).split("'")[-2]\n    frappe.throw(_(\"{0} field cannot be set as unique in {1}, as there are non-unique existing values\").format(fieldname, self.table_name))`,
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Reraise Other Exceptions",
            explanation: "If the error is not DUP_ENTRY, it simply rethrows the exception to be handled further up the call stack.",
            code: `raise`,
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Encountered 'Row size too large (> 8126)' error during ALTER TABLE.",
            solution: "Change some VARCHAR columns to TEXT or BLOB types to reduce row size and retry the schema alteration."
          },
          {
            problem: "Unique constraint fails due to existing non-unique data.",
            solution: "Clean up duplicate records in the specified field before setting it as unique or avoid setting the unique constraint."
          },
          {
            problem: "ALTER TABLE query failed without clear message.",
            solution: "Check the printed query from frappe.msgprint and logs to identify the problematic SQL statement."
          }
        ]}
      />
    </main>
  );
}
