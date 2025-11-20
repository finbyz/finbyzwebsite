import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `// Enable whatsapp in your ERPNext
// --> open WhatsApp Setting DocType
//     --> Fill fields: Token, URL, Version, Phone ID, Business ID, Webhook Verify Token
//     // Getting the access token:
//         --> Open business.facebook.com
//         --> Menu > Three dots > Business Settings
//         --> Enter two factor authentication code
//         --> Go to User > System User
//         --> Generate new token by selecting app
//         --> Set options: never expire, enable whatsapp_business_messaging, whatsapp_business_management
//         --> Click generate token
//         --> Enable app mode to Live, add WhatsApp product in developer console
//         --> URL, Version, Phone ID, Business ID are available in developer console
//     // For webhook token:
//         --> developer.facebook.com > Webhooks
//         --> Subscribe to user object
//         --> Add callback URL: https://erp.millenniumtiles.com/api/method/whatsapp_erpnext.utils.webhook.webhook
//         --> Use a random token matching WhatsApp Setting DocType
//         --> Save subscription
//         --> In User, link WhatsApp Business Account and subscribe needed services
//     --> Save WhatsApp Setting
// --> Open WhatsApp Template DocType
//     --> Fill from business.facebook.com > WhatsApp Manager > Manage templates > Fetch from meta
// --> Open Notification List
//     --> Create custom notifications per DocType
//     --> Enable notification, select DocType, channel=WhatsApp, template
//     --> Set On Send Alert to Method, trigger = on_submit
//     --> Select data field to render in template
//     --> Message must correspond to the WhatsApp template
//     --> If template header is Document, Attach print should be mandatory
// --> Integration Request DocType
//     --> On success, share w_id; on fail, show error
// --> WhatsApp Message DocType
//     --> Monitor message status, reply directly
`;

const minimalCodeExample = `{
  "Token": "your-token",
  "URL": "https://graph.facebook.com/v11.0",
  "Version": "v11.0",
  "Phone_ID": "12345",
  "Business_ID": "67890",
  "Webhook_Verify_Token": "your-random-token"
}`;

