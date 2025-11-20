import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function TestAPullRequest() {
  const codeSnippet = `git remote add finbyz https://github.com/finbyz/erpnext
git fetch finbyz hotfix
git branch -u finbyz/hotfix
git checkout hotfix
git pull finbyz

git config --global --edit
	Set following:-
		name = finbyz
		email = info@finbyz.com

For rebasing:

git fetch upstream hotfix
git push`;

  return (
    <>
      <CodeSnippetHero
        title="How to test a pull request from a GitHub repository using command line?"
        description="This snippet shows the essential Git commands to fetch, checkout, and update a remote branch from a pull request to test it locally on your machine in an Ubuntu environment."
        snippetName="Test a pull request"
        language="bash"
        category="Commandline"
        accentColor="blue"
      />
      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: When working with collaborative projects on GitHub, you often need
          to test a pull request from a contributor's fork before merging it into
          your main repository to verify correctness and integration.
          <br />
          Solution: This guide explains how to add a remote pointing to the contributor's
          repository, fetch their branch, switch your local environment to that branch,
          and keep your user configuration updated for clarity.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://github.com/frappe/erpnext/wiki/How-to-test-a-Pull-Request"
        referenceLinkText="How to test a Pull Request - ERPNext Wiki"
      />

      <CodeOverview
        whatItDoes="The commands add a new remote named 'finbyz', fetch the 'hotfix' branch from it,
        set the local branch to track the remote branch, checkout the hotfix branch locally,
        pull the latest changes, and configure Git user details globally. For rebasing,
        you fetch updates from the original 'upstream' repository and push your changes."
        whenToUse="Use this sequence when you want to independently test code changes
        submitted as pull requests from forks or remotes before merging them. It's useful
        in collaborative team environments to verify changes and resolve conflicts early."
        prerequisites={[
          "Git installed on your system",
          "Access to the remote repository and pull request URL",
          "Configured Git user name and email for commits"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Git Remote",
            description: "Defines a shortcut name for a remote repository URL to fetch and push code.",
            relatedLink: "https://git-scm.com/docs/git-remote"
          },
          {
            title: "Fetching Branches",
            description: "Retrieves branches and commits from a remote repository without merging.",
            relatedLink: "https://git-scm.com/docs/git-fetch"
          },
          {
            title: "Tracking Branches",
            description: "Local branches that track upstream remote branches for easier updates.",
            relatedLink: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"
          },
          {
            title: "Git Checkout",
            description: "Switches branches or restores working tree files.",
            relatedLink: "https://git-scm.com/docs/git-checkout"
          },
          {
            title: "Git Config",
            description: "Sets configuration options for Git's behavior including user identity.",
            relatedLink: "https://git-scm.com/docs/git-config"
          },
          {
            title: "Rebasing",
            description: "Reapplies your commits on top of another base tip to maintain a linear history.",
            relatedLink: "https://git-scm.com/docs/git-rebase"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Add Remote Repository",
            explanation: "Add a remote named 'finbyz' which points to the contributor's fork of the repository.",
            code: "git remote add finbyz https://github.com/finbyz/erpnext",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Fetch Remote Branch",
            explanation: "Retrieve the latest 'hotfix' branch data from the 'finbyz' remote.",
            code: "git fetch finbyz hotfix",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Set Upstream Branch",
            explanation: "Set your local branch to track the remote 'hotfix' branch on 'finbyz'.",
            code: "git branch -u finbyz/hotfix",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Checkout Local Branch",
            explanation: "Switch your working directory to the 'hotfix' branch to test the pull request changes.",
            code: "git checkout hotfix",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Pull Latest Changes",
            explanation: "Update your local 'hotfix' branch with the latest commits from the remote.",
            code: "git pull finbyz",
            language: "bash"
          },
          {
            stepNumber: 6,
            title: "Configure User Info",
            explanation: "Edit Git's global configuration to set the name and email identifying your commits.",
            code: "git config --global --edit",
            language: "bash"
          },
          {
            stepNumber: 7,
            title: "Rebase for Updates",
            explanation: "Fetch updates from the original 'upstream' repository's 'hotfix' branch and push your rebased changes to your fork or remote.",
            code: "git fetch upstream hotfix\ngit push",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Remote 'finbyz' already exists error",
            solution: "Use 'git remote remove finbyz' to remove existing remote or choose a different name."
          },
          {
            problem: "Branch tracking not set properly",
            solution: "Ensure the branch exists locally, or use 'git branch --set-upstream-to=finbyz/hotfix hotfix' explicitly."
          },
          {
            problem: "Conflicts during pull or rebase",
            solution: "Manually resolve conflicts in the files and then commit the changes before continuing."
          }
        ]}
      />
    </>
  );
}
