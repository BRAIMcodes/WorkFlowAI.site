---
title: "Splitout Limit Create Webhook"
description: "Integrate Manual Trigger and Split Out and Html and Aggregate and Http Request and Filter and If and LangChain and Gemini and Sticky Note and Limit automatic..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Split Out"
  - "Html"
  - "Aggregate"
  - "Http Request"
  - "Filter"
  - "If"
  - "LangChain"
  - "Gemini"
  - "Sticky Note"
  - "Limit"
downloadUrl: "/blueprints/imported/0731splitoutlimitcreatewebhook.json"
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
  - "Split Out"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 3
    title: "Extract News Block"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 4
    title: "Extract News Content"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 5
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 6
    title: "Fetch BBC News Detail"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Extract Detail"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 15 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Split Out, Html, Aggregate, Http Request, Filter, If, LangChain, Gemini, Sticky Note, Limit natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Split Out, Html, Aggregate, Http Request, Filter, If, LangChain, Gemini, Sticky Note, Limit

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Split Out, Html, Aggregate, Http Request, Filter, If, LangChain, Gemini, Sticky Note, Limit and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
