---
title: "Build a Chatbot, Voice Agent and Phone Agent with Voiceflow, Google Calendar and RAG"
description: "Automated workflow: Build a Chatbot, Voice Agent and Phone Agent with Voiceflow, Google Calendar and RAG. This workflow integrates 18 different services: web..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Google Calendar"
  - "Set"
  - "Respond To Webhook"
  - "Http Request"
  - "Sticky Note"
  - "Manual Trigger"
  - "Google Drive"
downloadUrl: "/blueprints/imported/build-a-chatbot-voice-agent-and-phone-agent-with-voiceflow-google-calendar-and-rag.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Webhook"
  - "Google Calendar"
steps:
  - stepNumber: 1
    title: "n8n_order"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Google Calendar"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 3
    title: "n8n_appointment"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 4
    title: "n8n_rag"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 5
    title: "Tracking response"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Calendar response"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Webhook tracking response"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Webhook, Google Calendar, Set, Respond To Webhook, Http Request, Sticky Note, Manual Trigger, Google Drive natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Google Calendar, Set, Respond To Webhook, Http Request, Sticky Note, Manual Trigger, Google Drive

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Google Calendar, Set, Respond To Webhook, Http Request, Sticky Note, Manual Trigger, Google Drive and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
