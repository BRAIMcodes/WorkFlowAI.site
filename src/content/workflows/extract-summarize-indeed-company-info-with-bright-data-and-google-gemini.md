---
title: "Extract & Summarize Indeed Company Info With Bright Data And Google Gemini"
description: "Automated workflow: Extract & Summarize Indeed Company Info with Bright Data and Google Gemini. This workflow integrates 11 different services: stickyNote, h..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Sticky Note"
  - "Set"
  - "Http Request"
  - "Markdown"
downloadUrl: "/blueprints/imported/extract-summarize-indeed-company-info-with-bright-data-and-google-gemini.json"
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
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Set Indeed Search Query"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Perform Indeed Web Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Convert Markdown to HTML"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 7
    title: "Initiate a Webhook Notification for Markdown to HTML Response"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Initiate a Webhook Notification for Summarization"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
---

Optimize your tech stack and automate workflows between Manual Trigger, Sticky Note, Set, Http Request, Markdown natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Sticky Note, Set, Http Request, Markdown

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Sticky Note, Set, Http Request, Markdown and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
