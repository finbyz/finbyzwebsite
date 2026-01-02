import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const SnippetPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Create a Mapped Document from a Custom Button in Frappe"
        description="Learn how to add a custom button to a Frappe form that triggers the creation of a new, mapped document using the 'frappe.model.open_mapped_doc' method in a Client Script."
        snippetName="Map Document using custom button"
        language="javascript"
        category="Frappe Client Script"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "This guide demonstrates how to create a custom button on a Frappe form that, when clicked, initiates the creation of a new document by mapping data from the current form. This is a common requirement for streamlining workflows, such as creating a 'Meeting' from a 'Meeting Schedule'.",
          "The solution involves using a Client Script to hook into the form's `refresh` event, adding the button, and then calling the `frappe.model.open_mapped_doc` utility function. This function calls a whitelisted Python server method to handle the data mapping and document creation logic."
        ]}
      />
      <CodeBlock 
        code={`frappe.ui.form.on('Meeting Schedule', {
	refresh: function(frm) {
		frm.add_custom_button(__("Create Meeting"), function() {
			frappe.model.open_mapped_doc({
					method : "eie.eie.doctype.meeting_schedule.meeting_schedule.make_meeting",
					frm : cur_frm
				})
		})
	}
});`}
        language="javascript"
      />
      <CodeOverview 
        whatItDoes="Adds a custom button named 'Create Meeting' to the 'Meeting Schedule' form. Clicking this button triggers a server-side Python method to create a new, mapped 'Meeting' document."
        whenToUse="Use this approach when you need to provide users with a one-click action to create a related document from an existing one, pre-filling data based on defined mapping rules."
      />
      <KeyConcepts 
        concepts={[
          {
            title: "Form Event Triggers",
            description: "The 'frappe.ui.form.on' method is a client-side API used to attach event handlers to DocType forms. The 'refresh' event is triggered every time the form is loaded or reloaded, making it the ideal place to add custom buttons or modify form behavior.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/client-scripting#form-events"
          },
          {
            title: "Adding Custom Buttons",
            description: "This Form object method, 'frm.add_custom_button', allows developers to dynamically add buttons to the form's header. It takes the button label and a callback function to be executed when the button is clicked.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/client-scripting#frmadd_custom_button"
          },
          {
            title: "Creating Mapped Documents",
            description: "A powerful utility that streamlines the creation of a new document from an existing one. It calls a specified server-side (Python) method, passing the current form's context. The server method is responsible for creating the new document and returning its details, after which the client is redirected to the new document's form.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/server-scripting/document-mapping#creating-documents-from-another-document"
          }
        ]}
      />
      <StepByStepTutorial 
        steps={[
          {
            stepNumber: 1,
            title: "Create a New Client Script",
            explanation: "First, navigate to the 'Client Script' list in your Frappe desk. Create a new script and select 'Meeting Schedule' as the DocType to which it applies.",
            code: "// No code for this step. This is a UI action.",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Hook into the Refresh Event",
            explanation: "Use the 'frappe.ui.form.on' method to specify that your code should run every time the 'Meeting Schedule' form is refreshed.",
            code: `frappe.ui.form.on('Meeting Schedule', {\n\trefresh: function(frm) {\n\t\t// Your button logic will go here\n\t}\n});`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Add the Custom Button",
            explanation: "Inside the 'refresh' function, call 'frm.add_custom_button'. The first argument is the button's label, and the second is the function that will execute when the button is clicked.",
            code: `frm.add_custom_button(__("Create Meeting"), function() {\n\t// The action to perform on click goes here\n});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Call 'open_mapped_doc'",
            explanation: "In the button's click handler, call 'frappe.model.open_mapped_doc'. This function requires an object specifying the whitelisted Python 'method' to call and the current form 'frm' to pass as context.",
            code: `frappe.model.open_mapped_doc({\n\tmethod : "eie.eie.doctype.meeting_schedule.meeting_schedule.make_meeting",\n\tfrm : cur_frm\n})`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Implement the Server-Side Python Method",
            explanation: "The 'method' specified points to a Python function. You must create this function in the specified path (e.g., 'meeting_schedule.py') and whitelist it with '@frappe.whitelist()' for it to be callable from the client-side.",
            code: `import frappe\nfrom frappe.model.mapper import get_mapped_doc\n\n@frappe.whitelist()\ndef make_meeting(source_name, method='post'):\n\tdoc = get_mapped_doc('Meeting Schedule', source_name, {\n\t\t'Meeting Schedule': {\n\t\t\t'doctype': 'Meeting',\n\t\t\t'field_map': {\n\t\t\t\t'name': 'meeting_schedule',\n\t\t\t\t# map other fields here, e.g., 'subject': 'subject'\n\t\t\t}\n\t\t}\n\t})\n\tdoc.insert()\n\treturn doc`,
            language: "python"
          }
        ]}
      />
      <Troubleshooting 
        items={[
          {
            problem: "The custom button does not appear on the form.",
            solution: "Ensure your Client Script is enabled and correctly applied to the 'Meeting Schedule' DocType. Check the browser's developer console (F12) for any JavaScript errors that might be preventing the script from running."
          },
          {
            problem: "Clicking the button gives a 'Not Permitted' or 'Method Not Found' error.",
            solution: "This indicates an issue with the server-side Python method. Verify that the method path in 'frappe.model.open_mapped_doc' is correct. Most importantly, ensure the Python function is decorated with '@frappe.whitelist()' to make it accessible from the client."
          },
          {
            problem: "The new document is created, but no data is copied from the source.",
            solution: "The data mapping is handled by the server-side Python function using 'get_mapped_doc'. Check your 'get_mapped_doc' implementation to ensure the 'field_map' dictionary correctly maps the field names from the source DocType ('Meeting Schedule') to the target DocType ('Meeting')."
          }
        ]}
      />
    </main>
  );
};

export default SnippetPage;
