"use client";

import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

const codeSnippet = `frappe.ui.form.on("Address", "before_save", function(frm) {
	if (frm.doc.links) {
	var str1 = frm.doc.site_identifier;
	var str2 = " -"
	var str3 = frm.doc.links[0].link_name;
	var str4 = str1.concat(str2, str3);
	frm.set_value("address_title", str4);
	}
});

// if str3 has null value
// ODR Rake
frappe.ui.form.on("ODR Rake", "before_save", function(frm) {

	var str1 = frm.doc.cnsr;
	var str2 = " -";
	var str3 = frm.doc.from;
	if ( str3 === undefined) {
	 frm.set_value("title", str1);
	}
	else{
	var str4 = str1.concat(str2, str3);
	frm.set_value("title", str4);
	}
});
`;

export default function MergeStringsPage() {
  return (
    <>
      <CodeSnippetHero
        title="How can you merge strings dynamically with null handling in JavaScript?"
        description="This snippet shows how to concatenate strings conditionally in a Frappe form before_save event, effectively merging strings and handling cases where some parts might be undefined or null."
        snippetName="Merge Strings"
        language="JavaScript"
        category="String Operations"
        accentColor="blue"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet demonstrates how to merge multiple strings using JavaScript's
          <code className="font-mono bg-gray-100 px-1 rounded mx-1">concat</code> method within Frappe form
          scripting. It specifically shows merging a base string with another string that might sometimes be null or
          undefined, providing a conditional approach to avoid errors or unintended "undefined" text in the result.
          This is useful in form data processing where display titles or labels depend on dynamic data inputs.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Merges two or three strings safely using concat, with conditional checks to handle null or undefined values. It sets the merged result as a field value in Frappe form before saving."
        whenToUse="Use this when you need to dynamically build display strings or titles from multiple form fields in Frappe, particularly when one or more fields might be empty or undefined."
        prerequisites={[
          "Basic knowledge of JavaScript string operations",
          "Frappe Framework form scripting familiarity",
          "Understanding of event handlers like before_save"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "String concat() Method",
            description: "Used to join several strings into one without modifying the originals.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat"
          },
          {
            title: "Conditional Checks for Null/Undefined",
            description: "Ensures string parts are valid before merging to prevent unwanted concatenation results.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
          },
          {
            title: "Frappe Form Events",
            description: "Using before_save event to manipulate form fields before saving data.",
            relatedLink: "https://frappeframework.com/docs/v13/user/en/api/form_events"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Check for Existence of Array or Value",
            explanation: "Verify if the linked array exists or if the value (like str3) is defined before attempting to merge.",
            code: "if (frm.doc.links) { var str3 = frm.doc.links[0].link_name; }",
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Define Base Strings",
            explanation: "Assign initial string values from form fields that you want to merge.",
            code: "var str1 = frm.doc.site_identifier; var str2 = ' -';",
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Conditional Concatenation",
            explanation: "If the string value to append exists, concatenate it; otherwise, use only the base string.",
            code: "if (str3 === undefined) { frm.set_value('title', str1); } else { var str4 = str1.concat(str2, str3); frm.set_value('title', str4); }",
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Resulting string has 'undefined' appended.",
            solution: "Ensure that you check if the string to append is not undefined before concatenation. Use conditional statements."
          },
          {
            problem: "Form field does not update with merged string.",
            solution: "Verify the event handler is correctly attached to the form and the field names are accurate. Use frm.set_value correctly."
          }
        ]}
      />
    </>
  );
}
