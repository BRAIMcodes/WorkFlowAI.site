---
title: "Supabase Setup Postgres"
description: "Automated workflow: Supabase Setup Postgres. This workflow processes data and performs automated tasks."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Set"
  - "Supabase"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/supabase-setup-postgres.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Manual Trigger"
  - "Set"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Set sample Input Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Update additonal Values e.g. Name, Address ..."
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 4
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Manual Trigger, Set, Supabase, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Set, Supabase, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Set, Supabase, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
