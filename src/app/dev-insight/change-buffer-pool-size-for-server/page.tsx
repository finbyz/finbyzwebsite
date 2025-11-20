import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ChangeBufferPoolSizeForServer() {
  const snippetName = "Change Buffer Pool Size for server";
  const language = "bash";
  const category = "Database Configuration";
  const codeSnippet = `# Path : /etc/mysql/my.cnf
[mysqld]
# If innodb_buffer_pool_size exists, set the size, for example:
innodb_buffer_pool_size=1G

# Otherwise, add innodb_buffer_pool_size under [mysqld] and set the size

# Then restart MySQL service
sudo service mysql restart`;

  return (
    <main>
      <CodeSnippetHero
        title="How to change the InnoDB buffer pool size for MySQL server?"
        description="Adjusting the innodb_buffer_pool_size in the MySQL configuration file (my.cnf) to optimize performance and then restarting the MySQL service to apply changes."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          The innodb_buffer_pool_size parameter controls the size of the buffer pool where InnoDB caches data and indexes, which greatly affects
          MySQL performance. The problem is how to properly change this value in the MySQL configuration file and apply this change successfully.
          The solution involves editing the <code>my.cnf</code> file to set or update the <code>innodb_buffer_pool_size</code> parameter under the
          <code>[mysqld]</code> section, followed by restarting the MySQL service for the new settings to take effect.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        fileName="/etc/mysql/my.cnf"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="It configures the size of the InnoDB buffer pool in MySQL by setting the 'innodb_buffer_pool_size' variable within the MySQL server configuration file 'my.cnf'. After updating the setting, it restarts the MySQL server to apply the change."
        whenToUse="Use this snippet when you need to optimize MySQL server performance by increasing or setting the appropriate buffer pool size for InnoDB storage engine."
        prerequisites={[
          "Access to the MySQL server's configuration file (e.g., /etc/mysql/my.cnf on Linux systems)",
          "Appropriate permissions to edit MySQL configuration and restart the MySQL service"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "innodb_buffer_pool_size",
            description: "MySQL server system variable defining the size of the InnoDB buffer pool, crucial for caching data and indexes.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/innodb-buffer-pool.html"
          },
          {
            title: "MySQL Configuration File (my.cnf)",
            description: "Central configuration file used by MySQL server to define server options and system variables.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/option-files.html"
          },
          {
            title: "Restarting MySQL Service",
            description: "Applying configuration changes requires restarting the MySQL server service to reload settings.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/server-startup.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Locate the MySQL configuration file",
            explanation: "Identify the path to the MySQL configuration file, commonly located at /etc/mysql/my.cnf on Linux systems.",
            code: "# Typical config file path\n/etc/mysql/my.cnf",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Edit innodb_buffer_pool_size under [mysqld]",
            explanation: "Open the file with a text editor. If the parameter 'innodb_buffer_pool_size' already exists under the [mysqld] section, update its value. Otherwise, add the parameter with the desired size (e.g., 1G).",
            code: "[mysqld]\ninnodb_buffer_pool_size=1G",
            language: "ini"
          },
          {
            stepNumber: 3,
            title: "Save changes and close the file",
            explanation: "After adding or modifying the parameter, save the file to apply the changes.",
            code: "# No code snippet for saving file",
            language: "text"
          },
          {
            stepNumber: 4,
            title: "Restart MySQL service",
            explanation: "Apply the configuration change by restarting the MySQL service using the appropriate command.",
            code: "sudo service mysql restart",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "MySQL fails to start after changing innodb_buffer_pool_size",
            solution: "Verify the syntax in my.cnf and ensure the value specified is supported by your MySQL version. Also, check system memory limits."
          },
          {
            problem: "No performance improvement after changing innodb_buffer_pool_size",
            solution: "Confirm the configuration file edited is the active one and that the MySQL server was successfully restarted. Use 'SHOW VARIABLES LIKE 'innodb_buffer_pool_size'' in MySQL shell to verify."
          },
          {
            problem: "Permission denied when editing my.cnf or restarting service",
            solution: "Ensure you have root or sudo privileges to edit system files and manage services."
          }
        ]}
      />
    </main>
  );
}
