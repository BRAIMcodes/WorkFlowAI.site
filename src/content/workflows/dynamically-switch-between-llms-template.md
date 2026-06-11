---
title: "Dynamically Switch Between Llms Template"
description: "Automated workflow: Dynamically switch between LLMs Template. This workflow integrates 10 different services: stickyNote, code, chainLlm, set, stopAndError...."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Set"
  - "If"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/dynamically-switch-between-llms-template.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Manual Trigger"
  - "Set"
steps:
  - stepNumber: 1
    title: "Manual Trigger"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Set LLM index"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Increase LLM index"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Check for expected error"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Loop finished without results"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Unexpected error"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Return result"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 8 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Set, If, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Set, If, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Set, If, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
