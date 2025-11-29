import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const CreateCommunicationInTimelinePage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Programmatically Create a Communication in the ERPNext Timeline"
        description="Learn to use a Frappe server script in Python to automatically create 'Communication' DocType entries, making them visible in the timeline of reference documents like Leads."
        snippetName="Create Communication in Timeline"
        language="Python"
        category="Frappe Server Scripting"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In ERPNext and the Frappe Framework, maintaining a clear history of interactions is crucial for CRM and other business processes. The 'Communication' DocType is the standard way to log activities like meetings, calls, and comments against other documents, such as Leads or Customers.",
          "This server script demonstrates how to automate this process. When triggered by an event (e.g., submitting a 'Lead Meeting' document), it programmatically creates a new Communication entry, formats the relevant details, and links it to the appropriate Lead. This ensures that the document's timeline is always up-to-date without manual intervention."
        ]}
      />
      <CodeBlock
        code={`def new_comm(self, method):
	url = "http://erp.finbyz.in/desk#Form/Lead%20Meetings/" + self.name
	if self.actionables:
		discussed = "<strong><a href="+url+">"+self.name+"</a>: </strong>"+ "Met "+ self.contact_person + " On "+ self.meeting_from +"<br>" + self.discussion.replace('\n', "<br>")+ "<br><strong>Actionable:</strong>"
	else:
		discussed = "<strong><a href="+url+">"+self.name+"</a>: </strong>"+ "Met "+ self.contact_person + " On "+ self.meeting_from +"<br>" + self.discussion.replace('\n', "<br>")
	cm = frappe.new_doc("Communication")
	cm.subject = self.name
	cm.communication_type = "Comment"
	cm.comment_type = "Comment"
	cm.content = discussed
	cm.reference_doctype = "Lead"
	cm.reference_name = self.lead
	cm.user = frappe.session.user
	cm.sender_full_name = get_fullname(frappe.session.user)	
	cm.save(ignore_permissions=True)`}
        language="python"
      />
      <CodeOverview
        whatItDoes="This server script programmatically creates a new 'Communication' document in Frappe/ERPNext. It formats content from a source DocType (like a meeting) and links it to a reference DocType (like a Lead), making the interaction visible in the document's timeline."
        whenToUse="Use this script in a DocType server script, triggered by an event like 'on_submit' or 'on_update', to automatically log activities. For example, after a 'Lead Meeting' document is submitted, this script can create the corresponding communication entry on the associated 'Lead' timeline."
        prerequisites={["Basic understanding of Frappe DocTypes", "Familiarity with Frappe Server Scripting (Python)"]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.new_doc",
            description: "This core Frappe API function creates a new document instance in memory. It takes the DocType name as an argument and returns a new document object that you can populate with data before saving.",
            relatedLink: "https://frappeframework.com/docs/v14/en/api/frappe#frappe.new_doc",
          },
          {
            title: "Communication DocType",
            description: "A standard DocType in ERPNext for logging interactions like emails, calls, meetings, and comments. Documents of this type are linked to other records to build a comprehensive timeline.",
            relatedLink: "https://docs.erpnext.com/docs/v13/user/manual/en/CRM/communication",
          },
          {
            title: "Reference DocType & Name",
            description: "The `reference_doctype` and `reference_name` fields are essential for linking the Communication to another document. Setting these correctly ensures the communication appears in the correct timeline.",
            relatedLink: "https://frappeframework.com/docs/v14/en/basics/doctypes/document-links",
          },
          {
            title: "doc.save(ignore_permissions=True)",
            description: "This method saves the document to the database. The `ignore_permissions=True` flag is crucial for server-side automation, as it allows the system to create documents even if the triggering user lacks direct permissions.",
            relatedLink: "https://frappeframework.com/docs/v14/en/api/document#save",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the Trigger DocType and Event",
            explanation: "First, determine which DocType will trigger this script. In this example, it's likely a custom DocType like 'Lead Meeting'. You'll also need to choose the event, such as 'On Submit' or 'On Save'.",
            code: "# In this example, 'self' refers to an instance of the trigger DocType.\n# For example, a 'Lead Meeting' DocType.",
            language: "python",
          },
          {
            stepNumber: 2,
            title: "Create a Server Script",
            explanation: "Navigate to the 'Server Script List' in your Frappe instance. Create a new script, give it a name, select 'DocType Event' as the Script Type, and choose the DocType and event you identified in step 1.",
            code: "// From the awesome bar, search for 'Server Script List'\n// Click 'Add Server Script'\n// Set 'Script Type' to 'DocType Event'\n// Set 'Reference DocType' to your source DocType (e.g., 'Lead Meeting')\n// Set 'DocType Event' to 'Before Save' or 'After Insert'",
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "Adapt the Script Logic",
            explanation: "Copy the provided code into the script editor. You must change the field names (e.g., `self.contact_person`, `self.discussion`, `self.lead`) to match the exact fieldnames in your trigger DocType.",
            code: `# The 'self' object gives you access to the fields of the trigger document.
# Ensure these fieldnames exist in your DocType:
# self.name: The document's unique ID (usually available by default)
# self.contact_person: Field for the contact person's name
# self.meeting_from: A date or datetime field for the meeting time
# self.discussion: A text field for meeting notes
# self.lead: A Link field to the associated Lead document`,
            language: "python",
          },
          {
            stepNumber: 4,
            title: "Set the Communication Reference",
            explanation: "Crucially, ensure the `cm.reference_doctype` and `cm.reference_name` fields are set correctly. They tell the system which document's timeline to add this communication to.",
            code: `cm.reference_doctype = \"Lead\" # The target DocType for the timeline
cm.reference_name = self.lead   # The specific document's name from the link field`,
            language: "python",
          },
          {
            stepNumber: 5,
            title: "Save and Test",
            explanation: "Enable the server script and save it. Now, create and save/submit a new document of your trigger DocType. Go to the referenced Lead (or other document) and check its timeline. You should see the newly created communication entry.",
            code: "# After saving the script, create a new 'Lead Meeting'.\n# Fill in the details and submit it.\n# Open the linked 'Lead' document and scroll down to the timeline.",
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Communication is not appearing in the timeline.",
            solution: "Verify that `cm.reference_doctype` and `cm.reference_name` are set with the correct values and point to a valid, existing document. A common mistake is a typo in the DocType name or the `reference_name` field being empty. Also, check the 'Error Log' for any silent failures after the trigger event.",
          },
          {
            problem: "AttributeError: 'DocType' object has no attribute 'discussion'.",
            solution: "This error means the field name in the script (e.g., `self.discussion`) does not exist in your trigger DocType. Go to 'Customize Form' for your DocType, find the correct fieldname, and update the script to use that exact name.",
          },
          {
            problem: "A PermissionError occurs on `cm.save()`.",
            solution: "This happens if the script runs without `ignore_permissions=True` and the user triggering the action does not have permission to create 'Communication' documents. Using `cm.save(ignore_permissions=True)` is the standard solution for such automated background tasks.",
          },
        ]}
      />
    </main>
  );
};

export default CreateCommunicationInTimelinePage;
