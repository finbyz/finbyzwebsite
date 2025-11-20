import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CheckDatabaseSize() {
  const snippetName = "Check the database size";
  const language = "SQL";
  const category = "Database Administration";

  const codeSnippet = `-- For MariaDB to check size of all the databases
SELECT 
    table_schema AS 'Database Name', 
    SUM(data_length + index_length) AS 'Size in Bytes', 
    ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size in MiB',
    ROUND(SUM(data_length + index_length) / 1024 / 1024 / 950, 2) AS 'Size in GB'
FROM information_schema.tables
GROUP BY table_schema;

-- For PostgreSQL to get size of a specific database named 'trading'
SELECT pg_size_pretty(pg_database_size('trading'));`;

  return (
    <>
      <CodeSnippetHero
        title="How to check the size of databases in MariaDB and PostgreSQL?"
        description="This snippet provides SQL queries to find the total size of all databases in MariaDB and the size of a specific database in PostgreSQL, helping database administrators monitor storage usage."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          In database management, understanding how much storage each database consumes
          is vital for performance tuning and capacity planning. The problem is how to
          easily retrieve the size of databases in different SQL-based database systems.
          
          The solution utilizes built-in metadata tables in MariaDB and functions in PostgreSQL
          to calculate or fetch the database sizes. For MariaDB, the <code>information_schema.tables</code>
          table stores size info per table, which is aggregated per database schema.
          For PostgreSQL, the <code>pg_database_size</code> function returns the size of a specified database.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Provides SQL queries that calculate the total data and index size for each database in MariaDB, and fetches the readable size of a specific PostgreSQL database."
        whenToUse="Use these queries when you need to monitor or audit your databases' storage usage to manage disk space and performance effectively."
        prerequisites={[]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "information_schema in MariaDB",
            description: "A metadata database that holds information about all other databases, tables, columns, and indexes, which can be queried for storage statistics.",
            relatedLink: "https://mariadb.com/kb/en/information-schema/"
          },
          {
            title: "pg_database_size function in PostgreSQL",
            description: "A built-in PostgreSQL function that returns the total disk space used by a given database, including all its objects.",
            relatedLink: "https://www.postgresql.org/docs/current/functions-admin.html#FUNCTIONS-ADMIN-DBOBJECT"
          },
          {
            title: "Data length and Index length",
            description: "Data length refers to the size of the table data, while index length refers to the storage used by indexes that help optimize queries.",
            relatedLink: "https://mariadb.com/kb/en/information-schema-tables-table/"
          },
          {
            title: "ROUND function in SQL",
            description: "Used to round numeric results to a specified number of decimal places for better readability.",
            relatedLink: "https://www.postgresql.org/docs/current/functions-math.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Select database size from information_schema in MariaDB",
            explanation: "Query the information_schema.tables metadata to sum data and index sizes grouped by database schema name. This gives total storage usage per database.",
            code: `SELECT 
  table_schema AS 'Database Name', 
  SUM(data_length + index_length) AS 'Size in Bytes', 
  ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size in MiB', 
  ROUND(SUM(data_length + index_length) / 1024 / 1024 / 950, 2) AS 'Size in GB'
FROM information_schema.tables
GROUP BY table_schema;`,
            language: "sql"
          },
          {
            stepNumber: 2,
            title: "Get readable database size in PostgreSQL",
            explanation: "Use the pg_database_size function to get the size in bytes and pg_size_pretty to format it into a more readable size (e.g., MB, GB). Specify the database name as a parameter."
            ,
            code: `SELECT pg_size_pretty(pg_database_size('trading'));`,
            language: "sql"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Query returns zero or empty results for MariaDB",
            solution: "Ensure you have access to the information_schema database and that the user has appropriate privileges to read metadata tables. Also, confirm the database server is MariaDB or compatible."
          },
          {
            problem: "pg_database_size throws error or returns null in PostgreSQL",
            solution: "Verify that the database name is spelled correctly and exists, and that the current user has permission to access the database size information. Also, check if the PostgreSQL version supports pg_database_size function."
          }
        ]}
      />
    </>
  );
}
