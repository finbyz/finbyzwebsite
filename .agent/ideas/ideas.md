# Content Ideas Backlog

> This file tracks all generated content ideas. Check off ideas as they are implemented.

---

## How to Use
- Ideas are automatically added here by the `/research-ideas` workflow
- Check the box `[x]` when an idea is implemented
- Reference ideas in other chats by number (e.g., "Generate Idea #3")
- Each idea includes: Title, Type, Slug, and Value Proposition

---

## Pending Ideas

<!-- New ideas will be added below this line -->

### Idea #6: ERPNext v16 & n8n 2.0: Building The Next-Gen Automation Stack
- [x] **Status**: Completed
- **Type**: Blog
- **Slug**: `erpnext/insights/erpnext-v16-n8n-2-0-automation-stack`
- **Category**: /erpnext/insights
- **Value Proposition**: Technical guide on connecting the new n8n 2.0 features (sub-workflow returns, native Python) with ERPNext v16. Focuses on orchestrating complex, multi-step business logic outside of Frappe benchmarks.
- **Components**: `@/components/blog/BlogHero`, `@/components/blog/BlogSectionWithImage`, `@/components/blog/BlogCodeBlock`, `@/components/blog/BlogCheckList`
- **Research Notes**: n8n 2.0 adds Python support and sub-workflow return values, enabling "microservice-like" automation for ERPNext without custom apps.
- **Created**: 2026-01-06
- **Completed**: 2026-01-06
- **Page Path**: `src/app/(blogs)/erpnext/insights/erpnext-v16-n8n-2-0-automation-stack/page.tsx`

### Idea #7: AI Agents for ERPNext
- [x] **Status**: Completed
- **Type**: Web Page
- **Slug**: `ai-automation/solutions/erpnext-ai-agents`
- **Category**: /ai-automation/solutions
- **Value Proposition**: Solution page selling the capability to build autonomous agents (using n8n AI nodes) that can read/write to ERPNext. Highlights use cases like "Auto-Responding Sales Agent" and "Inventory Predictor Agent".
- **Components**: `@/components/HeroSection`, `@/components/FeatureGrid`, `@/components/BenefitsGrid`, `@/components/CTA`
- **Research Notes**: AI Agents are the top 2026 trend. n8n's "AI Agent Tool" node is the perfect orchestrator for ERPNext's REST API.
- **Created**: 2026-01-06
- **Completed**: 2026-01-06
- **Page Path**: `src/app/(webpages)/ai-automation/solutions/erpnext-ai-agents/page.tsx`

### Idea #8: Automating Financial Operations in ERPNext with n8n
- [x] **Status**: Completed
- **Type**: Blog
- **Slug**: `erpnext/insights/automating-finance-erpnext-n8n`
- **Category**: /erpnext/insights
- **Value Proposition**: Specific use-case guide for Finance teams. Covers automating invoice processing, bank reconciliation gaps, and payment reminders using n8n workflows.
- **Components**: `@/components/blog/BlogHero`, `@/components/blog/BlogTableOfContents`, `@/components/blog/BlogSection`, `@/components/blog/ComparisonTable`
- **Research Notes**: Finance automation is a high-value keyphrase. merging ERPNext's strong accounting with n8n's connectivity to banks/payment gateways.
- **Created**: 2026-01-06
- **Completed**: 2026-01-06
- **Page Path**: `src/app/(blogs)/erpnext/insights/automating-finance-erpnext-n8n/`

### Idea #9: n8n Implementation Services for ERPNext
- [ ] **Status**: Pending
- **Type**: Web Page
- **Slug**: `erpnext/services/n8n-automation-consulting`
- **Category**: /erpnext/services
- **Value Proposition**: Dedicated service page for "n8n + ERPNext" consulting. Targets businesses wanting to glue ERPNext to other tools (HubSpot, Shopify) but needing expert help.
- **Components**: `@/components/HeroSection`, `@/components/ServiceFeatures`, `@/components/TestimonialCarousel`, `@/components/InquiryForm`
- **Research Notes**: Service-oriented page to capture leads looking for "ERPNext automation experts".
- **Created**: 2026-01-06

