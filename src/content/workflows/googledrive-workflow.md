---
title: "Googledrive Workflow"
description: "Automated workflow: Googledrive Workflow. This workflow integrates 9 different services: webhook, stickyNote, httpRequest, googleDriveTrigger, airtable. It c..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "Http Request"
  - "Airtable"
  - "Set"
  - "Code"
  - "Webhook"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/googledrive-workflow.json"
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
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Google Drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Upload File"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Google Drive Trigger"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Create Invoice"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 5
    title: "Create Line Item"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 6
    title: "OpenAI - Extract Line Items"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Set Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 11 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, Http Request, Airtable, Set, Code, Webhook, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, Http Request, Airtable, Set, Code, Webhook, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, Http Request, Airtable, Set, Code, Webhook, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
