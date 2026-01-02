import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const ConcatenateFieldsPage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Concatenate Fields to Set a Title in a Frappe DocType"
        description="Learn to write a Frappe Client Script to automatically merge multiple DocType fields into a single title field using the before_save event and frm.set_value API."
        snippetName="Merge Strings"
        language="Javascript"
        category="Frappe Client Script"
        accentColor="orange"
      />

      <CodeSnippetInstroduction
        paragraphs={[
          "In Frappe and ERPNext, it's common to require a document's title or primary identifier to be a combination of other fields. This enhances readability and makes records easier to find in list views. For instance, an 'ODR Rake' document might be best identified by a combination of its CNSr and 'From' location fields.",
          "This guide provides a client script that automates this process. It triggers just before the document is saved, concatenates the values from specified fields, and sets the result to a target field like 'title' or 'address_title'. The script also includes essential validation to handle cases where one of the source fields might be empty, preventing errors and ensuring clean data."
        ]}
      />

      <CodeBlock
        code={`// Client Script to concatenate two fields into a title field before saving
// Applied to a DocType, e.g., 'ODR Rake'

frappe.ui.form.on("ODR Rake", {
    before_save: function(frm) {
        // Get values from the source fields
        const str1 = frm.doc.cnsr;       // e.g., "Consignor Name"
        const separator = " - ";
        const str2 = frm.doc.from;       // e.g., "Origin Location"

        // Check if the first field has a value
        if (!str1) {
            return; // Exit if the primary field is empty
        }

        // If the second field is empty or undefined, just use the first field's value
        if (!str2) {
            frm.set_value("title", str1);
        } else {
            // If both fields have values, concatenate them
            const combined_title = str1.concat(separator, str2);
            frm.set_value("title", combined_title);
        }
    }
});`}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
        referenceLinkText="Learn more about Client Scripts in Frappe"
        referenceLink="https://frappeframework.com/docs/user/en/desk/scripting/client-script"
      />

      <CodeOverview
        whatItDoes="Dynamically concatenates string values from multiple fields in a Frappe DocType and sets the combined string to a target field before the document is saved."
        whenToUse="Use in the 'before_save' Client Script trigger to ensure the title is set or updated just before data is committed to the database. This is perfect for auto-generating naming series or descriptive titles."
        prerequisites={["A Frappe DocType with at least two source fields and one target field.", "Basic understanding of JavaScript and the Frappe Framework UI."]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "frappe.ui.form.on",
            description: "The core Frappe API for attaching event handlers to DocType forms. It allows you to trigger custom JavaScript code on events like 'onload', 'refresh', 'validate', and 'before_save'.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#frappeuiformon"
          },
          {
            title: "frm Object",
            description: "The form controller instance passed to event handlers. It's the gateway to interacting with the form, providing access to document data (frm.doc), metadata (frm.meta), and methods like frm.set_value() and frm.refresh_field().",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#form-api"
          },
          {
            title: "before_save Event",
            description: "A client-side trigger that fires just before the 'save' action is sent to the server. It is the ideal event for performing final data manipulations, calculations, or validations on the client side.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/form#form-events"
          },
          {
            title: "String.prototype.concat()",
            description: "A standard JavaScript method used to join two or more strings. It returns a new string containing the combined text of the strings provided as arguments.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify Your DocType and Fields",
            explanation: "First, open your Frappe desk and navigate to the DocType you want to modify. Identify the 'Fieldname' of the source fields you want to combine and the target field where the result will be stored. For this example, we use 'cnsr' and 'from' as source fields and 'title' as the target in the 'ODR Rake' DocType.",
            code: `// In 'ODR Rake' DocType:
// Source Field 1: cnsr (Data)
// Source Field 2: from (Data)
// Target Field: title (Data)`,
            language: "text"
          },
          {
            stepNumber: 2,
            title: "Create a New Client Script",
            explanation: "From the 'Awesome Bar', search for 'Client Script' and open the list. Click on 'Add Client Script' to create a new script record.",
            code: "",
            language: ""
          },
          {
            stepNumber: 3,
            title: "Attach Script to the DocType",
            explanation: "In the new Client Script form, select your DocType (e.g., 'ODR Rake') from the 'Select DocType' dropdown. This links the script to the form events of that DocType.",
            code: `// In the Client Script form:
// Select DocType: ODR Rake`,
            language: "text"
          },
          {
            stepNumber: 4,
            title: "Write the Concatenation Logic",
            explanation: "Paste the provided JavaScript code into the 'Script' text area. This code hooks into the 'before_save' event. It reads the values from 'cnsr' and 'from', checks if they exist, and then combines them.",
            code: `frappe.ui.form.on("ODR Rake", {
    before_save: function(frm) {
        const str1 = frm.doc.cnsr;
        const separator = " - ";
        const str2 = frm.doc.from;

        if (!str2) {
            frm.set_value("title", str1);
        } else {
            const combined_title = str1.concat(separator, str2);
            frm.set_value("title", combined_title);
        }
    }
});`,
            language: "javascript"
          },
          {
            stepNumber: 5,
            title: "Save and Test the Script",
            explanation: "Ensure the 'Enabled' checkbox is checked, then save the Client Script. Now, go to your DocType (e.g., create a new 'ODR Rake' document), fill in the source fields, and click 'Save'. The title field should automatically populate with the concatenated string.",
            code: "",
            language: ""
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The title field is not updating when I save.",
            solution: "First, clear your browser cache using 'Ctrl + Shift + R'. Check the browser's developer console (F12) for any JavaScript errors. Double-check that the field names in your script (e.g., 'cnsr', 'from', 'title') exactly match the fieldnames in your DocType. Also, confirm the Client Script is marked as 'Enabled'."
          },
          {
            problem: "My title shows 'undefined - Some Value' or just 'undefined'.",
            solution: "This occurs when one of the source fields is empty (null or undefined) at the time of concatenation. The provided script includes a check for the second field, but you should ensure all source fields are validated. Modify the script to handle empty values gracefully, for example: `const str1 = frm.doc.cnsr || '';` to default to an empty string."
          },
          {
            problem: "Can I use the '+' operator instead of .concat()?",
            solution: "Yes, absolutely. The result is the same. You can replace `str1.concat(separator, str2)` with `str1 + separator + str2`. The choice is purely based on coding style and readability preferences; performance differences are negligible in this context."
          }
        ]}
      />
    </main>
  );
};

export default ConcatenateFieldsPage;
