---
title: "🤖Contact Agent"
description: "Automated workflow: 🤖Contact Agent. This workflow processes data and performs automated tasks."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Airtable"
  - "Set"
  - "Execute Workflow Trigger"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/contact-agent.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Airtable"
  - "Set"
steps:
  - stepNumber: 1
    title: "Get Contacts"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 2
    title: "Add or Update Contact"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 3
    title: "Response"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Try Again"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "When Executed by Another Workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 6
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Airtable, Set, Execute Workflow Trigger, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Airtable, Set, Execute Workflow Trigger, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Airtable, Set, Execute Workflow Trigger, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
