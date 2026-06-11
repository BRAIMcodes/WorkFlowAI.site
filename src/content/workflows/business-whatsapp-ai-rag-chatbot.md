---
title: "Business WhatsApp AI RAG Chatbot"
description: "Automated workflow: Business WhatsApp AI RAG Chatbot. This workflow integrates 16 different services: webhook, stickyNote, httpRequest, textSplitterTokenSpli..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Respond To Webhook"
  - "Sticky Note"
  - "Manual Trigger"
  - "Http Request"
  - "Google Drive"
  - "Webhook"
  - "If"
  - "WhatsApp"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Webhook/1385_Webhook_Respondtowebhook_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Respond To Webhook"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Respond to Webhook"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 4
    title: "Create collection"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Refresh collection"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Get folder"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 7
    title: "Download Files"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Respond To Webhook, Sticky Note, Manual Trigger, Http Request, Google Drive, Webhook, If, WhatsApp natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Respond To Webhook, Sticky Note, Manual Trigger, Http Request, Google Drive, Webhook, If, WhatsApp

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Respond To Webhook, Sticky Note, Manual Trigger, Http Request, Google Drive, Webhook, If, WhatsApp and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
