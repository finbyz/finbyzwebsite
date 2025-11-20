import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "update node and npm";
const language = "shell";
const category = "Node.js";

const codeSnippet = `sudo apt update

curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -   // replace 14 with required version
for eg: curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

sudo apt-get install -y nodejs
node -v
npm -v`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Update Node.js and npm to a Specific Version on Ubuntu?"
        description="Problem: You want to update to a specific version of Node.js and npm on Ubuntu. Solution: Use the official NodeSource setup script to configure your repository and then install Node.js via apt."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Updating Node.js and npm on Ubuntu can be challenging since the default
          Ubuntu repositories often contain outdated versions. The provided
          commands leverage the official NodeSource repository to install or
          update Node.js to the specified long-term support (LTS) version. The
          script automatically configures the apt repository, ensuring you get
          up-to-date and supported Node.js releases. After setup, Node.js and npm
          are installed and their versions verified.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet.replace(/\s*\/\/.*$/gm, "")}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://askubuntu.com/questions/1265813/how-to-update-node-js-to-the-long-term-support-version-on-ubuntu-20-04"
        referenceLinkText="Ask Ubuntu: Update Node.js LTS on Ubuntu"
      />

      <CodeOverview
        whatItDoes="This snippet updates the package lists, adds the NodeSource PPA for a specified Node.js version, installs Node.js and npm, and verifies their installed versions."
        whenToUse="When you need to install or upgrade Node.js and npm to a specific version on Ubuntu, especially if the default package manager versions are outdated."
        prerequisites={[
          "A Ubuntu system with sudo privileges.",
          "Internet connection to fetch packages and scripts.",
          "Familiarity with terminal commands."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "NodeSource Repository",
            description: "An official repository that provides up-to-date Node.js packages for multiple Linux distributions.",
            relatedLink: "https://github.com/nodesource/distributions"
          },
          {
            title: "Node.js",
            description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
            relatedLink: "https://nodejs.org/en/"
          },
          {
            title: "Advanced Package Tool (APT)",
            description: "Ubuntu's package manager used to update and install software packages.",
            relatedLink: "https://wiki.debian.org/Teams/APT"
          },
          {
            title: "Shell Scripting",
            description: "Using command-line scripts to automate the setup of repositories and installations.",
            relatedLink: "https://www.gnu.org/software/bash/manual/bash.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Update Package Lists",
            explanation: "Refreshes your local package index to ensure you have the latest information about available packages and their versions.",
            code: "sudo apt update",
            language
          },
          {
            stepNumber: 2,
            title: "Add NodeSource Repository",
            explanation: "Runs a curl command to fetch and execute the NodeSource setup script for the desired Node.js version (e.g., 14.x). This configures your system to pull Node.js from an up-to-date and maintained source.",
            code: "curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -",
            language
          },
          {
            stepNumber: 3,
            title: "Install Node.js",
            explanation: "Uses apt-get to install Node.js and npm from the NodeSource repository configured in the previous step.",
            code: "sudo apt-get install -y nodejs",
            language
          },
          {
            stepNumber: 4,
            title: "Verify Installation",
            explanation: "Check the installed versions of Node.js and npm to confirm successful installation.",
            code: "node -v\nnpm -v",
            language
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Node.js version does not update after running the commands.",
            solution: "Ensure you are running the right setup script URL and have removed older Node.js versions installed by other methods before rerunning."
          },
          {
            problem: "Curl command fails due to missing curl.",
            solution: "Install curl using 'sudo apt install curl' before running the setup script."
          },
          {
            problem: "Permission denied errors during script execution.",
            solution: "Run the commands with sudo privileges to ensure proper permissions."
          }
        ]}
      />
    </main>
  );
}
