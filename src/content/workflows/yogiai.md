---
title: "YogiAI"
description: "Automated workflow: YogiAI. This workflow integrates 14 different services: stickyNote, httpRequest, code, scheduleTrigger, agent. It contains 44 nodes and f..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Sheets"
  - "Split Out"
  - "Schedule Trigger"
  - "Code"
  - "Http Request"
  - "Set"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/yogiai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Sheets"
  - "Split Out"
steps:
  - stepNumber: 1
    title: "YogaLog"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 2
    title: "PosesDatabase1"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 3
    title: "YogaLog2"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Trigger 2130 YogaPosesToday"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 6
    title: "Get PoseName"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Code"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 8 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Sheets, Split Out, Schedule Trigger, Code, Http Request, Set, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Sheets, Split Out, Schedule Trigger, Code, Http Request, Set, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Sheets, Split Out, Schedule Trigger, Code, Http Request, Set, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
