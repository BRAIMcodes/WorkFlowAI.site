---
title: "Automated LinkedIn Lead Qualification with n8n and Claude"
description: "Download the n8n JSON blueprint to instantly qualify inbound leads using Claude 3.5 Sonnet and update your HubSpot CRM dynamically."
timeSaved: "5 hours/week"
costToRun: "~$0.02 per lead"
primaryTool: "n8n"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "HubSpot"
  - "LinkedIn API"
  - "Slack"
promptSnippet: |
  You are an expert Sales Development Representative (SDR) assistant.
  Analyze the following lead profile and company data:

  Lead Title: {{ $json.title }}
  LinkedIn Summary: {{ $json.linkedin_summary }}
  Company Industry: {{ $json.industry }}
  Company Size: {{ $json.company_size }}

  Evaluate this lead against our Ideal Customer Profile (ICP) for "[ICP_Goal] (budget > [Target_Budget])".
  Assign a fit score from 1 to 100. Provide a detailed rationale and a customized, non-spammy outreach hook.

  Return ONLY a JSON response in the following format:
  {
    "fitScore": 85,
    "rationale": "High-fit lead. Company size is 250+ and lead is Head of Sales, matching the target profile.",
    "suggestedHook": "Congrats on the recent expansion of your sales team, {{ name }}. Thought you might be interested in automating lead scoring..."
  }
promptVariables:
  - name: "ICP_Goal"
    label: "Ideal Customer Profile"
    placeholder: "Enterprise AI automation services"
    defaultValue: "Enterprise AI automation services"
  - name: "Target_Budget"
    label: "Target Budget Limit"
    placeholder: "$10k/month"
    defaultValue: "$10k/month"
downloadUrl: "/blueprints/lead-qualification-n8n-claude.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "Form Webhook Trigger"
    description: "Triggers instantly when a new lead submits a form on your website or landing page."
    tool: "n8n Webhook"
  - stepNumber: 2
    title: "Fetch LinkedIn Data"
    description: "Uses the lead's email to lookup their company and professional bio using Phantombuster or proxy scraping."
    tool: "LinkedIn API"
  - stepNumber: 3
    title: "ICP Scoring with Claude"
    description: "Claude 3.5 Sonnet analyzes the profile details, assigns a fit score, and writes a personalized outreach hook."
    tool: "Claude 3.5 Sonnet"
  - stepNumber: 4
    title: "Sync with HubSpot"
    description: "Creates or updates the contact record in HubSpot, adding custom fields for Fit Score, AI Rationale, and Hook."
    tool: "HubSpot"
  - stepNumber: 5
    title: "Notify Sales in Slack"
    description: "Sends an alert to #sales-alerts with the score and custom hook if the lead qualifies (score > 70)."
    tool: "Slack"
---

Manual lead research is one of the biggest bottlenecks for growing sales teams. Sales representatives spend hours combing through company websites, LinkedIn profiles, and crunching numbers to see if a prospect is worth their time. 

By automating lead qualification, your team only interacts with pre-qualified leads, ensuring maximum efficiency and minimal response time.

### Prerequisites
1. An active **n8n** account (cloud or self-hosted)
2. Anthropic API key (for Claude 3.5 Sonnet)
3. HubSpot API credentials
4. LinkedIn developer API or profile scraper webhook link

### Setup Guide
1. **Import the JSON Blueprint:** Download the file and import it into your n8n canvas.
2. **Configure your Credentials:** Link your Anthropic, HubSpot, and Slack nodes.
3. **Configure Prompts:** You can modify the ICP guidelines inside the Claude node to fit your own target customer profiles.
4. **Deploy:** Turn on the active toggle and start qualification instantly.
