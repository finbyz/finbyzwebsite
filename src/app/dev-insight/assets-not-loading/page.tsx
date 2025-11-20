import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AssetsNotLoading() {
  const snippetName = "Assets not loading";
  const code = `try
    bench update
    bench migrate
    bench build

if still asset does not load try:
    chmod 701 /home/<frappe-user>`;

  return (
    <main>
      <CodeSnippetHero
        title="Why are assets not loading in my Frappe production site?"
        description="This problem occurs when static assets like CSS and JS do not load in production mode, often due to missing builds or file permission issues. This snippet explains how to update and build bench and how to fix permission problems."
        snippetName={snippetName}
        language="Shell"
        category="Frappe Production"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In production deployments of Frappe or ERPNext, static assets (CSS, JS, images) might fail to load, resulting in broken UI or missing styles. This is typically caused by assets not being built properly or incorrect permissions on user directories.
        </p>
        <p>
          <strong>Solution:</strong> This guide shows the necessary bench commands to update, migrate database schemas, and build assets. Additionally, it addresses the need to set the correct permissions on the Frappe user home directory to allow the web server to access asset files correctly.
        </p>
        <p>
          The commands use the bench CLI tool, which is integral to Frappe deployments for managing environments and building assets.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="shell"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://discuss.erpnext.com/t/files-from-assets-directory-not-loading-in-production-mode/3547/5"
        referenceLinkText="ERPNext Discuss: Assets Not Loading in Production"
      />

      <CodeOverview
        whatItDoes="Runs the necessary bench commands to update the app, apply database migrations, and build frontend assets to ensure static files are generated for production. Additionally, it suggests fixing directory permissions to allow access to these assets."
        whenToUse="Use these steps when static assets such as CSS, JS, or images are missing or broken in production mode after deployment or upgrade."
        prerequisites={["Bench CLI installed and configured", "User has SSH or terminal access to the server", "Proper Frappe/ERPNext installation"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "A command-line tool that manages Frappe and ERPNext apps, handles updates, migrations, and building assets.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench"
          },
          {
            title: "bench update",
            description: "Updates the Frappe apps, pulls new code changes, runs migrations, and prepares the environment.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/commands#bench-update"
          },
          {
            title: "bench migrate",
            description: "Applies database schema changes required by app updates.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/commands#bench-migrate"
          },
          {
            title: "bench build",
            description: "Builds front-end assets like CSS and JavaScript bundles for production.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/commands#bench-build"
          },
          {
            title: "Linux File Permissions",
            description: "Setting directory permissions correctly is essential so that the webserver can access assets stored in the Frappe user directories.",
            relatedLink: "https://help.ubuntu.com/community/FilePermissions"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Update Frappe using bench",
            explanation: "Run 'bench update' to fetch the latest code and updates from the installed Frappe and ERPNext apps, preparing the environment for migration and build.",
            code: "bench update",
            language: "shell"
          },
          {
            stepNumber: 2,
            title: "Apply database migrations",
            explanation: "Execute 'bench migrate' to apply any required database schema changes that correspond with the new or updated code.",
            code: "bench migrate",
            language: "shell"
          },
          {
            stepNumber: 3,
            title: "Build frontend assets",
            explanation: "Run 'bench build' to generate production-ready static assets including CSS and JS required for the UI.",
            code: "bench build",
            language: "shell"
          },
          {
            stepNumber: 4,
            title: "Fix directory permissions if assets still don’t load",
            explanation: "If assets remain missing, ensure the Frappe user’s home directory has the correct permissions. The web server must have execute access to traverse the user directory.",
            code: "chmod 701 /home/<frappe-user>",
            language: "shell"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Assets like CSS or JS are not loading in production mode even after running bench build.",
            solution: "Verify the permissions of the Frappe user directory. Use 'chmod 701 /home/<frappe-user>' to ensure the web server can access static assets."
          },
          {
            problem: "Database schema changes are not reflected after app update.",
            solution: "Run 'bench migrate' to apply pending database migrations required by app updates."
          }
        ]}
      />
    </main>
  );
}
