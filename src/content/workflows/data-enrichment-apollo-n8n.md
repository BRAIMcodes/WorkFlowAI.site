---
title: "Bulk CRM Data Enrichment with Apollo.io and n8n"
description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
timeSaved: "6 hours/week"
costToRun: "Free Tier (Apollo free plan)"
primaryTool: "n8n"
connectedApps:
  - "Apollo.io"
  - "HubSpot"
  - "Google Sheets"
  - "Slack"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Sales", "CRM", "Data Enrichment", "Beginner-friendly"]
promptSnippet: |
  # Apollo.io People Enrichment API Call

  POST https://api.apollo.io/v1/people/match

  Headers:
    Content-Type: application/json
    X-Api-Key: [APOLLO_API_KEY]

  Body:
    {
      "first_name": "[CONTACT_FIRST_NAME]",
      "last_name": "[CONTACT_LAST_NAME]",
      "email": "[CONTACT_EMAIL]",
      "organization_name": "[COMPANY_NAME]",
      "reveal_personal_emails": false,
      "reveal_phone_number": true
    }

  Key fields to extract from response:
    - person.title → Job Title
    - person.phone_numbers[0].sanitized_number → Phone
    - person.linkedin_url → LinkedIn URL
    - person.organization.estimated_num_employees → Headcount
    - person.organization.total_funding → Total Funding (USD)
    - person.organization.funding_events[0].date → Last Funding Date
    - person.seniority → Seniority Level
    - person.departments → Department(s)
promptVariables:
  - name: "APOLLO_API_KEY"
    label: "Apollo.io API Key"
    placeholder: "your-apollo-api-key"
    defaultValue: ""
  - name: "CONTACT_FIRST_NAME"
    label: "Contact First Name"
    placeholder: "John"
    defaultValue: ""
  - name: "CONTACT_LAST_NAME"
    label: "Contact Last Name"
    placeholder: "Smith"
    defaultValue: ""
  - name: "CONTACT_EMAIL"
    label: "Contact Email"
    placeholder: "john@example.com"
    defaultValue: ""
  - name: "COMPANY_NAME"
    label: "Company Name"
    placeholder: "Acme Corp"
    defaultValue: ""
downloadUrl: "/blueprints/data-enrichment-apollo-n8n.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Read Stale Contacts from HubSpot"
    description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
    tool: "HubSpot"
  - stepNumber: 2
    title: "Loop Through Each Contact"
    description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
    tool: "n8n"
  - stepNumber: 3
    title: "Apollo.io People Match API Call"
    description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
    tool: "Apollo.io"
  - stepNumber: 4
    title: "Update HubSpot Contact"
    description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
    tool: "HubSpot"
  - stepNumber: 5
    title: "Log to Google Sheets"
    description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Flag High-Value Prospects in Slack"
    description: "Automatically enrich stale HubSpot contacts with updated titles, phone, LinkedIn, and company data using Apollo.io and n8n."
    tool: "Slack"
---

CRM decay is real and expensive. Studies consistently show that B2B contact data degrades at 2–3% per month — meaning that after 18 months, a third of your database has wrong job titles, outdated phone numbers, or people who've left the company entirely. Sales teams waste hours each week manually Googling contacts or paying for sporadic data enrichment services that don't integrate with their workflow.

This n8n workflow runs silently in the background, targeting specifically the contacts your team hasn't touched in 90 days — the ones most likely to have stale data. Apollo.io's People Match API is one of the most accurate B2B enrichment sources available, covering over 270 million contacts with titles, direct dials, LinkedIn URLs, and company financials. On Apollo's free plan you get 50 enrichment credits/month; their Basic plan ($49/month) unlocks unlimited enrichment and is still far cheaper than manual research time.

The Slack alert for high-value prospects is where this workflow creates outsized returns. A contact who last engaged 91 days ago might now be VP of Engineering at a Series C company — exactly the kind of signal that should trigger immediate outreach. Without automated enrichment, that upgrade in prospect quality sits invisible in a spreadsheet.

## Prerequisites

1. n8n instance with HTTP Request node capability (available on all tiers)
2. Apollo.io account — free tier works for up to 50 contacts/month; Basic plan ($49/month) for unlimited
3. HubSpot CRM with API access; create custom contact properties for: `apollo_enriched_date`, `linkedin_url`, `company_headcount`, `total_funding`
4. Google Sheets spreadsheet with columns: `Contact ID`, `Email`, `Enriched Title`, `Phone`, `LinkedIn`, `Headcount`, `Funding`, `Enriched Date`, `Status`
5. Slack incoming webhook for your sales team's channel (or a #crm-alerts channel)

## Setup Guide

1. **Create HubSpot custom properties** — go to Settings → Properties → Contacts. Add: `Apollo Enriched Date` (date), `LinkedIn URL` (single-line text), `Company Headcount` (number), `Total Funding USD` (number). These prevent overwriting existing HubSpot native fields.
2. **Get your Apollo API key** — log into Apollo.io → Settings → Integrations → API. Copy your API key. On free plan, you can see rate limits and credit usage on the same page.
3. **Import the n8n blueprint** and configure credentials: HubSpot (OAuth 2.0), Google Sheets (OAuth 2.0), Slack (Webhook URL), Apollo.io (via Header Auth in the HTTP Request node).
4. **Configure the HubSpot filter** in the "Read Stale Contacts" node: set filter to `Last Modified Date` is more than 90 days ago, AND `Apollo Enriched Date` is unknown. This ensures contacts are enriched at most once every 90 days.
5. **Set SplitInBatches to batch size 1** with a 1.1-second Wait node after each Apollo call — this keeps you within Apollo's free tier rate limit.
6. **Map Apollo response fields** — Apollo returns a deeply nested JSON. Use n8n's data mapping to extract: `{{ $json.person.title }}`, `{{ $json.person.phone_numbers[0].sanitized_number }}`, `{{ $json.person.linkedin_url }}`, `{{ $json.person.organization.estimated_num_employees }}`, `{{ $json.person.organization.total_funding }}`.
7. **Configure Slack alert conditions** — set the IF node: `company_headcount > 200` OR `total_funding > 10000000`. Adjust thresholds for your ICP.
8. **Run a test batch of 5 contacts** manually before activating the schedule. Verify HubSpot fields update correctly and the Google Sheets log populates.

## Who This Is NOT For

- **Consumer-facing companies (B2C)** — Apollo.io is a B2B database. It won't have meaningful data on individual consumers and the workflow provides no value.
- **Teams that need enrichment in real time** (e.g., on form submit) — this workflow is optimized for bulk batch processing of stale records. For real-time enrichment at the moment of form submission, use Apollo's native HubSpot integration instead.
- **Companies with strict data privacy requirements** — Apollo aggregates publicly available B2B data, but some jurisdictions have restrictions on automated personal data processing. Confirm with your legal team.
- **Workspaces with fewer than 500 HubSpot contacts** — the ROI doesn't justify the setup time at small scale. Below 500 contacts, manual quarterly enrichment is faster.
