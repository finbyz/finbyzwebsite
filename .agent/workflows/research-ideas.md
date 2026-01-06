---
description: Research-Driven Idea Generation
---

# Research & Idea Generation (Topic: {{topic}})

## Steps
1. **Topic Research**:
    - Use search tools to find the latest trends, pain points, and "gaps" for the topic: `{{topic}}`.
    - Focus on current year (2026) developments (e.g., for n8n: n8n 2.0 features, AI Agent orchestration, self-hosting vs cloud costs).

2. **Cannibalization Audit**:
    - Scan `src/app/(blogs)` and `src/app/(webpages)` for any existing files related to `{{topic}}`.
    - List existing slugs to ensure new ideas do not overlap or compete for the same keywords.

3. **Generate "N" Ideas**:
    - Based on the research and audit, generate {{number_of_ideas}} unique page ideas.
    - Each idea must include:
        - **Title** & **Proposed Slug**.
        - **Target Type**: (Blog or Web Page).
        - **Value Proposition**: Why this is different from existing pages.
        - **Core Components**: Which existing UI components it will use.

4. **Save Ideas to Backlog**:
    - Append all generated ideas to `.agent/ideas/ideas.md` under "## Pending Ideas".
    - Use this format for each idea:
      ```
      ### Idea #[N]: [Title]
      - [ ] **Status**: Pending
      - **Type**: [Blog/Web Page]
      - **Slug**: `[proposed-slug]`
      - **Category**: [category path]
      - **Value Proposition**: [description]
      - **Components**: [list of @/components to use]
      - **Research Notes**: [key points from research]
      - **Created**: [date]
      ```

5. **Selection**:
    - Present the list to the user with checkbox format.
    - Ask: "Which of these would you like to generate into full pages? (Reference by idea number)"

6. **Chain to Generator**:
    - For each selected idea, trigger the `/pagegeneration` workflow automatically.
    - After generating, update the idea in `.agent/ideas/ideas.md`:
        - Change `- [ ]` to `- [x]`
        - Move the idea to "## Completed Ideas" section
        - Add **Completed Date** and **Page Path**
