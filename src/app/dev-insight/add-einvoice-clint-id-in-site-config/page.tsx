import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

export default function AddEinvoiceClientIdInSiteConfig() {
  const codeSnippet = `{
  "background_workers": 1,
  "einvoice_client_id": client_id,
  "einvoice_client_secret": client_secret,
  "error_report_email": "support@finbyz.tech",
  "file_watcher_port": 6787,
  "frappe_user": "ubuntu",
  "gunicorn_workers": 5,
  "live_reload": true
}`;

  return (
    <>
      <CodeSnippetHero
        title="How to add eInvoice client ID and secret in Frappe's site config?"
        description="This snippet demonstrates how to include the eInvoice client ID and client secret in the common_site_config.json file of a Frappe site to configure eInvoice integration credentials."
        snippetName="Add Einvoice Clint id in site config"
        language="json"
        category="Frappe Configuration"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When integrating eInvoice services with a Frappe site, you need to provide client credentials to authenticate API requests. The common_site_config.json file located in the sites folder is the appropriate place to add these credentials to share them across sites.
        </p>
        <p>
          <strong>Solution:</strong> This example adds <code>einvoice_client_id</code> and <code>einvoice_client_secret</code> keys to the common_site_config.json file. Replace <code>client_id</code> and <code>client_secret</code> with your actual credentials to enable your Frappe site to access eInvoice services securely.
        </p>
        <p>
          No description was provided originally, so this explanation clarifies the intent and usage.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="json"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Adds 'einvoice_client_id' and 'einvoice_client_secret' properties with respective client credentials in the common_site_config.json file for Frappe sites."
        whenToUse="Use this snippet when you want to configure your Frappe site to connect securely to an eInvoice service by storing client ID and secret accessible at site runtime."
        prerequisites={["Access to the 'common_site_config.json' file in your Frappe site's 'sites' directory.", "Valid eInvoice client credentials (client ID and client secret) from your eInvoice provider."]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "common_site_config.json",
            description: "Central configuration file in Frappe sites folder for site-wide settings.",
            relatedLink: "https://frappeframework.com/docs/user/en/configuration"
          },
          {
            title: "eInvoice Integration",
            description: "Process of connecting Frappe with eInvoice services using API credentials.",
            relatedLink: "https://frappeframework.com/docs/user/en/integrations"
          },
          {
            title: "Client Credentials",
            description: "Secure identifiers used by applications to authenticate via OAuth or API.",
            relatedLink: "https://oauth.net/2/client-credentials-grant/"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Locate the common_site_config.json file",
            explanation: "Navigate to the 'sites' directory in your Frappe installation and open (or create) the 'common_site_config.json' file where shared site settings are stored.",
            code: `# Path to the file in your Frappe installation
sites/common_site_config.json`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Add eInvoice client credentials",
            explanation: "Insert the lines for 'einvoice_client_id' and 'einvoice_client_secret' within the JSON object, replacing 'client_id' and 'client_secret' placeholders with your actual credentials.",
            code: `{
  "einvoice_client_id": "your_actual_client_id",
  "einvoice_client_secret": "your_actual_client_secret"
}`,
            language: "json"
          },
          {
            stepNumber: 3,
            title: "Save and restart your Frappe site",
            explanation: "Save the modified 'common_site_config.json' file and restart the site or related services for the changes to take effect.",
            code: `bench restart`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "The site does not recognize the new eInvoice client ID and secret after restart.",
            solution: "Ensure the JSON syntax is valid, with commas and quotes correctly placed, and verify the file is saved at the correct location. Then restart the bench again."
          },
          {
            problem: "eInvoice API calls fail authentication.",
            solution: "Double-check the client_id and client_secret values for typos or expiration, and confirm they are correctly assigned in common_site_config.json."
          }
        ]}
      />
    </>
  );
}
