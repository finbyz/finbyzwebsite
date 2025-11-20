import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function Page() {
  const snippetName = "Get data from email template";
  const language = "Frappe Client Script";
  const category = "Frappe Form Customization";

  const code = `// to get the dynamic data from email template

frappe.ui.form.on('PCFC Email System', {
	email_template: function(frm){
		if(frm.doc.email_template){
			frappe.call({
				method: 'frappe.email.doctype.email_template.email_template.get_email_template',
				args: {
					template_name: frm.doc.email_template,
					doc: frm.doc,
				},
				callback(r) {
					frm.set_value("subject",r.message.subject)
					frm.set_value("agent_response_area",r.message.message)
				},
			});
		}
	},
	
})`;

  return (
    <main>
      <CodeSnippetHero
        title="How to get dynamic data from an email template in Frappe?"
        description="This snippet demonstrates how to automatically fetch and populate fields like subject and message from an email template in a Frappe DocType form using a client script. It uses frappe.call to request template data and updates form fields dynamically."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When working with Frappe forms, users often want to
          dynamically fetch and populate fields such as subject and message from an email template,
          to avoid manual entry and ensure consistent content.
          <br />
          <strong>Solution:</strong> This client script listens for changes on the email_template
          field of the "PCFC Email System" DocType. When a template is selected,
          it calls the server method to retrieve the template data and sets the
          subject and message fields on the form automatically.
          <br />
          This approach improves user experience by automating data injection
          and guarantees that the form fields always match the selected template.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Listens to changes on the 'email_template' Link Field in the form. Upon selection, it calls a Frappe server-side method to fetch the full email template data, including subject and message. When the data is returned, it updates form fields 'subject' and 'agent_response_area' accordingly."
        whenToUse="Use this when you want dynamic content from email templates to be automatically inserted into form fields, improving automation and reducing manual input errors."
        prerequisites={[
          "A DocType with an 'email_template' Link Field.",
          "Knowledge of Frappe client scripting and server methods.",
          "Availability of the email_template DocType and its server method 'get_email_template'."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "Register event handlers for Frappe form events tied to specific DocTypes.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          },
          {
            title: "frappe.call",
            description: "Perform asynchronous calls to server-side methods to fetch or manipulate data.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client"
          },
          {
            title: "Email Template DocType",
            description: "Predefined email templates containing subject and message used for dynamic content.",
            relatedLink: "https://frappeframework.com/docs/user/en/email/email-templates"
          },
          {
            title: "frm.set_value",
            description: "Set or update values of form fields programmatically.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#frm-set_value"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Detect changes in the email_template field",
            explanation: "Listen to the 'email_template' field on the 'PCFC Email System' DocType form. Trigger logic whenever the template selection changes.",
            code: "frappe.ui.form.on('PCFC Email System', { email_template: function(frm) { /* ... */ } })",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Call server method to fetch template data",
            explanation: "Use frappe.call to asynchronously call 'frappe.email.doctype.email_template.email_template.get_email_template', passing selected template name and current doc to get complete template data.",
            code: "frappe.call({ method: 'frappe.email.doctype.email_template.email_template.get_email_template', args: { template_name: frm.doc.email_template, doc: frm.doc }, callback(r) { /* ... */ }})",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Update form fields with fetched data",
            explanation: "In the callback after data is fetched, update the 'subject' and 'agent_response_area' fields in the form with the template's subject and message for immediate user feedback.",
            code: "frm.set_value('subject', r.message.subject); frm.set_value('agent_response_area', r.message.message);",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The subject and message fields do not update after selecting an email template.",
            solution: "Ensure the client script is properly loaded and attached to the correct DocType. Confirm the server method 'get_email_template' exists and returns expected data. Check browser console for errors."
          },
          {
            problem: "The email_template field selection triggers no action.",
            solution: "Verify the field name 'email_template' matches exactly the DocType fieldname. Also confirm the client script file is included and bound to the correct DocType."
          },
          {
            problem: "frappe.call returns error or no data.",
            solution: "Check server logs for exceptions in the method 'get_email_template'. Make sure user permissions allow access to email_template DocType."
          }
        ]}
      />
    </main>
  );
}
