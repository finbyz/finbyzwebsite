"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const GiplExportInvoicePage: React.FC = () => {
  const snippetName = "GIPL Export Invoice";
  const language = "HTML";
  const category = "Print Format";
  const accentColor = "blue";

  const description =
    "This snippet provides a comprehensive HTML print format template for export invoices with dynamic data rendering, designed to generate customized export documentation in ERP systems using templating syntax.";

  const codeSnippet = `<style>
.print-format {
margin-top: 0mm!important;
margin-bottom: 0mm!important;
margin-left: 0mm!important;
margin-right: 0mm!important;
}
table {
	cellpadding:0!important;
	border-collapse: collapse;
    border-spacing: 00!important;
}
tr { 
    padding: 0!important;border-spacing: 0!important;
}
td.non {
    border-top: 1; border-bottom: 0!important;border-right: 0!important;border-left: 0!important; padding: 0!important; margin:0!important; border-spacing: 0!important; height: 0!important;
}

td.topbottom {
    border-top: 0; border-bottom: 0; 
}
td.top {
    border-top: 0; 
}
td.bottom {
    border-bottom: 0!important; padding: 0!important; margin:0!important; border-spacing: 0!important; height: 0!important;
}
td {
    padding: 0!important; margin:0!important; border-spacing:0!important;
}
th {
    padding: 0!important;
}
p {
	padding: 0; margin:0; margin-bottom:-1; margin-top:-1; font-size:12px; font-family: Cambria, \"Hoefler Text\", \"Liberation Serif\", Times, \"Times New Roman\", serif; line-height:100%;
}

</style>
<div id=\"header-html\" class=\"hidden-pdf\">
	{% if letter_head and not no_letterhead %}
		<div class=\"letter-head\">{{ letter_head }}</div>
	{% else %}
		<div> </br></br></br> </div>
	{% endif %}
</div>

<div id=\"footer-html\" class=\"visible-pdf\">
	{% if not no_letterhead and footer %}
		<div class=\"letter-head-footer\">
			{{ footer }}
		</div>
	{% endif %}
</div>

<p align=\"center\">
	<strong>EXPORT INVOICE</strong>
	<strong></strong>
</p>
<table border=\"1\" padding=\"0\" margin=\"0\" cellspacing=\"0\" cellpadding=\"0\" border-spacing=\"0\">
	<tbody>
		<tr>
			<td width=\"346\" colspan=\"4\" rowspan=\"3\" valign=\"top\">
				<p>
					<strong>Consignor</strong>
				</p>
				<p>
					<strong>{{ doc.company }}</strong>
				</p>
				<p>
					Plot No.123, Road No.6,
				</p>
				<p>
					Phase-I,G.I.D.C., Kathwada,
				</p>
				<p>
					Ahmedabad-382430, Gujarat (India)
				</p>
				<p>
					Ph. No.+91-79-29708677
				</p>
			</td>
			<td width=\"192\" colspan=\"3\" valign=\"top\">
				<p>
					<strong>Invoice No. &amp; Date</strong>
				</p>
				<p>
					{{ doc.name }}  dt:{{ doc.get_formatted(\"posting_date\") }}<strong></strong>
				</p>
			</td>
			<td width=\"171\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Exporter's Ref. No.</strong>
				</p>
				<p>
					{{ doc.company_iec or '' }}
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"363\" colspan=\"5\" valign=\"top\">
				<p>
					<strong>Buyer's Order No. &amp; Date</strong>
				</p>
				<p>
					{{ doc.po_no or ''}}  dt:{{ doc.get_formatted(\"po_date\") or '' }}
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"192\" colspan=\"3\" valign=\"top\">
				<p>
					<strong>Country of Final Destination</strong>
				</p>
				<p>
					{{ doc.country_of_destination or '' }}<strong></strong>
				</p>
			</td>
			<td width=\"171\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Country of Origin</strong>
				</p>
				<p>
					{{ doc.country_of_origin or '' }}<strong></strong>
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"346\" colspan=\"4\" valign=\"top\">
				<p>
					<strong>Consignee</strong>
				</p>
				<p>
					<strong>{{ doc.consignee_name }}</strong>
				</p>
				<p>
					{{ doc.shipping_address or '' }}
				</p>
			</td>
			<td width=\"363\" colspan=\"5\" valign=\"top\">
				<p>
					<strong>Buyer (if other than consignee)</strong>
				</p>
				{%- if doc.customer_address != doc.shipping_address_name -%}
				<p>
                    <strong>{{ doc.customer_name or ''}}</strong>
                </p>
				<p>
					{{ doc.address_display or '' }}
				</p>
				{%- endif -%}
			</td>
		</tr>
		<tr>
			<td width=\"185\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Place of Receipt (Pre-carrier)</strong>
				</p>
				<p>
					{{ doc.place_of_precarrier or '' }}
				</p>
			</td>
			<td width=\"161\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Port of Loading</strong>
				</p>
				<p>
					{{ doc.port_of_loading or ''}}
				</p>
			</td>
			<td width=\"182\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Port of Discharge</strong>
				</p>
				<p>
					{{ doc.port_of_discharge or '' }}
				</p>
			</td>
			<td width=\"181\" colspan=\"3\" valign=\"top\">
				<p>
					<strong>Final Place of Delivery</strong>
				</p>
				<p>
					{{ doc.country_of_destination or '' }}
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"185\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Shipper Bottle Seal No</strong>
				</p>
				</p>
				{%- for row in doc.container_details -%}
				<p>
					{{ row.bottle_seal_no }}
				</p>
				{% endfor %}
			</td>
			<td width=\"161\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Container No.</strong>
				</p>
				{%- for row in doc.container_details -%}
				<p>
					{{ row.container_no }}
				</p>
				{% endfor %}
			</td>
			<td width=\"182\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Pre-Carriage by</strong>
					<br/>
					{{ doc.pre_carriage_by or '' }}
				</p>
			</td>
			<td width=\"181\" colspan=\"3\" valign=\"top\">
				<p>
					<strong>Number of Containers</strong>
				</p>
				<p>
					{{ doc.number_of_containers or '' }} x {{ doc.container_size or '' }}
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"185\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Vessel / Flight No.</strong>
				</p>
				<p>
					{{ doc.vessel_no or '' }}
				</p>
			</td>
			<td width=\"161\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Shipping Line Seal No</strong>
				</p>
				{%- for row in doc.container_details -%}
				<p>
					{{ row.line_seal_no }}
				</p>
				{% endfor %}
			</td>
			<td width=\"363\" colspan=\"5\" rowspan=\"2\" valign=\"top\">
				<p>
					<strong>Terms of Delivery &amp; Payment</strong>
				</p>
				<p>
					{{ doc.payment_terms or '' }}
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"185\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Net WT</strong>
				</p>
				<p>
					{{ doc.total_nt_wt or '' }} Kgs
				</p>
			</td>
			<td width=\"161\" colspan=\"2\" valign=\"top\">
				<p>
					<strong>Gross WT</strong>
				</p>
				<p>
					{{ doc.total_gr_wt or '' }} Kgs
				</p>
			</td>
		</tr>
		
		<tr>
			<td width=\"220\" colspan=\"3\" valign=\"top\">
				<p align=\"center\">
					<strong>MARKS</strong>
				</p>
				<p align=\"center\">
					LINEAR LOW DENSITY POLYETHYLENE POWDER (LLDPE)
				</p>
			</td>
			<td width=\"242\" colspan=\"2\" valign=\"top\">
				<p align=\"center\">
					<strong>DESCRIPTION OF GOODS</strong>
				</p>
				
				<p align=\"center\">
					H.S.Code : {%- for row in doc.items -%}<strong>{{ row.hs_code or '' }}  </strong>{% endfor %}
				</p>
				
				<p align=\"center\">
					DBKSr.No.390199(B) It is under MEIS
				</p>
			</td>
			<td width=\"247\" colspan=\"4\" valign=\"top\">
				<p align=\"center\">
					<strong>BAG SIZE</strong>
				</p>
				{%- for row in doc.items -%}
				<p align=\"center\">
					{{ row.packed_in or '' }}
				</p>
				<p align=\"center\">
					{{ row.packaging_material or '' }}
				</p>
				{% endfor %}
			</td>
		</tr>
		<tr>
			<td width=\"462\" colspan=\"5\" valign=\"top\">
				<p align=\"center\">
					<strong>Description of Goods</strong>
				</p>
			</td>
			<td width=\"77\" colspan=\"2\" valign=\"top\">
				<p align=\"center\">
					<strong>Quantity</strong>
				</p>
			</td>
			<td width=\"80\" valign=\"top\">
				<p align=\"center\">
					<strong>Rate</strong>
				</p>
			</td>
			<td width=\"91\" valign=\"top\">
				<p align=\"center\">
					<strong>Amount</strong>
				</p>
			</td>
		</tr>
		<tr>
			<td class=\"bottom\" width=\"462\" colspan=\"5\" valign=\"top\">
			</td>
			<td class=\"bottom\" width=\"77\" colspan=\"2\" valign=\"top\">
			</td>
			<td class=\"bottom\" width=\"80\" valign=\"top\">
			</td>
			<td class=\"bottom\" width=\"91\" valign=\"top\">
			</td>
		</tr>
		{%- for row in doc.items -%}
		<tr>
			<td class=\"topbottom\" width=\"462\" colspan=\"5\" valign=\"top\">
				<p align=\"Left\">
{{ row.item_name }} (Sr. <strong>{{ row.bag_no_from or '' }}</strong> to										<strong>{{ row.bag_no_to or '' }}</strong> Bag) {%-if row.batch_no -%}Batch Code {{ row.batch_no }} {%-endif-%}
				</p>
			</td>
			<td class=\"topbottom\" width=\"77\" colspan=\"2\" valign=\"top\">
				<p align=\"right\">
					{{ row.qty }} {{ row.stock_uom }}
				</p>
			</td>
			<td class=\"topbottom\" width=\"80\" valign=\"top\">
				<p align=\"right\">
					{{ row.get_formatted(\"rate\", doc) or ''}}
				</p>
			</td>
			<td class=\"topbottom\" width=\"91\" valign=\"top\">
				<p align=\"right\">
					{{ row.get_formatted(\"amount\", doc) or ''}}
				</p>
			</td>
		</tr>
		{% endfor %}
		<tr>
			<td class=\"top\" width=\"462\" colspan=\"5\" valign=\"top\">
				<p>
					<strong>Remark: </strong>
					Raw Materials to be used in the Production of finished
					Products.
				</p>
				<p>
					<strong>IDF No. </strong>
					E1703527047
				</p>
			</td>
			<td class=\"top\" width=\"77\" colspan=\"2\" valign=\"top\">
			</td>
			<td class=\"top\" width=\"80\" valign=\"top\">
			</td>
			<td class=\"top\" width=\"91\" valign=\"top\">
			</td>
		</tr>
		<tr>
			<td width=\"138\">
				<p align=\"center\">
					<strong>FOB : {{ doc.get_formatted(\"fob_value\") }}</strong>
					<strong></strong>
				</p>
			</td>
			<td width=\"208\" colspan=\"3\">
				<p>
					<strong>FREIGHT : {{ doc.get_formatted(\"freight\") }} (Prepaid)</strong>
					<strong></strong>
				</p>
			</td>
			<td width=\"116\">
				<p align=\"center\">
					<strong>CIF : {{ doc.get_formatted(\"grand_total\") }}</strong>
					<strong></strong>
				</p>
			</td>
			<td width=\"77\" colspan=\"2\">
				<p align=\"right\">
					<strong>{{ doc.total_quantity or '' }} Kgs</strong>
					<strong></strong>
				</p>
			</td>
			<td width=\"80\">
				<p align=\"right\">
					<strong></strong>
				</p>
			</td>
			<td width=\"91\">
				<p align=\"right\">
					<strong>{{ doc.get_formatted(\"grand_total\") }}</strong>
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"709\" colspan=\"9\" valign=\"top\">
				<p>
					<strong>
						Total in words: {{ doc.in_words }}
					</strong>
				</p>
				<p>
					<strong>Declaration: </strong>
					We declare that this Invoice shows the actual price of the
					goods Described and that all particulars and true and
					correct.<strong></strong>
				</p>
			</td>
		</tr>
		<tr>
			<td width=\"462\" colspan=\"5\" valign=\"top\">
				<p>
					BANK NAME -  {{ doc.bank or '' }}
				</p>
				<p>
					Account No - {{ doc.bank_account or '' }} ({{doc.account_currency or 'INR' }})
				</p>
				<p>
					Bank Address - {{ doc.branch_address or '' }}
				</p>
				<p>
					Branch Name - {{ doc.branch or '' }}
				</p>
				<p>
					Swift Code - {{ doc.swift_code or '' }}
				</p>
				<p>
					RTGS/NEFT/IFSC - {{ doc.ifs_code or '' }}
				</p>
			</td>
			<td width=\"247\" colspan=\"4\" valign=\"bottom\">
				<p align=\"center\">
					<strong>For {{ doc.company }}</strong>
				</p>
				<br>
				<br>
				<br>
				<p align=\"center\">
					<strong>Authorised Signatory</strong>
				</p>
			</td>
		</tr>
		<tr class=\"non\" >
			<td class=\"non\" width=\"137\">
			</td>
			<td class=\"non\" width=\"47\">
			</td>
			<td class=\"non\" width=\"35\">
			</td>
			<td class=\"non\" width=\"125\">
			</td>
			<td class=\"non\" width=\"115\">
			</td>
			<td class=\"non\" width=\"66\">
			</td>
			<td class=\"non\" width=\"10\">
			</td>
			<td class=\"non\" width=\"79\">
			</td>
			<td class=\"non\" width=\"91\">
			</td>
		</tr>
	</tbody>
</table>`;

  return (
    <main>
      <CodeSnippetHero
        title="How to create a detailed export invoice print format in HTML for ERP systems?"
        description={description}
        snippetName={snippetName}
        language={language}
        category={category}
        accentColor={accentColor}
      />

      <section className="container-custom px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet represents a complex and comprehensive HTML template
          designed specifically for generating <em>Export Invoice</em> documents
          in ERP solutions. It utilizes Jinja-style templating to dynamically render
          invoice details such as consignor, consignee, shipping information, container
          details, itemized goods lists, and payment terms. The template ensures
          precise formatting for printing/exporting with correct table structures,
          inline styles, and conditional content display. It is useful for businesses
          exporting goods internationally and needing standardized, customizable
          invoice printouts that comply with common export documentation norms.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Provides a fully-featured HTML print format for export invoices with dynamically bound data placeholders and conditional rendering for letterhead, footer, and item details."
        whenToUse="Use this snippet when you need to generate export invoices within an ERP system or similar applications with custom print format requirements."
        prerequisites={[]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "Jinja Templating Integration",
            description:
              "The snippet uses Jinja templating syntax for injecting dynamic data and conditional rendering, common in ERP print formats.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/"
          },
          {
            title: "Print-friendly HTML Styling",
            description:
              "Includes specific CSS rules to shape margins, paddings, table borders, and fonts for print-ready document output.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/print"
          },
          {
            title: "Modular Table Layout",
            description:
              "Uses carefully constructed table rows and columns with rowspan and colspan for well-organized export invoice layout.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "Setup Print Format Styles",
            explanation:
              "Define CSS styles targeting print margins, table border collapsing, paddings, and font styling to ensure the invoice format prints as expected.",
            code: "CSS styles included in the snippet's style tag.",
            language: "css"
          },
          {
            stepNumber: 2,
            title: "Define Header and Footer Sections",
            explanation:
              "Use conditional templating to optionally render company letterhead and footer based on input flags, maintaining a consistent invoice header/footer.",
            code: `<div id=\"header-html\" class=\"hidden-pdf\">\n{% if letter_head and not no_letterhead %}\n<div class=\"letter-head\">{{ letter_head }}</div>\n{% else %}\n<div> </br></br></br> </div>\n{% endif %}\n</div>`,
            language: "html"
          },
          {
            stepNumber: 3,
            title: "Construct Main Invoice Table",
            explanation:
              "Build a comprehensive table layout including consignor, consignee, invoice details, shipment info, container info, payment terms, and itemized goods with quantity, rate, amount, ensuring all dynamic fields have proper data placeholders.",
            code: "Main HTML table snippet within the code provided.",
            language: "html"
          },
          {
            stepNumber: 4,
            title: "Loop over Items Dynamically",
            explanation:
              "Apply 'for' loops in template syntax to iterate through invoice items and container details dynamically rendering all relevant fields for each row.",
            code: `{% for row in doc.items %} ... {% endfor %}`,
            language: "jinja"
          },
          {
            stepNumber: 5,
            title: "Final Remarks and Bank Details",
            explanation:
              "Include remarks, declaration, bank details, and signature placeholders with dynamic data injection for completeness.",
            code: "Bank and declaration details section within the table.",
            language: "html"
          }
        ]}
      />

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        fileName="GIPL Export Invoice HTML Print Format"
        showLineNumbers={true}
        allowCopy={true}
      />

      <Troubleshooting
        items={[
          {
            problem: "Print output margins are incorrect or content is cut off.",
            solution:
              "Ensure the CSS @page margin settings are appropriate and your printer settings do not override margins. Check the snippet's margin CSS rules.",
          },
          {
            problem:
              "Dynamic data not rendering or template syntax showing as-is in output.",
            solution:
              "Verify that the templating engine supports Jinja syntax and that data context is correctly passed to this print format.",
          },
          {
            problem: "Table columns misalign or borders appear broken.",
            solution:
              "Confirm all colspan and rowspan attributes are correct and CSS border-collapse property is applied as in the snippet.",
          }
        ]}
      />
    </main>
  );
};

export default GiplExportInvoicePage;
