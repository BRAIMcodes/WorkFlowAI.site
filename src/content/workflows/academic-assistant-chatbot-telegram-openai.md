---
title: "Academic Assistant Chatbot (telegram + Open Ai)"
description: "Automated workflow: Academic Assistant Chatbot (Telegram + OpenAI). This workflow processes data and performs automated tasks."
timeSaved: "3 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/academic-assistant-chatbot-telegram-openai.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Beginner"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Telegram"
  - "Stop And Error"
steps:
  - stepNumber: 1
    title: "Telegram Trigger"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Send Telegram Response"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 3
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Telegram, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
