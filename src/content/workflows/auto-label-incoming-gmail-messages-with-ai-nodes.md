---
title: "Auto Label Incoming Gmail Messages With AI Nodes"
description: "Integrate Gmail and Set and Split Out and Merge and Aggregate and LangChain and Sticky Note and OpenAI automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Set"
  - "Split Out"
  - "Merge"
  - "Aggregate"
  - "LangChain"
  - "Sticky Note"
  - "OpenAI"
downloadUrl: "/blueprints/imported/auto-label-incoming-gmail-messages-with-ai-nodes.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gmail"
  - "Set"
steps:
  - stepNumber: 1
    title: "Gmail trigger"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Get message content"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Set label values"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Get all labels"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 5
    title: "Split out assigned labels"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 6
    title: "Merge corresponding labels"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 7
    title: "Aggregate label IDs"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Set, Split Out, Merge, Aggregate, LangChain, Sticky Note, OpenAI natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Set, Split Out, Merge, Aggregate, LangChain, Sticky Note, OpenAI

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Set, Split Out, Merge, Aggregate, LangChain, Sticky Note, OpenAI and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
