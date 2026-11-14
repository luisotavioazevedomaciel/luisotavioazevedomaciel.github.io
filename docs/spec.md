# Master Specification v4.4
## Bilingual Software Engineering Portfolio & Consulting Platform

**Status:** Ready for phased implementation  
**Revision:** v4.4 — mentoring scope aligned with current Technical Lead experience  
**Primary objective:** Establish a credible professional engineering presence, publish practical technical content, attract consulting opportunities, and build a mentoring practice.

---

# 1. Product vision

Build a fast, accessible, bilingual personal website that combines:

- Professional portfolio and engineering profile.
- Technical publication covering software engineering, architecture, cloud and leadership.
- B2B software engineering consulting services.
- B2C software engineering mentoring.
- A central place for professional contact and opportunities.

The website should establish credibility through practical experience, technical depth and evidence of work—not generic claims or buzzwords.

## 1.1 Positioning

**Primary professional identity**

Technical Lead | Software Architecture | Cloud Engineering

**Core message**

Building better software. Growing better engineers.

**Supporting message**

I help engineering teams design, modernize and build reliable software systems. I also mentor software engineers who want to become more effective, confident and technically capable.

## 1.2 Target audiences

1. CTOs, engineering managers and technical founders looking for engineering advice.
2. Software teams dealing with architecture, modernization, cloud and reliability challenges.
3. Junior and mid-level engineers looking to develop practical engineering skills.
4. Experienced engineers preparing for senior or Tech Lead responsibilities.
5. Recruiters and companies interested in technical leadership opportunities.
6. International engineers interested in building careers abroad.

---

# 2. Professional profile

Use a centralized profile data source. Do not hardcode profile information across components.

**Profile details**

- Name: Luís Otávio Azevedo Maciel.
- Location: Portugal.
- Availability: International and remote opportunities.
- Background: Computer Engineering.
- Experience: 7+ years in software engineering.
- Current role: Technical Lead.
- Previous experience: Software engineering and technical leadership.
- Languages: Portuguese and English.
- Relocation experience: Brazil to Portugal.

**Certifications**

- Microsoft Azure Fundamentals (AZ-900).
- Microsoft Azure Developer Associate (AZ-204).
- Microsoft DevOps Engineer Expert (AZ-400).
- HashiCorp Certified: Terraform Associate (003).

Keep certifications and employment history editable through data files.

Do not publish confidential employer information, proprietary architecture, internal metrics or identifiable customer/vendor details without authorization. Case studies must be anonymized where necessary.

---

# 3. Service strategy

The website has two distinct service tracks. They should be clearly separated because they serve different audiences and buying decisions.

## 3.1 B2B — Software Engineering & Architecture Consulting

**Positioning**

Helping engineering teams design, modernize and build reliable software systems.

**Target audience**

- CTOs and technical founders.
- Engineering managers.
- Startups and scale-ups.
- Established software teams modernizing legacy platforms.
- Companies seeking independent technical guidance.

**Service areas**

### A. Software Architecture & System Design

- Architecture reviews.
- System design and technical planning.
- Distributed systems design.
- API design and integration strategies.
- Architecture trade-off analysis.
- Architecture Decision Records (ADRs).

### B. Cloud Engineering & Infrastructure

- Cloud architecture assessments.
- Azure architecture and implementation guidance.
- Infrastructure as Code.
- Terraform practices.
- Cloud migration planning.
- Cost, security and reliability considerations.

### C. Application Modernization

- Legacy system assessments.
- Modernization strategies.
- Incremental migration planning.
- Monolith decomposition where justified.
- Integration modernization.
- Technical debt prioritization.

### D. DevOps & Reliability Engineering

- CI/CD improvements.
- Deployment strategy reviews.
- Observability and monitoring.
- Reliability and resilience practices.
- Operational readiness.
- Developer experience improvements.

### E. Engineering Advisory

- Technical decision support.
- Engineering process reviews.
- Technical documentation and standards.
- Engineering team practices.
- Technical leadership support.

**Initial service packages**

Start with clearly scoped engagements rather than an open-ended consulting menu.

1. **Architecture Review**
   - Review an existing system or proposed architecture.
   - Identify risks, bottlenecks and trade-offs.
   - Deliver findings and prioritized recommendations.

2. **Technical Assessment**
   - Assess a specific engineering challenge.
   - Review architecture, cloud infrastructure or delivery practices.
   - Provide a practical improvement roadmap.

