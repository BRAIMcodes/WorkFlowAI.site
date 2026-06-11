---
title: "Compose reply draft in Gmail with OpenAI Assistant"
description: "Integrate Code and Http Request and Gmail and Schedule Trigger and Set and Markdown and Sticky Note and OpenAI and Split In Batches and Limit automatically u..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Code"
  - "Http Request"
  - "Gmail"
  - "Schedule Trigger"
  - "Set"
  - "Markdown"
  - "Sticky Note"
  - "OpenAI"
  - "Split In Batches"
  - "Limit"
downloadUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Compose reply draft in Gmail with OpenAI Assistant.json"
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
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Convert raw to base64"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 2
    title: "Add email draft to thread"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Remove AI label from email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Schedule trigger (1 min)"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 5
    title: "Map fields for further processing"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Convert response to HTML"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 7
    title: "Build email raw"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Code, Http Request, Gmail, Schedule Trigger, Set, Markdown, Sticky Note, OpenAI, Split In Batches, Limit natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Code, Http Request, Gmail, Schedule Trigger, Set, Markdown, Sticky Note, OpenAI, Split In Batches, Limit

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Code, Http Request, Gmail, Schedule Trigger, Set, Markdown, Sticky Note, OpenAI, Split In Batches, Limit and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
