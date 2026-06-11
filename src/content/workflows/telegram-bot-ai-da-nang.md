---
title: "Telegram Bot AI Da Nang"
description: "Integrate Telegram and Set and Google Sheets and Code and LangChain and Switch and Sticky Note automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Set"
  - "Google Sheets"
  - "Code"
  - "LangChain"
  - "Switch"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/telegram-bot-ai-da-nang.json"
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
  - "Set"
steps:
  - stepNumber: 1
    title: "SendTyping"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "SetResponse"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Settings"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Schedule"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 5
    title: "ScheduleToMarkdown"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "ScheduleBot"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "n8nChatSettings"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 15 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Set, Google Sheets, Code, LangChain, Switch, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Set, Google Sheets, Code, LangChain, Switch, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Set, Google Sheets, Code, LangChain, Switch, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
