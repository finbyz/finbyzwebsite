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
*   **Verification**: **Stop and report the Document ID to the user.** If the call fails, explain why and wait for instructions. **DO NOT generate the file yet.**

**3. Component Audit & Draft Architecture**
*   *Only execute if Step 2 succeeded.*
*   Scan `@/components` and the designated Template paths (`src/app/(blogs)/careers/...` or `src/app/(webpages)/erpnext/...`).
*   **Output**: Present a Markdown outline and a list of components to be reused. 
*   **Visual Assets**: For all images, use Unsplash URLs.
Format: https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&q=80&w=1200 or a topic-based placeholder: https://source.unsplash.com/featured/?{topic}.
*   **Confirmation**: Ask: "I have registered the page in the ERP (ID: [ID]). Proceed with code generation?"

**4. Code Generation & Verification**
*   Create the folder structure and `page.tsx`.
*   Ensure SEO `metadata` matches the ERP registration details exactly.
*   **Quality Check**: Run `npx next lint` and `npx tsc --noEmit` via terminal MCP.
*   **Final Report**: Provide the file path and the local development URL.
