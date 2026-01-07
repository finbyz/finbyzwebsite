---
description: Generates a Next.js page while maximizing the reuse of existing components.
---

# Generate Next.js Page (Strict Protocol)

**CRITICAL RULE:** You are a sequential agent. **Do not proceed to Step 3 until Step 2 is successfully completed and the `name/ID` is received from the ERP.**

**1. Input Resolution (Gather Requirements)**
*   **Action**: Scan history for "Idea Reference" (Title, Type, Research).
*   **Fallback**: If manual, you **must** ask the user for: Page Name, Type (Blog/Web Page), and Category.
*   **Target Path**: 
    *   Blogs: `src/app/(blogs)/[category]/[slug]/page.tsx`
    *   Web Pages: `src/app/(webpages)/[category]/[slug]/page.tsx`

**2. MANDATORY: ERP Document Creation (HARD GATE)**
*   **Condition**: You cannot generate code without a Document ID.
*   **Action**: Call `create_document` via frappe MCP immediately.
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


3. **Code Generation (Blueprint Implementation)**:
    - **layout.tsx**: Implement the Server Component matching the Blueprint from `@nextjs-blueprints.md`. Ensure the slug is passed correctly to `fetchFrappeSchemaData`.
    - **page.tsx**: Implement the Client Component.
        - **If Webpage**: Build sections using `HeroSection`, `Section`, and `CTA`.
        - **If Blog**: Build the grid layout using `BlogHero`, `BlogTableOfContents`, and `BlogSectionWithImage`.
    - **Crucial**: Use only existing components from `@/components/...`. Do not create new UI components unless absolutely necessary.`

4. **Verification**:
    - Run `npx next lint --file [path]`.
    - open the page in the browser and check if the page is loading. domain web.finbyz.tech
    - Report the successful file creation and the Frappe Document ID.