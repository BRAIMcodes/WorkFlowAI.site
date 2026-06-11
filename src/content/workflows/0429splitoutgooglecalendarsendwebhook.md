---
title: "Splitout Google Calendar Send Webhook"
description: "Integrate Set and Schedule Trigger and Google Calendar and Split Out and Http Request and Clearbit and Gmail and Merge and Html and Sticky Note and Filter an..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Schedule Trigger"
  - "Google Calendar"
  - "Split Out"
  - "Http Request"
  - "Clearbit"
  - "Gmail"
  - "Merge"
  - "Html"
  - "Sticky Note"
  - "Filter"
  - "OpenAI"
  - "Switch"
downloadUrl: "/blueprints/imported/0429splitoutgooglecalendarsendwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Schedule Trigger"
steps:
  - stepNumber: 1
    title: "Setup"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "Every morning @ 7"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 3
    title: "Get meetings for today"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 4
    title: "Get attendees email domains"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 6
    title: "Get recent LinkedIn posts"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Enrich attendee company"
    description: "Processes and automates operations via the Clearbit integration."
    tool: "Clearbit"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Schedule Trigger, Google Calendar, Split Out, Http Request, Clearbit, Gmail, Merge, Html, Sticky Note, Filter, OpenAI, Switch natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Schedule Trigger, Google Calendar, Split Out, Http Request, Clearbit, Gmail, Merge, Html, Sticky Note, Filter, OpenAI, Switch

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Schedule Trigger, Google Calendar, Split Out, Http Request, Clearbit, Gmail, Merge, Html, Sticky Note, Filter, OpenAI, Switch and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
