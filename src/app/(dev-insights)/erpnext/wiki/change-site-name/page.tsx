import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const ChangeFrappeSiteNamePage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Rename a Frappe or ERPNext Site using Bench CLI"
        description="Learn the step-by-step process to safely change your Frappe or ERPNext site name (e.g., from site1.local) using essential Bench CLI commands like \`bench setup nginx\`."
        snippetName="Change Site Name"
        language="bash"
        category="Bench CLI"
        accentColor="orange"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "When managing a Frappe or ERPNext instance, a common administrative task is renaming a site. This is often necessary when moving from a development environment with a default name like \`site1.local\` to a production environment with a custom domain. The process involves more than just renaming a folder; it requires updating web server configurations and internal Frappe settings to ensure the site remains accessible and functional.",
          "This guide provides a comprehensive set of shell commands to perform this operation safely using the Bench Command Line Interface (CLI). Following these steps carefully will prevent common issues like '502 Bad Gateway' errors or scheduler failures."
        ]}
      />
      <CodeBlock
        code={`# Step 1: Rename the site's folder manually
# Replace 'oldname.local' and 'newname.com' with your actual site names.
mv /home/ubuntu/frappe-bench/sites/oldname.local /home/ubuntu/frappe-bench/sites/newname.com

# Step 2: Navigate back to the main bench directory
cd /home/ubuntu/frappe-bench/

# Step 3: Regenerate Nginx configuration for the new site name
bench setup nginx

# Step 4: Reload Nginx to apply the new configuration
sudo service nginx reload
# On systems using systemd, you might use:
# sudo systemctl restart nginx

# Step 5: Update the 'currentsite.txt' to point to the new site
# Open the file /home/ubuntu/frappe-bench/sites/currentsite.txt
# And change the content from 'oldname.local' to 'newname.com'

# Step 6: Re-enable the scheduler for the new site
bench --site newname.com enable-scheduler`}
        language="bash"
        showLineNumbers={true}
        allowCopy={true}
        referenceLink="https://discuss.erpnext.com/t/changing-site1-local-in-links-v8-54/27000/2"
        referenceLinkText="Original ERPNext Forum Discussion"
      />
      <CodeOverview
        whatItDoes="This series of commands renames a Frappe site's directory, regenerates the necessary Nginx web server configuration, updates the current site pointer, and restarts the scheduler to reflect the new site name."
        whenToUse="Use this procedure when you need to change the domain name of an existing Frappe or ERPNext site, for example, when moving from a default development name like \`site1.local\` to a custom production domain."
        prerequisites={[
          "Shell access (SSH) to the server hosting the Frappe instance.",
          "Sudo or root privileges for restarting services like Nginx.",
          "The Frappe Bench CLI must be installed and accessible in your server's PATH.",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "Bench CLI",
            description: "The Bench Command Line Interface is the primary tool for creating, managing, and updating Frappe and ERPNext sites. Commands like \`bench setup nginx\` and \`bench --site\` are essential for system administration.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet",
          },
          {
            title: "Site Naming & Resolution",
            description: "Frappe Framework uses a multi-tenant architecture where each site is represented by a folder inside the \`/sites\` directory. The folder name must match the domain name you intend to use for that site.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-multitenancy",
          },
          {
            title: "currentsite.txt",
            description: "This file, located in the \`/sites\` directory, tells Bench which site to use by default if the \`--site\` flag is not specified in a command. It must be updated manually after renaming a site.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setup-multitenancy#current-site",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Rename the Site Directory",
            explanation: "The first step is to rename the actual directory containing your site's data. Use the standard Linux \`mv\` command. Make sure you are in the parent directory of \`frappe-bench\` or provide the full paths.",
            code: "mv /home/ubuntu/frappe-bench/sites/site1.local /home/ubuntu/frappe-bench/sites/demo.finbyz.in",
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Regenerate Nginx Configuration",
            explanation: "Navigate to your \`frappe-bench\` directory. The \`bench setup nginx\` command will detect the change in the \`/sites\` directory and generate a new Nginx server block configuration for your new domain name.",
            code: "cd /home/ubuntu/frappe-bench/\nbench setup nginx",
            language: "bash",
          },
          {
            stepNumber: 3,
            title: "Apply the New Web Server Configuration",
            explanation: "For Nginx to recognize the new configuration, you must reload its service. This command applies the changes without dropping existing connections.",
            code: "sudo service nginx reload",
            language: "bash",
          },
          {
            stepNumber: 4,
            title: "Update the Default Site Pointer",
            explanation: "Edit the \`sites/currentsite.txt\` file and replace the old site name with the new one. This ensures that bench commands run without the \`--site\` flag target the correct, renamed site.",
            code: "# Open sites/currentsite.txt with a text editor (like nano or vim)\n# Change 'site1.local' to 'demo.finbyz.in' and save the file.",
            language: "bash",
          },
          {
            stepNumber: 5,
            title: "Re-enable the Scheduler",
            explanation: "The scheduler (which handles background jobs, emails, etc.) is tied to the site name. You must enable it for the new site name to ensure background processes continue to run correctly.",
            code: "bench --site demo.finbyz.in enable-scheduler",
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "Getting a 502 Bad Gateway error after renaming.",
            solution: "This usually indicates an issue with Nginx or the Frappe worker processes. Rerun \`bench setup nginx\` and \`sudo service nginx reload\`. Also, check the Nginx error logs (e.g., \`/var/log/nginx/error.log\`) for specific clues.",
          },
          {
            problem: "Scheduler jobs and background workers are not running.",
            solution: "This happens if the scheduler is not enabled for the new site name. Run \`bench --site your.new.site.name enable-scheduler\`. It's also good practice to have run \`bench --site your.old.site.name disable-scheduler\` before the rename process.",
          },
          {
            problem: "Bench commands are still trying to use the old site name.",
            solution: "This is almost always because the \`sites/currentsite.txt\` file was not updated. Double-check that this file contains only the new site name and has no extra spaces or lines.",
          },
        ]}
      />
    </main>
  );
};

export default ChangeFrappeSiteNamePage;
