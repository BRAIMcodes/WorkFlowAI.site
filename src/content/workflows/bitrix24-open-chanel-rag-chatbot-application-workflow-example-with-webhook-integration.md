---
title: "Bitrix24 Open Chanel RAG Chatbot Application Workflow Example With Webhook Integration"
description: "Automated workflow: Bitrix24 Open Chanel RAG Chatbot Application Workflow example with Webhook Integration. This workflow integrates 22 different services: s..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Set"
  - "If"
  - "Switch"
  - "Function"
  - "Http Request"
  - "Respond To Webhook"
  - "Merge"
  - "Split Out"
  - "Filter"
  - "Execute Workflow Trigger"
  - "Sticky Note"
  - "Execute Workflow"
downloadUrl: "/blueprints/imported/bitrix24-open-chanel-rag-chatbot-application-workflow-example-with-webhook-integration.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Webhook"
  - "Set"
steps:
  - stepNumber: 1
    title: "Bitrix24 Handler"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Credentials"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Validate Token"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "Route Event"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 5
    title: "Process Message"
    description: "Processes and automates operations via the Function integration."
    tool: "Function"
  - stepNumber: 6
    title: "Process Join"
    description: "Processes and automates operations via the Function integration."
    tool: "Function"
  - stepNumber: 7
    title: "Process Install"
    description: "Processes and automates operations via the Function integration."
    tool: "Function"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 17 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Webhook, Set, If, Switch, Function, Http Request, Respond To Webhook, Merge, Split Out, Filter, Execute Workflow Trigger, Sticky Note, Execute Workflow natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Set, If, Switch, Function, Http Request, Respond To Webhook, Merge, Split Out, Filter, Execute Workflow Trigger, Sticky Note, Execute Workflow

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Set, If, Switch, Function, Http Request, Respond To Webhook, Merge, Split Out, Filter, Execute Workflow Trigger, Sticky Note, Execute Workflow and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
