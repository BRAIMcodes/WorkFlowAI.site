---
title: "Webhook Workflow"
description: "Automated workflow: Webhook Workflow. This workflow integrates 18 different services: webhook, stickyNote, httpRequest, filter, markdown. It contains 42 node..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Sticky Note"
  - "Set"
  - "Google Calendar"
  - "Execute Workflow Trigger"
  - "Http Request"
  - "Split Out"
  - "Filter"
  - "HubSpot"
  - "If"
  - "Gmail"
  - "Markdown"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Hubspot/0920_HubSpot_Splitout_Create_Webhook.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Webhook"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Try Again"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Success"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Create Event with Attendee"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 6
    title: "Create Event"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 7
    title: "Get Events"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 18 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Webhook, Sticky Note, Set, Google Calendar, Execute Workflow Trigger, Http Request, Split Out, Filter, HubSpot, If, Gmail, Markdown natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Sticky Note, Set, Google Calendar, Execute Workflow Trigger, Http Request, Split Out, Filter, HubSpot, If, Gmail, Markdown

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Sticky Note, Set, Google Calendar, Execute Workflow Trigger, Http Request, Split Out, Filter, HubSpot, If, Gmail, Markdown and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
