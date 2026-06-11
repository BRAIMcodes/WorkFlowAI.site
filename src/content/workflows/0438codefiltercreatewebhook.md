---
title: "Code Filter Create Webhook"
description: "Integrate Split In Batches and Graphql and Notion and Aggregate and Set and Linear and Code and If and Http Request and OpenAI and Sticky Note and Filter and..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split In Batches"
  - "Graphql"
  - "Notion"
  - "Aggregate"
  - "Set"
  - "Linear"
  - "Code"
  - "If"
  - "Http Request"
  - "OpenAI"
  - "Sticky Note"
  - "Filter"
  - "Form Trigger"
  - "Respond To Webhook"
downloadUrl: "/blueprints/imported/0438codefiltercreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Split In Batches"
  - "Graphql"
steps:
  - stepNumber: 1
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 2
    title: "Fetch Linear team details"
    description: "Processes and automates operations via the Graphql integration."
    tool: "Graphql"
  - stepNumber: 3
    title: "Get issue contents"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 4
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 5
    title: "Prepare issue data"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Create linear issue"
    description: "Processes and automates operations via the Linear integration."
    tool: "Linear"
  - stepNumber: 7
    title: "Set assignee and title"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 17 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split In Batches, Graphql, Notion, Aggregate, Set, Linear, Code, If, Http Request, OpenAI, Sticky Note, Filter, Form Trigger, Respond To Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split In Batches, Graphql, Notion, Aggregate, Set, Linear, Code, If, Http Request, OpenAI, Sticky Note, Filter, Form Trigger, Respond To Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split In Batches, Graphql, Notion, Aggregate, Set, Linear, Code, If, Http Request, OpenAI, Sticky Note, Filter, Form Trigger, Respond To Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
