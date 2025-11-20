import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const IncreaseNumberOfWorkersPage = () => {
  const snippetName = "Increase Number of Particular worker";

  const codeSnippet = `step 1: go to .bench/bench/config/systemd.py

step 2: change function generate_systemd_config()
    for eg. we need to change number of short workers then change the range of for loop and give static number like 15 instead of number_of_workers

    // before 
	for i in range(number_of_workers):
		background_workers.append(get_bench_name(bench_path) + "-frappe-short-worker@" + str(i+1) + ".service")

    // after
    for i in range(15):
	    background_workers.append(get_bench_name(bench_path) + "-frappe-short-worker@" + str(i+1) + ".service")

step 3: go to .bench/bench/config/templates/supervisor.conf

step 4:change numprocs  = 15 in [program:{{ bench_name }}-frappe-short-worker]

    for eg.change numprocs = 15 instead of {{ background_workers }}
    
    //before
    numprocs={{ background_workers }}

    //after
    numprocs=15

step 5: bench setup systemd
    bench setup supervisor
    sudo supervisorctl reread
    sudo supervisorctl update
    sudo supervisorctl reload
`;

  return (
    <main>
      <CodeSnippetHero
        title="How to increase the number of particular Frappe short workers for better background processing?"
        description="This guide explains how to manually increase the number of specific Frappe short workers by modifying systemd and Supervisor configurations to enhance background job execution."
        snippetName={snippetName}
        language="Python / Shell"
        category="Frappe System Administration"
        accentColor="orange"
      />

      <section className="container-custom my-2">
        <h2 className="text-2xl font-semibold my-2">Introduction</h2>
        <p>
          Problem: Frappe's default number of short workers is dynamically set, but sometimes you
          need to increase the number of particular workers to handle more background jobs
          concurrently and improve performance.
          <br />
          Solution: This involves editing the <code>generate_systemd_config()</code> function in
          <code>.bench/bench/config/systemd.py</code> to set a fixed number of workers, updating
          the Supervisor configuration to reflect this change, and then applying these changes by
          reloading Supervisor and running bench commands.
          <br />Note: No official automated API exists to change worker counts; manual config edits are necessary.
        </p>
      </section>

      <CodeBlock
        code={codeSnippet}
        language="bash"
        allowCopy={true}
        showLineNumbers={true}
      />

      <CodeOverview
        whatItDoes="This snippet shows how to change the number of Frappe short workers by directly editing the systemd and supervisor configuration files, then reloading the supervisor service."
        whenToUse="Use this method when you need to increase or set a fixed number of background short worker processes for Frappe to scale task handling."
        prerequisites={[
          "Access to your Frappe bench environment",
          "Permission to edit systemd.py and supervisor.conf files",
          "Basic understanding of systemd and Supervisor service management"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Frappe Background Workers",
            description: "These workers handle asynchronous tasks such as email sending, data processing, and scheduled jobs in the Frappe framework.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/jobs"
          },
          {
            title: "Supervisor Process Control",
            description: "Supervisor is a process control system to manage and monitor background processes like Frappe workers.",
            relatedLink: "http://supervisord.org/configuration.html"
          },
          {
            title: "Systemd Service Configuration",
            description: "Systemd manages system services, and here it's configured to run multiple Frappe worker service instances.",
            relatedLink: "https://www.freedesktop.org/software/systemd/man/systemd.service.html"
          },
          {
            title: "bench CLI Commands",
            description: "Commands used to setup systemd and supervisor based on modified configurations.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Modify generate_systemd_config() in systemd.py",
            explanation: "Edit the function to set a static number of short workers rather than dynamically using number_of_workers. This fixes the number of systemd worker services to a desired static count (e.g., 15).",
            code: "for i in range(15):\n    background_workers.append(get_bench_name(bench_path) + \"-frappe-short-worker@\" + str(i+1) + \".service\")",
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Update supervisor.conf for short workers",
            explanation: "Modify the numprocs value in the supervisor configuration template to match the new static number of short workers. This ensures Supervisor launches the correct number of process instances.",
            code: "numprocs=15",
            language: "ini"
          },
          {
            stepNumber: 3,
            title: "Apply configuration changes",
            explanation: "Run bench setup commands and reload Supervisor so the system acknowledges new configurations and starts the increased number of workers.",
            code: `bench setup systemd
bench setup supervisor
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl reload`,
            language: "bash"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Changes to worker count not reflected after reload",
            solution: "Ensure that you ran all bench setup commands and Supervisor reload commands with sufficient permissions. Check supervisorctl for status and logs."
          },
          {
            problem: "Systemd services for workers not starting",
            solution: "Verify the systemd unit files are correctly generated after changes. Run 'systemctl daemon-reload' and 'systemctl restart' for the services if needed."
          },
          {
            problem: "Performance issues despite increasing workers",
            solution: "Investigate worker task backlog, hardware limits, and database performance. Increasing workers alone may not solve bottlenecks."
          }
        ]}
      />
    </main>
  );
};

export default IncreaseNumberOfWorkersPage;
