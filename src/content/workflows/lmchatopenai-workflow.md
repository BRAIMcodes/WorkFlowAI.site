---
title: "Lmchatopenai Workflow"
description: "Automated workflow: Lmchatopenai Workflow. This workflow integrates 16 different services: stickyNote, httpRequest, airtable, agent, merge. It contains 58 no..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Execute Workflow Trigger"
  - "Set"
  - "Switch"
  - "Aggregate"
  - "Merge"
  - "If"
  - "Airtable"
  - "Http Request"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Aggregate/0681_Aggregate_HTTP_Create_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Sticky Note"
  - "Execute Workflow Trigger"
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
    title: "Execute Workflow Trigger"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 4
    title: "Response"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Switch"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 6
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 7
    title: "Aggregate1"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 25 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Execute Workflow Trigger, Set, Switch, Aggregate, Merge, If, Airtable, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Execute Workflow Trigger, Set, Switch, Aggregate, Merge, If, Airtable, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Execute Workflow Trigger, Set, Switch, Aggregate, Merge, If, Airtable, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
