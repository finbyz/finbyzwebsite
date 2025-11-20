import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function IncreaseSizeOfDiskUbuntu() {
  const snippetName = "Increase Size of Disk Ubuntu";
  const language = "bash";
  const category = "Commandline";

  const codeSnippet = `lsblk
sudo parted /dev/sda
resizepart 2 64.4GB
quit
sudo resize2fs /dev/sda2`;

  return (
    <main>
      <CodeSnippetHero
        title="How can I increase the size of a disk partition on Ubuntu?"
        description="This guide explains how to use parted and resize2fs commands to increase the size of a disk partition, specifically /dev/sda2, on an Ubuntu system safely and effectively."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> You need to increase the size of a specific disk partition (e.g., /dev/sda2) on Ubuntu but are unsure how to do it safely using command line tools.
          <br />
          <strong>Solution:</strong> This tutorial demonstrates how to use the parted tool to resize the partition and resize2fs to resize the filesystem on that partition without data loss.
          <br />
          This approach requires root privileges and a clear understanding of your disk layout.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Provides commands to identify your disk partitions and then resize the /dev/sda2 partition to 64.4GB, followed by resizing the filesystem to match the new partition size."
        whenToUse="Use this when you need to increase the size of an existing partition on Ubuntu without reinstalling or losing data."
        prerequisites={[
          "Backup your data before partition changes.",
          "Run commands as root or with sudo privileges.",
          "Ensure the partition is not in use or unmounted if necessary."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "lsblk",
            description: "Lists information about all available or the specified block devices, helping identify disk partitions.",
            relatedLink: "https://man7.org/linux/man-pages/man8/lsblk.8.html"
          },
          {
            title: "parted",
            description: "A partition manipulation program that lets you resize, create, and modify partitions.",
            relatedLink: "https://www.gnu.org/software/parted/manual/parted.html"
          },
          {
            title: "resizepart",
            description: "Command within parted to resize a partition without data loss.",
            relatedLink: "https://www.gnu.org/software/parted/manual/html_node/Resizing-partitions.html"
          },
          {
            title: "resize2fs",
            description: "Resizes ext2/ext3/ext4 file systems to occupy a resized partition.",
            relatedLink: "https://linux.die.net/man/8/resize2fs"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Open Terminal",
            explanation: "Launch the terminal emulator on your Ubuntu system, where you will execute the necessary commands.",
            code: "# No code needed; open your terminal",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Identify the Partition",
            explanation: "Use lsblk to list all block devices and verify /dev/sda2 is the partition you want to resize.",
            code: "lsblk",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Resize the Partition with parted",
            explanation: "Invoke parted on the disk (/dev/sda) and resize the second partition (number 2) to 64.4GB, then quit parted.",
            code: [
              "sudo parted /dev/sda",
              "resizepart 2 64.4GB",
              "quit"
            ].join('\n'),
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Resize the Filesystem",
            explanation: "Use resize2fs to expand the filesystem on /dev/sda2 to use the new partition size.",
            code: "sudo resize2fs /dev/sda2",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Parted command 'resizepart' fails or is not recognized",
            solution: "Ensure you are running parted version that supports 'resizepart'. Update parted or use alternative tools like GParted GUI."
          },
          {
            problem: "Filesystem is mounted and resize2fs fails",
            solution: "Unmount the filesystem before resizing or perform the operation from live CD/USB to avoid issues."
          },
          {
            problem: "Data loss after resizing partition",
            solution: "Always back up important data before resizing partitions. Follow steps carefully to avoid mistakes."
          }
        ]}
      />
    </main>
  );
}
