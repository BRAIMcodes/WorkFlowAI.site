---
title: "RAG & GenAI App With WordPress Content"
description: "Automated workflow: RAG & GenAI App With WordPress Content. This workflow integrates 24 different services: stickyNote, scheduleTrigger, merge, switch, lmCha..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Respond To Webhook"
  - "Set"
  - "Markdown"
  - "PostgreSQL"
  - "Aggregate"
  - "Sticky Note"
  - "Wordpress"
  - "Filter"
  - "Supabase"
  - "Schedule Trigger"
  - "Http Request"
  - "Split In Batches"
  - "Merge"
  - "Switch"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Postgres/1752_Postgres_Wordpress_Automation_Webhook.json"
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
  - "Respond To Webhook"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Respond to Webhook"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
  - stepNumber: 3
    title: "Set fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Markdown1"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 5
    title: "Postgres"
    description: "Processes and automates operations via the PostgreSQL integration."
    tool: "PostgreSQL"
  - stepNumber: 6
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 7
    title: "Aggregate1"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 32 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Respond To Webhook, Set, Markdown, PostgreSQL, Aggregate, Sticky Note, Wordpress, Filter, Supabase, Schedule Trigger, Http Request, Split In Batches, Merge, Switch natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Respond To Webhook, Set, Markdown, PostgreSQL, Aggregate, Sticky Note, Wordpress, Filter, Supabase, Schedule Trigger, Http Request, Split In Batches, Merge, Switch

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Respond To Webhook, Set, Markdown, PostgreSQL, Aggregate, Sticky Note, Wordpress, Filter, Supabase, Schedule Trigger, Http Request, Split In Batches, Merge, Switch and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
