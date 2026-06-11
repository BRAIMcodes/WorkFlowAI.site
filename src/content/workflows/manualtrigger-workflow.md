---
title: "Manualtrigger Workflow"
description: "Automated workflow: Manualtrigger Workflow. This workflow integrates 10 different services: stickyNote, httpRequest, code, lmChatGoogleGemini, chainLlm. It c..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Edit Image"
  - "Code"
  - "Sticky Note"
  - "Merge"
  - "Http Request"
downloadUrl: "/blueprints/imported/manualtrigger-workflow.json"
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
  - "Edit Image"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Get Info"
    description: "Processes and automates operations via the Edit Image integration."
    tool: "Edit Image"
  - stepNumber: 3
    title: "Resize For AI"
    description: "Processes and automates operations via the Edit Image integration."
    tool: "Edit Image"
  - stepNumber: 4
    title: "Calculate Positioning"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Apply Caption to Image"
    description: "Processes and automates operations via the Edit Image integration."
    tool: "Edit Image"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Merge Image & Caption"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 6 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Edit Image, Code, Sticky Note, Merge, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Edit Image, Code, Sticky Note, Merge, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Edit Image, Code, Sticky Note, Merge, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
