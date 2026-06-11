---
title: "piepdrive-test"
description: "Automated workflow: piepdrive-test. This workflow integrates 9 different services: pipedrive, stickyNote, httpRequest, markdown, code. It contains 12 nodes a..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "Sticky Note"
  - "Code"
  - "Http Request"
  - "Markdown"
  - "Slack"
downloadUrl: "/blueprints/imported/piepdrive-test.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Drive"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Pipedrive Trigger - An Organization is created"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Pipedrive - Create a Note with OpenAI output"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Code - Markdown to Slack Markdown"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Scrapingbee - Get Organization's URL content"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "HTML To Markdown"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 7
    title: "Slack - Notify "
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
---

Optimize your tech stack and automate workflows between Google Drive, Sticky Note, Code, Http Request, Markdown, Slack natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, Sticky Note, Code, Http Request, Markdown, Slack

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, Sticky Note, Code, Http Request, Markdown, Slack and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
