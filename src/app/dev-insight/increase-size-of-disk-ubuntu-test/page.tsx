'use client'

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";

export default function IncreaseDiskSizeUbuntu() {
  const snippetName = "Increase Size of Disk Ubuntu";
  const language = "bash";
  const category = "Linux System Administration";
  const accentColor = "blue";

  const code = `lsblk
sudo parted /dev/sda
resizepart 2 64.4GB
quit
sudo resize2fs /dev/sda2`;

  return (
    <>
      <CodeSnippetHero
        title="How can I increase the size of a specific disk partition on Ubuntu?"
        description="This snippet shows how to safely increase the partition size of /dev/sda2 to 64.4GB using parted and resize2fs commands in Ubuntu."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor={accentColor}
      />

      <section className="container-custom mt-8 mb-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          In many scenarios, you may need to increase the size of an existing disk partition on your Ubuntu system to accommodate more data or applications. This snippet
          explains how to extend the second partition on the /dev/sda disk device (commonly /dev/sda2) to a new size of 64.4GB using command-line tools. The process
          uses the parted utility to resize the partition and resize2fs to expand the filesystem so the OS can use the additional space. This method is useful
          when you have unallocated space following the partition or when expanding virtual disks.
        </p>
      </section>

      <CodeBlock
        code={code}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Resizes the disk partition /dev/sda2 to 64.4GB and expands the filesystem to use the new partition size."
        whenToUse="Use this approach when you need to extend an existing partition size to utilize additional disk space, commonly after expanding a virtual disk or adding free space."
        prerequisites={[
          "You must have root or sudo privileges.",
          "Ensure the partition to resize is not mounted or is unmounted safely.",
          "Backup important data prior to resizing partitions.",
          "Have the parted and resize2fs utilities installed (usually preinstalled on Ubuntu)."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "parted",
            description: "A powerful command-line utility to manipulate disk partitions, supporting resizing and other operations.",
            relatedLink: "https://manpages.ubuntu.com/manpages/focal/en/man8/parted.8.html"
          },
          {
            title: "resize2fs",
            description: "Command used to resize ext2/ext3/ext4 file systems after the underlying partition has been resized.",
            relatedLink: "https://linux.die.net/man/8/resize2fs"
          },
          {
            title: "/dev/sda2",
            description: "Refers to the second partition on the first SCSI or SATA hard drive in Linux systems.",
            relatedLink: "https://wiki.archlinux.org/title/Partitioning"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Identify the Partition to Resize",
            explanation: "Use the lsblk command to list all disk devices and partitions to confirm the target partition (/dev/sda2) that you want to resize.",
            code: "lsblk",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Start parted on the Disk Device",
            explanation: "Launch parted with sudo on the /dev/sda disk which contains the partition you want to resize.",
            code: "sudo parted /dev/sda",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Resize the Partition",
            explanation: "Use the resizepart command in parted to resize partition number 2 to 64.4GB.",
            code: "resizepart 2 64.4GB",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Exit parted",
            explanation: "Quit the parted utility after successfully resizing the partition.",
            code: "quit",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Resize the Filesystem",
            explanation: "Run resize2fs on /dev/sda2 to expand the filesystem to the new partition size so the OS can properly use it.",
            code: "sudo resize2fs /dev/sda2",
            language: "bash"
          }
        ]}
      />
    </>
  );
}
