---
description: Generate webpages or blogs from ideas in the ideas.md backlog
---

**CRITICAL RULE:** You are a sequential agent. **Do not proceed to Step 3 until Step 2 is successfully completed and the `name/ID` is received from the ERP.**

1. **Input Resolution (Gather Requirements)**
*   **Action**: find the .agent/ideas/ideas.csv file and get the ideas where status is not DONE pick one idea at a time.
            - ideas.csv is contain this columns ID,Page Title (H1),URL Slug,Primary Keyword,Cluster,Search Intent,H2 Structure & Content Brief,Status (DONE/PENDING),
*   **Fallback**: If manual, you **must** ask the user for: Page Name, Type (Blog/Web Page), and Category.
*   **Target Path**: 
    *   Blogs: `src/app/(blogs)/[category]/[slug]/page.tsx`
    *   Web Pages: `src/app/(webpages)/[category]/[slug]/page.tsx`

2. **Content & Component Planning:**
- research about topic, trendings pages, and competitors pages.
- Create full detail content in markdown format so user can verify what end page will contain,
- SEO: Generate the Metadata object structure, ir should be as a plan.
- Approval: Ask user: "Confirm content to proceed?"

**3. MANDATORY: ERP Document Creation (HARD GATE)**
*   **Condition**: You cannot generate code without a Document ID.
*   **Action**: Call `create_document` via frappe MCP immediately.
*   fields:
    * doctype: "Web Page"
    * doc: 
        * title: "{{page_title}}"
        * seo_title: "{{seo_title}}"
        * route: "{{slug}}"
        * keywords: "{{keywords}}"
        * small_description: "{{small_description}}"
        * faqs: [
          {
            "question": "{{question}}",
            "answer": "{{answer}}"
          }
        ]
    * doctype: "Blog Post"
    * doc: 
        * title: "{{page_title}}"
        * seo_title: "{{seo_title}}"
        * blog_category: ['erpnext', 'insights', 'erpnext-insights', 'n8n-insights', 'technology', 'general', 'Business'] only one category
        * keywords: "{{keywords}}"
        * blogger: mukesh
        * route: "{{slug}}"
        * small_description: "{{small_description}}"
        * blog_intro: "{{blog_intro}}"
        * content_type: "Markdown"
        * published_on: "{{published_on}}"
        * faqs: [
          {
            "question": "{{question}}",
            "answer": "{{answer}}"
          }
        ]
*   if failes then stop and notify the user.
*   **Parameters**:
    ```json
    {
      "doctype": "Blog Post" or "Web Page",
      "doc": {
        "title": "{{page_title}}",
        "seo_title": "{{seo_title}}",
        "keywords": "{{keywords}}",
        "small_description": "{{small_description}}",
        "faqs": "{{faqs}}",
        "route": "{{slug}}"
      }
    }
    ```
*   **Note**: use only frappe mcp tool to create blog Post or Web Page document, do not use any other method to create document.
*   **Verification**: Check if the document is created in the ERP.


4. **Code Generation (Blueprint Implementation)**:
    - **layout.tsx**: Implement the Server Component matching the Blueprint from `@nextjs-blueprints.md`. Ensure the slug is passed correctly to `fetchFrappeSchemaData`.
    - **page.tsx**: Implement the Client Component.
        - **If Webpage**: Build sections using `HeroSection`, `Section`, and `CTA`.
        - **If Blog**: Build the grid layout using `BlogHero`, `BlogTableOfContents`, and `BlogSectionWithImage`.

5. **Verification**:
    - Run `npx next lint --file [path]`.
    - open the page in the browser and check if the page is loading. domain web.finbyz.tech
    - Report the successful file creation and the Frappe Document ID.