export default function WhatsAppIntegration() {
  return (
    <>
      <CodeSnippetHero
        title="How to Integrate WhatsApp with ERPNext Using DocTypes and Webhooks?"
        description="This guide explains how to set up WhatsApp integration in ERPNext using WhatsApp Setting DocType, webhook subscriptions, template management, and notification triggers to enable automated WhatsApp messaging."
        snippetName="WhatsApp Integration"
        language="Frappe"
        category="Frappe Integration"
        accentColor="green"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> ERPNext users often need to integrate WhatsApp messaging for real-time notifications, but configuring access tokens, webhooks, and message templates can be complex.
          <br />
          <strong>Solution:</strong> This setup involves configuring the WhatsApp Setting DocType with credentials from Facebook Business, creating WhatsApp Templates, setting up notifications, and managing webhooks to enable reliable WhatsApp message sending and status tracking within ERPNext.
          <br />
          The code and instructions show how to perform these tasks leveraging Frappe/ERPNext DocTypes and Facebook developer console.
        </p>
      </section>

      <CodeBlock
        code={minimalCodeExample}
        language="json"
        showLineNumbers
        allowCopy
      />

      <CodeOverview
        whatItDoes="Enables WhatsApp messaging integration by configuring access tokens, webhook endpoints, message templates, and notifications within ERPNext's Frappe framework."
        whenToUse="Use this integration when you want to automatically send WhatsApp notifications from ERPNext based on DocType events like on_submit triggers."
        prerequisites={[
          "Access to Facebook Business Manager",
          "ERPNext with Frappe framework installed",
          "WhatsApp Business API access",
          "Admin rights to configure ERPNext DocTypes"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "WhatsApp Setting DocType",
            description:
              "Holds configuration data such as tokens, URLs, and webhook verification keys to connect ERPNext with WhatsApp Business API.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/doctype"
          },
          {
            title: "Webhook Setup",
            description:
              "Webhook subscriptions ensure ERPNext receives real-time event callbacks from WhatsApp integrations.",
            relatedLink:
              "https://developers.facebook.com/docs/graph-api/webhooks"
          },
          {
            title: "WhatsApp Templates",
            description:
              "Pre-approved WhatsApp message templates linked in ERPNext for sending consistent notifications.",
            relatedLink: "https://www.facebook.com/business/help/325824648238948"
          },
          {
            title: "ERPNext Notifications",
            description:
              "Custom notifications allow triggering WhatsApp messages on DocType events like submission.",
            relatedLink: "https://docs.erpnext.com/docs/user/manual/en/setting-up/notifications"
          },
          {
            title: "Integration and Message DocTypes",
            description:
              "Tracks message statuses and responses inside ERPNext for auditing and reply management.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/doctype"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Configure WhatsApp Setting DocType",
            explanation:
              "Populate the WhatsApp Setting DocType with Token, URL, Version, Phone ID, Business ID, and Webhook Verify Token obtained from Facebook Business Manager and Developer Console.",
            code: `{
  "Token": "<generated_token>",
  "URL": "https://graph.facebook.com/v11.0",
  "Version": "v11.0",
  "Phone_ID": "<phone_id>",
  "Business_ID": "<business_id>",
  "Webhook_Verify_Token": "<random_token_matching_ui>"
}`,
            language: "json"
          },
          {
            stepNumber: 2,
            title: "Generate Access Token via Facebook Business",
            explanation:
              "Access business.facebook.com, navigate to Business Settings > System Users, generate a new token selecting the app and permissions such as whatsapp_business_messaging and whatsapp_business_management.",
            code: `// Steps:
// - business.facebook.com
// - Menu > Business Settings > System Users
// - Generate Token with necessary permissions
// - Set token never expires
// - Enable app mode Live
// - Add WhatsApp product
`,
            language: "markdown"
          },
          {
            stepNumber: 3,
            title: "Set Up Webhook Subscription",
            explanation:
              "In developer.facebook.com, subscribe to the user object webhooks providing ERPNext callback URL and the Verification Token matching the one in WhatsApp Setting DocType.",
            code: `https://erp.millenniumtiles.com/api/method/whatsapp_erpnext.utils.webhook.webhook // callback URL
Webhook Verify Token: <random_token>
`,
            language: "text"
          },
          {
            stepNumber: 4,
            title: "Manage WhatsApp Templates",
            explanation:
              "Fetch approved WhatsApp templates from Facebook manager inside WhatsApp Template DocType in ERPNext for use in notifications.",
            code: `// Open WhatsApp Template DocType
// Click Fetch from Meta to synchronize templates
`,
            language: "plaintext"
          },
          {
            stepNumber: 5,
            title: "Create Custom Notification for WhatsApp",
            explanation:
              "Define notifications on specific DocTypes, enable the WhatsApp channel, select the template and trigger method on_submit for sending messages automatically.",
            code: `{
  "enabled": true,
  "document_type": "Sales Order",
  "channel": "WhatsApp",
  "template": "order_confirmation",
  "on_send_alert": "Method",
  "trigger": "on_submit",
  "message": "Your order {{order_id}} has been confirmed."
}
`,
            language: "json"
          },
          {
            stepNumber: 6,
            title: "Track Messages and Integration Responses",
            explanation:
              "Use Integration Request and WhatsApp Message DocTypes to monitor success or errors of sent messages and reply directly from ERPNext.",
            code: `// Integration Request shows w_id on success
// WhatsApp Message tracks status and replies
`,
            language: "plaintext"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "WhatsApp messages are not being sent from ERPNext.",
            solution:
              "Verify access token validity, ensure webhook callback URL is accessible publicly, and confirm correct subscription to user object webhooks. Check ERPNext logs for errors."
          },
          {
            problem: "Webhook verification fails during subscription setup.",
            solution:
              "Make sure the webhook verify token in Facebook Developer console matches exactly the token set in WhatsApp Setting DocType in ERPNext."
          },
          {
            problem: "WhatsApp templates are not fetched into ERPNext.",
            solution:
              "Ensure you have proper permissions in Facebook WhatsApp Manager and that the app is live. Refresh the template fetch and check API access."
          }
        ]}
        />
    </>
  );
}
