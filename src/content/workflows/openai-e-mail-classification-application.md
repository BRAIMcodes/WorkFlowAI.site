---
title: "OpenAI e-mail classification - application"
description: "Automated workflow: OpenAI e-mail classification - application. This workflow integrates 8 different services: textClassifier, stickyNote, informationExtract..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Email Read Imap"
  - "Sticky Note"
  - "Extract From File"
downloadUrl: "/blueprints/imported/openai-e-mail-classification-application.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Email Read Imap"
steps:
  - stepNumber: 1
    title: "Manual Trigger"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Email trigger"
    description: "Processes and automates operations via the Email Read Imap integration."
    tool: "Email Read Imap"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Extract data from attachment"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
---

Optimize your tech stack and automate workflows between Manual Trigger, Email Read Imap, Sticky Note, Extract From File natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Email Read Imap, Sticky Note, Extract From File

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Email Read Imap, Sticky Note, Extract From File and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
