---
title: "SHEETS RAG"
description: "Automated workflow: SHEETS RAG. This workflow integrates 13 different services: stickyNote, googleDriveTrigger, code, lmChatGoogleGemini, manualChatTrigger...."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Code"
  - "Google Drive"
  - "Set"
  - "If"
  - "PostgreSQL"
  - "Google Sheets"
  - "Execute Workflow Trigger"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/sheets-rag.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Code"
  - "Google Drive"
steps:
  - stepNumber: 1
    title: "create table query"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 2
    title: "create insertion query"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "Google Drive Trigger"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "change_this"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "is not in database"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 6
    title: "table exists?"
    description: "Processes and automates operations via the PostgreSQL integration."
    tool: "PostgreSQL"
  - stepNumber: 7
    title: "fetch sheet data"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Code, Google Drive, Set, If, PostgreSQL, Google Sheets, Execute Workflow Trigger, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Code, Google Drive, Set, If, PostgreSQL, Google Sheets, Execute Workflow Trigger, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Code, Google Drive, Set, If, PostgreSQL, Google Sheets, Execute Workflow Trigger, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
