import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const GetContactDetailsFromPartyPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Automatically Fetch Party Contact Details in ERPNext?"
        description="A Frappe Client Script to auto-populate contact person and email in the Payment Entry form by calling a server method when the party is selected."
        snippetName="Get Contact Details from Party"
        language="Javascript"
        category="ERPNext Customization"
        accentColor="blue"
      />
      <CodeSnippetInstroduction
        paragraphs={[
          "In ERPNext, manually entering contact details for a party in transactions like Payment Entry can be tedious and prone to errors. This client script automates the process by fetching the default contact person and email associated with the selected party (Customer or Supplier) and populating the relevant fields.",
          "The script triggers on the 'party' field change and on form load, ensuring the contact information is always up-to-date without user intervention. It leverages the standard `get_party_details` method, making it a reliable and upgrade-safe customization."
        ]}
      />
      <CodeBlock
        code={`//Get Contact updated in Payment Entry
frappe.ui.form.on('Payment Entry', {
	party: function(frm) {
		frappe.call({
			method:"erpnext.accounts.party.get_party_details",
			args:{
				party: frm.doc.party,
				party_type: frm.doc.party_type
			},
			callback: function(r){
				if(r.message){
					frm.set_value('contact_person', r.message.contact_person)
					frm.set_value('contact_email', r.message.contact_email)
					frm.set_value ('party_name', frm.doc.party)
				}
			}
		})
	},
	onload: function(frm) {
		if (frm.doc.party) {
		frappe.call({
			method:"erpnext.accounts.party.get_party_details",
			args:{
				party: frm.doc.party,
				party_type: frm.doc.party_type
			},
			callback: function(r){
				if(r.message){
					frm.set_value('contact_person', r.message.contact_person)
					frm.set_value('contact_email', r.message.contact_email)
					frm.set_value ('party_name', frm.doc.party)
				}
			}
		})
		}
	},
	contact_person: function(frm) {
		erpnext.utils.get_contact_details(frm);
	},
	posting_date: function(frm) {
		frm.set_value ('reference_date', frm.doc.posting_date);
	}
});`}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="Automatically fetches and sets the `contact_person` and `contact_email` fields in the 'Payment Entry' form based on the selected `party`."
        whenToUse="Use this script on the 'Payment Entry' DocType to streamline data entry and ensure contact details are consistent with the party master."
        prerequisites={["Basic understanding of Frappe Client Scripts.", "Access to a Frappe/ERPNext instance with developer mode enabled."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "The primary API method for attaching event handlers to form fields or DocType events (like onload, refresh, validate). It allows developers to trigger custom logic when a user interacts with a form.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frappeuiformon",
          },
          {
            title: "frappe.call",
            description: "An asynchronous JavaScript function used to call server-side Python methods (which must be whitelisted with the `@frappe.whitelist()` decorator) from the client-side. It's essential for fetching data or executing complex logic on the server.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/rest#frappecall",
          },
          {
            title: "frm.set_value",
            description: "A client-side API function to set the value of a field in the current form. Using this method is preferred over direct manipulation as it correctly triggers any dependent field events (like 'on change').",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frmset_value",
          },
          {
            title: "onload Event",
            description: "A standard DocType client script event that fires exactly once when the form is fully loaded with its data. This script uses it to populate contact details for existing documents when they are opened.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/desk/scripting/client-script#form-events",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create a New Client Script",
            explanation: "Navigate to your ERPNext desk. In the Awesome Bar, search for 'Client Script' and click 'New' to create a new script.",
            code: ``,
            language: 'bash'
          },
          {
            stepNumber: 2,
            title: "Select DocType",
            explanation: "In the new Client Script form, select 'Payment Entry' from the 'DocType' dropdown list. This links the script to the Payment Entry form.",
            code: ``,
            language: 'bash'
          },
          {
            stepNumber: 3,
            title: "Paste the Code",
            explanation: "Copy the provided JavaScript code and paste it into the 'Script' text area of the Client Script form.",
            code: `// Paste the full code snippet here\nfrappe.ui.form.on('Payment Entry', {\n    party: function(frm) {\n        // ...\n    },\n    onload: function(frm) {\n        // ...\n    }\n    // ... and so on\n});`,
            language: 'javascript'
          },
          {
            stepNumber: 4,
            title: "Save and Test",
            explanation: "Click the 'Save' button. The script is now active. To test it, go to the Payment Entry list, open an existing record or create a new one, and select a Party (Customer/Supplier) that has contact details saved. The 'Contact Person' and 'Contact Email' fields should populate automatically.",
            code: ``,
            language: 'bash'
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The contact fields are not updating after selecting a Party.",
            solution: "First, open your browser's developer console (F12) and check for any errors when you select a party. Second, verify that the Party you selected has a default Contact and Email ID saved in their master record. Finally, ensure the Client Script is saved and enabled.",
          },
          {
            problem: "An error message appears saying the 'get_party_details' method is not found or not permitted.",
            solution: "This is a standard ERPNext method and should be available and whitelisted. If you see this error, it could indicate an issue with your ERPNext installation or a conflicting customization. Run 'bench migrate' and check the server-side logs for more details.",
          },
          {
            problem: "The script doesn't work on existing documents when I open them.",
            solution: "The onload trigger is designed to handle this. If it's not working, ensure there are no errors in the console on form load. The `if (frm.doc.party)` condition prevents the `frappe.call` from running if the party field is empty, which is the correct behavior.",
          },
        ]}
      />
    </main>
  );
};

export default GetContactDetailsFromPartyPage;
