import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `# for  generating Certificate

Step 1:- download win64openssl (from https://slproweb.com/products/Win32OpenSSL.html)

step 2:- open downloaded win64openssl

step 3:- type openssl genrsa -out private.key 2048 press enter

step 4:- type openssl req -new -key private.key -out certificate.csr -subj "/C={}/ST={}/L={}/O={}/cn={}/emailaddress={}" press enter. example:-"/C=IN/ST=Gujarat/L=Ahmedabad/O=Finbyz Tech Private limited/cn=2df84f52-0f51-4cc6-9d16-cff7c81e8175/emailaddress=info@finbyz.com"(here cn is only important part)

step 5:-type openssl x509 -req -days 365 -in certificate.csr -signkey private.key -out certificate.crt press enter

step 6:-openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt press enter

# now your cretificate is generated in the same working directory with name of certificate.pfx`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to generate a self-signed .pfx certificate using OpenSSL?"
        description="This guide explains how to create a self-signed .pfx certificate on Ubuntu or Windows by using OpenSSL commands step by step."
        snippetName="Generate .pfx Certificate(Self Signed)"
        language="bash"
        category="Command Line"
        accentColor="green"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> You need to create a self-signed .pfx certificate for securing applications or testing purposes without relying on a trusted certificate authority.
          <br />
          <strong>Solution:</strong> This process uses OpenSSL command-line tools to generate a private key, create a certificate signing request with custom details, sign the certificate to make it self-signed, and finally package it into a .pfx file format usable by various services.
          <br />
          <em>Note:</em> Although the instructions mention downloading the Windows OpenSSL binary, the commands are identical on Ubuntu or other Linux distros where OpenSSL is natively available.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Generates a private RSA key, creates a certificate signing request (CSR) with user-defined certificate fields, self-signs a certificate valid for 365 days, and creates a .pfx (PKCS#12) file bundling the key and certificate."
        whenToUse="Use when you need a self-signed certificate for encrypting network traffic or testing TLS/SSL setups without obtaining a certificate from a public CA."
        prerequisites={[
          "OpenSSL installed on your system",
          "Basic command line/terminal proficiency",
          "Understanding of certificate fields such as CN (common name)"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "OpenSSL genrsa",
            description: "Generates a private RSA key used for creating the certificate and signing requests.",
            relatedLink: "https://www.openssl.org/docs/man1.1.1/man1/openssl-genrsa.html"
          },
          {
            title: "Certificate Signing Request (CSR)",
            description: "Contains the public key and identity information to request a certificate from a CA or to self-sign.",
            relatedLink: "https://www.openssl.org/docs/man1.1.1/man1/openssl-req.html"
          },
          {
            title: "Self-Signed Certificate",
            description: "Certificate signed using the same private key you generated, used for testing or internal applications.",
            relatedLink: "https://en.wikipedia.org/wiki/Self-signed_certificate"
          },
          {
            title: ".pfx (PKCS#12) format",
            description: ".pfx bundles the private key and certificate in a single encrypted file for easier deployment to servers.",
            relatedLink: "https://tools.ietf.org/html/rfc7292"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Download OpenSSL for Windows (if on Windows system)",
            explanation: "Download the latest Win64 OpenSSL installer from the official website to enable OpenSSL commands on Windows.",
            code: "Download from https://slproweb.com/products/Win32OpenSSL.html",
            language: "text"
          },
          {
            stepNumber: 2,
            title: "Install and Open OpenSSL Command Line",
            explanation: "Run the downloaded installer and open the OpenSSL command prompt provided by the installation.",
            code: "open win64openssl shell",
            language: "text"
          },
          {
            stepNumber: 3,
            title: "Generate a 2048-bit Private Key",
            explanation: "Create a private RSA key file named private.key which will be used for signing the certificate.",
            code: "openssl genrsa -out private.key 2048",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Create a Certificate Signing Request (CSR)",
            explanation: "Generate a CSR using the private key. Use the -subj flag to specify certificate details. The CN (common name) field is important for identification.",
            code: "openssl req -new -key private.key -out certificate.csr -subj \"/C=IN/ST=Gujarat/L=Ahmedabad/O=Finbyz Tech Private limited/cn=your-cn/emailaddress=info@finbyz.com\"",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Self-sign the Certificate",
            explanation: "Sign the CSR with your private key to create a certificate valid for 365 days.",
            code: "openssl x509 -req -days 365 -in certificate.csr -signkey private.key -out certificate.crt",
            language: "bash"
          },
          {
            stepNumber: 6,
            title: "Create the PKCS#12 (.pfx) file",
            explanation: "Export the private key and certificate into a single .pfx file that can be imported into Windows or other systems.",
            code: "openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt",
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "OpenSSL command not found",
            solution: "Ensure OpenSSL is installed and added to your system PATH environment variable. On Ubuntu, install via: sudo apt-get install openssl"
          },
          {
            problem: "Error with -subj parameter format",
            solution: "Ensure the certificate subject string is enclosed properly in quotes and uses correct field names like /C=, /ST=, /L=, /O=, /CN=, /emailAddress=. Case sensitive and exact spelling matters."
          },
          {
            problem: "Password prompt when creating .pfx",
            solution: "When running openssl pkcs12 -export, it will ask for a password to protect the .pfx file. Choose a strong password or press enter for none if allowed."
          }
        ]}
      />
    </main>
  );
}
