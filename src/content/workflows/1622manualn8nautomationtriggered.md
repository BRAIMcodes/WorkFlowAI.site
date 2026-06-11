---
title: "Manual n8n Automation Triggered"
description: "Integrate Manual Trigger and Set and Sticky Note and Code and LangChain and OpenAI and N8n automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Set"
  - "Sticky Note"
  - "Code"
  - "LangChain"
  - "OpenAI"
  - "N8n"
downloadUrl: "/blueprints/imported/1622manualn8nautomationtriggered.json"
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
    title: "When clicking \"Test workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Map Workflows & Credentials"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Save to Database"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Chat Trigger"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Query Workflow Credentials Database"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 6 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Set, Sticky Note, Code, LangChain, OpenAI, N8n natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Set, Sticky Note, Code, LangChain, OpenAI, N8n

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Set, Sticky Note, Code, LangChain, OpenAI, N8n and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
