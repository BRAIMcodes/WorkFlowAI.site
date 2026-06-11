---
title: "Generate Instagram Content from Top Trends with AI Image Generation"
description: "Automated workflow: Generate Instagram Content from Top Trends with AI Image Generation. This workflow integrates 13 different services: stickyNote, httpRequ..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "If"
  - "Telegram"
  - "Split In Batches"
  - "Schedule Trigger"
  - "Set"
  - "Sticky Note"
  - "Code"
  - "Http Request"
  - "Merge"
  - "PostgreSQL"
  - "Facebook Graph Api"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/1470_Telegram_Code_Create_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "If"
  - "Telegram"
steps:
  - stepNumber: 1
    title: "If media status is finished"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 2
    title: "If media status is finished1"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 3
    title: "Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 4
    title: "Telegram1"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 5
    title: "Telegram2"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 6
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 7
    title: "Schedule Trigger1"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 35 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between If, Telegram, Split In Batches, Schedule Trigger, Set, Sticky Note, Code, Http Request, Merge, PostgreSQL, Facebook Graph Api natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: If, Telegram, Split In Batches, Schedule Trigger, Set, Sticky Note, Code, Http Request, Merge, PostgreSQL, Facebook Graph Api

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing If, Telegram, Split In Batches, Schedule Trigger, Set, Sticky Note, Code, Http Request, Merge, PostgreSQL, Facebook Graph Api and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
