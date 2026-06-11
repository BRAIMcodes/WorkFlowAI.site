---
title: "Enrich Company Data from Google Sheet with OpenAI Agent and Scraper Tool"
description: "Automated workflow: Enrich Company Data from Google Sheet with OpenAI Agent and Scraper Tool. This workflow integrates 13 different services: webhook, sticky..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Sheets"
  - "Http Request"
  - "Execute Workflow Trigger"
  - "Split In Batches"
  - "Sticky Note"
  - "Set"
  - "Markdown"
  - "Webhook"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Webhook/1694_Webhook_HTTP_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Sheets"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Get rows from Google Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 2
    title: "Update Company's Row on Google Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 3
    title: "ScrapingBee : Scrape company's homepage data "
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Tool called from Agent"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 5
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Set company url"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Sheets, Http Request, Execute Workflow Trigger, Split In Batches, Sticky Note, Set, Markdown, Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Sheets, Http Request, Execute Workflow Trigger, Split In Batches, Sticky Note, Set, Markdown, Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Sheets, Http Request, Execute Workflow Trigger, Split In Batches, Sticky Note, Set, Markdown, Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
