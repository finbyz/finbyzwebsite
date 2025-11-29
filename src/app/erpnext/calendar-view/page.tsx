import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

export default function CalendarViewPage() {
    return (
        <main>
            <CodeSnippetHero
                title="How to Create a Custom Calendar View for a DocType in Frappe/ERPNext"
                description="Learn to configure a custom calendar view in Frappe/ERPNext by creating a doctype_calendar.js file and a get_events Python method. Guide covers field mapping and filters."
                snippetName="Calendar View"
                language="Javascript"
                category="Frappe Views"
                accentColor="blue"
            />
            <CodeSnippetInstroduction 
                paragraphs={[
                    "Frappe Framework provides a powerful, out-of-the-box calendar view that can be configured for any DocType. This feature is ideal for visualizing records that have a start and end date, such as tasks, meetings, appointments, or timesheets.",
                    "To enable this view, you need to create a simple JavaScript configuration file that tells the framework how to map your DocType's fields to the calendar's properties. This snippet demonstrates the complete client-side configuration required."
                ]}
            />
            <CodeBlock
                code={`frappe.views.calendar["Timesheet"] = { // Doctype Name
	field_map: {
		"start": "start_date", //datefield
		"end": "end_date", // datefield
		"id": "name",
		"allDay": "allDay",
		"child_name": "name",
		"title": "title"
	},
	//optional
	style_map: {
		"0": "info", 
		"1": "standard", 
		"2": "danger"
	},
	gantt: true,
	filters: [
		{
			"fieldtype": "Link",
			"fieldname": "project",
			"options": "Project",
			"label": __("Project")
		},
		{
			"fieldtype": "Link",
			"fieldname": "employee",
			"options": "Employee",
			"label": __("Employee")
		}
	],
	// Custom Function created in [docmodule].[doctype].[docname].py file
	get_events_method: "erpnext.projects.doctype.timesheet.timesheet.get_events"
}`}
                language="javascript"
                fileName="timesheet_calendar.js"
                referenceLink="https://github.com/frappe/erpnext/blob/555279b6e66bc3c258622972715f247f721358fd/erpnext/projects/doctype/timesheet/timesheet_calendar.js"
                referenceLinkText="View on GitHub"
            />
            <CodeOverview
                whatItDoes="This script configures the calendar view for a specified DocType (e.g., 'Timesheet'). It maps DocType fields to calendar event properties like start date, end date, and title, sets up user filters, and specifies the server-side Python method responsible for fetching the event data."
                whenToUse="Use this script when you need to provide users with a visual, date-based representation of records from a DocType. It's ideal for tracking appointments, project tasks, leave applications, or any time-sensitive data."
                prerequisites={[
                    "A Frappe DocType with at least one Date or Datetime field to serve as the start date.",
                    "A corresponding server-side Python method to fetch and return event data."
                ]}
            />
            <KeyConcepts
                concepts={[
                    {
                        title: "frappe.views.calendar",
                        description: "A global JavaScript object in the Frappe Framework where developers define custom view configurations. By adding a key with your DocType's name, you instruct the framework on how to render it in a calendar format.",
                        relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/views"
                    },
                    {
                        title: "field_map",
                        description: "This object is crucial for the calendar view. It maps the standard calendar event properties (like 'start', 'end', 'title') to the actual fieldnames in your DocType, telling the calendar which data to display where.",
                        relatedLink: "https://frappeframework.com/docs/v14/user/en/doctype/fields"
                    },
                    {
                        title: "get_events_method",
                        description: "This property specifies the dotted path to the Python function on the server that will be called to fetch the calendar events. This function must be whitelisted and must accept 'start' and 'end' date arguments.",
                        relatedLink: "https://frappeframework.com/docs/v14/user/en/api/server-side-api"
                    },
                    {
                        title: "filters",
                        description: "An optional array of objects that defines filter fields to be displayed above the calendar. This allows users to narrow down the displayed events based on criteria like a linked DocType.",
                        relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/app-development/views/list-view/filters"
                    }
                ]}
            />
            <StepByStepTutorial
                steps={[
                    {
                        stepNumber: 1,
                        title: "Create the Calendar JavaScript File",
                        explanation: "In your custom app, navigate to your DocType's folder (e.g., `my_app/my_app/doctype/my_doctype/`). Create a new file named `my_doctype_calendar.js`. This naming convention is essential for Frappe to automatically load the script.",
                        code: `// File: my_app/my_app/doctype/my_doctype/my_doctype_calendar.js`,
                        language: "javascript"
                    },
                    {
                        stepNumber: 2,
                        title: "Define the Client-Side Configuration",
                        explanation: "In the new JS file, add the configuration object. Replace 'My DocType' with your DocType's name. Map the `start`, `end`, and `title` fields to the corresponding fieldnames in your DocType. Finally, specify the Python method path that will fetch the data.",
                        code: `frappe.views.calendar["My DocType"] = {
    field_map: {
        "start": "your_start_date_field",
        "end": "your_end_date_field", // Optional
        "id": "name",
        "title": "your_title_field"
    },
    get_events_method: "my_app.my_app.doctype.my_doctype.my_doctype.get_events"
};`,
                        language: "javascript"
                    },
                    {
                        stepNumber: 3,
                        title: "Create the Server-Side Python Method",
                        explanation: "Open the `my_doctype.py` file. Create a Python function named `get_events`. This function must be whitelisted using the `@frappe.whitelist()` decorator and must accept `start`, `end`, and optional `filters` as arguments. It should return a list of dictionaries.",
                        code: `import frappe
from frappe.utils import get_datetime

@frappe.whitelist()
def get_events(start, end, filters=None):
    # Query your DocType for records between the given dates
    event_docs = frappe.get_all(
        "My DocType",
        fields=["name", "your_title_field", "your_start_date_field", "your_end_date_field"],
        filters=[
            {"your_start_date_field": ["<=", end]},
            {"your_end_date_field": [">=", start]}
        ]
    )

    events = []
    for doc in event_docs:
        events.append({
            "name": doc.name,
            "title": doc.your_title_field,
            "start": get_datetime(doc.your_start_date_field),
            "end": get_datetime(doc.your_end_date_field),
        })
    
    return events`,
                        language: "python"
                    },
                    {
                        stepNumber: 4,
                        title: "Build, Migrate, and Test",
                        explanation: "After saving both files, run `bench build` to bundle your new JavaScript asset and `bench migrate` to apply any server-side changes. Clear your browser cache and navigate to your DocType's list view. You should now see the 'Calendar' view option.",
                        code: `bench build && bench migrate`,
                        language: "bash"
                    }
                ]}
            />
            <Troubleshooting
                items={[
                    {
                        problem: "The 'Calendar' view option does not appear in the list view.",
                        solution: "Ensure the JavaScript file is named correctly (`[doctype_name]_calendar.js`) and is in the correct directory. Run `bench build` from your terminal and then do a hard refresh (Ctrl+Shift+R) in your browser to clear the cache."
                    },
                    {
                        problem: "The calendar loads, but no events are displayed.",
                        solution: "Check the server-side `get_events` method. It must be decorated with `@frappe.whitelist()`. Verify the `get_events_method` path in your JavaScript is correct. Open your browser's developer console (F12) and check the Network tab for failed API calls, which can provide specific error messages."
                    },
                    {
                        problem: "Events on the calendar have incorrect dates or titles.",
                        solution: "Double-check the `field_map` object in your JavaScript configuration. The keys ('start', 'end', 'title') must be mapped to the correct, case-sensitive fieldnames from your DocType."
                    }
                ]}
            />
        </main>
    );
}
