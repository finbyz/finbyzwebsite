import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ListViewFilter() {
  const snippetName = "List Veiw Filter";
  const language = "JavaScript";
  const category = "Frappe Frontend";

  const codeSnippet = `frappe.listview_settings['Ticket'] = {
	colwidths: {"subject": 6},
	add_fields: ['status'],
	onload: function(listview) {
	//set filter in list view
		frappe.route_options = {
			"status": "Open"
		};
	//end set filter in list view

		var method = "atlantis.atlantis.doctype.ticket.ticket.set_multiple_status";

		listview.page.add_action_item(__("Set as Open"), function() {
			listview.call_for_selected_items(method, {"status": "Open"});
		});
	},
	get_indicator: function (doc) {
        if(doc.status === "Open"){
            return [__("Open"), "orange", "status,=,Open"];
        }
        else if(doc.status === "In Follow Up"){
            return [__("In Follow Up"), "red", "status,=,In Follow Up"];
        }
        else if(doc.status === "Resolved"){
            return [__("Resolved"), "green", "status,=,Resolved"];
        }
    }
};`;

  return (
    <main>
      <CodeSnippetHero
        title="How to filter Tickets by status in Frappe List View?"
        description="This snippet shows how to automatically apply a filter on the Ticket DocType list view to show only 'Open' status tickets and add a custom action to set selected tickets status to 'Open'. It also customizes status indicators for better visual clarity."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: In a Frappe application managing support tickets, users need to
          quickly filter the list view to show only tickets with a specific
          status, such as "Open." They also want to bulk update the status of
          selected tickets via a convenient action button, and visually
          distinguish tickets by their status.
        </p>
        <p>
          Solution: This snippet uses
          <code>frappe.listview_settings</code> for the Ticket DocType to set the
          default filter on list load, add a custom action item to set selected
          tickets' status to "Open," and configure colored indicators for the
          status field. This enhances user productivity and data clarity.
        </p>
      </section>

      <CodeBlock code={codeSnippet} language={language} showLineNumbers allowCopy />

      <CodeOverview
        whatItDoes="Automatically applies a filter to the Ticket list view to show only tickets with status 'Open', adds a custom bulk action to mark selected tickets as 'Open', and defines colored status indicators for quick visual identification."
        whenToUse="When you need to constrain a DocType's list view to a default filtered set of records and provide user-friendly bulk actions with visual status cues."
        prerequisites={["Understanding of Frappe framework basics", "Access to customize list view settings"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.listview_settings",
            description:
              "A client-side hook to customize list view behavior of specific DocTypes in Frappe, allowing adding filters, actions and indicators.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview-settings"
          },
          {
            title: "route_options",
            description:
              "An API to prefilter list views by default when a page loads by setting route_options properties.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/route-options"
          },
          {
            title: "listview.page.add_action_item",
            description:
              "Method to add custom buttons or dropdown actions to list views enabling bulk operations on selected records.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview-actions"
          },
          {
            title: "get_indicator",
            description:
              "A function to define colored status indicators for list view entries based on record field values.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview-settings#get-indicator"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Set Column Width and Additional Fields",
            explanation:
              "Specify display width for the 'subject' column and include 'status' field in list view queries for later use in filters and indicators.",
            code: "colwidths: {'subject': 6},\nadd_fields: ['status'],",
            language: "JavaScript"
          },
          {
            stepNumber: 2,
            title: "Apply Default Filter on List Load",
            explanation:
              "Use the onload function to set frappe.route_options so the list view opens filtered showing only Tickets with status 'Open'.",
            code: "onload: function(listview) {\n  frappe.route_options = { 'status': 'Open' }\n  // ...\n}",
            language: "JavaScript"
          },
          {
            stepNumber: 3,
            title: "Add Custom Bulk Action",
            explanation:
              "Add an action button 'Set as Open' that calls a server-side method to update the status field for all selected tickets.",
            code: "listview.page.add_action_item(__('Set as Open'), function() {\n  listview.call_for_selected_items(method, { status: 'Open' });\n});",
            language: "JavaScript"
          },
          {
            stepNumber: 4,
            title: "Define Status Indicators",
            explanation:
              "Implement get_indicator function to assign distinctive colored labels to tickets based on their status values for quick visual reference.",
            code: "get_indicator: function(doc) {\n  if(doc.status === 'Open') {\n    return [__('Open'), 'orange', 'status,=,Open'];\n  }\n  if(doc.status === 'In Follow Up') {\n    return [__('In Follow Up'), 'red', 'status,=,In Follow Up'];\n  }\n  if(doc.status === 'Resolved') {\n    return [__('Resolved'), 'green', 'status,=,Resolved'];\n  }\n}",
            language: "JavaScript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Custom action button does not appear in list view.",
            solution: "Ensure the onload function is properly set in frappe.listview_settings and that your user has permission to execute the linked server-side method."
          },
          {
            problem: "Filter is not applied on list view load.",
            solution: "Make sure frappe.route_options is assigned inside the onload callback before other list view functions run and the DocType is correct."
          },
          {
            problem: "Status indicators do not display or show incorrect colors.",
            solution: "Verify get_indicator returns an array with the correct label, color, and filter string as per Frappe list view documentation syntax."
          }
        ]}
      />
    </main>
  );
}
