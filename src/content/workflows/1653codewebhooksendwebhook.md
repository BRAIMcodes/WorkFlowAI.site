---
title: "1653_Code_Webhook_Send_Webhook"
description: "Integrate OpenAI and Gmail and If and Set and Sticky Note and Crypto and Html and Code and Google Sheets and Webhook and Respond To Webhook and Switch automa..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "Gmail"
  - "If"
  - "Set"
  - "Sticky Note"
  - "Crypto"
  - "Html"
  - "Code"
  - "Google Sheets"
  - "Webhook"
  - "Respond To Webhook"
  - "Switch"
downloadUrl: "/blueprints/imported/1653codewebhooksendwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "OpenAI"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Generate reply"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "On email received"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Only continue for specific emails"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "Configure"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Note5"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Send reply to recipient"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 7
    title: "Generate UUID"
    description: "Processes and automates operations via the Crypto integration."
    tool: "Crypto"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 34 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between OpenAI, Gmail, If, Set, Sticky Note, Crypto, Html, Code, Google Sheets, Webhook, Respond To Webhook, Switch natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, Gmail, If, Set, Sticky Note, Crypto, Html, Code, Google Sheets, Webhook, Respond To Webhook, Switch

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, Gmail, If, Set, Sticky Note, Crypto, Html, Code, Google Sheets, Webhook, Respond To Webhook, Switch and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
