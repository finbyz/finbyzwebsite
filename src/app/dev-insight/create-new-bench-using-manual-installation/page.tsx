import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function Page() {
  const snippetName = "Create New Bench using Manual Installation";
  const language = "bash";
  const category = "Frappe CLI";

  const codeSnippet = `bench init --frappe-branch <version> <name of the bench>
//eg. bench init --frappe-branch version-13 ideal

install erpnext:
bench get-app --branch <version> erpnext https://github.com/frappe/erpnext.git
//eg. bench get-app --branch version-13 erpnext https://github.com/frappe/erpnext.git

bench new-site <name of the site>
//eg.bench new-site erp.idealbobbin.com

sudo bench setup production <user>
//eg. sudo bench setup production ubuntu
//refer: https://frappeframework.com/docs/v13/user/en/bench/guides/setup-production`;

  return (
    <>
      <CodeSnippetHero
        title="How to create a new bench and set up ERPNext using manual CLI commands?"
        description="This snippet demonstrates the process of manually initializing a new bench with a specific Frappe branch, installing the ERPNext app, creating a new site, and setting up production on a Linux server via the command line."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />
      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <b>Problem:</b> Setting up a new Frappe bench environment manually
          requires several CLI commands that must be executed in correct order.
          This process can be confusing for new users who want to deploy ERPNext
          or Frappe Framework on their servers.
          <br />
          <b>Solution:</b> This snippet walks through the base commands to
          initialize a bench with a specific Frappe version branch, install ERPNext,
          create a new site for hosting the application, and finalize the setup
          for production use on Ubuntu or compatible Linux environments.
          <br />
          The commands are designed to be run in a terminal shell (bash).
        </p>
      </section>
      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://frappeframework.com/docs/v13/user/en/bench/guides/manual-setup"
        referenceLinkText="Frappe Manual Setup Guide"
      />
      <CodeOverview
        whatItDoes="Initializes a new bench with a selected Frappe branch, installs ERPNext app, creates a new site within the bench, and configures the environment for production use."
        whenToUse="Use these commands when manually deploying a fresh Frappe/ERPNext instance on a Linux server where automated installation scripts are not utilized. Useful for custom setups or specific version requirements."
        prerequisites={[
          "Access to a Linux server with Python and necessary dependencies installed.",
          "Familiarity with Linux command line and sudo privileges.",
          "Git installed to clone repositories.",
          "Basic knowledge of Frappe bench CLI usage."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "bench init",
            description: "Initializes a new bench folder with the specified Frappe branch, preparing the environment for app installation and site creation.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/bench/reference#bench-init"
          },
          {
            title: "bench get-app",
            description: "Downloads an application like ERPNext into the bench with a specific branch version.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/bench/reference#bench-get-app"
          },
          {
            title: "bench new-site",
            description: "Creates and configures a new site within the bench, including database setup and configuration.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/bench/reference#bench-new-site"
          },
          {
            title: "bench setup production",
            description: "Configures the bench for production deployment by setting up services like supervisor and nginx.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/bench/guides/setup-production"
          },
          {
            title: "Frappe Branch",
            description: "The version branch of the Frappe Framework which dictates the codebase version being used.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/bench"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Initialize a New Bench",
            explanation: "Use the 'bench init' command to create a new bench directory. Specify the Frappe branch version to ensure compatibility. This sets up the necessary files and environment.",
            code: "bench init --frappe-branch <version> <name_of_the_bench>",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Install the ERPNext App",
            explanation: "Inside the bench folder, use 'bench get-app' to clone the ERPNext repo on the given branch. This makes ERPNext available to the bench for site installation.",
            code: "bench get-app --branch <version> erpnext https://github.com/frappe/erpnext.git",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Create a New Site",
            explanation: "Create a new site inside the bench using 'bench new-site' and provide the fully qualified domain name for the site. This sets up the database and site configuration.",
            code: "bench new-site <name_of_the_site>",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Set Up Production Environment",
            explanation: "Configure the bench for production by setting up system services to run Frappe automatically. The command requires sudo privileges and the user to run as.",
            code: "sudo bench setup production <user>",
            language: "bash"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Bench commands fail due to missing dependencies or permissions.",
            solution: "Ensure all prerequisites like Python, Node.js, Redis, MariaDB, and required system packages are installed. Run commands with appropriate permissions and check sudo access."
          },
          {
            problem: "Site creation fails due to database connection errors.",
            solution: "Verify MariaDB server is running and accessible. Check database user and password configurations. Ensure MySQL / MariaDB service is enabled and started."
          },
          {
            problem: "ERPNext app not found or branch does not exist.",
            solution: "Verify the branch name and URL used in 'bench get-app' command are correct. Check network connectivity and repository access permissions."
          },
          {
            problem: "Production setup service fails to start.",
            solution: "Review system logs for supervisor, nginx, and bench services. Confirm configuration files generated correctly and user provided matches the system user. Restart services after fixes."
          }
        ]}
      />
    </>
  );
}
