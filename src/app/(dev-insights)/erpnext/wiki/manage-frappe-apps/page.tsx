import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetIntroduction from "@/components/code-snippets/code-introduction";

const CreateInstallUninstallAppPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Install and Uninstall a Custom Frappe App using Bench"
        description="Learn how to create, install, and uninstall custom Frappe applications on your site using the Bench CLI, including commands like new-app, get-app, and install-app."
        snippetName="Create Install/ Uninstall App"
        language="bash"
        category="Bench Commands"
        accentColor="orange"
      />
      <CodeSnippetIntroduction
        paragraphs={[
          "Managing custom applications is a core part of extending the Frappe Framework. The Bench Command Line Interface (CLI) is the essential tool for handling the entire lifecycle of an app, from its creation or retrieval from a version control system to its installation on a specific Frappe site, and its eventual removal. These commands are fundamental for both development and production environments.",
        ]}
      />

      {/* Quick Reference Table */}
      <div className="my-8 overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 border-b border-orange-100 dark:border-orange-800">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-orange-900 dark:text-orange-100">
            ⚡ Quick Command Reference
          </h2>
          <p className="text-sm text-orange-800 dark:text-orange-200 mt-1">
            Common commands for managing Frappe Apps.
          </p>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground uppercase text-xs">
              <tr>
                <th className="px-6 py-3 whitespace-nowrap">Goal</th>
                <th className="px-6 py-3 whitespace-nowrap">Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Download App</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench get-app [repo_url]</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Install on Site</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench --site [site] install-app [app]</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Remove from Site</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench --site [site] uninstall-app [app]</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Delete App Code</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench remove-app [app]</code></td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-medium">Create New App</td>
                <td className="px-6 py-4"><code className="bg-muted px-2 py-1 rounded text-primary">bench new-app [app_name]</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CodeBlock
        language="bash"
        allowCopy={true}
        code={`// Create a new boilerplate app
bench new-app [app_name]

// Or get an existing app from a git repository
bench get-app [app_name] [git_repository_url]
// Example:
bench get-app fleet_management https://github.com/dalwadani/fleet_management

// Get a specific version of an app using the --branch flag
bench get-app --branch v13 finbyzerp https://github.com/finbyz/finbyzerp.git

// Switch to the site where you want to install the app
bench use [site_name]

// Install the app on the selected site
bench --site [site_name] install-app [app_name]
// Example:
bench --site site1.local install-app election

// Uninstall the app from the site (removes database tables and data)
bench --site [site_name] uninstall-app [app_name]
// Example:
bench --site site1.local uninstall-app election

// (Optional) Remove the app from the list of installed apps if uninstall fails
bench remove-from-installed-apps [app_name]`}
      />
      <CodeOverview
        whatItDoes="This collection of Bench commands allows a developer to manage the entire lifecycle of a custom Frappe application, from creation or fetching from a Git repository to installing it on a specific site and subsequently uninstalling or removing it."
        whenToUse="Use these commands when developing new Frappe applications, deploying third-party apps to your Frappe sites, or cleaning up unused applications from your bench environment."
        prerequisites={["Frappe Bench installed on your system", "An active Frappe site", "Git installed on the server"]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "Bench is the command-line tool used to manage a Frappe environment. It handles everything from creating new sites and apps to updating, backing up, and serving your Frappe instance.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet",
          },
          {
            title: "Frappe App",
            description: "A Frappe App is a self-contained module that extends the functionality of the Frappe Framework. It can contain DocTypes, scripts, new pages, and business logic. All custom features are typically packaged into apps.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/apps",
          },
          {
            title: "Frappe Site",
            description: "Frappe supports multi-tenancy through 'sites'. Each site has its own database and files, allowing you to run multiple independent instances from a single Frappe bench installation. Commands like 'install-app' are site-specific.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-multitenancy",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create or Download the App",
            explanation: "First, you need to get the app's source code into your bench's 'apps' directory. You can either create a new boilerplate app using `new-app` or download an existing one from a Git repository using `get-app`.",
            code: `// Option A: Create a new app
bench new-app my_custom_app

// Option B: Get an app from GitHub
bench get-app erpnext_support https://github.com/frappe/erpnext_support`,
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Select the Target Site",
            explanation: "If you manage multiple sites on your bench, you need to specify which one you are working with. The `bench use` command sets the default site for subsequent commands.",
            code: "bench use my_site.local",
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "Install the App",
            explanation: "Once the app code is in the 'apps' folder and the target site is selected, run the `install-app` command. This will create the necessary database tables (DocTypes) and execute any installation hooks defined in the app.",
            code: "bench --site my_site.local install-app my_custom_app",
            language: "bash",
          },
          {
            stepNumber: 4,
            title: "Uninstall the App",
            explanation: "To remove an app from a site, use the `uninstall-app` command. This is a destructive operation that will delete all DocTypes and data associated with the app from that site's database.",
            code: "bench --site my_site.local uninstall-app my_custom_app",
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Error: App not found",
            solution: "This typically happens during `install-app` if the app's source code is not in the `frappe-bench/apps` directory. Ensure that your `bench get-app` or `bench new-app` command completed successfully and the app folder exists.",
          },
          {
            problem: "Permission denied errors",
            solution: "Bench commands should be run by the user who owns the Frappe bench installation. Avoid using `sudo` as it can corrupt file permissions. Ensure your user has read/write/execute permissions for the entire `frappe-bench` directory.",
          },
          {
            problem: "Changes not reflecting after install",
            solution: "After installing an app, you must restart the bench for the server to recognize the new code. Run `bench restart`. You may also need to run `bench migrate` if the app has database schema changes and clear your browser cache.",
          },
        ]}
      />
    </main>
  );
};

export default CreateInstallUninstallAppPage;
