---
title: "AI Support Ticket Classifier With n8n And Chat GPT"
description: "Download the n8n JSON blueprint to analyze support tickets using ChatGPT, classify them into priority levels, and draft responses in Intercom."
timeSaved: "7 hours/week"
costToRun: "~$0.01 per ticket"
primaryTool: "n8n"
connectedApps:
  - "ChatGPT (GPT-4o)"
  - "Intercom"
  - "Slack"
promptSnippet: |
  Analyze this customer support ticket:
  
  Subject: {{ $json.subject }}
  Message: {{ $json.body }}

  Perform these tasks:
  1. Classify the ticket category: "billing", "technical", "feature_request", "general_inquiry"
  2. Determine urgency: "high" (outages, payment failures), "medium" (functional bugs), "low" (questions, feedback)
  3. Draft a helpful, empathetic response addressing their concern.

  Format your response as a strict JSON block:
  {
    "category": "string",
    "urgency": "string",
    "draftResponse": "string"
  }
downloadUrl: "/blueprints/support-ticket-classifier-n8n-openai.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "New Ticket Trigger"
    description: "Triggers when a new customer support ticket is created in Intercom, Zendesk, or via email."
    tool: "Intercom"
  - stepNumber: 2
    title: "Classify & Draft via AI"
    description: "Send the ticket details to ChatGPT (GPT-4o) to classify urgency, determine category, and draft a response."
    tool: "ChatGPT (GPT-4o)"
  - stepNumber: 3
    title: "Slack Warning for Outages"
    description: "If the ticket is high urgency (e.g., system outage), immediately ping the engineering channel in Slack."
    tool: "Slack"
  - stepNumber: 4
    title: "Save Draft in Intercom"
    description: "Applies priority tags and inserts the AI-crafted draft into the ticket thread, waiting for agent review."
    tool: "Intercom"
---

Responding quickly to customer issues is critical for customer retention. However, support teams are often overwhelmed with a mix of simple inquiries and severe technical outages, causing delayed responses to urgent issues.

This workflow automatically triages your incoming support tickets. It categorizes tickets, assigns urgency, pings the tech team on Slack if there is a major issue, and drafts responses for your support reps so they can resolve issues with a single click.

### Prerequisites
1. An active **n8n** account
2. OpenAI API credentials
3. Intercom or Zendesk developer account

### Setup Guide
1. **Import Blueprint:** Download the JSON blueprint and import it into your n8n canvas.
2. **Setup Node Credentials:** Authenticate the Intercom, OpenAI, and Slack nodes.
3. **Configure Urgency Routing:** The conditional router node checks the urgency output from the OpenAI node. You can edit these thresholds inside n8n.
4. **Deploy:** Turn the workflow on. Tickets will now auto-route and generate drafts in real-time.
