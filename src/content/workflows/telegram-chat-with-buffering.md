---
title: "Telegram Chat With Buffering"
description: "Automated workflow: Telegram Chat with Buffering. This workflow integrates 13 different services: telegramTrigger, stickyNote, wait, telegram, agent. It cont..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Telegram"
  - "Wait"
  - "Supabase"
  - "Aggregate"
  - "Sort"
  - "If"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/telegram-chat-with-buffering.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Sticky Note"
  - "Telegram"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Reply"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 4
    title: "Receive Message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 5
    title: "Wait 10 Seconds"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 6
    title: "Sticky Note3"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Add to Queued Messages"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Telegram, Wait, Supabase, Aggregate, Sort, If, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Telegram, Wait, Supabase, Aggregate, Sort, If, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Telegram, Wait, Supabase, Aggregate, Sort, If, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
