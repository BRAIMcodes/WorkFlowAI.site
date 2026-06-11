---
title: "Telegram Workflow"
description: "Automated workflow: Telegram Workflow. This workflow integrates 16 different services: telegramTrigger, stickyNote, telegram, memoryRedisChat, code. It conta..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Redis"
  - "Execute Workflow Trigger"
  - "Switch"
  - "Code"
  - "If"
  - "Sticky Note"
  - "Execute Workflow"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/telegram-workflow.json"
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
  - "Redis"
steps:
  - stepNumber: 1
    title: "Human Handoff using Send and Wait"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Set Interaction to Bot"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 3
    title: "Set Interaction to Human"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 4
    title: "Get Interaction State"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 5
    title: "Handoff Subworkflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 6
    title: "Telegram Trigger"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 7
    title: "Send Response"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 20 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Redis, Execute Workflow Trigger, Switch, Code, If, Sticky Note, Execute Workflow, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Redis, Execute Workflow Trigger, Switch, Code, If, Sticky Note, Execute Workflow, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Redis, Execute Workflow Trigger, Switch, Code, If, Sticky Note, Execute Workflow, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
