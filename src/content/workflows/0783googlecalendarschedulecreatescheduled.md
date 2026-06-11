---
title: "0783_GoogleCalendar_Schedule_Create_Scheduled"
description: "Integrate Schedule Trigger and Google Calendar and Split In Batches and Set and Filter and Gmail and LangChain and OpenAI and Remove Duplicates and Sticky No..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Google Calendar"
  - "Split In Batches"
  - "Set"
  - "Filter"
  - "Gmail"
  - "LangChain"
  - "OpenAI"
  - "Remove Duplicates"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0783googlecalendarschedulecreatescheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "Google Calendar"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Get Past Events"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 3
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 4
    title: "Flag to Follow Up"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Only Follow Ups"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 6
    title: "Get Emails Since"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 7
    title: "Output"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 15 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Google Calendar, Split In Batches, Set, Filter, Gmail, LangChain, OpenAI, Remove Duplicates, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Google Calendar, Split In Batches, Set, Filter, Gmail, LangChain, OpenAI, Remove Duplicates, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Google Calendar, Split In Batches, Set, Filter, Gmail, LangChain, OpenAI, Remove Duplicates, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
