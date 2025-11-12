"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function StatusColourCoding() {
  const code = `//************************** Colour Indicator List View ***************************//
frappe.listview_settings['Sauda Details'] = {  // 'Sauda Details' is a DocType
	add_fields: ["status"],   // 'status' is a field name of type 'select' of the above DocType
	get_indicator: function (doc) {
		return [__(doc.status), {
			// when 'Open' is selected, it will show the color 'Red' in ListView and likewise
			"Open": "red",
			"Part-Settled": "orange",
			"Settled": "blue",
			"Delivery": "green"
		}[doc.status], "status,=," + doc.status];
	}
};

frappe.listview_settings['Job Applicant'] = {
	add_fields: ["status"],
	get_indicator: function (doc) {
		return [__(doc.status), {
			"Open": "red",
			"Replied": "purple",
			"Scanned": "yellow",
			"Interviewed": "blue",
			"Shortlisted": "lightblue",
			"Rejected": "black",
			"Hold": "orange",      
			"Selected": "green"
		}[doc.status], "status,=," + doc.status];
	}
};


frappe.listview_settings['Customer'] = {
	add_fields: ["customer_name", "territory", "customer_group", "customer_type", 'status'],
	get_indicator: function(doc) {
		color = {
			'Open': 'red',
			'Active': 'green',
			'Dormant': 'darkgrey'
		}
		return [__(doc.status), color[doc.status], "status,=," + doc.status];
	}

};


 frappe.listview_settings['Material Request'] = {
 	add_fields: ["material_request_type", "status", "per_ordered"],
 	get_indicator: function(doc) {
 		if(doc.status=="Stopped") {
 			return [__("Stopped"), "red", "status,=,Stopped"];
		} else if(doc.docstatus==1 && flt(doc.per_ordered, 2) < 100) {
 			return [__("Pendingggg"), "orange", "per_ordered,<,100"];
 		} else if(doc.docstatus==1 && flt(doc.per_ordered, 2) == 100) {
 			if (doc.material_request_type == "Purchase") {
 				return [__("Ordered"), "green", "per_ordered,=,100"];
 			} else if (doc.material_request_type == "Material Transfer") {
 				return [__("Transfered"), "green", "per_ordered,=,100"];
 			} else if (doc.material_request_type == "Material Issue") {
 				return [__("Issued"), "green", "per_ordered,=,100"];
 			}
 		}
 	}
 };


// ODR Rake
frappe.listview_settings['ODR Rake'] = { 
	add_fields: ["status"],    
	get_indicator: function (doc) {
		return [__(doc.status), {
			"Pending for Loading": "orange",
			"Forfeited": "red",
			"Adjusted": "blue",
			"Pending for Refund": "yellow",
			"Refunded":"green"
		}[doc.status], "status,=," + doc.status];
	}
};
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to implement status colour coding in Frappe ListView?"
        description="This snippet demonstrates how to visually highlight different statuses in Frappe ListView using color coding, enhancing readability and user experience in ERPNext and other Frappe-based systems."
        snippetName="Status Colour Coding"
        language="JavaScript"
        category="UI Enhancements"
        accentColor="orange"
      />

      <section className="container-custom px-4 mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-7 text-gray-700">
          This code snippet demonstrates how to add color-coded status indicators in Frappe framework's ListView. By
          customizing the <code>frappe.listview_settings</code> for different DocTypes, each status can be visually
          distinguished by applying specific colors. This helps users quickly identify the status of records without
          reading text, improving user interface clarity and productivity in inventory, sales, HR, or other business
          processes managed through Frappe or ERPNext.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Adds color-coded labels to the status field in different DocType list views by defining get_indicator functions, improving UI clarity."
        whenToUse="Use when you want to visually distinguish record statuses in Frappe ListView for faster recognition and better UX."
        prerequisites={[
          "Basic knowledge of Frappe framework customization",
          "Understanding of JavaScript and ListView settings in Frappe",
          "Access to Frappe/ERPNext environment to deploy the code"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.listview_settings",
            description:
              "An object to customize ListView behavior for specific DocTypes in Frappe, including adding fields and defining color indicators.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview"
          },
          {
            title: "get_indicator()",
            description: "A function that returns an array describing label, color and filters to display colorful status badges in ListView.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview#get_indicator"
          },
          {
            title: "add_fields",
            description: "Defines which fields to fetch from the server so that they can be used to decide the color indicator.",
            relatedLink: null
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify DocType and Status Field",
            explanation:
              "Determine the DocType for which you want to add colored status indicators and identify the status field name (usually a select field).",
            code: null,
            language: null
          },
          {
            stepNumber: 2,
            title: "Extend frappe.listview_settings",
            explanation:
              "Add a new entry or extend existing listview_settings for the DocType with add_fields including 'status' and define the get_indicator function.",
            code: `frappe.listview_settings['Your DocType'] = {
  add_fields: ['status'],
  get_indicator: function(doc) { ... }
};`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Define Status Colors",
            explanation:
              "Inside get_indicator, return an array consisting of the translated status, a color string matching the status, and a filter string.",
            code: `return [__(doc.status), {
  'Open': 'red',
  'Closed': 'green'
}[doc.status], 'status,=,' + doc.status];`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Test Changes",
            explanation:
              "Reload the ListView and verify that statuses display with the assigned colors. Adjust mappings or add new statuses as needed.",
            code: null,
            language: null
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Colors not showing up or status labels missing",
            solution:
              "Ensure 'status' is included in add_fields so that it is fetched from the server; also confirm the status values exactly match keys in get_indicator mapping."
          },
          {
            problem: "Custom statuses are not colored",
            solution: "Add your custom status and its corresponding color in the get_indicator mapping object explicitly."
          },
          {
            problem: "ListView not refreshing with new colors",
            solution: "Clear browser cache and reload the Frappe app or restart the server if needed."
          }
        ]}
      />
    </main>
  );
}
