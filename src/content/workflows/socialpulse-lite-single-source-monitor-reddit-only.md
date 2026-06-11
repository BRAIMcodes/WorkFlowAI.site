---
title: "Social Pulse Lite — Single Source Monitor (reddit Only)"
description: "Integrate Schedule Trigger and Http Request and Code and OpenAI and Google Sheets and Sticky Note automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Http Request"
  - "Code"
  - "OpenAI"
  - "Google Sheets"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/socialpulse-lite-single-source-monitor-reddit-only.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Schedule Trigger"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Run Daily (9 AM)"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Reddit: Fetch Posts"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Parse & Rank Posts"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "AI: Quick Analysis"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Merge Results"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Log to Sheets"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Http Request, Code, OpenAI, Google Sheets, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Http Request, Code, OpenAI, Google Sheets, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Http Request, Code, OpenAI, Google Sheets, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
