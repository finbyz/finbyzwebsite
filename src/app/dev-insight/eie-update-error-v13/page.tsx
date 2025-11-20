import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function EIEUpdateErrorV13Page() {
  const snippetName = "EIE Update error v13";
  const codeSnippet = `# Check length of existing data field
si_data = frappe.db.get_all("Sales Invoice", fields=["po_no"])
exists = []
for si in si_data:
    if si.po_no:
        if len(si.po_no) > 140:
            exists.append(si.po_no)


update \
  \`tabCustom Field\` set fieldtype= "Small Text" where name = 'Sales Invoice-ack_no';
update \
  \`tabCustom Field\` set fieldtype= "Small Text" where name = 'Sales Invoice-ewaybill';
update \
  \`tabCustom Field\` set fieldtype= "Small Text" where name = 'Sales Invoice-irn';


update \
  \`tabCustom Field\` set length = 45 where name = 'Sales Invoice-place_of_supply';
update \
  \`tabCustom Field\` set length = 100 where name = 'Sales Invoice-transporter_name';
update \
  \`tabCustom Field\` set length = 80 where name = 'Sales Invoice-lr_no';
update \
  \`tabCustom Field\` set length = 100 where name = 'Sales Invoice-mrn_no';
update \
  \`tabCustom Field\` set length = 120 where name = 'Sales Invoice-freight';
update \
  \`tabCustom Field\` set length = 90 where name = 'Sales Invoice-freight1';

ALTER TABLE \`tabSales Invoice\` MODIFY transporter_name VARCHAR(50);
ALTER TABLE \`tabSales Invoice\` MODIFY place_of_supply VARCHAR(45);
ALTER TABLE \`tabSales Invoice\` MODIFY transporter_name VARCHAR(100);
ALTER TABLE \`tabSales Invoice\` MODIFY mrn_no VARCHAR(100);

ALTER TABLE \`tabSales Invoice\` MODIFY freight VARCHAR(120);
ALTER TABLE \`tabSales Invoice\` MODIFY freight1 VARCHAR(90);

ALTER TABLE \`tabSales Invoice\` MODIFY ack_no TEXT;
ALTER TABLE \`tabSales Invoice\` MODIFY ewaybill TEXT;
ALTER TABLE \`tabSales Invoice\` MODIFY irn TEXT;
ALTER TABLE \`tabSales Invoice\` MODIFY po_no TEXT;

ALTER TABLE \`tabSales Invoice\` DROP COLUMN irn_cancel_date;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-irn_cancel_date';
ALTER TABLE \`tabSales Invoice\` DROP COLUMN einvoice_status;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-einvoice_status';
ALTER TABLE \`tabSales Invoice\` DROP COLUMN ack_date;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-ack_date';
ALTER TABLE \`tabSales Invoice\` DROP COLUMN eway_bill_validity;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-eway_bill_validity';

update \`tabSales Invoice\` set transporter_name = 'PERSONAL VEHICLE' where transporter_name= "PERSONAL VEHICLE                                                                                               " and name != "a";
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Fix Field Length and Data Type Issues in Sales Invoice DocType in Frappe?"
        description="This snippet addresses errors related to field lengths and data types in the Sales Invoice DocType in Frappe Version 13 by updating custom field settings and altering the database schema."
        snippetName={snippetName}
        language="python"
        category="Frappe Form Customization"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> The Sales Invoice DocType in Frappe v13 contains fields with incorrect or insufficient lengths and data types, resulting in errors or data truncation, especially for fields like po_no where data length can exceed limits.
          <br />
          <strong>Solution:</strong> This snippet shows how to check for existing data length issues with frappe.db.get_all and then update the custom field definitions and underlying SQL table schema to appropriate types and lengths. It also includes removing obsolete columns.
          <br />
          This solution uses Python server-side code and direct SQL queries executed via Frappe to adjust the DocType's table structure and Custom Field metadata.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={`The snippet identifies data integrity issues by detecting fields like 'po_no' with values exceeding 140 characters. It updates associated custom field metadata in Frappe's 'tabCustom Field' table to set appropriate fieldtypes and lengths. It then alters the underlying SQL table ('tabSales Invoice') to modify columns with suitable VARCHAR or TEXT types. Finally, it drops obsolete columns and cleans related custom fields.`}
        whenToUse={`Use this approach when you encounter validation, truncation, or schema mismatch errors in your Frappe DocType fields, especially after upgrades or data imports that introduce incorrect field lengths or types.`}
        prerequisites={[
          "Access to Frappe framework server-side scripts",
          "Permissions to execute SQL UPDATE and ALTER commands on Frappe database",
          "Backup your database before making schema changes"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.db.get_all",
            description: "Fetches records from a DocType using Frappe ORM with specified fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database"
          },
          {
            title: "Custom Fields in Frappe",
            description: "Customize DocType fields dynamically by modifying the 'tabCustom Field' table entries.",
            relatedLink: "https://frappeframework.com/docs/user/en/how-to/customize-erpnext/custom-fields"
          },
          {
            title: "ALTER TABLE in Frappe",
            description: "Modify underlying database schema for DocType tables to fix data type or length issues.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database"
          },
          {
            title: "Data Integrity in Frappe",
            description: "Ensuring field lengths and data types are consistent to prevent application and database errors.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/database"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify problematic field data exceeding length limits",
            explanation: "Use frappe.db.get_all to retrieve all 'po_no' field values from Sales Invoice and check if any exceed 140 characters.",
            code: `si_data = frappe.db.get_all("Sales Invoice", fields=["po_no"])
exists = []
for si in si_data:
    if si.po_no:
        if len(si.po_no) > 140:
            exists.append(si.po_no)`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Update custom field types",
            explanation: "Update the fieldtype of specific Custom Fields (ack_no, ewaybill, irn) to 'Small Text' to accommodate longer text data.",
            code: `update \`tabCustom Field\` set fieldtype= "Small Text" where name = 'Sales Invoice-ack_no';
update \`tabCustom Field\` set fieldtype= "Small Text" where name = 'Sales Invoice-ewaybill';
update \`tabCustom Field\` set fieldtype= "Small Text" where name = 'Sales Invoice-irn';`,
            language: "sql"
          },
          {
            stepNumber: 3,
            title: "Adjust length of other custom fields",
            explanation: "Modify length attributes of other custom fields to appropriate sizes based on their data requirements.",
            code: `update \`tabCustom Field\` set length = 45 where name = 'Sales Invoice-place_of_supply';
update \`tabCustom Field\` set length = 100 where name = 'Sales Invoice-transporter_name';
update \`tabCustom Field\` set length = 80 where name = 'Sales Invoice-lr_no';
update \`tabCustom Field\` set length = 100 where name = 'Sales Invoice-mrn_no';
update \`tabCustom Field\` set length = 120 where name = 'Sales Invoice-freight';
update \`tabCustom Field\` set length = 90 where name = 'Sales Invoice-freight1';`,
            language: "sql"
          },
          {
            stepNumber: 4,
            title: "Modify underlying table schema",
            explanation: "Alter the Sales Invoice table fields to match the updated field lengths and types (VARCHAR or TEXT).",
            code: `ALTER TABLE \`tabSales Invoice\` MODIFY transporter_name VARCHAR(50);
ALTER TABLE \`tabSales Invoice\` MODIFY place_of_supply VARCHAR(45);
ALTER TABLE \`tabSales Invoice\` MODIFY transporter_name VARCHAR(100);
ALTER TABLE \`tabSales Invoice\` MODIFY mrn_no VARCHAR(100);
ALTER TABLE \`tabSales Invoice\` MODIFY freight VARCHAR(120);
ALTER TABLE \`tabSales Invoice\` MODIFY freight1 VARCHAR(90);
ALTER TABLE \`tabSales Invoice\` MODIFY ack_no TEXT;
ALTER TABLE \`tabSales Invoice\` MODIFY ewaybill TEXT;
ALTER TABLE \`tabSales Invoice\` MODIFY irn TEXT;
ALTER TABLE \`tabSales Invoice\` MODIFY po_no TEXT;`,
            language: "sql"
          },
          {
            stepNumber: 5,
            title: "Remove obsolete columns and custom fields",
            explanation: "Drop old columns no longer used and delete their custom field metadata to keep the schema clean.",
            code: `ALTER TABLE \`tabSales Invoice\` DROP COLUMN irn_cancel_date;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-irn_cancel_date';
ALTER TABLE \`tabSales Invoice\` DROP COLUMN einvoice_status;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-einvoice_status';
ALTER TABLE \`tabSales Invoice\` DROP COLUMN ack_date;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-ack_date';
ALTER TABLE \`tabSales Invoice\` DROP COLUMN eway_bill_validity;
DELETE FROM \`tabCustom Field\` where name = 'Sales Invoice-eway_bill_validity';`,
            language: "sql"
          },
          {
            stepNumber: 6,
            title: "Clean up data values with padding",
            explanation: "Update specific field values to remove trailing spaces or incorrect formatting.",
            code: `update \`tabSales Invoice\` set transporter_name = 'PERSONAL VEHICLE' where transporter_name= "PERSONAL VEHICLE                                                                                               " and name != "a";`,
            language: "sql"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Data truncation errors when inserting/updating Sales Invoice fields.",
            solution: "Increase field length or change type to TEXT in both Custom Field metadata and underlying SQL table as shown in the snippet."
          },
          {
            problem: "Old columns causing schema conflicts or no longer used.",
            solution: "Drop obsolete columns and remove their custom field entries from 'tabCustom Field' to prevent errors."
          },
          {
            problem: "Trailing spaces or inconsistent field values causing filters or matches to fail.",
            solution: "Run UPDATE queries to clean data values, removing trailing spaces or standardizing values."
          }
        ]}
      />
    </main>
  );
}
