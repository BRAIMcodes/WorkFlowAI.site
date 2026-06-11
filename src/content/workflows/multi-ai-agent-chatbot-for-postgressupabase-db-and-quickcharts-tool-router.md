---
title: "✨📊Multi-AI Agent Chatbot for Postgres/Supabase DB and QuickCharts + Tool Router"
description: "Automated workflow: ✨📊Multi-AI Agent Chatbot for Postgres/Supabase DB and QuickCharts + Tool Router. This workflow integrates 13 different services: postgre..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "PostgreSQL"
  - "Execute Workflow Trigger"
  - "Http Request"
  - "Sticky Note"
  - "Switch"
  - "Set"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Http/1558_HTTP_Stickynote_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "PostgreSQL"
  - "Execute Workflow Trigger"
steps:
  - stepNumber: 1
    title: "Execute SQL Query"
    description: "Processes and automates operations via the PostgreSQL integration."
    tool: "PostgreSQL"
  - stepNumber: 2
    title: "When Executed by Another Workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 3
    title: "Create QuickChart"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "🔀Tool Agent Router"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 6
    title: "Table Definitions"
    description: "Processes and automates operations via the PostgreSQL integration."
    tool: "PostgreSQL"
  - stepNumber: 7
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 22 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between PostgreSQL, Execute Workflow Trigger, Http Request, Sticky Note, Switch, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: PostgreSQL, Execute Workflow Trigger, Http Request, Sticky Note, Switch, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing PostgreSQL, Execute Workflow Trigger, Http Request, Sticky Note, Switch, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
