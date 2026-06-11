---
title: "Wait Code Send Webhook"
description: "Integrate Code and Microsoft Outlook and Set and Split In Batches and LangChain and Extract From File and Markdown and Wait and Filter and If and Schedule Tr..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Code"
  - "Microsoft Outlook"
  - "Set"
  - "Split In Batches"
  - "LangChain"
  - "Extract From File"
  - "Markdown"
  - "Wait"
  - "Filter"
  - "If"
  - "Schedule Trigger"
  - "Sticky Note"
  - "Gemini"
  - "Microsoft Excel"
  - "Http Request"
downloadUrl: "/blueprints/imported/0820waitcodesendwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Code"
  - "Microsoft Outlook"
steps:
  - stepNumber: 1
    title: "Split Attachments"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 2
    title: "Download Attachments"
    description: "Processes and automates operations via the Microsoft Outlook integration."
    tool: "Microsoft Outlook"
  - stepNumber: 3
    title: "Parse Output"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "For Each Message"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 5
    title: "Message Classifier"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 7
    title: "Markdown"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Code, Microsoft Outlook, Set, Split In Batches, LangChain, Extract From File, Markdown, Wait, Filter, If, Schedule Trigger, Sticky Note, Gemini, Microsoft Excel, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Code, Microsoft Outlook, Set, Split In Batches, LangChain, Extract From File, Markdown, Wait, Filter, If, Schedule Trigger, Sticky Note, Gemini, Microsoft Excel, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Code, Microsoft Outlook, Set, Split In Batches, LangChain, Extract From File, Markdown, Wait, Filter, If, Schedule Trigger, Sticky Note, Gemini, Microsoft Excel, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
