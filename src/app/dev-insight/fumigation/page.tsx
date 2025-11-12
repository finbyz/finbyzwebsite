"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

const FumigationPage: React.FC = () => {
  const snippetName = "Fumigation";
  const language = "HTML";
  const category = "Print Format";

  const description =
    "This snippet provides an HTML print format for generating a certified fumigation certificate, dynamically including shipment details, fumigant info, and other regulatory data. Ideal for businesses needing standardized export documentation.";

  const codeSnippet = `<style>
tr.spacing > td
{
	padding: 0!important; 
}
</style>

{% if doc.item_print and doc.item_print<=(doc.items|length) %}
{% set item_print = (doc.item_print - 1) %}
{% else %}
{% set item_print = 0 %}
{% endif %}

<p style="text-align:center;">
    <strong><u>FUMIGATION CERTIFICATE </u></strong>
</p>
<p style="width: 100%; display: table; text-align:center;">
	<span style="display: table-cell; width:70%;text-align:left;"> <strong> DPPQS Registration No: </strong> </span>
	<span style="display: table-cell; width:30%; text-align:left;"><strong>Dated: - {{ doc.get_formatted(\"posting_date\") }} </strong> </span>
</p>
<p style="width: 100%; display: table; text-align:center;">
	<span style="display: table-cell; width:70%;text-align:left;"> <strong> Treatment Certificate No.: </strong> </span>
	<span style="display: table-cell; width:30%; text-align:left;"><strong>Date of Issue: - {{ doc.get_formatted(\"posting_date\") }} </strong> </span>
</p>
<p style="text-align:justify;">
    This is to certify that the following regulated articles have been
    fumigated according to the appropriate procedures to conform to the current
    Phytosanitary requirement of the importing country;
</p>
<p>
    <strong>DETAILS OF GOODS:</strong>
</p>
<p>
    <strong>Description of goods: </strong> {{ doc.items[item_print].item_name.upper() }}
</p>
<p>
    <strong>Quantity declared: </strong>
   {{ doc.items[item_print].number_of_containers }} CTN IN {{ doc.items[item_print].packed_in.upper() or '' }} {{ doc.items[item_print].packaging_material.upper() or '' }} 
    GROSS WT.: {{ doc.items[item_print].gross_wt }} MTS, NET WT.:{{ doc.items[item_print].net_wt }} MTS
</p>
<p>
    <strong>Container No: </strong> {%- for row in doc.container_details -%} {% if row.shipping_bill==doc.items[item_print].shipping_bill %} {{ row.container_no }}{% if not loop.last %}, {% endif %} {% endif %}{% endfor %}
</p>
<p>
    <strong>Distinguishing Marks:</strong>
    <strong>{{ doc.name }} DATED {{ doc.get_formatted(\"posting_date\") }}</strong>
</p>
<p>
    <strong>Port &amp; country of loading:</strong>{{ doc.port_of_loading_link.upper() or ''}}, INDIA
</p>
<p>
    <strong>Country of Destination:</strong>{{ doc.port_of_discharge_link.upper() }}
</p>
<p style="width: 100%; display: table; text-align:left;">
	<span style="display: table-cell; width:1px;white-space:nowrap;"> <strong>Name and address of exporter:</strong></span>
	<span style="display: table-cell; text-align:left;"><strong>{{ doc.company.upper() }}</strong><br>
	1008 SYNERGY TOWER, CORPORATE ROAD,<br> 
	NR.VODAFONE HOUSE, PRAHLAD NAGAR, <br>
	OFF S.G ROAD, AHMEDABAD-380015, GUJARAT TEL: 079-40359444</span>
</p>
<p style="width: 100%; display: table; text-align:left;">
	<span style="display: table-cell; width:1px;white-space:nowrap;"> <strong>Declared name &amp; address of consignee:</strong></span>
	<span style="display: table-cell; text-align:left;"><strong>{{ doc.customer_name.upper() }}</strong><br>
	{{ doc.address_display }}</span>
</p>
<p style="width: 100%; display: table; text-align:left;">
	<span style="display: table-cell; width:50%;"> <strong>Name of fumigant: </strong>{{ doc.items[item_print].fumigant or '' }} </span>
	<span style="display: table-cell; width:50%;"><strong>Date of fumigation: </strong>{{ doc.get_formatted(\"items[item_print].date_of_fumigation\") or '' }} </span>
</p>
<p style="width: 100%; display: table; text-align:left;">
	<span style="display: table-cell; width:50%;"> <strong>Place of fumigation: </strong>{{ doc.port_of_loading_link.upper() or ''}} </span>
	<span style="display: table-cell; width:50%;"><strong>Exposure Period: </strong> 24 hours</span>
</p>
<p>
    <strong>Dosage rate of fumigation:</strong> 32 GM/CU.M.
</p>
<p>
    <strong>
        Duration of fumigation 24 hours Minimum Air Temperature: - 28`C.
    </strong>
</p>
<table border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    Fumigation has been performed in a container under gas
                    tight enclosure/sheet.<strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    Container pressure test conducted.<strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
Container has 200 mm free air space at top of container.                    <strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    In transit fumigation- Need ventilation at port of
                    discharge.<strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    Container/ enclosure has been ventilation to below 5ppm v/v
                    Methyl Bromide<strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    <strong>WRAPPING AND TIMBER</strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    Has the commodity been fumigated prior to lacquering,
                    varnishing, painting or
                </p>
                <p>
                    Wrapping?<strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
Has plastic wrapping been used in the consignment?                    <strong></strong>
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A<strong></strong>
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    · If yes, has the consignment been fumigated prior to
                    wrapping
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    · Or has the plastic wrapping been slashed, opened, or
                    perforated
                </p>
            </td>
            <td width="122" valign="top">
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    In accordance with the wrapping and perforation Standard?
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A
                </p>
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    Is the timber in this consignment less than 200mm thick in?
                </p>
            </td>
            <td width="122" valign="top">
            </td>
        </tr>
        <tr class="spacing">
            <td width="453" valign="top">
                <p>
                    One dimension and correctly spaced every 200mm in height
                </p>
            </td>
            <td width="122" valign="top">
                <p>
                    Yes / No / N/A
                </p>
            </td>
        </tr>
    </tbody>
</table>
<p>
    <strong>ADDITIONAL DECLATION</strong>: 
</p>
<p>
    …………………………………………………………………………………
</p>
<p>
    I declare that these details are true &amp; correct and fumigation has been carried out in accordance with the
</p>
<p>
    NSPM-12, (ISPM-15)
</p>
<p>
    Place and date:-
</p>
<p>
    Signature:
</p>
<p>
    Name of Accredited Fumigation Operator:
</p>
<p>
    DPPQS Accreditation NO. /* AFAS Accreditation No- <strong></strong>
</p>
<p style="width: 100%; display: table; text-align:left;">
	<span style="display: table-cell; width:60%;"> </span>
	<span style="display: table-cell; width:40%;"><strong>Signature: </strong> <br> <strong> Name :</strong></span>
</p>
<p>
    P.S.:-No Financial liability attaches to certifying company or it’s Representative with respect to This certificate.
</p>
<p>
    Note: - Consignment details as declared by shipper
</p>
<p>
    This certificate is valid only if the goods declared above are shipped within 21 days from the date of fumigation
</p>`;

  const whatItDoes =
    "Generates a customizable fumigation certificate print format using HTML and Jinja-like templating for dynamic shipment data.";
  const whenToUse =
    "Use when needing to print or display a standardized fumigation certificate tied to shipment records in export or logistics applications.";
  const prerequisites = [
    "Basic understanding of HTML and print CSS",
    "Familiarity with Jinja or similar templating syntax",
    "Data context providing shipment and fumigation details"
  ];

  const concepts = [
    {
      title: "Templating Variables",
      description:
        "Using variables like `doc` and `item_print` to dynamically display print data.",
      relatedLink: "https://jinja.palletsprojects.com/en/latest/templates/"
    },
    {
      title: "Print Format Styling",
      description:
        "CSS rules designed to optimize table and text layouts for printing purposes.",
      relatedLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/print"
    },
    {
      title: "Conditional Logic",
      description:
        "Using if/else conditions to select correct data for printing.",
      relatedLink: "https://jinja.palletsprojects.com/en/latest/templates/#if-statements"
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      title: "Set item_print variable",
      explanation:
        "Determine which item to print using the `item_print` input. If invalid or out of range, fallback to 0.",
      code: `{% if doc.item_print and doc.item_print<=(doc.items|length) %}
{% set item_print = (doc.item_print - 1) %}
{% else %}
{% set item_print = 0 %}
{% endif %}`,
      language: "jinja"
    },
    {
      stepNumber: 2,
      title: "Compose header and certificate info",
      explanation:
        "Display the fumigation certificate title, registration info, and certificate dates dynamically.",
      code: `<p style=\"text-align:center;\">
    <strong><u>FUMIGATION CERTIFICATE </u></strong>
</p>
<p style=\"width: 100%; display: table; text-align:center;\">
	<span style=\"display: table-cell; width:70%;text-align:left;\"> <strong> DPPQS Registration No: </strong> </span>
	<span style=\"display: table-cell; width:30%; text-align:left;\"><strong>Dated: - {{ doc.get_formatted(\"posting_date\") }} </strong> </span>
</p>`,
      language: "html"
    },
    {
      stepNumber: 3,
      title: "Display details of goods and container numbers",
      explanation:
        "Generate details about goods being fumigated as well as associated container numbers using loops and conditions.",
      code: `<p>
    <strong>Description of goods: </strong> {{ doc.items[item_print].item_name.upper() }}
</p>
<p>
    <strong>Container No: </strong> {%- for row in doc.container_details -%} {% if row.shipping_bill==doc.items[item_print].shipping_bill %} {{ row.container_no }}{% if not loop.last %}, {% endif %} {% endif %}{% endfor %}
</p>`,
      language: "html"
    },
    {
      stepNumber: 4,
      title: "Add fumigation specifics and declaration",
      explanation:
        "Include fumigation chemicals, dates, exposure period, and signed declarations in the document.",
      code: `<p>
    <strong>Name of fumigant: </strong>{{ doc.items[item_print].fumigant or '' }}
</p>
<p>
    <strong>Duration of fumigation: </strong> 24 hours Minimum Air Temperature: - 28`C.
</p>
<p>
    <strong>ADDITIONAL DECLARATION:</strong>
</p>`,
      language: "html"
    },
    {
      stepNumber: 5,
      title: "Apply print-specific CSS styles",
      explanation:
        "Use CSS rules to ensure table cells have zero padding, optimizing the printed layout.",
      code: `tr.spacing > td
{
	padding: 0!important; 
}`,
      language: "css"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "Dynamic content missing or not rendering",
      solution:
        "Ensure the data context object 'doc' is correctly passed and variables like 'item_print' are in valid range."
    },
    {
      problem: "Print layout is broken or misaligned",
      solution:
        "Check CSS styles for print media, verify zero padding on table cells, and confirm text alignment properties."
    },
    {
      problem: "Template syntax errors causing rendering failure",
      solution:
        "Validate Jinja or templating syntax carefully; use appropriate {% and {{ delimiters and test in template engine."
    }
  ];

  return (
    <main>
      <CodeSnippetHero
        title="How to Generate a Certified Fumigation Certificate Print Format Using HTML and Templating?"
        description={description}
        snippetName={snippetName}
        language={language.toLowerCase()}
        category={category}
        accentColor="green"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-base leading-relaxed">
          This code snippet defines an HTML print format template for a standard fumigation certificate.
          It dynamically fills in shipment details, container information, fumigation chemicals used, and other
          regulatory declarations via templating variables. This format is crucial for exporters, logistics
          companies, and certificating bodies to provide a professional and compliant document ensuring
          phytosanitary standards are met for the importing country.
        </p>
      </section>

      <CodeOverview
        whatItDoes={whatItDoes}
        whenToUse={whenToUse}
        prerequisites={prerequisites}
      />

      <KeyConcepts concepts={concepts} />

      <StepByStepTutorial steps={steps} />

      <CodeBlock
        code={codeSnippet}
        language={language.toLowerCase()}
        fileName="fumigation_print_format.html"
        showLineNumbers={true}
        allowCopy={true}
      />

      <Troubleshooting items={troubleshootingItems} />
    </main>
  );
};

export default FumigationPage;
