---
title: "Customer Insights with Qdrant, Python and Information Extractor"
description: "Integrate Manual Trigger and Set and Html and Split Out and LangChain and OpenAI and Http Request and Filter and Google Sheets and Execute Workflow and Execu..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Set"
  - "Html"
  - "Split Out"
  - "LangChain"
  - "OpenAI"
  - "Http Request"
  - "Filter"
  - "Google Sheets"
  - "Execute Workflow"
  - "Execute Workflow Trigger"
  - "Sticky Note"
  - "Code"
downloadUrl: "/blueprints/imported/customer-insights-with-qdrant-python-and-information-extractor.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Set"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Zip Entries"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Extract Reviews"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 4
    title: "Reviews to List"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Default Data Loader"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Recursive Character Text Splitter"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "Embeddings OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 29 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Set, Html, Split Out, LangChain, OpenAI, Http Request, Filter, Google Sheets, Execute Workflow, Execute Workflow Trigger, Sticky Note, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Set, Html, Split Out, LangChain, OpenAI, Http Request, Filter, Google Sheets, Execute Workflow, Execute Workflow Trigger, Sticky Note, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Set, Html, Split Out, LangChain, OpenAI, Http Request, Filter, Google Sheets, Execute Workflow, Execute Workflow Trigger, Sticky Note, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
