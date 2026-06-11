---
title: "Httprequest Workflow"
description: "Automated workflow: Httprequest Workflow. This workflow integrates 19 different services: stickyNote, textSplitterRecursiveCharacterTextSplitter, merge, swit..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Extract From File"
  - "Supabase"
  - "If"
  - "Split In Batches"
  - "Manual Trigger"
  - "Aggregate"
  - "Switch"
  - "Merge"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/httprequest-workflow.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Extract From File"
steps:
  - stepNumber: 1
    title: "Get All files"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Extract Document PDF"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 3
    title: "Create File record2"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 4
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Get All Files"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 6
    title: "Download"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 15 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Extract From File, Supabase, If, Split In Batches, Manual Trigger, Aggregate, Switch, Merge, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Extract From File, Supabase, If, Split In Batches, Manual Trigger, Aggregate, Switch, Merge, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Extract From File, Supabase, If, Split In Batches, Manual Trigger, Aggregate, Switch, Merge, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
