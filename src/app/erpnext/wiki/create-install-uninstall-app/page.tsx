import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeSnippetIntroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const Page = () => {
    return (
        <main>
            <CodeSnippetHero
                title="How to Create, Install, and Uninstall Apps in Frappe?"
                description="Master the essential Bench CLI commands to create new custom apps, install them on your sites, and remove them safely when no longer needed."
                snippetName="Create & Install App"
                language="Bash"
                category="Bench CLI"
                accentColor="blue"
            />
            <CodeSnippetIntroduction
                paragraphs={[
                    "In the Frappe ecosystem, 'Apps' are the building blocks of functionality. Whether you are building a completely new product or extending ERPNext, you will invariably need to create an app to house your code.",
                    "Unlike standard Python packages, Frappe apps are managed via the 'bench' command-line tool, which handles scaffolding, installation on specific sites (tenants), and uninstallation. Understanding this lifecycle is critical for any Frappe developer."
                ]}
            />
            <CodeBlock
                code={`# 1. Create a new app
bench new-app my_custom_app

# 2. Install the app on a specific site
bench --site site_name install-app my_custom_app

# 3. Uninstall the app from a site
bench --site site_name uninstall-app my_custom_app`}
                language="bash"
                referenceLink="https://frappeframework.com/docs/user/en/bench"
                referenceLinkText="View Bench Commands Documentation"
            />
            <CodeOverview
                whatItDoes="These commands allow you to manage the full lifecycle of a Frappe application. 'new-app' generates the folder structure and boilerplate code. 'install-app' runs the database migrations to create DocTypes and tables for the site. 'uninstall-app' removes the app's tables and data from the site."
                whenToUse="Use these commands when starting a new project, deploying a custom module to a particular site, or cleaning up unused apps to free up resources."
                prerequisites={[
                    "A running Bench instance.",
                    "Access to the terminal/command line.",
                    "A valid site created (e.g., via 'bench new-site')."
                ]}
            />
            <KeyConcepts
                concepts={[
                    {
                        title: "Bench CLI",
                        description: "Bench is the command-line utility used to manage Frappe deployments. It handles everything from creating sites and apps to updating the system and running maintenance tasks.",
                        relatedLink: "https://frappeframework.com/docs/user/en/bench"
                    },
                    {
                        title: "Sites (Multi-tenancy)",
                        description: "Frappe supports multi-tenancy, meaning a single codebase (bench) can serve multiple websites (sites). Apps must be explicitly installed on each site where they are needed.",
                        relatedLink: "https://frappeframework.com/docs/user/en/basics/sites"
                    },
                    {
                        title: "App boilerplate",
                        description: "When you run 'bench new-app', Frappe automatically creates a standard directory structure including setups for modules, hooks, public assets, and tests, ensuring best practices are followed from the start.",
                        relatedLink: "https://frappeframework.com/docs/user/en/tutorial/new-app"
                    }
                ]}
            />
            <StepByStepTutorial
                steps={[
                    {
                        stepNumber: 1,
                        title: "Create the App",
                        explanation: "Run the 'new-app' command. You will be prompted for details like the App Title and Description. This command creates a new folder in the 'apps' directory.",
                        code: "bench new-app library_management",
                        language: "bash"
                    },
                    {
                        stepNumber: 2,
                        title: "Install App on Site",
                        explanation: "Creating the app downloads the code, but doesn't activate it for any site. To use the app, install it on your target site. This process creates the necessary database tables.",
                        code: "bench --site my.site.name install-app library_management",
                        language: "bash"
                    },
                    {
                        stepNumber: 3,
                        title: "Verify Installation",
                        explanation: "You can verify that the app is installed by checking the 'site_config.json' or simply listing the installed apps for the site.",
                        code: "bench --site my.site.name list-apps",
                        language: "bash"
                    },
                    {
                        stepNumber: 4,
                        title: "Uninstall App (If needed)",
                        explanation: "If you need to remove the app and its data from a specific site, use the 'uninstall-app' command. WARNING: This will delete all data related to that app from the site's database.",
                        code: "bench --site my.site.name uninstall-app library_management",
                        language: "bash"
                    }
                ]}
            />
            <Troubleshooting
                items={[
                    {
                        problem: "Error: 'App <name> already exists'",
                        solution: "You cannot create an app with a name that already exists in the 'apps' folder. Choose a unique name or delete the existing folder if it was created in error."
                    },
                    {
                        problem: "Error: 'Site <name> does not exist'",
                        solution: "Ensure you are typing the site name exactly as it appears in the 'sites' folder. Run 'bench ls' inside the sites directory to see available sites."
                    },
                    {
                        problem: "Uninstall failed due to dependencies",
                        solution: "If other installed apps depend on the app you are trying to uninstall, Bench will prevent the action. You must uninstall the dependent apps first."
                    }
                ]}
            />
        </main>
    );
};

export default Page;
