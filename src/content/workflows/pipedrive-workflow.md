---
title: "Pipedrive Workflow"
description: "Automated workflow: Pipedrive Workflow. This workflow integrates 8 different services: pipedrive, stickyNote, code, gmailTrigger, set. It contains 12 nodes a..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "If"
  - "OpenAI"
  - "Set"
  - "Code"
  - "Gmail"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/pipedrive-workflow.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Google Drive"
  - "If"
steps:
  - stepNumber: 1
    title: "Search Person in CRM"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "In campaign?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 3
    title: "Get person from CRM"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Is interested?"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Get email"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Create deal in CRM"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 7
    title: "IF interested"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, If, OpenAI, Set, Code, Gmail, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, If, OpenAI, Set, Code, Gmail, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, If, OpenAI, Set, Code, Gmail, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
