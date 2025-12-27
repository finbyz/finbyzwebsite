import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

const AddOrReplaceSSHKeyPairPage = () => {
  const snippetName = "Add or replace a SSH key pair for your instance";
  const language = "Shell";
  const category = "Cloud Infrastructure";
  const accentColor = "blue";

  const introParagraphs = [
    "Managing SSH key pairs is essential for secure and seamless access to your cloud instances such as AWS EC2. This guide walks you through adding or replacing an SSH key pair for your instance safely without losing connection.",
    "You will learn how to generate a new public key from your private key using ssh-keygen, update the authorized_keys file on your instance and verify connection with the new key before removing the old one.",
    "This approach helps maintain continuous access while improving security by rotating keys or adding new access credentials."
  ];

  const codeSnippet = `step 1] Create new key pair from under the network and security and it will download pem or ppk file 

step 2] save that file and open cmd from there and write: ssh-keygen -y -f name_of_the_new_file.pem

step 3] copy the content that you get from execution of above command and paste that in you connected that instance with old pem file
		   and open .ssh/authorized_keys file (.ssh Folder is In Home Directory of user, eg. /home/ubuntu/.ssh)
	       and insert in new line(dont remove old line until you connect with new pem file)

step 4] try to connect with new pem file and remove old key in .ssh/authorized_keys file`;

  const whatItDoes = "Allows users to add a new SSH public key to an existing EC2 instance for secure shell access or replace an old key without disconnecting.";
  const whenToUse = "Use this when you need to rotate keys, add a new user key, or replace lost or compromised key pairs without losing SSH access.";
  const prerequisites = ["Existing access to the instance with old key", "Basic command line familiarity", "A new key pair downloaded from AWS EC2 console"];

  const keyConcepts = [
    {
      title: "SSH Key Pair",
      description: "A public and private key set for access authentication to an instance.",
      relatedLink: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"
    },
    {
      title: "ssh-keygen -y",
      description: "Extracts a public key from a private key file.",
      relatedLink: "https://man.openbsd.org/ssh-keygen"
    },
    {
      title: "authorized_keys File",
      description: "File on the instance storing allowed public keys for SSH login.",
      relatedLink: "https://linuxize.com/post/how-to-enable-passwordless-ssh-login/"
    }
  ];

  const tutorialSteps = [
    {
      stepNumber: 1,
      title: "Create a new SSH key pair in AWS EC2 console",
      explanation: "Navigate to the 'Network & Security' section and create a new key pair which downloads the .pem or .ppk file.",
      code: "",
      language: ""
    },
    {
      stepNumber: 2,
      title: "Generate public key from private key",
      explanation: "Using a terminal or command prompt, run 'ssh-keygen -y -f your-key.pem' to output the public key content.",
      code: "ssh-keygen -y -f name_of_the_new_file.pem",
      language: "Shell"
    },
    {
      stepNumber: 3,
      title: "Add the new public key to the instance's authorized_keys",
      explanation: "SSH into your instance using the old key, open or create the .ssh/authorized_keys file in the user's home directory, and append the newly generated public key on a new line without removing old keys.",
      code: "nano ~/.ssh/authorized_keys",
      language: "Shell"
    },
    {
      stepNumber: 4,
      title: "Verify connection and clean up",
      explanation: "Test connecting to the instance with the new private key. Once confirmed, remove the old key line from the authorized_keys file to maintain security.",
      code: "nano ~/.ssh/authorized_keys",
      language: "Shell"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "Cannot connect with new private key",
      solution: "Ensure the public key was correctly copied to authorized_keys and the file permissions are set to 600 for authorized_keys and 700 for .ssh directory."
    },
    {
      problem: "Permission denied (publickey) error",
      solution: "Check that ssh-agent is running and the correct private key is specified during ssh command using -i option. Verify the key format is correct and not corrupted."
    },
    {
      problem: "Old key removal causes loss of access",
      solution: "Do not remove old keys before verifying you can connect using the new key. Always maintain a fallback access during key rotation."
    }
  ];

  return (
    <>
      <CodeSnippetHero
        title="How to Add or Replace an SSH Key Pair for Your EC2 Instance Securely"
        description="Step-by-step guide illustrates using ssh-keygen to add or replace SSH key pairs on your cloud instance ensuring continuous secure access."
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor={accentColor}
      />
      <CodeSnippetInstroduction paragraphs={introParagraphs} />
      <CodeBlock
        code={codeSnippet}
        language={language}
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair"
        referenceLinkText="AWS EC2 Key Pairs Documentation"
      />
      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />
      <KeyConcepts concepts={keyConcepts} />
      <StepByStepTutorial steps={tutorialSteps} />
      <Troubleshooting items={troubleshootingItems} />
    </>
  );
};

export default AddOrReplaceSSHKeyPairPage;
