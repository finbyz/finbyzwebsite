import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function IncreaseWidthMsgprintDialog() {
  const snippetName = "Increase the Width(size) in msgprint/Dialog";
  const language = "JavaScript";
  const category = "Frappe Frontend";

  const codeSnippet = `// Adjust modal size after frappe.msgprint()
$(frappe.msg_dialog.wrapper).addClass("modal-sm"); // Small
$(frappe.msg_dialog.wrapper).addClass("modal-lg"); // Large
$(frappe.msg_dialog.wrapper).addClass("modal-xl"); // Extra Large

// For frappe.ui.Dialog constructor, specify size as:
new frappe.ui.Dialog({
  title: title,
  fields: fields,
  size: "extra-large" // options: "small", "large", "extra-large"
});`;

  return (
    <main>
      <CodeSnippetHero
        title="How to increase the width of msgprint/Dialog modals in Frappe?"
        description="This snippet demonstrates how to customize the width of dialog and message popup modals by adding Bootstrap size classes or passing a size option in frappe.ui.Dialog."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: By default, Frappe's <code>frappe.msgprint</code> dialogs and
          <code>frappe.ui.Dialog</code> modals have a fixed width which may not
          be sufficient for larger content. This can lead to poor UX if the dialog
          content is wide or complex.
        </p>
        <p>
          Solution: You can increase the width of <code>frappe.msgprint</code>
          dialogs by adding Bootstrap modal size classes like <code>modal-lg</code>{" "}
          or <code>modal-xl</code> to the dialog wrapper. For <code>frappe.ui.Dialog</code>,
          the <code>size</code> property accepts values such as <code>small</code>,
          <code>large</code>, or <code>extra-large</code> to control the modal width.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Adds CSS classes to Frappe msgprint dialogs to adjust their width (small, large, extra-large) or sets the size property in frappe.ui.Dialog to control the dialog's width."
        whenToUse="Use this when the content of a Frappe dialog or message popup is too wide for the default size and you want a wider modal for better readability and layout."
        prerequisites={["Basic knowledge of Frappe client scripts", "Familiarity with frappe.msgprint and frappe.ui.Dialog usage"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.msgprint",
            description: "Displays a simple message dialog popup in Frappe.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#msgprint"
          },
          {
            title: "frappe.ui.Dialog size option",
            description: "Allows setting the dialog size with values like 'small', 'large', and 'extra-large'.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/ui/dialog"
          },
          {
            title: "Bootstrap modal size classes",
            description: "Standard Bootstrap classes to adjust modal widths (modal-sm, modal-lg, modal-xl).",
            relatedLink: "https://getbootstrap.com/docs/4.6/components/modal/#modal-sizes"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Open a Frappe message dialog",
            explanation: "Call frappe.msgprint() to create the modal dialog to which you want to adjust the width.",
            code: "frappe.msgprint('Your message here');",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Add a modal size class to the dialog wrapper",
            explanation: "Use jQuery to add one of the Bootstrap modal size classes to the msgprint dialog wrapper element to adjust its width.",
            code: `$(frappe.msg_dialog.wrapper).addClass('modal-lg'); // Use 'modal-sm' or 'modal-xl' as needed`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Set the size when creating a new frappe.ui.Dialog",
            explanation: "If you are creating a custom dialog, specify the 'size' option in the constructor for width control.",
            code: `new frappe.ui.Dialog({ title: 'My Dialog', fields: fields, size: 'extra-large' });`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Modal width does not change after adding modal size classes.",
            solution: "Make sure you add the class after the dialog is created by frappe.msgprint() and that jQuery selectors target the correct wrapper element."
          },
          {
            problem: "Invalid size option causes dialog not to display properly.",
            solution: "Use only the supported size strings: 'small', 'large', or 'extra-large' for frappe.ui.Dialog."
          }
        ]}
      />
    </main>
  );
}
