---
title: "Markdown Workflow"
description: "Automated workflow: Markdown Workflow. This workflow integrates 12 different services: stickyNote, markdown, httpRequest, chainLlm, outputParserStructured. I..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Markdown"
  - "Lemlist Trigger"
  - "Sticky Note"
  - "Slack"
  - "Lemlist"
  - "Http Request"
  - "Merge"
  - "Switch"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Lemlist/0504_Lemlist_Slack_Create_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Markdown"
  - "Lemlist Trigger"
steps:
  - stepNumber: 1
    title: "Format text with Markdown"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 2
    title: "Lemlist Trigger - On new reply"
    description: "Processes and automates operations via the Lemlist Trigger integration."
    tool: "Lemlist Trigger"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Send alert to Slack"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 6
    title: "Lemlist - Unsubscribe"
    description: "Processes and automates operations via the Lemlist integration."
    tool: "Lemlist"
  - stepNumber: 7
    title: "lemlist - Mark as interested"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 8 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Markdown, Lemlist Trigger, Sticky Note, Slack, Lemlist, Http Request, Merge, Switch natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Markdown, Lemlist Trigger, Sticky Note, Slack, Lemlist, Http Request, Merge, Switch

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Markdown, Lemlist Trigger, Sticky Note, Slack, Lemlist, Http Request, Merge, Switch and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
