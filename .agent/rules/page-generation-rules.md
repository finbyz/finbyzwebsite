---
trigger: always_on
---

# Next.js Page Architecture Patterns

---

## Web Pages (Services, Products, Features)

### 1. layout.tsx (Server Component Template)
- **Imports**: Always include `fetchFrappeSchemaData`, `getPageData`, `getFaqs`, `Metadata`, and UI components (`FAQ`, `FinbyzGallery`, `BusinessSlider`, `StructureData`).
- **Metadata**: Use `generateMetadata` to fetch data from Frappe using the slug.
- **Structure**:
    - Wrap `children` in `<main>`.
    - Append `<FAQ />` (if faqs exist), `<FinbyzGallery />`, `<BusinessSlider />`, and `<StructureData />`.

### 2. page.tsx (Client Component Template)
- **Directive**: Always start with `'use client'`.
- **Standard Imports**: `HeroSection`, `Section`, `List`, `CTA`, `Image`, `lucide-react` icons.
- **Button Actions**:
    - `handleGetStarted`: Scroll to a specific ID (usually `#content` or similar).
    - `handleContact`: Redirect to `/contact`.
- **Component Order**:
    1. `<HeroSection />` with `highlightWords` and primary/secondary actions.
    2. Multiple `<Section />` components containing `h2`, `p`, `List`, and `Image`.
    3. Use `StatusIndicatorsGrid` or `BenefitsGrid` for technical/feature data.
    4. `<CTA />` at the bottom with `subheading`, `title`, and `description`.

> **Note**: Additional components from `@/components/` can be used as needed (e.g., `TestimonialCarousel`, `PricingTable`, `FeatureGrid`).

---

## Blog Pages (Insights, Articles, Guides)

### 1. layout.tsx (Server Component Template)
- **Constants**: Define `PAGE_SLUG` and `PAGE_ROUTE` at the top.
- **Metadata**: Export `metadata: Metadata` object with:
    - `title`, `description`, `keywords`
    - `authors`, `creator`, `publisher`
    - `alternates.canonical`
    - `openGraph` (type: `"article"`, include images)
    - `twitter` card configuration
    - `robots` with googleBot settings
- **FAQs**: Fetch with `await getFaqs("Blog Post", PAGE_SLUG)` outside the component.
- **Structure**:
    - Wrap `children` in `<main>`.
    - Append `<FAQ />` (if faqs exist), `<FinbyzGallery />`, `<LazyBusinessSlider />`, and `<StructureData type="blog" />`.

### 2. page.tsx (Client Component Template)
- **Directive**: Always start with `'use client'`.
- **Standard Imports**: `BlogHero`, `BlogSection`, `BlogSectionWithImage`, `BlogTableOfContents`, `BlogContent`, `BlogParagraph`, `BlogCheckList`, `Link`.
- **Hero Props Object**: Define `heroProps` with:
    - `title`, `description`, `primaryCategory`
    - `tags` (array of strings)
    - `author` object (`name`, `title`)
    - `publishDate`, `readTime`
- **TOC Items**: Define `tocItems` array with `{ id, title }` objects for each section.
- **Component Order**:
    1. `<BlogHero {...heroProps} />` at the top.
    2. Grid container with `<BlogTableOfContents items={tocItems} />` and `<BlogContent>`.
    3. Inside `<BlogContent>`:
        - Use `<BlogSectionWithImage>` for intro sections with images.
        - Use `<BlogSection>` for text-heavy sections.
        - Use `<BlogParagraph>` for text content.
        - Use `<BlogCheckList items={[...]} />` for bullet lists.
        - Use comparison tables with proper styling for data comparisons.
    4. Final CTA block with link to relevant service page.

> **Note**: Additional blog components can be used as needed (e.g., `BlogQuote`, `BlogCodeBlock`, `ComparisonTable`, custom grid layouts).