3. **Engineering Advisory**
   - Recurring technical guidance.
   - Architecture and design discussions.
   - Support for technical decisions and engineering initiatives.

Do not promise implementation capacity or outcomes that have not been validated. Initial engagements can be advisory and assessment-focused.

## 3.2 B2C — Software Engineering Mentoring

**Positioning**

Practical mentoring for software engineers who want to grow their technical skills and careers.

**Target audience**

Engineers at different stages of their careers. Avoid presenting the service as generic programming tutoring.

### A. Junior → Mid-level

Focus: Becoming a more effective professional software engineer.

Topics:
- Writing maintainable and testable code.
- Software engineering fundamentals.
- Object-oriented design and clean code.
- APIs and backend development.
- Databases and integrations.
- Testing strategies.
- Git, CI/CD and development workflows.
- Practical project reviews.
- Technical interview preparation.
- Building a development plan.

Potential format: A structured four-week mentoring programme.

### B. Mid-level / Senior

Focus: Developing broader technical ownership.

Topics:
- System design.
- Software architecture.
- Distributed systems.
- Cloud engineering.
- Technical decision-making.
- Code and architecture reviews.
- Communication with product and business stakeholders.
- Interview preparation and career planning.

### C. Senior Engineer → Tech Lead

Focus: Preparing to take on technical leadership responsibilities.

Topics:
- Transitioning from individual delivery to broader technical ownership.
- Facilitating architecture and design discussions.
- Leading technical initiatives within a team.
- Supporting and mentoring other engineers.
- Working effectively with Product Owners and stakeholders.
- Communicating technical risks and trade-offs.
- Balancing technical quality with delivery needs.
- Establishing team-level engineering practices.
- Technical leadership.


Keep the scope grounded in practical Technical Lead experience. Do not advertise mentoring towards Staff Engineer or Principal Engineer roles unless that experience is acquired in the future.

### D. International Engineering Careers

Focus: Navigating an international software engineering career.

Topics:
- Moving from Brazil to the European job market.
- CV and LinkedIn positioning.
- Interview preparation.
- Working in international engineering teams.
- Communication in English.
- Career development abroad.

This is career experience sharing, not immigration, tax or legal advice.

**Mentoring principles**

- Practical and personalized.
- Based on real engineering scenarios.
- Focused on helping people become independent engineers.
- Clear expectations and measurable development goals.
- No promises of job placement, promotions or guaranteed salary increases.
- Mentoring claims must reflect demonstrated experience. The current offer covers development towards Senior Engineer and Tech Lead responsibilities; it does not claim to prepare people for Staff or Principal Engineer roles.

**Commercial validation**

Junior mentoring may have strong demand but lower purchasing power. Validate willingness to pay before investing heavily in a large programme. Start with a small number of individual mentoring engagements and gather feedback.

---

# 4. Information architecture

## 4.1 Main navigation

- Home
- About
- Work
- Writing
- Services
- CV

Primary CTA: Contact

## 4.2 Routes

English is the default language.

| Page | English route | Portuguese route |
|---|---|---|
| Home | `/` | `/pt/` |
| About | `/about/` | `/pt/sobre/` |
| Work | `/work/` | `/pt/projetos/` |
| Writing | `/writing/` | `/pt/artigos/` |
| Services | `/services/` | `/pt/servicos/` |
| CV | `/cv/` | `/pt/cv/` |

Individual articles and case studies should have corresponding localized routes when translations exist.

Do not generate a translation route merely because the other language version exists in the schema. Language availability must be explicit.

## 4.3 Homepage structure

Recommended section order:

1. Hero: identity, positioning and primary CTA.
2. Selected Work: strongest engineering case studies.
3. Writing: recent and featured articles.
4. Consulting: Software Engineering & Architecture Consulting.
5. Mentoring: Software Engineering Mentoring.
6. About: concise professional background.
7. Contact: direct contact and professional links.

The homepage should communicate what you do, demonstrate credibility and make the next step obvious.

## 4.4 Services page

Separate the two audiences visually and structurally.

**Consulting section**
- Explain the problems you help teams solve.
- Present the five service areas.
- Show the initial engagement packages.
- Include a contact CTA.

**Mentoring section**
- Explain the mentoring approach.
- Present the career stages.
- Describe example topics and programme format.
- Include a mentoring enquiry CTA.

Do not make the two tracks look like interchangeable packages.

## 4.5 Work and case studies

