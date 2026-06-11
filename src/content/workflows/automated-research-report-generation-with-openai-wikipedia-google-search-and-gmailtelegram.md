---
title: "Automated Research Report Generation with OpenAI, Wikipedia, Google Search, and Gmail/Telegram"
description: "Automated workflow: Automated Research Report Generation with OpenAI, Wikipedia, Google Search, and Gmail/Telegram. This workflow integrates 18 different ser..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "Code"
  - "Google Sheets"
  - "Sticky Note"
  - "Http Request"
  - "Aggregate"
  - "Gmail"
  - "Manual Trigger"
  - "Telegram"
  - "Execute Workflow Trigger"
  - "Google Drive"
  - "If"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/1341_Telegram_Splitout_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Split Out"
  - "Code"
steps:
  - stepNumber: 1
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "Input Validation"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "Parse Research Output"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Merge Split Items"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Store Research Metadata"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Generate PDF HTML"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, Code, Google Sheets, Sticky Note, Http Request, Aggregate, Gmail, Manual Trigger, Telegram, Execute Workflow Trigger, Google Drive, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, Code, Google Sheets, Sticky Note, Http Request, Aggregate, Gmail, Manual Trigger, Telegram, Execute Workflow Trigger, Google Drive, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, Code, Google Sheets, Sticky Note, Http Request, Aggregate, Gmail, Manual Trigger, Telegram, Execute Workflow Trigger, Google Drive, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
