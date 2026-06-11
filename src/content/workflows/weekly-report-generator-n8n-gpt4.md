---
title: "Automated Weekly Business Report Generator with n8n"
description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
timeSaved: "4 hours/week"
costToRun: "~$0.06 per report"
primaryTool: "n8n"
connectedApps:
  - "GPT-4o"
  - "Google Analytics"
  - "HubSpot"
  - "Slack"
  - "Google Docs"
lastVerified: "June 2026"
setupTime: "~40 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Operations", "Reporting", "Analytics", "Leadership"]
promptSnippet: |
  You are the Chief of Staff at a B2B SaaS company. Every Friday you write a weekly business report for the executive team. Write this week's report using the data provided.

  ## This Week's Data

  **Traffic (Google Analytics 4):**
  - Total sessions: [GA_SESSIONS]
  - New users: [GA_NEW_USERS]
  - Avg. session duration: [GA_SESSION_DURATION]
  - Top acquisition channel: [GA_TOP_CHANNEL]
  - Week-over-week sessions change: [GA_WOW_CHANGE]%

  **Sales Pipeline (HubSpot):**
  - New deals created: [HS_NEW_DEALS]
  - Total pipeline value added: $[HS_PIPELINE_VALUE]
  - Deals closed won: [HS_CLOSED_WON_COUNT] ($[HS_CLOSED_WON_VALUE])
  - Deals closed lost: [HS_CLOSED_LOST_COUNT]
  - Demo calls booked: [HS_DEMOS_BOOKED]

  **Revenue (Stripe):**
  - MRR: $[STRIPE_MRR]
  - MRR change vs last week: [STRIPE_MRR_CHANGE]%
  - New subscriptions: [STRIPE_NEW_SUBS]
  - Churned subscriptions: [STRIPE_CHURNED]
  - Expansion revenue: $[STRIPE_EXPANSION]

  Report period: [REPORT_WEEK]

  Write the report in this exact format:

  # Weekly Business Report — [REPORT_WEEK]

  ## 🏆 Highlights
  3 bullet points on the best results this week. Be specific with numbers.

  ## ⚠️ Watch Items
  2-3 bullet points on metrics that underperformed or need attention. Be direct — don't soften bad news.

  ## 📈 Metric Snapshot
  | Metric | This Week | vs Last Week | Status |
  (populate a clean markdown table with all the above metrics)

  ## 💡 Insights & Recommendations
  3-4 paragraphs synthesizing what these numbers mean together. Identify correlations across GA, HubSpot, and Stripe data. End with 2-3 specific action items for next week.

  ## 🔭 Next Week's Focus
  What the team should prioritize based on this week's data.

  Tone: direct, data-driven, no fluff. This is for a 5-person exec team that reads fast.
promptVariables:
  - name: "GA_SESSIONS"
    label: "GA4 Total Sessions"
    placeholder: "12,450"
    defaultValue: ""
  - name: "GA_NEW_USERS"
    label: "GA4 New Users"
    placeholder: "3,210"
    defaultValue: ""
  - name: "GA_SESSION_DURATION"
    label: "GA4 Avg Session Duration"
    placeholder: "2m 34s"
    defaultValue: ""
  - name: "GA_TOP_CHANNEL"
    label: "GA4 Top Acquisition Channel"
    placeholder: "Organic Search"
    defaultValue: ""
  - name: "GA_WOW_CHANGE"
    label: "GA4 Week-over-Week Change %"
    placeholder: "+8"
    defaultValue: ""
  - name: "HS_NEW_DEALS"
    label: "HubSpot New Deals Created"
    placeholder: "14"
    defaultValue: ""
  - name: "HS_PIPELINE_VALUE"
    label: "HubSpot Pipeline Value Added ($)"
    placeholder: "87,500"
    defaultValue: ""
  - name: "HS_CLOSED_WON_COUNT"
    label: "HubSpot Deals Closed Won"
    placeholder: "3"
    defaultValue: ""
  - name: "HS_CLOSED_WON_VALUE"
    label: "HubSpot Closed Won Value ($)"
    placeholder: "24,000"
    defaultValue: ""
  - name: "HS_CLOSED_LOST_COUNT"
    label: "HubSpot Deals Closed Lost"
    placeholder: "2"
    defaultValue: ""
  - name: "HS_DEMOS_BOOKED"
    label: "HubSpot Demo Calls Booked"
    placeholder: "9"
    defaultValue: ""
  - name: "STRIPE_MRR"
    label: "Stripe MRR ($)"
    placeholder: "142,300"
    defaultValue: ""
  - name: "STRIPE_MRR_CHANGE"
    label: "Stripe MRR Change % vs Last Week"
    placeholder: "+1.8"
    defaultValue: ""
  - name: "STRIPE_NEW_SUBS"
    label: "Stripe New Subscriptions"
    placeholder: "7"
    defaultValue: ""
  - name: "STRIPE_CHURNED"
    label: "Stripe Churned Subscriptions"
    placeholder: "1"
    defaultValue: ""
  - name: "STRIPE_EXPANSION"
    label: "Stripe Expansion Revenue ($)"
    placeholder: "3,200"
    defaultValue: ""
  - name: "REPORT_WEEK"
    label: "Report Week Label"
    placeholder: "Week of June 9, 2026"
    defaultValue: ""
