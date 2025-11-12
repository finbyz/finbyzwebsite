"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ChildTableRowColourChange() {
  const snippetName = "Child table row colour change";

  const code = `// Child table colour change
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

//Example2
$.each(cur_frm.doc.shipping_list, function(j,item1) 
{
	if(d.product_name=="PV/One Crease" || d.product_name=="PV/One Auto ID" || d.product_name=="PV/One LBS")
		{
			if(item.item_code==item1.item_code)
			{
				item1.one1=1;
				$("div[data-fieldname=shipping_list]").find(format('div.grid-row[data-idx=\"{0}\"]', [item1.idx])).css({'background-color': '#FF0000 !important'});
				$("div[data-fieldname=shipping_list]").find(format('div.grid-row[data-idx=\"{0}\"]', [item1.idx])).find('.grid-static-col').css({'background-color': '#FF0000 !important'});
			}
		}
});
`;

  return (
    <>
      <CodeSnippetHero
        title="How can I dynamically change the background color of child table rows in Frappe UI?"
        description="This snippet shows how to use JavaScript and jQuery to conditionally change the background color of child table rows based on field values, enhancing the user experience through effective colour coding."
        snippetName={snippetName}
        language="javascript"
        category="UI Enhancement"
        accentColor="orange"
      />

      <section className="container-custom px-4 mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          In Frappe Framework and ERPNext, child tables often display multiple rows of related data. Sometimes highlighting specific rows
          based on their values improves usability and readability. This code snippet demonstrates how to change the background colour
          of child table rows dynamically using JavaScript and jQuery within Frappe's client script environment. The technique helps
          users quickly identify important data points, such as amounts exceeding a threshold or particular product matches in lists.
          We leverage the form's event triggers and DOM manipulation to apply conditional styling, creating a visually enhanced and
          interactive table.
        </p>
      </section>

      <CodeOverview
        whatItDoes="This snippet dynamically changes the background colour of child table rows based on specified criteria, such as amount values or product matches."
        whenToUse="Use this solution when you want to visually distinguish child table rows in Frappe forms for better data clarity and user attention."
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "Registers event handlers on specific doctype/form events for client-side scripting.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form"
          },
          {
            title: "DOM Selection & Manipulation",
            description: "Uses jQuery selectors to find child table rows and changes their CSS dynamically.",
            relatedLink: "https://api.jquery.com/category/css/"
          },
          {
            title: "Conditional Rendering",
            description: "Checks data field values and applies styles based on custom thresholds or conditions.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#conditional_statements"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Attach Event Listener to Child DocType",
            explanation: "Use frappe.ui.form.on to listen for changes in the child doctype's amount field.",
            code: `frappe.ui.form.on("Your Child DocType", "amount", function(frm, cdt, cdn){ /* your code */ });`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Iterate Through Child Table Rows",
            explanation: "Loop through the child table rows using cur_frm.doc.{child_table_field}.forEach to access each row's data.",
            code: `cur_frm.doc.your_gridfield.forEach(function(child){ /* your code */ });`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Select the Corresponding DOM Element",
            explanation: "Build a jQuery selector targeting the specific grid row to apply styles dynamically.",
            code: `var sel = format('div[data-fieldname=\"your_gridfield\"] > div.grid-row[data-idx=\"{0}\"]', [child.idx]);`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Apply Conditional Background Colour",
            explanation: "Check if the amount exceeds a value and set the row background color accordingly.",
            code: `if (child.amount > 1000) { $(sel).css('background-color', '#ff5858'); } else { $(sel).css('background-color', 'transparent'); }`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Extended Example for Product Matching",
            explanation: "Demonstrates how to highlight rows matching particular product names in a shipping list.",
            code: `$.each(cur_frm.doc.shipping_list, function(j,item1) {
  if(d.product_name=="PV/One Crease" || d.product_name=="PV/One Auto ID" || d.product_name=="PV/One LBS") {
    if(item.item_code==item1.item_code) {
      item1.one1=1;
      $("div[data-fieldname=shipping_list]").find(format('div.grid-row[data-idx=\"{0}\"]', [item1.idx])).css({'background-color': '#FF0000 !important'});
      $("div[data-fieldname=shipping_list]").find(format('div.grid-row[data-idx=\"{0}\"]', [item1.idx])).find('.grid-static-col').css({'background-color': '#FF0000 !important'});
    }
  }
});`,
            language: "javascript"
          }
        ]}
      />

      <CodeBlock
        code={code}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink={undefined}
      />

      <Troubleshooting
        items={[
          {
            problem: "Row background colour does not update after changing values.",
            solution: "Ensure that you properly trigger the child doctype event and that your selectors match the grid row elements correctly. Refresh or redraw the form if necessary."
          },
          {
            problem: "Colour style does not apply consistently across all child rows.",
            solution: "Check for typos in field names and confirm that 'idx' values are accurate. Avoid conflicting CSS rules interfering with your inline styles."
          },
          {
            problem: "Using !important in jQuery css does not work as expected.",
            solution: "Apply styles directly on both the row container and internal elements separately, as demonstrated, or adjust CSS specificity in your custom app styles."
          }
        ]}
      />
    </>
  );
}
