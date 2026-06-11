---
title: "Personalized Customer Onboarding Email Sequence With n8n"
description: "Generate personalized 5-email onboarding sequences for new customers using HubSpot, Mixpanel usage data, and GPT-4o."
timeSaved: "7 hours/week"
costToRun: "~$0.03 per sequence"
primaryTool: "n8n"
connectedApps:
  - "GPT-4o"
  - "HubSpot"
  - "Gmail"
  - "Mixpanel"
lastVerified: "June 2026"
setupTime: "~35 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Marketing", "Email", "Onboarding", "Customer Success"]
promptSnippet: |
  You are an expert customer success copywriter. Write a single onboarding email for a new customer.

  Customer context:
  - Name: [CUSTOMER_NAME]
  - Plan: [PLAN_TYPE]
  - Company size: [COMPANY_SIZE]
  - Industry: [INDUSTRY]
  - Signed up: [SIGNUP_DATE]
  - First actions taken in product: [FIRST_ACTIONS]
  - Features NOT yet explored: [UNUSED_FEATURES]

  Email to write: [EMAIL_NUMBER] of 5 in the sequence
  Email goal: [EMAIL_GOAL]
  Send timing: [SEND_TIMING] after signup

  Guidelines:
  - Subject line must be under 50 characters and avoid spam trigger words
  - Opening line must reference a specific action they took (not generic "welcome")
  - Body: 120-180 words maximum
  - Include exactly one CTA with a clear action verb
  - Tone: warm, competent, non-pushy
  - Sign off from: [SENDER_NAME], [SENDER_TITLE]

  Return format:
  SUBJECT: [subject line]
  PREVIEW: [preview text, 60 chars max]
  BODY: [full email body]
promptVariables:
  - name: "CUSTOMER_NAME"
    label: "Customer First Name"
    placeholder: "Sarah"
    defaultValue: ""
  - name: "PLAN_TYPE"
    label: "Subscription Plan"
    placeholder: "Pro"
    defaultValue: "Free"
  - name: "COMPANY_SIZE"
    label: "Company Size"
    placeholder: "11-50 employees"
    defaultValue: ""
  - name: "INDUSTRY"
    label: "Industry"
    placeholder: "SaaS"
    defaultValue: ""
  - name: "SIGNUP_DATE"
    label: "Signup Date"
    placeholder: "June 5, 2026"
    defaultValue: ""
  - name: "FIRST_ACTIONS"
    label: "First Product Actions (from Mixpanel)"
    placeholder: "Created first project, invited 2 teammates"
    defaultValue: ""
  - name: "UNUSED_FEATURES"
    label: "Key Features Not Yet Used"
    placeholder: "Automations, Reporting dashboard"
    defaultValue: ""
  - name: "EMAIL_NUMBER"
    label: "Email Number in Sequence"
    placeholder: "1"
    defaultValue: "1"
  - name: "EMAIL_GOAL"
    label: "Email Goal"
    placeholder: "Drive first meaningful action"
    defaultValue: "Drive first meaningful action"
  - name: "SEND_TIMING"
    label: "Send Timing"
    placeholder: "1 hour"
    defaultValue: "1 hour"
  - name: "SENDER_NAME"
    label: "Sender Name"
    placeholder: "Alex"
    defaultValue: "Alex"
  - name: "SENDER_TITLE"
    label: "Sender Title"
    placeholder: "Head of Customer Success"
    defaultValue: "Head of Customer Success"
downloadUrl: "/blueprints/onboarding-email-sequence-n8n-gpt4.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "New Customer Trigger from HubSpot"
    description: "Generate personalized 5-email onboarding sequences for new customers using HubSpot, Mixpanel usage data, and GPT-4o."
    tool: "HubSpot"
  - stepNumber: 2
    title: "Fetch First-Week Usage Data from Mixpanel"
    description: "Generate personalized 5-email onboarding sequences for new customers using HubSpot, Mixpanel usage data, and GPT-4o."
    tool: "Mixpanel"
  - stepNumber: 3
    title: "GPT-4o Generates All 5 Emails"
    description: "Generate personalized 5-email onboarding sequences for new customers using HubSpot, Mixpanel usage data, and GPT-4o."
    tool: "GPT-4o"
  - stepNumber: 4
    title: "Parse Email Content"
    description: "Generate personalized 5-email onboarding sequences for new customers using HubSpot, Mixpanel usage data, and GPT-4o."
    tool: "n8n"
  - stepNumber: 5
    title: "Schedule Gmail Sends at Optimal Intervals"
    description: "Generate personalized 5-email onboarding sequences for new customers using HubSpot, Mixpanel usage data, and GPT-4o."
    tool: "Gmail"
