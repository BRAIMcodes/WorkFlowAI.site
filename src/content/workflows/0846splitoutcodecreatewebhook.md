---
title: "Splitout Code Create Webhook"
description: "Integrate Manual Trigger and Http Request and Set and Gemini and Convert To File and Code and Sort and Sticky Note and Split Out and Gmail automatically usin..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Set"
  - "Gemini"
  - "Convert To File"
  - "Code"
  - "Sort"
  - "Sticky Note"
  - "Split Out"
  - "Gmail"
downloadUrl: "/blueprints/imported/0846splitoutcodecreatewebhook.json"
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
    title: "Get Term Dates Excel"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Extract Target Sheet"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Fix Dates"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Google Gemini Chat Model"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 6
    title: "Create ICS File"
    description: "Processes and automates operations via the Convert To File integration."
    tool: "Convert To File"
  - stepNumber: 7
    title: "Events to ICS Document"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Set, Gemini, Convert To File, Code, Sort, Sticky Note, Split Out, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Set, Gemini, Convert To File, Code, Sort, Sticky Note, Split Out, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Set, Gemini, Convert To File, Code, Sort, Sticky Note, Split Out, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
