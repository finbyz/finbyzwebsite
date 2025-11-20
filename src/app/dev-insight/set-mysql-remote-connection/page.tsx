import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function SetMysqlRemoteConnection() {
  const snippetName = "Set MySQL Remote Connection";
  const language = "bash"; // shell scripting / command line
  const category = "Command Line";

  const codeSnippet = `# 1. Modify MySQL config file to allow remote connections
# Edit /etc/mysql/my.cnf or /etc/my.cnf and comment out these lines:
# bind-address=127.0.0.1
# skip-networking

# 2. Log in to MySQL as root
mysql -u root -p

# 3. Run the following SQL command inside MySQL to grant privileges:
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '[ROOT-SQL-PASSWORD]' WITH GRANT OPTION;

# 4. Exit MySQL and restart the MySQL service
exit
sudo service mysql restart
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Allow Remote Connections to MySQL Server on Ubuntu?"
        description="This snippet demonstrates how to configure a MySQL server on Ubuntu to accept remote connections by editing configuration files, granting privileges, and restarting the MySQL service."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: By default, MySQL servers on Ubuntu listen only on localhost
          (127.0.0.1), preventing remote hosts from connecting. To enable remote
          access, you must reconfigure MySQL to listen on all interfaces and
          grant proper user privileges.
          <br />
          Solution: This guide provides terminal commands and configuration
          changes required to securely enable remote MySQL connections.
          <br />
          No external references were provided.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Configures MySQL server to accept connections from any IP address by modifying configuration and user privileges."
        whenToUse="Use when you need to connect to your MySQL server remotely, such as from another machine or application server."
        prerequisites={[
          "Root access to your Ubuntu server",
          "MySQL server installed and running",
          "Knowledge of your MySQL root user's password"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "MySQL bind-address",
            description:
              "Determines which IP addresses MySQL listens on; commenting this allows listening on all interfaces.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/server-options.html#option_mysqld_bind-address"
          },
          {
            title: "GRANT statement",
            description:
              "SQL command to assign user privileges, here allowing 'root' user remote access from any host.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/grant.html"
          },
          {
            title: "MySQL service management",
            description:
              "Managing MySQL server processes via system commands to apply configuration changes.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Modify MySQL configuration to allow remote connections",
            explanation: "Comment out 'bind-address' and 'skip-networking' in MySQL config to enable listening on all IP addresses.",
            code: `# Open config file with sudo nano /etc/mysql/my.cnf
# Comment out the following lines:
# bind-address=127.0.0.1
# skip-networking`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Log into MySQL as root",
            explanation: "Access the MySQL shell with root privileges to run grant commands.",
            code: "mysql -u root -p",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Grant remote access privileges",
            explanation: "Run SQL command to allow 'root' user to connect remotely from any IP with full privileges.",
            code: `GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '[ROOT-SQL-PASSWORD]' WITH GRANT OPTION;`,
            language: "sql"
          },
          {
            stepNumber: 4,
            title: "Restart MySQL service",
            explanation: "Exit MySQL shell and restart the MySQL service for changes to take effect.",
            code: "sudo service mysql restart",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Cannot connect remotely to MySQL server",
            solution: "Ensure bind-address is commented out and MySQL service has been restarted. Verify firewall allows MySQL port 3306."
          },
          {
            problem: "Access denied for user when connecting remotely",
            solution: "Check that the GRANT statement was run with the correct user and host ('root'@'%') and the password matches."
          },
          {
            problem: "Changes to my.cnf not applied",
            solution: "Confirm you edited the correct my.cnf file. Some systems use /etc/mysql/mysql.conf.d/mysqld.cnf. Restart service after changes."
          }
        ]}
      />
    </main>
  );
}
