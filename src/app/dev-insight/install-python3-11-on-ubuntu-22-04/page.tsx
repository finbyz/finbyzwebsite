import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const InstallPython311Ubuntu2204 = () => {
  const snippetName = "Install python3.11 on ubuntu 22.04";
  const language = "bash";
  const category = "Linux Installation";

  const codeSnippet = `# Commands

sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11

# Set Python3.11 as default
1. First, run command to create symbolic links for system default python (change python3.10 depends your Ubuntu edition)

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 110
2. Then, add the new Python 3.11 via command:

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 100
3. After that, you may choose which Python as Python3 at any time by running command:

sudo update-alternatives --config python3
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to install and set Python 3.11 as default on Ubuntu 22.04?"
        description="Learn how to add the Deadsnakes repository, install Python 3.11, and configure update-alternatives to switch your default Python version easily."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Ubuntu 22.04 ships with an older Python version by
          default (usually 3.10). For projects requiring Python 3.11, you need to
          install it and configure the system to use it as the default python3
          interpreter.
        </p>
        <p>
          <strong>Solution:</strong> This guide shows how to add the Deadsnakes
          PPA repository containing newer Python versions, perform the
          installation, and manage multiple Python installations with
          <code>update-alternatives</code> to switch between versions smoothly.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://ubuntuhandbook.org/index.php/2022/10/python-3-11-released-how-install-ubuntu/"
        referenceLinkText="Ubuntu Handbook: How to install Python 3.11 on Ubuntu"
      />

      <CodeOverview
        whatItDoes="Adds the Deadsnakes PPA repository, updates the package list, installs Python 3.11, and configures the default python3 interpreter using update-alternatives."
        whenToUse="When you need Python 3.11 on Ubuntu 22.04 or later versions and want to manage multiple Python versions on the same machine."
        prerequisites={[
          "Ubuntu 22.04 or compatible Linux distribution",
          "sudo privileges to add PPAs and install packages"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Deadsnakes PPA",
            description:
              "A popular third-party PPA that provides newer Python versions not available in default Ubuntu repos.",
            relatedLink:
              "https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa"
          },
          {
            title: "apt Package Management",
            description:
              "Debian-based package management system used to update package lists and install software.",
            relatedLink: "https://help.ubuntu.com/community/AptGet/Howto"
          },
          {
            title: "update-alternatives",
            description:
              "A system utility to manage multiple versions of alternatives for common commands, like python3.",
            relatedLink: "https://manpages.ubuntu.com/manpages/jammy/en/man8/update-alternatives.8.html"
          },
          {
            title: "Python version management",
            description:
              "The process of switching default Python versions on a system without affecting system-critical python usage.",
            relatedLink: "https://wiki.python.org/moin/AlternativePythonImplementations"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Add Deadsnakes PPA Repository",
            explanation:
              "The Deadsnakes PPA contains newer Python releases. Adding it enables installation of Python 3.11.",
            code: "sudo add-apt-repository ppa:deadsnakes/ppa",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Update Package List",
            explanation:
              "Fetch the latest package information from the added PPA and other configured repositories.",
            code: "sudo apt update",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Install Python 3.11",
            explanation: "Install the Python 3.11 package from the repository.",
            code: "sudo apt install python3.11",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Set Existing Python 3 Version as Alternative",
            explanation:
              "Register the existing python3.10 binary with update-alternatives with higher priority, so it's default initially.",
            code:
              "sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 110",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Add Python 3.11 as Alternative",
            explanation:
              "Add the new python3.11 binary to alternatives with slightly lower priority.",
            code:
              "sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 100",
            language: "bash"
          },
          {
            stepNumber: 6,
            title: "Choose Default Python Version",
            explanation:
              "Use update-alternatives to interactively select which Python version \\n              is set as default for the python3 command.",
            code: "sudo update-alternatives --config python3",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Python 3.11 command not found after installation",
            solution:
              "Check if the python3.11 binary exists at /usr/bin/python3.11 and re-run update-alternatives steps to register it properly."
          },
          {
            problem:
              "Running python3 still opens an older Python version after configuring alternatives",
            solution:
              "Make sure to run 'sudo update-alternatives --config python3' and select Python 3.11 explicitly."
          },
          {
            problem: "Unable to add deadsnakes PPA due to network or permissions error",
            solution:
              "Ensure you have sudo privileges and a working internet connection to add external PPAs."
          }
        ]}
      />
    </main>
  );
};

export default InstallPython311Ubuntu2204;