Selected Work should demonstrate real engineering experience.

Each case study should include:

- Context and business problem.
- Existing system or situation.
- Constraints and requirements.
- Role and responsibilities.
- Architecture and technical approach.
- Key decisions and trade-offs.
- Outcome and measurable impact where publishable.
- Lessons learned.

Use diagrams where they improve understanding.

Do not expose proprietary information. Use anonymized examples or independent technical projects when necessary.

---

# 5. Editorial strategy

The website should be a technical publication, not just a CV.

## 5.1 Content pillars

1. **Software Architecture & System Design**
   - Architecture patterns.
   - Distributed systems.
   - APIs and integrations.
   - Design decisions and trade-offs.

2. **Cloud & Reliability**
   - Azure.
   - Infrastructure as Code.
   - Terraform.
   - DevOps and CI/CD.
   - Observability and resilience.

3. **Engineering Practices**
   - Testing.
   - Code quality.
   - Developer experience.
   - Legacy modernization.
   - Technical documentation.

4. **Technical Leadership**
   - Tech Lead responsibilities.
   - Engineering decision-making.
   - Mentoring and supporting engineers.
   - Transitioning from Senior Engineer to Tech Lead.

5. **International Engineering Careers**
   - Working in international teams.
   - Career development.
   - Brazil-to-Europe professional experience.
   - Technical interviews and communication.

## 5.2 Editorial principles

- Prefer practical experience over generic theory.
- Explain the problem before introducing a solution.
- Include trade-offs and limitations.
- Use diagrams and code examples where useful.
- Avoid publishing content solely to meet a schedule.
- Prioritize quality and consistency.

## 5.3 Initial content strategy

Start with a small set of high-quality articles that demonstrate technical depth.

Potential initial articles:

- How to approach system design as a software engineer.
- Practical architecture decisions in distributed systems.
- Modernizing legacy applications incrementally.
- Infrastructure as Code: lessons from real projects.
- What changes when you move from Senior Engineer to Tech Lead.
- How junior engineers can develop professional engineering habits.

---

# 6. Technical architecture

## 6.1 Technology stack

- Astro 5 or a stable current Astro release.
- TypeScript.
- Tailwind CSS.
- Astro Content Collections with Zod validation.
- MDX for technical content.
- Shiki for code highlighting.
- Mermaid for architecture diagrams.
- RSS generation.
- Sitemap generation.
- GitHub Pages hosting.
- GitHub Actions for CI/CD.
- Vitest for unit tests.
- Playwright for end-to-end tests.

Use the latest compatible stable versions at implementation time. Avoid unnecessary dependencies.

## 6.2 Repository structure

```text
src/
  assets/
  components/
    common/
    layout/
    content/
    services/
  content/
    articles/
    projects/
  data/
    profile.ts
    experience.ts
    education.ts
    certifications.ts
    services.ts
    cv.ts
    site.ts
  layouts/
  pages/
    index.astro
    about.astro
    work/
    writing/
    services.astro
    cv.astro
    pt/
  styles/
  utils/

public/
  fonts/
  images/
  favicon/
```

Adjust the final structure to Astro's routing and content collection conventions. Avoid unnecessary abstractions.

## 6.3 Data-driven profile

Keep reusable profile information in typed data files.

Examples:
- Personal information.
- Professional experience.
- Education.
- Certifications.
- Social links.
- Consulting services.
- Mentoring programmes.
- CV details.

Do not duplicate information between the homepage, About page and CV.

## 6.4 Content collections

Use separate collections for articles and projects/case studies.

Suggested article metadata:

```ts
{
  title: string;
  description: string;
  publishDate: Date;
  updatedDate?: Date;
  status: "draft" | "published" | "evergreen" | "superseded";
  language: "en" | "pt";
  translationKey?: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readingTime?: number;
  relatedArticles?: string[];
  canonicalUrl?: string;
}
```

Suggested project metadata:

```ts
{
  title: string;
  description: string;
  status: "draft" | "published";
  language: "en" | "pt";
  translationKey?: string;
  period?: string;
  technologies: string[];
  featured?: boolean;
}
```

Validate content at build time. Do not maintain redundant fields such as both `draft` and a status that already represents draft state.

## 6.5 Bilingual implementation

