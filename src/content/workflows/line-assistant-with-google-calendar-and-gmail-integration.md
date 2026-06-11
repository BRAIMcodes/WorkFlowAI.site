---
title: "LINE Assistant with Google Calendar and Gmail Integration"
description: "Automated workflow: LINE Assistant with Google Calendar and Gmail Integration. This workflow processes data and performs automated tasks."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Switch"
  - "Webhook"
  - "Set"
  - "Http Request"
  - "Google Calendar"
  - "Gmail"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Http/1538_HTTP_Googlecalendartool_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Switch"
  - "Webhook"
steps:
  - stepNumber: 1
    title: "Switch Between Text and Others"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 2
    title: "Line Receiving"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 3
    title: "Error Handling from AI Response"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 4
    title: "Text Cleansing"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Line Answering (Error Case)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Line Answering (Ordinary Case)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Google Calendar Create"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Switch, Webhook, Set, Http Request, Google Calendar, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Switch, Webhook, Set, Http Request, Google Calendar, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Switch, Webhook, Set, Http Request, Google Calendar, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
