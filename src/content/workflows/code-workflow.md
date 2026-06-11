---
title: "Code Workflow"
description: "Automated workflow: Code Workflow. This workflow integrates 11 different services: stickyNote, httpRequest, markdown, code, scheduleTrigger. It contains 26 n..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Code"
  - "Http Request"
  - "Gmail"
  - "Schedule Trigger"
  - "Set"
  - "Markdown"
  - "Sticky Note"
  - "Split In Batches"
  - "Limit"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Limit/1386_Limit_Code_Automation_Scheduled.json"
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
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Convert raw to base64"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 2
    title: "Add email draft to thread"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Remove AI label from email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Schedule trigger (1 min)"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 5
    title: "Map fields for further processing"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Convert response to HTML"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 7
    title: "Build email raw"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 15 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Code, Http Request, Gmail, Schedule Trigger, Set, Markdown, Sticky Note, Split In Batches, Limit natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Code, Http Request, Gmail, Schedule Trigger, Set, Markdown, Sticky Note, Split In Batches, Limit

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Code, Http Request, Gmail, Schedule Trigger, Set, Markdown, Sticky Note, Split In Batches, Limit and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
