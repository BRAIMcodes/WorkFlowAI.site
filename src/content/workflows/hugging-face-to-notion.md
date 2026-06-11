---
title: "Hugging Face to Notion"
description: "Automated workflow: Hugging Face to Notion. This workflow processes data and performs automated tasks."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "If"
  - "Split In Batches"
  - "Split Out"
  - "Http Request"
  - "Html"
  - "Notion"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/1306_Splitout_Schedule_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "If"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 3
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 4
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Request Hugging Face Paper"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Extract Hugging Face Paper"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 7
    title: "Check Paper URL Existed"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, If, Split In Batches, Split Out, Http Request, Html, Notion natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, If, Split In Batches, Split Out, Http Request, Html, Notion

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, If, Split In Batches, Split Out, Http Request, Html, Notion and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
