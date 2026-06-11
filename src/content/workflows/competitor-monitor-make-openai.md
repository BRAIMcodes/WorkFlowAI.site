---
title: "Automated Competitor Price and Feature Monitor with Make.com"
description: "Scrape competitor pricing pages weekly with Apify, detect changes using GPT-4o, and alert your team in Slack before they alert your customers."
timeSaved: "6 hours/week"
costToRun: "~$0.05 per run"
primaryTool: "Make.com"
connectedApps:
  - "OpenAI GPT-4o"
  - "Google Sheets"
  - "Slack"
  - "Apify"
lastVerified: "June 2026"
setupTime: "~40 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Marketing", "Competitive Intelligence", "Monitoring"]
promptSnippet: |
  You are a competitive intelligence analyst. You have been given two datasets:

  **Last Week's Pricing/Features:**
  [PREVIOUS_DATA]

  **This Week's Scraped Data:**
  [CURRENT_DATA]

  Compare these datasets for the competitor: [COMPETITOR_NAME]

  Identify and report ONLY meaningful changes. Format your response as:

  ## 🔴 Critical Changes (require immediate action)
  - Price changes on any tier
  - New or removed product tiers
  - Changes to free trial or freemium terms

  ## 🟡 Notable Changes (worth tracking)
  - Feature additions or removals
  - Positioning language changes
  - New integrations listed

  ## 🟢 No Change
  - Briefly confirm what remained stable.

  ## 💡 Strategic Implication
  - 2-3 sentences on what these changes might signal and how we should respond.

  If no meaningful changes are detected, respond only with: "NO_SIGNIFICANT_CHANGES"
promptVariables:
  - name: "COMPETITOR_NAME"
    label: "Competitor Company Name"
    placeholder: "Acme Corp"
    defaultValue: ""
  - name: "PREVIOUS_DATA"
    label: "Last Week's Scraped Data"
    placeholder: "Mapped from Google Sheets previous row"
    defaultValue: ""
  - name: "CURRENT_DATA"
    label: "This Week's Scraped Data"
    placeholder: "Mapped from Apify output"
    defaultValue: ""
downloadUrl: "/blueprints/competitor-monitor-make-openai.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "Weekly Schedule Trigger"
    description: "Make.com scheduler fires every Monday at 7:00 AM, before your team's weekly marketing standup."
    tool: "Make.com"
  - stepNumber: 2
    title: "Apify Scrapes Competitor Pricing Pages"
    description: "Apify's Web Scraper actor visits each competitor URL defined in your Google Sheet, extracting visible text from pricing, features, and homepage sections."
    tool: "Apify"
  - stepNumber: 3
    title: "Retrieve Previous Week's Data from Google Sheets"
    description: "Make.com reads the last stored row for each competitor from a Google Sheets tracking tab to establish a baseline for comparison."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "GPT-4o Compares Data and Identifies Changes"
    description: "GPT-4o receives both the new and previous scraped text and returns a structured change report, flagging critical vs. notable vs. unchanged items."
    tool: "OpenAI GPT-4o"
  - stepNumber: 5
    title: "Update Google Sheets with Latest Data"
    description: "The new scraped content replaces the previous week's row in Google Sheets, maintaining a rolling single-week comparison baseline."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Conditional Slack Alert on Significant Changes"
    description: "Only when GPT-4o's response does NOT contain 'NO_SIGNIFICANT_CHANGES', a formatted alert with the full change report is posted to #competitive-intel in Slack."
    tool: "Slack"
---

Most marketing teams do competitive research the same way: one person owns a browser bookmarks folder of competitor pricing pages and manually checks them whenever they remember to. That means your team often finds out about a competitor's pricing drop when a prospect mentions it on a call — not before. This workflow catches those changes the morning they happen, every week, automatically.

The architecture uses Apify for scraping because it handles JavaScript-rendered pages (modern SaaS pricing pages almost universally use React or Vue), rate limiting, and proxy rotation out of the box. GPT-4o then does the heavy lifting of semantic comparison — it doesn't just diff the raw text, it understands that "Starting at $49/seat" and "From $49 per user" represent the same pricing even if the wording changed. The filter for `NO_SIGNIFICANT_CHANGES` keeps Slack noise low: your team only gets alerted when something real happened.

Over 6 hours saved per week is conservative. Most marketing teams spend 30–60 minutes per competitor per week on manual checks. If you monitor 6 competitors, this workflow pays for itself in under two days.

## Prerequisites

1. A Make.com account (the Core plan at $9/month is sufficient — this scenario uses ~5 operations per run)
2. An OpenAI API key with GPT-4o access (pay-as-you-go; typical monthly cost under $3 for weekly runs against 10 competitors)
3. An Apify account (free tier includes 5 actor runs/month; paid starts at $49/month for unlimited runs)
4. A Google Sheet with columns: `Competitor Name`, `Pricing URL`, `Last Scraped Text`, `Last Run Date`
5. A Slack workspace with a `#competitive-intel` channel and an incoming webhook URL

## Setup Guide

1. **Set up your competitor tracking sheet** in Google Sheets. Add one row per competitor with their name and pricing page URL. Leave `Last Scraped Text` blank initially — it will populate on first run.
2. **Configure Apify** — create a new task using the "Web Scraper" actor. Set the start URL dynamically (you'll pass this from Make.com). Set the page function to return `document.body.innerText` for simplicity, or write a custom selector for the pricing table specifically.
3. **Import the Make.com blueprint** from the download link above. Connect your Google Sheets, Apify, OpenAI, and Slack credentials in the Connections panel.
4. **Map Google Sheets columns** in the "Read competitors" module — ensure `Pricing URL` feeds into the Apify module's start URL field, and `Last Scraped Text` feeds into the GPT-4o prompt as `[PREVIOUS_DATA]`.
5. **Set the GPT-4o model** to `gpt-4o` (not `gpt-4o-mini`) — the quality difference in detecting subtle pricing changes is meaningful.
6. **Configure the Slack webhook** — create an incoming webhook at api.slack.com/messaging/webhooks. Paste the URL into the Slack module in Make.com.
7. **Add a filter** between the GPT-4o module and the Slack module: condition = GPT-4o output does NOT contain `NO_SIGNIFICANT_CHANGES`.
8. **Run manually once** to populate the `Last Scraped Text` column. After that, activate the weekly schedule.

## Who This Is NOT For

- **Competitors with login-gated pricing** — Apify cannot authenticate to fetch pricing behind a paywall or sign-up wall without additional session management work.
- **Teams monitoring more than 20 competitors weekly** — Apify costs will scale significantly; consider batching runs bi-weekly or filtering to top 10.
- **Companies in industries with legal restrictions on web scraping** — review the competitor's `robots.txt` and Terms of Service. This workflow is intended for publicly available pricing pages only.
- **Teams that need real-time monitoring** (within hours of a change) — this is a weekly batch workflow. For real-time alerts, look at purpose-built tools like Visualping or Competitors App.
