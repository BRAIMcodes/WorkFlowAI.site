---
title: "YouTube Comment Sentiment Analyzer"
description: "Automated workflow: YouTube Comment Sentiment Analyzer. This workflow integrates 11 different services: stickyNote, httpRequest, splitOut, noOp, set. It cont..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "Google Sheets"
  - "If"
  - "Http Request"
  - "Set"
  - "Manual Trigger"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/2016_Splitout_Noop_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Split Out"
  - "Google Sheets"
steps:
  - stepNumber: 1
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "Get Video Urls from Google Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 3
    title: "check next fetch time is available or not"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "check next fetch time is before the current time"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Get Comments for video urls"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Format fields as required to save in google sheet"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Insert and update comment in google sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, Google Sheets, If, Http Request, Set, Manual Trigger, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, Google Sheets, If, Http Request, Set, Manual Trigger, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, Google Sheets, If, Http Request, Set, Manual Trigger, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
