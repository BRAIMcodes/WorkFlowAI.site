---
title: "🐋🤖 Deep Seek AI Agent + Telegram + Long Term Memory 🧠"
description: "Automated workflow: 🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠. This workflow integrates 14 different services: webhook, stickyNote, telegram, a..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "If"
  - "Telegram"
  - "Sticky Note"
  - "Webhook"
  - "Set"
  - "Switch"
  - "Merge"
  - "Google Docs Tool"
  - "Google Docs"
downloadUrl: "/blueprints/imported/deepseek-ai-agent-telegram-long-term-memory.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "If"
  - "Telegram"
steps:
  - stepNumber: 1
    title: "Check User & Chat ID"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 2
    title: "Error message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Listen for Telegram Events"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 5
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Validation"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Sticky Note4"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 11 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between If, Telegram, Sticky Note, Webhook, Set, Switch, Merge, Google Docs Tool, Google Docs natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: If, Telegram, Sticky Note, Webhook, Set, Switch, Merge, Google Docs Tool, Google Docs

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing If, Telegram, Sticky Note, Webhook, Set, Switch, Merge, Google Docs Tool, Google Docs and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
