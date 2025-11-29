import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ListviewStatusColourCoding() {
  const snippetName = "Status Colour Coding";
  const code = `//************************** Colour Indicator List View ***************************//
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

  return (
    <>
      <CodeSnippetHero
        title="How to Implement Status Colour Coding in ERPNext List Views for Better Visual Status Tracking?"
        description="Customize ERPNext List Views using Frappe listview_settings to add status color indicators to DocType records for intuitive visual management."
        snippetName={snippetName}
        language="Javascript"
        category="Frappe Frontend"
        accentColor="blue"
      />

      <section className="container-custom">
        <h2>Introduction</h2>
        <p>
          In ERPNext development, managing and visually distinguishing the status of records in List Views is crucial for quick decision-making. This snippet demonstrates how to
          leverage <code>frappe.listview_settings</code> to add colored status indicators to various DocTypes such as 'Sauda Details', 'Job Applicant', 'Customer', 'Material Request', and 'ODR Rake'. This approach enhances UX by mapping status field values to specific colors,
          allowing users to identify record states like 'Open', 'Closed', 'Rejected', or 'Pending' at a glance.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="javascript"
        fileName="frappe/listview_settings/status_colour_coding.js"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Defines customized list view status color indicators to visually represent record states by mapping DOCType 'status' field values to colors."
        whenToUse="Use in client scripts or custom apps when you want to visually enhance List Views by color-coding status fields for faster status recognition."
        prerequisites={[
          "Basic knowledge of Frappe Framework and ERPNext DocTypes",
          "Understanding of frappe.listview_settings API",
          "Access to add client-side custom scripts or app customizations"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.listview_settings",
            description: "API to customize list views for DocTypes, allowing configuration of fields, filters, and indicators.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/listview"
          },
          {
            title: "get_indicator method",
            description: "Function returning an array with label, color, and filter string to visually highlight list entries based on status.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/listview#customizing-listview-indicators"
          },
          {
            title: "DocType status field",
            description: "Select field in ERPNext DocTypes representing record state which can be mapped to colors for visual feedback.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/doctype"
          },
          {
            title: "Localization with __()",
            description: "Function to support translation of status labels inside list view indicators, ensuring i18n compliance.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/localization"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the DocType and status field",
            explanation: "Select the DocType you want to customize the List View for and ensure it has a 'status' select field.",
            code: `frappe.listview_settings['Your DocType'] = { add_fields: ['status'] }`,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Define the get_indicator function",
            explanation: "Create a get_indicator function that returns an array containing the status label, its color, and a filter string.",
            code: `get_indicator: function (doc) {
  return [__(doc.status), {
    'Open': 'red',
    'Closed': 'green'
  }[doc.status], 'status,=,' + doc.status];
}`,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Map statuses to colors",
            explanation: "Customize the color codes for each relevant status value appropriate to your business logic.",
            code: `{
  'Open': 'red',
  'In Process': 'orange',
  'Completed': 'green'
}`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Deploy and verify in ERPNext",
            explanation: "After saving the script or customization, verify that the List View shows the colored indicators alongside the status labels.",
            code: "// Refresh list view and check colored status labels",
            language: ""
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Status colors not appearing in List View",
            solution: "Ensure that 'status' is included in add_fields. Without it, the status value won't be fetched for indicator logic."
          },
          {
            problem: "Colors are incorrect or missing",
            solution: "Check that the status string keys exactly match your DocType's status field values, including capitalization."
          },
          {
            problem: "List view is not updating after script changes",
            solution: "Clear browser cache or reload with Ctrl+Shift+R. Also, verify app/custom script deployment correctness."
          },
          {
            problem: "Translation function __(doc.status) shows keys instead of translated labels",
            solution: "Ensure that translation strings for your statuses exist in the ERPNext translation dictionaries or disable localization temporarily."
          }
        ]}
      />
    </>
  );
}
