import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const UpdateTableOnButtonClickPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Populate a Child Table in ERPNext Using a Custom Button and frappe.call?"
        description="Learn to create a custom button in an ERPNext DocType that triggers a Client Script to fetch data via frappe.call and dynamically populate a child table."
        snippetName="Update Table on Button Click"
        language="javascript"
        category="ERPNext Customization"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In ERPNext, business logic often requires fetching and displaying related data on demand without storing it permanently on the document. This Frappe Framework Client Script demonstrates a powerful pattern: using a custom button to trigger an API call, retrieve data from the server, and then dynamically populate a child table.",
          "This approach is highly efficient for displaying contextual information, like previous purchase history for an item, directly on the Purchase Order form. It enhances user experience by providing necessary data precisely when it's needed, triggered by a simple button click."
        ]}
      />
      <CodeBlock
        code={snippet}
        language="javascript"
        referenceLink="http://erp.shivshaktitrader.in/desk#Form/Custom%20Script/Purchase%20Order-Client"
        referenceLinkText="Source ERPNext Instance"
        showLineNumbers={true}
      />
      <CodeOverview
        whatItDoes="This Client Script fetches purchase data from a custom API endpoint when a user clicks the 'get_purchases' button on the Purchase Order form. It then clears and populates the 'purchases' child table with the fetched data and updates summary values in the 'items' child table."
        whenToUse="Use this pattern when you need to load related data into a child table on demand. It's ideal for situations where you want to provide users with contextual information from external or aggregated sources without storing it directly on the document."
        prerequisites={[
          "A Custom Script created for the 'Purchase Order' DocType.",
          "A custom Button field named 'get_purchases' on the Purchase Order form.",
          "A server-side whitelisted Python method (e.g., `shivshakti.api.get_purchase`).",
          "Two child tables on the Purchase Order DocType: 'items' and 'purchases'."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "A client-side event handler in Frappe. It's used to bind a function to a specific DocType form event, such as a field change or, in this case, a button click. The syntax `on('DocType', 'fieldname', function(frm){...})` targets the specific event.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form_api#frappe.ui.form.on",
          },
          {
            title: "frappe.call",
            description: "The primary method for making asynchronous server calls from the client-side. It securely calls a whitelisted Python method, passes arguments, and handles the response in a callback function.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/rest_api#frappe.call",
          },
          {
            title: "frm.clear_table",
            description: "A Form API function that removes all rows from a specified child table. It's essential for ensuring the table is clean before populating it with new data from an API call.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form_api#frm.clear_table",
          },
          {
            title: "frm.add_child",
            description: "This function adds a new row to a specified child table. It returns a reference to the new row object, allowing you to set values for its fields programmatically.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form_api#frm.add_child",
          },
          {
            title: "frm.refresh_field",
            description: "Refreshes the UI of a specific field or table on the form. After programmatically adding rows to a child table, this command must be called to make the changes visible to the user.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form_api#frm.refresh_field",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create the Custom Button",
            explanation: "First, navigate to the 'Purchase Order' DocType and click 'Customize'. Add a new field. Set the 'Type' to 'Button' and the 'Fieldname' to `get_purchases`. This fieldname is what you will use in the Client Script to trigger the action.",
            code: `// No code needed for this step. This is done via the ERPNext UI.
// DocType: Purchase Order
// Customize Form > Add Field:
// Label: Get Purchases
// Type: Button
// Fieldname: get_purchases`,
            language: "text",
          },
          {
            stepNumber: 2,
            title: "Set Up the Client Script Event Handler",
            explanation: "Create a new Client Script for the 'Purchase Order' DocType. The `frappe.ui.form.on` function links your code to the button you just created. Any code inside this function will execute when the button is clicked.",
            code: `frappe.ui.form.on("Purchase Order", "get_purchases", function(frm) {
    // Your logic will go here
});`,
            language: "javascript",
          },
          {
            stepNumber: 3,
            title: "Implement the Server Call with frappe.call",
            explanation: "Inside the event handler, use `frappe.call` to communicate with the server. Specify the Python method to call in `method` and pass any required data from the form in the `args` object. The server's response will be handled in the `callback` function.",
            code: `frappe.call({
    method: "shivshakti.api.get_purchase", // Your whitelisted python method
    args: {
        item: frm.doc.items[0].item_code || "",
        broker_name: frm.doc.broker || "",
        supplier_name: frm.doc.supplier || "",
    },
    callback: function(r) {
        // Handle the response 'r' here
    }
});`,
            language: "javascript",
          },
          {
            stepNumber: 4,
            title: "Process the Response and Populate the Child Table",
            explanation: "In the callback, first check if `r.message` contains data. Before adding new rows, clear the target child table using `frm.clear_table('purchases')`. Then, loop through the response data (e.g., using `$.each`) and use `frm.add_child('purchases')` for each item to create a new row. Map the data from the response to the fields of the new child row.",
            code: `if(r.message) {
    frm.clear_table("purchases");
    $.each(r.message, function(i, d) {
        var c = frm.add_child("purchases");
        c.name1 = d.name;
        c.date = d.date;
        c.lorry_no = d.lorry_no;
        // ... map all other fields ...
    });
}`,
            language: "javascript",
          },
          {
            stepNumber: 5,
            title: "Update Form and Refresh UI",
            explanation: "After populating the table, you might need to perform calculations and update other fields on the form, as shown with the 'items' table. Finally, and most importantly, call `frm.refresh_field('your_table_fieldname')` for each child table you've modified. This redraws the tables on the screen to show the new data.",
            code: `// ... after the loop ...
var rate = final_amt / qty;
frm.doc.items[0].qty = qty;
frm.doc.items[0].rate = rate;

frm.refresh_field("items");
frm.refresh_field("purchases");`,
            language: "javascript",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The button does not do anything when clicked.",
            solution: "Verify that the 'Fieldname' of the button in 'Customize Form' exactly matches the fieldname used in the `frappe.ui.form.on` call. Also, check the browser's developer console (F12) for any JavaScript errors.",
          },
          {
            problem: "An error appears in the console: 'Method not found'.",
            solution: "This means the server-side Python method is not accessible. Ensure the method exists, is defined in the correct app, and is decorated with `@frappe.whitelist()` to allow it to be called from the client.",
          },
          {
            problem: "The code runs without errors, but the child table on the screen remains empty.",
            solution: "This is a classic symptom of forgetting to refresh the UI. Make sure you call `frm.refresh_field('your_child_table_fieldname')` after you have finished adding rows with `frm.add_child`.",
          },
          {
            problem: "The `args` passed to `frappe.call` are empty or incorrect.",
            solution: "Use `console.log(frm.doc)` before the `frappe.call` to inspect the form's data object. Ensure the fieldnames you are trying to access (e.g., `frm.doc.supplier`, `frm.doc.items`) are correct and contain data at the time the script runs.",
          },
        ]}
      />
    </main>
  );
};

