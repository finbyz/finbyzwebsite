import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const ResetMysqlRootPasswordPage = () => {
  const snippetName = "Reset MySQL root Password";
  const language = "sql";
  const category = "Database Administration";

  const codeSnippet = `Sudo mysql

SET PASSWORD FOR 'root'@'localhost' = PASSWORD('mypass');`;

  return (
    <main>
      <CodeSnippetHero
        title="How to reset the root password in MySQL when access is lost?"
        description="This guide explains how to reset the MySQL root password using console commands, allowing you to regain administrative access to your MySQL server."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: If you forget the MySQL root password, you lose access to full
          administrative control over your MySQL database instances.
          <br />
          Solution: You can reset the root password by accessing the MySQL server
          console with appropriate OS privileges (usually sudo) and running the
          SQL command to update the root user's password.
          <br />
          This procedure involves first entering the MySQL console as the system
          root user and then setting a new password for the MySQL root user.
        </p>
      </section>

      <CodeBlock
        code={`sudo mysql

SET PASSWORD FOR 'root'@'localhost' = PASSWORD('x9iLPSqt2@74');`}
        language={language}
        showLineNumbers={false}
        allowCopy={true}
        referenceLink="https://stackoverflow.com/questions/7534056/mysql-root-password-change"
        referenceLinkText="StackOverflow: MySQL root password change"
      />

      <CodeOverview
        whatItDoes="This snippet resets the MySQL root user's password by executing the 'SET PASSWORD' SQL statement inside the MySQL command line interface."
        whenToUse="Use this method when you have lost or forgotten your MySQL root password and need to regain access by setting a new password."
        prerequisites={[
          "You must have administrative privileges on the operating system to run 'sudo mysql'.",
          "MySQL server must be running.",
          "Basic familiarity with command line and SQL commands."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "MySQL Root User",
            description: "The default administrative user in MySQL with full privileges.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/user-account-management.html"
          },
          {
            title: "SET PASSWORD Command",
            description: "SQL statement used to update the password for a MySQL user account.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/set-password.html"
          },
          {
            title: "MySQL Command Line Client",
            description: "The interface to interact with the MySQL server using SQL commands.",
            relatedLink: "https://dev.mysql.com/doc/refman/8.0/en/mysql.html"
          },
          {
            title: "Sudo",
            description: "A unix/linux command to run programs with the security privileges of another user (default root).",
            relatedLink: "https://man7.org/linux/man-pages/man8/sudo.8.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Access MySQL Console as Root",
            explanation: "Run 'sudo mysql' in your terminal to open the MySQL console with superuser privileges. This does not require the MySQL root password but OS-level sudo access.",
            code: "sudo mysql",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Set a New Password for Root",
            explanation: "Inside the MySQL prompt, execute the SQL command that sets a new password for the root user using the PASSWORD() function.",
            code: "SET PASSWORD FOR 'root'@'localhost' = PASSWORD('your_new_password');",
            language: "sql"
          },
          {
            stepNumber: 3,
            title: "Exit MySQL Console",
            explanation: "After running the command successfully, exit the MySQL prompt using 'exit'. Your new password is now set.",
            code: "exit",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Access denied when running 'sudo mysql'",
            solution: "Ensure your current OS user has sudo privileges or try running the console as the system root user."
          },
          {
            problem: "'SET PASSWORD' command fails with an error or is deprecated",
            solution: "For MySQL 5.7.6 and later, use 'ALTER USER' instead, e.g. ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_new_password';"
          },
          {
            problem: "MySQL service is not running",
            solution: "Start the MySQL server service before attempting the password reset. Use 'sudo systemctl start mysql' or relevant command for your OS."
          }
        ]}
      />
    </main>
  );
};

export default ResetMysqlRootPasswordPage;
