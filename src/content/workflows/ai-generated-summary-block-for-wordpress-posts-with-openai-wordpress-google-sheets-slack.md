---
title: "AI-Generated Summary Block for WordPress Posts - with OpenAI, WordPress, Google Sheets & Slack"
description: "Automated workflow: AI-Generated Summary Block for WordPress Posts - with OpenAI, WordPress, Google Sheets & Slack. This workflow integrates 18 different ser..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Split In Batches"
  - "If"
  - "Webhook"
  - "Schedule Trigger"
  - "Http Request"
  - "Google Sheets"
  - "Markdown"
  - "Slack"
  - "Set"
  - "Sticky Note"
  - "Date Time"
  - "Wordpress"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Datetime/1272_Datetime_Webhook_Create_Webhook.json"
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
  - "Split In Batches"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 3
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 5
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 6
    title: "Wordpress - Update Post"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Google Sheets - Get rows"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 21 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Split In Batches, If, Webhook, Schedule Trigger, Http Request, Google Sheets, Markdown, Slack, Set, Sticky Note, Date Time, Wordpress natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Split In Batches, If, Webhook, Schedule Trigger, Http Request, Google Sheets, Markdown, Slack, Set, Sticky Note, Date Time, Wordpress

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Split In Batches, If, Webhook, Schedule Trigger, Http Request, Google Sheets, Markdown, Slack, Set, Sticky Note, Date Time, Wordpress and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
