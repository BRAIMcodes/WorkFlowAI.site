---
title: "Email AI Auto-responder. Summerize and send email"
description: "Automated workflow: Email AI Auto-responder. Summerize and send email. This workflow integrates 18 different services: textClassifier, stickyNote, markdown,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Email Read Imap"
  - "Markdown"
  - "Email Send"
  - "Manual Trigger"
  - "Http Request"
  - "Google Drive"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Emailreadimap/1277_Emailreadimap_Manual_Send_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Email Read Imap"
  - "Markdown"
steps:
  - stepNumber: 1
    title: "Email Trigger (IMAP)"
    description: "Processes and automates operations via the Email Read Imap integration."
    tool: "Email Read Imap"
  - stepNumber: 2
    title: "Markdown"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 3
    title: "Send Email"
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 4
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 5
    title: "Create collection"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Refresh collection"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Get folder"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Email Read Imap, Markdown, Email Send, Manual Trigger, Http Request, Google Drive, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Email Read Imap, Markdown, Email Send, Manual Trigger, Http Request, Google Drive, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Email Read Imap, Markdown, Email Send, Manual Trigger, Http Request, Google Drive, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
