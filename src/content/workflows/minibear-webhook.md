---
title: "MiniBear Webhook"
description: "Automated workflow: MiniBear Webhook. This workflow integrates 12 different services: webhook, stickyNote, httpRequest, microsoftToDo, agent. It contains 69..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Http Request"
  - "Sticky Note"
  - "Switch"
  - "Microsoft Teams"
  - "Microsoft To Do"
  - "If"
  - "Google Drive"
downloadUrl: "/blueprints/imported/minibear-webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Webhook"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Line Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Line Loading Animation"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Switch"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 6
    title: "Sticky Note5"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Get Image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 31 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Webhook, Http Request, Sticky Note, Switch, Microsoft Teams, Microsoft To Do, If, Google Drive natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Http Request, Sticky Note, Switch, Microsoft Teams, Microsoft To Do, If, Google Drive

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Http Request, Sticky Note, Switch, Microsoft Teams, Microsoft To Do, If, Google Drive and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
