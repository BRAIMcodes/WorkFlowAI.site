---
title: "(g) Line Chat Bot + Google Sheets (as A Memory)"
description: "Automated workflow: (G) LineChatBot + Google Sheets (as a memory). This workflow integrates 9 different services: webhook, stickyNote, httpRequest, code, lmC..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Set"
  - "Http Request"
  - "Google Sheets"
  - "Sticky Note"
  - "Code"
downloadUrl: "/blueprints/imported/g-linechatbot-google-sheets-as-a-memory.json"
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
  - "Set"
steps:
  - stepNumber: 1
    title: "Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Edit Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "HTTP Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Get History"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 5
    title: "Prepare Prompt"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Save History"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 8 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Webhook, Set, Http Request, Google Sheets, Sticky Note, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Set, Http Request, Google Sheets, Sticky Note, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Set, Http Request, Google Sheets, Sticky Note, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
