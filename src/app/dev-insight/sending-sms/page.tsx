import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function SendingSMS() {
  const snippetName = "Sending SMS";
  const code = `frappe.ui.form.on("Issue", "send_sms", function(frm) {
  	
  	if(frm.doc.zone_mobile_no){
  	
  		message = "Customer: " + frm.doc.customer
  		message += "\nMachine Version: " + frm.doc.machine_version
  		message += "\nMachine Area: " + frm.doc.machine_area
  		message += "\nContact Person: " + frm.doc.contact_person
  		message += "\nPlace of Installation:" + frm.doc.location
  		message += "\nAddress: " + frm.doc.address_display
  		message += "\nCustomer Contact: " + frm.doc.mobile_no
  		
  		frappe.call({
  		method: "frappe.core.doctype.sms_settings.sms_settings.send_sms",
  		args: {
  			receiver_list: [frm.doc.zone_mobile_no],
  			msg: message
  		}
  		});
  		alert(message)
  	}
  });`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Send SMS from a Frappe Form Client Script?"
        description="This snippet shows how to send an SMS alert from a Frappe form by composing a message from form fields and calling the Frappe server method for SMS delivery. Perfect for Frappe client scripting needs."
        snippetName={snippetName}
        language="Frappe Client Script"
        category="Frappe Form Customization"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When managing issues in Frappe, there is often a need
          to notify stakeholders by sending SMS alerts containing critical
          issue details.
          <br />
          <br />
          <strong>Solution:</strong> This client script listens for the "send_sms"
          event on the Issue DocType form. It checks if a zone mobile number is
          specified, constructs a multi-line message with relevant customer and
          machine information from the form fields, and triggers a server-side
          SMS sending method using <code>frappe.call</code>. The user is alerted
          with the message preview before sending.
          <br />
          <br />
          This pattern leverages Frappe's powerful client script and server
          method call capabilities for seamless SMS alert integration.
          <br />
          <br />
          <em>No external references were provided.</em>
        </p>
      </section>

      <CodeBlock
        code={code}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="This client script creates an SMS message by combining multiple fields from the Issue DocType form. It sends this message using a Frappe server method designed for SMS delivery only if the zone mobile number field is filled. The user is also shown the final message via a browser alert."
        whenToUse="Use this approach when you need to automate SMS notifications from DocType forms within the Frappe framework, especially to notify contacts defined in your documents."
        prerequisites={[
          "Access to the Issue DocType with fields like customer, machine_version, etc.",
          "Configured SMS Settings in Frappe for sending SMS",
          "A valid zone_mobile_no to receive the SMS"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "Client script trigger for DocType form events.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          },
          {
            title: "frappe.call",
            description: "Asynchronous server method call from client scripts.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/frappe-call"
          },
          {
            title: "DocType Fields",
            description: "Access form field values from the frm.doc object.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts#accessing-doc-and-fields"
          },
          {
            title: "SMS Sending",
            description: "Frappe's SMS system allows sending messages based on settings and providers.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/sms"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Trigger SMS sending on form event",
            explanation: "The client script listens on the 'send_sms' event for the Issue DocType form. When triggered, it starts the process of constructing and sending an SMS.",
            code: `frappe.ui.form.on("Issue", "send_sms", function(frm) { /* code */ });`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Check for recipient mobile number",
            explanation: "Before sending, verify that 'zone_mobile_no' is present on the document to ensure there is a receiver.",
            code: `if(frm.doc.zone_mobile_no){ /* proceed */ }`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Construct SMS message content",
            explanation: "Build a multiline string by concatenating relevant DocType fields such as customer, machine details, contact person, and address information.",
            code: `message = "Customer: " + frm.doc.customer
message += "\nMachine Version: " + frm.doc.machine_version
message += "\nMachine Area: " + frm.doc.machine_area
// ...`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Send SMS via server method",
            explanation: "Use frappe.call to invoke the standard server-side method 'send_sms' providing the receiver list and constructed message.",
            code: `frappe.call({
  method: "frappe.core.doctype.sms_settings.sms_settings.send_sms",
  args: {
    receiver_list: [frm.doc.zone_mobile_no],
    msg: message
  }
});`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Alert the user with message preview",
            explanation: "Show an alert in the browser with the final composed message before or after sending.",
            code: `alert(message)`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "SMS is not sent even though the script runs.",
            solution: "Verify that the SMS settings are properly configured in Frappe, the mobile number is valid, and the SMS gateway provider is active."
          },
          {
            problem: "Message content is empty or missing some fields.",
            solution: "Ensure that all required DocType fields (customer, machine_version, etc.) are correctly filled before sending SMS. Add validation if needed."
          },
          {
            problem: "No alert shown when clicking send_sms.",
            solution: "Confirm that the client script is correctly linked to the Issue DocType and that the event 'send_sms' is correctly triggered."
          }
        ]}
      />
    </main>
  );
}
