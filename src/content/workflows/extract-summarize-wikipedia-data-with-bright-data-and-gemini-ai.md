---
title: "Extract & Summarize Wikipedia Data With Bright Data And Gemini AI"
description: "Automated workflow: Extract & Summarize Wikipedia Data with Bright Data and Gemini AI. This workflow integrates 8 different services: stickyNote, httpRequest..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Sticky Note"
  - "Set"
downloadUrl: "/blueprints/imported/extract-summarize-wikipedia-data-with-bright-data-and-gemini-ai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Summary Webhook Notifier"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Wikipedia Web Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Set Wikipedia URL with Bright Data Zone"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Sticky Note3"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Sticky Note, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Sticky Note, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Sticky Note, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
