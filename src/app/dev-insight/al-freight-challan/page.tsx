"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function ALFreightChallan() {
  const codeSnippet = `<style>
tr.spacing > td
{
  padding-bottom: 0!important;
  padding-top: 0!important;
  height: 23px;
}

</style>

{%- macro add_header(doc, letter_head, no_letterhead) -%}
    {% if letter_head and not no_letterhead %}
    <div class=\"letter-head\">{{ letter_head }}</div>
	{% else %}
		<div> </br></br></br> </div>
	{% endif %}
	<div id=\"footer-html\" class=\"visible-pdf\">
	{% if not no_letterhead and footer %}
		<div class=\"letter-head-footer\">
			{{ footer }}
		</div>
	{% endif %}
	</div>
{%- endmacro -%}

{{ add_header(doc,letter_head, no_letterhead) }}


<div style=\"position: relative; width: 100%; height: 100%;\">
{%- for row in doc.items -%}
{%-if loop.first -%}
<table border=\"0\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\">
	<tbody>
		<tr>
			<td width=\"50%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 95%; display: table;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">Lorry Challan No. :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black;text-align:center;\">{{ doc.name }} </span>
				</p>
			</td>
			<td width=\"50%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 95%; display: table; float:right;\">
					<span style=\"display: table-cell;width:1px;white-space:nowrap;\">Date :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black;text-align:center;\"> {{ doc.get_formatted(\"transaction_date\") }} </span>
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"50%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 95%; display: table;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">From : </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\">{{ row.from or '' }} </span>
				</p>
			</td>
			<td width=\"50%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 95%; display: table; float:right;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">To :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\">{{ row.to or '' }} </span>
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"50%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 95%; display: table;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">Lorry No. :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\"> {{ row.truck_no or '' }} </span>
				</p>
			</td>
			<td width=\"50%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 95%; display: table;float:right;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">L. R. No. :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\"> {{ row.lr_no or '' }} </span>
				</p>
			</td>
		</tr>
	</tbody>
</table>
<table border=\"0\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\">
	<tbody>
		<tr>
			<td width=\"33%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 97%; display: table;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">Rate  :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\"> {{ row.get_formatted(\"rate\", doc) or ''}}  </span>
				</p>
			</td>
			<td width=\"34%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 97%; display: table;float:center;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">QTY :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\"> {{ row.qty }} {{ row.uom or row.stock_uom }} </span>
				</p>
			</td>
			<td width=\"33%\" colspan=\"2\" valign=\"top\">
				<p style=\"width: 97%; display: table;float:right;\">
					<span style=\"display: table-cell; width:1px;white-space:nowrap;\">Freight :  </span>
					<span style=\"display: table-cell; border-bottom: 1px solid black; text-align:center;\"> {{ row.get_formatted(\"amount\", doc) or ''}}  </span>
				</p>
			</td>
		</tr>
	</tbody>
</table>
{%-endif-%}
{% endfor %}
<br><br>
<div align=\"center\">
	<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">
		<tbody>
			<tr>
				<td width=\"13%\" valign=\"top\">
					<p align=\"center\">
						<strong>Date</strong>
					</p>
				</td>
				<td width=\"19%\" valign=\"top\">
					<p align=\"center\">
						<strong>Pyt Type</strong>
					</p>
				</td>
				<td width=\"43%\" valign=\"top\">
					<p align=\"center\">
						<strong>Payment Details</strong>
					</p>
				</td>
				<td width=\"23%\" valign=\"top\">
					<p align=\"center\">
						<strong>Amount</strong>
					</p>
				</td>
			</tr>
			{%- for row in doc.payments -%}
			<tr class=\"spacing\">
				<td width=\"13%\" valign=\"top\">
					<p align=\"center\"> 
						<strong>{{ row.get_formatted(\"reference_date\") }}</strong>
					</p>
				</td>
				<td width=\"19%\" valign=\"top\">
					<p align=\"center\">
						<strong>{{ row.mode_of_payment or '' }}</strong>
					</p>
				</td>
				<td width=\"43%\" valign=\"top\"> 
					<p align=\"center\">
						<strong>{{ row.reference_no or '' }}</strong>
					</p>
				</td>
				<td width=\"23%\" valign=\"top\"> 
					<p align=\"right\">
						<strong>{{ row.get_formatted(\"paid_amount\", doc) or ''}} </strong>
					</p>
				</td>
			</tr>

			{% endfor %}
			<tr class=\"spacing\">
				<td width=\"13%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"19%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"43%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"23%\" valign=\"top\">
					<p align=\"right\">
						<strong></strong>
					</p>
				</td>
			</tr>
			<tr class=\"spacing\">
				<td width=\"13%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"19%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"43%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"23%\" valign=\"top\">
					<p align=\"right\">
						<strong></strong>
					</p>
				</td>
			</tr>
			<tr class=\"spacing\">
				<td width=\"13%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"19%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"43%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"23%\" valign=\"top\">
					<p align=\"right\">
						<strong></strong>
					</p>
				</td>
			</tr>
			<tr class=\"spacing\">
				<td width=\"13%\" valign=\"top\">
					<p align=\"center\">
						<strong>Total</strong>
					</p>
				</td>
				<td width=\"19%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"43%\" valign=\"top\">
					<p align=\"center\">
						<strong></strong>
					</p>
				</td>
				<td width=\"23%\" valign=\"top\">
					<p align=\"right\">
						<strong>{{ doc.get_formatted(\"advance_paid\", doc) or ''}}</strong>
					</p>
				</td>
			</tr>
			
		</tbody>
	</table>
</div>
<br>
<br>
<br>
<br>
<table border=\"0\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\">
	<tbody>
		<tr>
			<td width=\"50%\" valign=\"top\">
				<p style=\"width: 99%; display: table;\">
					<span style=\"display: table-cell;width:1px;\">.</span>
					<span style=\"display: table-cell; border-bottom: 1px solid black;text-align:center;\"></span>
				</p>
			</td>
			<td width=\"50%\" valign=\"top\">
				<p style=\"width: 99%; display: table; float:right;\">
					<span style=\"display: table-cell;width:1px;white-space:nowrap;text-align:right;\">For, {{doc.company }} </span>
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"50%\" valign=\"top\">
				<p style=\"width: 99%; display: table;\">
					<span style=\"display: table-cell;width:1px;white-space:nowrap;\">Signature of Driver/ Transporter</span>
				</p>
			</td>
			<td width=\"50%\" valign=\"top\">
			</td>
		</tr>
	</tbody>
</table>

</div>`;

  return (
    <>
      <CodeSnippetHero
        title="How to create a detailed AL Freight Challan print format using HTML templates?"
        description="This snippet provides a comprehensive HTML template for generating a professional AL Freight Challan. It simplifies transport documentation by dynamically rendering freight details, payments, and freight charges for print format customization."
        snippetName="AL Freight Challan"
        language="HTML"
        category="Print Format"
        accentColor="orange"
      />

      <main>
        <section className="container-custom py-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-base leading-relaxed">
            The <strong>AL Freight Challan</strong> print format snippet is a specialized HTML template designed for generating detailed freight
            challans. It is primarily used in logistics and transportation to document freight details such as challan numbers, date, origin, destination,
            lorry details, rates, quantities, freight charges, and payment information. This snippet uses macros and templating logic for dynamic
            rendering within a framework like Frappe, making it flexible and customizable for different business needs.
          </p>
        </section>

        <CodeOverview
          whatItDoes="Creates a structured, printable HTML freight challan document with dynamic content including headers, tables for freight items, rates, quantities, and payment details."
          whenToUse="Use this template when you need a formal freight challan document as part of transport or delivery documentation that can be printed or converted to PDF."
          prerequisites={[
            "Basic understanding of HTML and CSS.",
            "Familiarity with templating languages similar to Jinja or Jinja-like syntax.",
            "Data source like 'doc' object containing freight details to be rendered dynamically."
          ]}
        />

        <KeyConcepts
          concepts={[
            {
              title: "Macro Usage",
              description:
                "Defines reusable code blocks to generate headers conditionally based on presence of letterhead and footer.",
              relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/#macros"
            },
            {
              title: "Dynamic Data Binding",
              description:
                "Uses templating to insert freight details dynamically such as challan number, dates, transport details, and payment info.",
              relatedLink: "https://docs.frappeframework.com/user/en/python/jinja"
            },
            {
              title: "Table Structures for Print",
              description:
                "Structured tables with inline CSS ensure print-friendly formatting and clarity in the challan representation.",
              relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
            },
            {
              title: "Conditional Rendering",
              description:
                "Conditional logic provides fallback content or formatting depending on data availability like letterhead or payment rows.",
              relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/#if"
            }
          ]}
        />

        <StepByStepTutorial
          steps={[
            {
              stepNumber: 1,
              title: "Header Setup",
              explanation: "Create a macro that adds a letterhead and footer if specified, else fallback spacing.",
              code: `{%- macro add_header(doc, letter_head, no_letterhead) -%}
  {% if letter_head and not no_letterhead %}
  <div class=\"letter-head\">{{ letter_head }}</div>
  {% else %}
  <div> </br></br></br> </div>
  {% endif %}
  <div id=\"footer-html\" class=\"visible-pdf\">
  {% if not no_letterhead and footer %}
  <div class=\"letter-head-footer\">{{ footer }}</div>
  {% endif %}
  </div>
{%- endmacro -%}

{{ add_header(doc,letter_head, no_letterhead) }}`,
              language: "HTML"
            },
            {
              stepNumber: 2,
              title: "Main Freight Table",
              explanation: "Dynamically loop through freight items to display lorry details, rates, quantities, and freight amounts in tabular format.",
              code: `<table border=\"0\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\">
<tbody>
<tr>
<td>Lorry Challan No. : {{ doc.name }}</td>
<td>Date : {{ doc.get_formatted(\"transaction_date\") }}</td>
</tr>
<tr>
<td>From : {{ row.from or '' }}</td>
<td>To : {{ row.to or '' }}</td>
</tr>
<tr>
<td>Lorry No. : {{ row.truck_no or '' }}</td>
<td>L.R. No. : {{ row.lr_no or '' }}</td>
</tr>
</tbody>
</table>`,
              language: "HTML"
            },
            {
              stepNumber: 3,
              title: "Rates and Quantities",
              explanation: "Create a second table row to display Rate, Quantity with unit, and Freight amount for each freight entry.",
              code: `<table border=\"0\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\">
<tbody>
<tr>
<td>Rate : {{ row.get_formatted(\"rate\", doc) or '' }}</td>
<td>QTY : {{ row.qty }} {{ row.uom or row.stock_uom }}</td>
<td>Freight : {{ row.get_formatted(\"amount\", doc) or '' }}</td>
</tr>
</tbody>
</table>`,
              language: "HTML"
            },
            {
              stepNumber: 4,
              title: "Payment Details Table",
              explanation: "List payment entries in a bordered table with columns for Date, Payment Type, Payment Details, and Amount.",
              code: `<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">
<thead>
<tr>
<th>Date</th>
<th>Pyt Type</th>
<th>Payment Details</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
{% for row in doc.payments %}
<tr class=\"spacing\">
<td>{{ row.get_formatted(\"reference_date\") }}</td>
<td>{{ row.mode_of_payment or '' }}</td>
<td>{{ row.reference_no or '' }}</td>
<td>{{ row.get_formatted(\"paid_amount\", doc) or '' }}</td>
</tr>
{% endfor %}
<tr>
<td colspan=\"3\">Total</td>
<td>{{ doc.get_formatted(\"advance_paid\", doc) or '' }}</td>
</tr>
</tbody>
</table>`,
              language: "HTML"
            },
            {
              stepNumber: 5,
              title: "Footer and Signature",
              explanation: "Add signature section with company name aligned right and driver signature left aligned.",
              code: `<table border=\"0\" cellspacing=\"0\" cellpadding=\"2\" width=\"100%\">
<tbody>
<tr>
<td>Signature of Driver/ Transporter</td>
<td style=\"text-align:right;\">For, {{ doc.company }}</td>
</tr>
</tbody>
</table>`,
              language: "HTML"
            }
          ]}
        />

        <Troubleshooting
          items={[
            {
              problem: "Letterhead does not display correctly",
              solution:
                "Ensure that 'letter_head' and 'no_letterhead' variables are set properly in the context. Check that you are not overriding 'no_letterhead' unintentionally."
            },
            {
              problem: "Payment section shows no entries",
              solution: "Verify that 'doc.payments' array is correctly populated with payment data before rendering."
            },
            {
              problem: "Table alignment issues in PDF output",
              solution: "Adjust CSS or inline styles for table cell padding and borders; check the PDF generator's support for CSS."
            }
          ]}
        />

        <section className="container-custom py-8">
          <h2 className="text-2xl font-semibold mb-4">Complete AL Freight Challan HTML Template Code</h2>
          <CodeBlock
            code={codeSnippet}
            language="html"
            showLineNumbers
            allowCopy
          />
        </section>
      </main>
    </>
  );
}
