"use client";

import React from "react";
import CodeSnippetHero from "@/components/code-snippets/code-snippet-hero";
import CodeBlock from "@/components/code-snippets/code-block";
import CodeOverview from "@/components/code-snippets/code-overview";
import KeyConcepts from "@/components/code-snippets/key-concepts";
import StepByStepTutorial from "@/components/code-snippets/step-by-step-tutorial";
import Troubleshooting from "@/components/code-snippets/troubleshooting";

export default function BoothPrintPage() {
  const code = `<!doctype html>
<html>
<head>
<meta charset=\"utf-8\">
<title>Untitled Document</title>
</head>

<body>
<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\">
<tbody>
<tr>
<td width=\"100\">
<p><strong>બુથ નંબર</strong></p>
</td>
<td width=\"100\">
<p><strong>બુથ નું નામ</strong></p>
</td>
<td width=\"100\">
<p><strong>ટોટલ વોટ</strong></p>
</td>
<td width=\"100\">
<p><strong>ગ્રામ પંચાયત </strong></p>
</td>
<td width=\"100\">
<p><strong>તાલુકા પંચાયત </strong></p>
</td>
<td width=\"100\">
<p><strong>જીલ્લા પંચાયત</strong></p>
</td>
</tr>
<tr>
<td width=\"100\">
<p><strong></strong></p>
</td>
<td width=\"100\">
<p>{{ doc.p_booth }}</p>
</td>
<td width=\"100\">
<p> {{ doc.total_vote or '' }} </p>
</td>
<td width=\"100\">
<p> {{ doc.g_p or '' }}</p>
</td>
<td width=\"100\">
<p> {{ doc.t_p or '' }}</p>
</td>
<td width=\"100\">
<p> {{ doc.d_p or '' }}</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td width=\"120\">
<p><strong>&nbsp;</strong></p>
</td>
<td width=\"120\">
<p><strong>સરપંચ</strong></p>
</td>
<td width=\"120\">
<p><strong>ઉપ સરપંચ</strong></p>
</td>
<td width=\"120\">
<p><strong>તાલુકા પંચાયત મેમ્બર</strong></p>
</td>
<td width=\"120\">
<p><strong>જીલ્લા પંચાયત મેમ્બેર</strong></p>
</td>
</tr>
<tr>
<td width=\"120\">
<p><strong>નામ</strong></p>
</td>
<td width=\"120\">
<p> {{ doc.sarapanch_name or '' }}</p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width=\"120\">
<p><strong>મોબાઇલ નં</strong></p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
<td width=\"120\">
<p>&nbsp;</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td width=\"150\">
<p><strong>&nbsp;</strong></p>
</td>
<td width=\"150\">
<p><strong>૨૦૧૨</strong></p>
</td>
<td width=\"150\">
<p><strong>૨૦૧૪</strong></p>
</td>
<td width=\"150\">
<p><strong>૨૦૧૫</strong></p>
</td>
</tr>
{%- for row in doc.voting_history -%}

{%-if row.party == \"કોંગ્રેસ\" -%}
<tr>
<td width=\"150\">
<p><strong>કોંગ્રેસ</strong></p>
</td>
{%-if row.voting_year == \"2012\" -%}
<td width=\"150\">
<p> {{ row.vote or '' }} </p>
</td>
{%-elif row.voting_year == \"2014\" -%}
<td width=\"150\">
<p> {{ row.vote or '' }} </p>
</td>
{%-elif row.voting_year == \"2015\" -%}
<td width=\"150\">
<p> {{ row.vote or '' }} </p>
</td>
{%- endif -%}
</tr>
{%- endif -%}
{%-if row.party == \"ભાજપ\" -%}
<tr>
<td width=\"150\">
<p><strong>ભાજપ</strong></p>
</td>
{%-if row.party == \"ભાજપ\" and row.voting_year == \"2012\" -%}
<td width=\"150\">
<p> {{ row.vote or '' }} </p>
</td>
{%- endif -%}{%-if row.party == \"ભાજપ\" and row.voting_year == \"2014\" -%}
<td width=\"150\">
<p> {{ row.vote or '' }} </p>
</td>
{%- endif -%}
{%-if row.party == \"ભાજપ\" and row.voting_year == \"2015\" -%}
<td width=\"150\">
<p> {{ row.vote or '' }} </p>
</td>
{%- endif -%}
</tr>
{%- endif -%}
{%-if row.party == \"અન્ય\" -%}
<tr>
<td width=\"150\">
<p><strong>અન્ય</strong></p>
</td>
<td width=\"150\">
<p>{%-if row.party == \"અન્ય\" and row.voting_year == \"2012\" -%} {{ row.vote or '' }} {%- endif -%}</p>
</td>
<td width=\"150\">
<p>{%-if row.party == \"અન્ય\" and row.voting_year == \"2014\" -%} {{ row.vote or '' }} {%- endif -%}</p>
</td>
<td width=\"150\">
<p>{%-if row.party == \"અન્ય\" and row.voting_year == \"2015\" -%} {{ row.vote or '' }} {%- endif -%}</p>
</td>
</tr>
{%- endif -%}
{% endfor %}


<tr>
<td width=\"150\">
<p><strong>ટોટલ</strong></p>
</td>
<td width=\"150\">
<p>વિથ(%)</p>
</td>
<td width=\"150\">
<p>વિથ(%)</p>
</td>
<td width=\"150\">
<p>વિથ(%)</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td width=\"47\">
<p><strong>ક્રમ</strong></p>
</td>
<td width=\"353\">
<p><strong>જ્ઞાતિ</strong></p>
</td>
<td width=\"200\">
<p><strong>ટોટલ</strong></p>
</td>
</tr>
<tr>
<td width=\"47\">
<p><strong>&nbsp;</strong></p>
</td>
<td width=\"353\">
<p>&nbsp;</p>
</td>
<td width=\"200\">
<p>&nbsp;</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td width=\"47\">
<p><strong>ક્રમ</strong></p>
</td>
<td width=\"554\">
<p><strong>લોકલ ઇસ્યુ</strong></p>
</td>
</tr>
<tr>
<td width=\"47\">
<p><strong>&nbsp;</strong></p>
</td>
<td width=\"554\">
<p>&nbsp;</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

<p>&nbsp;</p>
</body>
</html>`;

  return (
    <>
      <CodeSnippetHero
        title="How to create an HTML print format for Booth_print showing election and local governance data in Gujarati?"
        description="This snippet provides a structured HTML print template for displaying detailed election booth vote counts and local panchayat member info in Gujarati, ideal for administrative report printing."
        snippetName="Booth_print"
        language="html"
        category="Print Format"
        accentColor="orange"
      />

      <section className="container-custom my-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="leading-relaxed text-gray-800">
          The <code>Booth_print</code> snippet is an HTML-based print format template designed to present
          election booth data in Gujarati language, including voter counts across Gram Panchayat, Taluka Panchayat, and
          Zilla Panchayat levels. It also captures important local governance roles such as Sarpanch and voting history
          from previous election years. This structured table layout makes it easy for administrators to print and review
          crucial election-related information.
        </p>
      </section>

      <CodeOverview
        whatItDoes="Provides a detailed HTML structure to display booth-wise election data and local governance information in a print-friendly format."
        whenToUse="Use this snippet when you need to generate printable reports for election booths that include vote counts and local leadership details."
        prerequisites={[
          "Basic understanding of HTML table structures",
          "Familiarity with Gujarati language content",
          "Data input organized as 'doc' object with voting and local governance details"
        ]}
      />

      <KeyConcepts
        concepts={[
          {
            title: "HTML Table Layout",
            description: "Uses nested tables with specified widths and borders for structured presentation.",
            relatedLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          },
          {
            title: "Templating Placeholders",
            description: "Uses curly braces and Jinja-like templating syntax to dynamically inject election data.",
            relatedLink: "https://jinja.palletsprojects.com/en/3.1.x/templates/"
          },
          {
            title: "Gujarati Content",
            description: "Includes localized Gujarati terms for better relevance in regional election documentation.",
            relatedLink: "https://en.wikipedia.org/wiki/Gujarati_language"
          }
        ]}
      />

      <StepByStepTutorial
        steps={[
          {
            stepNumber: 1,
            title: "HTML Document Setup",
            explanation: "Defines a standard HTML5 document with UTF-8 charset for proper Gujarati text rendering.",
            code: `<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>Untitled Document</title>\n</head>`,
            language: "html"
          },
          {
            stepNumber: 2,
            title: "Booth Information Table",
            explanation: "Creates a bordered table summarizing booth number, name, total votes, and Panchayat info.",
            code: `<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n<tbody>\n<tr>\n<td width=\"100\"><p><strong>બુથ નંબર</strong></p></td>\n<td width=\"100\"><p><strong>બુથ નું નામ</strong></p></td>\n<td width=\"100\"><p><strong>ટોટલ વોટ</strong></p></td>\n<td width=\"100\"><p><strong>ગ્રામ પંચાયત </strong></p></td>\n<td width=\"100\"><p><strong>તાલુકા પંચાયત </strong></p></td>\n<td width=\"100\"><p><strong>જીલ્લા પંચાયત</strong></p></td>\n</tr>\n<tr>\n<td width=\"100\"><p><strong></strong></p></td>\n<td width=\"100\"><p>{{ doc.p_booth }}</p></td>\n<td width=\"100\"><p> {{ doc.total_vote or '' }} </p></td>\n<td width=\"100\"><p> {{ doc.g_p or '' }}</p></td>\n<td width=\"100\"><p> {{ doc.t_p or '' }}</p></td>\n<td width=\"100\"><p> {{ doc.d_p or '' }}</p></td>\n</tr>\n</tbody>\n</table>`,
            language: "html"
          },
          {
            stepNumber: 3,
            title: "Local Governance Table",
            explanation: "Displays Sarpanch and related member info in a tabular format alongside labels.",
            code: `<table>\n<tbody>\n<tr>\n<td width=\"120\"><p><strong>&nbsp;</strong></p></td>\n<td width=\"120\"><p><strong>સરપંચ</strong></p></td>\n<td width=\"120\"><p><strong>ઉપ સરપંચ</strong></p></td>\n<td width=\"120\"><p><strong>તાલુકા પંચાયત મેમ્બર</strong></p></td>\n<td width=\"120\"><p><strong>જીલ્લા પંચાયત મેમ્બેર</strong></p></td>\n</tr>\n<tr>\n<td width=\"120\"><p><strong>નામ</strong></p></td>\n<td width=\"120\"><p> {{ doc.sarapanch_name or '' }}</p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n</tr>\n<tr>\n<td width=\"120\"><p><strong>મોબાઇલ નં</strong></p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n<td width=\"120\"><p>&nbsp;</p></td>\n</tr>\n</tbody>\n</table>`,
            language: "html"
          },
          {
            stepNumber: 4,
            title: "Voting History Table",
            explanation: "Loops through voting history to show votes for Congress, BJP, and Others across years 2012, 2014, and 2015.",
            code: `{%- for row in doc.voting_history -%}\n<tr>\n{%- if row.party == \"કોંગ્રેસ\" -%}\n<td width=\"150\"><p><strong>કોંગ્રેસ</strong></p></td>\n<td width=\"150\"><p> {{ row.vote or '' }} </p></td>\n</tr>\n{%- endif -%}\n{% endfor %}`,
            language: "jinja"
          }
        ]}
      />

      <Troubleshooting
        items={[
          {
            problem: "Gujarati characters not rendering properly",
            solution: "Ensure the meta charset is set to UTF-8 and the document is saved with UTF-8 encoding."
          },
          {
            problem: "Dynamic data placeholders not populating",
            solution: "Verify the data context 'doc' is correctly passed and matches the expected structure in your template engine."
          }
        ]}
      />

      <CodeBlock
        code={code}
        language="html"
        fileName="Booth_print.html"
        showLineNumbers={true}
        allowCopy={true}
      />
    </>
  );
}
