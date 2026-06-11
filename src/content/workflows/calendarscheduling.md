---
title: "Calendar Scheduling"
description: "Automated workflow: Calendar_scheduling. This workflow integrates 15 different services: stickyNote, itemLists, filter, gmailTrigger, agent. It contains 24 n..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Sticky Note"
  - "Google Calendar"
  - "Execute Workflow Trigger"
  - "Item Lists"
  - "Set"
  - "Filter"
  - "If"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/calendarscheduling.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Gmail"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Gmail Trigger"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Google Calendar"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 5
    title: "Execute Workflow Trigger"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 6
    title: "Format response"
    description: "Processes and automates operations via the Item Lists integration."
    tool: "Item Lists"
  - stepNumber: 7
    title: "Stringify Response"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Sticky Note, Google Calendar, Execute Workflow Trigger, Item Lists, Set, Filter, If, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Sticky Note, Google Calendar, Execute Workflow Trigger, Item Lists, Set, Filter, If, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Sticky Note, Google Calendar, Execute Workflow Trigger, Item Lists, Set, Filter, If, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
