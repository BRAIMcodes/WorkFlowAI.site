---
title: "Wait Code Import Webhook"
description: "Integrate Code and Gmail and Split In Batches and Wait and Filter and Set and Http Request and Sticky Note and Schedule Trigger automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Code"
  - "Gmail"
  - "Split In Batches"
  - "Wait"
  - "Filter"
  - "Set"
  - "Http Request"
  - "Sticky Note"
  - "Schedule Trigger"
downloadUrl: "/blueprints/imported/0596waitcodeimportwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Code"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "CarrierNameLookup"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 2
    title: "Gmail"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Get Dates"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Merge & Extract"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 6
    title: "Wait"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 7
    title: "Under Price"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Code, Gmail, Split In Batches, Wait, Filter, Set, Http Request, Sticky Note, Schedule Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Code, Gmail, Split In Batches, Wait, Filter, Set, Http Request, Sticky Note, Schedule Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Code, Gmail, Split In Batches, Wait, Filter, Set, Http Request, Sticky Note, Schedule Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