- English routes are the default.
- Portuguese routes use `/pt/`.
- Use correct HTML language metadata: `en` for English and `pt-BR` for Brazilian Portuguese content.
- If European Portuguese UI or content is introduced, define its locale explicitly rather than mixing variants.
- Add `hreflang` only for translations that actually exist.
- Use correct canonical URLs.
- Provide a visible language switcher.
- Keep navigation and page metadata translated.
- Never silently redirect users based on browser language.

---

# 7. Design system and user experience

## 7.1 Visual direction

- Modern, minimal and professional.
- Technical but approachable.
- Strong typography and readable content.
- Generous whitespace.
- Clear visual hierarchy.
- Subtle use of color.
- Responsive from mobile upwards.

Avoid a generic corporate template or an overly decorative developer portfolio.

## 7.2 Theme

- Light and dark modes.
- Respect system preference on first visit.
- Allow manual switching.
- Persist the user's preference locally.
- Avoid theme flashes during page load.

## 7.3 Components

Build reusable components for:

- Navigation.
- Footer.
- Hero.
- Section headings.
- Article cards.
- Project cards.
- Service cards.
- Mentoring programme cards.
- CTA sections.
- Tags.
- Code blocks.
- Mermaid diagrams.
- Table of contents.
- Language switcher.
- Theme switcher.

Do not introduce a component abstraction unless it is reused or meaningfully improves maintainability.

---

# 8. SEO, accessibility and performance

## 8.1 SEO

- Unique title and description for every page.
- Canonical URLs.
- Open Graph metadata.
- Sitemap.
- RSS feed.
- Robots configuration.
- Structured data where appropriate.
- Correct language metadata and `hreflang`.
- Descriptive URLs.
- Internal links between related articles and case studies.

Dynamic social preview generation can be introduced in Phase 2.

## 8.2 Accessibility

Target WCAG 2.2 AA.

- Semantic HTML.
- Keyboard navigation.
- Visible focus indicators.
- Sufficient contrast.
- Accessible forms and controls.
- Appropriate image alt text.
- Reduced-motion support.
- Correct heading hierarchy.
- Screen-reader-friendly navigation.

## 8.3 Performance targets

Targets should be realistic and measured in production.

| Metric | Target |
|---|---:|
| Lighthouse Performance | ≥95 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Compressed initial transfer | ≤100 KB where practical |
| Compressed JavaScript | ≤15 KB where practical |
| CLS | ≤0.05 |
| LCP | ≤2 seconds |
| INP | ≤200 ms |

Avoid adding client-side JavaScript when static HTML and CSS are sufficient.

---

# 9. Privacy and security

- No backend or user accounts.
- No unnecessary analytics or tracking.
- No advertising trackers.
- Use direct email and professional social links.
- Avoid collecting personal data through custom forms in the MVP.
- Use secure external links.
- Apply an appropriate Content Security Policy where compatible with hosting.
- Do not store unnecessary user information in local storage.
- Do not expose private information in public source files.

If a contact form is introduced later, select a suitable provider and document its data handling and privacy implications.

---

# 10. Testing and quality

## 10.1 Automated tests

**Unit tests**
- Content utilities.
- Language and route helpers.
- Metadata generation.
- Data validation.

**End-to-end tests**
- Homepage navigation.
- Language switching.
- Article navigation.
- Service navigation.
- Theme switching.
- Responsive navigation.
- Broken links and missing pages.

## 10.2 Manual checks

- Mobile and desktop layouts.
- Keyboard-only navigation.
- Screen reader basics.
- Color contrast.
- Code readability.
- Diagram rendering.
- Translation quality.
- Production performance.

## 10.3 Definition of Done

A feature is complete when:

- It works in both languages where applicable.
- It is responsive.
- It meets accessibility expectations.
- It has appropriate metadata.
- It passes relevant tests.
- It does not introduce unnecessary dependencies.
- It builds successfully.
- It has been reviewed in a production-like environment.

---

# 11. CI/CD and hosting

Use GitHub Pages with GitHub Actions.

**Pull request workflow**
- Install dependencies.
- Run formatting and lint checks.
- Run unit tests.
- Validate content.
- Build the website.
- Run relevant end-to-end tests.

**Deployment workflow**
- Deploy only from the main branch.
- Use appropriate minimal GitHub Actions permissions.
- Configure concurrency to avoid conflicting deployments.
- Cache dependencies.
- Preserve build artifacts where useful.

The website should be statically generated. Do not introduce a backend unless a validated requirement justifies it.

---

# 12. Implementation roadmap

The project should be delivered in three independent phases. Each phase must produce a usable website.

