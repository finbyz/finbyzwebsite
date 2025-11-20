import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Frappe Version-14 & Version-15 Installation on Ubuntu 22.04 & 24.04";
const code = `wget https://finbyz.tech/files/bench_install.sh

chmod +x bench_install.sh

./bench_install.sh`;

export default function FrappeVersion1415Installation() {
  return (
    <main>
      <CodeSnippetHero
        title="How to install Frappe Framework versions 14 and 15 on Ubuntu 22.04 & 24.04?"
        description="Learn to quickly set up Frappe Framework versions 14 and 15 on Ubuntu 22.04 or 24.04 using a streamlined automated installation script."
        snippetName={snippetName}
        language="bash"
        category="Frappe Installation"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Installing Frappe Framework manually can be complex, especially ensuring compatibility with specific Ubuntu
          versions like 22.04 or 24.04.
          <br />
          <strong>Solution:</strong> This snippet automates Frappe installation using a shell script that handles the setup process,
          simplifying installation of versions 14 and 15 on Ubuntu environments.
          <br />
          No description was originally provided, but this script is intended for Frappe bench installation to get started rapidly.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Downloads a shell script designed to install Frappe Framework seamlessly on Ubuntu 22.04 and 24.04, sets execution permissions, and runs it to initiate the installation."
        whenToUse="Use this approach when you want a quick, automated setup of Frappe Framework bench versions 14 or 15 on supported Ubuntu systems without manual dependency management."
        prerequisites={[
          "Ubuntu 22.04 or 24.04 operating system",
          "Basic Linux command-line knowledge",
          "Internet connectivity to fetch installation scripts"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "bench_install.sh script",
            description: "Automates installation of Frappe and its dependencies for specified Ubuntu versions.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench"
          },
          {
            title: "Frappe Framework",
            description: "An open-source full-stack web framework optimized for ERP applications.",
            relatedLink: "https://frappeframework.com/docs/user/en"
          },
          {
            title: "Ubuntu 22.04 & 24.04",
            description: "Supported LTS Linux versions recommended for Frappe deployments.",
            relatedLink: "https://ubuntu.com/download"
          },
          {
            title: "Bash scripting",
            description: "Shell scripting is used for automation of installation steps on Linux systems.",
            relatedLink: "https://www.gnu.org/software/bash/manual/bash.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Download the installation script",
            explanation: "Fetch the `bench_install.sh` script from the trusted source to the Ubuntu server.",
            code: "wget https://finbyz.tech/files/bench_install.sh",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Make the script executable",
            explanation: "Change the permission of the downloaded script to allow execution.",
            code: "chmod +x bench_install.sh",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Run the install script",
            explanation: "Execute the script to start the automated installation of Frappe bench for versions 14 and 15.",
            code: "./bench_install.sh",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The script fails due to missing dependencies.",
            solution: "Ensure internet connection is available and your user has sudo privileges. Install required packages manually if needed."
          },
          {
            problem: "Permission denied error when running the script.",
            solution: "Verify `chmod +x bench_install.sh` was run successfully and rerun it if needed before executing."
          },
          {
            problem: "Script stopped due to unsupported OS version.",
            solution: "Verify your Ubuntu version is 22.04 or 24.04 as the script targets these. Other versions may not be compatible."
          }
        ]}
      />
    </main>
  );
}
