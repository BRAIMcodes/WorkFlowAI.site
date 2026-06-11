---
title: "AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs"
description: "Automated workflow: AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs. This workflow integrates 12 different services: webhook,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Aggregate"
  - "Respond To Webhook"
  - "Http Request"
  - "Limit"
  - "Webhook"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Limit/1262_Limit_Webhook_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Sticky Note"
  - "Aggregate"
steps:
  - stepNumber: 1
    title: "Sticky Note5"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 4
    title: "Respond to Webhook"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
  - stepNumber: 5
    title: "ElevenLabs - Generate Audio"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Aggregate, Respond To Webhook, Http Request, Limit, Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Aggregate, Respond To Webhook, Http Request, Limit, Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Aggregate, Respond To Webhook, Http Request, Limit, Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
