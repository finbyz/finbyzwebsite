import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function RevertGitCommit() {
  const snippetName = "Revert git commit";
  const code = `# Reset the index and working tree to the desired tree
# Ensure you have no uncommitted changes that you want to keep
git reset --hard 56e05fced

# Move the branch pointer back to the previous HEAD
git reset --soft \"HEAD@{1}\"\n
git commit -m \"Revert to 56e05fced\"`;

  return (
    <main>
      <CodeSnippetHero
        title="How to revert a specific git commit using its SHA hash?"
        description="If you want to undo the effects of a commit and reset your repository to a previous state identified by a SHA hash, this snippet walks you through the process of resetting your working tree and branch pointer safely."
        snippetName={snippetName}
        language="Git"
        category="Version Control"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Sometimes when working with Git, you need to undo a commit and return your repository
          to a previous state identified by a commit SHA hash. This might be
          necessary if you pushed a faulty commit or want to remove undesired changes.
          Simply deleting commits can be risky, and understanding how to properly reset your
          working tree and branch pointer is essential.
        </p>
        <p>
          <strong>Solution:</strong> The provided commands show how to hard reset your index and working tree
          to the targeted commit SHA, removing any changes after it, and then
          move the branch pointer softly to ensure your HEAD points correctly.
          Finally, committing with a clear message records the state.
        </p>
      </section>

      <CodeBlock
        code={code}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://stackoverflow.com/questions/1895059/revert-to-a-commit-by-a-sha-hash-in-git"
        referenceLinkText="StackOverflow discussion on reverting to a Git commit by SHA"
      />

      <CodeOverview
        whatItDoes={`This snippet resets the Git working directory and index to a specified commit using its SHA hash with a hard reset. It then soft resets the branch pointer to the previous HEAD position to adjust commit history without altering working files further. Finally, it makes a commit describing the reversion.`}
        whenToUse={`Use this when you want to undo commits after a specific sha hash, effectively going back in time to a known good state while updating your branch’s history and files. This is common in fixing mistakes or rolling back unwanted changes.`}
        prerequisites={[
          "You must have a clean working directory (no uncommitted changes).",
          "You should understand the difference between hard and soft reset in Git.",
          "Know the commit SHA hash you want to revert to."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "git reset --hard",
            description: "Completely resets your working directory and staging area to the specified commit, discarding any changes.",
            relatedLink: "https://git-scm.com/docs/git-reset"
          },
          {
            title: "git reset --soft",
            description: "Resets the HEAD pointer to a specific commit but does not touch working files or the index.",
            relatedLink: "https://git-scm.com/docs/git-reset"
          },
          {
            title: "Commit SHA (hash)",
            description: "A unique identifier for each commit used to point to specific revisions.",
            relatedLink: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects"
          },
          {
            title: "HEAD@{1}",
            description: "Git reflog syntax referencing the previous position of HEAD before the last change.",
            relatedLink: "https://git-scm.com/docs/git-rev-parse#Documentation/git-rev-parse.txt-emheadem"
          },
          {
            title: "Making commits",
            description: "Records changes to the repository with a descriptive message.",
            relatedLink: "https://git-scm.com/docs/git-commit"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Hard reset working directory to a specific commit",
            explanation: "This command resets your working directory and index to the exact state of the commit with the given SHA hash. Make sure there are no uncommitted changes because they will be lost.",
            code: "git reset --hard 56e05fced",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Soft reset branch pointer to previous HEAD",
            explanation: `The 'HEAD@{1}' syntax refers to where HEAD was before the last command. This moves the branch pointer softly back to that previous commit position, adjusting your commit history without changing any working files.`,
            code: "git reset --soft \"HEAD@{1}\"",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Commit the reverted state",
            explanation: "After repositioning the branch pointer and resetting files, commit the changes with a message explaining the reversion.",
            code: "git commit -m \"Revert to 56e05fced\"",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Uncommitted changes prevent hard reset",
            solution: "Stash or commit your changes before running `git reset --hard`, as this command discards any uncommitted work."
          },
          {
            problem: "Incorrect SHA hash causes errors or unexpected state",
            solution: "Verify the SHA hash exists with `git log` or `git reflog` before running reset commands."
          },
          {
            problem: "Confusion about HEAD@{1} reference",
            solution: "Use `git reflog` to understand the position and history of HEAD to correctly use references like HEAD@{1}."
          }
        ]}
      />
    </main>
  );
}
