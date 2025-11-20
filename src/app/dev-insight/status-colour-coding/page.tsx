import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `//************************** Colour Indicator List View ***************************//
frappe.listview_settings['Sauda Details'] = {	// 'Sauda Details' is a DocType
	add_fields: ["status"],		// 'status' is a field name of type 'select' of the above DocType
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
};`;

export default function StatusColourCoding() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Use Status Colour Coding in Frappe ListView for Better Visual Indicators?"
        description="Implement color-coded status indicators for various DocTypes in Frappe ListView, enhancing clarity by visually distinguishing item statuses. This uses frappe.listview_settings with get_indicator customization."
        snippetName="Status Colour Coding"
        language="Frappe"
        category="Frappe Frontend"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> In large Frappe applications, quickly identifying the status of records in ListView can be difficult when statuses are only text-based.
          This reduces efficiency and can cause confusion.
          <br />
          <strong>Solution:</strong> The provided code customizes the ListView of multiple DocTypes by color-coding status values.
          Using the <code>frappe.listview_settings</code> object, the <code>get_indicator</code> function returns a tuple with a label, a color name, and filter string, so statuses appear with intuitive colors in ListView rows.
          This implementation helps users visually scan and understand document statuses at a glance.
          <br />
          <em>Note:</em> The snippet covers multiple standard and custom DocTypes including 'Sauda Details', 'Job Applicant', 'Customer', 'Material Request' (with complex conditions), and 'ODR Rake'.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Defines colour-coded status indicators for Frappe ListViews of various DocTypes using frappe.listview_settings and get_indicator function to visually distinguish different statuses."
        whenToUse="Use when you want to enhance UX in Frappe/ERPNext by showing color-coded status badges in ListView for better status recognition and faster navigation."
        prerequisites={["Basic understanding of Frappe Framework DocTypes and client-side JavaScript customization."]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.listview_settings",
            description: "Object where you define ListView customization code per DocType, including how records are displayed and filtered.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview"
          },
          {
            title: "get_indicator Function",
            description: "Function used to define color and label indicators for ListView rows based on document fields.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/listview#listview-indicator"
          },
          {
            title: "DocType",
            description: "Key document type concept in Frappe which represents a database table and UI form.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctype"
          },
          {
            title: "Status Field",
            description: "A common select-type field representing the state of a document to be used in client-side scripts.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/doctype"
          },
          {
            title: "Client Script Customization",
            description: "Modifying UI behavior on the client side for enhanced user experience using JavaScript.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/client-scripts"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Register ListView Settings for a DocType",
            explanation: "Start by attaching a custom settings object to frappe.listview_settings for the target DocType name.",
            code: "frappe.listview_settings['Sauda Details'] = { add_fields: ['status'], get_indicator: function(doc) { ... } };",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Specify Fields to Add for Performance",
            explanation: "Use add_fields property to include any additional fields you need to determine status colors (e.g., 'status').",
            code: "add_fields: ['status']",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Define get_indicator Function",
            explanation: "Implement get_indicator(doc) to return an array with label, color string, and filter string based on the doc's status.",
            code: "get_indicator: function(doc) { return [__(doc.status), { 'Open': 'red', 'Part-Settled': 'orange' }[doc.status], 'status,=,' + doc.status]; }",
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Handle Complex Status Logic",
            explanation: "For more complex DocTypes like 'Material Request', customize get_indicator with conditional checks on fields and docstatus.",
            code: "get_indicator: function(doc) { if(doc.status=='Stopped') { return [__('Stopped'), 'red', 'status,=,Stopped']; } else if(...) { ... } }",
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Use Translations for Status Labels",
            explanation: "Wrap status labels in __() to ensure they are translatable across multi-language deployments.",
            code: "return [__(doc.status), color, 'status,=,' + doc.status];",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Status colors don’t appear in ListView after applying customization.",
            solution: "Check that your script is correctly named, loaded, and the DocType names in frappe.listview_settings match exactly. Ensure add_fields includes the status field used in get_indicator."
          },
          {
            problem: "Wrong colors appear for some statuses or no color shown.",
            solution: "Verify the keys in your color mapping object match all used status values exactly, including casing and spacing. Also check return array format complies with [label, color, filter]."
          },
          {
            problem: "Translation function __(...) not working as expected.",
            solution: "Confirm __ is imported or globally available in your context. For client scripts, it is usually globally present in Frappe frontend environment."
          }
        ]}
      />
    </main>
  );
}
