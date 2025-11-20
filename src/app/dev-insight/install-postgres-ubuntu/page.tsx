import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function InstallPostgresUbuntu() {
  const codeSnippet = `# Create the file repository configuration:
# if x86 based architecture
sudo sh -c 'echo "deb [arch=amd64] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo cp /etc/apt/trusted.gpg /etc/apt/trusted.gpg.d

# Update the package lists:
sudo apt-get update

# Install the latest version of PostgreSQL.
# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':
sudo apt-get -y install postgresql
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to install PostgreSQL on Ubuntu using the official repository?"
        description="This snippet explains how to add the official PostgreSQL repository on Ubuntu, trust its signing key, and install the latest PostgreSQL version using apt-get."
        snippetName="Install Postgres Ubuntu"
        language="Bash"
        category="Database Installation"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: Installing PostgreSQL on Ubuntu using distribution default
          repositories often provides outdated versions. To get the latest
          features and security updates, you need to add the official PostgreSQL
          Apt Repository.
        </p>
        <p>
          Solution: This code shows how to configure the official PostgreSQL
          Apt repository, import its signing key for package authenticity,
          update your package lists, and then install the latest PostgreSQL
          server version.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://www.postgresql.org/download/linux/ubuntu/"
        referenceLinkText="Official PostgreSQL Ubuntu Installation Guide"
      />

      <CodeOverview
        whatItDoes="Adds the official PostgreSQL repository to Ubuntu's package sources, imports its signing key, refreshes apt package lists, and installs PostgreSQL."
        whenToUse="Use this method when you want to ensure installing the latest
          PostgreSQL version on Ubuntu or if you need versions newer than those
          included in Ubuntu's default repositories."
        prerequisites={[
          "You should have sudo privileges.",
          "Your Ubuntu version's codename should be supported by the PostgreSQL
          repository."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "PostgreSQL Apt Repository",
            description:
              "A dedicated package repository maintained by the PostgreSQL
              community to deliver up-to-date versions of PostgreSQL for
              Ubuntu.",
            relatedLink:
              "https://www.postgresql.org/download/linux/ubuntu/"
          },
          {
            title: "Repository Signing Key",
            description:
              "A cryptographic key used to verify the authenticity and integrity
              of packages downloaded from a repository.",
            relatedLink:
              "https://help.ubuntu.com/community/Repositories/Ubuntu"
          },
          {
            title: "apt-get update",
            description:
              "Refreshes your local package database with package metadata from
              configured repositories.",
            relatedLink: "https://manpages.ubuntu.com/manpages/focal/man8/apt-get.8.html"
          },
          {
            title: "apt-get install",
            description:
              "Installs packages and their dependencies from defined package
              sources.",
            relatedLink: "https://manpages.ubuntu.com/manpages/focal/man8/apt-get.8.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Add PostgreSQL Apt Repository",
            explanation:
              "Create a new repository configuration file that points to the
              official PostgreSQL Apt repository for your Ubuntu version and CPU
              architecture. The command uses 'lsb_release -cs' to fetch your
              Ubuntu codename dynamically.",
            code:
              "sudo sh -c 'echo \"deb [arch=amd64] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Import Repository Signing Key",
            explanation:
              "Download the PostgreSQL repository signing key and add it to
              apt's trusted keys to ensure packages are authentic and secure.",
            code:
              "wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\nsudo cp /etc/apt/trusted.gpg /etc/apt/trusted.gpg.d",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Update Package Lists",
            explanation:
              "Run 'apt-get update' to refresh package metadata to include the
              newly added PostgreSQL repository.",
            code: "sudo apt-get update",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Install PostgreSQL",
            explanation:
              "Install the latest PostgreSQL server package from the repository.
              To install a specific version, modify the package name accordingly.",
            code: "sudo apt-get -y install postgresql",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Repository 'https://apt.postgresql.org' not found or
              unsupported Ubuntu codename.",
            solution: "Ensure your Ubuntu release is supported. Check the
              output of 'lsb_release -cs' and verify it matches supported
              names on PostgreSQL's repository page."
          },
          {
            problem: "Packages fail to authenticate after adding the repository.",
            solution: "Make sure the repository signing key was imported
              correctly using 'apt-key add' and verify no networking issues
              occurred during the key download."
          },
          {
            problem: "PostgreSQL does not install or apt-get update errors out.",
            solution: "Check that your 'pgdg.list' repository file was created
              correctly and contains the proper format, and try 'sudo apt-get
              update' again."
          }
        ]}
      />
    </main>
  );
}
