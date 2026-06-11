---
title: "1841_Telegram_Manual_Automate_Triggered"
description: "Integrate Gmail and Manual Trigger and Gemini and LangChain and If and Telegram and Set and Aggregate automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Manual Trigger"
  - "Gemini"
  - "LangChain"
  - "If"
  - "Telegram"
  - "Set"
  - "Aggregate"
downloadUrl: "/blueprints/imported/1841telegrammanualautomatetriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gmail"
  - "Manual Trigger"
steps:
  - stepNumber: 1
    title: "Gmail Get Email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 3
    title: "Google Gemini Chat Model"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 4
    title: "GmailDeleteEmail"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 5
    title: "AI Check Email"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Unwanted Email Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "If Unwanted Marketing or Spam"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Manual Trigger, Gemini, LangChain, If, Telegram, Set, Aggregate natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Manual Trigger, Gemini, LangChain, If, Telegram, Set, Aggregate

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Manual Trigger, Gemini, LangChain, If, Telegram, Set, Aggregate and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
