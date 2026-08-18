# DECISIONS.md — Technical & Design Choices

### Track Picked: Part 2 — The Premium Home Page ("PulseEngine")

---

### 1. Why this strategy over the obvious alternative rejected?

**Rejected Strategy:** The standard SaaS landing page template—filled with generic marketing copy, floating logos, fake metrics ("99.999% uptime!"), and unverified customer testimonials.

**Chosen Strategy:** **Show, Don't Tell — Raw Product Transparency.**
Engineers and tech leads evaluate developer platforms by testing functionality within the first 3 seconds. We built an interactive landing page anchored around a **Live Interactive Pipeline Sandbox**:
- Visitors can manipulate anti-detection controls (fingerprint jitter, header rotation, dynamic CSS selector drift fallback).
- Visitors can inspect raw payload responses vs. cleaned JSON schema outputs in real time.
- Zero fake metrics or fake client logos (enforcing the strict honesty constraint). Every pixel represents real, inspectable product capabilities.

---

### 2. One trade-off made under the time limit & what you'd do with a real week

**Trade-off under time limit:** The interactive pipeline monitor utilizes deterministic client-side simulation state rather than executing live HTTP requests through dedicated edge proxy nodes.

**What we'd build with a real week:**
1. **Live Sandbox Proxy Sandbox:** Connect the interactive canvas to a live WebSocket server streaming real-time browser session parameters, TLS fingerprints (JA3/JA4), and proxy health scores.
2. **One-Click Scraper Deployment:** Allow developers to paste a target URL in the sandbox, auto-generate a stealth scraping script, and deploy it to a serverless edge endpoint directly from the home page.
3. **Visual DOM Selector Auto-Repair Demo:** An interactive visual visualizer showing live AI-driven DOM selector repair when a target site's HTML markup changes overnight.

---

### 3. Where did you use AI tools, and what did you personally verify or change afterward?

**AI Assistance Used:**
- Initial layout scaffolding for responsive CSS grid & flex containers.
- Color system tokens (HSL dark & light mode theme variables).
- Boilerplate for Konami Code keydown listener logic.

**Personal Verification & Manual Adjustments:**
- **Honesty Audit:** Audited all copy to ensure zero fabricated social proof, fake counts, or fake client logos were present.
- **Micro-Interaction Restraint:** Removed excessive spring animations in favor of subtle CSS transitions (150ms-250ms) so the page feels fast, authoritative, and responsive.
- **Mobile & Theme Quality:** Verified layout at exactly 390px width to guarantee zero horizontal scroll, and audited dark/light contrast modes across all typography to meet WCAG AA standards.
