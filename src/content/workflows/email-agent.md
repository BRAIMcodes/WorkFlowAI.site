---
title: "🤖Email Agent"
description: "Automated workflow: 🤖Email Agent. This workflow processes data and performs automated tasks."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Gmail"
  - "Execute Workflow Trigger"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Gmailtool/1795_Gmailtool_Executeworkflow_Send_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Try Again"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "Success"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Send Email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Get Emails"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 5
    title: "Create Draft"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 6
    title: "Email Reply"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 7
    title: "Get Labels"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Gmail, Execute Workflow Trigger, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Gmail, Execute Workflow Trigger, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Gmail, Execute Workflow Trigger, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
