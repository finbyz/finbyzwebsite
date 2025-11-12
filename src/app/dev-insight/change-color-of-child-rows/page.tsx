"use client";
import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ChangeColorOfChildRows() {
  const snippetName = "Change Color of Child Rows";
  const language = "Javascript";
  const category = "UI Customization";

  const codeSnippet = `// Child table colour change
frappe.ui.form.on("Your Child DocType", "amount", function(frm, cdt, cdn){
   var child = locals[cdt][cdn];
   cur_frm.doc.your_gridfield.forEach(function(child){
       var sel = format('div[data-fieldname=\"your_gridfield\"] > div.grid-row[data-idx=\"{0}\"]', [child.idx]);
       if (child.amount > 1000){
           $(sel).css('background-color', "#ff5858");
       } else {
           $(sel).css('background-color', 'transparent');
       }
   });
});


frappe.ui.form.on("Quotation", "refresh", function(frm) {
$.each(frm.doc.items, function(j,row) 
{
	if(row.main_item)
	 {
		$("div[data-fieldname='items']").find(format('div.grid-row[data-idx=\"{0}\"]', [row.idx])).css({'background-color': '#eedcef'});
		$("div[data-fieldname='items']").find(format('div.grid-row[data-idx=\"{0}\"]', [row.idx])).find('.grid-static-col').css({'background-color': '#eedcef'});
	 } 
	 else {
		$("div[data-fieldname='items']").find(format('div.grid-row[data-idx=\"{0}\"]', [row.idx])).css({'background-color': 'transparent'});
		$("div[data-fieldname='items']").find(format('div.grid-row[data-idx=\"{0}\"]', [row.idx])).find('.grid-static-col').css({'background-color': 'transparent'});
	 }
})
});


//Example2
$.each(cur_frm.doc.shipping_list, function(j,item1) 
{
	if(d.product_name=="PV/One Crease" || d.product_name=="PV/One Auto ID" || d.product_name=="PV/One LBS")
		{
			if(item.item_code==item1.item_code)
			{
				item1.one1=1;
				$("div[data-fieldname=shipping_list]").find(format('div.grid-row[data-idx=\"{0}\"]', [item1.idx])).css({'background-color': '#FF0000'});
				$("div[data-fieldname=shipping_list]").find(format('div.grid-row[data-idx=\"{0}\"]', [item1.idx])).find('.grid-static-col').css({'background-color': '#FF0000'});
			}
		}
});
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to dynamically change the background color of child rows in Frappe forms?"
        description="This snippet demonstrates how to customize child table row colors based on field values to visually highlight important data in Frappe ERPNext forms."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />
      <section className="container-custom px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed text-gray-800">
          This code snippet provides techniques to dynamically change the background color of rows in child tables within Frappe forms based on certain conditions. By modifying the row colors, you can visually emphasize specific records such as high amounts, main items, or particular product names. This improves data readability and user experience when working with grids in Frappe ERPNext applications.
        </p>
      </section>
      <CodeOverview
        whatItDoes="Dynamically changes the background color of child rows based on field values using jQuery selectors and Frappe form triggers."
        whenToUse="Use this snippet when you want to visually differentiate child table rows, highlight key data, or add color-coded status indicators in Frappe forms."
        prerequisites={["Basic knowledge of Frappe form scripting", "Familiarity with jQuery and JavaScript", "Understanding of child table structures in Frappe"]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "Frappe’s client-side event system to bind functions to form events and triggers.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form"
          },
          {
            title: "jQuery selectors",
            description: "Used to find and manipulate DOM elements, here to select child table rows dynamically.",
            relatedLink: "https://api.jquery.com/category/selectors/"
          },
          {
            title: "Grid Rows and data-idx",
            description: "Each row in a Frappe child table has a data-idx attribute for identification.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#child-tables"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Listen to Child Table Field Changes",
            explanation: "Attach an event handler to the child Doctype’s field (e.g. 'amount') that triggers whenever that field is modified.",
            code: `frappe.ui.form.on("Your Child DocType", "amount", function(frm, cdt, cdn) { /* ... */ });`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Iterate Over Child Table Rows",
            explanation: "Loop through all child table rows and determine which rows meet the condition to change their background color.",
            code: `cur_frm.doc.your_gridfield.forEach(function(child) { /* ... */ });`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Modify Row Background Color Using jQuery",
            explanation: "Construct a selector using the row’s data-idx and update the CSS background-color property accordingly.",
            code: `$(sel).css('background-color', '#ff5858');`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Apply Coloring on Form Refresh",
            explanation: "Add a refresh event handler that applies colors based on conditions after the form loads or refreshes.",
            code: `frappe.ui.form.on("Quotation", "refresh", function(frm) { /* ... */ });`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Extend Logic for Other Child Tables",
            explanation: "Repeat similar checks for other child tables or fields as needed, applying different colors.",
            code: `$.each(cur_frm.doc.shipping_list, function(j,item1) { /* ... */ });`,
            language: "javascript"
          }
        ]}
      />
      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />
      <Troubleshooting
        items={[
          {
            problem: "Row colors do not update when values change.",
            solution: "Ensure you bind to the correct child Doctype and field events, and verify selectors match the form structure. Use console logs to debug event triggers."
          },
          {
            problem: "jQuery selectors do not find the expected grid rows.",
            solution: "Check that data-fieldname and data-idx selectors are correct and that the grid rows have been rendered before running the code. Use form refresh events for timing."
          },
          {
            problem: "Background color changes only for some rows inconsistently.",
            solution: "Make sure all child table rows have unique and correct data-idx attributes, and that conditions correctly match the intended rows."
          }
        ]}
      />
    </main>
  );
}
