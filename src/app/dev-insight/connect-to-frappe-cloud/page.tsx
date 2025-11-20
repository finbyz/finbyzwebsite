import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ConnectToFrappeCloud() {
  const snippetName = "Connect to Frappe Cloud";
  const language = "bash";
  const category = "Frappe Cloud";

  const codeSnippet = `if connecting for first time follow all steps else skipp first 4 steps

open windows Powershell with administrator privilages:

1) Get-Service -Name ssh-agent | Set-Service -StartupType Manual
2) Start-Service ssh-agent

open cmd with the path of .ssh folder

3)ssh-agent -s
4)ssh-add id_ed25519

 the output shoud be as bellow:

    Identity added: id_ed25519 (admin\\admin@admin)
    Certificate added: id_ed25519-cert.pub (mailto:info@finbyz.tech)

5)create a certificate file as provided in frappe cloud

    if below error occours while adding certificate:
        Error loading key \"id_ed25519-cert.pub\": invalid format
    
    check the certificate file for the values like ',echo,etc.

6)Execute the following shell command to SSH into your bench
    eg:- ssh bench-####-######-f1-mumbai@n1-mumbai.frappe.cloud -p 2222
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to securely connect to your Frappe Cloud instance via SSH?"
        description="Learn the essential steps for setting up SSH key authentication to access your Frappe Cloud bench securely, including configuring ssh-agent and handling common certificate issues."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Connecting securely to your Frappe Cloud instance via SSH requires setting
          up the ssh-agent and adding your private key so that you can authenticate
          without password prompts. This guide addresses the problem of correctly
          configuring ssh-agent on Windows, adding your SSH keys, creating and
          validating the required certificate file, and finally connecting to your
          Frappe Cloud bench using the appropriate SSH command and port.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers
        allowCopy
      />

      <CodeOverview
        whatItDoes="Configures ssh-agent on Windows, adds the ed25519 SSH key and its certificate for authenticating to Frappe Cloud, and guides you through connecting to your remote bench instance over SSH."
        whenToUse="Use this procedure when connecting to your Frappe Cloud hosted bench for the first time or if your SSH keys and certificates are not properly registered with the ssh-agent."
        prerequisites={[
          "Windows machine with PowerShell and Command Prompt access",
          "An existing 'id_ed25519' private SSH key paired with a certificate file",
          "Administrator privileges to start the ssh-agent service"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "ssh-agent Service",
            description:
              "A background program that manages SSH keys and authentication on your local machine.",
            relatedLink: "https://man.openbsd.org/ssh-agent"
          },
          {
            title: "SSH Keys and Certificates",
            description:
              "Use of private keys and matching certificates to authenticate securely without passwords.",
            relatedLink:
              "https://frappeframework.com/docs/user/en/bench/deployment#ssh-public-key-authentication"
          },
          {
            title: "Frappe Cloud Bench",
            description:
              "Cloud-hosted environment for running and managing your Frappe applications.",
            relatedLink: "https://frappecloud.com/docs"
          },
          {
            title: "SSH Connection Command",
            description:
              "The command-line instruction for securely connecting to remote Frappe Cloud benches.",
            relatedLink: "https://developer.apple.com/library/archive/documentation/Security/Conceptual/RemoteAccessVPNProtocols/SSH.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Enable and start ssh-agent service",
            explanation:
              "Open Windows PowerShell with administrator privileges. Run commands to set ssh-agent to manual startup and start the service, ensuring it runs in the background.",
            code: [
              "Get-Service -Name ssh-agent | Set-Service -StartupType Manual",
              "Start-Service ssh-agent"
            ].join('\n'),
            language
          },
          {
            stepNumber: 2,
            title: "Start ssh-agent shell",
            explanation:
              "Open Command Prompt in your .ssh directory and run 'ssh-agent -s' to set up the environment variables required.",
            code: "ssh-agent -s",
            language
          },
          {
            stepNumber: 3,
            title: "Add your private SSH key",
            explanation:
              "Use ssh-add to add your id_ed25519 private key to the ssh-agent, enabling key-based authentication.",
            code: "ssh-add id_ed25519",
            language
          },
          {
            stepNumber: 4,
            title: "Verify identity and certificate addition",
            explanation:
              "Expected output confirms your private key and its certificate are loaded. This confirms the ssh-agent manages your keys correctly.",
            code: "Identity added: id_ed25519 (admin\\admin@admin)\nCertificate added: id_ed25519-cert.pub (mailto:info@finbyz.tech)",
            language
          },
          {
            stepNumber: 5,
            title: "Create and validate certificate file",
            explanation:
              "If you encounter 'invalid format' errors when adding the certificate, verify the certificate file does not contain problematic characters like commas or echo commands.",
            code: "Checking certificate file content",
            language: "plaintext"
          },
          {
            stepNumber: 6,
            title: "Connect to the remote Frappe Cloud bench",
            explanation:
              "Run the SSH command with the correct user, host, and port to connect securely to your bench instance in the cloud.",
            code: "ssh bench-####-######-f1-mumbai@n1-mumbai.frappe.cloud -p 2222",
            language
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Error loading key 'id_ed25519-cert.pub': invalid format",
            solution:
              "Check the certificate file contents for extraneous characters such as commas, single quotes, or echo commands, and remove them. Ensure the file is correctly saved in PEM format."
          }
        ]}
    </main>
  );
}
