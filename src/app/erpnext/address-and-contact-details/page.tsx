import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeSnippetInstroduction from "@/components/code-snippets/code-introduction";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function Page() {
  return (
    <main>
      <CodeSnippetHero
        title="How to Fetch Comprehensive Party Details with a Server Script in Frappe"
        description="Learn to create a whitelisted Python server script in Frappe to fetch comprehensive party details, including default addresses and contacts for Customers or Suppliers."
        snippetName="Address and Contact Details"
        language="Python"
        category="Frappe Server Script"
        accentColor="blue"
      />
      <CodeSnippetInstroduction
        paragraphs={[
          "In Frappe and ERPNext development, a common requirement is to fetch a complete set of information for a party like a Customer or Supplier in a single, efficient server call. This often includes not just the main document's fields but also linked information like the default billing address and primary contact person's details.",
          "This server script provides a robust, reusable, and permission-aware API endpoint to accomplish this. It consolidates data from multiple DocTypes (Customer, Supplier, Address, Contact) into one structured response, making it easy for client scripts or other backend services to consume.",
        ]}
      />
      <CodeBlock
        code={`# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt

from __future__ import unicode_literals

import frappe
from frappe import _
from frappe.contacts.doctype.address.address import get_address_display, get_default_address
from frappe.contacts.doctype.contact.contact import get_contact_details, get_default_contact


@frappe.whitelist()
def get_party_details(party=None, party_type="Customer", ignore_permissions=False):

	if not party:
		return {}

	if not frappe.db.exists(party_type, party):
		frappe.throw(_("{0}: {1} does not exists").format(party_type, party))

	return _get_party_details(party, party_type, ignore_permissions)

def _get_party_details(party=None, party_type="Customer", ignore_permissions=False):

	out = frappe._dict({
		party_type.lower(): party
	})

	party = out[party_type.lower()]

	if not ignore_permissions and not frappe.has_permission(party_type, "read", party):
		frappe.throw(_("Not permitted for {0}").format(party), frappe.PermissionError)

	party = frappe.get_doc(party_type, party)
	
	set_address_details(out, party, party_type)
	set_contact_details(out, party, party_type)
	set_other_values(out, party, party_type)

	return out

def set_address_details(out, party, party_type):
	billing_address_field = "customer_address" if party_type == "Lead" \
		else party_type.lower() + "_address"
	out[billing_address_field] = get_default_address(party_type, party.name)
	
	# address display
	out.address_display = get_address_display(out[billing_address_field])

def set_contact_details(out, party, party_type):
	out.contact_person = get_default_contact(party_type, party.name)

	if not out.contact_person:
		out.update({
			"contact_person": None,
			"contact_display": None,
			"contact_email": None,
			"contact_mobile": None,
			"contact_phone": None,
			"contact_designation": None,
			"contact_department": None
		})
	else:
		out.update(get_contact_details(out.contact_person))

def set_other_values(out, party, party_type):
	# copy
	if party_type=="Customer":
		to_copy = ["customer_name", "customer_group", "territory", "language"]
	else:
		to_copy = ["supplier_name", "supplier_type", "language"]
	for f in to_copy:
		out[f] = party.get(f)`}
        language="python"
        fileName="party_utils.py"
      />
      <CodeOverview
        whatItDoes="Exposes a whitelisted API endpoint that fetches and consolidates key details for a specified party (e.g., Customer, Supplier), including their default address and contact information."
        whenToUse="Use this server script when you need to retrieve a party's complete details from a client script without making multiple database calls. It's ideal for populating forms or custom UIs with related party data."
        prerequisites={[
          "A working Frappe/ERPNext instance.",
          "Basic understanding of Frappe Server Scripts and DocTypes.",
        ]}
      />
      <KeyConcepts
        concepts={[
          {
            title: "@frappe.whitelist()",
            description: "A decorator that exposes a Python function to the client-side. This allows it to be called from JavaScript using `frappe.call`, effectively creating a secure API endpoint.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/server-side-scripting#whitelisted-functions",
          },
          {
            title: "frappe.get_doc()",
            description: "A core Frappe API method used to load a full document (a record of a DocType) into memory as a document object. This provides access to all its fields and methods.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/document-api#frappeget_doc",
          },
          {
            title: "frappe.has_permission()",
            description: "Checks if the currently logged-in user has the specified permissions (e.g., 'read', 'write') for a given document. This is crucial for enforcing security rules in your custom APIs.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/permission-api#frappehass_permission",
          },
          {
            title: "get_default_address / get_default_contact",
            description: "Standard Frappe utility functions that query the system to find the address or contact that has been marked as the default for a specific party DocType.",
            relatedLink: "https://frappeframework.com/docs/user/en/basics/doctypes/address",
          },
        ]}
      />
      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Create the Python File",
            explanation: "Create a new Python file within your custom Frappe app. A good practice is to place utility scripts in a dedicated folder. For example, `my_app/my_app/utils/party.py`.",
            code: "# In your custom app, create a file like:
# my_app/my_app/utils/party.py

# Paste the entire code snippet into this file.",
            language: "bash",
          },
          {
            stepNumber: 2,
            title: "Import the Function in `__init__.py`",
            explanation: "To make the function easily importable, add it to the `__init__.py` file in the same directory.",
            code: "# In my_app/my_app/utils/__init__.py

from .party import get_party_details",
            language: "python",
          },
          {
            stepNumber: 3,
            title: "Call the Method from a Client Script",
            explanation: "You can now call this whitelisted method from any Client Script using `frappe.call`. This example shows how to fetch details for a specific customer when a field changes.",
            code: `// Example: Custom Client Script for Sales Order
frappe.ui.form.on('Sales Order', {
    customer: function(frm) {
        if (frm.doc.customer) {
            frappe.call({
                method: 'my_app.my_app.utils.party.get_party_details',
                args: {
                    party: frm.doc.customer,
                    party_type: 'Customer'
                },
                callback: function(r) {
                    if (r.message) {
                        console.log(r.message);
                        frm.set_value('delivery_address', r.message.customer_address);
                        frm.set_value('contact_person', r.message.contact_person);
                        frm.refresh_fields();
                    }
                }
            });
        }
    }
});`,
            language: "javascript",
          },
          {
            stepNumber: 4,
            title: "Test the API Endpoint",
            explanation: "After saving your scripts, run `bench migrate` and `bench restart`. Then, trigger the client script in the UI (e.g., by changing the Customer in a Sales Order) and check the browser's console and the form fields to see the fetched data.",
            code: "bench migrate
bench restart",
            language: "bash",
          },
        ]}
      />
      <Troubleshooting
        items={[
          {
            problem: "ModuleNotFoundError: No module named 'my_app.my_app.utils.party'",
            solution: "This error occurs if the import path in your `frappe.call` is incorrect. Ensure the path matches the exact location of your Python file, starting from the app's root directory.",
          },
          {
            problem: "PermissionError: Not permitted for Customer...",
            solution: "The user performing the action does not have 'read' permissions for the specified Customer. Go to 'Role Permissions Manager' in ERPNext and ensure the user's roles have read access to the Customer DocType.",
          },
          {
            problem: "The address or contact fields are not being populated.",
            solution: "This usually means that no default address or contact has been set for the party. Open the Customer or Supplier document and ensure that in their address and contact lists, one entry is marked as the default (e.g., 'Is Default Billing Address').",
          },
        ]}
      />
    </main>
  );
}