downloadUrl: "/blueprints/weekly-report-generator-n8n-gpt4.json"
category: "Operations"
persona: "Operations Teams"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "Friday 4PM Schedule Trigger"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "n8n"
  - stepNumber: 2
    title: "Fetch Traffic Data from Google Analytics 4"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "Google Analytics"
  - stepNumber: 3
    title: "Fetch Pipeline Data from HubSpot"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "HubSpot"
  - stepNumber: 4
    title: "Fetch Revenue Data from Stripe"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "n8n"
  - stepNumber: 5
    title: "GPT-4o Writes Executive Summary"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "GPT-4o"
  - stepNumber: 6
    title: "Post to #leadership Slack Channel"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "Slack"
  - stepNumber: 7
    title: "Create Google Doc with Full Report"
    description: "Compile GA4 traffic, HubSpot pipeline, and Stripe revenue into a GPT-4o executive summary every Friday automatically."
    tool: "Google Docs"
---

Every leadership team needs a weekly business pulse — but someone has to pull the numbers, format them, write the narrative, and distribute it. In most companies that's an operations manager or Chief of Staff burning 3–4 hours every Friday just on data gathering. This workflow fully automates the data collection from the three sources that matter most for a typical B2B SaaS business (traffic, pipeline, revenue), and uses GPT-4o to write a genuinely useful synthesis — not just a data dump, but a narrative that identifies correlations and recommends actions.

The prompt is engineered to force GPT-4o to behave like an experienced operator, not a report-writing template. It's specifically instructed to not soften bad news in the Watch Items section, to identify cross-metric correlations (e.g., "Traffic up 15% but demo bookings flat suggests landing page conversion issues"), and to end with specific, actionable next-week priorities rather than vague recommendations.

The Slack vs. Google Doc split is intentional. Executives read Slack; archiving happens in Google Drive. The Slack message contains only the highlights and watch items — enough to know if there's a fire — with a link to the full report for anyone who needs the detail. This prevents #leadership from becoming a wall of text every Friday.

## Prerequisites

1. n8n Cloud or self-hosted instance with at least 200 workflow executions/month available
2. Google Analytics 4 property with the GA4 Data API enabled (free; enable at console.cloud.google.com)
3. HubSpot API key or OAuth app with `crm.objects.deals.read` scope
4. Stripe API key with `read` permissions (restrict key to charges and subscriptions endpoints only for security)
5. OpenAI API key with GPT-4o access
6. Google Docs/Drive API enabled and authenticated in n8n
7. Slack bot with `chat:write` scope added to #leadership channel

## Setup Guide

1. **Enable GA4 Data API** — in Google Cloud Console, create a project or use existing, enable the "Google Analytics Data API", and create a Service Account. Download the JSON key. In GA4 Admin, add the service account email as a Viewer.
2. **Configure GA4 node in n8n** — use the HTTP Request node with the GA4 Data API's `runReport` endpoint. Set date ranges dynamically: `startDate: {{$now.startOf('isoWeek').toFormat('yyyy-MM-dd')}}`, `endDate: {{$now.toFormat('yyyy-MM-dd')}}`.
3. **Set up HubSpot deal queries** — use HubSpot's Deals Search API with `createdate` filter set to the current week. Use n8n expressions to sum `amount` fields: `{{$json.results.reduce((sum, deal) => sum + (deal.properties.amount || 0), 0)}}`.
4. **Configure Stripe API calls** — two calls needed: (1) `GET /v1/subscriptions?created[gte]={week_start}&status=active` for new subscriptions, (2) `GET /v1/subscriptions?canceled_at[gte]={week_start}` for cancellations. Calculate MRR by summing plan amounts.
5. **Build the data aggregation node** — use an n8n Code node to merge all three data sources into a single object matching the prompt variable names.
6. **Configure GPT-4o call** — use `gpt-4o` model, set max_tokens to 2000, temperature to 0.3 (lower temperature produces more consistent, factual reports). Map all prompt variables.
7. **Create Google Doc** — use Google Docs API "Create Document" action, then "Batch Update" to insert the report content. Title format: `Weekly Report – {{$now.toFormat('yyyy-MM-dd')}}`.
8. **Set up Slack message** — parse out only the Highlights and Watch Items sections from GPT-4o's response using a Regex Extract node, then format as a Slack Block Kit message for clean rendering.

## Who This Is NOT For

- **Companies without a consistent data stack** — if your revenue is in QuickBooks, traffic is in Adobe Analytics, and pipeline is in Salesforce, you'll need to adapt the API calls significantly. The blueprint assumes GA4 + HubSpot + Stripe specifically.
- **Teams that need daily reporting** — this is a weekly batch workflow. For daily metrics, reduce the scope to a simpler dashboard-style report rather than a GPT-4o narrative.
- **Organizations with complex multi-product or multi-geography reporting** — the prompt and data model assume a single-product, single-currency business. Multi-product reporting requires significant prompt engineering and data segmentation work.
- **Startups with less than 3 months of data** — GPT-4o's "vs last week" analysis and trend identification requires comparative data. Week-1 reports will have nothing to compare against.