export default UpdateTableOnButtonClickPage;

const snippet = `frappe.ui.form.on("Purchase Order", "get_purchases", function(frm) {
	var item_cd = "";
	if(frm.doc.items != 0){
		item_cd = frm.doc.items[0].item_code || "";
	}

	frappe.call({
		method: "shivshakti.api.get_purchase",
		args: {
			item: item_cd || "",
			broker_name: frm.doc.broker || "",
			supplier_name:frm.doc.supplier || "",
		       },
		callback: function(r) {
			if(r.message) {
					frm.clear_table("purchases");
					var qty = 0;
					var final_amt = 0;
					var item;
					$.each(r.message, function(i, d) {
					var c = frm.add_child("purchases");
					c.name1 = d.name;
					c.date = d.date;
					c.lorry_no = d.lorry_no;
					c.bags = d.bags;
					c.rate = d.rate;
					c.gross_weight = d.gross_wt;
					c.net_weight = d.net_wt;
					c.moisture = d.moisture;
					c.amount = d.amount;
					c.tax_amount = d.tax_amount;
					c.after_tax_amount = d.after_tax_amount;
					c.final_amount = d.after_commission_amount;
					qty += d.gross_wt;
					final_amt += d.after_commission_amount;
					item = d.items;
				});
			}
			
			var rate = final_amt / qty;
			frm.doc.items[0].qty = qty;
			frm.doc.items[0].rate = rate;
			frm.refresh_field("items");
			frm.refresh_field("purchases");
		}
	});
});`;