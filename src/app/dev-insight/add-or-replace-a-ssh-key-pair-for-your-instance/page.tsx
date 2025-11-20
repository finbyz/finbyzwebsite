import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `step 1] Create new key pair from under the network and security and it will download pem or ppk file 

step 2] save that file and open cmd from there and write: ssh-keygen -y -f name_of_the_new_file.pem

step 3] copy the content that you get from execution of above command and paste that in you connected that instance with old pem file
               and open .ssh/authorized_keys file (.ssh Folder is In Home Directory of user, eg. /home/ubuntu/.ssh)
               and insert in new line(dont remove old line until you connect with new pem file)

step 4] try to connect with new pem file and remove old key in .ssh/authorized_keys file`;

const tutorialSteps = [
  {
    stepNumber: 1,
    title: "Create a new SSH key pair",
    explanation: "Generate a new SSH key pair from your cloud provider's console under the Network and Security section. The private key file (.pem or .ppk) will be downloaded automatically.",
    code: "# Generate key pair via cloud console",
    language: "bash"
  },
  {
    stepNumber: 2,
    title: "Extract the public key from the private key file",
    explanation: "Use ssh-keygen to extract the public key from your downloaded private key file. This command prints the public key content in a format suitable for the authorized_keys file.",
    code: "ssh-keygen -y -f name_of_the_new_file.pem",
    language: "bash"
  },
  {
    stepNumber: 3,
    title: "Add the new public key to your instance",
    explanation: "Connect to your instance using your old private key and edit the ~/.ssh/authorized_keys file by adding the new public key on a new line so both keys are authorized during the transition.",
    code: "nano ~/.ssh/authorized_keys",
    language: "bash"
  },
  {
    stepNumber: 4,
    title: "Connect with the new private key and remove old key",
    explanation: "After confirming the new key works for SSH login, edit the authorized_keys file again to remove the old public key to maintain security.",
    code: "nano ~/.ssh/authorized_keys",
    language: "bash"
  }
];

export default function AddOrReplaceSSHKeyPair() {
  return (
    <main>
      <CodeSnippetHero
        title="How to add or replace an SSH key pair for your cloud instance?"
        description="Step-by-step guide to create a new SSH key pair, add its public key to the instance, and safely replace the old key to keep your SSH access secure."
        snippetName="Add or replace a SSH key pair for your instance"
        language="bash"
        category="General"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: When managing cloud instances, sometimes you need to update or replace
          your SSH key pair for security reasons or key loss. Directly replacing keys
          could lock you out if not done properly.
          <br />
          <br />
          Solution: This guide explains how to create a new SSH key pair, extract the
          public key, add it to your running instance alongside your old key for seamless
          transition, and then safely remove the old key after confirming access.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={false}
        allowCopy
        referenceLink="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair"
        referenceLinkText="AWS EC2 Key Pairs Documentation"
      />

      <CodeOverview
        whatItDoes="Creates a new SSH key pair, extracts the public key, adds it to the remote instance's authorized_keys file, and replaces the old key to maintain secure SSH access."
        whenToUse="When you need to add, replace, or rotate SSH keys for accessing your cloud instances securely."
        prerequisites={[
          "Access to your cloud provider's console or CLI to create SSH key pairs.",
          "Existing SSH access to the instance to add new keys.",
          "Basic familiarity with SSH and terminal commands."
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "SSH Key Pair",
            description: "A pair of cryptographic keys used for secure remote login without passwords.",
            relatedLink: "https://www.ssh.com/academy/ssh/key"
          },
          {
            title: "authorized_keys File",
            description: "A file in the user's .ssh directory that stores public keys permitted to connect via SSH.",
            relatedLink: "https://linux.die.net/man/5/authorized_keys"
          },
          {
            title: "ssh-keygen",
            description: "A tool for generating, managing, and converting authentication keys for SSH.",
            relatedLink: "https://linux.die.net/man/1/ssh-keygen"
          },
          {
            title: "SSH PEM/PPK Files",
            description: "Private key files format used by different SSH clients to authenticate.",
            relatedLink: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"
          }
        ]}
      />

      <StepByStepTutorial
        steps={tutorialSteps}
      />

      <Troubleshooting
        items={[
          {
            problem: "Cannot connect to instance using new key",
            solution: "Ensure the public key is correctly added to the ~/.ssh/authorized_keys file on the instance and that file permissions are correct (600 for authorized_keys)."
          },
          {
            problem: "Old key removed before testing new key",
            solution: "Always keep the old key in authorized_keys until you confirm the new key works to avoid being locked out."
          },
          {
            problem: "Permission denied (publickey) error",
            solution: "Check SSH client is using the correct private key and the instance user's home directory permissions are not too permissive."
          }
        ]}
      />
    </main>
  );
}
