---
title: "CRM Deal Intelligence Enricher with Make.com and Claude"
description: "Automatically write a Claude-powered deal brief for every new HubSpot deal using Clearbit company intelligence — buying signals, risks, and suggested approach."
timeSaved: "5 hours/week"
costToRun: "~$0.03 per deal"
primaryTool: "Make.com"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "HubSpot"
  - "Clearbit"
  - "Slack"
lastVerified: "June 2026"
setupTime: "~30 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Sales", "CRM", "Intelligence", "Deal Management"]
promptSnippet: |
  You are a senior account executive and deal strategist. A new sales deal has just been created. Write a concise deal intelligence brief to help the account owner prepare for their first conversation.

  ## Company Intelligence (from Clearbit)
  - Company: [COMPANY_NAME]
  - Industry: [INDUSTRY]
  - Headcount: [HEADCOUNT]
  - Headcount growth (6mo): [HEADCOUNT_GROWTH]%
  - Total funding raised: $[TOTAL_FUNDING]
  - Last funding round: [LAST_ROUND_TYPE] ($[LAST_ROUND_AMOUNT]) — [LAST_ROUND_DATE]
  - Tech stack (detected): [TECH_STACK]
  - Annual revenue estimate: $[REVENUE_ESTIMATE]
  - HQ location: [HQ_LOCATION]

  ## Deal Context
  - Deal name: [DEAL_NAME]
  - Deal value: $[DEAL_VALUE]
  - Stage: [DEAL_STAGE]
  - Contact: [CONTACT_NAME], [CONTACT_TITLE]
  - Source: [LEAD_SOURCE]

  Write a deal brief with exactly these sections:

  ## 🎯 Deal Overview
  2 sentences summarizing the opportunity and why it's worth pursuing.

  ## 📈 Buying Signals
  List 3-5 specific signals from the company data that suggest they may have budget and urgency. Reference specific data points (funding recency, headcount growth, tech stack gaps, etc.).

  ## ⚔️ Competitive Context
  Based on their tech stack, identify likely incumbent vendors and tools they may already use. Note any overlap with our product category and how to position against likely competition.

  ## 🚩 Risk Factors
  2-3 honest risk factors for this deal (size mismatch, budget constraints from funding stage, technical complexity based on stack, etc.).

  ## 💬 Suggested Opening Approach
  A specific 3-4 sentence opening pitch tailored to this company's situation. Include a relevant pain point based on their stage and industry. Do NOT use generic SaaS talking points.

  ## ❓ Discovery Questions
  5 high-quality discovery questions specific to this company's situation.

  Keep the entire brief under 500 words. Be specific, not generic.
promptVariables:
  - name: "COMPANY_NAME"
    label: "Company Name"
    placeholder: "Acme Corp"
    defaultValue: ""
  - name: "INDUSTRY"
    label: "Industry"
    placeholder: "Financial Services"
    defaultValue: ""
  - name: "HEADCOUNT"
    label: "Employee Headcount"
    placeholder: "250"
    defaultValue: ""
  - name: "HEADCOUNT_GROWTH"
    label: "6-Month Headcount Growth %"
    placeholder: "18"
    defaultValue: ""
  - name: "TOTAL_FUNDING"
    label: "Total Funding Raised ($)"
    placeholder: "45,000,000"
    defaultValue: ""
  - name: "LAST_ROUND_TYPE"
    label: "Last Funding Round Type"
    placeholder: "Series B"
    defaultValue: ""
  - name: "LAST_ROUND_AMOUNT"
    label: "Last Round Amount ($)"
    placeholder: "20,000,000"
    defaultValue: ""
  - name: "LAST_ROUND_DATE"
    label: "Last Round Date"
    placeholder: "March 2026"
    defaultValue: ""
  - name: "TECH_STACK"
    label: "Detected Tech Stack"
    placeholder: "Salesforce, Segment, Intercom, AWS"
    defaultValue: ""
  - name: "REVENUE_ESTIMATE"
    label: "Estimated Annual Revenue ($)"
    placeholder: "12,000,000"
    defaultValue: ""
  - name: "HQ_LOCATION"
    label: "HQ Location"
    placeholder: "San Francisco, CA"
    defaultValue: ""
  - name: "DEAL_NAME"
    label: "HubSpot Deal Name"
    placeholder: "Acme Corp - Enterprise"
    defaultValue: ""
  - name: "DEAL_VALUE"
    label: "Deal Value ($)"
    placeholder: "24,000"
    defaultValue: ""
  - name: "DEAL_STAGE"
    label: "Deal Stage"
    placeholder: "Discovery"
    defaultValue: ""
  - name: "CONTACT_NAME"
    label: "Primary Contact Name"
    placeholder: "Jane Doe"
    defaultValue: ""
  - name: "CONTACT_TITLE"
    label: "Primary Contact Title"
    placeholder: "VP of Engineering"
    defaultValue: ""
  - name: "LEAD_SOURCE"
    label: "Lead Source"
    placeholder: "Inbound - Content"
    defaultValue: ""
