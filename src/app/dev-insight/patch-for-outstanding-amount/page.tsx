import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function PatchOutstandingAmountPage() {
  const snippetName = "Patch for Outstanding Amount";
  const language = "Python";
  const category = "Frappe Server Script";

  const codeSnippet = `sales_invoice_data = frappe.get_list("Sales Invoice", filters={"outstanding_amount": ["!=", "0"],"docstatus":["=",1]}, fields=["name"])
purchase_invoice_data = frappe.get_list("Purchase Invoice", filters={"outstanding_amount": ["!=", "0"],"docstatus":["=",1]}, fields=["name"])

invoice_ids = [invoice['name'] for invoice in sales_invoice_data + purchase_invoice_data]
data = frappe.db.get_all(
    "GL Entry",
    filters={
        "against_voucher_type": ["in", ["Sales Invoice", "Purchase Invoice"]],
        "posting_date": [">=", "2023-04-01"],
        "against_voucher": ["in", invoice_ids]
    },
    fields=['account', 'party_type', 'party', 'against_voucher_type', 'against_voucher']
)
data = list(set([(row['account'], row['party_type'], row['party'], row['against_voucher_type'], row['against_voucher']) for row in data]))
from erpnext.accounts.doctype.gl_entry.gl_entry import update_outstanding_amt 
cnt = 0
for i in data:
    cnt = update_outstanding_amt(*i, cnt=cnt)`;

  const whatItDoes =
    "This script identifies all Sales and Purchase Invoices with an outstanding amount, then retrieves related General Ledger (GL) Entries and updates their outstanding amounts using ERPNext's internal method.";
  const whenToUse =
    "Use this patch to fix discrepancies in outstanding amounts for invoices in ERPNext, ensuring financial reports reflect accurate balances, especially after data migrations or corrections.";
  const prerequisites = [
    "Access to the Frappe/ERPNext backend with necessary permissions.",
    "Familiarity with Frappe ORM methods like get_list and get_all.",
    "Understanding of ERPNext accounting and GL Entry DocType.",
    "Ability to run server-side Python scripts or patches in ERPNext environment."
  ];

  const keyConcepts = [
    {
      title: "frappe.get_list",
      description: "Retrieves a filtered list of document records from a specified DocType.",
      relatedLink: "https://frappeframework.com/docs/v13/user/en/api/python-api#frappe-get-list"
    },
    {
      title: "frappe.db.get_all",
      description: "Fetches all records matching a filter with selected fields, used for efficient querying.",
      relatedLink: "https://frappeframework.com/docs/v13/user/en/api/python-api#frappe-db-get-all"
    },
    {
      title: "DocType - GL Entry",
      description: "General Ledger entries track accounting transactions related to vouchers.",
      relatedLink: "https://erpnext.com/docs/v13/user/manual/en/accounts/gl-entry"
    },
    {
      title: "update_outstanding_amt",
      description: "Internal ERPNext function to update outstanding amount of an invoice based on GL Entries.",
      relatedLink: "https://github.com/frappe/erpnext/blob/version-13/erpnext/accounts/doctype/gl_entry/gl_entry.py#L546"
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      title: "Fetch Sales and Purchase Invoices with Outstanding Amount",
      explanation:
        "Retrieve all Sales Invoices and Purchase Invoices where the outstanding_amount is not zero and docstatus is submitted (1). This identifies invoices needing adjustment.",
      code: `sales_invoice_data = frappe.get_list("Sales Invoice", filters={"outstanding_amount": ["!=", "0"], "docstatus": ["=", 1]}, fields=["name"])
purchase_invoice_data = frappe.get_list("Purchase Invoice", filters={"outstanding_amount": ["!=", "0"], "docstatus": ["=", 1]}, fields=["name"])`,
      language: "python"
    },
    {
      stepNumber: 2,
      title: "Aggregate Invoice IDs",
      explanation:
        "Combine invoice names from both Sales and Purchase invoices into a single list for querying GL Entries more efficiently.",
      code: `invoice_ids = [invoice['name'] for invoice in sales_invoice_data + purchase_invoice_data]`,
      language: "python"
    },
    {
      stepNumber: 3,
      title: "Query GL Entries related to the Invoices",
      explanation:
        "Fetch GL Entries that are posted on or after 2023-04-01, linked to the above invoices either as Sales Invoice or Purchase Invoice.",
      code: `data = frappe.db.get_all(
    "GL Entry",
    filters={
      "against_voucher_type": ["in", ["Sales Invoice", "Purchase Invoice"]],
      "posting_date": [">=", "2023-04-01"],
      "against_voucher": ["in", invoice_ids]
    },
    fields=['account', 'party_type', 'party', 'against_voucher_type', 'against_voucher']
)`,
      language: "python"
    },
    {
      stepNumber: 4,
      title: "Deduplicate GL Entry Data",
      explanation:
        "Remove duplicate tuples of account, party, party type, voucher type, and voucher name to avoid redundant updates.",
      code: `data = list(set([(row['account'], row['party_type'], row['party'], row['against_voucher_type'], row['against_voucher']) for row in data]))`,
      language: "python"
    },
    {
      stepNumber: 5,
      title: "Update Outstanding Amounts",
      explanation:
        "Loop through each tuple and call ERPNext's internal update_outstanding_amt method to patch and recalculate outstanding amounts. Maintain a counter to track updates.",
      code: `from erpnext.accounts.doctype.gl_entry.gl_entry import update_outstanding_amt
cnt = 0
for i in data:
    cnt = update_outstanding_amt(*i, cnt=cnt)`,
      language: "python"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "The script returns no invoices despite known outstanding amounts.",
      solution:
        "Confirm that docstatus is correctly set to 1 (submitted) and outstanding_amount fields are populated correctly. Run data validation or fix migration issues if any."
    },
    {
      problem: "update_outstanding_amt does not update the amounts as expected.",
      solution:
        "Ensure the script is run with sufficient permissions and in the correct ERPNext version. Also verify that the GL Entries and invoices have consistent linkage."
    },
    {
      problem: "Performance issues with large datasets causing timeouts.",
      solution:
        "Break the workload into smaller batches or use background jobs. Optimize filters and indexes on database tables related to GL Entry."
    }
  ];

  return (
    <>
      <CodeSnippetHero
        title="How to patch outstanding amounts for Sales and Purchase Invoices in Frappe?"
        description="This snippet shows how to find all invoices with outstanding balances and update their outstanding amounts accurately by leveraging ERPNext's internal methods."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: In ERPNext, sometimes outstanding amounts on Sales and Purchase Invoices may become inconsistent due to data corrections, migrations, or anomalies. This can cause inaccurate accounting and reporting.
        </p>
        <p>
          Solution: The provided patch script programmatically identifies all submitted Sales and Purchase Invoices with non-zero outstanding amounts, fetches related GL Entries, and calls ERPNext's native update_outstanding_amt function to recalculate and fix outstanding balances.
        </p>
        <p>
          This patch is intended for server-side execution as a script or data patch to fix accounting data integrity.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />

      <KeyConcepts concepts={keyConcepts} />

      <StepByStepTutorial steps={steps} />

      <Troubleshooting items={troubleshootingItems} />
    </>
  );
}
