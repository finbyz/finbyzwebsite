import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function EnableSchedulerPage() {
    return (
        <main>
            <CodeSnippetHero 
                title="How to Enable or Disable the Background Job Scheduler in Frappe/ERPNext"
                description="A guide to using the 'bench enable-scheduler' and 'bench disable-scheduler' CLI commands to control background job processing for your Frappe or ERPNext sites."
                snippetName="Enable/Disable Scheduler"
                language="bash"
                category="Frappe CLI"
                accentColor="blue"
            />
            <CodeSnippetInstroduction 
                paragraphs={[
                    "The Frappe Framework relies on a scheduler to run background jobs, such as sending scheduled emails, running automated reports, and processing workflows. At times, you may need to stop the scheduler for maintenance, debugging, or to prevent jobs from running on a development or staging site. The `bench` command-line interface provides a simple way to toggle the scheduler on and off for any specific site."
                ]}
            />
            <CodeBlock 
                code={`//Enable-Disable Scheduler
bench --site site1.local enable-scheduler
bench --site site1.local disable-scheduler`}
                language="bash"
                fileName="Terminal"
                showLineNumbers={false}
                allowCopy={true}
            />
            <CodeOverview 
                whatItDoes="These commands either enable or disable the Frappe scheduler for a specified site. Enabling the scheduler allows background workers to pick up and execute scheduled jobs, while disabling it prevents any new jobs from being run."
                whenToUse="Use these commands during system maintenance, before restoring a database backup, or on development/staging sites where you want to prevent automated tasks (like sending emails to real customers) from executing."
                prerequisites={[
                    "Access to the server terminal where your Frappe bench is installed.",
                    "Sudo or bench user permissions to execute bench commands."
                ]}
            />
            <KeyConcepts 
                concepts={[
                    {
                        title: "Bench CLI",
                        description: "The 'bench' command-line interface is the primary tool for managing Frappe Framework installations, including sites, apps, and system processes like the scheduler and workers.",
                        relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet"
                    },
                    {
                        title: "Frappe Scheduler",
                        description: "The scheduler is a crucial component responsible for queuing and executing background jobs at specified intervals. It handles recurring tasks defined in hooks.py or through the 'Scheduled Job Type' DocType.",
                        relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/scheduled_job_type"
                    },
                    {
                        title: "Site-Specific Configuration",
                        description: "The '--site' flag allows you to target a specific site within your bench. This is essential in a multi-tenant environment, ensuring you only affect the intended site's scheduler.",
                        relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-multitenancy"
                    }
                ]}
            />
            <StepByStepTutorial 
                steps={[
                    {
                        stepNumber: 1,
                        title: "Connect to Your Server Terminal",
                        explanation: "First, you need to establish an SSH connection to the server where your Frappe bench is located. You'll need the server's IP address and your login credentials.",
                        code: `ssh your_user@your_server_ip`,
                        language: "bash"
                    },
                    {
                        stepNumber: 2,
                        title: "Navigate to the Bench Directory",
                        explanation: "Change your current directory to the root of your bench installation. This is typically named 'frappe-bench'.",
                        code: `cd ~/frappe-bench`,
                        language: "bash"
                    },
                    {
                        stepNumber: 3,
                        title: "Disable the Scheduler",
                        explanation: "To stop the scheduler for a specific site, use the 'disable-scheduler' command. Replace 'site1.local' with the name of your target site.",
                        code: `bench --site site1.local disable-scheduler`,
                        language: "bash"
                    },
                    {
                        stepNumber: 4,
                        title: "Enable the Scheduler",
                        explanation: "Once your maintenance is complete, you can re-enable the scheduler using the 'enable-scheduler' command. This will allow background jobs to resume processing.",
                        code: `bench --site site1.local enable-scheduler`,
                        language: "bash"
                    }
                ]}
            />
            <Troubleshooting 
                items={[
                    {
                        problem: "The terminal returns an error like 'bench: command not found'.",
                        solution: "This usually means you are not in the 'frappe-bench' directory or the bench environment is not activated. Ensure you have navigated to the correct directory ('cd ~/frappe-bench'). If you are using a virtual environment, you may need to activate it first ('source env/bin/activate')."
                    },
                    {
                        problem: "After disabling the scheduler, some jobs still appear to be running.",
                        solution: "The 'disable-scheduler' command prevents *new* jobs from being queued. Jobs that were already in the queue or being processed by a worker might complete. To stop all processes, you may need to also run 'bench restart' to restart the worker processes."
                    },
                    {
                        problem: "You receive a 'Permission Denied' error when running the command.",
                        solution: "Ensure you are running the command as the correct user (typically 'frappe'). If you are logged in as a different user, you might need to use 'sudo -u frappe bench --site ...' to execute the command with the appropriate permissions."
                    }
                ]}
            />
        </main>
    )
}