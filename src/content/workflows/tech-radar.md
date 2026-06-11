---
title: "Tech Radar"
description: "Automated workflow: Tech Radar. This workflow integrates 26 different services: stickyNote, textSplitterRecursiveCharacterTextSplitter, executeWorkflow, if,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "Sticky Note"
  - "Cron"
  - "MySQL"
  - "Google Sheets"
  - "Code"
  - "Google Docs"
  - "Execute Workflow"
  - "Execute Workflow Trigger"
  - "Respond To Webhook"
  - "Webhook"
  - "If"
downloadUrl: "/blueprints/imported/tech-radar.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Drive"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Download Doc File From Google Drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Cron"
    description: "Processes and automates operations via the Cron integration."
    tool: "Cron"
  - stepNumber: 4
    title: "MySQL -delete all data"
    description: "Processes and automates operations via the MySQL integration."
    tool: "MySQL"
  - stepNumber: 5
    title: "MySQL - insert all from sheets"
    description: "Processes and automates operations via the MySQL integration."
    tool: "MySQL"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Google Sheets - Tech Radar"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 29 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, Sticky Note, Cron, MySQL, Google Sheets, Code, Google Docs, Execute Workflow, Execute Workflow Trigger, Respond To Webhook, Webhook, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, Sticky Note, Cron, MySQL, Google Sheets, Code, Google Docs, Execute Workflow, Execute Workflow Trigger, Respond To Webhook, Webhook, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, Sticky Note, Cron, MySQL, Google Sheets, Code, Google Docs, Execute Workflow, Execute Workflow Trigger, Respond To Webhook, Webhook, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
