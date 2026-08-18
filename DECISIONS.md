# Written Explanation (DECISIONS.md)

**Project:** PulseEngine — Resilient Web Data Ingestion & Observability Engine  
**Author:** Avinash Kaja  
**Track:** Acdyon Technologies Challenge — Part 2: Premium Home Page  

---

### 1. Why this ingestion strategy over the obvious alternative you rejected?

**Rejected Strategy:** Traditional static Headless Puppeteer / HTTP GET scraping with hardcoded CSS selectors and static request headers.

*Why it fails:*
- **Instant Anti-Bot Blocks:** Standard HTTP scrapers trigger TLS fingerprint checks (JA3/JA4) and IP bans on non-cooperative platforms (e.g., LinkedIn, Naukri, Indeed) within seconds.
- **Fragile DOM Extraction:** Hardcoded CSS selectors break constantly when target sites perform minor UI redesigns or update obfuscated class names.
- **Superficial Marketing Pattern:** Standard landing pages rely on static screenshots, fake client logos, and unverified uptime claims ("99.999%").

**Chosen Strategy:** **Stealth Fingerprint Jitter + Semantic Self-Repairing Ingestion Sandbox ("Show, Don't Tell").**

*Why it wins:*
- **Resilient Ingestion:** Enforces dynamic TLS cipher suite randomization, canvas noise jitter, and semantic DOM selector fallbacks to ensure uninterrupted data pipelines.
- **Product Transparency:** Built an interactive live control room sandbox right on the home page. Visitors manipulate stealth toggles (TLS jitter, header rotation, selector drift) and inspect raw vs. clean JSON payloads in real time.
- **Honesty Constraint:** Zero fabricated client logos, fake metrics, or fake testimonials. Every pixel proves real platform engineering capabilities.

---

### 2. One trade-off you made under the time limit, and what you’d do with a real week

**Trade-off under time limit:**  
The interactive pipeline sandbox uses deterministic client-side simulation state and simulated web data streams rather than connecting directly to live distributed edge proxy clusters.

**What I'd build with a real week:**
1. **Live Edge Proxy Pipeline:** Connect the interactive playground to a WebSocket service streaming live HTTP responses, real-time TLS JA4 fingerprint signatures, and proxy pool health metrics.
2. **One-Click Stealth Scraper Generator:** Enable developers to enter any target URL in the sandbox, auto-generate a stealth ingestion script, and deploy it to a serverless edge runner in 1 click.
3. **Automated Visual DOM Auto-Repair Visualizer:** An interactive DOM tree inspector visualizing real-time AI-driven DOM selector auto-healing when target website HTML structures drift.

---

### 3. Where did you use AI tools, and what did you personally verify or change afterward?

**AI Tools Usage:**
- Scaffolded initial responsive layout containers (CSS Grid & Flexbox boilerplate).
- Generated color system tokens for dual HSL dark and light mode themes.
- Assisted with structural code snippets for the Konami Code listener logic.

**Personal Verification & Manual Adjustments:**
- **Strict Honesty & Requirement Audit:** Verified all copy to guarantee zero fake social proof, fake counts, or fake partner logos.
- **UI Performance & Motion Tuning:** Replaced spring animations with lightweight, zero-jank CSS transitions (150ms–250ms) for an instant, authoritative developer experience.
- **Accessibility & Mobile Quality:** Tested pixel-perfect responsiveness at 390px mobile and 1440px desktop viewport widths, and audited all color pairings against WCAG AA contrast standards.
