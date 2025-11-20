import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ErrorWhileExecutingBenchSetupProduction() {
  const snippetName = "Error while executing bench setup production";
  const codeSnippet = `subprocess.CalledProcessError: Command '['ansible-playbook', '-c', 'local', 'site.yml', '-vvvv', '-e', '{"production": true, "admin_emails": "", "mysql_root_password": null, "container": false}', '-t', 'fail2ban']' returned non-zero exit status 1.

# Reinstall ansible

# For uninstall ansible
sudo python3 -m pip uninstall ansible ansible-core -y

# For install
sudo python3 -m pip --proxy "$HTTPS_PROXY" install ansible==2.9.26(version)`;

  return (
    <main>
      <CodeSnippetHero
        title="How to fix 'subprocess.CalledProcessError' during bench setup production on Ubuntu?"
        description="This error occurs when the ansible-playbook command fails during bench setup production. The recommended solution is to reinstall Ansible using pip with the correct version."
        snippetName={snippetName}
        language="Shell"
        category="DevOps"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: When running <code>bench setup production</code>, you might encounter a
          <code>subprocess.CalledProcessError</code> caused by ansible-playbook returning a non-zero exit status.
          This typically points to issues with your Ansible installation or environment.
        </p>
        <p>
          Solution: To fix this error, uninstall any existing Ansible versions and reinstall a compatible version using Python's pip. This process includes uninstalling both <code>ansible</code> and <code>ansible-core</code>, then reinstalling Ansible 2.9.26 or another appropriate version.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="shell"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://github.com/ansible/ansible-lint-action/issues/41"
        referenceLinkText="Related GitHub issue on Ansible-lint-action"
      />

      <CodeOverview
        whatItDoes="Detects Ansible playbook execution failure during production setup and guides how to resolve it by reinstalling the required Ansible version."
        whenToUse="Use this when you encounter the subprocess.CalledProcessError indicating ansible-playbook returned a non-zero exit status during system setup."
        prerequisites={[
          "Python 3 installed",
          "pip package manager available",
          "Proper permissions to uninstall and install system packages",
          "Network access to install packages if behind a proxy"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "subprocess.CalledProcessError",
            description: "A Python exception triggered when a subprocess called by the script returns a non-zero exit status indicating failure.",
            relatedLink: "https://docs.python.org/3/library/subprocess.html#subprocess.CalledProcessError"
          },
          {
            title: "ansible-playbook",
            description: "Command-line tool to run Ansible playbooks for automation tasks like system setups.",
            relatedLink: "https://docs.ansible.com/ansible/latest/cli/ansible-playbook.html"
          },
          {
            title: "pip uninstall/install",
            description: "Python package management commands to remove and install packages respectively.",
            relatedLink: "https://pip.pypa.io/en/stable/cli/pip_uninstall/"
          },
          {
            title: "Using proxies with pip",
            description: "How to configure pip commands to use HTTP/HTTPS proxies for package installation.",
            relatedLink: "https://pip.pypa.io/en/stable/topics/configuration/#using-a-proxy-server"
          },
          {
            title: "Ansible versions",
            description: "Choosing compatible versions of Ansible for your deployment to avoid incompatibilities and errors.",
            relatedLink: "https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the Error",
            explanation: "Recognize that the subprocess.CalledProcessError indicates that ansible-playbook did not complete successfully, which can be caused by incompatible or broken Ansible installations.",
            code: "subprocess.CalledProcessError: Command '['ansible-playbook', ...] returned non-zero exit status 1.",
            language: "plaintext"
          },
          {
            stepNumber: 2,
            title: "Uninstall Existing Ansible",
            explanation: "Remove any existing Ansible installations to avoid conflicts using pip uninstall commands for both ansible and ansible-core packages.",
            code: "sudo python3 -m pip uninstall ansible ansible-core -y",
            language: "shell"
          },
          {
            stepNumber: 3,
            title: "Reinstall Specific Ansible Version",
            explanation: "Install a stable and compatible version of Ansible, specifying the version number to avoid unexpected errors during execution.",
            code: "sudo python3 -m pip --proxy \"$HTTPS_PROXY\" install ansible==2.9.26",
            language: "shell"
          },
          {
            stepNumber: 4,
            title: "Verify Installation",
            explanation: "After installation, check the installed Ansible version and retry the bench setup production command to confirm that the error is resolved.",
            code: "ansible --version",
            language: "shell"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "subprocess.CalledProcessError with non-zero exit status during ansible-playbook execution",
            solution: "Uninstall all existing Ansible versions using pip, then reinstall a compatible Ansible version with appropriate proxy settings if behind a firewall or proxy."
          },
          {
            problem: "Ansible commands failing after reinstall on Ubuntu",
            solution: "Ensure Python 3 and pip are properly installed and updated. Verify environment variables and path settings. Run pip install commands with sudo privileges and the --proxy option if needed."
          }
        ]}
      />
    </main>
  );
}
