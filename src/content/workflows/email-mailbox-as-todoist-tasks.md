---
title: "Email mailbox as Todoist tasks"
description: "Automated workflow: Email mailbox as Todoist tasks. This workflow integrates 13 different services: stickyNote, scheduleTrigger, agent, outputParserStructure..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Gmail"
  - "If"
  - "Todoist"
  - "Merge"
  - "Email Read Imap"
  - "Schedule Trigger"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Todoist/1749_Todoist_Schedule_Send_Scheduled.json"
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
  - "Gmail"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Mark As Read"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Star"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Get Starred From Inbox"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 5
    title: "Get Unread From Inbox"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 6
    title: "If Task Not Exist"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 7
    title: "If AI responded properly"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Gmail, If, Todoist, Merge, Email Read Imap, Schedule Trigger, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Gmail, If, Todoist, Merge, Email Read Imap, Schedule Trigger, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Gmail, If, Todoist, Merge, Email Read Imap, Schedule Trigger, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
