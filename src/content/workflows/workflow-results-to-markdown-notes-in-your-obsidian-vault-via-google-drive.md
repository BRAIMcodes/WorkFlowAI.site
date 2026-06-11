---
title: "Workflow Results To Markdown Notes In Your Obsidian Vault, Via Google Drive"
description: "Automated workflow: Workflow Results to Markdown Notes in Your Obsidian Vault, via Google Drive. This workflow integrates 9 different services: stickyNote, a..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Google Drive"
  - "Execute Workflow Trigger"
  - "If"
  - "Set"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/workflow-results-to-markdown-notes-in-your-obsidian-vault-via-google-drive.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Sticky Note"
  - "Google Drive"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Save Markdown file"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Receive results from any workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 6
    title: "If the input has binary attachment"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 7
    title: "Restructure JSON"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Google Drive, Execute Workflow Trigger, If, Set, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Google Drive, Execute Workflow Trigger, If, Set, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Google Drive, Execute Workflow Trigger, If, Set, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
