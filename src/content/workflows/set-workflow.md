---
title: "Set Workflow"
description: "Automated workflow: Set Workflow. This workflow integrates 12 different services: stickyNote, httpRequest, code, googleSheetsTrigger, chainLlm. It contains 2..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Http Request"
  - "Code"
  - "Email Send"
  - "Sticky Note"
  - "Google Sheets"
  - "If"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Code/0709_Code_HTTP_Create_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Set your company's variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "Get linkedin Posts"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Get twitter ID"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Get tweets"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Extract and limit Linkedin"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Exract and limit X"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "Send Cover letter and CC me"
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Http Request, Code, Email Send, Sticky Note, Google Sheets, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Http Request, Code, Email Send, Sticky Note, Google Sheets, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Http Request, Code, Email Send, Sticky Note, Google Sheets, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
