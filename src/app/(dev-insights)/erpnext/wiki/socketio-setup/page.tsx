import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";

export default function SocketioSetupPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Set Up Socket.IO for Real-Time Events in Frappe Framework?"
        description="Learn how to configure and enable Socket.IO in your Frappe/ERPNext instance using `bench setup socketio` to facilitate real-time communication and notifications."
        snippetName="Socketio Setup"
        language="bash"
        category="Frappe CLI"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "Setting up Socket.IO in the Frappe Framework is essential for enabling real-time features like live notifications, progress bars, and collaborative document editing. This process involves configuring Node.js, Socket.IO, and Redis, which are managed by the Bench CLI. The following commands handle the initial setup and ensure the necessary services are running correctly under Supervisor.",
          "While Bench automates much of this, understanding the components involved helps in troubleshooting. This setup is typically performed once during the initial server configuration or when real-time functionality is first introduced into an application."
        ]}
      />
      <CodeBlock
        code={`bench setup socketio
sudo supervisorctl restart node-socketio

sudo touch /tmp/supervisor.sock
sudo chmod 777 /tmp/supervisor.sock`}
        language="bash"
        showLineNumbers={false}
      />
      <CodeOverview
        whatItDoes="This set of commands configures and starts the Socket.IO service for a Frappe bench, enabling real-time communication between the server and connected clients."
        whenToUse="Use these commands during the initial setup of a Frappe/ERPNext production environment, or when you need to enable real-time features in an existing instance. It's also used when troubleshooting Socket.IO connection issues."
        prerequisites={[
          "A working Frappe bench",
          "Supervisor installed and configured for Frappe",
          "Root or sudo access to the server",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description:
              "Bench is the command-line interface for managing Frappe Framework sites. It automates tasks like installation, setup, updates, and process management. The `bench setup socketio` command specifically configures Nginx, Supervisor, and Redis for Socket.IO integration.",
            relatedLink:
              "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet",
          },
          {
            title: "Socket.IO",
            description:
              "Socket.IO is a library that enables real-time, bidirectional, and event-based communication between web clients and servers. In Frappe, it's used for features like live notifications, form updates, and background job progress indicators.",
            relatedLink: "https://socket.io/docs/v4/",
          },
          {
            title: "Supervisor",
            description:
              "Supervisor is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems. Frappe uses it to manage background workers, the scheduler, and the Node.js Socket.IO service, ensuring they are always running.",
            relatedLink: "http://supervisord.org/introduction.html",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Run the Bench Socket.IO Setup Command",
            explanation:
              "Navigate to your bench directory (e.g., `cd ~/frappe-bench`). This command automatically configures the necessary services like `node-socketio` and creates the required configuration files for Supervisor and Nginx.",
            code: `bench setup socketio`,
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Restart the Socket.IO Service",
            explanation:
              "After the setup is complete, you need to restart the `node-socketio` service using `supervisorctl`. This applies the new configuration and starts the service. The `sudo` prefix is required as Supervisor is typically run by the root user.",
            code: `sudo supervisorctl restart node-socketio`,
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "(Optional) Fix Supervisor Socket Permissions",
            explanation:
              "In some environments, particularly after a fresh Supervisor installation, the bench user might not have permission to communicate with the Supervisor daemon. These commands create the socket file and grant universal read/write/execute permissions to resolve potential `EACCES` errors. This is a common troubleshooting step.",
            code: `sudo touch /tmp/supervisor.sock\nsudo chmod 777 /tmp/supervisor.sock`,
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem:
              "I'm seeing 'Connection Refused' errors in the browser console for Socket.IO.",
            solution:
              "This often indicates that the `node-socketio` service is not running or is not accessible. Check its status with `sudo supervisorctl status node-socketio`. If it's stopped, try starting it with `sudo supervisorctl start node-socketio`. Also, ensure your Nginx configuration correctly proxies requests to the Socket.IO port (usually 9000).",
          },
          {
            problem:
              "When running `bench` commands that interact with Supervisor, I get an `EACCES` or 'permission denied' error related to a socket file.",
            solution:
              "This is a file permission issue with the Supervisor socket. Run `sudo touch /tmp/supervisor.sock` followed by `sudo chmod 777 /tmp/supervisor.sock` to ensure the current user can communicate with the Supervisor process.",
          },
          {
            problem: "The setup commands ran without error, but I'm still not receiving real-time notifications or updates.",
            solution: "First, verify that Redis is running (`sudo systemctl status redis-server`). Socket.IO relies on Redis for message queuing. Then, check the `socketio.log` file inside your bench's `logs` directory for any errors. You might also need to run `bench build` to ensure your frontend assets are up-to-date."
          }
        ]}
      />
    </main>
  );
}
