import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function SetPasswordOncePasswordAuth() {
  const snippetName = "Set Password Once in Password Based Authentication Instances";

  const codeSnippet = `step 1] Download Git Bash and install and run: https://git-scm.com/downloads

step 2] execute : ssh-keygen -t rsa -b 4096 (press enter till end) (execute only first time after installation)

step 3] cat ~/.ssh/id_rsa.pub | ssh ubuntu@0.0.0.0 -p 22 \"cat >> ~/.ssh/authorized_keys\"   (enter password for first time)
                    - replace ubuntu with username and 0.0.0.0 with ip of ssh and replace 22 with port you want to connect`;

  return (
    <main>
      <CodeSnippetHero
        title="How to set the SSH password once and enable password-less login on Windows?"
        description="This snippet explains how to configure SSH password-based authentication on Windows by generating SSH keys, copying the public key to the server, and enabling seamless connections without repeatedly entering your password."
        snippetName={snippetName}
        language="bash"
        category="SSH & System Administration"
        accentColor="green"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When connecting via SSH from a Windows machine,
          repeatedly entering your password for each connection is inconvenient and less secure.
          
          <br />
          <strong>Solution:</strong> Use Git Bash to generate a secure SSH key pair,
          then copy the public key to the server’s <code>authorized_keys</code> file. This allows passwordless authentication,
          meaning you only enter your password once during the key copy step.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Generates an RSA SSH key pair, then copies the public key to the remote server’s authorized_keys file allowing passwordless SSH login."
        whenToUse="Useful when frequently accessing remote servers via SSH and wanting to avoid typing your password multiple times."
        prerequisites={[
          "Windows machine with Git Bash installed",
          "Access to the remote SSH server with password authentication enabled",
          "Basic familiarity with command line operations"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "SSH Key Pair",
            description: "A pair of cryptographic keys (private and public) used to authenticate users securely without sending passwords over the network.",
            relatedLink: "https://www.ssh.com/academy/ssh/key"
          },
          {
            title: "ssh-keygen",
            description: "The command-line tool used to create new SSH keys for authentication.",
            relatedLink: "https://man.openbsd.org/ssh-keygen"
          },
          {
            title: "authorized_keys",
            description: "The file on SSH servers that lists public keys allowed to connect without a password.",
            relatedLink: "https://www.ssh.com/academy/ssh/authorized_keys"
          },
          {
            title: "ssh-copy-id equivalent on Windows",
            description: "Manual approach to copy public keys on Windows when ssh-copy-id is not available.",
            relatedLink: "https://serverfault.com/questions/224810/is-there-an-equivalent-to-ssh-copy-id-for-windows"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Download and install Git Bash",
            explanation: "Git Bash provides a Bash emulation and standard SSH utilities for Windows. Download it from the official Git SCM website.",
            code: "https://git-scm.com/downloads",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Generate an SSH key pair",
            explanation: "Run 'ssh-keygen' to create a new RSA SSH key with 4096 bits. Just press Enter to accept defaults for file location and passphrase to avoid prompts later.",
            code: "ssh-keygen -t rsa -b 4096",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Copy your public key to the remote server",
            explanation: "Manually append your public SSH key to the remote server's 'authorized_keys' file using SSH. This copies the key and requires you to enter your password once.
Replace 'ubuntu', '0.0.0.0', and '22' with your remote username, IP address, and port respectively.",
            code: "cat ~/.ssh/id_rsa.pub | ssh ubuntu@0.0.0.0 -p 22 \"cat >> ~/.ssh/authorized_keys\"",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Permission denied (publickey).",
            solution: "Ensure you have correctly copied your public key to the server’s ~/.ssh/authorized_keys file and the file permissions are set properly (chmod 600 authorized_keys)."
          },
          {
            problem: "ssh-keygen command not found.",
            solution: "Make sure Git Bash is installed and you are running the command in Git Bash or another shell that provides ssh-keygen."
          },
          {
            problem: "Cannot connect to SSH server on custom port.",
            solution: "Verify the SSH server is listening on the specified port and no firewalls are blocking the connection."
          }
        ]}
      />
    </main>
  );
}
