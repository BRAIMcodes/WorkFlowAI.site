---
title: "Speech Support Workflow"
description: "Automated workflow: Speech Support Workflow. This workflow integrates 13 different services: telegramTrigger, stickyNote, telegram, code, lmChatGoogleGemini...."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Set"
  - "If"
  - "Code"
  - "Switch"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/1452_Telegram_Stickynote_Automate_Triggered.json"
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
  - "Set"
steps:
  - stepNumber: 1
    title: "Recieve Telegram Message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Check For Text or Voice Message"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Download Audio File"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 4
    title: "If Voice Message"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Code to remove unwanted characters from LLM response"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Code to split output into chunks under 4000 characters"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "Respond to Telegram Message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 11 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Set, If, Code, Switch, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Set, If, Code, Switch, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Set, If, Code, Switch, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
