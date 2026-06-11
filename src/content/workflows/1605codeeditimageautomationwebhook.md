---
title: "Code Editimage Automation Webhook"
description: "Integrate Manual Trigger and Set and Http Request and Code and Edit Image and Sticky Note automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Set"
  - "Http Request"
  - "Code"
  - "Edit Image"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/1605codeeditimageautomationwebhook.json"
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
  - "Set"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Get Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Get Test Image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Gemini 2.0 Object Detection"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Scale Normalised Coords"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Draw Bounding Boxes"
    description: "Processes and automates operations via the Edit Image integration."
    tool: "Edit Image"
  - stepNumber: 7
    title: "Get Image Info"
    description: "Processes and automates operations via the Edit Image integration."
    tool: "Edit Image"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 7 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Set, Http Request, Code, Edit Image, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Set, Http Request, Code, Edit Image, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Set, Http Request, Code, Edit Image, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
