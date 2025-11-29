import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const Page = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Override Standard DocType Methods in Frappe/ERPNext"
        description="Learn how to dynamically override or 'monkey patch' core DocType methods in Frappe and ERPNext using a custom Python script, demonstrated with the Sales Invoice DocType."
        snippetName="Override Exiting Python Methods"
        language="Python"
        category="ERPNext Customization"
        accentColor="blue"
      />

      <CodeSnippetInstroduction
        paragraphs={[
          "In Frappe development, there are times when you need to alter the core behavior of a standard DocType beyond what is possible with standard hooks. This snippet demonstrates a powerful technique known as 'monkey patching', where you dynamically replace a DocType's class methods with your own custom functions at runtime.",
          "This approach allows for deep customization of core logic, such as modifying the cancellation process of a Sales Invoice. However, it should be used with caution as it can have wide-ranging effects and may need updates if the underlying core code changes."
        ]}
      />

      <CodeBlock
        fileName="custom_app/custom_module/sales_invoice_override.py"
        language="python"
        code={`# In custom_app/custom_module/sales_invoice_override.py
import frappe
from erpnext.accounts.doctype.sales_invoice.sales_invoice import SalesInvoice

def shoutout(self):
\tprint("Yay!")

def before_cancel(self):
\tself.shoutout()
\t# Note: The original 'update_time_sheet' method might not exist on all versions.
\t# This demonstrates calling another custom or existing method.
\t# In a real scenario, you might call the original method or implement new logic.
\tfrappe.msgprint("Custom cancel logic executed!")

def apply_sales_invoice_patch():
\tSalesInvoice.shoutout = shoutout
\tSalesInvoice.before_cancel = before_cancel`}
        referenceLink="https://discuss.erpnext.com/t/how-to-override-method-in-frappe/28786/4"
        referenceLinkText="View on ERPNext Forum"
      />

      <CodeOverview
        whatItDoes="This script dynamically adds a new method (`shoutout`) and overrides an existing method (`before_cancel`) on the standard `SalesInvoice` DocType class. All Sales Invoice document instances will use this new logic globally after the patch is applied."
        whenToUse="Use this technique when you need to change the fundamental behavior of a core DocType method that doesn't have a suitable server-side hook. It's ideal for injecting custom validation, logic, or integrations directly into a DocType's workflow."
        prerequisites={[
          "A custom Frappe app must be created.",
          "Working knowledge of Python classes and functions.",
          "Bench command-line interface for restarting the server."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Monkey Patching",
            description: "Monkey patching is the process of dynamically modifying classes or modules at runtime. In this context, we are not editing the ERPNext source code file, but instead assigning our custom functions to the `SalesInvoice` class in memory after it has been loaded.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/basics/hooks#monkey-patching"
          },
          {
            title: "DocType Classes",
            description: "Every DocType in Frappe is backed by a Python class. For the 'Sales Invoice' DocType, the class is `SalesInvoice`. By modifying this class, we change the behavior of all documents of that type.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/basics/doctypes"
          },
          {
            title: "Execution via Hooks",
            description: "For a patch to be effective, it must be executed when the Frappe application starts. This is typically done by calling the patch function (e.g., `apply_sales_invoice_patch`) from a startup hook like `on_startup` in your custom app's `hooks.py` file.",
            relatedLink: "https://frappeframework.com/docs/v14/user/en/guides/basics/hooks"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create the Python File",
            explanation: "Inside your custom Frappe app, create a new Python file. A good practice is to organize such overrides in a dedicated module, for example: `my_app/overrides/sales_invoice.py`.",
            code: "# my_app/overrides/sales_invoice.py\n\n# ... your code will go here",
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Define Custom Methods",
            explanation: "Write the Python functions that will serve as your new or replacement methods. The first argument must always be `self`, which refers to the document instance.",
            code: `import frappe
from erpnext.accounts.doctype.sales_invoice.sales_invoice import SalesInvoice

def shoutout(self):
\tprint("Yay!")

def before_cancel(self):
\tself.shoutout()
\tfrappe.msgprint("Custom cancel logic executed!")`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Create the Patching Function",
            explanation: "Create a wrapper function that performs the assignment of your custom methods to the DocType class. This keeps the patching logic organized.",
            code: `def apply_sales_invoice_patch():
\tSalesInvoice.shoutout = shoutout
\tSalesInvoice.before_cancel = before_cancel`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Execute the Patch via Hooks",
            explanation: "To ensure your patch is applied every time the server starts, you must call the patching function from your app's `hooks.py` file using the `on_startup` hook.",
            code: `# my_app/hooks.py

on_startup = "my_app.overrides.sales_invoice.apply_sales_invoice_patch"`,
            language: "python"
          },
          {
            stepNumber: 5,
            title: "Restart the Bench",
            explanation: "Server-side Python code changes are not loaded automatically. You must restart the bench for the new hooks and code to take effect.",
            code: "bench restart",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The changes are not working after saving the file.",
            solution: "Ensure you have run `bench restart` to apply server-side Python changes. Also, verify that the path in `hooks.py` correctly points to your patching function."
          },
          {
            problem: "AttributeError: 'SalesInvoice' object has no attribute 'shoutout'",
            solution: "This error indicates the patch was not applied before the method was called. Check your `hooks.py` for typos and ensure the `on_startup` hook is correctly configured. A `bench build` and `bench migrate` might also be necessary in some cases."
          },
          {
            problem: "Overriding a method breaks core functionality.",
            solution: "When overriding a critical method, you may need to call the original logic. You can store the original method in a temporary variable before patching and then call it from within your custom function. This ensures you are only extending, not completely replacing, the functionality."
          }
        ]}
      />
    </main>
  );
};

export default Page;
