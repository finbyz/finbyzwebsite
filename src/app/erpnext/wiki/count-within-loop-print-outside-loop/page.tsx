import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const Page = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Maintain a Counter Outside a Loop in Frappe Jinja Templates?"
        description="Overcome Jinja's loop scoping in Frappe Print Formats. Learn to use dictionaries and namespaces to maintain and access variable values, like counters, outside a for loop."
        snippetName="Count within Loop print outside loop"
        language="jinja"
        category="Frappe Print Formats"
        accentColor="orange"
      />

      <CodeSnippetInstroduction
        paragraphs={[
          "In Frappe Print Formats, a common requirement is to iterate over a child table (e.g., items in a Sales Order) and calculate an aggregate value, such as a count or a sum. A significant challenge with Jinja is that variables defined with `{% set %}` inside a loop are scoped locally, meaning their values are lost once the loop completes.",
          "This guide presents two standard patterns using mutable objects—dictionaries and namespaces—to correctly maintain state across loop iterations. These methods allow you to define a counter or flag before the loop, update it inside, and reliably access its final value afterwards.",
        ]}
      />

      <CodeBlock
        language="jinja"
        code={`
{# Method 1: Using a Dictionary #}

{# 1. Define a dictionary before the loop #}
{% set vars = {'item_count': 0} %}

{% for item in doc.items %}
    {# 2. Update the dictionary's value inside the loop #}
    {# The 'if' construct ensures the update function executes without printing output #}
    {% if vars.update({'item_count': vars.item_count + 1}) %}{% endif %}
{% endfor %}

{# 3. Use the value outside the loop #}
<p>Total Items: {{ vars.item_count }}</p>


{# Method 2: Using a Namespace (Cleaner Approach) #}

{# 1. Define a namespace object #}
{% set counter = namespace(value=0) %}

{% for row in doc.some_child_table %}
    {% if row.some_condition %}
        {# 2. Modify the namespace attribute directly #}
        {% set counter.value = counter.value + 1 %}
    {% endif %}
{% endfor %}

{# 3. Access the attribute outside the loop #}
<p>Conditional Count: {{ counter.value }}</p>
`}
      />

      <CodeOverview
        whatItDoes="Provides two reliable methods (dictionary and namespace) to modify a variable's state within a Jinja `for` loop and access the updated value after the loop has completed in Frappe Print Formats."
        whenToUse="Use in Frappe Print Formats when you need to perform aggregations like counting rows that meet a certain condition, summing values from a child table, or setting a conditional flag based on data within a loop."
        prerequisites={[
          "Basic understanding of Jinja templating syntax.",
          "Familiarity with the DocType and child table structure in Frappe.",
          "Access to create or edit Print Formats in an ERPNext or Frappe instance.",
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Jinja Variable Scoping",
            description: "By default, variables assigned inside a Jinja `for` loop have a local scope. Any modifications are discarded at the end of each iteration. To persist changes, you must operate on a mutable object that was defined outside the loop.",
            relatedLink: "https://frappeframework.com/docs/user/en/print-formats#jinja-templating",
          },
          {
            title: "Mutable Objects: Dictionaries & Namespaces",
            description: "Dictionaries and namespaces are mutable, meaning they can be changed in-place. When you modify a property of these objects from within a loop (e.g., `vars.update({...})` or `counter.value = ...`), you are altering the original object, so the changes persist outside the loop's scope.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/#namespace-object",
          },
          {
            title: "Print Formats in Frappe",
            description: "Print Formats in Frappe are templates, typically written with HTML and Jinja, that define the layout of documents like Invoices or Delivery Notes. They dynamically render data from DocTypes, making loop-based calculations a common necessity.",
            relatedLink: "https://frappeframework.com/docs/user/en/print-formats",
          },
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Method 1: Using a Dictionary",
            explanation: "This classic approach involves initializing a dictionary before the loop. Inside the loop, you use the `.update()` method to modify the value associated with a key. The `if` statement is a common Jinja trick to execute the update expression without rendering any output to the page.",
            language: "jinja",
            code: `
{# Step 1.1: Initialize the dictionary before the loop #}
{% set vars = {'uom_count': 0} %}

{% for item in doc.items %}
    {# Step 1.2: Check a condition and update the dictionary #}
    {% if item.uom == 'Nos' %}
        {% if vars.update({'uom_count': vars.uom_count + 1}) %}{% endif %}
    {% endif %}
{% endfor %}

{# Step 1.3: Access the final count #}
<p>Number of items with UOM 'Nos': {{ vars.uom_count }}</p>
`,
          },
          {
            stepNumber: 2,
            title: "Method 2: Using a Namespace",
            explanation: "The `namespace` object is the modern, recommended way to handle this scenario as it was designed specifically for this purpose. It creates a simple, mutable object whose attributes can be freely assigned and reassigned from any scope.",
            language: "jinja",
            code: `
{# Step 2.1: Initialize the namespace object #}
{% set counter = namespace(high_qty_items=0) %}

{% for item in doc.items %}
    {# Step 2.2: Check a condition and directly modify the attribute #}
    {% if item.qty > 100 %}
        {% set counter.high_qty_items = counter.high_qty_items + 1 %}
    {% endif %}
{% endfor %}

{# Step 2.3: Access the final count via the attribute #}
<p>Items with quantity over 100: {{ counter.high_qty_items }}</p>
`,
          },
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "My counter variable is always 0 or its initial value when I print it outside the loop.",
            solution: "This is the classic Jinja scoping issue. You are likely using `{% set my_var = my_var + 1 %}` with a simple number. You must use a mutable object: either a dictionary (`vars.update(...)`) or a namespace (`counter.value = ...`) to ensure changes persist outside the loop's scope.",
          },
          {
            problem: "I'm getting an error: `UndefinedError: 'namespace' is not defined`.",
            solution: "The `namespace` object is available in modern versions of Jinja, which recent Frappe versions use. Ensure your Frappe/ERPNext instance is up-to-date. If you are on an older version, the dictionary method (`{% set vars = {'count': 0} %}`) is a more universally compatible alternative.",
          },
        ]}
      />
    </main>
  );
};

export default Page;
