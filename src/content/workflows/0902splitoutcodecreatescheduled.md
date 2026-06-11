---
title: "Splitout Code Create Scheduled"
description: "Integrate Google Sheets and Http Request and Code and Split In Batches and OpenAI and Slack and Filter and If and Sticky Note and Split Out and Schedule Trig..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Sheets"
  - "Http Request"
  - "Code"
  - "Split In Batches"
  - "OpenAI"
  - "Slack"
  - "Filter"
  - "If"
  - "Sticky Note"
  - "Split Out"
  - "Schedule Trigger"
  - "Merge"
downloadUrl: "/blueprints/imported/0902splitoutcodecreatescheduled.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Google Sheets"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Google Sheets Trigger"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 2
    title: "Apollo Organization Enrichment"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Create Apollo People Search URL"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Loop Over Items (1000 per Batch)"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 5
    title: "Apollo Find Decision Makers"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Add Contacts"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Apollo Enrich Decision Makers"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 28 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Sheets, Http Request, Code, Split In Batches, OpenAI, Slack, Filter, If, Sticky Note, Split Out, Schedule Trigger, Merge natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Sheets, Http Request, Code, Split In Batches, OpenAI, Slack, Filter, If, Sticky Note, Split Out, Schedule Trigger, Merge

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Sheets, Http Request, Code, Split In Batches, OpenAI, Slack, Filter, If, Sticky Note, Split Out, Schedule Trigger, Merge and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
