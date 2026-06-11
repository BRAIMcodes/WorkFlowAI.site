---
title: "0782_Telegram_Redis_Create_Webhook"
description: "Integrate Telegram and If and Redis and Google Sheets and Set and Switch and LangChain and Http Request and OpenAI and Execution Data and Sticky Note automat..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "If"
  - "Redis"
  - "Google Sheets"
  - "Set"
  - "Switch"
  - "LangChain"
  - "Http Request"
  - "OpenAI"
  - "Execution Data"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0782telegramrediscreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Telegram"
  - "If"
steps:
  - stepNumber: 1
    title: "Telegram Trigger"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Send Next Question"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 3
    title: "Send Response"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 4
    title: "Has No Record?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Is Survey Continue?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 6
    title: "Get State2"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 7
    title: "Get Columns1"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 33 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, If, Redis, Google Sheets, Set, Switch, LangChain, Http Request, OpenAI, Execution Data, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, If, Redis, Google Sheets, Set, Switch, LangChain, Http Request, OpenAI, Execution Data, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, If, Redis, Google Sheets, Set, Switch, LangChain, Http Request, OpenAI, Execution Data, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
