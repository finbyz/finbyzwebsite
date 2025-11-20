import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function InstallERPNext() {
  const codeSnippet = `sudo apt update
sudo apt install git python3-dev python3-pip redis-server python3-venv software-properties-common xvfb libfontconfig wkhtmltopdf
sudo apt install curl

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - 
sudo apt-get install -y nodejs

sudo apt-get update
sudo apt-get install nodejs -y

sudo npm -g install yarn

curl -LsS -O https://downloads.mariadb.com/MariaDB/mariadb_repo_setup
sudo bash mariadb_repo_setup --mariadb-server-version=10.6

sudo apt update
sudo apt install mariadb-server mariadb-client

sudo mysql_secure_installation

sudo nano /etc/mysql/my.cnf

# add in file
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

[mysql]
default-character-set = utf8mb4

sudo service mysql restart

sudo pip3 install frappe-bench

bench init --version version-13 frappe-bench
OR
bench init --version version-14 frappe-bench
OR
bench init --version version-15 frappe-bench

sudo chmod -R o+rx /home/<user>`;

  return (
    <main>
      <CodeSnippetHero
        snippetName="Install ERPNext"
        title="How to install ERPNext on Ubuntu using Bench?"
        description="This guide solves the problem of setting up ERPNext with all required dependencies, service configurations, and initializing Bench with the desired version."
        language="Shell"
        category="Command Line"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Installing ERPNext on Ubuntu requires preparing the system by installing
          required packages such as git, Python development tools, Redis, and MariaDB,
          setting up Node.js and Yarn for frontend dependencies, configuring MariaDB for
          utf8mb4 character set compatibility, and finally initializing the Frappe Bench
          environment with proper permissions. This sequence ensures a smooth install and
          operation of an ERPNext server.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="shell"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://github.com/frappe/bench#easy-install"
        referenceLinkText="Bench Easy Install - GitHub"
      />

      <CodeOverview
        whatItDoes="This snippet installs all necessary system dependencies, configures MariaDB with utf8mb4 charset,
        installs Node.js and Yarn, installs Frappe Bench via pip, and initializes a new Bench environment with
        selectable versions of ERPNext."
        whenToUse="Use this installation process when setting up a new Ubuntu server to host an ERPNext production or development
        environment with the Frappe framework."
        prerequisites={[
          "Ubuntu operating system with sudo privileges",
          "Basic familiarity with command line and package managers",
          "Internet connectivity to fetch packages and dependencies"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "Command line tool to manage Frappe apps, environment setup, and ERPNext installation.",
            relatedLink: "https://github.com/frappe/bench"
          },
          {
            title: "MariaDB Configuration",
            description: "Configuring Mariadb server to use utf8mb4 and collation compatible with Frappe.",
            relatedLink: "https://mariadb.com/kb/en/"
          },
          {
            title: "Node.js and Yarn",
            description: "Node.js runtime and Yarn package manager for compiling frontend assets in ERPNext.",
            relatedLink: "https://nodejs.org/en/"
          },
          {
            title: "Redis Server",
            description: "Redis is used as a cache and queue backend by Frappe and ERPNext.",
            relatedLink: "https://redis.io/docs/manual/"
          },
          {
            title: "Python Development",
            description: "Python3 and pip are essential for Frappe Bench installation and python environment management.",
            relatedLink: "https://www.python.org/doc/"
          },
          {
            title: "wkhtmltopdf",
            description: "Dependency needed for PDF generation in ERPNext.",
            relatedLink: "https://wkhtmltopdf.org/"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Update package lists and install system dependencies",
            explanation: "Updates apt package lists and installs necessary system-level dependencies like git, python3 packages, redis, and wkhtmltopdf.",
            code: `sudo apt update
sudo apt install git python3-dev python3-pip redis-server python3-venv software-properties-common xvfb libfontconfig wkhtmltopdf
sudo apt install curl`,
            language: "shell"
          },
          {
            stepNumber: 2,
            title: "Setup and install Node.js and Yarn",
            explanation: "Adds NodeSource repository and installs Node.js version 18, followed by installing yarn globally via npm.",
            code: `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm -g install yarn`,
            language: "shell"
          },
          {
            stepNumber: 3,
            title: "Configure MariaDB repository and install MariaDB",
            explanation: "Downloads and executes the official MariaDB repository setup script to install MariaDB server 10.6 and client.",
            code: `curl -LsS -O https://downloads.mariadb.com/MariaDB/mariadb_repo_setup
sudo bash mariadb_repo_setup --mariadb-server-version=10.6
sudo apt update
sudo apt install mariadb-server mariadb-client`,
            language: "shell"
          },
          {
            stepNumber: 4,
            title: "Secure MariaDB installation",
            explanation: "Runs mysql_secure_installation to improve MariaDB security by setting root password, removing anonymous users, and restrictions.",
            code: `sudo mysql_secure_installation`,
            language: "shell"
          },
          {
            stepNumber: 5,
            title: "Adjust MariaDB character set configuration for Frappe",
            explanation: "Edit /etc/mysql/my.cnf to set the character set to utf8mb4 to ensure correct encoding support for Frappe applications.",
            code: `# Add the following lines to /etc/mysql/my.cnf
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

[mysql]
default-character-set = utf8mb4`,
            language: "shell"
          },
          {
            stepNumber: 6,
            title: "Restart MariaDB service",
            explanation: "Apply the new database configuration by restarting the mysql service.",
            code: `sudo service mysql restart`,
            language: "shell"
          },
          {
            stepNumber: 7,
            title: "Install Frappe Bench via pip and initialize bench",
            explanation: "Install frappe-bench python package and initialize a new bench directory with a specified ERPNext version.",
            code: `sudo pip3 install frappe-bench
bench init --version version-13 frappe-bench
# or version-14 or version-15`,
            language: "shell"
          },
          {
            stepNumber: 8,
            title: "Adjust permissions on the bench folder",
            explanation: "Grant appropriate read and execute permissions to other users for the home directory of the user who owns the bench installation.",
            code: `sudo chmod -R o+rx /home/<user>`,
            language: "shell"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "MariaDB throws character set errors when Frappe starts",
            solution: "Ensure /etc/mysql/my.cnf contains the utf8mb4 settings and restart MariaDB service to apply. Check for typos in configuration."
          },
          {
            problem: "bench init command fails due to missing python dependencies",
            solution: "Verify you have python3-dev, python3-pip, and python3-venv installed. Run sudo apt install python3-dev python3-pip python3-venv."
          },
          {
            problem: "Redis server not running causing errors in bench",
            solution: "Check Redis service status and start it if not running: sudo systemctl status redis-server; sudo systemctl start redis-server."
          },
          {
            problem: "Node.js version conflict or missing yarn commands",
            solution: "Ensure Node.js version 18 is installed via Nodesource and yarn is installed globally with npm as shown in the installation steps."
          },
          {
            problem: "Permission denied on bench folder",
            solution: "Run sudo chmod -R o+rx /home/<user> to grant necessary execute permissions to users accessing the bench directory."
          }
        ]}
      />
    </main>
  );
}
