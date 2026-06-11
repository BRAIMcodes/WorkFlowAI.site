---
title: "Printify Automation Update Title And Description Alex K1919"
description: "Automated workflow: Printify Automation - Update Title and Description - AlexK1919. This workflow integrates 14 different services: stickyNote, httpRequest,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Split Out"
  - "Split In Batches"
  - "Set"
  - "Sticky Note"
  - "Google Sheets"
  - "If"
  - "Code"
downloadUrl: "/blueprints/imported/printify-automation-update-title-and-description-alexk1919.json"
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
    title: "Printify - Get Shops"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Printify - Get Products"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 6
    title: "Split - id, title, desc"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 7
    title: "Printify - Update Product"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Split Out, Split In Batches, Set, Sticky Note, Google Sheets, If, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Split Out, Split In Batches, Set, Sticky Note, Google Sheets, If, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Split Out, Split In Batches, Set, Sticky Note, Google Sheets, If, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
