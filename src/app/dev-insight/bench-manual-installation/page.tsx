import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import React from "react";

const codeSnippet = `# install pip
sudo apt-get install python3-pip -y
sudo apt install python3.8-venv

# installing frappe-bench 
sudo pip install frappe-bench

# Install Dependencies
sudo apt install git python-dev redis-server software-properties-common xvfb libfontconfig wkhtmltopdf -y

# Install mariadb
sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
sudo add-apt-repository 'deb [arch=amd64,arm64] http://mariadb.mirror.globo.tech/repo/10.5/ubuntu focal main'
sudo apt update
sudo apt install mariadb-server mariadb-client -y
sudo mysql_secure_installation
sudo apt-get install libmysqlclient-dev -y
sudo nano /etc/mysql/my.cnf
# Add this line at end
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

[mysql]
default-character-set = utf8mb4
# run this command
sudo service mysql restart

# Install nodejs via npm and install yarn
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# close terminal
nvm install 14
npm install -g yarn

# init bench instance
bench init --frappe-branch version-13 frappe-bench
cd frappe-bench
sudo bench setup production user

# Install Postgres 14
sudo sh -c 'echo "deb [arch=amd64] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql

sudo -u postgres psql
ALTER USER postgres PASSWORD 'myPassword';
\q

sudo nano /etc/postgresql/14/main/pg_hba.conf
# convert  this
local   all             postgres                                peer
# to
local   all             postgres                                md5
# add bellow
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5

exit

# run this command
sudo systemctl restart postgresql
sudo systemctl enable postgresql
`;

export default function BenchManualInstallation() {
  return (
    <>
      <CodeSnippetHero
        title="How to manually install and configure Frappe Bench on Ubuntu?"
        description="This guide helps you install and set up the Frappe Bench environment on Ubuntu, including dependencies, databases, and Node.js setup."
        snippetName="bench manual installation"
        language="bash"
        category="Frappe Backend"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Setting up a Frappe Bench environment from scratch on an Ubuntu system can be complex,
          requiring installation of multiple dependencies, databases (MariaDB and PostgreSQL), and environment tools.
          
          <br />
          <br />
          <strong>Solution:</strong> This step-by-step installation script guides through installing required system packages,
          setting up MariaDB and PostgreSQL with proper character encoding and authentication,
          installing Node.js and yarn for Frappe frontend assets, and initializing a Frappe Bench instance.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
      />

      <CodeOverview
        whatItDoes="Installs system dependencies, MariaDB and PostgreSQL with UTF8mb4 character set, sets up environment tools like Node.js and yarn, installs frappe-bench via pip, and initializes a Frappe Bench instance with production setup."
        whenToUse="Use when setting up a new Ubuntu server to host a Frappe/ERPNext production deployment requiring manual control over all installation steps."
        prerequisites={[
          "Ubuntu server with sudo privileges",
          "Internet connection for downloading packages",
          "Basic Linux terminal knowledge"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe Bench",
            description: "Bench is a command-line tool to manage Frappe apps' environment, including setup, start, and deployment.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench"
          },
          {
            title: "MariaDB Configuration",
            description: "MariaDB is configured with utf8mb4 charset and collation to fully support emoji and multibyte characters.",
            relatedLink: "https://mariadb.com/kb/en/character-sets-and-collations/"
          },
          {
            title: "PostgreSQL Authentication",
            description: "Auth methods for PostgreSQL user changed to md5 to allow password-based authentication.",
            relatedLink: "https://www.postgresql.org/docs/current/auth-password.html"
          },
          {
            title: "Node Version Manager (nvm)",
            description: "NVM allows managing multiple Node.js versions in a single environment, used here to install Node.js 14.",
            relatedLink: "https://github.com/nvm-sh/nvm"
          },
          {
            title: "Wkhtmltopdf",
            description: "Utility to render HTML to PDF, required by Frappe for report generation.",
            relatedLink: "https://wkhtmltopdf.org/"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Install Python and pip",
            explanation: "Install python3-pip and python virtual environment to prepare for installing Frappe Bench.",
            code: "sudo apt-get install python3-pip -y\nsudo apt install python3.8-venv",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Install frappe-bench via pip",
            explanation: "Use pip to install the bench CLI globally to manage Frappe environments.",
            code: "sudo pip install frappe-bench",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Install required system dependencies",
            explanation: "Install packages like git, redis, wkhtmltopdf, and others needed for Frappe to run correctly.",
            code: "sudo apt install git python-dev redis-server software-properties-common xvfb libfontconfig wkhtmltopdf -y",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Install and configure MariaDB",
            explanation: "Add MariaDB repo, install it, run security script, and configure charset in my.cnf file.",
            code: `sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'\nsudo add-apt-repository 'deb [arch=amd64,arm64] http://mariadb.mirror.globo.tech/repo/10.5/ubuntu focal main'\nsudo apt update\nsudo apt install mariadb-server mariadb-client -y\nsudo mysql_secure_installation\nsudo apt-get install libmysqlclient-dev -y\nsudo nano /etc/mysql/my.cnf\n# Add these lines:\n[mysqld]\ncharacter-set-client-handshake = FALSE\ncharacter-set-server = utf8mb4\ncollation-server = utf8mb4_unicode_ci\n[mysql]\ndefault-character-set = utf8mb4\nsudo service mysql restart`,
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Install Node.js and Yarn",
            explanation: "Use nvm script to install Node.js version 14 and then install yarn globally.",
            code: `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install 14\nnpm install -g yarn`,
            language: "bash"
          },
          {
            stepNumber: 6,
            title: "Initialize Frappe Bench and setup production",
            explanation: "Create a Frappe Bench instance for version 13 branch and configure it for production.",
            code: `bench init --frappe-branch version-13 frappe-bench\ncd frappe-bench\nsudo bench setup production user`,
            language: "bash"
          },
          {
            stepNumber: 7,
            title: "Install and configure PostgreSQL 14",
            explanation: "Add PostgreSQL repository, install, change postgres user password, and modify authentication methods in pg_hba.conf.",
            code: `sudo sh -c 'echo "deb [arch=amd64] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'\nwget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\nsudo apt-get update\nsudo apt-get -y install postgresql\nsudo -u postgres psql\nALTER USER postgres PASSWORD 'myPassword';\n\q\nsudo nano /etc/postgresql/14/main/pg_hba.conf\n# Change\nlocal   all             postgres                                peer\n# to\nlocal   all             postgres                                md5\n# Add\nhost    all             all             127.0.0.1/32            md5\nhost    all             all             ::1/128                 md5\nsudo systemctl restart postgresql\nsudo systemctl enable postgresql`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "MariaDB throws character set errors or encoding issues.",
            solution: "Ensure the my.cnf file contains utf8mb4 charset configuration and restart MariaDB service."
          },
          {
            problem: "PostgreSQL refuses password authentication with 'peer' method.",
            solution: "Update pg_hba.conf to use 'md5' authentication for local and host connections, then restart PostgreSQL."
          },
          {
            problem: "bench command not found after installation.",
            solution: "Make sure that pip installed frappe-bench globally and your PATH includes the location of bench binary."
          },
          {
            problem: "Node.js or yarn commands fail or are missing.",
            solution: "Make sure nvm installation script ran successfully, then close and reopen terminal before installing node and yarn."
          }
        ]}
      />
    </>
  );
}
