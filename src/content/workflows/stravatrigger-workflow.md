---
title: "Stravatrigger Workflow"
description: "Automated workflow: Stravatrigger Workflow. This workflow integrates 9 different services: stickyNote, code, lmChatGoogleGemini, agent, stravaTrigger. It con..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Strava Trigger"
  - "Gmail"
  - "Code"
  - "Email Send"
  - "Sticky Note"
  - "WhatsApp"
downloadUrl: "/blueprints/imported/stravatrigger-workflow.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Strava Trigger"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Strava Trigger"
    description: "Processes and automates operations via the Strava Trigger integration."
    tool: "Strava Trigger"
  - stepNumber: 2
    title: "Gmail"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Combine Everything"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Structure Output"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Conver to HTML"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Send Email"
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 7
    title: "Code"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 6 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Strava Trigger, Gmail, Code, Email Send, Sticky Note, WhatsApp natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Strava Trigger, Gmail, Code, Email Send, Sticky Note, WhatsApp

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Strava Trigger, Gmail, Code, Email Send, Sticky Note, WhatsApp and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
