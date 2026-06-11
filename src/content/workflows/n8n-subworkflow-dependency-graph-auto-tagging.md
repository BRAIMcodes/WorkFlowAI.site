---
title: "n8n Subworkflow Dependency Graph & Auto-Tagging"
description: "Automated workflow: n8n Subworkflow Dependency Graph & Auto-Tagging. This workflow integrates 17 different services: webhook, filter, httpRequest, stickyNote..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "N8n"
  - "Code"
  - "Filter"
  - "Schedule Trigger"
  - "N8n Trigger"
  - "Set"
  - "Split In Batches"
  - "If"
  - "Split Out"
  - "Merge"
  - "Aggregate"
  - "Quick Chart"
  - "Sticky Note"
  - "Webhook"
  - "Respond To Webhook"
downloadUrl: "/blueprints/imported/n8n-subworkflow-dependency-graph-auto-tagging.json"
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
  - "N8n"
steps:
  - stepNumber: 1
    title: "Update workflow tags"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "GET all workflows"
    description: "Processes and automates operations via the N8n integration."
    tool: "N8n"
  - stepNumber: 3
    title: "List callers of subworkflows"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Exclude uncalled workflows"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 5
    title: "Exclude missing workflows"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 6
    title: "And every Sunday"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 7
    title: "When this workflow is activated"
    description: "Processes and automates operations via the N8n Trigger integration."
    tool: "N8n Trigger"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 33 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, N8n, Code, Filter, Schedule Trigger, N8n Trigger, Set, Split In Batches, If, Split Out, Merge, Aggregate, Quick Chart, Sticky Note, Webhook, Respond To Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, N8n, Code, Filter, Schedule Trigger, N8n Trigger, Set, Split In Batches, If, Split Out, Merge, Aggregate, Quick Chart, Sticky Note, Webhook, Respond To Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, N8n, Code, Filter, Schedule Trigger, N8n Trigger, Set, Split In Batches, If, Split Out, Merge, Aggregate, Quick Chart, Sticky Note, Webhook, Respond To Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
