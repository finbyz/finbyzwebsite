"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "Fetch Table All Rows";
const language = "javascript";
const category = "Frappe Client Script";

const codeSnippet = `//Fetch Table on link field Event
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

//Example
frappe.ui.form.on("Maintenance Visit", "serial_no", function(frm) {
	frappe.model.with_doc("Serial No", frm.doc.serial_no, function() {
		var qmtable= frappe.model.get_doc("Serial No", frm.doc.serial_no)
		$.each(qmtable.machine_parts, function(index, row){
			d = frm.add_child("parts_replaced");
			d.part_name = row.part_name;
			d.serial_no = row.serial_no;
			d.warranty_upto = row.warranty_upto;
			d.no_of_parts = row.no_of_parts;
			d.last_replacement = row.last_replacement;
		cur_frm.refresh_field("parts_replaced");
		})
	});
});
//Example 2: When serial no is part of other table called Maintenance Visit Purpose.
frappe.ui.form.on("Maintenance Visit Purpose", "serial_no_link", function(frm,cdt,cdn) {
	var m = locals[cdt][cdn];
	frappe.model.with_doc("Serial No", m.serial_no, function() {
		var qmtable= frappe.model.get_doc("Serial No", m.serial_no)
		$.each(qmtable.machine_parts, function(index, row){
			d = frm.add_child("parts_replaced");
			d.part_name = row.part_name;
			d.serial_no = row.serial_no;
			d.warranty_upto = row.warranty_upto;
			d.no_of_parts = row.no_of_parts;
			d.last_replacement = row.last_replacement;
		cur_frm.refresh_field("parts_replaced");
		})
	});
});

//Example 3: Clear table before entring new Fetch Table on link feild Event
frappe.ui.form.on("Purchase Order", "for_so", function(frm) {
	frm.clear_table("items");
	frappe.model.with_doc("Sales Order", frm.doc.for_so, function() {
		var qmtable= frappe.model.get_doc("Sales Order", frm.doc.for_so)
		$.each(qmtable.items, function(index, row){
			d = frm.add_child("items");
			d.item_code= row.item_code;
			d.item_name= row.item_name;
			d.qty = row.qty;
			d.warehouse= row.warehouse;
			d.stock_uom = row.stock_uom;
			d.uom= row.stock_uom;
			d.conversion_factor= 1;
			d.description = row.description;
		cur_frm.refresh_field("items");
		})
	});
});


//Example: Run function same as Ex2 on button click event.
frappe.ui.form.on("Sales Invoice", "get_transport_details", function(frm) {
	$.each(frm.doc.items, function(n, m){
		if (m.delivery_note){ 
			frappe.model.with_doc("Delivery Note", m.delivery_note, function() {
				var qmtable= frappe.model.get_doc("Delivery Note", m.delivery_note)
				$.each(qmtable.transport, function(index, row){
					d = frm.add_child("transport");
					d.truck_no = row.truck_no;
					d.transporter = row.transporter;
					d.driver = row.driver;
					d.contact_no = row.contact_no;
					d.container_no = row.container_no;
					d.truck_qty = row.truck_qty;			
				cur_frm.refresh_field("transport");
				})
			});
		}
	});
});

Example 4: Run Serially
function get_qty(frm) {
	frappe.model.with_doc("Outward Sample", frm.doc.sample_no, function() {
		frappe.run_serially([
			() => {
				console.log("Function withdoc called")
				let os_doc = frappe.model.get_doc("Outward Sample", frm.doc.sample_no)
				$.each(os_doc.details, function(index, row){
					console.log("looping")
					let d = frm.add_child("items");
					d.item_name = row.item_name;
					d.source_warehouse = frm.doc.default_source_warehouse;
					d.quantity = flt(flt(frm.doc.target_qty * row.quantity) / os_doc.total_qty);
					d.required_quantity = flt(flt(frm.doc.target_qty * row.quantity) / os_doc.total_qty);
				})
			},
			() => {
				frm.refresh_fields("items");
			},
		])
	});
}
`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to fetch all rows from a child table using a link field in Frappe client script?"
        description="This snippet demonstrates fetching linked DocType child table rows and dynamically adding them to another child table in the current form, useful for Frappe form customizations."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom">
        <h2>Introduction</h2>
        <p>
          This code snippet illustrates how to dynamically fetch rows from a linked DocType child table field within a Frappe form client script and populate them into another child table. Using Frappe's 
          <code>frappe.model.with_doc</code> and <code>frappe.model.get_doc</code> APIs, it loads the data asynchronously, loops through child table entries of the linked document, and adds new rows to the current form’s child table. 
          This pattern is particularly useful when you want to automatically sync or copy related child table data based on a link field selection, reducing manual data entry and improving user experience in customized ERPNext/Frappe apps.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Fetches all rows of a child table from a linked DocType by using the link field's value, then adds corresponding rows to the current form's child table dynamically."
        whenToUse="Use this snippet when you need to auto-populate child table data from a linked document's child table, such as copying machine parts, order items, transport details, etc., triggered by user interaction like field change or button click."
        prerequisites={[
          "Frappe Framework client scripting basics",
          "Familiarity with DocType and child tables",
          "Understanding of link fields in forms",
          "Basic JavaScript and jQuery knowledge"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.model.with_doc",
            description: "Asynchronously loads a linked document by DocType and name (primary key) for safe, reactive client-side access.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/client-scripting#frappe-model"
          },
          {
            title: "Child Tables in Frappe",
            description: "Child tables are list-type fields in DocTypes representing one-to-many relations; this snippet populates such tables dynamically from linked documents.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/models/child-tables"
          },
          {
            title: "Link Field",
            description: "A field type that links one document to another DocType, used here to fetch data from related records.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/link-field"
          },
          {
            title: "Client Script Events",
            description: "The code hooks into link field events to trigger custom logic, enabling interactive form behavior.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/client-scripting#events"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Listen to Link Field Event",
            explanation: "Set up a Frappe client script event handler on the link field (e.g., \"Trigger\") to detect when the field value changes.",
            code: `frappe.ui.form.on("DocTypeB", "Trigger", function(frm) {
  // logic here
});`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Load the Linked Document",
            explanation: "Use frappe.model.with_doc to asynchronously load the linked document based on the link field value (e.g., \"DocTypeA\" with the triggered name), ensuring data is available before accessing.",
            code: `frappe.model.with_doc("DocTypeA", frm.doc.trigger, function() {
  // next steps
});`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Access and Iterate over Child Table Rows",
            explanation: "Retrieve the loaded document with frappe.model.get_doc and loop through its child table entries using $.each to access each row's fields.",
            code: `var qmtable = frappe.model.get_doc("DocTypeA", frm.doc.Trigger);
$.each(qmtable.ChildTableA, function(index, row){
  // process row
});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Add New Rows to Current Child Table",
            explanation: "For each row in the linked child table, add a new child row into the current form's child table with frm.add_child and copy field values accordingly.",
            code: `var d = frm.add_child("ChildTableB");
d.field1 = row.fielda;
d.field2 = row.fieldb;`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Refresh the Form Field",
            explanation: "After adding child rows, refresh the field using cur_frm.refresh_field to update the UI and show the newly added rows.",
            code: `cur_frm.refresh_field("ChildTableB");`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Child table rows not appearing after script runs.",
            solution: "Ensure you call cur_frm.refresh_field on the child table field after adding rows to force UI update."
          },
          {
            problem: "Linked document data not loading or undefined.",
            solution: "Verify the link field value is correct and exists. Use frappe.model.with_doc to load asynchronously and access data only within its callback."
          },
          {
            problem: "Script runs but no data copied to child table.",
            solution: "Check field names carefully for case sensitivity and correct spelling between source and target fields. Debug inside the $.each loop with console logs."
          },
          {
            problem: "Performance issues when loading large child tables.",
            solution: "Consider optimizing by limiting number of rows fetched or using server scripts to pre-process data if feasible."
          }
        ]}
      />
    </main>
  );
}
