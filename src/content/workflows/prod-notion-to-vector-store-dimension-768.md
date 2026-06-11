---
title: "Prod: Notion To Vector Store Dimension 768"
description: "Automated workflow: Prod: Notion to Vector Store - Dimension 768. This workflow processes data and performs automated tasks."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Notion"
  - "Filter"
  - "Summarize"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/prod-notion-to-vector-store-dimension-768.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Notion"
  - "Filter"
steps:
  - stepNumber: 1
    title: "Notion - Page Added Trigger"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 2
    title: "Notion - Retrieve Page Content"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 3
    title: "Filter Non-Text Content"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 4
    title: "Summarize - Concatenate Notion's blocks content"
    description: "Processes and automates operations via the Summarize integration."
    tool: "Summarize"
  - stepNumber: 5
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Notion, Filter, Summarize, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Notion, Filter, Summarize, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Notion, Filter, Summarize, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
