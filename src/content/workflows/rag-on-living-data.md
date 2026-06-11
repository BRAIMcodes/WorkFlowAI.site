---
title: "RAG on living data"
description: "Automated workflow: RAG on living data. This workflow integrates 18 different services: notionTrigger, stickyNote, textSplitterTokenSplitter, vectorStoreSupa..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split In Batches"
  - "Schedule Trigger"
  - "Sticky Note"
  - "Limit"
  - "Supabase"
  - "Notion"
  - "Summarize"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Limit/1527_Limit_Schedule_Automation_Scheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Split In Batches"
  - "Schedule Trigger"
steps:
  - stepNumber: 1
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 2
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Limit"
    description: "Processes and automates operations via the Limit integration."
    tool: "Limit"
  - stepNumber: 5
    title: "Limit1"
    description: "Processes and automates operations via the Limit integration."
    tool: "Limit"
  - stepNumber: 6
    title: "Delete old embeddings if exist"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 7
    title: "Get page blocks"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 18 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split In Batches, Schedule Trigger, Sticky Note, Limit, Supabase, Notion, Summarize, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split In Batches, Schedule Trigger, Sticky Note, Limit, Supabase, Notion, Summarize, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split In Batches, Schedule Trigger, Sticky Note, Limit, Supabase, Notion, Summarize, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
