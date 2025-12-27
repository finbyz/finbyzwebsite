import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function DnsMultitenancyPage() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Set Up a New Site with DNS Multitenancy in Frappe Framework"
        description="A complete guide to adding a new site to your Frappe/ERPNext instance using DNS-based multitenancy, from enabling the configuration to deploying ERPNext."
        snippetName="DNS based Multitenancy (New Site)"
        language="bash"
        category="Frappe Framework"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
          "DNS-based multitenancy is a powerful feature of the Frappe Framework that allows you to host multiple, independent sites on a single server instance. Each site is accessed via its own domain name (e.g., `client-a.com`, `client-b.com`), while sharing the same underlying Frappe and ERPNext installation. This is the standard and most efficient way to manage multiple production sites.",
          "This guide provides the complete sequence of `bench` commands required to enable DNS multitenancy, create a new site, configure the web server (Nginx), and install applications like ERPNext onto the new site."
        ]}
      />
      <CodeBlock 
        code={`# Switch ON DNS Multitenant
bench config dns_multitenant on

# Create New Site (e.g., demo.yourcompany.com)
bench new-site demo.yourcompany.com

# Re-generate nginx config to include the new site
bench setup nginx

# Reload nginx to apply changes
sudo service nginx reload

# New site has only Frappe, Install ERPNext on the new site if required
bench --site demo.yourcompany.com install-app erpnext

# If the site was accidentally set up, use this to reinstall (Warning: Deletes data)
bench --site demo.yourcompany.com --force reinstall

# Enable the scheduler for background jobs on the new site
bench --site demo.yourcompany.com enable-scheduler

# For removing a site from multitenancy
bench drop-site demo.yourcompany.com`}
        language="bash"
        referenceLink="https://github.com/frappe/bench/wiki/Multitenant-Setup"
        referenceLinkText="Official Frappe Bench Wiki"
        showLineNumbers={false}
      />
      <CodeOverview 
        whatItDoes="This series of commands configures a Frappe Bench instance for DNS-based multitenancy and adds a new, production-ready site that is accessible via its domain name."
        whenToUse="Use these commands when you need to host multiple, separate Frappe or ERPNext instances on a single server, with each site accessible through a unique domain or subdomain."
        prerequisites={[
          "A working Frappe Bench installation on a server.",
          "DNS records for your new site domain pointing to the server's IP address.",
          "Root or sudo access to the server for managing Nginx."
        ]}
      />
      <KeyConcepts 
        concepts={[
          {
            title: "DNS Multitenancy",
            description: "This configuration in `common_site_config.json` tells the Frappe request handler to identify which site to serve based on the hostname in the incoming HTTP request. This is essential for production hosting of multiple sites.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/sites#multitenancy"
          },
          {
            title: "Bench CLI",
            description: "The `bench` command-line interface is the primary tool for managing a Frappe installation. It handles everything from creating sites and installing apps to managing server processes and running updates.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/resources/bench-commands-cheatsheet"
          },
          {
            title: "Nginx Configuration",
            description: "Frappe Bench automatically generates Nginx configuration files for each site. The `bench setup nginx` command creates the necessary server blocks to proxy requests to the correct Frappe process.",
            relatedLink: "https://frappeframework.com/docs/user/en/bench/guides/setting-up-production#setup-nginx"
          }
        ]}
      />
      <StepByStepTutorial 
        steps={[
          {
            stepNumber: 1,
            title: "Enable DNS Multitenancy",
            explanation: "This is the first and most crucial step. This command modifies the `common_site_config.json` file in your bench directory, adding the setting `\"dns_multitenant\": true`. This tells the bench to look at the domain name of a request to determine which site's database and assets to use.",
            code: "bench config dns_multitenant on",
            language: "bash"
          },
          {
            stepNumber: 2,
            title: "Create the New Site",
            explanation: "This command creates a new folder in the `sites` directory with the same name as your domain. It also creates a new database and a configuration file for the site. It is critical that the site name here exactly matches the domain you will use to access it.",
            code: "bench new-site your.domain.com",
            language: "bash"
          },
          {
            stepNumber: 3,
            title: "Update and Reload Web Server",
            explanation: "After creating the site, you need to update the Nginx configuration. `bench setup nginx` generates the required config file for your new site. `sudo service nginx reload` applies these new changes without dropping existing connections.",
            code: "bench setup nginx\nsudo service nginx reload",
            language: "bash"
          },
          {
            stepNumber: 4,
            title: "Install Applications",
            explanation: "A new site only contains the Frappe framework by default. To add functionality like ERPNext, you must explicitly install the app on the specific site using the `--site` flag.",
            code: "bench --site your.domain.com install-app erpnext",
            language: "bash"
          },
          {
            stepNumber: 5,
            title: "Enable Background Jobs",
            explanation: "The scheduler handles critical background tasks like sending emails, processing auto-repeating documents, and running scheduled reports. It must be enabled for each site to ensure full functionality.",
            code: "bench --site your.domain.com enable-scheduler",
            language: "bash"
          }
        ]}
      />
      <Troubleshooting 
        items={[
          {
            problem: "Getting a 404 or 'Site Not Found' Error",
            solution: "First, verify that the site folder name in your `sites` directory exactly matches the domain you are visiting. Second, ensure you have run `bench setup nginx` and reloaded Nginx. Finally, confirm your DNS records are correctly pointing to the server IP and have fully propagated."
          },
          {
            problem: "502 Bad Gateway Error After Creating a New Site",
            solution: "A 502 error often indicates a problem with the Frappe backend processes. Check the status of supervisor jobs with `supervisorctl status`. Ensure processes for the new site are running. You can also check the logs in `frappe-bench/logs` for specific Python errors."
          },
          {
            problem: "Command 'bench new-site' Fails with a Database Error",
            solution: "This usually happens if the database user doesn't have permission to create new databases, or if a database with the same name already exists. Check your MariaDB/Postgres user permissions. If you need to re-create a site, you must first drop it using `bench drop-site your.domain.com`."
          }
        ]}
      />
    </main>
  );
}
