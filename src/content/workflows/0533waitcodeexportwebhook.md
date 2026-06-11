---
title: "Wait Code Export Webhook"
description: "Integrate Manual Trigger and Http Request and Code and Html and Set and LangChain and Merge and Execute Workflow Trigger and Wait and Sticky Note automatical..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Code"
  - "Html"
  - "Set"
  - "LangChain"
  - "Merge"
  - "Execute Workflow Trigger"
  - "Wait"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0533waitcodeexportwebhook.json"
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
  - "Http Request"
steps:
  - stepNumber: 1
    title: "When clicking \"Test workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Get This Week's Menu"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Extract Available Courses"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Extract Server Data"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 5
    title: "Get Course Metadata"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Get Recipe"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Embeddings Mistral Cloud"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Code, Html, Set, LangChain, Merge, Execute Workflow Trigger, Wait, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Code, Html, Set, LangChain, Merge, Execute Workflow Trigger, Wait, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Code, Html, Set, LangChain, Merge, Execute Workflow Trigger, Wait, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
