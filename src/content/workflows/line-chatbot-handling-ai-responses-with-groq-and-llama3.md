---
title: "Line Chatbot Handling AI Responses With Groq And Llama3"
description: "Automated workflow: Line Chatbot Handling AI Responses with Groq and Llama3. This workflow integrates 5 different services: webhook, stickyNote, httpRequest,..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Webhook"
  - "Set"
  - "Http Request"
downloadUrl: "/blueprints/imported/line-chatbot-handling-ai-responses-with-groq-and-llama3.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Sticky Note"
  - "Webhook"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Line: Messaging API"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 3
    title: "Get Messages"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Groq AI Assistant"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Line: Reply Message"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Webhook, Set, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Webhook, Set, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Webhook, Set, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
