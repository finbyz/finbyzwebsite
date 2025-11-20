import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function Page() {
  const snippetName = "Check Cron (Schedular) Logs";
  const codeSnippet = `journalctl -u cron.service

or 

grep CRON /var/log/syslog

for the failed jobs you can go into the /var/mail/<user_name>`;

  return (
    <main>
      <CodeSnippetHero
        title="How to check cron scheduler logs and identify failed cron jobs on Ubuntu?"
        description="When you need to view the cron (scheduler) logs on Ubuntu or diagnose failed cron jobs, these built-in commands provide quick access to the logs and failure information."
        snippetName={snippetName}
        language="bash"
        category="Linux"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: Monitoring and troubleshooting scheduled cron jobs on Ubuntu systems require access to the cron service logs and
          information about failed executions.
          <br />
          Solution: The <code>journalctl -u cron.service</code> command shows systemd journal logs for the cron service.
          Alternatively, <code>grep CRON /var/log/syslog</code> extracts cron-related entries from syslog. For failed jobs,
          checking <code>/var/mail/&lt;user_name&gt;</code> reveals cron job failure notifications sent to the user's local mailbox.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        allowCopy
        referenceLink="https://askubuntu.com/questions/56683/where-is-the-cron-crontab-log"
        referenceLinkText="Source: AskUbuntu - Where is the cron/crontab log?"
      />

      <CodeOverview
        whatItDoes="Provides commands to access and view the logs of cron jobs scheduled on Ubuntu Linux, helping monitor job execution status."
        whenToUse="Use these commands when you want to check which cron jobs have run, diagnose failures, or troubleshoot scheduled tasks."
        prerequisites={["Basic familiarity with Linux command line", "Access to the system's terminal", "User account with permission to read logs"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Systemd journal logs for cron service",
            description: "Using journalctl to view logs for the cron.service unit provides recent and historical cron job execution details.",
            relatedLink: "https://www.freedesktop.org/software/systemd/man/journalctl.html"
          },
          {
            title: "Syslog entries for cron",
            description: "The /var/log/syslog file contains cron-related messages which can be filtered using grep for 'CRON' keyword.",
            relatedLink: "https://man7.org/linux/man-pages/man5/syslog.5.html"
          },
          {
            title: "Cron failure notifications in mail",
            description: "Failed cron jobs typically send output or error messages via email to the local user's mail file.",
            relatedLink: "https://man7.org/linux/man-pages/man5/crontab.5.html"
          },
          {
            title: "Cron service (cron.service)",
            description: "The Linux daemon that manages scheduled tasks, whose logs can be viewed using systemd utilities.",
            relatedLink: "https://linux.die.net/man/8/cron"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "View cron service logs using journalctl",
            explanation: "Use systemd's journalctl command with the cron.service unit name to view recent and past cron job logs managed by systemd.",
            code: "journalctl -u cron.service",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Search cron-specific entries in syslog",
            explanation: "Filter the system syslog file to show only cron related log lines, which include job run times and status.",
            code: "grep CRON /var/log/syslog",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Check for failed cron job outputs",
            explanation: "If a cron job fails, it often sends an email with the error output to the local user mailbox located in /var/mail/username.",
            code: "cat /var/mail/<user_name>",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "No output from journalctl for cron.service",
            solution: "Ensure the cron service is running and that your system uses systemd. Check permissions or try using syslog grep instead."
          },
          {
            problem: "No cron entries found in /var/log/syslog",
            solution: "Check if cron logs are sent to a different file or managed by systemd journal only. Verify cron daemon is active."
          },
          {
            problem: "Unable to find failure emails in /var/mail/",
            solution: "Confirm mail utilities are installed and configured. Also verify the user account name is correct in the mail path."
          }
        ]}
      />
    </main>
  );
}
