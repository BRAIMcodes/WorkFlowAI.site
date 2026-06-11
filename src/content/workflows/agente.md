---
title: "agente"
description: "Automated workflow: agente. This workflow integrates 19 different services: convertToFile, stickyNote, scheduleTrigger, switch, lmChatOpenAi. It contains 56..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Tasks Tool"
  - "Telegram"
  - "Schedule Trigger"
  - "Sticky Note"
  - "Webhook"
  - "Set"
  - "Switch"
  - "Evolution Api"
  - "Convert To File"
downloadUrl: "/blueprints/imported/agente.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Tasks Tool"
  - "Telegram"
steps:
  - stepNumber: 1
    title: "Google Tasks"
    description: "Processes and automates operations via the Google Tasks Tool integration."
    tool: "Google Tasks Tool"
  - stepNumber: 2
    title: "Receber Mensagem Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 3
    title: "Enviar alerta de cancelamento"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 4
    title: "Gatilho diário"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 5
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note3"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Tasks Tool, Telegram, Schedule Trigger, Sticky Note, Webhook, Set, Switch, Evolution Api, Convert To File natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Tasks Tool, Telegram, Schedule Trigger, Sticky Note, Webhook, Set, Switch, Evolution Api, Convert To File

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Tasks Tool, Telegram, Schedule Trigger, Sticky Note, Webhook, Set, Switch, Evolution Api, Convert To File and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
