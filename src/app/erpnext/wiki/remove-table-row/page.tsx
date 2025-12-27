import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const RemoveChildTableRowPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Conditionally Remove Rows from a Child Table in Frappe"
        description="Learn to write a Frappe Client Script to programmatically remove rows from a child table based on field values using grid.grid_rows[i].remove()."
        snippetName="Remove table row"
        language="Javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "In Frappe and ERPNext, managing child table data dynamically is a common requirement for creating interactive and user-friendly forms. This code snippet demonstrates a powerful technique for removing rows from a child table based on specific conditions, triggered by a custom button.",
          "This client-side script is particularly useful for cleaning up data, filtering entries based on a parent document's state, or allowing users to perform bulk actions on child table rows without needing to manually delete them one by one."
        ]}
      />
      <CodeBlock
        code={`// On click event of remove_btn

frappe.ui.form.on("Quotation", "remove_btn", function(frm) {
		var tbl = frm.doc.items || [];
		var i = tbl.length;
		while (i--){
			if(frm.doc.select_item){		
				if(tbl[i].main_item == frm.doc.select_item){
					frm.get_field("items").grid.grid_rows[i].remove();
				}	
			}
			else {
				if(tbl[i].main_item){
					frm.get_field("items").grid.grid_rows[i].remove();
				}
			}
		}
		cur_frm.refresh();

});`}
        language="javascript"
        fileName="quotation_client_script.js"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This script iterates through all rows in the 'items' child table and removes those that match a specific condition related to a value in the parent DocType."
        whenToUse="Use this script when you need to provide users with a way to perform a bulk removal of child table rows based on criteria defined in the main form, such as filtering by a selected item category."
        prerequisites={[
          "A parent DocType (e.g., 'Quotation') with a child table (e.g., 'items').",
          "A custom button with fieldname 'remove_btn' on the parent DocType.",
          "A field in the parent form (e.g., 'select_item') to use as a filter condition."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "A client-side API used to attach event handlers to form events. In this case, it listens for a click on the field (button) named 'remove_btn' on the 'Quotation' form.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#frappeui-form-on"
          },
          {
            title: "Child Table Grid API",
            description: "The expression 'frm.get_field(\"items\").grid.grid_rows' accesses the live grid rows of the child table. The .remove() method on a specific grid row object deletes it from both the UI and the form's data.",
            relatedLink: "https://frappeframework.com/docs/user/en/guides/app-development/client-scripting/grid-operations"
          },
          {
            title: "Iterating Backwards with while(i--)",
            description: "When removing items from an array or collection you are iterating over, it's crucial to loop backward. This prevents issues with shifting indices that would cause the loop to skip items if you were iterating forward.",
            relatedLink: "https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop"
          },
          {
            title: "cur_frm.refresh()",
            description: "After modifying the grid, calling cur_frm.refresh() is essential. It redraws the form, including the child table, ensuring that UI calculations, totals, and layout are updated correctly.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#frm-refresh"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Add a Custom Button and Filter Field",
            explanation: "In your ERPNext instance, go to 'Customize Form' and select the 'Quotation' DocType. Add a new field of type 'Button' and set its 'Fieldname' to 'remove_btn'. Add another field (e.g., a Link field named 'select_item') that will be used for filtering.",
            code: `// No code needed for this step. Use the Form Customization UI.`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Create a New Client Script",
            explanation: "Navigate to 'Client Script' from the Awesome Bar. Click 'New', select 'Quotation' as the DocType, and save the script.",
            code: `// No code needed for this step. Use the Client Script creation UI.`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Implement the Row Removal Logic",
            explanation: "Copy and paste the provided JavaScript code into the script editor. This code binds the row removal logic to the click event of your new button.",
            code: `frappe.ui.form.on("Quotation", "remove_btn", function(frm) {
    var tbl = frm.doc.items || [];
    var i = tbl.length;
    while (i--){
        if(frm.doc.select_item){		
            if(tbl[i].main_item == frm.doc.select_item){
                frm.get_field("items").grid.grid_rows[i].remove();
            }	
        }
        else {
            // If no item is selected, remove all rows with a main_item
            if(tbl[i].main_item){
                frm.get_field("items").grid.grid_rows[i].remove();
            }
        }
    }
    cur_frm.refresh();
});`,
            language: "javascript"
          },
          {
            stepNumber: 4,
            title: "Test the Functionality",
            explanation: "Open an existing Quotation or create a new one. Add several items to the 'items' table. Select a specific item in the 'select_item' field and click your 'Remove' button. Only the matching rows should be deleted from the child table.",
            code: `// No code for this step. Test the functionality within a Quotation form.`,
            language: "bash"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The button does nothing when clicked.",
            solution: "Ensure the fieldname in your frappe.ui.form.on call ('remove_btn') exactly matches the fieldname of the button in your DocType. Check the browser's developer console (F12) for any JavaScript errors."
          },
          {
            problem: "Script throws 'Cannot read properties of undefined (reading grid)'.",
            solution: "This error means frm.get_field('items') is not returning a valid field object. Verify that 'items' is the correct fieldname for your child table in the Quotation DocType."
          },
          {
            problem: "Only some of the matching rows are removed.",
            solution: "This can happen if you iterate through the child table rows with a standard forward loop while removing items. The provided script uses a backward 'while (i--)' loop to prevent this exact issue. Ensure your loop iterates backward."
          }
        ]}
      />
    </main>
  );
};

export default RemoveChildTableRowPage;
