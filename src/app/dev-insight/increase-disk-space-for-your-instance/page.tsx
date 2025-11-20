import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const IncreaseDiskSpaceInstancePage: React.FC = () => {
  const snippetName = "Increase Disk Space for your Instance";
  const language = "plaintext";
  const category = "Cloud Infrastructure";

  const codeSnippet = `step 1] stop instance

step 2] create snapshot from current volume

step 3] create new volume from that snapshot (add total number of GBs that you want to keep for disk space)

step 4] detach existing volume and attach new volume  and in attach write /dev/sda1

step 5] remove existing volumne if not required`;

  return (
    <main>
      <CodeSnippetHero
        title="How to increase disk space for your cloud instance safely?"
        description="This guide explains how to increase the disk size of your cloud instance by creating a snapshot of the current volume, then creating and attaching a new larger volume without data loss."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> When running cloud instances, you may need to increase
          disk space to accommodate growing storage needs but cannot directly resize
          the root volume while the instance is running.
        </p>
        <p>
          <strong>Solution:</strong> The recommended method is to create a snapshot of the
          current volume, create a new larger volume from that snapshot, then detach the
          old volume and attach the new one. This ensures data integrity and smooth
          migration to larger disk space without impacting your instance's integrity.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={false}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Provides step-by-step instructions to safely increase disk space by snapshotting, creating larger volumes, and replacing existing instance volumes."
        whenToUse="Use this method when your cloud instance's disk space is insufficient and you cannot resize the disk directly while running."
        prerequisites={[
          "Access to your cloud provider's snapshot and volume management console or CLI",
          "Sufficient permissions to stop the instance and manage volumes",
          "Knowledge of your instance's device names (e.g., /dev/sda1)"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Snapshot",
            description: "A point-in-time backup of your volume data. Used here to create a safe copy before resizing.",
            relatedLink: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html"
          },
          {
            title: "Volume",
            description: "Block storage device attached to your instance. New, larger volume created from snapshot.",
            relatedLink: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html"
          },
          {
            title: "Detach and Attach Volume",
            description: "Detaching old volume and attaching new volume to the instance with correct device name preserves boot disk.",
            relatedLink: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Stop the instance",
            explanation: "Stopping the instance ensures data consistency and allows volumes to be safely detached and reattached.",
            code: "stop instance",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Create a snapshot from the current volume",
            explanation: "Snapshot creates a backup of your current volume data, ensuring you can restore if needed.",
            code: "create snapshot from current volume",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Create a new volume from the snapshot",
            explanation: "Use the snapshot to create a new volume with the desired larger size to increase disk space.",
            code: "create new volume from that snapshot (add total number of GBs that you want to keep for disk space)",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Detach existing volume and attach the new volume",
            explanation: "Detach the old volume from your instance and attach the new larger volume. Specify the correct device name (commonly '/dev/sda1') to replace the root volume.",
            code: "detach existing volume and attach new volume and in attach write /dev/sda1",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Remove the old volume if no longer needed",
            explanation: "After verifying the new volume works properly, consider deleting the old volume to reduce costs.",
            code: "remove existing volume if not required",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Instance fails to boot after attaching new volume",
            solution: "Verify that the new volume is attached with the correct device name (such as /dev/sda1). Also ensure snapshot was created correctly and includes boot data."
          },
          {
            problem: "Data missing or corrupted after volume swap",
            solution: "Double check the snapshot completeness before creating new volume. Consider creating and testing snapshot on a detached instance volume first."
          },
          {
            problem: "Cannot detach volume because instance is still running",
            solution: "Stop the instance before detaching or use appropriate command for your cloud provider to force detach."
          }
        ]}
      />
    </main>
  );
};

export default IncreaseDiskSpaceInstancePage;
