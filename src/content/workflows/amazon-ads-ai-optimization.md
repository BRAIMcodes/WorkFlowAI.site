---
title: "Amazon Ads AI Optimization"
description: "Automated workflow: Amazon Ads AI Optimization. This workflow integrates 12 different services: stickyNote, code, chainLlm, googleDrive, merge. It contains 2..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "If"
  - "Merge"
  - "Code"
  - "Set"
  - "Sticky Note"
  - "Gmail"
  - "Extract From File"
  - "Manual Trigger"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/amazon-ads-ai-optimization.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Google Drive"
  - "If"
steps:
  - stepNumber: 1
    title: "List Files"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "is XLSX"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 3
    title: "Get File"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Merge XLSX and CSV"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 5
    title: "Format Data"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Set fileName"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, If, Merge, Code, Set, Sticky Note, Gmail, Extract From File, Manual Trigger, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, If, Merge, Code, Set, Sticky Note, Gmail, Extract From File, Manual Trigger, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, If, Merge, Code, Set, Sticky Note, Gmail, Extract From File, Manual Trigger, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
