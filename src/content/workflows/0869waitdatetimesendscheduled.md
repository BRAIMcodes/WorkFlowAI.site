---
title: "Wait Datetime Send Scheduled"
description: "Integrate Schedule Trigger and MySQL and Split In Batches and Set and Date Time and Code and Filter and Html and Merge and Microsoft Outlook and Wait and Lan..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "MySQL"
  - "Split In Batches"
  - "Set"
  - "Date Time"
  - "Code"
  - "Filter"
  - "Html"
  - "Merge"
  - "Microsoft Outlook"
  - "Wait"
  - "LangChain"
  - "Gemini"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0869waitdatetimesendscheduled.json"
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
  - "MySQL"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "YTD vs Prevoius Month1"
    description: "Processes and automates operations via the MySQL integration."
    tool: "MySQL"
  - stepNumber: 3
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 4
    title: "CostCentrs"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Date & Time"
    description: "Processes and automates operations via the Date Time integration."
    tool: "Date Time"
  - stepNumber: 6
    title: "PreviousMonth"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "Selected Cost Center"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 23 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, MySQL, Split In Batches, Set, Date Time, Code, Filter, Html, Merge, Microsoft Outlook, Wait, LangChain, Gemini, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, MySQL, Split In Batches, Set, Date Time, Code, Filter, Html, Merge, Microsoft Outlook, Wait, LangChain, Gemini, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, MySQL, Split In Batches, Set, Date Time, Code, Filter, Html, Merge, Microsoft Outlook, Wait, LangChain, Gemini, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
