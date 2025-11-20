import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function RegenerateAuthentication2FAPage() {
  const snippetName = "Regenerate Authentication of 2FA";
  const language = "Python";
  const category = "Frappe Backend";

  const codeSnippet = `syntax :
    frappe.db.set_default(user + '_otplogin',None)
example : 
    frappe.db.set_default('vineshbavaliya@gmail.com' + '_otplogin',None)

refer this method : 

from frappe.twofactor import process_2fa_for_email`;

  const heroTitle = "How to regenerate or reset two-factor authentication (2FA) login flag in Frappe?";
  const heroDescription =
    "This snippet shows how to reset a user's 2FA login flag by using frappe.db.set_default, which clears the OTP login state, allowing regeneration of the authentication process.";

  const whatItDoes = `This snippet resets the '_otplogin' flag for a specific user in Frappe's system defaults.
The '_otplogin' flag is linked to the two-factor authentication (2FA) login session.
Resetting it effectively regenerates or clears the current 2FA authentication status for that user's email.`;

  const whenToUse = `Use this method when you need to invalidate or reset a user's 2FA session,
for example if the user is locked out or needs to reauthenticate via 2FA.
It is especially useful in custom scripts or admin utilities where automated 2FA management is required.`;

  const prerequisites = [
    "Basic knowledge of Frappe Framework's Python API.",
    "Access to frappe.db methods and Frappe backend code.",
    "Understanding of 2FA authentication flow in Frappe."
  ];

  const keyConcepts = [
    {
      title: "frappe.db.set_default",
      description: "Sets a system default value for a given key. Used here to reset the _otplogin flag.",
      relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappe.db.set_default"
    },
    {
      title: "Two-Factor Authentication (2FA) in Frappe",
      description: "Security mechanism requiring a second factor for login, enhancing user account security.",
      relatedLink: "https://frappeframework.com/docs/user/en/api/two-factor-authentication"
    },
    {
      title: "process_2fa_for_email",
      description: "A method from frappe.twofactor managing 2FA workflow for emails.",
      relatedLink: "https://frappeframework.com/docs/user/en/api/two-factor-authentication#process_2fa_for_email"
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      title: "Identify the user email",
      explanation: "Determine the user email for which the 2FA needs to be reset.",
      code: "user_email = 'vineshbavaliya@gmail.com'",
      language: "python"
    },
    {
      stepNumber: 2,
      title: "Reset the _otplogin flag",
      explanation: "Use frappe.db.set_default to set the user's '_otplogin' system default to None, effectively clearing the login flag.",
      code: "frappe.db.set_default(user_email + '_otplogin', None)",
      language: "python"
    },
    {
      stepNumber: 3,
      title: "Refer to 2FA process method",
      explanation: "Optionally, refer to the process_2fa_for_email method to handle further 2FA flows programmatically.",
      code: "from frappe.twofactor import process_2fa_for_email",
      language: "python"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "2FA not resetting as expected after setting _otplogin to None.",
      solution: "Ensure the user email string is accurate and frappe.db.set_default is called within a valid request context or with proper site initialization. Check for database commit if needed."
    },
    {
      problem: "Users still facing 2FA login issues after reset.",
      solution: "Verify that any caching layers or session stores are cleared, and confirm that process_2fa_for_email or related 2FA handlers are correctly invoked after resetting login state."
    }
  ];

  return (
    <main>
      <CodeSnippetHero
        title={heroTitle}
        description={heroDescription}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: In some cases, users need their two-factor authentication (2FA) login tokens
          reset or regenerated, for example, after being locked out or during debugging 2FA issues.
          <br />
          Solution: This snippet utilizes Frappe's database API to reset the 2FA login flag
          stored as a system default key for the user by setting it to None.
          This effectively clears the OTP login state allowing 2FA to be retriggered for that user.
          <br />
          Note: No separate description was provided for this snippet.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="python"
        allowCopy={true}
        referenceLink={"https://frappeframework.com/docs/user/en/api/two-factor-authentication"}
        referenceLinkText="Frappe 2FA Official Documentation"
        showLineNumbers={true}
      />

      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />

      <KeyConcepts concepts={keyConcepts} />

      <StepByStepTutorial steps={steps} />

      <Troubleshooting items={troubleshootingItems} />
    </main>
  );
}
