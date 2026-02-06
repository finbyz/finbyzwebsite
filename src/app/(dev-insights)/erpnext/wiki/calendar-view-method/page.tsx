import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const CalendarViewMethodPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Create a Custom Server-Side Method for Calendar Views in Frappe"
        description="Learn to implement a whitelisted Python method in Frappe to fetch dynamic data for Calendar and Gantt views using frappe.db.sql and JSON filters."
        snippetName="Calendar View Method"
        language="Python"
        category="Frappe Server Scripting"
        accentColor="blue"
      />
      <CodeSnippetInstroduction
        paragraphs={[
          "In the Frappe framework, Calendar and Gantt views are powerful tools for visualizing time-based data. These views are not magic; they are powered by a dedicated server-side Python method that fetches and formats the necessary event data. This method is typically named `get_events`.",
          "This snippet demonstrates the standard structure of a `get_events` function. It's a whitelisted server script that accepts start and end date parameters from the calendar UI, executes a custom SQL query to retrieve relevant records, and returns them in a format that the calendar component can render."
        ]}
      />
      <CodeBlock
        code={`import frappe
import json

@frappe.whitelist()
def get_events(start, end, filters=None):
	"""Returns events for Gantt / Calendar view rendering.
	:param start: Start date-time.
	:param end: End date-time.
	:param filters: Filters (JSON).
	"""
	filters = json.loads(filters) if filters else {}

	# Note: get_conditions is a hypothetical helper function to build WHERE clauses
	# You would implement this based on the filters your calendar needs.
	# from frappe.desk.calendar import get_event_conditions
	# conditions = get_event_conditions("Timesheet", filters)

	conditions = ""
	# Example of building conditions from filters
	# if filters.get('project'):
	# 	 conditions += f" AND project = '{filters.get('project')}'"

	return frappe.db.sql("""select 
			\`tabTimesheet Detail\`.name as name, 
			\`tabTimesheet Detail\`.docstatus as status, 
			\`tabTimesheet Detail\`.parent as parent,
			from_time as start_date, 
			hours, 
			activity_type, 
			project, 
			to_time as end_date, 
			CONCAT(\`tabTimesheet Detail\`.parent, ' (', ROUND(hours,2),' hrs)') as title 
		from \`tabTimesheet Detail\`, \`tabTimesheet\` 
		where \`tabTimesheet Detail\`.parent = \`tabTimesheet\`.name 
			and \`tabTimesheet\`.docstatus < 2 
			and (from_time <= %(end)s and to_time >= %(start)s) {conditions}
		""".format(conditions=conditions), 
		{
			"start": start,
			"end": end
		}, as_dict=True, update={"allDay": 0})`}
        language="python"
        referenceLink="https://github.com/frappe/erpnext/blob/555279b6e66bc3c258622972715f247f721358fd/erpnext/projects/doctype/timesheet/timesheet.py"
        referenceLinkText="View on GitHub"
        showLineNumbers={true}
      />
      <CodeOverview
        whatItDoes="This Python method fetches records from the Timesheet DocType, formatted as events, for rendering in Frappe's standard Calendar or Gantt views."
        whenToUse="Use this pattern when creating a custom calendar view for any DocType. This server-side script is required and must be paired with a corresponding client-side JavaScript file that configures the calendar view."
        prerequisites={[
          "A DocType with date or datetime fields (e.g., start_date, end_date).",
          "Basic understanding of Frappe's server-side scripting.",
          "Familiarity with SQL queries.",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "@frappe.whitelist() Decorator",
            description: "This decorator is a security feature that exposes a Python function to be called from the client-side (JavaScript) via an AJAX request. Any method intended to be called from the UI must be 'whitelisted'.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/server-script#whitelisted-functions",
          },
          {
            title: "frappe.db.sql",
            description: "A Frappe API method used to execute raw SQL queries against the database. It's highly flexible and often necessary for calendar views which require specific field aliases (like 'title', 'start_date') and complex joins.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappedbsql",
          },
          {
            title: "Calendar View Client Script",
            description: "This Python script is only the backend part. To enable the view, you must also create a `[doctype_name]_calendar.js` file that tells the framework which DocType to use and which `get_events` method to call.",
            relatedLink: "https://frappeframework.com/docs/user/en/guides/app-development/views/calendar-view",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create the Python Server Script File",
            explanation: "In your custom app, navigate to the directory of the DocType you want a calendar for. Create or open the main Python file for that DocType (e.g., `my_app/my_app/doctype/meeting/meeting.py`).",
            code: "# In my_app/my_app/doctype/meeting/meeting.py\n\nimport frappe\nimport json",
            language: "python",
          },
          {
            stepNumber: 2,
            title: "Define and Whitelist the get_events Function",
            explanation: "Add the get_events function and decorate it with `@frappe.whitelist()`. The function must accept `start`, `end`, and optional `filters` arguments.",
            code: `@frappe.whitelist()
def get_events(start, end, filters=None):
    pass # We will add the logic next`,
            language: "python",
          },
          {
            stepNumber: 3,
            title: "Implement the SQL Query",
            explanation: "Use \`frappe.db.sql\` to fetch your data. Important: You must alias your date fields to start_date and end_date, and a descriptive field to title for the calendar to display them correctly.",
            code: `return frappe.db.sql("""SELECT
              name,
        subject as title,
        scheduled_from as start_date,
        scheduled_to as end_date
    FROM \`tabMeeting\`
    WHERE docstatus = 1 AND (scheduled_from <= %(end)s AND scheduled_to >= %(start)s)
    """, {"start": start, "end": end}, as_dict=True)`,
            language: "python",
          },
          {
            stepNumber: 4,
            title: "Create the Calendar View JavaScript File",
            explanation: "In the same DocType directory, create a new file named `[doctype_name]_calendar.js` (e.g., `meeting_calendar.js`). This file configures the frontend calendar.",
            code: "// In my_app/my_app/doctype/meeting/meeting_calendar.js\n\n// This file should intentionally be left blank if you only need a basic calendar. \n// Frappe will automatically use the get_events method if it exists.",
            language: "javascript",
          },
          {
            stepNumber: 5,
            title: "(Optional) Configure Advanced Calendar Settings",
            explanation: "For more control, you can define the calendar view settings explicitly in your JS file, including the path to your `get_events` method.",
            code: `frappe.views.calendar["Meeting"] = {
    get_events: "my_app.my_app.doctype.meeting.meeting.get_events",
    field_map: {
        "start": "start_date",
        "end": "end_date",
        "id": "name",
        "title": "title",
    },
};`,
            language: "javascript",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The Calendar view is blank and shows no events.",
            solution: "First, check the browser's developer console (F12) for any AJAX errors when the calendar loads. Ensure your `get_events` method path in the JS file is correct. Use `frappe.log_error()` in your Python script to debug the query and returned data.",
          },
          {
            problem: "PermissionError: Not allowed to call this method.",
            solution: "This error means the function is not accessible from the client. Make sure the `@frappe.whitelist()` decorator is placed directly above your `get_events` function definition and that there are no syntax errors in the file.",
          },
          {
            problem: "Date/time values are incorrect on the calendar.",
            solution: "Ensure that the `start_date` and `end_date` fields you are selecting in your SQL query are DateTime or Date type fields. If they are stored as strings, you may need to cast them correctly in your SQL query. Also, verify the timezone settings in your Frappe instance.",
          },
        ]}
      />
    </main>
  );
};

export default CalendarViewMethodPage;
