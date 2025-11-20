import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function EmailQueueSendMailResumeError() {
  const snippetName = "Email queue Send mail resume error";
  const codeSnippet = `frappe.defaults.set_default("hold_queue", 0, parent="__default", parenttype=None)`;

  return (
    <main>
      <CodeSnippetHero
        title="How to fix the email queue resume not working in Frappe?"
        description="The email queue resume does not work because the 'hold_queue' default value is not reset to 0. This snippet provides the correct way to reset the flag to resume processing."
        snippetName={snippetName}
        language="Frappe Framework"
        category="Frappe Background Jobs"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> The email queue resume process in Frappe may fail
          when the 'hold_queue' default value is not reset. This holds back emails
          from being sent because the queue remains paused.
        </p>
        <p>
          <strong>Solution:</strong> Manually reset the 'hold_queue' flag to 0
          using <code>frappe.defaults.set_default</code>. This effectively resumes
          the email queue processing by clearing the hold state.
        </p>
        <p>
          The provided code snippet demonstrates the correct way to reset this default
          value in the Frappe framework.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        showLineNumbers={false}
        allowCopy={true}
        referenceLink="https://github.com/frappe/frappe/blob/version-13/frappe/email/queue.py"
        referenceLinkText="Frappe email queue source code"
      />

      <CodeOverview
        whatItDoes="Resets the 'hold_queue' default value in Frappe's system defaults to 0, which allows the email queue to resume sending emails after a pause."
        whenToUse="Use this when the email sending queue is paused due to the 'hold_queue' flag being set and emails are not being sent as expected."
        prerequisites={[
          "Basic knowledge of Frappe framework defaults management.",
          "Understanding of Frappe's email queue mechanism."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.defaults",
            description: "The API to set or get persistent default values across the Frappe site.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/defaults"
          },
          {
            title: "Email Queue in Frappe",
            description: "The background process that manages sending emails asynchronously.",
            relatedLink: "https://frappeframework.com/docs/user/en/email/email-queue"
          },
          {
            title: "System Defaults",
            description: "Defaults are key-value pairs stored site-wide, affecting system behavior.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/defaults"
          },
          {
            title: "Resuming Email Queue",
            description: "How to programmatically resume the email queue after it has been paused.",
            relatedLink: "https://frappeframework.com/docs/user/en/email/troubleshooting-email"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the paused email queue",
            explanation: "Check if emails are not being sent and suspect the queue is held because 'hold_queue' flag is set.",
            code: "# No direct code required here",
            language: ""
          },
          {
            stepNumber: 2,
            title: "Reset the 'hold_queue' flag",
            explanation: "Use frappe.defaults API to set the 'hold_queue' flag back to 0 to resume the queue.",
            code: "frappe.defaults.set_default(\"hold_queue\", 0, parent=\"__default\", parenttype=None)",
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Verify the queue resumes",
            explanation: "After resetting, monitor the email queue logs or events to confirm emails are being sent again.",
            code: "# Monitor frappe email queue manually or via logs",
            language: ""
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Emails are not sending because the queue remains paused.",
            solution: "Ensure 'hold_queue' default is reset to 0 using frappe.defaults.set_default to resume the queue."
          },
          {
            problem: "Uncertain if the queue is held or running.",
            solution: "Check the value of 'hold_queue' via 'frappe.defaults.get_default' or inspect queue logs."
          }
        ]}
      />
    </main>
  );
}
