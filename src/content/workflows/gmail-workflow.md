---
title: "Gmail Workflow"
description: "Automated workflow: Gmail Workflow. This workflow integrates 19 different services: stickyNote, scheduleTrigger, merge, switch, lmChatOpenAi. It contains 68..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Set"
  - "Google Calendar"
  - "Execute Workflow Trigger"
  - "WhatsApp"
  - "Sticky Note"
  - "Schedule Trigger"
  - "Switch"
  - "If"
  - "Split Out"
  - "Execute Workflow"
  - "Merge"
  - "Aggregate"
  - "Html"
  - "Http Request"
downloadUrl: "/blueprints/imported/gmail-workflow.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gmail"
  - "Set"
steps:
  - stepNumber: 1
    title: "Get Message Contents"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Simplify Emails"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Check For Upcoming Meetings"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 4
    title: "Execute Workflow Trigger"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 5
    title: "Get Last Correspondence"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 6
    title: "WhatsApp Business Cloud"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 46 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Set, Google Calendar, Execute Workflow Trigger, WhatsApp, Sticky Note, Schedule Trigger, Switch, If, Split Out, Execute Workflow, Merge, Aggregate, Html, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Set, Google Calendar, Execute Workflow Trigger, WhatsApp, Sticky Note, Schedule Trigger, Switch, If, Split Out, Execute Workflow, Merge, Aggregate, Html, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Set, Google Calendar, Execute Workflow Trigger, WhatsApp, Sticky Note, Schedule Trigger, Switch, If, Split Out, Execute Workflow, Merge, Aggregate, Html, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
