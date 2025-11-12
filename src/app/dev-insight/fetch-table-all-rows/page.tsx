"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function FetchTableAllRowsPage() {
  const snippetName = "Fetch Table All Rows";
  const language = "Javascript";
  const category = "Form Scripting";

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

  return (
    <main>
      <CodeSnippetHero
        title="How to fetch and copy all rows from a linked child table in a Frappe form?"
        description="This snippet demonstrates fetching all rows from a linked child table on link field events or button clicks, enabling developers to dynamically populate tables based on linked documents in Frappe ERPNext."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet addresses common needs in Frappe (and ERPNext) forms when you want to fetch all rows
          of a child table from a related document and copy them into another child table on the current form.
          This is useful for scenarios such as replicating parts or items from linked documents without manual
          re-entry.
          The snippet showcases practical uses of the <code className="font-mono">frappe.model.with_doc</code>,
          <code className="font-mono">frappe.model.get_doc</code>, and client-side form event handlers.
          Multiple examples highlight different trigger events including link field change, button clicks,
          and even serial execution of asynchronous operations to preserve order.
          Overall, it enables developers to smoothly automate data propagation within Frappe forms,
          improving user efficiency and accuracy.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Fetches all rows from a child table of a linked document and programmatically copies those rows into another child table on the current form using Frappe client scripting."
        whenToUse="Use this snippet when you need to automate copying child table data from a linked document after a field value is set or on manual triggers like button clicks to avoid manual re-entry and maintain data consistency."
        prerequisites={["Frappe/ERPNext environment","Knowledge of client scripting using JavaScript","Familiarity with Frappe models and child tables"]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.model.with_doc",
            description: "Loads a linked document asynchronously to ensure data availability before further processing.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/model#frappe.model.with_doc"
          },
          {
            title: "frappe.model.get_doc",
            description: "Retrieves the loaded document data (including child tables) for client-side manipulation.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/model#frappe.model.get_doc"
          },
          {
            title: "frm.add_child",
            description: "Adds a new child table row on the current form dynamically.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#frm.add_child"
          },
          {
            title: "cur_frm.refresh_field",
            description: "Refreshes the UI for changes made programmatically to child tables or fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#cur_frm.refresh_field"
          },
          {
            title: "frappe.run_serially",
            description: "Executes functions serially in sequence, useful for chaining asynchronous operations.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/runner#frappe.run_serially"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Triggering the fetch",
            explanation: "Use a form event such as a link field’s change event or a button click to trigger fetching the linked document.",
            code: `frappe.ui.form.on(\"DocTypeB\", \"Trigger\", function(frm) { /* fetch doc inside */ })`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Loading the linked document",
            explanation: "Call frappe.model.with_doc to fetch the linked document asynchronously before accessing its data.",
            code: `frappe.model.with_doc(\"DocTypeA\", frm.doc.trigger, function() { /* logic here */ })`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Retrieving child table rows",
            explanation: "Use frappe.model.get_doc to get the loaded document and iterate over its child table rows.",
            code: `var qmtable= frappe.model.get_doc(\"DocTypeA\", frm.doc.Trigger); $.each(qmtable.ChildTableA, function(index, row){ /* copy rows */ })`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Adding rows to target child table",
            explanation: "Use frm.add_child to append a new row for each source child table row and copy relevant fields.",
            code: `d = frm.add_child(\"ChildTableB\"); d.field1 = row.fielda; d.field2 = row.fieldb;`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Refreshing the form",
            explanation: "Call cur_frm.refresh_field with the target child table name to update the UI and show the new rows.",
            code: `cur_frm.refresh_field(\"ChildTableB\");`,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Linked document does not load and child rows are empty.",
            solution: "Ensure the linked document name in frm.doc.trigger is valid and frappe.model.with_doc is used correctly before accessing data."
          },
          {
            problem: "New rows not appearing in child table UI.",
            solution: "Use cur_frm.refresh_field with the exact child table fieldname after adding rows."
          },
          {
            problem: "Fields in new child rows stay empty.",
            solution: "Confirm the correct fieldnames are assigned and the source child table rows contain values."
          },
          {
            problem: "Operations occur out of order with async data fetching.",
            solution: "Use frappe.run_serially for sequential async calls to maintain order."
          }
        ]}
      />
    </main>
  );
}
