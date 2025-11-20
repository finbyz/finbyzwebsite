import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `def get_fiscal():
    import frappe
    from datetime import datetime, date

    fiscal_doc = frappe.get_last_doc("Fiscal Year")

    from_date = fiscal_doc.year_start_date
    if isinstance(from_date, str):
        from_date = from_date.date()

    to_date = fiscal_doc.year_end_date
    if isinstance(to_date, str):
        to_date = to_date.date()

    def add_row_to_tax_withholding_rate(from_date, to_date):
        tax_withholding_category_docs = frappe.get_all("Tax Withholding Category")
        for tax_doc in tax_withholding_category_docs:
            doc = frappe.get_doc("Tax Withholding Category", tax_doc.name)
            if hasattr(doc, 'rates') and doc.rates:
                last_row = doc.rates[-1]
                last_row_from_date = datetime.strptime(str(last_row.from_date), "%Y-%m-%d").date()
                last_row_to_date = datetime.strptime(str(last_row.to_date), "%Y-%m-%d").date()
                if last_row_from_date != from_date and last_row_to_date != to_date:
                    doc.append('rates', {
                        'tax_withholding_rate': last_row.tax_withholding_rate,
                        'single_threshold': last_row.single_threshold,
                        'cumulative_threshold': last_row.cumulative_threshold,
                        'from_date': from_date,
                        'to_date': to_date
                    })
                    doc.save()

            frappe.db.commit()

    add_row_to_tax_withholding_rate(from_date, to_date)

get_fiscal()`;

export default function AddRowTaxWithholdingCategory() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Add a New Row in Tax Withholding Category for a New Fiscal Year in Frappe?"
        description="Automatically add a new row with updated date ranges to the Tax Withholding Category's rates child table for the new fiscal year using Frappe backend Python scripting."
        snippetName="Add Row in Tax Withholding Category for new fiscal year"
        language="Python"
        category="Frappe Backend Scripting"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: When a new fiscal year starts, the Tax Withholding Category DocType's rates child table needs a new entry with
          updated date ranges to apply correct withholding rates. Manually adding this data is error prone and inefficient.
          <br />
          <br />
          Solution: This Python Frappe backend script automates the creation of a new child table row in all Tax Withholding Category
          documents. It fetches the last fiscal year record, determines the date range, copies the last rate data, and appends
          it with the new fiscal year dates, committing the changes automatically.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Fetches the latest Fiscal Year record, extracts its date range, and for each Tax Withholding Category DocType,
        checks the last rates row and appends a new row with copied withholding rate data but new from and to dates corresponding
        to the new fiscal year. Commits changes in the database."
        whenToUse="Use this script when you need to update financial withholding rate categories automatically according to fiscal
        year changes to ensure compliance and reduce manual data entry errors."
        prerequisites={[
          "Frappe Framework environment with access to Tax Withholding Category and Fiscal Year DocTypes.",
          "Basic knowledge of Python scripting and Frappe backend API.",
          "Appropriate permissions to read and write to the relevant DocTypes."
        ]}
      />

      <KeyConcepts
        concepts=[
          {
            title: "frappe.get_doc",
            description: "Retrieves a document instance by DocType and name, allowing access to its fields and child tables.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/python/frappe#frappe-get-doc"
          },
          {
            title: "Child Table manipulation",
            description: "Appending rows to a child table field in a DocType using doc.append method, then saving the document to persist changes.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/python/frappe#working-with-child-tables"
          },
          {
            title: "frappe.get_all",
            description: "Fetches list of documents names for a DocType matching specified filters (none here).",
            relatedLink: "https://frappeframework.com/docs/user/en/api/python/frappe#frappe-get-all"
          },
          {
            title: "Database commit",
            description: "Explicitly commits the transaction to the database to ensure changes are saved.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/python/frappe#frappe-db-commit"
          },
          {
            title: "Fiscal Year DocType",
            description: "Represents the fiscal year period with start and end dates, crucial for financial computations.",
            relatedLink: "https://frappeframework.com/docs/user/en/model/data/fiscal-year"
          }
        ]}
      />

      <StepByStepTutorial
        steps=[
          {
            stepNumber: 1,
            title: "Retrieve the latest Fiscal Year document",
            explanation: "Fetches the last Fiscal Year document to determine the start and end date for the upcoming fiscal year periods.",
            code: "fiscal_doc = frappe.get_last_doc(\"Fiscal Year\")\nfrom_date = fiscal_doc.year_start_date\nto_date = fiscal_doc.year_end_date",
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Normalize date values",
            explanation: "Ensures that from_date and to_date are proper date objects (not strings), converting if necessary for further processing.",
            code: "if isinstance(from_date, str):\n    from_date = from_date.date()\nif isinstance(to_date, str):\n    to_date = to_date.date()",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Iterate through all Tax Withholding Category documents",
            explanation: "For each Tax Withholding Category document, access the last rate row to determine if a new row needs to be added for the new fiscal year.",
            code: "tax_withholding_category_docs = frappe.get_all(\"Tax Withholding Category\")\nfor tax_doc in tax_withholding_category_docs:\n    doc = frappe.get_doc(\"Tax Withholding Category\", tax_doc.name)",
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Check and append new rate row if needed",
            explanation: "Compare the last rates row's from_date and to_date with the new fiscal year dates; if they differ, append a new row
            copying the last withholding rate and thresholds but updating the fiscal year dates.",
            code: "if hasattr(doc, 'rates') and doc.rates:\n    last_row = doc.rates[-1]\n    last_row_from_date = datetime.strptime(str(last_row.from_date), '%Y-%m-%d').date()\n    last_row_to_date = datetime.strptime(str(last_row.to_date), '%Y-%m-%d').date()\n    if last_row_from_date != from_date and last_row_to_date != to_date:\n        doc.append('rates', {\n            'tax_withholding_rate': last_row.tax_withholding_rate,\n            'single_threshold': last_row.single_threshold,\n            'cumulative_threshold': last_row.cumulative_threshold,\n            'from_date': from_date,\n            'to_date': to_date\n        })\n        doc.save()",
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Commit the database transaction",
            explanation: "Ensure all changes to the documents are committed in the database to make updates permanent.",
            code: "frappe.db.commit()",
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "New rows are not appearing in the Tax Withholding Category child table.",
            solution: "Ensure that the script is running with user permissions that allow document modification and that doc.save() is called.",
          },
          {
            problem: "Dates in the appended row do not match the new fiscal year.",
            solution: "Verify that from_date and to_date are correctly converted to date objects and match the fiscal year start and end dates.",
          },
          {
            problem: "The script executes but changes are not saved.",
            solution: "Make sure `frappe.db.commit()` is called after saving the documents to persist the changes in the database.",
          }
        ]}
      />
    </main>
  );
}
