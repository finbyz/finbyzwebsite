import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

const EnableDeveloperModePage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Enable Developer Mode in Frappe and ERPNext"
        description="Learn to enable developer mode for your Frappe or ERPNext site using the 'bench set-config' command. Essential for debugging and custom app development."
        snippetName="Enable Developer Mode"
        language="Bash"
        category="Frappe CLI"
        accentColor="orange"
      />
      <CodeSnippetInstroduction
        paragraphs={[
          "Enabling developer mode is a fundamental step for anyone building or customizing applications on the Frappe Framework. It disables server-side caching, provides detailed error tracebacks in the browser, and enables other development-friendly features. This allows for a much faster and more efficient development and debugging workflow. The primary tool for managing this setting is the Bench Command Line Interface (CLI)."
        ]}
      />
      <CodeBlock
        code={`# Enable developer mode for the default site
bench set-config developer_mode 1

# Enable developer mode for a specific site (e.g., erpnext.vm)
bench --site erpnext.vm set-config developer_mode 1

# After enabling, restart the bench to apply changes
bench restart`}
        language="bash"
        fileName="Terminal"
        showLineNumbers={false}
      />
      <CodeOverview
        whatItDoes="This command modifies the site's configuration file (`site_config.json`) to set the `developer_mode` flag to `1`, activating development-specific features in the Frappe framework."
        whenToUse="Use this command when you need to develop custom applications, debug server-side Python code, or see detailed error tracebacks directly in the UI. It's a critical first step after setting up a new development site."
        prerequisites={[
          "A working Frappe bench installation.",
          "Terminal or SSH access to the server where the bench is located.",
          "You must be in the main bench directory to run the commands."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "Bench is the command-line tool used to manage Frappe/ERPNext applications. It helps with installation, site management, app management, and running various utilities.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet"
          },
          {
            title: "site_config.json",
            description: "This is a crucial file located in `sites/{your-site-name}/` that holds site-specific configurations, including database credentials, caching settings, and flags like developer_mode.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/site_config"
          },
          {
            title: "Developer Mode",
            description: "A Frappe framework state that disables caches, enables live reloading for certain file types, and shows detailed error reports in the UI, making it indispensable for development.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/developer_mode"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Access Your Server",
            explanation: "Open your terminal or use SSH to connect to the server where your Frappe bench is installed.",
            code: "ssh user@your-server-ip",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Navigate to Your Bench Directory",
            explanation: "Change your current directory to the root of your bench installation. This is typically named `frappe-bench`.",
            code: "cd frappe-bench",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Run the Command",
            explanation: "Execute the `set-config` command. If you have multiple sites, use the `--site` flag to specify which one you are targeting. If you omit the flag, it will apply to the default site.",
            code: "# For a specific site named 'site1.local'\nbench --site site1.local set-config developer_mode 1\n\n# For the default site\nbench set-config developer_mode 1",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Restart Bench Services",
            explanation: "For the configuration change to take full effect, you must restart the bench services. This reloads the configuration for all processes.",
            code: "bench restart",
            language: "bash"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Command 'bench' not found.",
            solution: "This error means the bench executable is not in your system's PATH. Ensure you are logged in as the correct user (e.g., 'frappe') and have navigated to your bench directory. You can also run commands from the bench root using `./env/bin/bench`."
          },
          {
            problem: "Changes don't seem to take effect after running the command.",
            solution: "You must restart the bench for the changes to be loaded by the server processes. Run `bench restart` in your bench directory to apply the new configuration."
          },
          {
            problem: "Permission denied when running the command.",
            solution: "Ensure you have the correct file permissions on the `frappe-bench` directory and its subdirectories. You should be running commands as the user who owns the bench installation."
          }
        ]}
      />
    </main>
  );
};

export default EnableDeveloperModePage;
