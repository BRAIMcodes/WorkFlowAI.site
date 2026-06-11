---
title: "Deep Research Report Generation Using Open Router, Google Search, Webhook/telegram And Notion"
description: "Automated workflow: Deep Research Report Generation Using Open Router, Google Search, Webhook/Telegram and Notion. This workflow integrates 22 different serv..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Switch"
  - "Split Out"
  - "Split In Batches"
  - "Http Request"
  - "Set"
  - "Aggregate"
  - "Notion"
  - "Markdown"
  - "Filter"
  - "Code"
  - "Webhook"
  - "Respond To Webhook"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/deep-research-report-generation-using-open-router-google-search-webhooktelegram-and-notion.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Telegram"
  - "Switch"
steps:
  - stepNumber: 1
    title: "Telegram Trigger"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Switch"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 3
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 4
    title: "Loop Over Queries"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 5
    title: "HTTP Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Edit Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "HTTP Request1"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 18 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Switch, Split Out, Split In Batches, Http Request, Set, Aggregate, Notion, Markdown, Filter, Code, Webhook, Respond To Webhook, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Switch, Split Out, Split In Batches, Http Request, Set, Aggregate, Notion, Markdown, Filter, Code, Webhook, Respond To Webhook, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Switch, Split Out, Split In Batches, Http Request, Set, Aggregate, Notion, Markdown, Filter, Code, Webhook, Respond To Webhook, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
