---
title: "Toolworkflow Workflow"
description: "Automated workflow: Toolworkflow Workflow. This workflow integrates 17 different services: stickyNote, markdown, filter, httpRequest, agent. It contains 43 n..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Manual Trigger"
  - "Supabase"
  - "Merge"
  - "Markdown"
  - "Sticky Note"
  - "Html"
  - "Split Out"
  - "Remove Duplicates"
  - "Filter"
  - "Aggregate"
  - "Http Request"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/0520_Splitout_Filter_Create_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Manual Trigger"
steps:
  - stepNumber: 1
    title: "Map company name and website"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "Execute workflow"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 3
    title: "Get companies"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 4
    title: "Select company name and website"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Set social media array"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Merge all data"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 7
    title: "Insert new row"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Manual Trigger, Supabase, Merge, Markdown, Sticky Note, Html, Split Out, Remove Duplicates, Filter, Aggregate, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Manual Trigger, Supabase, Merge, Markdown, Sticky Note, Html, Split Out, Remove Duplicates, Filter, Aggregate, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Manual Trigger, Supabase, Merge, Markdown, Sticky Note, Html, Split Out, Remove Duplicates, Filter, Aggregate, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
