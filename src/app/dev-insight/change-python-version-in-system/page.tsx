import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function ChangePythonVersionPage() {
  const snippetName = "Change Python version in system";
  const language = "bash";
  const category = "Commandline";

  return (
    <main>
      <CodeSnippetHero
        title="How to change the Python version in a virtual environment on Ubuntu?"
        description="Steps to select and use a specific Python version in a new virtual environment on Ubuntu by installing the desired Python version, setting up a virtual environment, and activating it."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />
      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When working on different Python projects, you may need to use a specific
          Python version in a virtual environment, but your system might have multiple Python versions installed.
          Managing the correct Python version per project manually can be error-prone.
        </p>
        <p>
          <strong>Solution:</strong> This guide shows how to install a required Python version using Ubuntu's package
          manager, create a new virtual environment using that Python version, activate it, and verify the Python
          version in use.
        </p>
      </section>

      <CodeBlock
        code={`sudo apt install python3.10
python3.10 -m venv v14
source v14/bin/activate
python -V`}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Installs a specific Python version (3.10) in Ubuntu, creates a new virtual environment using that Python version, activates it, and checks the Python version currently active in the virtual environment."
        whenToUse="Use this method when you need to run your Python project with a specific Python version different from your system's default version."
        prerequisites={[
          "Ubuntu system with sudo privileges",
          "Basic knowledge of terminal and command line",
          "Python's venv module installed (usually included with Python 3.3+)",
          "Desired Python version available via apt"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Installing Python via apt",
            description: "Ubuntu's package management system allows installing specific Python versions easily.",
            relatedLink: "https://help.ubuntu.com/community/Python"
          },
          {
            title: "virtualenv and venv module",
            description: "Python built-in module to create isolated environments to avoid dependency conflicts between projects.",
            relatedLink: "https://docs.python.org/3/library/venv.html"
          },
          {
            title: "Activating a virtual environment",
            description: "Modify the current shell environment by sourcing the activate script to use the virtual environment's Python.",
            relatedLink: "https://docs.python.org/3/tutorial/venv.html#how-venvs-work"
          },
          {
            title: "Checking Python version",
            description: "Use the `python -V` command to check the currently active Python interpreter version.",
            relatedLink: "https://docs.python.org/3/using/cmdline.html#cmdoption-v"
          },
          {
            title: "Why use virtual environments",
            description: "Isolating project dependencies prevents version conflicts and ensures consistent behavior across development and deployment.",
            relatedLink: "https://realpython.com/python-virtual-environments-a-primer/"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Install the desired Python version",
            explanation: "Install Python 3.10 on your Ubuntu system using the apt package manager. This ensures Python 3.10 is available for use when creating virtual environments.",
            code: "sudo apt install python3.10",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Create a new virtual environment",
            explanation: "Use Python 3.10 to create a virtual environment named v14. This isolates your Python environment for your project.",
            code: "python3.10 -m venv v14",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Activate the virtual environment",
            explanation: "Activate the virtual environment to modify your shell's environment variables so that you use the Python executable and installed packages within the v14 virtual environment.",
            code: "source v14/bin/activate",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Verify the Python version",
            explanation: "Run python -V in the activated environment to confirm you are using the correct Python version (3.10 in this case).",
            code: "python -V",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The desired Python version is not available via apt",
            solution: "Add a PPA or compile Python from source to install the required version. For example, use deadsnakes PPA on Ubuntu."
          },
          {
            problem: "Virtual environment creation fails or the wrong Python version is used",
            solution: "Ensure you call the specific python version executable (e.g., python3.10 -m venv) and that the version is installed correctly."
          },
          {
            problem: "Activate command not found or does not work",
            solution: "Make sure you run 'source v14/bin/activate' in a bash-compatible shell, and the virtual environment folder exists."
          }
        ]}
      />
    </main>
  );
}
