---
title: "Remove Advanced Background from Google Drive Images"
description: "Automated workflow: Remove Advanced Background from Google Drive Images. This workflow integrates 11 different services: stickyNote, httpRequest, googleDrive..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Http Request"
  - "Split Out"
  - "Google Drive"
  - "Merge"
  - "Edit Image"
  - "Sticky Note"
  - "If"
  - "Split In Batches"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/1343_Splitout_Editimage_Automation_Webhook.json"
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
    title: "Config"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "remove background"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 4
    title: "Upload Picture to Google Drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 5
    title: "remove background fixed size"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 7
    title: "Upload Picture to Google Drive1"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Http Request, Split Out, Google Drive, Merge, Edit Image, Sticky Note, If, Split In Batches natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Http Request, Split Out, Google Drive, Merge, Edit Image, Sticky Note, If, Split In Batches

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Http Request, Split Out, Google Drive, Merge, Edit Image, Sticky Note, If, Split In Batches and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
