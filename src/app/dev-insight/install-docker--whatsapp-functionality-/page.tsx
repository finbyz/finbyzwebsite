import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const codeSnippet = `sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
  
sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo docker run hello-world
pip install jsonpickle
pip install -r requirements/development.txt

docker network create selenium

docker run -d -p 4444:4444 -p 5900:5900 --name firefox --network selenium -v /dev/shm:/dev/shm selenium/standalone-firefox-debug:3.14.0-curium

docker build -t webwhatsapi .

docker run --network selenium -it -e SELENIUM='http://firefox:4444/wd/hub' -v $(pwd):/app  webwhatsapi /bin/bash -c "pip install ./;pip list;";
`;

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to install and configure Docker on Ubuntu for Whatsapp automation?"
        description="This snippet guides you through installing Docker on Ubuntu, setting up a Selenium network, and running WebWhatsAPI containers for Whatsapp integration."
        snippetName="Install Docker (Whatsapp Functionality)"
        language="bash"
        category="DevOps"
        accentColor="blue"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> Setting up a reliable Docker environment on Ubuntu to
          support Whatsapp automation requires installing Docker Engine correctly,
          configuring networked containers like Selenium for browser automation, and
          preparing the environment for running WebWhatsAPI. This involves multiple steps
          including installing dependencies, adding Docker repositories, and
          launching appropriate containers.
        </p>
        <p>
          <strong>Solution:</strong> The provided script automates these requirements by updating the
          package sources, installing Docker and its components, setting up a custom Docker
          network for Selenium, running a Firefox browser container, building the Whatsapp API
          image, and running it with necessary environment variables and volume mounts.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://docs.docker.com/engine/install/ubuntu/"
        referenceLinkText="Docker official installation guide for Ubuntu"
      />

      <CodeOverview
        whatItDoes="This script installs Docker Engine on Ubuntu, sets up a dedicated Docker network for Selenium browser automation, builds and runs WebWhatsAPI Docker containers, and installs required Python dependencies inside the containers."
        whenToUse="Use this process when you need to automate Whatsapp interactions using Selenium and WebWhatsAPI on an Ubuntu host with Docker containers."
        prerequisites={[
          "Ubuntu system with sudo privileges",
          "Internet access to download Docker packages",
          "Basic familiarity with Docker commands",
          "Python and pip installed inside containers or accessible via Dockerfile"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Docker Engine Installation",
            description:
              "Installing Docker CE (Community Edition) on Ubuntu involves setting up necessary repositories, adding Docker GPG key, and installing docker packages.",
            relatedLink: "https://docs.docker.com/engine/install/ubuntu/"
          },
          {
            title: "Docker Networking",
            description:
              "Creating a custom Docker network allows containers like Selenium Firefox and WebWhatsAPI to communicate seamlessly.",
            relatedLink: "https://docs.docker.com/network/"
          },
          {
            title: "Selenium Standalone Browser",
            description:
              "Using selenium/standalone-firefox-debug image provides a ready-to-use Firefox browser for automation testing.",
            relatedLink: "https://github.com/SeleniumHQ/docker-selenium"
          },
          {
            title: "Docker Build and Run",
            description:
              "Building custom Docker images and running containers with environment variables and volume mounts are essential to deploy custom apps like WebWhatsAPI.",
            relatedLink: "https://docs.docker.com/engine/reference/commandline/build/"
          },
          {
            title: "Python Dependency Management",
            description:
              "Installing python packages inside a container ensures all required libraries are available for the automation script.",
            relatedLink: "https://pip.pypa.io/en/stable/"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Update Package Database and Install Prerequisites",
            explanation:
              "Update apt package lists and install packages needed for Docker installation, such as curl, apt-transport-https, and software-properties-common.",
            code: `sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common`,
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Add Docker’s Official GPG Key",
            explanation:
              "Download and add Docker's official GPG key to ensure package authenticity.",
            code: `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88`,
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Set Up Docker Stable Repository",
            explanation:
              "Add Docker's stable apt repository for your Ubuntu version using lsb_release to automatically detect codename.",
            code: `sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"`,
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Install Docker Engine and Components",
            explanation:
              "Install docker-ce package, the CLI, and containerd runtime to enable running Docker containers.",
            code: `sudo apt-get install docker-ce docker-ce-cli containerd.io`,
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Verify Installation",
            explanation:
              "Run the hello-world container to confirm Docker is installed and running correctly.",
            code: `sudo docker run hello-world`,
            language: "bash"
          },
          {
            stepNumber: 6,
            title: "Install Python Dependencies",
            explanation:
              "Inside containers or the host, install python packages required for WebWhatsAPI functionality.",
            code: `pip install jsonpickle
pip install -r requirements/development.txt`,
            language: "bash"
          },
          {
            stepNumber: 7,
            title: "Create Custom Docker Network",
            explanation:
              "Create a Docker bridge network named 'selenium' to connect Selenium browser containers and other app containers.",
            code: `docker network create selenium`,
            language: "bash"
          },
          {
            stepNumber: 8,
            title: "Run Selenium Firefox Container",
            explanation:
              "Deploy a selenium/standalone-firefox-debug container attached to the selenium network exposing necessary ports for automation.",
            code: `docker run -d -p 4444:4444 -p 5900:5900 --name firefox --network selenium -v /dev/shm:/dev/shm selenium/standalone-firefox-debug:3.14.0-curium`,
            language: "bash"
          },
          {
            stepNumber: 9,
            title: "Build WebWhatsAPI Docker Image",
            explanation:
              "Build a Docker image named 'webwhatsapi' from the current directory containing the Whatsapp API automation code.",
            code: `docker build -t webwhatsapi .`,
            language: "bash"
          },
          {
            stepNumber: 10,
            title: "Run WebWhatsAPI Container Connected to Selenium",
            explanation:
              "Run the webwhatsapi container with environment variable to connect to selenium hub and volume mount to access code and install requirements.",
            code: `docker run --network selenium -it -e SELENIUM='http://firefox:4444/wd/hub' -v $(pwd):/app  webwhatsapi /bin/bash -c \"pip install ./;pip list;\";`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Docker command not found after installation",
            solution: "Ensure the Docker service is running and your user has permission to run Docker commands, or try using 'sudo'."
          },
          {
            problem: "Cannot connect to Selenium hub from WebWhatsAPI container",
            solution: "Verify both containers are on the same Docker network and the SELENIUM environment variable points to the correct hub URL."
          },
          {
            problem: "Docker build fails due to missing Dockerfile or context",
            solution: "Confirm you are in the correct directory with a valid Dockerfile before running 'docker build'."
          },
          {
            problem: "Port conflicts when running Selenium container",
            solution: "Check if ports 4444 or 5900 are already in use and stop conflicting services or change port mappings."
          }
        ]}
      />
    </main>
  );
}
