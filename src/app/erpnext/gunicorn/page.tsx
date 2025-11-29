import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

export default function GunicornReloadPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Gracefully Reload a Gunicorn Server with Zero Downtime"
        description="A concise guide on using the 'pkill -HUP' command to gracefully reload Gunicorn worker processes without dropping active connections, perfect for seamless deployments."
        snippetName="Gunicorn"
        language="bash"
        category="DevOps"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "When managing Python web applications served by Gunicorn, deploying updates often requires reloading the server. A hard restart can terminate active connections, leading to a poor user experience. The ideal approach is a 'graceful reload,' which allows worker processes to finish their current requests before being replaced.",
          "This one-line command provides a simple and effective way to send the HUP (hangup) signal to the Gunicorn master process. The master process then gracefully shuts down the old workers and starts new ones with the updated code, ensuring zero downtime."
        ]}
      />
      <CodeBlock
        code={`sudo pkill -HUP -f gunicorn.*master`}
        language="bash"
        referenceLink="https://stackoverflow.com/questions/9881819/a-better-way-to-restart-reload-gunicorn-via-upstart-after-git-pulling-my-dja"
        referenceLinkText="Stack Overflow Discussion"
      />
      <CodeOverview
        whatItDoes="The command finds the Gunicorn master process and sends it a HUP (hangup) signal. This instructs Gunicorn to reload its configuration and gracefully restart its worker processes with the new code, without stopping the main server."
        whenToUse="Use this command after deploying new code for a Python web application (like Django or Flask) that is running under Gunicorn. It's especially useful in automated deployment scripts to ensure a smooth update process."
        prerequisites={[
          "Gunicorn must be installed and running on the server.",
          "You need sudo or root privileges to send signals to processes.",
          "The command assumes your Gunicorn master process name contains 'gunicorn' and 'master'."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "The pkill Command",
            description: "`pkill` is a command-line utility that finds processes based on their name or other attributes and sends them a signal. The -f flag tells it to match against the full command line string, not just the process name.",
            relatedLink: "https://man7.org/linux/man-pages/man1/pkill.1.html"
          },
          {
            title: "The HUP Signal",
            description: "HUP (hangup) is a signal that traditionally notified a process that its controlling terminal has closed. Many daemons, including Gunicorn, intercept this signal and use it to reload their configuration files without exiting.",
            relatedLink: "https://www.gnu.org/software/libc/manual/html_node/Termination-Signals.html"
          },
          {
            title: "Gunicorn Master/Worker Architecture",
            description: "Gunicorn operates with a central master process that manages a set of worker processes. The workers handle requests. Signaling the master allows it to coordinate the lifecycle of the workers, ensuring a graceful transition during reloads.",
            relatedLink: "https://docs.gunicorn.org/en/stable/design.html"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Verify Your Running Gunicorn Process",
            explanation: "Before sending a signal, confirm how your Gunicorn process is running. This helps ensure the pkill pattern will match correctly. Use `ps` and `grep` to find it.",
            code: `ps aux | grep gunicorn`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Execute the Graceful Reload Command",
            explanation: "Run the command with `sudo` to ensure you have the necessary permissions. The -f flag matches the pattern 'gunicorn.*master' against the full process command, targeting the master process specifically.",
            code: `sudo pkill -HUP -f gunicorn.*master`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Confirm the Workers Have Reloaded",
            explanation: "Check the Process IDs (PIDs) of the worker processes before and after running the command. The PIDs should change, indicating new workers have been spawned. You can also check your application logs for startup messages.",
            code: `ps aux | grep gunicorn`,
            language: "bash"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Command fails with 'operation not permitted'.",
            solution: "This error indicates a permissions issue. The pkill command needs to be run by a user with sufficient privileges to signal the Gunicorn process. Prefixing the command with `sudo` usually resolves this."
          },
          {
            problem: "The command doesn't seem to do anything, and the code is not updated.",
            solution: "This can happen if the pattern 'gunicorn.*master' does not match your running process. Use `ps aux | grep gunicorn` to inspect the exact command used to start Gunicorn and adjust the `pkill` pattern accordingly. For example, if you don't use the term 'master' in your startup command, you may need a different pattern."
          },
          {
            problem: "The command kills the server instead of reloading gracefully.",
            solution: "Ensure you are sending the HUP signal. Other signals, like KILL (-9) or TERM (-15), will terminate the process entirely. Double-check that you are using `-HUP` for the graceful reload."
          }
        ]}
      />
    </main>
  );
}
