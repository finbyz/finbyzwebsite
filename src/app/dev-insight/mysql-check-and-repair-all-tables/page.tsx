import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function MysqlCheckAndRepairAllTables() {
  const snippetName = "Mysql Check and repair all tables";
  const language = "sql";
  const category = "SQL Operations";
  const codeSnippet = `mysqlcheck -u root -p --auto-repair --check --all-databases`;
  const referenceLink = "https://stackoverflow.com/questions/4582832/repair-all-tables-in-one-go/17608238";

  return (
    <main>
      <CodeSnippetHero
        title="How to Check and Repair All MySQL Tables at Once?"
        description="When managing MySQL databases, table corruption or errors can occur. This snippet demonstrates how to perform a comprehensive check and repair of all tables across all databases efficiently using the mysqlcheck command with automatic repair enabled."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Over time, MySQL tables can become corrupted or develop errors due to unexpected shutdowns, hardware issues, or software bugs. Manually checking and repairing each table can be tedious and error-prone.
          <br />
          <strong>Solution:</strong> Using the <code>mysqlcheck</code> utility with the <code>--all-databases</code>, <code>--check</code>, and <code>--auto-repair</code> options allows administrators to check and automatically repair all tables across all databases in a single command execution.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={false}
        allowCopy={true}
        referenceLink={referenceLink}
        referenceLinkText="See StackOverflow discussion on repairing all tables"
      />

      <CodeOverview
        whatItDoes="Executes the MySQL mysqlcheck utility to perform consistency checks on all tables across all databases and automatically repairs any corrupted tables found."
        whenToUse="Use when you suspect table corruption, during routine maintenance, or after an unexpected server shutdown to ensure table integrity."
        prerequisites={[
          "MySQL server must be running.",
          "Access to mysqlcheck utility, typically available with MySQL client tools.",
          "User credentials with necessary privileges to check and repair tables."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "mysqlcheck Utility",
            description:
              "Command-line tool used to check, repair, analyze, and optimize MySQL tables.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/mysqlcheck.html"
          },
          {
            title: "--auto-repair Option",
            description: "Automatically repairs corrupted tables detected during the check.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/mysqlcheck.html#option_mysqlcheck_auto-repair"
          },
          {
            title: "--check Option",
            description: "Runs consistency checks on tables to detect corruption or errors.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/mysqlcheck.html#option_mysqlcheck_check"
          },
          {
            title: "--all-databases Option",
            description: "Targets all databases managed by the MySQL server for checking and repair.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/mysqlcheck.html#option_mysqlcheck_all-databases"
          },
          {
            title: "Repair Table Command",
            description: "SQL command to repair an individual table if needed.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/repair-table.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Access Your Server Terminal",
            explanation:
              "Open a command line interface with access to the MySQL client utilities, usually on the database server machine.",
            code: "",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Run mysqlcheck with Repair and Check Options",
            explanation:
              "Execute the mysqlcheck command with the options to check and automatically repair all tables in all databases. You will be prompted for your root password.",
            code: "mysqlcheck -u root -p --auto-repair --check --all-databases",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Repair Specific Tables Manually (Optional)",
            explanation:
              "If you prefer or need to repair a single table, you can log into MySQL and run the REPAIR TABLE command explicitly.",
            code: "REPAIR TABLE your_database.your_table;",
            language: "sql"
          },
          {
            stepNumber: 4,
            title: "Verify Repair Completion",
            explanation:
              "Check the output messages from mysqlcheck or MySQL to ensure tables have been repaired or note any persistent errors requiring further attention.",
            code: "",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "mysqlcheck command fails with permission denied",
            solution:
              "Ensure the user you use with -u has sufficient privileges to check and repair tables, typically requiring the SUPER or REPAIR privileges."
          },
          {
            problem: "Some tables cannot be repaired automatically",
            solution:
              "For stubborn table corruption, attempt manual REPAIR TABLE commands or restore from a backup if repair is unsuccessful."
          },
          {
            problem: "mysqlcheck command not found",
            solution:
              "Install MySQL client utilities or ensure the utility is in your system PATH."
          },
          {
            problem: "Large databases take a long time to check",
            solution:
              "Run checks during low-traffic periods or schedule maintenance windows to avoid impacting performance."
          }
        ]}
      />
    </main>
  );
}
