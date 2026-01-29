import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AlertsPage() {
    return (
        <main>
            <CodeSnippetHero
                title="ERPNext Notification Control (Alerts)"
                description="A complete guide to staying informed about important business events in ERPNext using automatic email, SMS, and Slack notifications."
                snippetName="Notification Control"
                language="python"
                category="ERPNext Core"
                accentColor="orange"
            />
            <CodeSnippetInstroduction
                paragraphs={[
                    "Staying on top of critical business events is essential for smooth operations. ERPNext's Notification Control (formerly known as Email Alerts) allows you to automate communication based on document changes.",
                    "Whether it's notifying a sales manager about a high-value order, alerting the warehouse team of a new delivery, or sending payment reminders to customers, Notification Control handles it all automatically."
                ]}
            />

            <KeyConcepts
                concepts={[
                    {
                        title: "Triggers",
                        description: "Events that start the notification process. Common triggers include 'New' (document creation), 'Submit' (document finalization), 'Cancel', 'Save', or value changes in specific fields.",
                        relatedLink: "https://docs.erpnext.com/docs/user/manual/en/notification"
                    },
                    {
                        title: "Conditions",
                        description: "Logic checks to determine if the alert should be sent. You can use simple field comparisons or complex Python/JavaScript expressions to target specific scenarios (e.g., Grand Total > 10000).",
                        relatedLink: "https://frappeframework.com/docs/user/en/guides/app-development/conditions-and-scripts"
                    },
                    {
                        title: "Recipients",
                        description: "Who receives the message? Recipients can be dynamic (document owner, customer contact), fixed email addresses, or specific system Roles (e.g., Accounts Manager).",
                        relatedLink: ""
                    }
                ]}
            />

            <StepByStepTutorial
                steps={[
                    {
                        stepNumber: 1,
                        title: "Access Notification List",
                        explanation: "Navigate to the Notification list to manage your alerts. You can find this by searching for 'Notification' in the awesome bar.",
                        code: "Search: Notification List",
                        language: "text"
                    },
                    {
                        stepNumber: 2,
                        title: "Create New Notification",
                        explanation: "Click 'Add Notification'. Enter a descriptive Subject. In the 'Document Type' field, select the document you want to monitor (e.g., Sales Order, Leave Application).",
                        code: "Subject: High Value Order Alert\nDocument Type: Sales Order",
                        language: "yaml"
                    },
                    {
                        stepNumber: 3,
                        title: "Set Trigger and Conditions",
                        explanation: "Choose when the alert sends (e.g., on 'Submit'). Add a condition if needed. For example, to alert only for orders above $5,000:",
                        code: "Send Alert On: Submit\nCondition: doc.grand_total > 5000",
                        language: "python"
                    },
                    {
                        stepNumber: 4,
                        title: "Configure Recipients",
                        explanation: "Define who gets the message. You can send to specific email fields (like `contact_email`) or to internal users by Role. You can also send to fixed email addresses.",
                        code: "Send To: Sales Manager (Role)\nCC: ceo@example.com (Fixed)",
                        language: "yaml"
                    },
                    {
                        stepNumber: 5,
                        title: "Design the Message",
                        explanation: "Draft your message content. You can use Jinja templating to include dynamic data from the document, such as the Customer Name or Grand Total.",
                        code: "Hello,\n\nA new high-value order {{ doc.name }} from {{ doc.customer_name }} amounting to {{ doc.grand_total }} has been submitted.\n\nRegards,\nERP System",
                        language: "jinja2"
                    }
                ]}
            />

            <Troubleshooting
                items={[
                    {
                        problem: "Email not being sent",
                        solution: "Check the 'Email Queue' list to see if the system tried to send it. If it's in 'Error' state, check your Email Account configuration. If it's not in the queue at all, check your Condition logic."
                    },
                    {
                        problem: "Alert sending too many times",
                        solution: "If you set the trigger to 'Save', the alert will trigger every time the document is saved. Consider 'Value Change' or 'Submit' for one-time events, or use the 'Only if' checkbox properties cautiously."
                    },
                    {
                        problem: "Dynamic values not showing in email",
                        solution: "Ensure you are using the correct Jinja syntax `{{ doc.field_name }}`. Verify the field name in the Customize Form view."
                    }
                ]}
            />
        </main>
    );
}