## Phase 1 — Professional foundation (MVP)

**Goal:** Publish a credible portfolio with clear positioning and working service pages.

Scope:
- Astro project setup.
- TypeScript and Tailwind.
- Responsive layout.
- Homepage.
- About page.
- Work and selected case studies.
- Writing index and article pages.
- Services page with consulting and mentoring tracks.
- English CV.
- Portuguese homepage and core pages.
- Language switcher.
- Light/dark theme.
- Contact links.
- Basic SEO and metadata.
- GitHub Pages deployment.
- Essential tests.

**Out of scope:**
- Advanced article features.
- Command palette.
- Custom enquiry builder.
- Automated availability.
- Advanced social preview generation.
- Analytics dashboards.

**Definition of Done:**
A visitor can understand your professional positioning, review your experience, explore your work, understand both service offerings and contact you.

## Phase 2 — Editorial platform

**Goal:** Make the website a useful technical publication.

Scope:
- Complete bilingual content support.
- Article categories and tags.
- Improved content metadata.
- Table of contents.
- Code copy functionality.
- Shiki code highlighting.
- Mermaid diagrams.
- Related articles.
- Contextual CTAs.
- RSS feed.
- Sitemap.
- Portuguese CV.
- Dynamic Open Graph images.
- Improved search engine metadata.
- Additional content and accessibility tests.

**Definition of Done:**
Publishing and maintaining technical content is straightforward, and readers can navigate, understand and discover related material.

## Phase 3 — Conversion and discovery

**Goal:** Improve discovery and convert visitors into consulting or mentoring enquiries.

Scope:
- Command Palette.
- Advanced content filtering.
- Contextual CTAs by service track.
- Optional Quick-Brief Builder.
- Consulting enquiry flow.
- Mentoring enquiry flow.
- Manually maintained availability information.
- Optional analytics with privacy-conscious implementation.

**Quick-Brief Builder requirements, if implemented:**
- First ask whether the visitor is interested in consulting or mentoring.
- For consulting, gather the business problem, system context and desired outcome.
- For mentoring, gather career stage, goals and challenges.
- Generate a concise enquiry summary.
- Let the visitor send it through an appropriate contact channel.
- Do not build a backend or persist submissions unless separately justified.

**Definition of Done:**
Visitors can identify the appropriate service and submit a useful enquiry with minimal friction.

---

# 13. Out of scope

Unless a future requirement justifies them, do not build:

- User authentication.
- User dashboards.
- Backend APIs.
- CRM.
- Payment processing.
- Newsletter management.
- Comments.
- Community platform.
- Real-time chat.
- Course hosting.
- Complex booking systems.
- Custom analytics infrastructure.

These are separate products or integrations, not prerequisites for a successful portfolio.

---

# 14. Product principles

1. **Credibility before conversion:** Demonstrate expertise before asking visitors to buy.
2. **Practicality over buzzwords:** Use concrete problems, decisions and outcomes.
3. **Two distinct service audiences:** Consulting and mentoring must have separate messages and journeys.
4. **Content as a long-term asset:** Prioritize useful, evergreen technical material.
5. **Static by default:** Keep the architecture simple, fast and inexpensive.
6. **Build incrementally:** Complete and validate each phase before expanding.
7. **Protect confidentiality:** Public work must never compromise employer or customer information.
8. **Validate commercial assumptions:** Do not invest in complex conversion features before confirming demand.

---

# 15. Success criteria

## Professional presence
- Clear professional positioning.
- Accurate and consistent profile.
- Strong selected-work presentation.
- Complete contact and CV information.

## Editorial
- A repeatable publishing workflow.
- High-quality articles in both languages over time.
- Clear relationships between articles and case studies.

## Consulting
- Visitors understand the problems you solve.
- Consulting enquiries include useful context.
- Initial engagements can be delivered with a clearly defined scope.

## Mentoring
- Visitors understand which career stage each programme serves.
- The mentoring offer accurately reflects demonstrated experience.
- Initial mentoring sessions produce actionable development plans.
- Feedback validates the value and willingness to pay for the offering.

## Technical
- Reliable GitHub Pages deployment.
- Good accessibility and performance.
- Minimal JavaScript and dependencies.
- Maintainable content and component architecture.

**Final product direction:** A technical portfolio and publication that establishes you as a software engineering and architecture professional, with two clear ways to work with you: helping teams build better software and helping engineers become better at their craft.
