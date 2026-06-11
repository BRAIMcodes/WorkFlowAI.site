# ⚡ WorkflowAI.site — The Open-Source Library for AI Automations

[![Build Status](https://github.com/BRAIMcodes/WorkFlowAI.site/actions/workflows/ci.yml/badge.svg)](https://github.com/BRAIMcodes/WorkFlowAI.site/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**WorkflowAI.site** is the open-source "Wikipedia" of AI automation workflows. It provides a curated, verified catalog of over **950+ ready-to-use recipes** for **n8n**, **Make.com**, and **Zapier**, complete with dynamic prompt customizer sandboxes and local JSON downloads.

👉 **Visit the Live Site:** [https://www.workflowai.site](https://www.workflowai.site)

---

## 🚀 Key Features

- **950+ Verified Blueprints:** High-quality, tested recipes categorized across Sales, Marketing, Customer Support, HR/Recruiting, and Operations.
- **1-Click Native Downloads:** Blueprints are hosted locally on our CDN. Clicking "Download Blueprint" triggers a direct local download of the JSON file rather than exposing raw code.
- **Prompt Customizer Sandbox:** View and customize LLM system prompts directly on the detail page using interactive inputs before copying.
- **Dynamic Catalog Filters:** Filter instantly by tool (n8n, Make, Zapier), difficulty (Beginner, Intermediate, Advanced), or search terms using a custom command palette.
- **Auto-Generating Sitemap:** Fully optimized for programmatic SEO (pSEO), with an auto-generated sitemap containing all 950+ pages for search engines.

---

## 🛠️ Technology Stack

- **Framework:** [Astro v5](https://astro.build) (Static Site Generation for sub-second page loads)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com) (Modern utility-first styling with premium dark modes and glassmorphism)
- **Icons:** Centralized SVG Icon Component (combining premium Lucide and brand vector icons)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) (Distributed edge delivery with built-in serverless Functions for newsletter subscription APIs)
- **Newsletter API:** [Resend](https://resend.com) (Wired with dynamic audience auto-creation)

---

## 💻 Local Development

To run the project locally, follow these steps:

### Prerequisites
Make sure you have Node.js 18+ and `npm` installed.

### 1. Clone the repository
```bash
git clone https://github.com/BRAIMcodes/WorkFlowAI.site.git
cd WorkFlowAI.site
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start dev server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Build for production
```bash
npm run build
```
This will compile the site and sitemaps into the `dist/` directory.

---

## 📥 Community Submissions & Contributions

We welcome community members contributing new recipes! There are two ways to share your workflows:

### Option A: Open a GitHub Issue (Recommended)
1. Navigate to our [Issue page](https://github.com/BRAIMcodes/WorkFlowAI.site/issues/new?title=[Submission]+New+Workflow+Recipe&body=Describe+your+workflow+here...).
2. Fill out the pre-formatted template with your workflow's name, connected apps, and paste the raw n8n JSON or Make.com blueprint.
3. Our team will review, format, and publish it within 48 hours.

### Option B: Run the Local Importer
We maintain a custom, cross-platform importer script that automatically grabs community workflows from various open-source hubs, filters for AI-related templates, maps node steps, and outputs clean markdown pages:
```bash
# Run the importer to pull fresh templates and generate local blueprints
node ./scripts/import-workflows.js
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Made with ⚡ by the automation community.*
