import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

export default function CodeSnippetPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Resolve Frappe Bench Update Errors Caused by Git Conflicts?"
        description="A step-by-step guide to fix 'bench update' failures in Frappe and ERPNext by resetting git repositories, correcting file permissions, and ensuring a clean update process."
        snippetName="Resolve Update Errors"
        language="Bash"
        category="Frappe CLI"
        accentColor="orange"
      />

      <CodeSnippetInstroduction 
        paragraphs={[
          "When managing a Frappe or ERPNext instance, the `bench update` command is essential for keeping your system up-to-date. However, this process can sometimes fail due to underlying git conflicts, local file modifications, or incorrect file permissions. These issues prevent Bench from cleanly pulling the latest updates from the source repositories.",
          "The following script provides a robust solution by forcefully resetting the core repositories and standardizing file ownership, clearing the way for a successful update. It's a powerful tool for system administrators to overcome common update blockers."
        ]}
      />

      <CodeBlock
        code={`# For servers using the 'frappe' user
sudo chown -R frappe:frappe /home/frappe/.bench
sudo chown -R frappe:frappe /home/frappe/frappe-bench

cd /home/frappe/.bench
git reset --hard
git pull

cd /home/frappe/frappe-bench
bench update

# For servers using the 'ubuntu' user (common on cloud providers)
sudo chown -R ubuntu:ubuntu /home/ubuntu/.bench
sudo chown -R ubuntu:ubuntu /home/ubuntu/frappe-bench

cd /home/ubuntu/.bench
git reset --hard
git pull

cd /home/ubuntu/frappe-bench
bench update`}
        language="bash"
        fileName="resolve_update.sh"
        showLineNumbers={true}
      />

      <CodeOverview
        whatItDoes="This script resolves common 'bench update' failures by forcefully resetting the Frappe and Bench git repositories to their remote state and correcting file ownership permissions."
        whenToUse="Use this when 'bench update' fails with git-related errors, such as merge conflicts, local uncommitted changes you wish to discard, or permission denied errors during the update process."
        prerequisites={[
          "Shell access (SSH) to your Frappe/ERPNext server",
          "Sudo privileges to run commands as root",
          "Frappe Bench installed on the server"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "Bench is the command-line interface for managing Frappe Framework sites. The 'bench update' command is crucial for applying updates to the framework, apps, and dependencies.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet"
          },
          {
            title: "File Permissions (chown)",
            description: "The 'chown' command changes the user and/or group ownership of files. In Frappe, the bench user (e.g., 'frappe' or 'ubuntu') must own all bench files to run updates and other commands correctly. Incorrect permissions are a common source of errors.",
            relatedLink: "https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html"
          },
          {
            title: "Git Reset (--hard)",
            description: "This command resets the current branch head and discards all changes in the working directory. It's a powerful way to undo local modifications and resolve conflicts by reverting to the official repository state.",
            relatedLink: "https://git-scm.com/docs/git-reset"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the Correct System User",
            explanation: "Before running any commands, identify the user that your Frappe instance runs as. This is typically 'frappe' or 'ubuntu'. You must use the commands corresponding to your user.",
            code: `# Check running processes to find the user
ps aux | grep bench`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Correct File Permissions",
            explanation: "Ensure the correct user owns the .bench and frappe-bench directories. This prevents permission errors during the update. Replace 'frappe:frappe' with your system's user if different (e.g., 'ubuntu:ubuntu').",
            code: `sudo chown -R frappe:frappe /home/frappe/.bench
sudo chown -R frappe:frappe /home/frappe/frappe-bench`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Reset the Bench Repository",
            explanation: "Navigate to the '.bench' directory, which contains the Bench CLI tool itself. Reset any local changes and pull the latest version from the official repository.",
            code: `cd /home/frappe/.bench
git reset --hard
git pull`,
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Navigate to the Frappe-Bench Directory",
            explanation: "Change directory into your main 'frappe-bench' directory. This directory contains your sites, apps, and the Frappe framework. The next command will operate from here.",
            code: `cd /home/frappe/frappe-bench`,
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Run Bench Update",
            explanation: "With permissions corrected and repositories reset, you can now run the 'bench update' command. This will pull updates for all apps, run patches, build assets, and restart services.",
            code: `bench update`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "'bench update' still fails with uncommitted changes in a custom app.",
            solution: "The provided script only resets core Frappe repositories. For custom apps, navigate to their directory ('apps/your_custom_app') and handle git changes manually (e.g., 'git stash' or 'git commit')."
          },
          {
            problem: "I get a 'Permission Denied' error even after running 'chown'.",
            solution: "Ensure you are running the 'chown' commands with 'sudo'. Also, verify the user and group are correct for your server setup. The user should be the one that owns the bench process."
          },
          {
            problem: "I ran 'git reset --hard' and lost my custom code. How can I recover it?",
            solution: "'git reset --hard' is a destructive command for uncommitted changes. If the code was not committed, it is likely lost. Always commit your changes or use 'git stash' before running a hard reset. You can try 'git reflog' as a last resort to find lost commits."
          }
        ]}
      />
    </main>
  );
}
