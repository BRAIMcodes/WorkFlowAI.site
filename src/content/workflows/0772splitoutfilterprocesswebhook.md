---
title: "0772_Splitout_Filter_Process_Webhook"
description: "Integrate Manual Trigger and Gemini and LangChain and Http Request and Split Out and Extract From File and Split In Batches and Set and Sticky Note and Filte..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Gemini"
  - "LangChain"
  - "Http Request"
  - "Split Out"
  - "Extract From File"
  - "Split In Batches"
  - "Set"
  - "Sticky Note"
  - "Filter"
downloadUrl: "/blueprints/imported/0772splitoutfilterprocesswebhook.json"
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
  - "Gemini"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Google Gemini Chat Model"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 3
    title: "AI Agent"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "Get image from unsplash2"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 6
    title: "Get image from unsplash3"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Transform to base"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 21 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Gemini, LangChain, Http Request, Split Out, Extract From File, Split In Batches, Set, Sticky Note, Filter natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Gemini, LangChain, Http Request, Split Out, Extract From File, Split In Batches, Set, Sticky Note, Filter

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Gemini, LangChain, Http Request, Split Out, Extract From File, Split In Batches, Set, Sticky Note, Filter and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
