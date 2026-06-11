---
title: "0899_Splitout_GoogleCalendar_Update_Webhook"
description: "Integrate Http Request and Google Calendar and Filter and Split Out and Split In Batches and If and Aggregate and Set and Sticky Note and Markdown and Gmail..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Google Calendar"
  - "Filter"
  - "Split Out"
  - "Split In Batches"
  - "If"
  - "Aggregate"
  - "Set"
  - "Sticky Note"
  - "Markdown"
  - "Gmail"
downloadUrl: "/blueprints/imported/0899splitoutgooglecalendarupdatewebhook.json"
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
  - "Google Calendar"
steps:
  - stepNumber: 1
    title: "Research Company"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Research Person"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Google Calendar Trigger"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 4
    title: "Filter Out Myself"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 5
    title: "Split Out Attendees"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 6
    title: "For Each Attendee"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 7
    title: "Is Company Email?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 11 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Google Calendar, Filter, Split Out, Split In Batches, If, Aggregate, Set, Sticky Note, Markdown, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Google Calendar, Filter, Split Out, Split In Batches, If, Aggregate, Set, Sticky Note, Markdown, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Google Calendar, Filter, Split Out, Split In Batches, If, Aggregate, Set, Sticky Note, Markdown, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
