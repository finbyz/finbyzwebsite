import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const FixNoModulePsutilPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Fix 'ModuleNotFoundError: No module named psutil' in Frappe Bench?"
        description="Resolve the common 'ModuleNotFoundError: No module named psutil' in Frappe and ERPNext by installing the psutil dependency within your bench's virtual environment using pip."
        snippetName="Error: No module named psutil"
        language="bash"
        category="Frappe Framework"
        accentColor="orange"
      />
      <CodeSnippetInstroduction
        paragraphs={[
          "When working with the Frappe Framework, you might encounter a `ModuleNotFoundError: No module named 'psutil'`. This error typically occurs when starting the bench (`bench start`) or running other bench commands. It indicates that a required Python package, `psutil`, is missing from your bench's virtual environment. `psutil` is a cross-platform library for retrieving information on running processes and system utilization (CPU, memory, disks, network, sensors), and it is a crucial dependency for Frappe's process management.",
          "The following commands show the standard procedure to correctly install or upgrade the `psutil` package within the isolated Python environment of your `frappe-bench`, resolving the error.",
        ]}
      />
      <CodeBlock
        code={`$ cd frappe-bench/
$ source env/bin/activate
$ pip install --upgrade psutil
$ sudo pip install --upgrade psutil`}
        language="bash"
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This set of commands installs the `psutil` Python package into the active Frappe bench virtual environment, resolving the 'No module named psutil' error."
        whenToUse="Use this solution when you see a `ModuleNotFoundError` for `psutil` while running `bench start`, `bench update`, or any other bench command."
        prerequisites={[
          "Access to the server terminal where your Frappe bench is installed.",
          "Sudo privileges may be required for a system-wide installation attempt.",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Frappe Bench Virtual Environment",
            description:
              "Each Frappe bench (`frappe-bench`) contains its own isolated Python virtual environment, typically located in the `env/` directory. It's crucial to install Python dependencies inside this specific environment to ensure they are available to Frappe and ERPNext processes. Activating it with `source env/bin/activate` is the first step before using `pip`.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-cli",
          },
          {
            title: "pip - Python Package Installer",
            description:
              "`pip` is the standard package manager for Python. When the virtual environment is active, running `pip install <package-name>` installs the package locally into that environment, not globally on the system. The `--upgrade` flag ensures you get the latest compatible version.",
            relatedLink: "https://pip.pypa.io/en/stable/getting-started/",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Navigate to Your Bench Directory",
            explanation:
              "Open your terminal and change your current directory to the root of your Frappe bench. This is where the virtual environment folder (`env`) is located.",
            code: `$ cd frappe-bench/`,
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Activate the Virtual Environment",
            explanation:
              "Before installing any packages, you must activate the bench's virtual environment. This ensures that `pip` installs packages in the correct isolated location. Your terminal prompt will usually change to indicate that the environment is active.",
            code: `$ source env/bin/activate`,
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "Install psutil using pip",
            explanation:
              "With the virtual environment active, use `pip` to install the `psutil` package. The `--upgrade` flag ensures that if it's already installed but outdated, it will be updated to the latest version.",
            code: `$ pip install --upgrade psutil`,
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Permission Denied Error",
            solution:
              "If you get a 'Permission denied' error while running `pip install`, it's likely due to file ownership issues within your `frappe-bench` directory. Avoid using `sudo pip` directly as it can install the package system-wide, bypassing the virtual environment. Instead, fix the permissions with `sudo chown -R $USER:$USER .` from within the `frappe-bench` directory and retry the `pip install` command without `sudo`.",
          },
          {
            problem: "Error persists after installation",
            solution:
              "If the error continues after a successful installation, ensure you have activated the correct virtual environment. Also, restart your bench processes completely (`bench restart`) to make sure the newly installed package is loaded.",
          },
          {
            problem: "What is the `sudo pip install` command for?",
            solution:
              "The snippet includes `sudo pip install --upgrade psutil` as a potential last resort. This command attempts a system-wide installation. It is generally **not recommended** for Frappe benches, as dependencies should be managed within the virtual environment. It's included here for completeness but should be avoided unless you have a specific system-level issue.",
          },
        ]}
      />
    </main>
  );
};

export default FixNoModulePsutilPage;
