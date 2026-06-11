---
title: "AI agent: expense tracker in Google Sheets and n8n chat"
description: "Automated workflow: AI agent: expense tracker in Google Sheets and n8n chat. This workflow integrates 10 different services: stickyNote, agent, informationEx..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Execute Workflow Trigger"
  - "Sticky Note"
  - "Google Sheets"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Googlesheets/1661_GoogleSheets_Stickynote_Monitor_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Execute Workflow Trigger"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Workflow Input Trigger"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Save expense into Google Sheets"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Execute Workflow Trigger, Sticky Note, Google Sheets, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Execute Workflow Trigger, Sticky Note, Google Sheets, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Execute Workflow Trigger, Sticky Note, Google Sheets, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
