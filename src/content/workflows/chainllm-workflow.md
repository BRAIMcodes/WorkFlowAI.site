---
title: "Chainllm Workflow"
description: "Automated workflow: Chainllm Workflow. This workflow processes data and performs automated tasks."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Code"
  - "Set"
  - "Split Out"
  - "Http Request"
  - "Html"
  - "Merge"
  - "Aggregate"
  - "Telegram"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/0679_Telegram_Splitout_Create_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "Code"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "CreateYearsList"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "CleanUpYearList"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "SplitOutYearList"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "GetFrontPage"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "ExtractDetails"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 7
    title: "GetHeadlines"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Code, Set, Split Out, Http Request, Html, Merge, Aggregate, Telegram natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Code, Set, Split Out, Http Request, Html, Merge, Aggregate, Telegram

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Code, Set, Split Out, Http Request, Html, Merge, Aggregate, Telegram and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
