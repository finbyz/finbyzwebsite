import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function SendEmailOnButtonClickPage() {
    return (
        <main>
            <CodeSnippetHero
                title="How to Send Email from a Server Script on Button Click in Frappe?"
                description="Learn how to create a Frappe server script to send customized emails to a list of recipients from a child table when a custom button is clicked in a DocType."
                snippetName="Send Email on Button Click"
                language="Python"
                category="Frappe Server Script"
                accentColor="orange"
            />
            <CodeSnippetInstroduction 
                paragraphs={[
                    "This server-side script demonstrates a common business requirement in Frappe/ERPNext: sending bulk, personalized emails based on data within a document, triggered by a user action like a button click. This pattern is highly effective for sending event invitations, status notifications, or alerts to a list of stakeholders defined in a child table.",
                    "The code iterates through a child table to gather recipient emails, constructs a dynamic subject line, and utilizes Frappe's built-in `frappe.sendmail` utility to dispatch the emails."
                ]}
            />
            <CodeBlock 
                code={`# In [doctype_name].py
import frappe
from frappe.model.document import Document

class YourDocType(Document):
    @frappe.whitelist()
    def send_internal_invitation(self):
        subject = "Invitation: '" + self.title + "' on date: " + self.get_formatted('date')

        # 'meeting_company' is the fieldname of the child table
        for row in self.meeting_company: 
            frappe.sendmail(
                recipients=[row.user_id], # 'user_id' is a field in the child table holding the email
                sender=frappe.session.user,
                subject=subject, 
                message=self.invitation_message, # 'invitation_message' is a field in the parent DocType
                reference_doctype=self.doctype,
                reference_name=self.name
            )
            
        self.status = "Invitation Sent"
        self.save()
        frappe.db.commit()
        frappe.msgprint("Invitation Sent to Company Representatives")`}
                language="python"
                showLineNumbers={true}
            />
            <CodeOverview 
                whatItDoes="This server-side Python method sends an email to each user listed in a child table of a DocType. It's triggered by a custom button on the DocType form."
                whenToUse="Use this script when you need to perform a bulk action, like sending notifications, to multiple related records (stored in a child table) with a single click from the parent document form."
                prerequisites={[
                    "A parent DocType with a custom button.",
                    "A child table within the parent DocType containing a field for the recipient's email address (e.g., a field of type 'Data' with option 'Email', or a Link to User).",
                    "The method must be whitelisted using `@frappe.whitelist()`."
                ]}
            />
            <KeyConcepts
                concepts={[
                    {
                        title: "@frappe.whitelist()",
                        description: "A security decorator in Frappe that marks a Python method as callable from the client-side (e.g., through a UI button click or an API call). Any method intended to be triggered from the user interface must be whitelisted.",
                        relatedLink: "https://frappeframework.com/docs/v14/en/api/frappe#frappe.whitelist"
                    },
                    {
                        title: "frappe.sendmail",
                        description: "A high-level Frappe API for sending emails. It simplifies the process by handling email queueing and using the system's default email settings. It takes parameters like recipients, subject, message, and optional references.",
                        relatedLink: "https://frappeframework.com/docs/v14/en/api/frappe.email#frappe.sendmail"
                    },
                    {
                        title: "Child Table Iteration",
                        description: "Child Tables in Frappe are stored as a list of document objects on the parent document. You can iterate through this list using a standard Python 'for' loop to access the data in each row of the child table.",
                        relatedLink: "https://frappeframework.com/docs/v14/en/model/doctypes/child_doctypes"
                    },
                    {
                        title: "self.save() and frappe.db.commit()",
                        description: "`self.save()` saves the document's current state within the ongoing database transaction. `frappe.db.commit()` permanently writes that transaction to the database. Committing ensures the status change is immediately visible to all users.",
                        relatedLink: "https://frappeframework.com/docs/v14/en/api/frappe.database#frappe.db.commit"
                    }
                ]}
            />
            <StepByStepTutorial 
                steps={[
                    {
                        stepNumber: 1,
                        title: "Define the Server-Side Method",
                        explanation: "In your custom app, locate your DocType's Python file (e.g., `my_app/doctype/my_doctype/my_doctype.py`). Add the method inside the DocType's class and make sure to decorate it with `@frappe.whitelist()`.",
                        code: `import frappe
from frappe.model.document import Document

class YourDocType(Document):
    @frappe.whitelist()
    def send_internal_invitation(self):
        # ... implementation from above ...`,
                        language: "python"
                    },
                    {
                        stepNumber: 2,
                        title: "Create a Custom Button in the DocType",
                        explanation: "Navigate to 'DocType List', open your DocType, and scroll down to the 'Actions' section to add a new button. Give it a descriptive 'Label', like 'Send Invitation'.",
                        code: "// This is a UI configuration step, not code.\n// 1. Go to 'DocType List' and select your DocType.\n// 2. In the settings, scroll to the 'Actions' or 'Buttons' grid.\n// 3. Add a new row and set the 'Label' for your button.",
                        language: "javascript"
                    },
                    {
                        stepNumber: 3,
                        title: "Link the Button to the Method",
                        explanation: "To link the button to your server script, you need to create a simple Client Script that calls the whitelisted method.",
                        code: `// Create a new Client Script for your DocType
frappe.ui.form.on('YourDocType', {
    refresh: function(frm) {
        // Add the button if it doesn't exist
        frm.add_custom_button(__('Send Invitation'), function() {
            // Call the server-side method
            frappe.call({
                method: 'your_app.doctype.your_doctype.your_doctype.send_internal_invitation',
                args: {
                    doc_name: frm.doc.name
                },
                callback: function(r) {
                    if (!r.exc) {
                        frm.reload_doc();
                    }
                }
            });
        });
    }
});`,
                        language: "javascript"
                    }
                ]}
            />
            <Troubleshooting
                items={[
                    {
                        problem: "Button click results in a 'Not Permitted' error.",
                        solution: "This error occurs when the server-side method is not whitelisted. Ensure that the `@frappe.whitelist()` decorator is placed directly above your method definition in the Python file. After adding it, run `bench migrate` and `bench restart`."
                    },
                    {
                        problem: "Emails are not being delivered, but the success message appears.",
                        solution: "This suggests the script ran successfully but the email system failed. Check the 'Email Queue' in your Frappe instance for any failed entries. Review your SMTP settings in 'Email Domain' or 'Email Account' to ensure they are configured correctly."
                    },
                    {
                        problem: "The script fails with an AttributeError, like 'YourDocType' object has no attribute 'meeting_company'.",
                        solution: "This means the fieldname for the child table in your script (`self.meeting_company`) does not match the actual fieldname defined in the parent DocType. Verify the 'Fieldname' of your child table in the DocType's form configuration and update your code to match it exactly."
                    }
                ]}
            />
        </main>
    );
}