---

Generic onboarding sequences — "Welcome! Here's how to get started" — convert at 2–5%. Personalized sequences that reference what a customer actually did in their first session convert at 15–25%. The gap exists because personalization at scale has always required engineering time or expensive email platforms. This workflow eliminates that bottleneck by pulling real behavioral data from Mixpanel and feeding it directly to GPT-4o, which writes each email as if a CSM had personally reviewed the customer's account.

The five-email sequence maps to the standard onboarding arc: (1) immediate welcome that reinforces the first action taken, (2) guide to the next logical step, (3) mid-week check-in that highlights an unused high-value feature, (4) social proof email with a relevant case study based on company size/industry, (5) two-week review with an invite to a check-in call. GPT-4o receives different goals for each email, so the sequence builds rather than repeating the same message.

At $0.03 per sequence, this is dramatically cheaper than most email platforms' personalization add-ons, and the copy quality consistently outperforms template-based approaches because GPT-4o can construct genuinely specific sentences like "Since you've already connected your GitHub repo, you're one step away from enabling automated deployments."

## Prerequisites

1. n8n instance (Cloud or self-hosted) with at least 100 workflow executions/month available
2. HubSpot account with API access — any paid tier, or the free CRM with API enabled
3. Mixpanel project with event tracking implemented; you need `user_id` to match to HubSpot contacts (use email as the common identifier)
4. OpenAI API key with GPT-4o access (each 5-email sequence costs ~$0.03 total)
5. Gmail account connected via OAuth 2.0 in n8n (or a transactional email provider like SendGrid as an alternative)
6. Your 5-email sequence goals and timing defined before building — don't skip this planning step

## Setup Guide

1. **Define your sequence structure** before touching n8n. Write down: email number, goal, timing, and the specific CTA for each of the 5 emails. This becomes your loop configuration.
2. **Set up the Mixpanel query** — use Mixpanel's Engage API (`/api/2.0/engage`) to pull event data by `$email`. Test the API call in Postman first to confirm you're getting the right event names.
3. **Map HubSpot fields** — ensure plan type is stored as a HubSpot contact property. If it's only in a deal, add a workflow in HubSpot that copies deal stage to contact property on deal creation.
4. **Import the n8n blueprint** and connect credentials: HubSpot (OAuth), Mixpanel (API Secret), OpenAI (API key), Gmail (OAuth).
5. **Configure the loop node** with your 5 email specifications. Use `$index` to pass the correct goal and timing per iteration.
6. **Test with a real account** — create a test HubSpot contact and verify Mixpanel returns real event data. Check all 5 generated emails before activating live.
7. **Set the Gmail delay** using n8n's Wait node between each Gmail send. Configure waits in hours: 1, 48, 168, 336, 504 (i.e., 1hr, 2days, 7days, 14days, 21days).
8. **Add error handling** — wrap the Mixpanel call in a try/catch. If Mixpanel returns no data (new customer hasn't taken any actions yet), pass a default "no actions taken" string to GPT-4o so emails still send with a reasonable fallback.

## Who This Is NOT For

- **B2C businesses with high email volume** (thousands of signups/day) — GPT-4o API costs and n8n execution limits will become factors. At 500+ signups/day, consider batching or switching to a prompt-based personalization layer within a dedicated ESP.
- **Teams without Mixpanel or an equivalent product analytics tool** — the personalization depends entirely on behavioral data. Without it, you're writing generic emails at high cost for no benefit over templates.
- **Companies in the EU without a reviewed data processing agreement with OpenAI** — customer PII (name, company, usage behavior) passes through the OpenAI API. Ensure your DPA covers this use case.
- **Sequences requiring A/B testing** — this workflow generates and sends; it doesn't split-test variants. Plug into an ESP with testing capabilities if optimization is critical.
