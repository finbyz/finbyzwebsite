import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ReportSetUserPermission() {
  const snippetName = "Report Set User Permission";
  const language = "Python";
  const category = "Frappe Report Customization";
  const codeSnippet = `from frappe.desk.reportview import get_match_cond

# Apply user permission match conditions for the current transaction doctype Lexcrue water
# Ensures reports (e.g., Delivery Note Trends) respect permissions like Customer Group

mcond = get_match_cond(conditions.get("trans"))
if mcond:
    # Adapt to table alias used in this query (t1)
    mcond = mcond.replace(f"\`tab{conditions.get('trans')}\`.", "t1.")
    cond += mcond`;

  return (
    <main>
      <CodeSnippetHero
        title="How to apply user permission filters to Frappe report queries?"
        description="Ensuring that reports respect user permissions dynamically by applying match conditions in SQL queries using Frappe's get_match_cond."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="green"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: In Frappe reports, filtering data according to user permissions is
          necessary to maintain data security and privacy. Without applying these permission
          filters, users might see data they are not authorized to access.
          <br />
          <br />
          Solution: This snippet demonstrates how to use Frappe's <code>get_match_cond</code> function
          to retrieve SQL conditions that enforce user permissions on the current transaction
          DocType. These conditions are adapted for the report's query syntax and appended
          to the filter conditions, ensuring that reports such as Delivery Note Trends
          only display authorized data.
          <br />
          <br />
          No additional description was provided with the snippet.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="The code retrieves the user permission match conditions for the DocType involved in the current transaction, modifies the table alias to match the query's usage, and appends the permission filter conditions to the existing query conditions."
        whenToUse="Use this approach when building Frappe reports that need to respect user permissions dynamically, so only authorized data is included in report results."
        prerequisites={[
          "Understanding Frappe DocType and user permissions system",
          "Basic SQL knowledge",
          "Frappe report query customization"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "get_match_cond",
            description: "Returns the SQL condition string enforcing user permissions for a given DocType.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/reporting#get-match-cond"
          },
          {
            title: "User Permissions in Frappe",
            description: "Controls to restrict document access based on roles and filters.",
            relatedLink: "https://frappeframework.com/docs/user/en/tutorial/user-permissions"
          },
          {
            title: "Report Query Customization",
            description: "Customize query conditions to apply dynamic filters in reports.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/reporting"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Import get_match_cond",
            explanation: "Import the Frappe utility function 'get_match_cond' which generates permission filters for a given DocType.",
            code: "from frappe.desk.reportview import get_match_cond",
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Retrieve permission conditions",
            explanation: "Use 'get_match_cond' with the current transaction DocType to get the SQL condition string enforcing user permissions.",
            code: "mcond = get_match_cond(conditions.get(\"trans\"))",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Adjust table alias",
            explanation: "Replace the DocType table alias in the condition string to the alias used in your query (e.g., 't1') so the condition fits the query context.",
            code: "if mcond:\n    mcond = mcond.replace(f'`tab{conditions.get(\'trans\')}`.', 't1.')",
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Append condition to query",
            explanation: "Add the adapted permission filter string to the existing SQL query conditions to enforce user permissions dynamically.",
            code: "cond += mcond",
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The report shows data for all users ignoring permissions.",
            solution: "Ensure 'get_match_cond' is called with the correct DocType and that its condition is correctly appended to the query. Double check table aliases match."
          },
          {
            problem: "SQL errors related to alias or table names.",
            solution: "Verify that the string replacement of backticked DocType table names with the alias (e.g., 't1.') matches the alias used in the query exactly."
          },
          {
            problem: "User permissions changes are not reflected in the report.",
            solution: "Make sure the report fetches updated permissions and that 'get_match_cond' is called fresh during query execution."
          }
        ]}
      />
    </main>
  );
}
