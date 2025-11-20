import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function ChangeAutoEmailMaxLimit() {
  const snippetName = "Change Auto Email Maximum limit";
  const language = "Bench";
  const category = "Frappe Configuration";

  const codeSnippet = `bench --site site1.local set-config max_reports_per_user 10`;

  return (
    <main>
      <CodeSnippetHero
        title="How to increase the maximum number of auto email reports allowed per user in Frappe?"
        description="Frappe limits users to sending only 3 automatic email reports by default. This snippet shows how to increase that limit by modifying the site configuration using bench commands."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> By default, Frappe limits the number of automatic email reports a single user can receive to 3. This can be restrictive for users requiring more frequent or additional reports.<br />
          <strong>Solution:</strong> Increase the maximum allowed auto email reports per user by updating the site configuration with a bench command, which changes the <code>max_reports_per_user</code> setting.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        showLineNumbers={false}
        allowCopy={true}
        referenceLink="https://discuss.erpnext.com/t/why-only-3-emailed-report-per-user/58683/10"
        referenceLinkText="ERPNext discuss: Why only 3 emailed reports per user?"
      />

      <CodeOverview
        whatItDoes="Modifies the maximum number of automatic email reports that can be sent to a single user by changing a site configuration value."
        whenToUse="Use when you need to increase or customize the default limit on auto email reports per user in Frappe/ERPNext installations."
        prerequisites={[
          "Access to the Frappe bench CLI",
          "Sufficient permissions to run bench commands",
          "Knowledge of your site's name (e.g., site1.local)"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "Command line tool used to manage Frappe sites, configurations, and deployments.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench"
          },
          {
            title: "Site Configuration",
            description: "Settings specific to a Frappe site that can be modified to change behavior such as report limits.",
            relatedLink: "https://frappeframework.com/docs/user/en/site-configuration"
          },
          {
            title: "Auto Email Reports",
            description: "Scheduled automatic sending of reports via email to users.",
            relatedLink: "https://docs.erpnext.com/docs/v13/user/manual/en/setting-up/auto-email-reports"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify your Frappe site name",
            explanation: "Determine the exact site name you want to change the configuration for, usually found in the sites folder or via bench commands.",
            code: "site1.local",
            language: "text"
          },
          {
            stepNumber: 2,
            title: "Run bench set-config command",
            explanation: "Execute the bench CLI command to set the 'max_reports_per_user' configuration key to your desired limit, such as 10.",
            code: "bench --site site1.local set-config max_reports_per_user 10",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Restart the Frappe site",
            explanation: "After configuration changes, restart the site or bench to apply the new settings.",
            code: "bench restart",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The new limit does not take effect after running the command.",
            solution: "Make sure to restart the bench/website after changing configurations. Also check that the site name is correct and you have proper permissions."
          },
          {
            problem: "Getting permission denied or command not found errors.",
            solution: "Run the command with appropriate user permissions (usually the frappe user) and verify that bench is installed and in your PATH."
          }
        ]}
      />
    </main>
  );
}
