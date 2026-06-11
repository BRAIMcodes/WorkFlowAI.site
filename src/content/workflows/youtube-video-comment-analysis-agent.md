---
title: "🎦🚀 YouTube Video Comment Analysis Agent"
description: "Automated workflow: 🎦🚀 YouTube Video Comment Analysis Agent. This workflow integrates 16 different services: stickyNote, httpRequest, markdown, code, agent..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Execute Workflow Trigger"
  - "Sticky Note"
  - "Code"
  - "Http Request"
  - "Merge"
  - "Aggregate"
  - "Set"
  - "Summarize"
  - "Split Out"
  - "Manual Trigger"
  - "Gmail"
  - "Markdown"
  - "Google Drive"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/1831_Splitout_Code_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Execute Workflow Trigger"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "When Executed by Another Workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 2
    title: "Sticky Note10"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Create YouTube API URL"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Get YouTube Video Details"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Merge YouTube Details & Transcript"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 6
    title: "Create One JSON Object"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 7
    title: "Workflow Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Execute Workflow Trigger, Sticky Note, Code, Http Request, Merge, Aggregate, Set, Summarize, Split Out, Manual Trigger, Gmail, Markdown, Google Drive natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Execute Workflow Trigger, Sticky Note, Code, Http Request, Merge, Aggregate, Set, Summarize, Split Out, Manual Trigger, Gmail, Markdown, Google Drive

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Execute Workflow Trigger, Sticky Note, Code, Http Request, Merge, Aggregate, Set, Summarize, Split Out, Manual Trigger, Gmail, Markdown, Google Drive and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
