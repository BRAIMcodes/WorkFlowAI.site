---
title: "1315_Telegram_Gmailtool_Automation_Triggered"
description: "Integrate Google Calendar and LangChain and Gmail and OpenAI and Telegram and If and Set and Sticky Note and Baserow Tool automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Calendar"
  - "LangChain"
  - "Gmail"
  - "OpenAI"
  - "Telegram"
  - "If"
  - "Set"
  - "Sticky Note"
  - "Baserow Tool"
downloadUrl: "/blueprints/imported/1315telegramgmailtoolautomationtriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Calendar"
  - "LangChain"
steps:
  - stepNumber: 1
    title: "Google Calendar"
    description: "Processes and automates operations via the Google Calendar integration."
    tool: "Google Calendar"
  - stepNumber: 2
    title: "Window Buffer Memory"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 3
    title: "Get Email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Listen for incoming events"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 6
    title: "Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 7
    title: "If"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 8 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Calendar, LangChain, Gmail, OpenAI, Telegram, If, Set, Sticky Note, Baserow Tool natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Calendar, LangChain, Gmail, OpenAI, Telegram, If, Set, Sticky Note, Baserow Tool

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Calendar, LangChain, Gmail, OpenAI, Telegram, If, Set, Sticky Note, Baserow Tool and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
