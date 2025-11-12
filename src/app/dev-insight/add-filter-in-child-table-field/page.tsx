"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function AddFilterInChildTableField() {
  const snippetName = "Add Filter in Child Table Field";
  const language = "javascript";
  const category = "Doctype JavaScript";
  const description = "This solution shows how to add a custom filter to a field inside a child table of a Doctype form, enabling filtered selection of options dynamically based on criteria.";

  const code = `frm.fields_dict.participant_table.grid.get_field("activity").get_query = function(doc, cdt, cdn) {
    const row = locals[cdt][cdn];
    return {
        filters: {
            type_of_project_plan: "TAREA",
        }
    };
};

// participant_table is table name in doctype
// activity is field name in table row`;

  return (
    <>
      <CodeSnippetHero
        title="How to add a filter on a child table field in a Frappe Doctype?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          In Frappe framework, Doctypes can contain child tables to represent one-to-many
          relationships. Sometimes you want to apply specific filters on fields inside
          these child table rows to restrict or customize the selectable options dynamically.
          This snippet demonstrates how to add a filter using the <code>get_query</code>
          method on a child table field. With this approach, you can control what options
          appear in dropdowns or links inside child table rows based on custom criteria,
          improving data accuracy and user experience.
        </p>
      </section>

      <section className="container-custom my-12">
        <CodeBlock
          code={code}
          language={language}
          showLineNumbers={true}
          allowCopy={true}
          referenceLink=""
          referenceLinkText=""
        />
      </section>

      <section className="container-custom my-12">
        <CodeOverview
          whatItDoes="Defines a custom query filter on the 'activity' field inside the 'participant_table' child table, filtering based on 'type_of_project_plan' value 'TAREA'."
          whenToUse="Use this when you need to limit or filter the options available in a child table field dropdown according to specific business logic or data attributes."
          prerequisites={[
            "Basic understanding of Frappe Doctype and child tables",
            "Familiarity with client-side form scripting in Frappe",
            "Knowledge of JavaScript"
          ]}
        />
      </section>

      <section className="container-custom my-12">
        <KeyConcepts
          concepts={[
            {
              title: "Child Tables in Doctypes",
              description: "Child tables allow you to embed multiple related rows within a single parent doctype, supporting complex data structures.",
              relatedLink: "https://frappeframework.com/docs/v14/user/en/api/doctype"
            },
            {
              title: "get_query Method",
              description: "A client-side method used to filter options shown in Link or Select fields dynamically based on custom conditions.",
              relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#client-side-scripting-get_query"
            },
            {
              title: "locals Object",
              description: "Used in Frappe to access the current document and child table rows within form scripts.",
              relatedLink: "https://frappeframework.com/docs/v14/user/en/api/form#form-fields"
            }
          ]}
        />
      </section>

      <section className="container-custom my-12">
        <StepByStepTutorial
          steps={[
            {
              stepNumber: 1,
              title: "Identify the child table and field",
              explanation: "Determine the child table name ('participant_table') and the specific field ('activity') where the filter should be applied.",
              code: null,
              language: null
            },
            {
              stepNumber: 2,
              title: "Assign a get_query function",
              explanation: "Use the form's fields_dict to access the child table's grid, then the specific field, and assign a get_query function that returns the desired filters.",
              code: `frm.fields_dict.participant_table.grid.get_field("activity").get_query = function(doc, cdt, cdn) { ... }`,
              language: "javascript"
            },
            {
              stepNumber: 3,
              title: "Return filter conditions",
              explanation: "Inside get_query, return a filters object specifying conditions to restrict selectable values, here filtering where 'type_of_project_plan' equals 'TAREA'.",
              code: `return { filters: { type_of_project_plan: "TAREA" } }`,
              language: "javascript"
            },
            {
              stepNumber: 4,
              title: "Test and validate",
              explanation: "Save and reload the form to test that the filter on the child table 'activity' field works as expected.",
              code: null,
              language: null
            }
          ]}
        />
      </section>

      <section className="container-custom my-12">
        <Troubleshooting
          items={[
            {
              problem: "Filter does not apply or has no effect",
              solution: "Ensure the field and child table names are spelled correctly and that the get_query is set after form initialization. Use console logs to debug the function calls."
            },
            {
              problem: "Getting errors about undefined locals or grid",
              solution: "Check that your code runs in the proper form event (such as onload or refresh) so all objects are initialized."
            }
          ]}
        />
      </section>
    </>
  );
}
