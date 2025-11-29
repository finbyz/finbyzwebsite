import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const FetchUserDetailsFrappePage = () => {
  return (
    <main>
      <CodeSnippetHero
        title="How to Fetch User Details like Name, Role, and Designation in Frappe"
        description="Learn to retrieve user information in Frappe server scripts using frappe.db.get_value and frappe.get_roles. Covers session user, specific users, and related DocType fields."
        snippetName="Fetch User Name and Role"
        language="Python"
        category="Frappe Server Scripting"
        accentColor="blue"
      />
      <CodeSnippetInstroduction 
        paragraphs={[
            "In Frappe and ERPNext development, accessing user information is a fundamental requirement for customizing business logic, managing permissions, and creating personalized user experiences. Whether you need to know who is performing an action, what their roles are, or retrieve details from their Employee profile, Frappe provides a straightforward API. This guide breaks down the essential methods for fetching various user details in your server-side scripts."
        ]}
      />
      <CodeBlock
        code={`
# 1. Get the full name of the currently logged-in user
session_user_fullname = frappe.db.get_value("User", {"name": frappe.session.user}, "full_name")

# 2. Get the roles of the currently logged-in user
session_user_roles = frappe.get_roles(frappe.session.user)

# 3. Get the full name of a specific user (e.g., a user with the name 'manager@example.com')
manager_name = frappe.db.get_value("User", {"name": "manager@example.com"}, "full_name")

# 4. Get the associated Employee ID for the current user
# This assumes a link between the User and Employee DocTypes via the 'user_id' field in Employee
employee_id = frappe.db.get_value("Employee", {"user_id": frappe.session.user}, "name")

# 5. Get the designation of the user who last modified the current document ('doc')
# Useful in server scripts triggered on document events (e.g., on_update)
if doc.modified_by:
    modifier_designation = frappe.db.get_value("Employee", {"user_id": doc.modified_by}, "designation")

`}
        language="python"
        showLineNumbers={true}
        allowCopy={true}
      />
      <CodeOverview
        whatItDoes="This collection of snippets demonstrates various methods to retrieve user-specific data such as full name, roles, and related Employee details within a Frappe server-side script."
        whenToUse="Use these methods in Server Scripts, Python hooks (e.g., 'on_update', 'validate'), or custom API endpoints whenever you need to access information about the current user or other users in the system."
        prerequisites={["Basic understanding of Frappe Server Scripts.", "Familiarity with the User and Employee DocType structures."]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "frappe.session.user",
            description: "A global variable in Frappe that holds the 'name' (typically the email address) of the user who is currently logged in and making the request. It is the primary identifier for the session user.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/frappe-sessions"
          },
          {
            title: "frappe.db.get_value",
            description: "An efficient database API method to fetch a single field value from a specific DocType. It takes the DocType name, a dictionary of filters, and the field name you want to retrieve as arguments.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/database#frappedbget_value"
          },
          {
            title: "frappe.get_roles",
            description: "A utility function that returns a list of all roles assigned to a specified user. If no user is provided, it defaults to the current session user.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/users#frappeget_roles"
          }
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Fetch the Current User's Full Name",
            explanation: "This is the most common use case. We use `frappe.session.user` to identify the current user and pass it as a filter to `frappe.db.get_value` to retrieve the 'full_name' field from their User document.",
            code: `current_user_name = frappe.db.get_value("User", {"name": frappe.session.user}, "full_name")\nfrappe.msgprint(f"Hello, {current_user_name}")`,
            language: "python"
          },
          {
            stepNumber: 2,
            title: "Retrieve the Current User's Roles",
            explanation: "The `frappe.get_roles` function directly returns a Python list of all roles assigned to the user specified. This is useful for implementing role-based logic in your scripts.",
            code: `user_roles = frappe.get_roles(frappe.session.user)\nif "System Manager" in user_roles:\n    # Execute logic for System Managers\n    pass`,
            language: "python"
          },
          {
            stepNumber: 3,
            title: "Get Information from a Linked DocType",
            explanation: "Often, user details are stored in the Employee DocType, which is linked to the User DocType. To fetch a field like 'designation', you must query the 'Employee' DocType, filtering by the 'user_id' field.",
            code: `designation = frappe.db.get_value("Employee", {"user_id": frappe.session.user}, "designation")`,
            language: "python"
          },
          {
            stepNumber: 4,
            title: "Fetch Details of Another User",
            explanation: "You can fetch data for any user, not just the session user. In this example, we fetch the designation of the user who last modified the current document (`doc`), which is available in document-triggered server scripts.",
            code: `# This code runs inside a script triggered by a document event\nlast_modifier = doc.modified_by\nmodifier_designation = frappe.db.get_value("Employee", { "user_id": last_modifier }, "designation")`,
            language: "python"
          }
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "The `frappe.db.get_value` call returns `None`.",
            solution: "This happens when no document matches your filters. Verify that the DocType name is correct, the filter dictionary keys (e.g., 'user_id') are valid field names, and a record actually exists with the values you are providing."
          },
          {
            problem: "Getting a `DoesNotExistError`.",
            solution: "This error indicates that the DocType you are trying to query (e.g., 'User' or 'Employee') does not exist in the system. Check for typos in the DocType name."
          },
          {
            problem: "How to handle cases where an Employee record may not exist for a User?",
            solution: "Always check if the value returned from `frappe.db.get_value` is not `None` before you try to use it. This prevents errors in subsequent code if a User does not have a corresponding Employee document."
          }
        ]}
      />
    </main>
  );
};

export default FetchUserDetailsFrappePage;
