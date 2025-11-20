import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function Page() {
  const snippetName = "NodejsSocketio Error (502 bad gateway)";
  const codeSnippet = `[program:frappe-bench-node-socketio]
command=/usr/bin/node /home/ubuntu/frappe-bench/apps/frappe/socketio.js
priority=4
autostart=true
autorestart=true
stdout_logfile=/home/ubuntu/frappe-bench/logs/node-socketio.log
stderr_logfile=/home/ubuntu/frappe-bench/logs/node-socketio.error.log
user=ubuntu
directory=/home/ubuntu/frappe-bench

# Commands to apply after updating supervisor config
bench setup supervisor
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl reload
sudo supervisorctl restart all
`;

  return (
    <>
      <CodeSnippetHero
        title="How to fix Node.js Socket.io 502 Bad Gateway error in Frappe Bench?"
        description="When running Frappe/ERPNext sites, a 502 Bad Gateway error can occur if the Node.js socketio service isn't running. This snippet shows how to configure Supervisor to run socketio.js properly and restart services to fix the error."
        snippetName={snippetName}
        language="Shell"
        category="Frappe Server Setup"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          <strong>Problem:</strong> The 502 Bad Gateway error usually arises when the Node.js socketio service responsible for real-time communication in Frappe is not running or managed improperly.
          <br />
          <strong>Solution:</strong> This snippet demonstrates how to add a Supervisor program entry for the Node.js socketio service, configure it to start automatically, and reload Supervisor so it manages this service properly.
          <br />
          This ensures stable socketio connectivity resolving the 502 error.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="Shell"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://discuss.erpnext.com/t/socket-io-connection-refused/82957/9"
        referenceLinkText="ERPNext Forum: Socket.io Connection Refused"
      />

      <CodeOverview
        whatItDoes="Adds a Supervisor configuration to run socketio.js Node.js server under the frappe-bench environment, guaranteeing it starts automatically and restarts on failures. Also includes commands to reload and restart Supervisor so the changes take effect."
        whenToUse="Use this configuration when your Frappe/ERPNext site shows a 502 Bad Gateway error, indicating that the socketio real-time service is not running."
        prerequisites={[
          "Frappe Bench installed and set up",
          "Supervisor service installed and running",
          "Basic knowledge of Linux command line and service management"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Supervisor Configuration",
            description: "Supervisor is a process control system to manage background processes. Here it runs and auto-restarts the Node.js socketio server.",
            relatedLink: "http://supervisord.org/configuration.html"
          },
          {
            title: "Socket.io in Frappe",
            description: "Socket.io enables realtime functionality like updates and notifications in Frappe/ERPNext sites.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/socketio"
          },
          {
            title: "bench setup supervisor",
            description: "Command to generate Supervisor config files for all Frappe processes, including the new socketio program.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/reference/commands#bench-setup-supervisor"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Add Node.js socketio program to Supervisor config",
            explanation: "Define a new Supervisor program section [program:frappe-bench-node-socketio] that runs the Node.js socketio script with autostart and autorestart enabled to maintain the service.",
            code: `[program:frappe-bench-node-socketio]
command=/usr/bin/node /home/ubuntu/frappe-bench/apps/frappe/socketio.js
priority=4
autostart=true
autorestart=true
stdout_logfile=/home/ubuntu/frappe-bench/logs/node-socketio.log
stderr_logfile=/home/ubuntu/frappe-bench/logs/node-socketio.error.log
user=ubuntu
directory=/home/ubuntu/frappe-bench` ,
            language: "ini"
          },
          {
            stepNumber: 2,
            title: "Set up supervisor and reload configuration",
            explanation: "Run bench setup supervisor to regenerate configs, then reload Supervisor for it to recognize the new node-socketio program, and finally restart all supervisor-managed services.",
            code: `bench setup supervisor
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl reload
sudo supervisorctl restart all`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "502 Bad Gateway error persists after setup",
            solution: "Check node-socketio logs at /home/ubuntu/frappe-bench/logs/node-socketio.error.log for error details, confirm the socketio.js file exists, and that supervisor services have proper permissions. Restart supervisor if needed."
          },
          {
            problem: "Supervisor does not start socketio program",
            solution: "Ensure the program section is correctly added to supervisor.conf, run sudo supervisorctl reread and update commands, and verify there are no syntax errors in the config file."
          }
        ]}
      />
    </>
  );
}
