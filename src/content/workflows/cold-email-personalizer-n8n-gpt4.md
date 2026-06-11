---
title: "AI Cold Email Personalizer With n8n And GPT 4o"
description: "Automatically write hyper-personalized cold emails for each prospect using GPT-4o, pulling live company data and recent news via n8n."
timeSaved: "8 hours/week"
costToRun: "~$0.03 per email"
primaryTool: "n8n"
connectedApps:
  - "GPT-4o"
  - "Apollo.io"
  - "Gmail"
  - "Google Sheets"
lastVerified: "June 2026"
setupTime: "~25 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Sales", "Outreach", "GPT-4o", "Beginner-friendly"]
promptSnippet: |
  You are an elite B2B sales copywriter. Write a cold email for:

  Prospect: [PROSPECT_NAME], [PROSPECT_TITLE] at [COMPANY_NAME]
  Recent company news: [RECENT_NEWS]
  Pain point to address: [PAIN_POINT]

  Rules:
  - Max 100 words
  - No buzzwords ("synergy", "leverage", "streamline")
  - Reference the company news specifically in the first line
  - End with a soft CTA (not "Can we chat?")
  - Sound human, not robotic
promptVariables:
  - name: "PAIN_POINT"
    label: "Primary Pain Point to Address"
    placeholder: "manual data entry slowing down their ops team"
    defaultValue: "manual reporting taking hours each week"
downloadUrl: "/blueprints/cold-email-personalizer-n8n-gpt4.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Read Prospect List from Google Sheets"
    description: "Reads each row from your prospect spreadsheet, triggering once per row on a schedule."
    tool: "n8n Google Sheets"
  - stepNumber: 2
    title: "Enrich with Apollo.io Data"
    description: "Fetches company size, recent funding news, tech stack, and contact role from Apollo.io API."
    tool: "Apollo.io"
  - stepNumber: 3
    title: "Generate Email with GPT-4o"
    description: "GPT-4o writes a hyper-personalized 80-100 word cold email referencing the prospect's specific company context."
    tool: "GPT-4o"
  - stepNumber: 4
    title: "Write Draft to Gmail"
    description: "Saves each generated email as a Draft in Gmail, ready for a human to review and send."
    tool: "Gmail"
  - stepNumber: 5
    title: "Log Output to Google Sheets"
    description: "Appends the email draft, timestamp, and generation cost to a tracking sheet."
    tool: "Google Sheets"
---

Cold email that sounds cold kills reply rates. The average SDR spends 45 minutes personalizing 10 emails — this workflow does it in 10 seconds per email, pulling live company news and tailoring the tone to each prospect's role.

### Prerequisites
1. n8n account (cloud or self-hosted)
2. OpenAI API key (GPT-4o access)
3. Apollo.io API key (free tier works for up to 50/day)
4. Gmail OAuth connected in n8n

### Setup Guide
1. **Import** the JSON blueprint into your n8n canvas
2. **Connect** your Google Sheets with the prospect list (Name, Title, Company, Email columns required)
3. **Set your API keys** in the OpenAI and Apollo credential nodes
4. **Customize the prompt** — change the pain point to match your product's ICP
5. **Test** with a single row before enabling the full trigger

### Who This Is NOT For
- Teams sending fewer than 10 cold emails per day (manual is fine at that scale)
- Highly regulated industries where AI-generated content requires legal review
