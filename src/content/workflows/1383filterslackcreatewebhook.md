---
title: "Filter Slack Create Webhook"
description: "Integrate Linear Trigger and Filter and Sticky Note and Linear and Http Request and Set and If and Slack and Merge and OpenAI automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Linear Trigger"
  - "Filter"
  - "Sticky Note"
  - "Linear"
  - "Http Request"
  - "Set"
  - "If"
  - "Slack"
  - "Merge"
  - "OpenAI"
downloadUrl: "/blueprints/imported/1383filterslackcreatewebhook.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Linear Trigger"
  - "Filter"
steps:
  - stepNumber: 1
    title: "Linear Trigger"
    description: "Processes and automates operations via the Linear Trigger integration."
    tool: "Linear Trigger"
  - stepNumber: 2
    title: "Only tickets that need to be classified"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Update team"
    description: "Processes and automates operations via the Linear integration."
    tool: "Linear"
  - stepNumber: 5
    title: "Get all linear teams"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Set team ID"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Set me up"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Linear Trigger, Filter, Sticky Note, Linear, Http Request, Set, If, Slack, Merge, OpenAI natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Linear Trigger, Filter, Sticky Note, Linear, Http Request, Set, If, Slack, Merge, OpenAI

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Linear Trigger, Filter, Sticky Note, Linear, Http Request, Set, If, Slack, Merge, OpenAI and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
