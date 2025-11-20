import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function DockerLoginGhcr() {
  const snippetName = "Docker login with ghcr.io";
  const codeSnippet = `docker login -u finbyz ghcr.io`;

  return (
    <main>
      <CodeSnippetHero
        title="How to authenticate Docker with GitHub Container Registry (ghcr.io)?"
        description="This snippet demonstrates how to log in to ghcr.io using the Docker CLI by specifying your GitHub username, enabling authentication with GitHub Container Registry."
        snippetName={snippetName}
        language="bash"
        category="DevOps"
        accentColor="green"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> To push or pull Docker images from the GitHub Container Registry (ghcr.io), you must
          authenticate Docker with your GitHub credentials. Without authentication, attempts to access private or
          scoped container images will fail.
          <br />
          <br />
          <strong>Solution:</strong> Authenticate Docker by logging in using the <code>docker login</code> command, with
          your GitHub username and an access token as your password (not shown here). This snippet shows the simplest
          login command specifying just the username and registry URL.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={false}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={`Executes a Docker CLI login command that authenticates the current user with the GitHub Container Registry (ghcr.io) by specifying their GitHub username.`}
        whenToUse={`Use this command when you need to push, pull, or manage container images hosted in the GitHub Container Registry (ghcr.io), especially for private repositories or scoped packages.`}
        prerequisites={[
          "Docker CLI installed and configured on your machine.",
          "A GitHub account with permissions to the relevant container registry.",
          "A Personal Access Token (PAT) from GitHub with 'read:packages' and/or 'write:packages' permissions to use as the password during login."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Docker CLI login",
            description: "The `docker login` command lets you authenticate with a Docker registry to enable pushing and pulling images.",
            relatedLink: "https://docs.docker.com/engine/reference/commandline/login/"
          },
          {
            title: "GitHub Container Registry (ghcr.io)",
            description: "GitHub's container registry service to host container images, integrated with GitHub Packages.",
            relatedLink: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"
          },
          {
            title: "Personal Access Token (PAT) for Authentication",
            description: "Instead of your GitHub password, use a PAT with appropriate package permissions for secure authentication.",
            relatedLink: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
          },
          {
            title: "Container image push and pull",
            description: "Authenticated registries allow pushing new images and pulling existing images for deployments and development.",
            relatedLink: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#pushing-and-pulling-container-images"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Prepare your GitHub credentials",
            explanation: "Obtain your GitHub username and generate a Personal Access Token (PAT) with package read/write permissions to use as your password when logging in.",
            code: "# Your GitHub username will be used as the username in the login command.",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Run Docker login command",
            explanation: "Use the Docker CLI to log in to the GitHub Container Registry by specifying your username and registry URL. You'll be prompted to enter your PAT as the password.",
            code: "docker login -u <your-github-username> ghcr.io",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Verify your authentication",
            explanation: "After successful login, you can push or pull container images from ghcr.io repositories where your account has permissions.",
            code: "docker pull ghcr.io/your-org/your-image:tag",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Authentication fails with invalid credentials error.",
            solution: "Ensure you are using a valid GitHub Personal Access Token (PAT) with 'read:packages' or 'write:packages' scopes and that you enter it as the password when prompted."
          },
          {
            problem: "Docker commands hang or time out when accessing ghcr.io.",
            solution: "Check your network connection and firewall settings. Also ensure Docker is running and your Docker CLI is up to date."
          },
          {
            problem: "Permission denied when pushing to a private repository.",
            solution: "Verify your GitHub PAT has the required permissions and that your account or token has access to the target container repository."
          }
        ]}
      />
    </main>
  );
}
