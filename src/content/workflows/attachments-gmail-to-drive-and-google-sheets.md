---
title: "Attachments Gmail To Drive And Google Sheets"
description: "Automated workflow: Attachments Gmail to drive and google sheets. This workflow integrates 13 different services: stickyNote, httpRequest, gmailTrigger, chai..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Gmail"
  - "Set"
  - "Http Request"
  - "Google Drive"
  - "Extract From File"
  - "Google Sheets"
  - "If"
downloadUrl: "/blueprints/imported/attachments-gmail-to-drive-and-google-sheets.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Sticky Note"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Gmail Trigger1"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Setup1"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Upload PDF to Drive1"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Rename file1"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 6
    title: "Move to the correct folder1"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 7
    title: "Gmail"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 7 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Gmail, Set, Http Request, Google Drive, Extract From File, Google Sheets, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Gmail, Set, Http Request, Google Drive, Extract From File, Google Sheets, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Gmail, Set, Http Request, Google Drive, Extract From File, Google Sheets, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
