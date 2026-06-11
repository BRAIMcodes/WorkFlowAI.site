---
title: "0696_Code_Webhook_Create_Webhook"
description: "Integrate Switch and Code and Http Request and Extract From File and Set and Split In Batches and LangChain and Filter and Sticky Note and OpenAI and Airtabl..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Switch"
  - "Code"
  - "Http Request"
  - "Extract From File"
  - "Set"
  - "Split In Batches"
  - "LangChain"
  - "Filter"
  - "Sticky Note"
  - "OpenAI"
  - "Airtable"
  - "Webhook"
  - "Manual Trigger"
downloadUrl: "/blueprints/imported/0696codewebhookcreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Switch"
  - "Code"
steps:
  - stepNumber: 1
    title: "Event Type"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 2
    title: "Get Prompt Fields"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "Get File Data"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Get Result"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 7
    title: "Generate Field Value"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 40 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Switch, Code, Http Request, Extract From File, Set, Split In Batches, LangChain, Filter, Sticky Note, OpenAI, Airtable, Webhook, Manual Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Switch, Code, Http Request, Extract From File, Set, Split In Batches, LangChain, Filter, Sticky Note, OpenAI, Airtable, Webhook, Manual Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Switch, Code, Http Request, Extract From File, Set, Split In Batches, LangChain, Filter, Sticky Note, OpenAI, Airtable, Webhook, Manual Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
