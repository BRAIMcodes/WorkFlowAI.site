---
title: "My workflow"
description: "Automated workflow: My workflow. This workflow integrates 15 different services: convertToFile, stickyNote, httpRequest, code, scheduleTrigger. It contains 3..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Code"
  - "Reddit"
  - "If"
  - "Set"
  - "Split In Batches"
  - "Http Request"
  - "Convert To File"
  - "Compression"
  - "Google Drive"
  - "Aggregate"
  - "Schedule Trigger"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/my-workflow.json"
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
  - "Reddit"
steps:
  - stepNumber: 1
    title: "Split Topics into Items"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 2
    title: "Search Posts"
    description: "Processes and automates operations via the Reddit integration."
    tool: "Reddit"
  - stepNumber: 3
    title: "Upvotes Requirement Filtering"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "Set Reddit Posts"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Remove Duplicates"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 7
    title: "Get Comments"
    description: "Processes and automates operations via the Reddit integration."
    tool: "Reddit"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Code, Reddit, If, Set, Split In Batches, Http Request, Convert To File, Compression, Google Drive, Aggregate, Schedule Trigger, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Code, Reddit, If, Set, Split In Batches, Http Request, Convert To File, Compression, Google Drive, Aggregate, Schedule Trigger, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Code, Reddit, If, Set, Split In Batches, Http Request, Convert To File, Compression, Google Drive, Aggregate, Schedule Trigger, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
