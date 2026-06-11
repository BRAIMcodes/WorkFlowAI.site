---
title: "Transform Image to Lego Style Using Line and Dall-E"
description: "Automated workflow: Transform Image to Lego Style Using Line and Dall-E. This workflow processes data and performs automated tasks."
timeSaved: "3 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Http Request"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Http/0688_HTTP_Webhook_Process_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Beginner"
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
    title: "Receive a Line Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Receive Line Messages"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Send Back an Image through Line"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
---

Optimize your tech stack and automate workflows between Webhook, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
