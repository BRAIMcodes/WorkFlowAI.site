---
title: "Hub Spot Splitout Create Webhook"
description: "Integrate Webhook and Sticky Note and Set and LangChain and Google Calendar and Execute Workflow Trigger and OpenAI and Http Request and Split Out and Filter..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Sticky Note"
  - "Set"
  - "LangChain"
  - "Google Calendar"
  - "Execute Workflow Trigger"
  - "OpenAI"
  - "Http Request"
  - "Split Out"
  - "Filter"
  - "HubSpot"
  - "If"
  - "Gmail"
  - "Markdown"
downloadUrl: "/blueprints/imported/0920hubspotsplitoutcreatewebhook.json"
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
    title: "Calendar Agent"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Create Event with Attendee"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 7
    title: "Create Event"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 24 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Webhook, Sticky Note, Set, LangChain, Google Calendar, Execute Workflow Trigger, OpenAI, Http Request, Split Out, Filter, HubSpot, If, Gmail, Markdown natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Sticky Note, Set, LangChain, Google Calendar, Execute Workflow Trigger, OpenAI, Http Request, Split Out, Filter, HubSpot, If, Gmail, Markdown

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Sticky Note, Set, LangChain, Google Calendar, Execute Workflow Trigger, OpenAI, Http Request, Split Out, Filter, HubSpot, If, Gmail, Markdown and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
