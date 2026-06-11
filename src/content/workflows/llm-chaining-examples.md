---
title: "LLM Chaining examples"
description: "Automated workflow: LLM Chaining examples. This workflow integrates 15 different services: webhook, stickyNote, httpRequest, markdown, agent. It contains 44..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Markdown"
  - "Sticky Note"
  - "Merge"
  - "Set"
  - "Split Out"
  - "Webhook"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/0958_Splitout_Webhook_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "HTTP Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Markdown"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 4
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 6
    title: "Initial prompts"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Markdown, Sticky Note, Merge, Set, Split Out, Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Markdown, Sticky Note, Merge, Set, Split Out, Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Markdown, Sticky Note, Merge, Set, Split Out, Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
