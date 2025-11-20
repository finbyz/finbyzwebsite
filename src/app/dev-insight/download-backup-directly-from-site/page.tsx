import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `curl --location 'https://url/backups/filename' \\
  --header 'Authorization: Basic <Authorization via api key and secret>' \\
  --header 'Cookie: full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=' \\
  --output filename.tar`;

export default function DownloadBackupPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to download a backup file directly from a site using curl?"
        description="This snippet shows how to download a backup from a URL using curl with necessary authorization and cookie headers, saving the output as a file. It is suited for command-line environments like Ubuntu."
        snippetName="Download backup directly from site"
        language="bash"
        category="Commandline"
        accentColor="orange"
      />
      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When you need to download backup files or any protected resources from a web server via command line, you must handle authorization and session data properly.
          Without the correct headers and options, the download may fail or be blocked.
        </p>
        <p>
          <strong>Solution:</strong> This example uses <code>curl</code> with the <code>--location</code> flag to follow redirects,
          sets the <code>Authorization</code> HTTP header with a basic API key and secret,
          and sends a <code>Cookie</code> header mimicking a logged-in session.
          Finally, it outputs the downloaded content to a specified file.
        </p>
      </section>
      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="Downloads a remote backup file securely by providing authorization and cookie headers using curl, saving it locally with a specified filename."
        whenToUse="Use this when you need to programmatically download backups or other protected files from a web endpoint that requires authentication and session cookies."
        prerequisites={[
          "Access to the URL endpoint with valid API key and secret for authorization.",
          "curl installed on your command line environment.",
          "Correct cookie values if needed to simulate a session."
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "curl --location",
            description: "Follows HTTP redirects automatically to reach the final download URL.",
            relatedLink: "https://curl.se/docs/manpage.html#-L"
          },
          {
            title: "Authorization Header",
            description: "Sends API credentials securely as a Basic Auth header for authentication.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"
          },
          {
            title: "Cookie Header",
            description: "Sends cookies to maintain session state or simulate a logged-in user.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie"
          },
          {
            title: "--output Option",
            description: "Specifies the filename for the downloaded file, saving the output to disk.",
            relatedLink: "https://curl.se/docs/manpage.html#-o"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Set the download URL",
            explanation: "Specify the exact URL from where the backup file will be downloaded. Using --location ensures redirects are followed.",
            code: `curl --location 'https://url/backups/filename'`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Add Authorization header",
            explanation: "Include a Basic Authorization header with encoded API key and secret so the server can validate your request.",
            code: `--header 'Authorization: Basic <Authorization via api key and secret>'`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Add Cookie header",
            explanation: "Simulate user session or pass required cookie data for authentication or personalization.",
            code: `--header 'Cookie: full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image='`,
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Save the output",
            explanation: "Save the downloaded content to a local file with a specified filename.",
            code: `--output filename.tar`,
            language: "bash"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Download fails with 401 Unauthorized error.",
            solution: "Check that your Authorization header uses the correct Base64 encoded API key and secret. Verify the credentials are still valid."
          },
          {
            problem: "File downloads but is empty or corrupted.",
            solution: "Verify that the URL is correct, and that --location is used to handle redirects. Check your network connection."
          },
          {
            problem: "Cookies seem ineffective and access is denied.",
            solution: "Ensure cookie values are set correctly and match what the server expects. You may need to authenticate first to obtain valid cookies."
          }
        ]}
      />
    </main>
  );
}
