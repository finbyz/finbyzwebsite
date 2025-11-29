import type { Metadata } from 'next';
import CodeSnippetHero from '@/components/code-snippets/code-snippet-hero';
import CodeSnippetInstroduction from '@/components/code-snippets/code-introduction';
import CodeBlock from '@/components/code-snippets/code-block';
import CodeOverview from '@/components/code-snippets/code-overview';
import KeyConcepts from '@/components/code-snippets/key-concepts';
import StepByStepTutorial from '@/components/code-snippets/step-by-step-tutorial';
import Troubleshooting from '@/components/code-snippets/troubleshooting';

export const metadata: Metadata = {
  title: 'How to Use Alert, Prompt, and Confirm Dialogs in Frappe',
  description: 'Learn to implement user-facing dialogs in Frappe, including show_alert, frappe.prompt, frappe.confirm, and custom dialogs using frappe.ui.Dialog.',
};

export default function DialogsPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Use Alert, Prompt, and Confirm Dialogs in Frappe"
        description="Learn to implement user-facing dialogs in Frappe, including show_alert, frappe.prompt, frappe.confirm, and custom dialogs using frappe.ui.Dialog."
        snippetName="Alerts/ Dialogs Types"
        language="Javascript"
        category="Frappe Frontend"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
            "Effective user interaction is key to building intuitive applications within the Frappe framework. Frappe provides a versatile set of built-in dialogs to communicate with users, gather input, and confirm actions. These tools range from simple, non-obtrusive alerts to complex, custom-built dialog boxes. Mastering these dialog types is essential for any Frappe developer looking to create a seamless and responsive user experience."
        ]}
      />
      <CodeBlock
        code={`// Simple alert that disappears after 5 seconds
show_alert('Hi, do you have a new message?', 5);`}
        language="javascript"
        referenceLink="https://frappe.io/docs/user/en/guides/app-development/dialogs-types"
        referenceLinkText="Frappe Dialogs Documentation"
        allowCopy
      />
      <CodeOverview
        whatItDoes="Provides a suite of functions to create various modal and non-modal dialogs for user interaction in Frappe applications."
        whenToUse="Use in Client Scripts to display informational messages, request user input, confirm critical actions, or present complex custom forms without navigating away from the current page."
        prerequisites={['Basic understanding of Frappe Client Scripts.', 'A Frappe development environment.']}
      />
      <KeyConcepts
        concepts={[
          {
            title: 'frappe.ui.Dialog',
            description: 'The core Dialog class in Frappe. All other dialogs like `prompt` and `confirm` are convenient wrappers around this class. You can instantiate it directly to create highly customized dialogs with multiple fields and custom actions.',
            relatedLink: 'https://frappe.io/docs/user/en/guides/app-development/dialogs-types#custom-dialog',
          },
          {
            title: 'Callback Functions',
            description: 'Since user interaction is asynchronous, most dialogs rely on callback functions. These functions are executed only after the user interacts with the dialog (e.g., clicks a button or submits data), ensuring your code runs at the appropriate time.',
            relatedLink: 'https://developer.mozilla.org/en-US/docs/Glossary/Callback_function',
          },
          {
            title: 'Asynchronous UI',
            description: 'Dialogs do not halt code execution. The script continues to run after a dialog is shown. This is why logic that depends on the dialog\'s result must be placed inside a callback function to handle the asynchronous nature of user input.',
            relatedLink: 'https://frappe.io/docs/user/en/guides/app-development/frappe-javascript-api',
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: 'Displaying a Simple Alert',
            explanation: 'The `show_alert` function is used for non-obstructive messages. It displays a small notification that automatically fades out. It takes the message string and an optional duration in seconds.',
            code: `show_alert('Your document has been saved.', 7);`,
            language: 'javascript',
          },
          {
            stepNumber: 2,
            title: 'Prompting for User Input',
            explanation: 'Use `frappe.prompt` to collect data from the user. It takes an array of field objects, a callback function to process the entered values, a title, and a primary button label.',
            code: `frappe.prompt(
  [
    {
      'fieldname': 'user_email',
      'fieldtype': 'Data',
      'label': 'Enter your Email',
      'reqd': 1
    }
  ],
  function(values) {
    console.log(values.user_email);
    show_alert('Email captured: ' + values.user_email);
  },
  'Email Collection',
  'Submit'
);`,
            language: 'javascript',
          },
          {
            stepNumber: 3,
            title: 'Confirming an Action',
            explanation: '`frappe.confirm` is used to get a yes/no confirmation from the user before proceeding. It takes a message and two callback functions: one for a positive confirmation (`onyes`) and one for a negative confirmation (`oncancel`).',
            code: `frappe.confirm(
    'Are you sure you want to delete this record?',
    () => {
        // Logic to delete the record
        console.log('Action confirmed');
    },
    () => {
        // Logic if user cancels
        console.log('Action cancelled');
    }
)`,
            language: 'javascript',
          },
          {
            stepNumber: 4,
            title: 'Using `msgprint` for Detailed Messages',
            explanation: 'The `msgprint` function shows a modal dialog that the user must explicitly close. It is useful for displaying important information or formatted content, as it accepts HTML strings.',
            code: `msgprint('<h3>Update Complete</h3><p>All items have been successfully processed.</p>', 'Status Report');`,
            language: 'javascript',
          },
          {
            stepNumber: 5,
            title: 'Building a Custom Dialog',
            explanation: 'For maximum flexibility, you can instantiate `frappe.ui.Dialog`. This allows you to define multiple fields, set a primary action, and manipulate the dialog\'s content dynamically.',
            code: `let d = new frappe.ui.Dialog({
    title: 'User Details',
    fields: [
        {fieldname: 'full_name', label: 'Full Name', fieldtype: 'Data'},
        {fieldname: 'dob', label: 'Date of Birth', fieldtype: 'Date'}
    ],
    primary_action_label: 'Submit',
    primary_action(values) {
        show_alert('Processing user: ' + values.full_name);
        d.hide();
    }
});

d.show();`,
            language: 'javascript',
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: 'Dialog Does Not Appear',
            solution: 'Check your browser\'s developer console for JavaScript errors. Syntax errors in your client script can prevent the dialog from being triggered. Also, ensure your script is correctly attached to the DocType and is being loaded.',
          },
          {
            problem: 'Callback Function Not Executing',
            solution: 'Verify the syntax of your callback function. For `frappe.prompt`, ensure you are accessing the submitted values correctly via the `values` object passed to the callback. For `frappe.confirm`, make sure you have defined both the `onyes` and `oncancel` callbacks correctly.',
          },
          {
            problem: 'Data from `frappe.prompt` is Undefined',
            solution: 'The callback function for `frappe.prompt` receives an object where keys are the `fieldname`s you defined. Double-check that you are using the correct `fieldname` to access the value (e.g., `values.user_email`, not `values.user email`).',
          },
        ]}
      />
    </main>
  );
}
