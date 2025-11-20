import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function CheckErpnextVersionFromConsole() {
  const snippetName = "Check erpnext version from console";
  const language = "Python";
  const category = "Frappe Backend";
  const code = `// Go to console
bench console

// run below command
from frappe.utils.change_log import get_versions
get_versions()`;

  return (
    <main>
      <CodeSnippetHero
        title="How to check ERPNext and Frappe framework version from bench console?"
        description="This snippet demonstrates how to retrieve the currently installed versions of ERPNext and the Frappe framework by executing Python commands within the bench console environment."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: In Frappe and ERPNext development or troubleshooting, it is often important to know the exact versions of ERPNext and the Frappe framework you are working with. This can help verify compatibility or debug issues related to versioning.
          <br />
          Solution: You can open the bench console, a Python interactive shell preloaded with your Frappe environment, and use the utility function <code>get_versions()</code> from the <code>frappe.utils.change_log</code> module to fetch a dictionary detailing the current versions of ERPNext, Frappe framework, and their git commits.
          <br />
          No external scripts or tools are required, just running the bench console and executing the commands directly provides this information.
        </p>
      </section>

      <CodeBlock
        code={code}
        language={language.toLowerCase()}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Executes Python code inside the bench console to import the version utility function and calls it to retrieve the versions dictionary."
        whenToUse="Use this method when you need to quickly check the versions of ERPNext and Frappe without leaving your development environment or SSH session."
        prerequisites={["Having bench installed and your ERPNext/Frappe sites set up", "Access to the system terminal and bench console"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "bench console",
            description: "An interactive Python shell that loads your Frappe environment and allows for executing Python commands within your site context.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/bench/reference/bench-console"
          },
          {
            title: "frappe.utils.change_log.get_versions",
            description: "A utility function that returns a dictionary containing the versions of ERPNext, Frappe, and their respective commit hashes.",
            relatedLink: "https://github.com/frappe/frappe/blob/develop/frappe/utils/change_log.py"
          },
          {
            title: "ERPNext and Frappe Versioning",
            description: "Understanding the underlying version control helps in managing updates and debugging.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/updates/versioning"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Open bench console",
            explanation: "Start by opening the bench console to enter the interactive Python shell with your Frappe environment loaded.",
            code: "bench console",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Import version utility",
            explanation: "Import the <code>get_versions</code> function from <code>frappe.utils.change_log</code> to access the method for retrieving version details.",
            code: "from frappe.utils.change_log import get_versions",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Fetch versions",
            explanation: "Call <code>get_versions()</code> to get a dictionary containing the ERPNext, Frappe framework versions and their commit information.",
            code: "get_versions()",
            language: "python"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "bench console command not found or not recognized.",
            solution: "Ensure that bench is installed and available in your system PATH. You may need to activate your virtual environment or reinstall bench tools."
          },
          {
            problem: "ImportError when importing get_versions",
            solution: "Check that you are inside a valid bench environment and that frappe is installed correctly. You must run this inside 'bench console' for the import to work."
          },
          {
            problem: "get_versions() returns unexpected results",
            solution: "Make sure your bench and apps are not in a corrupted state. Running 'bench update' may help refresh the git repos and metadata."
          }
        ]}
      />
    </main>
  );
}
