---
title: "Telegram AI Langchain bot"
description: "Automated workflow: Telegram AI Langchain bot. This workflow integrates 11 different services: telegramTrigger, stickyNote, httpRequest, telegram, agent. It..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Execute Workflow Trigger"
  - "Set"
  - "Sticky Note"
  - "Http Request"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Http/1687_HTTP_Telegram_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Telegram"
  - "Execute Workflow Trigger"
steps:
  - stepNumber: 1
    title: "Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Correct errors"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 3
    title: "Execute Workflow Trigger"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 4
    title: "Listen for incoming events"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 5
    title: "Send back an image"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 6
    title: "add response field"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Generate image in Dall-E 3"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
---

Optimize your tech stack and automate workflows between Telegram, Execute Workflow Trigger, Set, Sticky Note, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Execute Workflow Trigger, Set, Sticky Note, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Execute Workflow Trigger, Set, Sticky Note, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
