import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "SSH Copy id alternative for windows";
const language = "bash";
const category = "Other";
const codeSnippet = `# Open Git Bash
# Generate ssh-keygen for windows
ssh-keygen -t rsa -b 4096

# run following if ~/.ssh/authorized_keys exists
cat ~/.ssh/id_rsa.pub | ssh <user>@<host> "cat >> ~/.ssh/authorized_keys"

# run following if ~/.ssh/authorized_keys dosen't exists
cat ~/.ssh/id_rsa.pub | ssh <user>@<host> "cat >> ~/.ssh/authorized_keys"`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to copy your SSH public key to a remote server on Windows without ssh-copy-id?"
        description="On Windows, tools like 'ssh-copy-id' are not always pre-installed. This snippet demonstrates how to manually copy your SSH public key to a remote server using Git Bash, enabling SSH key-based authentication."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="green"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Windows environments often lack the convenient <code>ssh-copy-id</code> utility commonly
          found on Unix/Linux systems, which automatically copies your SSH public key to the remote server's <code>authorized_keys</code> file.
          Without this tool, setting up SSH key authentication manually can be cumbersome.
          <br />
          <strong>Solution:</strong> Use Git Bash on Windows to generate an SSH key pair and manually append your public key
          to the remote server's <code>authorized_keys</code> file by using standard shell commands over SSH.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Generates an RSA SSH key pair on Windows via Git Bash and appends the public key to the remote server's authorized_keys file manually."
        whenToUse="Use this method on Windows when 'ssh-copy-id' is unavailable or not installed. It enables passwordless SSH login by setting up key-based authentication."
        prerequisites={[
          "Git Bash installed on Windows",
          "SSH access to the remote server with user credentials",
          "Basic familiarity with shell commands",
          "Existing ~/.ssh directory on remote or create it if missing"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "ssh-keygen",
            description:
              "Generates a new SSH key pair used for authenticating to remote servers without passwords.",
            relatedLink: "https://man.openbsd.org/ssh-keygen"
          },
          {
            title: "authorized_keys",
            description:
              "A file on remote server storing public keys allowed for SSH login without passwords.",
            relatedLink: "https://linux.die.net/man/5/authorized_keys"
          },
          {
            title: "SSH key-based authentication",
            description: "Authentication without passwords by using cryptographic key pairs.",
            relatedLink: "https://www.ssh.com/academy/ssh/key"
          },
          {
            title: "Git Bash",
            description:
              "A Bash emulator for Windows that provides a Unix-like terminal and command line interface.",
            relatedLink: "https://git-scm.com/downloads"
          },
          {
            title: "SSH command",
            description: "Used to connect securely to remote servers and execute commands.",
            relatedLink: "https://man.openbsd.org/ssh"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Open Git Bash",
            explanation: "Launch Git Bash terminal on your Windows machine to access Unix-like shell commands.",
            code: "# Open Git Bash",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Generate SSH Key Pair",
            explanation:
              "Run the ssh-keygen command to create a new RSA 4096-bit key pair. Press enter to accept defaults or specify file location.",
            code: "ssh-keygen -t rsa -b 4096",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Copy Public Key to Remote Server",
            explanation:
              "Append the contents of your public key file '~/.ssh/id_rsa.pub' to the remote server's 'authorized_keys' file. This allows SSH authentication using your key.",
            code: "cat ~/.ssh/id_rsa.pub | ssh <user>@<host> \"cat >> ~/.ssh/authorized_keys\"",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Permission denied when copying keys or connecting via SSH.",
            solution: "Ensure your remote user has write permissions to the ~/.ssh directory and authorized_keys file. Also verify SSH service is running and accessible."
          },
          {
            problem: "SSH login still asks for password after copying keys.",
            solution: "Check that authorized_keys file permissions are set to 600 and ~/.ssh directory to 700 on the remote server. Also confirm the SSH server allows public key authentication."
          },
          {
            problem: "'ssh-copy-id' command not found on Windows",
            solution:
              "Use Git Bash with the manual copying approach in this snippet or install Windows OpenSSH Client optionally through Windows Features or third-party tools."
          }
        ]}
      />
    </main>
  );
}
