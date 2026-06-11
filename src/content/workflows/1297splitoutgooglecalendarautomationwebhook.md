---
title: "Splitout Google Calendar Automation Webhook"
description: "Integrate OpenAI and Http Request and Google Drive and Manual Trigger and Extract From File and Google Calendar and LangChain and Execute Workflow Trigger an..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "Http Request"
  - "Google Drive"
  - "Manual Trigger"
  - "Extract From File"
  - "Google Calendar"
  - "LangChain"
  - "Execute Workflow Trigger"
  - "Set"
  - "Switch"
  - "Split Out"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/1297splitoutgooglecalendarautomationwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "OpenAI"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "OpenAI Chat Model1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "Get Meeting ConferenceRecords"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Get Meeting Transcript Location"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Get Transcript File"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 5
    title: "When clicking \"Test workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 6
    title: "PDF Loader"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 7
    title: "Get Calendar Event"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 21 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between OpenAI, Http Request, Google Drive, Manual Trigger, Extract From File, Google Calendar, LangChain, Execute Workflow Trigger, Set, Switch, Split Out, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, Http Request, Google Drive, Manual Trigger, Extract From File, Google Calendar, LangChain, Execute Workflow Trigger, Set, Switch, Split Out, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, Http Request, Google Drive, Manual Trigger, Extract From File, Google Calendar, LangChain, Execute Workflow Trigger, Set, Switch, Split Out, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
