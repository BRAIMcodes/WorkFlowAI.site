---
title: "Lemlist Workflow"
description: "Automated workflow: Lemlist Workflow. This workflow processes data and performs automated tasks."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Lemlist"
  - "HubSpot"
  - "Switch"
  - "Merge"
  - "Http Request"
  - "Slack"
  - "Lemlist Trigger"
  - "OpenAI"
downloadUrl: "/blueprints/imported/lemlist-workflow.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Lemlist"
  - "HubSpot"
steps:
  - stepNumber: 1
    title: "Lemlist - Unsubscribe"
    description: "Processes and automates operations via the Lemlist integration."
    tool: "Lemlist"
  - stepNumber: 2
    title: "follow up task"
    description: "Processes and automates operations via the HubSpot integration."
    tool: "HubSpot"
  - stepNumber: 3
    title: "Switch"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 4
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 5
    title: "lemlist - Mark as interested"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "HubSpot - Create Deal"
    description: "Processes and automates operations via the HubSpot integration."
    tool: "HubSpot"
  - stepNumber: 7
    title: "HubSpot - Get contact ID"
    description: "Processes and automates operations via the HubSpot integration."
    tool: "HubSpot"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Lemlist, HubSpot, Switch, Merge, Http Request, Slack, Lemlist Trigger, OpenAI natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Lemlist, HubSpot, Switch, Merge, Http Request, Slack, Lemlist Trigger, OpenAI

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Lemlist, HubSpot, Switch, Merge, Http Request, Slack, Lemlist Trigger, OpenAI and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
