---
title: "Textclassifier Workflow"
description: "Automated workflow: Textclassifier Workflow. This workflow integrates 18 different services: textClassifier, filter, stickyNote, code, scheduleTrigger. It co..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Discord"
  - "Remove Duplicates"
  - "Code"
  - "Split In Batches"
  - "Split Out"
  - "Set"
  - "Merge"
  - "Filter"
  - "If"
  - "Switch"
  - "Sticky Note"
  - "Execute Workflow"
  - "Execute Workflow Trigger"
  - "Schedule Trigger"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/0816_Splitout_Code_Automation_Scheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Discord"
  - "Remove Duplicates"
steps:
  - stepNumber: 1
    title: "Get Recent Messages"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 2
    title: "Only Once"
    description: "Processes and automates operations via the Remove Duplicates integration."
    tool: "Remove Duplicates"
  - stepNumber: 3
    title: "Warn User"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 4
    title: "Warn User Only"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 5
    title: "Group By User"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "For Each User..."
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 7
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 21 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Discord, Remove Duplicates, Code, Split In Batches, Split Out, Set, Merge, Filter, If, Switch, Sticky Note, Execute Workflow, Execute Workflow Trigger, Schedule Trigger, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Discord, Remove Duplicates, Code, Split In Batches, Split Out, Set, Merge, Filter, If, Switch, Sticky Note, Execute Workflow, Execute Workflow Trigger, Schedule Trigger, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Discord, Remove Duplicates, Code, Split In Batches, Split Out, Set, Merge, Filter, If, Switch, Sticky Note, Execute Workflow, Execute Workflow Trigger, Schedule Trigger, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
