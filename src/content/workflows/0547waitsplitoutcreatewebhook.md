---
title: "Wait Splitout Create Webhook"
description: "Integrate Sticky Note and Manual Trigger and OpenAI and LangChain and Remove Duplicates and Set and Split Out and Notion and Limit and Split In Batches and H..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Manual Trigger"
  - "OpenAI"
  - "LangChain"
  - "Remove Duplicates"
  - "Set"
  - "Split Out"
  - "Notion"
  - "Limit"
  - "Split In Batches"
  - "Http Request"
  - "Wait"
downloadUrl: "/blueprints/imported/0547waitsplitoutcreatewebhook.json"
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
  - "Manual Trigger"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 3
    title: "OpenAI Chat Model1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "Search Crunchbase"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "Search WellFound"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Search LinkedIn"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "Structured Output Parser1"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 32 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Manual Trigger, OpenAI, LangChain, Remove Duplicates, Set, Split Out, Notion, Limit, Split In Batches, Http Request, Wait natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Manual Trigger, OpenAI, LangChain, Remove Duplicates, Set, Split Out, Notion, Limit, Split In Batches, Http Request, Wait

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Manual Trigger, OpenAI, LangChain, Remove Duplicates, Set, Split Out, Notion, Limit, Split In Batches, Http Request, Wait and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
