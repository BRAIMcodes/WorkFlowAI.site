---
title: "OpenAI Assistant for Hubspot Chat"
description: "Automated workflow: OpenAI Assistant for Hubspot Chat. This workflow integrates 10 different services: webhook, stickyNote, httpRequest, wait, airtable. It c..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Switch"
  - "Wait"
  - "Code"
  - "If"
  - "Airtable"
  - "Sticky Note"
  - "Webhook"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Wait/1366_Wait_Code_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Switch"
steps:
  - stepNumber: 1
    title: "getHubspotMessage"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "OpenAi Create Thread"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "OpenAI Run"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Get Run"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Get Last Message"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "HTTP Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Completed, Action or Inprogress"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Switch, Wait, Code, If, Airtable, Sticky Note, Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Switch, Wait, Code, If, Airtable, Sticky Note, Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Switch, Wait, Code, If, Airtable, Sticky Note, Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
