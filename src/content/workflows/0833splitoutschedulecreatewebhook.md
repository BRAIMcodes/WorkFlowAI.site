---
title: "0833_Splitout_Schedule_Create_Webhook"
description: "Integrate Schedule Trigger and Microsoft Excel and Set and OpenAI and Aggregate and Split Out and Split In Batches and LangChain and Merge and Http Request a..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Microsoft Excel"
  - "Set"
  - "OpenAI"
  - "Aggregate"
  - "Split Out"
  - "Split In Batches"
  - "LangChain"
  - "Merge"
  - "Http Request"
  - "Remove Duplicates"
  - "If"
  - "Html"
  - "Microsoft Outlook"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0833splitoutschedulecreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "Microsoft Excel"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Get Subscribers"
    description: "Processes and automates operations via the Microsoft Excel integration."
    tool: "Microsoft Excel"
  - stepNumber: 3
    title: "Get Unique Categories"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 6
    title: "Collect Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Categories to Items"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 25 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Microsoft Excel, Set, OpenAI, Aggregate, Split Out, Split In Batches, LangChain, Merge, Http Request, Remove Duplicates, If, Html, Microsoft Outlook, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Microsoft Excel, Set, OpenAI, Aggregate, Split Out, Split In Batches, LangChain, Merge, Http Request, Remove Duplicates, If, Html, Microsoft Outlook, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Microsoft Excel, Set, OpenAI, Aggregate, Split Out, Split In Batches, LangChain, Merge, Http Request, Remove Duplicates, If, Html, Microsoft Outlook, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
