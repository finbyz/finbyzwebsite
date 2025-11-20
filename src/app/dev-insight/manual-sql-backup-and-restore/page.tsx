import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function ManualSQLBackupRestore() {
  const codeSnippet = `sudo nano /etc/mysql/conf.d/settings.conf

# Change or add the following line at the bottom:
max_allowed_packet=256M

# Add below section:
[mysqldump]
max_allowed_packet=256M     # backup will not create if [mysqldump] is not there

# For larger backup size set max_allowed_packet to 1G in the main my.cnf:
sudo nano /etc/mysql/my.conf

# Example content:
[mysqld]
max_allowed_packet=1G
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to manually configure MySQL for large database backups and restore?"
        description="Solving issues of large MySQL backups by adjusting max_allowed_packet settings in MySQL configuration files to enable successful dump and restore operations."
        snippetName="Manual SQL backup and restore"
        language="sql"
        category="Database Administration"
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> 
          When performing backups and restores of large MySQL databases, users commonly encounter errors or incomplete processes due to the default packet size restrictions in MySQL configuration.
          The <code>max_allowed_packet</code> setting limits the size of the data packets the server can handle, causing mysqldump to fail for large datasets.
          
          <br />
          <strong>Solution:</strong> 
          By configuring the <code>max_allowed_packet</code> parameter in both the main server settings and the <code>[mysqldump]</code> section, you increase the allowable packet size, enabling larger backups and restores to succeed.
          This involves editing MySQL configuration files and restarting the MySQL server.
          
          <br />
          No description was provided with the snippet, so this explanation is based on the configuration actions presented.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="sql"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://sectigostore.com/page/how-to-backup-mysql-database-on-linux-ubuntu/"
        referenceLinkText="How to Backup MySQL Database on Linux Ubuntu"
      />

      <CodeOverview
        whatItDoes="This snippet updates MySQL configuration files to increase the 'max_allowed_packet' value, allowing mysqldump to create backups of large databases without failure due to packet size limits."
        whenToUse="Use this when encountering errors or limitations backing up or restoring large MySQL databases, especially when mysqldump fails or produces incomplete backups."
        prerequisites={[
          "You have administrative rights to edit MySQL configuration files on your Linux server.",
          "Basic familiarity with MySQL server configuration and restarting services.",
          "Ensure MySQL is installed and running on your Ubuntu or Linux system.",
          "Backup existing configuration files before modifying them to prevent misconfiguration."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "max_allowed_packet",
            description: "A MySQL server variable that controls the maximum size of one packet or any generated/intermediate string.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet"
          },
          {
            title: "mysqldump",
            description: "A client utility for creating logical backups of MySQL databases by dumping database contents as SQL statements.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html"
          },
          {
            title: "MySQL Configuration Files",
            description: "Files such as my.cnf or conf.d/*.cnf that determine server parameters and behavior.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/option-files.html"
          },
          {
            title: "Backup and Restore",
            description: "Procedures to safely export and import database data to prevent data loss.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Edit max_allowed_packet for mysqldump",
            explanation: "Open or create the MySQL configuration file for mysqldump under /etc/mysql/conf.d/ and set the max_allowed_packet size to 256M to allow larger dumps.",
            code: "sudo nano /etc/mysql/conf.d/settings.conf\n\n[mysqldump]\nmax_allowed_packet=256M",
            language: "ini"
          },
          {
            stepNumber: 2,
            title: "Set max_allowed_packet in mysqld",
            explanation: "Modify the main MySQL server config file (usually /etc/mysql/my.conf) to set the max_allowed_packet size to 1G in the [mysqld] section for larger packet handling.",
            code: "sudo nano /etc/mysql/my.conf\n\n[mysqld]\nmax_allowed_packet=1G",
            language: "ini"
          },
          {
            stepNumber: 3,
            title: "Restart MySQL service",
            explanation: "Apply the new configuration by restarting the MySQL server to ensure the new max_allowed_packet values take effect.",
            code: "sudo systemctl restart mysql",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Perform mysqldump backup",
            explanation: "Run mysqldump for your database, now capable of handling larger packets, to export the database contents.",
            code: "mysqldump -u user -p database_name > backup.sql",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Backup fails or is incomplete due to 'packet too large' errors.",
            solution: "Increase max_allowed_packet size in both [mysqld] and [mysqldump] sections of MySQL config files, then restart MySQL."
          },
          {
            problem: "mysqldump command does not create backup file.",
            solution: "Ensure the [mysqldump] section with max_allowed_packet is added to the config; without it mysqldump may not honor the packet size setting."
          },
          {
            problem: "After changes, old packet size limits still apply.",
            solution: "Restart the MySQL server properly after editing the configuration files to apply changes."
          }
        ]}
      />
    </main>
  );
}
