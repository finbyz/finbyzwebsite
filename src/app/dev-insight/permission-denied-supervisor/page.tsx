import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function PermissionDeniedSupervisor() {
  const snippetName = "Permission denied supervisor";
  const language = "bash";
  const category = "Ubuntu";

  const codeSnippet = `error: <class 'PermissionError'>, [Errno 13] Permission denied: file: /usr/lib/python3/dist-packages/supervisor/xmlrpc.py line: 560

first try rerunning
sudo bench setup production ubuntu

else try the below methods

try:
sudo chmod 700 /var/run/supervisor.sock

else:
sudo nano /etc/supervisor/supervisord.conf
add below lines under [unix_http_server] section:
    chmod=0760
    chown=ubuntu:ubuntu

else:
sudo chmod 777 /var/run/supervisor.sock`;

  const referenceLink = "https://github.com/Supervisor/supervisor/issues/173";

  return (
    <main>
      <CodeSnippetHero
        title="How to fix 'Permission denied' error with Supervisor on Ubuntu?"
        description="This problem occurs when Supervisor's socket file `/var/run/supervisor.sock` has restrictive permissions causing PermissionError. This page explains several ways to fix this to allow proper access."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When Supervisor tries to interact with its
          socket file `/var/run/supervisor.sock`, users encounter the error
          <code>[Errno 13] Permission denied</code>. This permission error usually
          indicates that the current user does not have access rights to the
          socket.
        </p>
        <p>
          <strong>Solution:</strong> You can resolve this by adjusting the
          permissions or ownership of the socket file, or by configuring
          Supervisor's unix_http_server settings to specify appropriate
          chmod/chown values. Below are tested methods to fix the permission
          issues.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers
        allowCopy
        referenceLink={referenceLink}
        referenceLinkText="Supervisor GitHub Issue #173"
      />

      <CodeOverview
        whatItDoes={`This snippet explains how to fix the 'Permission denied' error caused by restricted access to Supervisor's socket file. It suggests rerunning the production setup, changing socket file permissions with chmod, or modifying the supervisord.conf configuration.`}
        whenToUse={`Use these fixes when you encounter PermissionError ([Errno 13]) in Supervisor logs or cli output related to the Unix socket access on Ubuntu or Debian-based systems.`}
        prerequisites={[
          "Access to a user with sudo privileges",
          "Basic knowledge of Linux file permissions",
          "Supervisor installed and running on the system"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Supervisor Unix Socket",
            description: "Supervisor uses a Unix domain socket file (`supervisor.sock`) for local RPC communication.",
            relatedLink: "http://supervisord.org/configuration.html#unix_http_server-section"
          },
          {
            title: "Linux File Permissions",
            description: "File permissions control user access; `chmod` changes permissions and `chown` changes ownership.",
            relatedLink: "https://man7.org/linux/man-pages/man1/chmod.1.html"
          },
          {
            title: "supervisord.conf Configuration",
            description: "The `[unix_http_server]` section configures socket access permissions with `chmod` and `chown` settings.",
            relatedLink: "http://supervisord.org/configuration.html#unix_http_server-section"
          },
          {
            title: "Bench Setup Production",
            description: "On Frappe frameworks, running `sudo bench setup production ubuntu` configures production environment including Supervisor setup.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-production"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Rerun setup production for Supervisor",
            explanation: "First, try rerunning the bench production setup to reconfigure Supervisor with correct permissions.",
            code: "sudo bench setup production ubuntu",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Set permissions on supervisor.sock",
            explanation: "If problem persists, set socket file permissions to 700 to allow user execution and read/write rights.",
            code: "sudo chmod 700 /var/run/supervisor.sock",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Modify supervisord.conf to control socket permissions",
            explanation: "Edit the Supervisor config to explicitly set `chmod` and `chown` values for the socket, ensuring appropriate access.",
            code: "\nsudo nano /etc/supervisor/supervisord.conf\n[unix_http_server]\nchmod=0760\nchown=ubuntu:ubuntu\n",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Relax socket permissions as last resort",
            explanation: "If strict permissions cause issues, set socket permissions to 777 to allow all users access, but use cautiously.",
            code: "sudo chmod 777 /var/run/supervisor.sock",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Permission denied error persists after setup",
            solution: "Check whether the user running Supervisor commands belongs to the group owning the socket file; reapply chmod or restart Supervisor service."
          },
          {
            problem: "Supervisor socket file missing",
            solution: "Restart the Supervisor service to regenerate the socket file, ensure supervisord is running."
          },
          {
            problem: "Editing supervisord.conf has no effect",
            solution: "After editing, reload Supervisor with `sudo supervisorctl reload` or restart the service to apply changes."
          }
        ]}
      />
    </main>
  );
}