### Idea #4: Complete Guide to ERPNext v16 HRMS: Transforming HR Operations
- [ ] **Status**: Pending
- **Type**: Blog
- **Slug**: `erpnext/insights/erpnext-v16-hrms-complete-guide`
- **Category**: /erpnext/insights
- **Value Proposition**: Comprehensive HRMS v16 feature guide covering automated overtime, arrears handling, multi-currency expense claims, enhanced benefits management, and earned leave accrual. Targets HR directors and decision-makers exploring open-source HRMS solutions.
- **Components**: `@/components/blog/BlogHero`, `@/components/blog/BlogSectionWithImage`, `@/components/blog/BlogTableOfContents`, `@/components/blog/BlogCheckList`, comparison tables
- **Research Notes**: HRMS v16 introduces major payroll improvements (automated overtime calculation, salary correction for arrears/LOP), multi-currency expense claims, enhanced employee benefits, and automated earned leave accrual. Positioned against SAP SuccessFactors and Workday.
- **Created**: 2026-01-06

### Idea #5: Frappe Version 16 Desk View: The New Standard for ERP UI
- [x] **Status**: Completed
- **Type**: Web Page
- **Slug**: `erpnext/features/frappe-v16-desk-view`
- **Category**: /erpnext/features
- **Value Proposition**: Dedicated feature page showcasing the massive v16 UI redesign, Tailwind integration, and responsive "Espresso" theme. Distinct from technical guides, targeting UX-focused decision makers.
- **Components**: `@/components/HeroSection`, `@/components/FinbyzGallery`, `@/components/StatusIndicatorsGrid`, `@/components/Section`
- **Research Notes**: v16 Desk features full-width layout, improved module cards, app-drawer style navigation, scalable columns, and sticky headers in child tables.
- **Created**: 2026-01-06
- **Completed**: 2026-01-06
- **Page Path**: `src/app/(webpages)/erpnext/features/frappe-v16-desk-view/page.tsx`

---

## Completed Ideas

<!-- Move completed ideas here -->

### Idea #3 — ERPNext v16 Frappe Caffeine Performance Optimization Guide ✅
- [x] **Title**: ERPNext v16 Frappe Caffeine Performance Optimization Guide
- **Type**: Blog
- **Slug**: `erpnext/insights/erpnext-v16-frappe-caffeine-performance-guide`
- **Keywords**: ERPNext v16, Frappe Caffeine, Redis caching, ERPNext performance
- **Value Proposition**: Deep-dive technical guide on Frappe Caffeine architecture delivering 2x performance gains. Covers Redis caching strategies, report optimization, list view performance, and benchmarks.
- **Generated**: 2026-01-06

### Idea #1 — ERPNext v16 Features Blog Post ✅
- [x] **Title**: What's New in ERPNext Version 16: Complete Feature Guide
- **Type**: Blog
- **Slug**: `/erpnext/insights/whats-new-erpnext-version-16`
- **Keywords**: ERPNext v16, ERPNext version 16 features, Frappe Caffeine, ERPNext 2026
- **Value Proposition**: First-to-market comprehensive guide covering all v16 features (2x performance, redesigned UI, stock reservation, MRP enhancements, HRMS v16). No existing v16 content—captures high-intent upgrade traffic.
- **Generated**: 2026-01-06

### Idea #2 — ERPNext v16 Migration Services Page ✅
- [x] **Title**: ERPNext v16 Migration Services: Upgrade from v15 with Expert Support
- **Type**: Web Page
- **Slug**: `/erpnext/services/erpnext-v16-migration`
- **Keywords**: ERPNext migration, upgrade ERPNext v15 to v16, ERPNext migration partner
- **Value Proposition**: Targets businesses actively seeking migration assistance. Covers 6-step migration methodology, prerequisites (Python 3.12, Node 22, MariaDB 10.6+), and custom app compatibility. High-conversion service page.
- **Generated**: 2026-01-06
