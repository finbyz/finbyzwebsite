import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

export default function InstallERPNextPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Install ERPNext on Ubuntu with the Easy Install Script"
        description="Step-by-step guide to installing a production-ready ERPNext instance on Ubuntu using the official `install.py` script. Covers different versions and common troubleshooting."
        snippetName="Install ERPNext"
        language="bash"
        category="ERPNext Setup"
        accentColor="blue"
      />

      <CodeSnippetInstroduction 
        paragraphs={[
          "Installing ERPNext can seem daunting, but the Frappe team provides an 'Easy Install' script that automates most of the process on a fresh Ubuntu server. This script, `install.py`, handles the setup of all necessary dependencies like Python, Nginx, MariaDB, and Redis.",
          "This guide walks you through using the script to set up a production-ready ERPNext instance, including options for specifying versions and handling common installation errors."
        ]}
      />

      <CodeBlock
        code={`# Step 1: Install Python and required packages
sudo apt update && sudo apt upgrade -y
sudo apt install python3-minimal build-essential python3-setuptools python3-pip

# Step 2: Download the Easy Install script
wget https://raw.githubusercontent.com/frappe/bench/master/playbooks/install.py

# Step 3: Run the script for a production setup (replace 'ubuntu' with your non-root username)
sudo python3 install.py --production --user ubuntu

# --- OPTIONAL FLAGS ---

# To install a specific version (e.g., version 13)
sudo python3 install.py --production --user ubuntu --version 13

# To specify site name, passwords, and bench name
sudo python3 install.py --production --version 13 --user ubuntu --site erp.example.com --bench-name mybench --mysql-root-password 'your_sql_password' --admin-password 'your_admin_password'

# --- TROUBLESHOOTING ---

# In case of Ansible/Cryptography errors, run this before the install script:
sudo -H python3 -m pip install setuptools cryptography ansible==2.8.5`}
        language="bash"
        referenceLink="https://github.com/frappe/bench#easy-install"
        referenceLinkText="Official Frappe Bench Easy Install Guide"
        showLineNumbers={true}
      />

      <CodeOverview
        whatItDoes="The script automates the installation of the entire Frappe and ERPNext stack, including system dependencies, bench CLI, a new Frappe site, and configuring Nginx and Supervisor for production use."
        whenToUse="Use this on a clean, fresh installation of a Debian-based Linux distribution like Ubuntu to set up a new ERPNext instance. It is the recommended method for new production or development environments."
        prerequisites={[
          "A fresh Ubuntu 20.04/22.04 server.",
          "Root or sudo access.",
          "A non-root user with sudo privileges.",
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description:
              "Bench is the command-line interface for managing Frappe Framework applications. It's used for creating new sites, installing apps, updating, and running various administrative tasks.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/getting-started",
          },
          {
            title: "Easy Install Script (install.py)",
            description:
              "A Python script provided by Frappe that uses Ansible playbooks to automate the entire setup process, ensuring all dependencies and configurations are correctly applied.",
            relatedLink:
              "https://github.com/frappe/bench/blob/develop/playbooks/install.py",
          },
          {
            title: "Production vs. Develop Mode",
            description:
              "The '--production' flag sets up Nginx, Supervisor, and Fail2Ban for a live, secure environment. The '--develop' flag is for a developer setup, which is easier to debug but not meant for public access.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-production",
          },
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Prepare the System & Install Dependencies",
            explanation:
              "First, ensure your system is up-to-date and install the necessary Python packages and build tools required by the installation script.",
            code: `sudo apt update && sudo apt upgrade -y\nsudo apt install python3-minimal build-essential python3-setuptools python3-pip`,
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Download the Easy Install Script",
            explanation:
              "Download the official 'install.py' script from the Frappe Bench GitHub repository using 'wget'.",
            code: "wget https://raw.githubusercontent.com/frappe/bench/master/playbooks/install.py",
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "Execute the Installation Script",
            explanation:
              "Run the script using 'sudo python3'. The '--production' flag is crucial for a live server. Replace 'your_user' with your non-root OS username. The script will install the latest version of ERPNext by default.",
            code: "sudo python3 install.py --production --user your_user",
            language: "bash",
          },
          {
            stepNumber: 4,
            title: "Optional: Installing a Specific Version",
            explanation:
              "If you need a specific version, like version 13, you can use the '--version' flag. You can also pre-define the site name, MySQL root password, and admin password directly.",
            code: `sudo python3 install.py --production --version 13 --user ubuntu --site erp.example.com --mysql-root-password 'your_sql_password' --admin-password 'your_admin_password'`,
            language: "bash",
          },
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem:
              "The installation fails with an error related to Ansible, often mentioning incompatible versions or missing dependencies like 'cryptography'.",
            solution:
              "This can usually be resolved by manually installing specific versions of Ansible and its dependencies. Run the following command to install the required packages using pip before trying the install script again: `sudo -H python3 -m pip install setuptools cryptography ansible==2.8.5`",
          },
          {
            problem:
              "The script fails with permission errors or complains about running as the root user.",
            solution:
              "The easy install script is designed to be run via a non-root user with 'sudo' privileges. Ensure you specify the '--user' flag with your username (e.g., '--user ubuntu'). Do not run the script as 'root' without the '--user' flag, as this is not recommended and can lead to permission issues.",
          },
        ]}
      />
    </main>
  );
}
