import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function EnableSchedulerPage() {
  const snippetName = "Enable Scheduler";
  const language = "bash";
  const category = "Commandline";
  const codeSnippet = `# Enable Scheduler for site1.local
bench --site site1.local enable-scheduler

# Disable Scheduler for site1.local
bench --site site1.local disable-scheduler`;

  return (
    <main>
      <CodeSnippetHero
        title="How to enable or disable the scheduler for a Frappe site using Bench CLI?"
        description="Managing the scheduler in Frappe sites is essential to control background jobs. This snippet demonstrates using the Bench command line tool to enable or disable the scheduler for a specific site."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In Frappe-based deployments, managing the execution of scheduled background tasks is
          important for site performance and maintenance. Sometimes it is necessary to temporarily disable or re-enable
          the scheduler for a specific site.
        </p>
        <p>
          <strong>Solution:</strong> This snippet uses the Bench command line interface to enable or disable the scheduler for
          a given site using simple commands. This allows administrators to start or stop scheduled jobs like email digests,
          backups, and other automated tasks as needed.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Allows enabling or disabling the Frappe scheduler for a specific site via Bench CLI commands."
        whenToUse="Use this when you need to control whether scheduled background jobs run on a Frappe site, for
          instance during maintenance or troubleshooting."
        prerequisites={[
          "Bench installed and configured",
          "Frappe site already created (e.g., site1.local)",
          "Access to server shell or command line interface"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Bench Command Line Interface",
            description: "A powerful CLI tool used to manage Frappe sites and apps including background jobs.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench"
          },
          {
            title: "Scheduler",
            description: "The component responsible for running scheduled background tasks like report execution.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/scheduler"
          },
          {
            title: "Site-specific Operations",
            description: "Using the --site flag allows commands to run against a particular Frappe site.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/commands"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Enable Scheduler for a Site",
            explanation: "Run the command with the --site argument and 'enable-scheduler' to start scheduled jobs for the target site.",
            code: "bench --site site1.local enable-scheduler",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Disable Scheduler for a Site",
            explanation: "Run the command with the --site argument and 'disable-scheduler' to stop the scheduler and pause background jobs.",
            code: "bench --site site1.local disable-scheduler",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Scheduler commands fail with 'command not found'",
            solution: "Ensure Bench is properly installed and available in your shell PATH."
          },
          {
            problem: "Scheduler does not start or stop correctly for the site",
            solution: "Verify that the site name is correct and that you have required permissions to execute Bench commands. Check logs for errors."
          }
        ]}
      />
    </main>
  );
}