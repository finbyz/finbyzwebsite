import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const CustomButtonSnippetPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Add, Remove, and Manage Custom Buttons in Frappe Forms"
        description="Learn to dynamically add, remove, and clear custom buttons on Frappe forms using the frm.add_custom_button and related client script APIs for enhanced UI."
        snippetName="Custom Button"
        language="Javascript"
        category="Frappe UI"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In the Frappe Framework, custom buttons provide a powerful way to extend the functionality of DocType forms. They allow developers to add user-triggered actions directly to the form's user interface. These actions can range from simple navigation links to complex operations that call server-side Python methods, trigger other client scripts, or open new documents.",
          "The primary API for managing these buttons is available through the `frm` object in Client Scripts. This includes methods for adding, removing, and clearing buttons, giving you full dynamic control over the form's interactive elements based on user roles, document status, or field values."
        ]}
      />
      <CodeBlock
        code={`// Generic syntax to add a custom button
frm.add_custom_button(__(label), () => {
	// Action to perform on click
}, __(group_name));

// Example: Adding a 'Meeting' button to the 'Meeting Schedule' DocType
frappe.ui.form.on('Meeting Schedule', { 
	refresh: function(frm) {
		if (!frm.doc.__islocal) { // Only show button on saved documents
			frm.add_custom_button(__("Create Meeting"), function() {
				frappe.model.open_mapped_doc({
					method : "eie.eie.doctype.meeting_schedule.meeting_schedule.make_meeting",
					frm : cur_frm
				})
			}, __("Make"))
		}
	}
});


// To Remove a particular custom button (must match label and group)
frm.remove_custom_button('Create Meeting', 'Make');

// To clear all custom buttons from the form header
frm.clear_custom_buttons()`}
        language="javascript"
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This snippet provides the client-side API methods to dynamically add, remove, and clear all custom buttons on a Frappe DocType form. This allows for creating a more interactive and role-specific user experience."
        whenToUse="Use these methods within form-level Client Scripts, typically inside the `onload` or `refresh` events. The `refresh` event is often preferred as it fires every time the form is loaded or reloaded after a save."
        prerequisites={["A basic understanding of Frappe Client Scripts.", "Familiarity with DocType forms and their lifecycle events."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frm Object",
            description: "The 'frm' object is the primary handle for interacting with a form in a Frappe Client Script. It contains the document's data, metadata, and provides methods like `add_custom_button`, `set_value`, and `refresh_field`.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/client_scripting"
          },
          {
            title: "Form Triggers",
            description: "Form triggers are JavaScript events that fire at specific points in a DocType's lifecycle (e.g., onload, refresh, validate). The `refresh` trigger is ideal for UI manipulations like adding buttons, as it ensures they are present on load and after saves.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/client_scripting#form-events"
          },
          {
            title: "Button Groups",
            description: "The optional third parameter in `add_custom_button` is the group name. If multiple buttons share the same group name, Frappe automatically renders them within a single dropdown menu, helping to de-clutter the form's action bar.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frmadd_custom_button"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create a New Client Script",
            explanation: "Navigate to 'Client Script' from the Awesome Bar. Click 'Add Client Script' and select the DocType you want to modify, for example, 'Sales Order'.",
            code: `// Select 'Sales Order' in the 'DocType' field in the Client Script form.
// Leave 'View' as 'Form'.`,
            language: "text"
          },
          {
            stepNumber: 2,
            title: "Hook into the 'refresh' Event",
            explanation: "Within the script editor, use the `frappe.ui.form.on` method to attach your code to the 'refresh' event. This ensures your script runs every time the form is loaded or updated.",
            code: `frappe.ui.form.on('Sales Order', {
    refresh: function(frm) {
        // Your code will go here
    }
});`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Add the Custom Button",
            explanation: "Inside the `refresh` function, call `frm.add_custom_button`. We'll add a button to check stock levels, which will appear in an 'Actions' group.",
            code: `frappe.ui.form.on('Sales Order', {
    refresh: function(frm) {
        if (frm.doc.docstatus === 1) { // Only show button for submitted orders
            frm.add_custom_button(__('Check Stock Availability'), () => {
                frappe.msgprint('Checking stock levels...');
                // In a real scenario, you would call a server method here
            }, __('Actions'));
        }
    }
});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Save and Test",
            explanation: "Save the Client Script. Make sure it is enabled. Now, open a submitted 'Sales Order' form. You should see an 'Actions' dropdown button containing your 'Check Stock Availability' option.",
            code: `// No code for this step. Simply save the script and refresh the Sales Order form.`,
            language: "text"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "My custom button does not appear after saving the script.",
            solution: "First, perform a hard refresh in your browser (Ctrl+Shift+R) to clear the cache. If that doesn't work, ensure your Client Script is enabled and correctly attached to the intended DocType. Also, check the browser's developer console for any script errors that might be preventing its execution."
          },
          {
            problem: "The button appears, but clicking it does nothing.",
            solution: "Verify the function you passed as the second argument to `add_custom_button` is correct. Use `console.log` statements inside the function or use the browser debugger to check if the function is being triggered at all. Any errors inside the click handler will prevent it from running."
          },
          {
            problem: "How do I remove a button added by another app or the core product?",
            solution: "You can use `frm.remove_custom_button(label, group_name)`. You need to know the exact label and group name of the button you wish to remove. You can find this by inspecting the button element in the browser's developer tools. Be cautious, as removing core buttons may affect standard functionality."
          }
        ]}
      />
    </main>
  );
};

export default CustomButtonSnippetPage;
