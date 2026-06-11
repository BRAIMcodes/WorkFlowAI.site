---
title: "Telegram Chat Bot With Multiple Sessions"
description: "Automated workflow: Telegram ChatBot with multiple sessions. This workflow integrates 14 different services: telegramTrigger, stickyNote, telegram, code, age..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Switch"
  - "Google Sheets"
  - "Sticky Note"
  - "Set"
  - "If"
  - "Code"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/telegram-chatbot-with-multiple-sessions.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Telegram"
  - "Switch"
steps:
  - stepNumber: 1
    title: "Get message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Command or text?"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 3
    title: "Get session"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Disable previous session"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 5
    title: "Set new session"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Session activated"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 7
    title: "Send response"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 25 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Switch, Google Sheets, Sticky Note, Set, If, Code, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Switch, Google Sheets, Sticky Note, Set, If, Code, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Switch, Google Sheets, Sticky Note, Set, If, Code, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
