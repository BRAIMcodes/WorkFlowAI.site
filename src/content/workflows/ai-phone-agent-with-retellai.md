---
title: "AI Phone Agent with RetellAI"
description: "Automated workflow: AI Phone Agent with RetellAI. This workflow integrates 20 different services: stickyNote, vectorStoreQdrant, lmChatOpenAi, chainLlm, docu..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Filter"
  - "Webhook"
  - "Respond To Webhook"
  - "Telegram"
  - "Google Calendar"
  - "Sticky Note"
  - "Manual Trigger"
  - "Http Request"
  - "Google Drive"
  - "Set"
downloadUrl: "/blueprints/imported/ai-phone-agent-with-retellai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Filter"
  - "Webhook"
steps:
  - stepNumber: 1
    title: "Filter"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 2
    title: "n8n_rag_function"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 3
    title: "Respond to Webhook"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
  - stepNumber: 4
    title: "Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 5
    title: "Google Calendar"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 6
    title: "n8n_call"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 13 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Filter, Webhook, Respond To Webhook, Telegram, Google Calendar, Sticky Note, Manual Trigger, Http Request, Google Drive, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Filter, Webhook, Respond To Webhook, Telegram, Google Calendar, Sticky Note, Manual Trigger, Http Request, Google Drive, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Filter, Webhook, Respond To Webhook, Telegram, Google Calendar, Sticky Note, Manual Trigger, Http Request, Google Drive, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
