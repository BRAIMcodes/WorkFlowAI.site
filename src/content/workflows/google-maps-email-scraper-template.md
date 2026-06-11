---
title: "Google Maps Email Scraper Template"
description: "Automated workflow: Google Maps Email Scraper Template. This workflow integrates 14 different services: filter, httpRequest, stickyNote, wait, code. It conta..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Remove Duplicates"
  - "Split In Batches"
  - "Http Request"
  - "Code"
  - "Filter"
  - "Aggregate"
  - "Split Out"
  - "Google Sheets"
  - "Execute Workflow Trigger"
  - "Manual Trigger"
  - "Wait"
  - "Execute Workflow"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/google-maps-email-scraper-template.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Remove Duplicates"
  - "Split In Batches"
steps:
  - stepNumber: 1
    title: "Remove Duplicate URLs"
    description: "Processes and automates operations via the Remove Duplicates integration."
    tool: "Remove Duplicates"
  - stepNumber: 2
    title: "Loop over queries"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 3
    title: "Search Google Maps with query"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Scrape URLs from results"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Filter irrelevant URLs"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 6
    title: "Request web page for URL"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Loop over URLs"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 19 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Remove Duplicates, Split In Batches, Http Request, Code, Filter, Aggregate, Split Out, Google Sheets, Execute Workflow Trigger, Manual Trigger, Wait, Execute Workflow, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Remove Duplicates, Split In Batches, Http Request, Code, Filter, Aggregate, Split Out, Google Sheets, Execute Workflow Trigger, Manual Trigger, Wait, Execute Workflow, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Remove Duplicates, Split In Batches, Http Request, Code, Filter, Aggregate, Split Out, Google Sheets, Execute Workflow Trigger, Manual Trigger, Wait, Execute Workflow, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
