---
title: "mails2notion V2"
description: "Automated workflow: mails2notion V2. This workflow integrates 15 different services: filter, httpRequest, stickyNote, airtable, code. It contains 42 nodes an..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Filter"
  - "Set"
  - "Airtable"
  - "Http Request"
  - "Manual Trigger"
  - "Sticky Note"
  - "Code"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Code/0777_Code_Filter_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gmail"
  - "Filter"
steps:
  - stepNumber: 1
    title: "Add Label \"Processed\""
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Active Routes Only"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 3
    title: "Extract Route ID"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Deactivate Route"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 5
    title: "Add Label \"Error\""
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 6
    title: "Send notification about deactivated route"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 7
    title: "Send notification about missing route"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 22 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Filter, Set, Airtable, Http Request, Manual Trigger, Sticky Note, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Filter, Set, Airtable, Http Request, Manual Trigger, Sticky Note, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Filter, Set, Airtable, Http Request, Manual Trigger, Sticky Note, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
