---
title: "Splitout Redis Create Triggered"
description: "Integrate Set and Execute Workflow Trigger and Switch and N8n and Filter and Redis and Split Out and Aggregate and LangChain and If and Sticky Note and Execu..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Execute Workflow Trigger"
  - "Switch"
  - "N8n"
  - "Filter"
  - "Redis"
  - "Split Out"
  - "Aggregate"
  - "LangChain"
  - "If"
  - "Sticky Note"
  - "Execute Workflow"
  - "OpenAI"
downloadUrl: "/blueprints/imported/0894splitoutrediscreatetriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Execute Workflow Trigger"
steps:
  - stepNumber: 1
    title: "Simplify Workflows"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "When Executed by Another Workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 3
    title: "Operations"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 4
    title: "Get MCP-tagged Workflows"
    description: "Processes and automates operations via the N8n integration."
    tool: "N8n"
  - stepNumber: 5
    title: "Filter Matching Ids"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 6
    title: "Store In Memory"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 7
    title: "AddTool Success"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 39 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Execute Workflow Trigger, Switch, N8n, Filter, Redis, Split Out, Aggregate, LangChain, If, Sticky Note, Execute Workflow, OpenAI natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Execute Workflow Trigger, Switch, N8n, Filter, Redis, Split Out, Aggregate, LangChain, If, Sticky Note, Execute Workflow, OpenAI

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Execute Workflow Trigger, Switch, N8n, Filter, Redis, Split Out, Aggregate, LangChain, If, Sticky Note, Execute Workflow, OpenAI and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
