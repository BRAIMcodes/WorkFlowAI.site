---
title: "N8N Financial Tracker Telegram Invoices to Notion with AI Summaries & Reports"
description: "Automated workflow: N8N Financial Tracker Telegram Invoices to Notion with AI Summaries & Reports. This workflow integrates 14 different services: stickyNote..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Schedule Trigger"
  - "Notion"
  - "Summarize"
  - "Quick Chart"
  - "Telegram"
  - "Code"
  - "Edit Image"
  - "Split Out"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/0931_Telegram_Splitout_Monitor_Scheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Sticky Note"
  - "Schedule Trigger"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Schedule Trigger | for send chart report"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 4
    title: "Get Recent Data from Notions"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 5
    title: "Summarize Transaction Data"
    description: "Processes and automates operations via the Summarize integration."
    tool: "Summarize"
  - stepNumber: 6
    title: "Generate Chart"
    description: "Processes and automates operations via the Quick Chart integration."
    tool: "Quick Chart"
  - stepNumber: 7
    title: "Send Chart Image to Group or Private Chat"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 19 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Schedule Trigger, Notion, Summarize, Quick Chart, Telegram, Code, Edit Image, Split Out, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Schedule Trigger, Notion, Summarize, Quick Chart, Telegram, Code, Edit Image, Split Out, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Schedule Trigger, Notion, Summarize, Quick Chart, Telegram, Code, Edit Image, Split Out, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
