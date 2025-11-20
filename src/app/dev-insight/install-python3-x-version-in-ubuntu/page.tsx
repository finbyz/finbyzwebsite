import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function InstallPython3Ubuntu() {
  const snippetName = "Install python3.x version in ubuntu";
  const code = `# Replace x with version for example 11
sudo apt update
sudo apt upgrade -y

# Import Python PPA on Ubuntu 22.04 or 20.04
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update

# Install Python 3.x on Ubuntu 22.04 or 20.04
sudo apt install python3.x

# Add dependecies
sudo apt install python3.x-dev python3.x-venv 

# To install all the extras in one go, run the following command.
sudo apt install python3.x-full

# create virutal env python
python3.x -m venv venv

# it will create virutual env in venv folder`;

  return (
    <main>
      <CodeSnippetHero
        title="How to install a specific Python 3.x version on Ubuntu?"
        description="This snippet explains how to add the deadsnakes PPA and install different Python 3.x versions on Ubuntu 20.04 or 22.04, including setup of virtual environments and additional dependencies."
        snippetName={snippetName}
        language="bash"
        category="Ubuntu"
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          The problem many Ubuntu users face is how to install a specific version
          of Python 3 beyond the default repositories, which might be outdated or limited.
          This snippet solves the problem by adding the deadsnakes PPA, a widely trusted
          source for Python packages, allowing users to install any supported Python
          3.x version easily. It also covers installing development headers,
          virtual environments, and full package sets, providing a flexible setup
          for Python development on Ubuntu 20.04 and 22.04.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Adds the deadsnakes PPA to Ubuntu's package sources, updates package lists, and installs a specified Python 3.x version along with development and virtual environment packages. It also includes creating a Python virtual environment."
        whenToUse="Use when you need a more recent or specific Python 3.x version than the default Ubuntu repositories provide, such as for development or compatibility with specific projects."
        prerequisites={[
          "Ubuntu 20.04 or 22.04 environment",
          "sudo privileges to add PPAs and install packages",
          "Internet access to add repository and download packages"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "deadsnakes PPA",
            description: "A popular Personal Package Archive for installing newer Python versions on Ubuntu.",
            relatedLink: "https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa"
          },
          {
            title: "Python Virtual Environments",
            description: "Isolated Python environments to manage dependencies independently.",
            relatedLink: "https://docs.python.org/3/tutorial/venv.html"
          },
          {
            title: "apt package manager",
            description: "Ubuntu's command-line tool for installing and managing software packages.",
            relatedLink: "https://help.ubuntu.com/community/AptGet/Howto"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Update and upgrade existing packages",
            explanation: "Ensure your system’s package lists and installed packages are up to date to avoid conflicts.",
            code: `sudo apt update
sudo apt upgrade -y`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Add the deadsnakes PPA",
            explanation: "Add the external repository providing newer Python versions not available in default repos.",
            code: `sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Install the desired Python 3.x version",
            explanation: "Install the specified Python 3.x version. Replace 'x' with your desired version number, e.g., 11.",
            code: `sudo apt install python3.x`,
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Install development dependencies and virtual environment support",
            explanation: "To compile Python extensions and create virtual environments, install -dev and -venv packages.",
            code: `sudo apt install python3.x-dev python3.x-venv`,
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Install full Python package suite",
            explanation: "For a complete installation including additional packages and tools, install the '-full' package.",
            code: `sudo apt install python3.x-full`,
            language: "bash"
          },
          {
            stepNumber: 6,
            title: "Create a Python virtual environment",
            explanation: "Isolate your Python project dependencies by creating a virtual environment named 'venv'.",
            code: `python3.x -m venv venv`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Command 'add-apt-repository' not found",
            solution: "Install the software-properties-common package using 'sudo apt install software-properties-common' before adding the PPA."
          },
          {
            problem: "Python version not found after installation",
            solution: "Verify you replaced 'x' with the actual version number, e.g., python3.11. Also run 'sudo apt update' after adding the PPA."
          },
          {
            problem: "Virtual environment creation fails",
            solution: "Make sure 'python3.x-venv' is installed and you are using the correct Python command matching the installed version."
          }
        ]}
      />
    </main>
  );
}
