"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function OutstandingInvoicesPage() {
  const codeSnippet =
`Dear {{ doc.contact_display or 'Sir' }},
<br><br>
Thank you for your business. Please have Sales Invoice {{ doc.name }} as attached.
<br><br>
{% if frappe.get_list("Sales Invoice", 
	fields=["name","posting_date","customer","rounded_total","outstanding_amount"],
	filters={ "docstatus":1, "customer":doc.customer, "outstanding_amount":(">",0),"name":("!=",doc.name), "naming_series":("not in",('SINV-MAC-','OMSINV-'))})
%}
Now including this we have below outstanding invoices for {{ doc.customer }}.<br>

<div align="center">
	<table border="1" cellspacing="0" cellpadding="0" width="100%">
		<tbody>
			<tr>
				<td width="18%" valign="top">
					<p align="center">
						<strong>Invoice</strong>
					</p>
				</td>
				<td width="12%" valign="top">
					<p align="center">
						<strong>Date</strong>
					</p>
				</td>
				<td width="37%" valign="top">
					<p align="center">
						<strong>Customer</strong>
					</p>
				</td>
				<td width="13%" valign="top">
					<p align="center">
						<strong>Invoice Amt</strong>
					</p>
				</td>
				<td width="18%" valign="top">
					<p align="center">
						<strong>Outstanding Amt</strong>
					</p>
				</td>
			</tr>
			
			{%- set outstanding_invoice = frappe.get_list("Sales Invoice", 
				fields=["name","posting_date","customer","rounded_total","outstanding_amount"],
				filters={ "docstatus":1, "customer":doc.customer, "outstanding_amount":(">",0),"naming_series":("not in",('SINV-MAC-','OMSINV-'))})
			-%}
			{%- for row in outstanding_invoice -%}
			
			<tr>
				<td width="18%" valign="top">
					<p align="center">
						{{ row.name }}
					</p>
				</td>
				<td width="12%" valign="top">
					<p align="center">
						{{ row.posting_date.strftime("%d-%m-%Y") }}
					</p>
				</td>
				<td width="37%" valign="top">
					<p align="center">
						{{ row.customer }}
					</p>
				</td>
				<td width="13%" valign="top">
					<p align="right">
						Rs. {{ row.rounded_total }}
					</p>
				</td>
				<td width="18%" valign="top">
					<p align="right">
						 Rs. {{ row.outstanding_amount}}</strong>
					</p>
				</td>
			</tr>
			{% endfor %}
			<tr>
				<td width="68%" colspan="3" valign="top">
					<p align="center">
						<strong>Total Outstanding</strong>
					</p>
				</td>
				<td width="13%" valign="top">
					<p align="right">
						<strong></strong>
					</p>
				</td>
				<td width="18%" valign="top">
					<p align="right">
						<strong>Rs. {{ outstanding_invoice|sum(attribute='outstanding_amount') }}</strong>
					</p>
				</td>
			</tr>			
		</tbody>
	</table>
</div>
<br>
Request you to process the payment at earliest.
<br><br>
If you have already made payment of any of above invoices please revert with payment details, and accept our gratitude.
<br>
{% endif %}
<br>
Accounts Department<br>
Email: sarika@teamspm.com<br>
<strong>{{ doc.company }}</strong>`;

  return (
    <main>
      <CodeSnippetHero
        title="How to Send Automated Outstanding Invoices Email Alert?"
        description="This HTML snippet helps send detailed sales invoice reminders with outstanding amounts to customers, improving your collections process."
        snippetName="Outstanding Invoices"
        language="HTML"
        category="Email Alert"
        accentColor="orange"
      />

      <section className="container-custom my-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed text-gray-700">
          This code snippet is a Jinja and HTML-based email alert template designed to notify customers about their current sales invoice along with a table
          of all other outstanding invoices. It leverages the Frappe Framework's get_list API to dynamically fetch unpaid invoices for the customer while excluding
          certain naming series invoices for clarity.
          <br />
          <br />
          Such email alerts help automate payment reminders, reducing manual follow-ups and improving cash flow management in ERP and accounting workflows.
          The table shows invoice numbers, posting dates, customer names, invoice amounts, and outstanding amounts, concluding with a sum total for easy review.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Generates an automatically composed email alert listing the current invoice and any other outstanding invoices for the customer, including totals."
        whenToUse="Use when you want to send customers detailed reminders of unpaid invoices including the current one, to prompt timely payments."
        prerequisites={[
          "Frappe framework environment with Sales Invoice DocType",
          "Knowledge of Jinja templating",
          "Customers with outstanding invoices needing reminder emails"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Jinja Template Syntax",
            description: "Used for conditional rendering, loops, and variable interpolation in email content.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/"
          },
          {
            title: "frappe.get_list API",
            description: "Fetches Sales Invoice documents dynamically filtered by customer and outstanding amount.",
            relatedLink: "https://frappeframework.com/docs/user/en/api/frappe/model/db_query#get-list"
          },
          {
            title: "Email Alert Automation",
            description: "Automates sending customers status updates and payment reminders.",
            relatedLink: "https://frappeframework.com/docs/user/en/alerts/email-alerts"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Basic Greeting and Invoice Mention",
            explanation: "Start the email by addressing the customer politely and mentioning the current sales invoice that is attached.",
            code: `Dear {{ doc.contact_display or 'Sir' }},\n<br><br>\nThank you for your business. Please have Sales Invoice {{ doc.name }} as attached.`,
            language: "HTML"
          },
          {
            stepNumber: 2,
            title: "Check for Other Outstanding Invoices",
            explanation: "Use a conditional statement with frappe.get_list to fetch other unpaid invoices for the same customer excluding the current one and specific naming series.",
            code: `{% if frappe.get_list(\"Sales Invoice\",\n\tfields=[\"name\",\"posting_date\",\"customer\",\"rounded_total\",\"outstanding_amount\"],\n\tfilters={ \"docstatus\":1, \"customer\":doc.customer, \"outstanding_amount\":(\">\",0),\"name\":(\"!=\",doc.name), \"naming_series\":(\"not in\",('SINV-MAC-','OMSINV-'))}) %}`,
            language: "HTML"
          },
          {
            stepNumber: 3,
            title: "Render Outstanding Invoices Table",
            explanation: "Within the conditional, generate an HTML table dynamically listing each outstanding invoice with relevant details and a final total.",
            code: `\n<div align=\"center\">\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\n\t\tbody>\n\t\t\t<tr>...\n{%- for row in outstanding_invoice -%}...{% endfor %}\n\t\t</tbody>\n\t</table>\n</div>\n`,
            language: "HTML"
          },
          {
            stepNumber: 4,
            title: "Closing Remarks and Contact Info",
            explanation: "End the email by courteously requesting payment and providing contact details for queries.",
            code: `Request you to process the payment at earliest.<br><br>If you have already made payment of any of above invoices please revert with payment details.<br><br>Accounts Department<br>Email: sarika@teamspm.com<br><strong>{{ doc.company }}</strong>`,
            language: "HTML"
          }
        ]}
      />

      <CodeBlock
        code={codeSnippet}
        language="html"
        fileName="outstanding_invoices_email.html"
        showLineNumbers={true}
        allowCopy={true}
      />

      <Troubleshooting
        items={[
          {
            problem: "Outstanding invoices not showing in the email",
            solution: "Ensure the sales invoices have docstatus = 1, outstanding_amount > 0, and naming_series is not in excluded list. Confirm frappe.get_list fetch is correctly configured."
          },
          {
            problem: "Email is not rendering Jinja variables correctly",
            solution: "Verify the email alert is set up in a Frappe environment that supports Jinja templating and variables like 'doc' are passed correctly."
          },
          {
            problem: "Formatting issues in email client",
            solution: "Use inline CSS or table-based layout as in this snippet, and avoid unsupported styling for better email client compatibility."
          }
        ]}
      />
    </main>
  );
}
