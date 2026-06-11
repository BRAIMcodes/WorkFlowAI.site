---
title: "0554_Splitout_Code_Create_Webhook"
description: "Integrate OpenAI and LangChain and Set and Google Sheets and Split Out and Http Request and Split In Batches and Execute Workflow and Execute Workflow Trigge..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "LangChain"
  - "Set"
  - "Google Sheets"
  - "Split Out"
  - "Http Request"
  - "Split In Batches"
  - "Execute Workflow"
  - "Execute Workflow Trigger"
  - "Sticky Note"
  - "If"
  - "Manual Trigger"
  - "Filter"
  - "Code"
downloadUrl: "/blueprints/imported/0554splitoutcodecreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "OpenAI"
  - "LangChain"
steps:
  - stepNumber: 1
    title: "Embeddings OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "Default Data Loader"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 3
    title: "Convert to Question Answer Pairs"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Recursive Character Text Splitter"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "Get Survey Results"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Get Survey Headers"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Extract Questions"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 34 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between OpenAI, LangChain, Set, Google Sheets, Split Out, Http Request, Split In Batches, Execute Workflow, Execute Workflow Trigger, Sticky Note, If, Manual Trigger, Filter, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, LangChain, Set, Google Sheets, Split Out, Http Request, Split In Batches, Execute Workflow, Execute Workflow Trigger, Sticky Note, If, Manual Trigger, Filter, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, LangChain, Set, Google Sheets, Split Out, Http Request, Split In Batches, Execute Workflow, Execute Workflow Trigger, Sticky Note, If, Manual Trigger, Filter, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
