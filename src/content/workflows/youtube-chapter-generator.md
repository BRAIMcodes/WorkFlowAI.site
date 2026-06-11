---
title: "youtube chapter generator"
description: "Automated workflow: youtube chapter generator. This workflow integrates 10 different services: stickyNote, youTube, httpRequest, lmChatGoogleGemini, chainLlm..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Extract From File"
  - "You Tube"
  - "Set"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Extractfromfile/1641_Extractfromfile_Manual_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Get Caption ID"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Get Captions"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Extract Captions"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Get Video Meta Data"
    description: "Processes and automates operations via the You Tube integration."
    tool: "You Tube"
  - stepNumber: 6
    title: "Set Video ID"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Update Chapters"
    description: "Processes and automates operations via the You Tube integration."
    tool: "You Tube"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Extract From File, You Tube, Set, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Extract From File, You Tube, Set, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Extract From File, You Tube, Set, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
