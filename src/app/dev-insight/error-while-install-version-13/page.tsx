import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `ERROR: [Errno 2] No such file or directory: 'install'

bench setup requirements

Update node before running patch.
code snippet : https://finbyz.tech/app/code-snippet/SNI-00425

sudo apt remove cmdtest
sudo apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo \"deb https://dl.yarnpkg.com/debian/ stable main\" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y

//refer below links for ubuntu 20 libssl1.0-dev package error.
    https://discuss.erpnext.com/t/easy-install-setup-guide-for-erpnext-installation-on-ubuntu-20-04-lts-with-some-modification-of-course/62375/56

refer below command if psutil error like : Cannot uninstall 'psutil'. It is a distutils installed project and thus we cannot accurately determine which files belong to it which would lead to only a partial uninstall.
    sudo apt remove python3-psutil
`;

export default function ErrorInstallVersion13() {
  return (
    <>
      <CodeSnippetHero
        title="How to Fix 'No such file or directory: install' Error During Frappe Version 13 Setup on Ubuntu?"
        description="This error occurs due to missing dependencies or misconfigured package managers during Frappe setup on Ubuntu. The solution involves updating Node.js, properly installing yarn, and handling common package conflicts like psutil and libssl1.0-dev errors."
        snippetName="Error while install version 13"
        language="Shell"
        category="Frappe Setup"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> During the installation of Frappe Version 13 on Ubuntu,
          users encounter errors like "No such file or directory: 'install'", which
          often arises from misconfigured or missing dependencies like yarn, Node.js,
          or Python packages such as psutil.
          <br />
          <strong>Solution:</strong> This guide outlines the steps to fix these problems,
          including removing conflicting packages, updating Node.js before patching,
          installing yarn from the correct repository, and handling common psutil
          uninstall issues.
          <br />
          The instructions also include references for dealing with Ubuntu 20.04
          specific issues like libssl1.0-dev package errors.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="Shell"
        showLineNumbers
        allowCopy
        referenceLink="https://stackoverflow.com/questions/46013544/yarn-install-command-error-no-such-file-or-directory-install"
        referenceLinkText="StackOverflow discussion on yarn install error"
      />

      <CodeOverview
        whatItDoes="This set of commands removes conflicting yarn and cmdtest packages, sets up the official yarn repository, updates the package lists, reinstalls yarn, and addresses known Python psutil uninstall errors. It ensures that the environment is correctly set up for Frappe installation and patching on Ubuntu."
        whenToUse="Use these steps when encountering 'No such file or directory: install' errors during Frappe's bench setup or patch process on Ubuntu, particularly version 20.04 or similar."
        prerequisites={[
          "Ubuntu operating system (version 18.04 or later recommended)",
          "Administrator (sudo) access",
          "Internet connectivity to add repositories and download packages",
          "Basic familiarity with terminal commands"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Yarn Package Manager",
            description: "Yarn is an alternative to npm for Node.js package management. Installing yarn from the official repository avoids conflicts with cmdtest package.",
            relatedLink: "https://yarnpkg.com/getting-started/install"
          },
          {
            title: "Node.js Version Update",
            description: "Updating Node.js before applying benches patches prevents runtime errors related to incompatible Node versions.",
            relatedLink: "https://nodejs.org/en/download/package-manager/"
          },
          {
            title: "Python psutil Package Conflicts",
            description: "Uninstalling psutil can be problematic if installed via distutils. Removing it using apt avoids partial uninstall errors.",
            relatedLink: "https://github.com/giampaolo/psutil/blob/master/HISTORY.rst#100"
          },
          {
            title: "libssl1.0-dev on Ubuntu 20.04",
            description: "Certain Frappe dependencies require this package. Installation may need additional steps due to Ubuntu's default OpenSSL version.",
            relatedLink: "https://discuss.erpnext.com/t/easy-install-setup-guide-for-erpnext-installation-on-ubuntu-20-04-lts-with-some-modification-of-course/62375/56"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Remove Conflicting Packages",
            explanation: "Remove the 'cmdtest' and existing 'yarn' package installations which conflict with the official yarn package.",
            code: "sudo apt remove cmdtest\nsudo apt remove yarn",
            language: "Shell"
          },
          {
            stepNumber: 2,
            title: "Add Official Yarn Repository and GPG Key",
            explanation: "Add the official Yarn package repository and register its signing key to ensure installation authenticity.",
            code: "curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho \"deb https://dl.yarnpkg.com/debian/ stable main\" | sudo tee /etc/apt/sources.list.d/yarn.list",
            language: "Shell"
          },
          {
            stepNumber: 3,
            title: "Update Package List and Install Yarn",
            explanation: "Refresh your package list to include the new yarn repository and install yarn.",
            code: "sudo apt-get update\nsudo apt-get install yarn -y",
            language: "Shell"
          },
          {
            stepNumber: 4,
            title: "Address libssl1.0-dev Package Error (Ubuntu 20.04)",
            explanation: "Follow the linked discussion for installing libssl1.0-dev or required OpenSSL libraries specific to Ubuntu 20.04 to avoid build errors.",
            code: "# See https://discuss.erpnext.com/t/easy-install-setup-guide-for-erpnext-installation-on-ubuntu-20-04-lts-with-some-modification-of-course/62375/56",
            language: "Shell"
          },
          {
            stepNumber: 5,
            title: "Resolve psutil Uninstall Errors",
            explanation: "Remove the 'python3-psutil' package using apt to avoid uninstall errors when psutil was installed via distutils.",
            code: "sudo apt remove python3-psutil",
            language: "Shell"
          },
          {
            stepNumber: 6,
            title: "Update Node.js Before Running Bench Patch",
            explanation: "Before running bench patch, ensure Node.js is updated to a supported version to prevent related runtime errors.",
            code: "# Update Node.js using NodeSource or other methods as appropriate",
            language: "Shell"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "'No such file or directory: install' error during bench patch",
            solution: "Ensure required dependencies like yarn and Node.js are correctly installed and updated. Remove conflicting packages and add correct yarn repository as described."
          },
          {
            problem: "Yarn install command errors due to cmdtest package",
            solution: "Remove 'cmdtest' package because it conflicts with the yarn package and causes 'install' file errors."
          },
          {
            problem: "Cannot uninstall 'psutil' due to it being a distutils installed project",
            solution: "Remove 'python3-psutil' package using apt to avoid partial uninstall problems."
          },
          {
            problem: "libssl1.0-dev package not found on Ubuntu 20.04",
            solution: "Follow the official ERPNext and Frappe forums guide to install correct OpenSSL versions or workaround for this package on Ubuntu 20.04."
          }
        ]}
      />
    </>
  );
}
