import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

export default function BackupAndRestorePage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Backup and Restore an ERPNext Site Using the Bench CLI"
        description="Learn the step-by-step process for creating and restoring backups of your ERPNext site, including database and files, using essential bench commands."
        snippetName="Backup & Restore ERPNext"
        language="bash"
        category="ERPNext Administration"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "Properly backing up and restoring your ERPNext site is a critical administrative task for disaster recovery, server migration, or creating staging environments. The Frappe Bench Command Line Interface (CLI) provides a powerful and straightforward set of tools to manage this process. This guide covers the end-to-end workflow for creating a complete site backup and restoring it successfully."
        ]}
      />

      {/* Quick Reference Table */}
      <div className="my-8 overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            ⚡ Quick Command Reference
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Copy these commonly used commands for immediate use.
          </p>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground uppercase text-xs">
              <tr>
                <th className="px-6 py-3 whitespace-nowrap">Task</th>
                <th className="px-6 py-3 whitespace-nowrap">Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Backup Everything</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench backup --with-files</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Backup DB Only</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench backup</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Restore Site</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench restore /path/to/backup.sql.gz</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Update Schema</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench migrate</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Access DB Console</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench mysql</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CodeBlock
        code={`// 1. Select the site you want to back up
bench use your_site_name.com

// 2. Take a backup of the database only
bench backup

// 3. Take a backup including database, public, and private files (Recommended)
bench backup --with-files

// Example: Specifying the site directly
bench --site erp.example.com backup --with-files

// --- RESTORE PROCESS ---

// 1. Drop the current database to ensure a clean restore
// This is a destructive action!
bench --site your_site_name.com mysql
-- You are now in the MariaDB/MySQL console
DROP DATABASE \`_your_database_name\`;
exit;

// 2. Restore the database from an SQL backup file
bench --site your_site_name.com restore path/to/your/database.sql.gz

// 3. IMPORTANT: Copy the 'encryption_key' from the old site_config.json to the new one.

// 4. Restore database and files together using the --force flag
bench --force --site your_site_name.com restore \
  /path/to/database.sql.gz \
  --with-public-files /path/to/public-files.tar \
  --with-private-files /path/to/private-files.tar`}
        language="bash"
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This set of commands provides a complete workflow for creating full backups (database and files) of an ERPNext site and restoring them to a new or existing bench instance."
        whenToUse="Use these commands during site migrations, before major upgrades, for disaster recovery, or for creating development/staging environments from a production backup."
        prerequisites={[
          "SSH access to the server hosting ERPNext",
          "Frappe Bench has been initialized",
          "Sudo or appropriate user permissions for file system and database operations"
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "The Frappe Bench CLI is the primary tool for managing Frappe/ERPNext installations. It simplifies tasks like creating sites, installing apps, running migrations, and managing backups.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet"
          },
          {
            title: "Site Backups (`--with-files`)",
            description: "A standard 'bench backup' only saves the database. The '--with-files' flag is crucial as it also archives the 'public/files' and 'private/files' directories, which contain user uploads and attachments.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-multitenancy#backups"
          },
          {
            title: "site_config.json & encryption_key",
            description: "This file, located in `sites/{your_site_name}/`, contains site-specific configurations, including database credentials and the vital 'encryption_key'. This key is used to encrypt sensitive data. It MUST be identical between the source and restored site for data to be readable.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/site_config"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create a Complete Backup",
            explanation: "First, navigate to your bench directory. Use the 'bench backup' command with the '--with-files' flag to ensure both your database and your user-uploaded files are included. This will create several files (SQL, public files tar, private files tar) in your site's `private/backups` folder.",
            code: "cd /path/to/your/frappe-bench/\nbench backup --site your_site_name.com --with-files",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Prepare the Target Site for Restore",
            explanation: "On the destination server, you must drop the existing database to prevent conflicts. The 'bench mysql' command gives you direct access to the database console. This is a destructive step, so be certain you are on the correct site.",
            code: "bench --site your_site_name.com mysql\n-- In the MariaDB/MySQL prompt:\nDROP DATABASE \`_your_database_name\`;\nexit;",
            language: "sql"
          },
          {
            stepNumber: 3,
            title: "Restore the Database and Files",
            explanation: "Use the 'bench restore' command. The '--force' flag is often needed to bypass certain checks. Provide the full paths to your database backup, public files, and private files archives.",
            code: "bench --force --site your_site_name.com restore \\\n  /path/to/20230101_xxxx_database.sql.gz \\\n  --with-public-files /path/to/20230101_xxxx-files.tar \\\n  --with-private-files /path/to/20230101_xxxx-private-files.tar",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Copy the Encryption Key",
            explanation: "This is the most critical step. After restoring, find the `site_config.json` file from your source site's backup or original server. Copy the value of `encryption_key` and paste it into the `site_config.json` of your newly restored site. Without this, you will face decryption and permission errors.",
            code: "// Example of site_config.json entry\n{\n  \"db_name\": \"_your_database_name\",\n  \"db_password\": \"...\",\n  \"encryption_key\": \"COPY THIS VALUE\"\n}",
            language: "json"
          },
          {
            stepNumber: 5,
            title: "Run Migrations",
            explanation: "After restoring the database and fixing the encryption key, run 'bench migrate' to ensure the database schema is up-to-date with the installed Frappe/ERPNext apps version.",
            code: "bench --site your_site_name.com migrate",
            language: "bash"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "After restoring, I see 'Not Permitted' or decryption errors.",
            solution: "This is almost always caused by a mismatched 'encryption_key'. Double-check that you have correctly copied the entire 'encryption_key' string from the source site's `site_config.json` to the destination site's `site_config.json` and then run 'bench migrate' again."
          },
          {
            problem: "The 'bench restore' command fails with a permission error.",
            solution: "Ensure the Linux user running the 'bench' command has read permissions for the backup files. Also, check that the MySQL user defined in `site_config.json` has the necessary privileges (CREATE, DROP, etc.) on the database."
          },
          {
            problem: "My uploaded files (images, attachments) are missing after restore.",
            solution: "This happens if you did not use the '--with-files' flag during backup or forgot to include the '--with-public-files' and '--with-private-files' flags during the restore process. You must restore the file archives in addition to the database."
          }
        ]}
      />
    </main>
  );
}
