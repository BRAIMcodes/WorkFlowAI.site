---
title: "🧠 Give Your AI Agent Chatbot Long Term Memory Tools Router"
description: "Automated workflow: 🧠 Give Your AI Agent Chatbot Long Term Memory Tools Router. This workflow integrates 14 different services: stickyNote, telegram, agent,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Execute Workflow Trigger"
  - "Google Docs"
  - "Set"
  - "Telegram"
  - "Gmail"
  - "Sticky Note"
  - "Switch"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/1950_Telegram_Googledocs_Automate_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Execute Workflow Trigger"
  - "Google Docs"
steps:
  - stepNumber: 1
    title: "When Executed by Another Workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 2
    title: "Save Long Term Memories"
    description: "Processes and automates operations via the Google Docs integration."
    tool: "Google Docs"
  - stepNumber: 3
    title: "Saved response"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Respond with long term memories"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Retrieve Long Term Memories3"
    description: "Processes and automates operations via the Google Docs integration."
    tool: "Google Docs"
  - stepNumber: 6
    title: "Send Success Message to Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 7
    title: "Email Workflow Stats"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 21 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Execute Workflow Trigger, Google Docs, Set, Telegram, Gmail, Sticky Note, Switch, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Execute Workflow Trigger, Google Docs, Set, Telegram, Gmail, Sticky Note, Switch, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Execute Workflow Trigger, Google Docs, Set, Telegram, Gmail, Sticky Note, Switch, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
