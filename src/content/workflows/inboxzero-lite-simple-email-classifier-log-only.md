---
title: "InboxZero Lite — Simple Email Classifier (Log Only)"
description: "Integrate Gmail and Code and OpenAI and Google Sheets and Sticky Note automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Code"
  - "OpenAI"
  - "Google Sheets"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/InboxZero Lite - AI Email Classifier.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gmail"
  - "Code"
steps:
  - stepNumber: 1
    title: "Gmail: New Email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Parse Email"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "AI: Classify"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "Merge Result"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Log to Sheets"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Gmail, Code, OpenAI, Google Sheets, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Code, OpenAI, Google Sheets, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Code, OpenAI, Google Sheets, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
