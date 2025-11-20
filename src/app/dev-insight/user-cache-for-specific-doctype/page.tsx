import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const snippetName = "User Cache For Specific Doctype";
const language = "Frappe Client Script";
const category = "Frappe Frontend";
const codeSnippet = `User = Who's Getting Issue\nShare URL = open ... and it will give option\n\ncheck standard filters for values if the share url includes filters\n    if present remove the values\n\n1] Match Share URL from Admin Account And User For that Doctype\n\n2] If URL is Different then Copy Admin Share URL and paste it in User's Session\n\neg. https://erp.evergreen-industries.com/app/sales-invoice (ADMIN URL)\n    https://erp.evergreen-industries.com/app/sales-invoice/?%20202020%20\n    \n    then open ADMIN URL in User's Session.`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to synchronize and cache share URLs for a specific DocType user session?"
        description="This snippet addresses the problem of users accessing share URLs with extra filter values causing inconsistent views. It implements a solution to clear filters from the URL and synchronize the user's session URL with the admin's share URL to maintain consistent data access in Frappe."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Users of a specific DocType may access share URLs containing filter parameters that
          create inconsistent or unwanted filtered views. These extra filter values sometimes differ from the admin’s
          intended view.
        </p>
        <p>
          <strong>Solution:</strong> This approach checks the user's session URL for filter values. If filters are present,
          it removes them and ensures the URL matches the admin's share URL for that DocType by copying it over. This
          synchronization ensures consistent user experience and data access.
        </p>
        <p>
          The snippet is particularly useful in Frappe/ERPNext environments where share URLs and user session
          consistency are critical.
        </p>
      </section>

      <CodeBlock
        code={`// Pseudocode outline
const adminShareURL = "https://erp.evergreen-industries.com/app/sales-invoice";
let userShareURL = window.location.href;

// Function to remove filters from URL
function clearFiltersFromURL(url) {
  const urlObj = new URL(url);
  urlObj.search = ""; // removes all query params (filters)
  return urlObj.toString();
}

// Compare and sync URLs
if (userShareURL !== adminShareURL) {
  const cleanedURL = clearFiltersFromURL(userShareURL);
  
  if (cleanedURL !== adminShareURL) {
    // Redirect or update user's session URL
    window.location.href = adminShareURL;
  }
}
`}
        language="javascript"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="This snippet ensures that the user’s session URL for a specific DocType (e.g., sales invoice) matches the admin’s shared URL, clearing any extraneous filter values that might exist in the user’s current URL."
        whenToUse="Use this technique whenever you want to maintain a consistent URL state for all users accessing a shared DocType view, especially if filters in the URL may cause display or permission inconsistencies."
        prerequisites={[
          "Basic understanding of URL structures and query parameters.",
          "Access to modify user session URLs or redirection logic in the Frappe environment."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe DocType",
            description: "A DocType is a fundamental data model in Frappe used to define forms and tables.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctype"
          },
          {
            title: "Share URL",
            description: "Share URLs are links generated to allow users to access specific views or filtered data within Frappe apps.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/rest#share-resource"
          },
          {
            title: "Session Management",
            description: "Techniques to maintain and modify user sessions and state, including URLs and filters.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/sessions"
          },
          {
            title: "URL Filter Parameters",
            description: "Query parameters appended to URLs to filter records or views in Frappe applications.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/query-reports"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify User and Admin Share URLs",
            explanation: "Obtain the admin's official share URL for the specific DocType and the URL currently in the user’s session.",
            code: `const adminShareURL = "https://erp.evergreen-industries.com/app/sales-invoice";
const userShareURL = window.location.href;` ,
            language: "javascript"
          },
          {
            stepNumber: 2,
            title: "Check for Filter Parameters",
            explanation: "Analyze if the user’s URL contains any filter query parameters and remove them to avoid filtered views.",
            code: `function clearFiltersFromURL(url) {
  const urlObj = new URL(url);
  urlObj.search = ""; // removes all filters
  return urlObj.toString();
}` ,
            language: "javascript"
          },
          {
            stepNumber: 3,
            title: "Synchronize User URL with Admin URL",
            explanation: "If the cleaned user URL and admin share URL differ, redirect the user session to the admin URL to ensure consistency.",
            code: `if (userShareURL !== adminShareURL) {
  const cleanedURL = clearFiltersFromURL(userShareURL);
  if (cleanedURL !== adminShareURL) {
    window.location.href = adminShareURL;
  }
}` ,
            language: "javascript"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Users still see filtered views despite URL synchronization.",
            solution: "Ensure that the URL cleaning function correctly removes all filter query parameters and that page redirection or session update logic executes properly in the browser context."
          },
          {
            problem: "Admin and user URLs appear identical but filters seem cached.",
            solution: "Clear browser cache and user session cookies or consider reloading the user session programmatically when syncing URLs."
          }
        ]}
        />
    </main>
  );
}