downloadUrl: "/blueprints/crm-deal-enricher-make-claude.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "New Deal Created in HubSpot"
    description: "Make.com's HubSpot Watch Records module triggers the moment a new deal is created, capturing deal name, value, stage, associated contact, and company."
    tool: "HubSpot"
  - stepNumber: 2
    title: "Clearbit Fetches Company Intelligence"
    description: "Clearbit's Company Enrichment API is called with the contact's email domain. Returns funding history, headcount, headcount growth, technology stack, and revenue estimate."
    tool: "Clearbit"
  - stepNumber: 3
    title: "Claude Writes Deal Intelligence Brief"
    description: "All company intelligence and deal context is passed to Claude 3.5 Sonnet, which writes a deal-specific brief covering buying signals, competitive context, risk factors, and suggested approach."
    tool: "Claude 3.5 Sonnet"
  - stepNumber: 4
    title: "Attach Brief to HubSpot Deal"
    description: "The Claude-generated brief is saved as a HubSpot Note attached to the deal record, where the account owner sees it immediately upon opening the deal."
    tool: "HubSpot"
  - stepNumber: 5
    title: "Notify Account Owner in Slack"
    description: "A direct Slack message is sent to the deal owner containing the company name, deal value, risk score summary, and a direct link to the HubSpot deal."
    tool: "Slack"
---

Sales reps spend an average of 20–30 minutes researching a new prospect before their first call — looking up funding history on Crunchbase, checking LinkedIn for the contact's background, scanning the company website, and trying to piece together a coherent approach. This workflow compresses that research into 60 seconds and makes it available the moment a deal is created, before the rep even knows it's there.

The Clearbit + Claude combination is particularly powerful because Clearbit's firmographic and technographic data gives Claude something concrete to reason about. A generic "write me a deal brief for a SaaS company" prompt produces generic output. But when Claude knows that the company raised a $20M Series B four months ago, their headcount grew 18% in six months, and they're running Salesforce but not a CPQ tool, it can write specific buying signals and a tailored pitch that a good sales rep would have taken 25 minutes to figure out themselves.

The HubSpot Note attachment ensures the brief is always exactly where reps need it — no switching to a separate tool, no hunting through Slack history. The Slack notification serves as a nudge to actually read it before the first call.

## Prerequisites

1. Make.com account — Core plan or higher (this scenario uses ~8 operations per deal)
2. HubSpot account with API access; ensure deals are associated with contacts (not just companies) so the email domain is accessible for Clearbit
3. Clearbit account — the Company Enrichment API is available on Clearbit's paid plans (starting ~$99/month); alternatively, use Hunter.io or Apollo.io's company API for a lower-cost alternative
4. Anthropic API key with Claude 3.5 Sonnet access
5. Slack bot connected to Make.com with `chat:write` permission; the bot should be able to send DMs (not just channel messages)

## Setup Guide

1. **Configure HubSpot webhook** — in Make.com, use "Watch Records (Webhook)" for HubSpot Deals. Select "Created" as the trigger event. Ensure the webhook includes associated contacts (you'll need the contact email to call Clearbit).
2. **Add a HubSpot Get Contact step** — the deal trigger may not include contact fields directly. Add a "Get a Contact" module using the associated contact ID from the deal, to retrieve the contact's email.
3. **Extract email domain** — use a Make.com Text module or a Set Variable to extract the domain from the contact's email: `{{split(1.email; "@")[1]}}`. This is your Clearbit lookup key.
4. **Call Clearbit** — HTTP GET to `https://company.clearbit.com/v2/companies/find?domain={{domain}}` with header `Authorization: Bearer {{clearbit_api_key}}`. Map funding, headcount, tech stack fields from the response.
5. **Handle missing Clearbit data** — not all companies are in Clearbit's database. Add a Make.com Router with a condition: if Clearbit returns a 404 or empty response, fill fallback values ("Data unavailable") and continue the workflow so the deal still gets a partial brief.
6. **Configure Claude API call** — HTTP POST to `https://api.anthropic.com/v1/messages`. Use `claude-3-5-sonnet-20241022`, set `max_tokens: 1200` (sufficient for a 500-word brief). Map all 17 prompt variables from HubSpot and Clearbit data.
7. **Create HubSpot Note** — use HubSpot "Create a Note" action. Set `hs_note_body` to Claude's response. Set `associations` to the deal ID so the note appears on the deal timeline.
8. **Look up deal owner's Slack ID** — HubSpot stores the deal owner's email. Use Slack's `users.lookupByEmail` API call to convert email to a Slack user ID, then send a DM using `chat.postMessage` with `channel: {{slack_user_id}}`.

## Who This Is NOT For

- **High-volume inbound sales teams** (50+ new deals/day) — at $0.03/deal, costs remain low, but Make.com operation volumes and Clearbit API rate limits become factors. Consider a dedicated data enrichment pipeline instead.
- **Teams selling to very small businesses or sole proprietors** — Clearbit's database skews toward companies with 10+ employees and digital presence. SMB data quality will be significantly lower.
- **Deal briefs requiring non-public intelligence** — this workflow uses only public firmographic and technographic data. It does not access news, social signals, or intent data. For deeper intelligence, integrate with Bombora or G2 Intent data.
- **Teams without a HubSpot deal + contact association discipline** — if reps create deals without linking contacts, the workflow can't retrieve an email for Clearbit enrichment. Fix your CRM hygiene first.
