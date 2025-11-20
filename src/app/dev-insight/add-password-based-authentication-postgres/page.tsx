import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function AddPasswordBasedAuthPostgres() {
  const snippetName = "Add password based authentication postgres";
  const codeSnippet = `# login in postgres
sudo -u postgres psql

# change password for user postgres
ALTER USER postgres PASSWORD '<password>';
\q

# change configration file
sudo nano /etc/postgresql/<version>/main/pg_hba.conf

# change all peer auth to scram-sha-256

# Restart postgres
sudo systemctl restart postgresql`;

  return (
    <> 
      <CodeSnippetHero
        title="How to add password based authentication in PostgreSQL on Ubuntu?"
        description="This guide shows how to set a password for the default 'postgres' user and configure PostgreSQL to use password authentication via scram-sha-256 instead of peer authentication."
        snippetName={snippetName}
        language="Bash"
        category="Database Administration"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: By default, PostgreSQL on Ubuntu uses 'peer' authentication
          which allows local users to connect without a password. This can be
          less secure or incompatible with some access requirements.
          <br />
          Solution: This tutorial explains how to set a password for the
          postgres user and update the pg_hba.conf file to use 'scram-sha-256'
          password authentication, enhancing security.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://chartio.com/resources/tutorials/how-to-set-the-default-user-password-in-postgresql/"
        referenceLinkText="How to Set the Default User Password in PostgreSQL"
      />

      <CodeOverview
        whatItDoes="This snippet logs into the PostgreSQL shell as the 'postgres' user, sets a password for this user with the ALTER USER command, updates the PostgreSQL authentication configuration file to enable password authentication (changing from 'peer' to 'scram-sha-256'), and restarts the PostgreSQL service to apply the changes."
        whenToUse="Use this approach when you want to enable password-based authentication for PostgreSQL users on an Ubuntu system instead of operating with peer authentication. This is especially useful if clients or applications need to authenticate via password."
        prerequisites={[
          "PostgreSQL installed on Ubuntu",
          "Basic command line and sudo privileges",
          "Access to the PostgreSQL server configuration files"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "ALTER USER Command",
            description: "PSQL command used to modify attributes of a user, here to set a password.",
            relatedLink: "https://www.postgresql.org/docs/current/sql-alterrole.html"
          },
          {
            title: "pg_hba.conf Configuration",
            description: "File controlling client authentication, connection types and methods in PostgreSQL.",
            relatedLink: "https://www.postgresql.org/docs/current/auth-pg-hba-conf.html"
          },
          {
            title: "Authentication Methods: peer vs scram-sha-256",
            description: "Peer authenticates using OS user accounts; scram-sha-256 is a password-based method with salted challenge-response.",
            relatedLink: "https://www.postgresql.org/docs/current/auth-password.html"
          },
          {
            title: "Systemctl to restart services",
            description: "Used to reload PostgreSQL to apply configuration changes.",
            relatedLink: "https://www.freedesktop.org/software/systemd/man/systemctl.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Login to PostgreSQL shell as 'postgres' user",
            explanation:
              "Use sudo to switch to the postgres system user and open the PostgreSQL interactive terminal where commands are executed.",
            code: "sudo -u postgres psql",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Change the 'postgres' user password",
            explanation:
              "Inside the psql shell, run the ALTER USER command to assign a new password to the postgres database user. Replace <password> with your secure password.",
            code: "ALTER USER postgres PASSWORD '<password>';",
            language: "sql"
          },
          {
            stepNumber: 3,
            title: "Exit the PostgreSQL shell",
            explanation: "Leave the psql interface after setting the password.",
            code: "\q",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Edit pg_hba.conf to modify authentication",
            explanation:
              "Open the PostgreSQL authentication configuration file with a text editor using the correct version subdirectory. Change all 'peer' entries to 'scram-sha-256' for password-based authentication.",
            code: "sudo nano /etc/postgresql/<version>/main/pg_hba.conf",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Restart PostgreSQL service",
            explanation:
              "Apply the configuration changes by restarting the PostgreSQL service using systemctl.",
            code: "sudo systemctl restart postgresql",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Unable to connect because password authentication failed",
            solution: "Verify that the password is set correctly, the pg_hba.conf is changed to scram-sha-256, and PostgreSQL service was restarted."
          },
          {
            problem: "Editing pg_hba.conf has no effect",
            solution: "Check that the correct version directory in /etc/postgresql/ is used and the service was restarted after changes."
          },
          {
            problem: "Command 'sudo -u postgres psql' returns 'permission denied'",
            solution: "Ensure you have sudo privileges and that the 'postgres' system user exists and is accessible."
          }
        ]}
      />
    </>
  );
}
