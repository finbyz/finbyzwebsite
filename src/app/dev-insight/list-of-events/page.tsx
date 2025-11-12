"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ListOfEventsPage() {
  const codeSnippet = `# List of Events is sequence (on version - 12)

Server Side Events (i.e. in Python File):

=> If Document is saved for first time (If document is new):
	- before_insert
	- before_naming
	- autoname
	- before_validate
	- validate
	- before_save
	- after_insert
	- on_update
	- on_change

=> If action is \"Save\", then:
	- before_validate
	- validate
	- before_save
	- on_update
	- on_change

=> If action is \"Submit\", then:
	- before_validate
	- validate
	- before_submit
	- on_update
	- on_submit
	- on_change

=> If action is \"Cancel\", then:
	- before_cancel
	- on_cancel
	- on_update

=> If action is \"Update After Submit\", then:
	- before_update_after_submit
	- on_update_after_submit
	- on_change
	
-------------------------------------------------------

Other Events:
	db_set() =>
		before_change
		on_change


//******* List of Events *************
before_naming
autoname
refresh
before_load
onload
before_rename
after_rename
before_insert
validate
after_insert
before_save
after_save
before_submit
on_submit
before_cancel
on_cancel
before_update_after_submit
on_update
on_update_after_submit
onload_post_render
on_trash
after_delete
after_cancel(js)
before_workflow_action (js)
after_workflow_action (js)
`;

  const introductionText =
    "This snippet provides a detailed listing of Frappe framework events related to document lifecycle management and child table triggers. It outlines the sequence of server-side events triggered during document operations like insert, save, submit, cancel, and update after submit. Additionally, it covers child table event handlers for actions such as row add, move, remove, and form rendering. Understanding these events is crucial for developers to extend and customize Frappe applications through hooks and scripts effectively.";

  const codeOverviewProps = {
    whatItDoes:
      "Lists and explains key Frappe document and child table events used for triggering custom logic during document lifecycle stages.",
    whenToUse:
      "Use this guide when you need to implement custom business logic tied to specific document events, such as validation, submission, or child row manipulations.",
    prerequisites: ["Basic understanding of Frappe/ERPNext framework", "Familiarity with document events and hooks"]
  };

  const keyConceptsData = [
    {
      title: "Document Events",
      description:
        "Events that trigger at various stages in a Frappe document's lifecycle, e.g., before_insert, validate, on_submit.",
      relatedLink: "https://frappeframework.com/docs/v12/user/en/api/hooks#document-events"
    },
    {
      title: "Child Table Events",
      description:
        "Events specific to child tables like adding, moving, removing rows, and form rendering handlers.",
      relatedLink:
        "https://github.com/frappe/frappe/blob/version-12/frappe/model/document.py#L195"
    },
    {
      title: "Server Side vs Client Side",
      description:
        "Distinguishes between Python server-side events and JavaScript client-side events for customization.",
      relatedLink: "https://frappeframework.com/docs/v12/user/en/api/hooks#client-side-events"
    }
  ];

  const tutorialSteps = [
    {
      stepNumber: 1,
      title: "Understand Document Lifecycle Events",
      explanation:
        "Familiarize yourself with the order of server-side events triggered when a document is created, saved, submitted, canceled, or updated after submit.",
      code: `before_insert\nbefore_naming\nautoname\nbefore_validate\nvalidate\nbefore_save\nafter_insert\non_update\non_change`,
      language: "text"
    },
    {
      stepNumber: 2,
      title: "Use Child Table Events",
      explanation:
        "Learn child table specific triggers such as \"fieldname_add\" for row additions and \"fieldname_remove\" for row deletions to handle UI or data validations.",
      code: `<ol style=\"font-family: Rubik, sans-serif; font-size: 15px;\">\n<li>fieldname_add - On child row add</li>\n<li>fieldname_move - On child row move</li>\n<li>before_fieldname_remove - Before child row remove</li>\n<li>fieldname_remove - On Child row remove</li>\n<li>form_render - On Child row render</li>\n<li>fieldname_on_form_rendered</li>\n</ol>`,
      language: "html"
    },
    {
      stepNumber: 3,
      title: "Implement Event Handlers",
      explanation:
        "Write server-side Python methods or client-side JavaScript handlers to attach logic to these events in your Frappe app.",
      code: `def before_insert(self):\n    # logic before inserting document\n    pass\n\ndef validate(self):\n    # validation logic before save\n    pass`,
      language: "python"
    }
  ];

  const troubleshootingData = [
    {
      problem: "Event handler not triggering as expected",
      solution:
        "Ensure the event name matches exactly and that the handler is properly defined in server scripts or client scripts. Also, check if the document state meets conditions for the event."
    },
    {
      problem: "Child table events not firing on UI interactions",
      solution:
        "Verify you are using the correct event names with the child table fieldname prefix and that your script is loaded on the form. Use console logs to debug."
    }
  ];

  return (
    <main>
      <CodeSnippetHero
        title="How to handle events in Frappe document lifecycle and child tables?"
        description="Learn the comprehensive sequence of Frappe events fired on documents and child tables for customizing business logic on server and client sides."
        snippetName="List of Events"
        language="General"
        category="Triggers"
        accentColor="green"
      />

      <section className="container-custom px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          {introductionText}
        </p>
      </section>

      <section className="container-custom px-4 py-8">
        <CodeBlock
          code={codeSnippet}
          language="text"
          showLineNumbers={false}
          allowCopy={true}
          referenceLink="https://github.com/frappe/frappe/blob/version-12/frappe/model/document.py#L195"
          referenceLinkText="View Source on GitHub"
        />
      </section>

      <section className="container-custom px-4 py-8">
        <CodeOverview
          whatItDoes={codeOverviewProps.whatItDoes}
          whenToUse={codeOverviewProps.whenToUse}
          prerequisites={codeOverviewProps.prerequisites}
        />
      </section>

      <section className="container-custom px-4 py-8">
        <KeyConcepts concepts={keyConceptsData} />
      </section>

      <section className="container-custom px-4 py-8">
        <StepByStepTutorial steps={tutorialSteps} />
      </section>

      <section className="container-custom px-4 py-8">
        <Troubleshooting items={troubleshootingData} />
      </section>
    </main>
  );
}
