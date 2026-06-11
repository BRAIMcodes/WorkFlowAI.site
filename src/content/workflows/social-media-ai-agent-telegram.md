---
title: "Social Media AI Agent - Telegram"
description: "Automated workflow: Social Media AI Agent - Telegram. This workflow integrates 15 different services: filter, markdown, httpRequest, stickyNote, airtable. It..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Code"
  - "Markdown"
  - "Filter"
  - "Airtable"
  - "Linked In"
  - "Twitter"
  - "Schedule Trigger"
  - "Merge"
  - "Sticky Note"
  - "Telegram"
  - "Wait"
downloadUrl: "/blueprints/imported/social-media-ai-agent-telegram.json"
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
  - "Code"
steps:
  - stepNumber: 1
    title: "Crawl HN Home"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Extract Meta"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "Filter Unposted Items"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Visit GH Page"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Convert HTML To Markdown"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 6
    title: "Filter Errored"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 7
    title: "Update X Status"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 17 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Code, Markdown, Filter, Airtable, Linked In, Twitter, Schedule Trigger, Merge, Sticky Note, Telegram, Wait natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Code, Markdown, Filter, Airtable, Linked In, Twitter, Schedule Trigger, Merge, Sticky Note, Telegram, Wait

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Code, Markdown, Filter, Airtable, Linked In, Twitter, Schedule Trigger, Merge, Sticky Note, Telegram, Wait and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
