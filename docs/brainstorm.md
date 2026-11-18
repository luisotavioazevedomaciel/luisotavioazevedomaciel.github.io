# Feature Specification: Visitor & Search Traffic Analytics (`luisotavioazevedomaciel.github.io`)

## 1. Objective & Constraints
Track site traffic and search visibility without compromising the site's performance budget (`< 15 KB` total JS, `100/100` Lighthouse score) or zero-cookie privacy policy.

* **Privacy:** Zero cookies, zero personal data collection, no GDPR consent banner required.
* **Payload Budget:** `0 KB` (Search Console only) or `≤ 3.5 KB` async script (if pairing with a cookieless beacon).
* **Environment Isolation:** Analytics scripts must only execute in production (`import.meta.env.PROD`), never during local `npm run dev`.

---

## 2. Option A: Zero-Footprint Search Analytics (Google Search Console)
Tracks organic Google Search performance from Google's servers with **0 bytes** added to the client payload.

### 2.1 Tracked Metrics
* **Search Impressions & Clicks:** How often English (`/`) and Portuguese (`/pt/`) pages appear and get clicked in Google Search.
* **Queries & Ranking:** Exact search keywords, Click-Through Rate (CTR), and average position by country and device.
* **Indexing & `hreflang` Health:** Sitemap ingestion (`sitemap-index.xml`) and bilingual canonical/alternate validation.

### 2.2 Limitations
* Does **not** track direct visits, bookmarks, or referral traffic from LinkedIn and GitHub.

### 2.3 Setup & Verification
1. Register `https://luisotavioazevedomaciel.github.io/` as a **URL prefix** property in Google Search Console.
2. Add the verification meta tag inside `<head>` in `src/layouts/BaseLayout.astro`:
   ```astro
   <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" />