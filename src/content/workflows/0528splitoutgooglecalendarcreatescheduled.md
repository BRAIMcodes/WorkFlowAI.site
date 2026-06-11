---
title: "Splitout Google Calendar Create Scheduled"
description: "Integrate Split Out and Slack and Code and If and Google Calendar and Set and Filter and LangChain and OpenAI and Schedule Trigger and Sticky Note automatica..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "Slack"
  - "Code"
  - "If"
  - "Google Calendar"
  - "Set"
  - "Filter"
  - "LangChain"
  - "OpenAI"
  - "Schedule Trigger"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0528splitoutgooglecalendarcreatescheduled.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Split Out"
  - "Slack"
steps:
  - stepNumber: 1
    title: "For Each User ID..."
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "Get User"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 3
    title: "Search for Invite Requests"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 4
    title: "Get Existing Invite EventID"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Should Create Event?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 6
    title: "Create Event"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 7
    title: "Get Invite Reactions"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, Slack, Code, If, Google Calendar, Set, Filter, LangChain, OpenAI, Schedule Trigger, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, Slack, Code, If, Google Calendar, Set, Filter, LangChain, OpenAI, Schedule Trigger, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, Slack, Code, If, Google Calendar, Set, Filter, LangChain, OpenAI, Schedule Trigger, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
