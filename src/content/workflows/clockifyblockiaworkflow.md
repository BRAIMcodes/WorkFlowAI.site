---
title: "ClockifyBlockiaWorkflow"
description: "Automated workflow: ClockifyBlockiaWorkflow. This workflow processes data and performs automated tasks."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Slack"
  - "Execution Data"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Executiondata/1754_Executiondata_Slack_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Slack"
  - "Execution Data"
steps:
  - stepNumber: 1
    title: "Slack Trigger"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 2
    title: "Execution Data"
    description: "Processes and automates operations via the Execution Data integration."
    tool: "Execution Data"
  - stepNumber: 3
    title: "Add reaction"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 4
    title: "Send reply"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
---

Optimize your tech stack and automate workflows between Slack, Execution Data natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Slack, Execution Data

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Slack, Execution Data and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
