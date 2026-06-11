---
title: "Splitout Code Create Webhook"
description: "Integrate Http Request and Sticky Note and Manual Trigger and Merge and Code and Split Out and Schedule Trigger and OpenAI and Noco Db and Slack and Html and..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Sticky Note"
  - "Manual Trigger"
  - "Merge"
  - "Code"
  - "Split Out"
  - "Schedule Trigger"
  - "OpenAI"
  - "Noco Db"
  - "Slack"
  - "Html"
  - "Airtable"
  - "Google Sheets"
  - "Set"
downloadUrl: "/blueprints/imported/0613splitoutcodecreatewebhook.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Http Request"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Get advice articles from a Google search"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 4
    title: "Merge data and keep unique google search results"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 5
    title: "Extract Article links for LinkedIn advice articles"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Split Out all links for LinkedIn advice articles"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 7
    title: "Schedule Trigger Every Monday, @ 08:00am"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Sticky Note, Manual Trigger, Merge, Code, Split Out, Schedule Trigger, OpenAI, Noco Db, Slack, Html, Airtable, Google Sheets, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Sticky Note, Manual Trigger, Merge, Code, Split Out, Schedule Trigger, OpenAI, Noco Db, Slack, Html, Airtable, Google Sheets, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Sticky Note, Manual Trigger, Merge, Code, Split Out, Schedule Trigger, OpenAI, Noco Db, Slack, Html, Airtable, Google Sheets, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
