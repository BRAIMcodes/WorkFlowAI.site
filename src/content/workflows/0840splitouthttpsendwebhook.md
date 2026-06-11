---
title: "Splitout HTTP Send Webhook"
description: "Integrate LangChain and OpenAI and Http Request and Set and Split Out and If and Aggregate and Sticky Note and Execute Workflow Trigger automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "LangChain"
  - "OpenAI"
  - "Http Request"
  - "Set"
  - "Split Out"
  - "If"
  - "Aggregate"
  - "Sticky Note"
  - "Execute Workflow Trigger"
downloadUrl: "/blueprints/imported/0840splitouthttpsendwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "LangChain"
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "When chat message received"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 2
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "Simple Memory"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "Acuity Support Search API"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Extract Relevant Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Results to Items"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 7
    title: "Has Results?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between LangChain, OpenAI, Http Request, Set, Split Out, If, Aggregate, Sticky Note, Execute Workflow Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: LangChain, OpenAI, Http Request, Set, Split Out, If, Aggregate, Sticky Note, Execute Workflow Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing LangChain, OpenAI, Http Request, Set, Split Out, If, Aggregate, Sticky Note, Execute Workflow Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
