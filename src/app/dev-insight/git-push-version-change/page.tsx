"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function GitPushVersionChange() {
  const snippetName = "Git push version change";
  const language = "bash";
  const category = "Git Version Control";

  const description =
    "This solution demonstrates how to update your application version in the source code, commit these changes using Git, and optionally tag releases for version tracking and deployment.";

  const code = `git add .
git commit -m \"Version change --RP\"
git push
git tag -a v15.0.1 -m \"Release v15.0.1\"
git push --tags`;

  const whatItDoes =
    "This snippet guides you through updating your app version by changing the version string in your source, committing that change, pushing it to your Git repository, and optionally tagging a release version for better version tracking.";
  const whenToUse =
    "Use this process whenever you need to update the version of your application that is actively developed and maintained in Git, especially before deployments or releases.";
  const prerequisites = ["Git installed and configured", "Your app version stored in a file (e.g., __init__.py)", "Basic knowledge of Git commands"];

  const concepts = [
    {
      title: "Versioning Your App",
      description:
        "Maintain a semantic versioning pattern in your application's source code to clearly indicate feature changes and fixes.",
      relatedLink: "https://semver.org/"
    },
    {
      title: "Git Commit",
      description:
        "Commit tracked changes with a meaningful message reflecting the version bump for clear history and traceability.",
      relatedLink: "https://git-scm.com/docs/git-commit"
    },
    {
      title: "Git Tagging",
      description:
        "Use tags to mark releases in your repository, enabling easy retrieval of specific versions.",
      relatedLink: "https://git-scm.com/book/en/v2/Git-Basics-Tagging"
    },
    {
      title: "Git Push and Push Tags",
      description:
        "Push commits and tags to the remote repository to synchronize changes and make releases available.",
      relatedLink: "https://git-scm.com/docs/git-push"
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      title: "Set version inside your app",
      explanation:
        "Update the version string in your app source code file, typically located in a file like your_app/__init__.py, to reflect the new version before committing.",
      code: `__version__ = \"15.1.1\"`,
      language: "python"
    },
    {
      stepNumber: 2,
      title: "Commit the version change",
      explanation:
        "Stage the version file change and commit it with a descriptive message including the new version number.",
      code: `git add your_app/__init__.py
git commit -m \"Bump version to 15.1.1\"`,
      language: "bash"
    },
    {
      stepNumber: 3,
      title: "Push changes to the remote repository",
      explanation:
        "Use git push to upload the commit containing the version bump to your remote repository.",
      code: `git push`,
      language: "bash"
    },
    {
      stepNumber: 4,
      title: "Tag the release (optional)",
      explanation:
        "If you want to create a GitHub or Git-based release, create an annotated tag with the new version and push the tags.",
      code: `git tag -a v15.1.1 -m \"Release v15.1.1\"
git push --tags`,
      language: "bash"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "Forgot to add version file before commit.",
      solution: "Run 'git add your_app/__init__.py' before committing the version change."
    },
    {
      problem: "Tags not showing on remote repository after pushing.",
      solution: "Ensure you run 'git push --tags' explicitly to push tags to the remote."
    },
    {
      problem: "Commit message missing version number.",
      solution: "Use clear commits like 'Bump version to x.y.z' for better history tracking."
    }
  ];

  return (
    <main>
      <CodeSnippetHero
        title="How do I properly push a version change using Git?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="blue"
      />
      <section className="container-custom">
        <h2>Introduction</h2>
        <p>
          Managing application versioning within your source code and pushing these
          version changes via Git is a fundamental part of software development
          lifecycle. This process helps you keep track of changes, coordinate
          releases, and communicate updates effectively to your team and users.
          This snippet outlines a straightforward approach to bumping your app
          version string, committing that update, pushing it to a remote repository,
          and optionally creating Git tags to mark releases.
        </p>
      </section>

      <CodeBlock
        code={code}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />

      <KeyConcepts concepts={concepts} />

      <StepByStepTutorial steps={steps} />

      <Troubleshooting items={troubleshootingItems} />
    </main>
  );
}
