import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const FetchTableAllRowsPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Fetch and Populate a Child Table from Another DocType in Frappe?"
        description="Learn to use Frappe Client Scripts to dynamically fetch data from a source DocType's child table and populate a target child table upon a trigger event."
        snippetName="Fetch Table All Rows"
        language="javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe and ERPNext development, a common requirement is to automate data entry by pulling information from a related document. This is especially true for child tables (also known as Table MultiSelect fields), where you might need to copy line items from one DocType to another, for example, from a Sales Order to a Purchase Order.",
          "This collection of client scripts demonstrates the standard pattern for achieving this. By listening to an event, such as a Link Field change or a button click, the script fetches the source document, iterates through its child table, and programmatically adds new rows to the current form's child table, mapping the data as needed."
        ]}
      />
      <CodeBlock
        language="javascript"
        code={`// Generic Example: Fetch Table on link field Event
frappe.ui.form.on("DocTypeB", "Trigger", function(frm) {
	frappe.model.with_doc("DocTypeA", frm.doc.trigger, function() {
		var qmtable= frappe.model.get_doc("DocTypeA", frm.doc.Trigger)
		$.each(qmtable.ChildTableA, function(index, row){
			d = frm.add_child("ChildTableB");
			d.field1 = row.fielda;
			d.field2 = row.fieldb;
		cur_frm.refresh_field("ChildTableB");
		})
	});
});

// Example 1: Populate Maintenance Visit parts from Serial No master
frappe.ui.form.on("Maintenance Visit", "serial_no", function(frm) {
	frappe.model.with_doc("Serial No", frm.doc.serial_no, function() {
		var qmtable= frappe.model.get_doc("Serial No", frm.doc.serial_no)
		$.each(qmtable.machine_parts, function(index, row){
			d = frm.add_child("parts_replaced");
			d.part_name = row.part_name;
			d.serial_no = row.serial_no;
		cur_frm.refresh_field("parts_replaced");
		})
	});
});

// Example 2: Clear table before fetching from Sales Order to Purchase Order
frappe.ui.form.on("Purchase Order", "for_so", function(frm) {
	frm.clear_table("items");
	frappe.model.with_doc("Sales Order", frm.doc.for_so, function() {
		var qmtable= frappe.model.get_doc("Sales Order", frm.doc.for_so)
		$.each(qmtable.items, function(index, row){
			d = frm.add_child("items");
			d.item_code= row.item_code;
			d.qty = row.qty;
			d.warehouse= row.warehouse;
			d.description = row.description;
		cur_frm.refresh_field("items");
		})
	});
});

// Example 3: On a button click, populate transport details from linked Delivery Notes
frappe.ui.form.on("Sales Invoice", "get_transport_details", function(frm) {
	$.each(frm.doc.items, function(n, m){
		if (m.delivery_note){ 
			frappe.model.with_doc("Delivery Note", m.delivery_note, function() {
				var qmtable= frappe.model.get_doc("Delivery Note", m.delivery_note)
				$.each(qmtable.transport, function(index, row){
					d = frm.add_child("transport");
					d.truck_no = row.truck_no;
					//... map other fields				
				cur_frm.refresh_field("transport");
				})
			});
		}
	});
});

// Example 4: Running serially for better performance
function get_qty(frm) {
	frappe.model.with_doc("Outward Sample", frm.doc.sample_no, function() {
		frappe.run_serially([
			() => {
				let os_doc = frappe.model.get_doc("Outward Sample", frm.doc.sample_no)
				$.each(os_doc.details, function(index, row){
					let d = frm.add_child("items");
					// ... map fields
				})
			},
			() => {
				frm.refresh_field("items"); // Refresh only once after the loop
			},
		])
	});
}`}
      />
      <CodeOverview
        whatItDoes="This script dynamically fetches all rows from a child table in a source DocType and populates them into a child table in the current form. This is triggered by an event, such as changing a Link Field value or clicking a custom button."
        whenToUse="Use this script when you need to automate data entry by copying related child table data from one document to another. It's ideal for onload, refresh, or field-specific change events (e.g., `frm.doc.my_link_field`)."
        prerequisites={[
          "Basic understanding of Frappe DocTypes and Child Tables.",
          "Familiarity with Frappe Client Scripting events."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Form Event Listener: frappe.ui.form.on",
            description: "This is the primary function for attaching event handlers to form fields or the form itself. It allows you to trigger custom logic when a user interacts with a field, like changing its value or clicking a button.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frappeuiformon"
          },
          {
            title: "Loading Documents: frappe.model.with_doc",
            description: "A crucial API call that pre-loads a document from the server into the client's memory. This ensures the document's data is available for use by 'frappe.model.get_doc' without an additional server trip.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/model#frappemodelwith_doc"
          },
          {
            title: "Populating Child Tables: frm.add_child",
            description: "This function creates a new row in a specified child table field. You can then access this new row object to set its field values before refreshing the grid.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frmadd_child"
          },
          {
            title: "Refreshing UI: frm.refresh_field",
            description: "After programmatically changing data in a child table, this function must be called to re-render the grid on the user interface and display the new rows.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#frmrefresh_field"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Define the Event Trigger",
            explanation: "First, create a new Client Script for the target DocType (e.g., 'Purchase Order'). Use `frappe.ui.form.on` to listen for changes to the Link Field that connects to the source DocType (e.g., 'for_so' which links to 'Sales Order').",
            code: `frappe.ui.form.on("Purchase Order", "for_so", function(frm) {\n  // Your code will go here\n});`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Clear the Target Child Table",
            explanation: "Inside the event handler, it's best practice to clear any existing rows from the target child table to avoid duplicates. Use `frm.clear_table('items');` where 'items' is the fieldname of your child table.",
            code: `frm.clear_table("items");`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Fetch the Source Document",
            explanation: "Using `frappe.model.with_doc`, we load the selected source document from the server. This is an asynchronous operation, so the rest of our logic is placed inside its callback function.",
            code: `frappe.model.with_doc("Sales Order", frm.doc.for_so, function() {\n  // Logic after document is loaded\n});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Iterate and Map Data",
            explanation: "Inside the callback, get the document using `frappe.model.get_doc`. Then, use `$.each` to loop through the source child table. For each row, create a new row in the target child table using `frm.add_child` and map the corresponding fields.",
            code: `var source_doc = frappe.model.get_doc("Sales Order", frm.doc.for_so);\n$.each(source_doc.items, function(index, source_row) {\n    let new_row = frm.add_child("items");\n    new_row.item_code = source_row.item_code;\n    new_row.qty = source_row.qty;\n    new_row.description = source_row.description;\n});`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Refresh the UI",
            explanation: "Finally, after the loop has finished adding all the new rows, call `frm.refresh_field('items');` to update the form's UI and display the newly populated data in the child table grid.",
            code: `frm.refresh_field("items");`,
            language: "javascript"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Data is not being populated, and there are no errors in the console.",
            solution: "Check the browser's developer tools Network tab to confirm the `with_doc` API call is successful. Ensure the DocType and document names are correct, and the user has permission to read the source document. Also verify the fieldnames of both child tables."
          },
          {
            problem: "The child table shows old data briefly before the new data appears.",
            solution: "This happens if `frm.clear_table()` is not called or is called too late. Ensure it's the first line inside your event handler to provide a clean slate before fetching new data."
          },
          {
            problem: "I get an error like 'Cannot read properties of undefined' when accessing the child table.",
            solution: "This error indicates that the source document object (`qmtable` in the examples) is not what you expect. This can happen if `with_doc` fails or if the document exists but doesn't have a child table with the fieldname you're trying to access. Use `console.log(qmtable)` to inspect the fetched document object and verify its structure."
          },
          {
            problem: "The UI freezes or is slow when fetching a large number of rows.",
            solution: "Calling `refresh_field` inside a loop is very inefficient. As shown in the `run_serially` example, you should perform all the `add_child` operations first, and then call `refresh_field` only once after the loop is complete. This updates the UI a single time."
          }
        ]}
      />
    </main>
  );
};

export default FetchTableAllRowsPage;
