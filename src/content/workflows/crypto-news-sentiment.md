---
title: "Crypto News & Sentiment"
description: "Automated workflow: Crypto News & Sentiment. This workflow integrates 11 different services: stickyNote, telegramTrigger, telegram, code, agent. It contains..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Rss Feed Read"
  - "Merge"
  - "Code"
  - "Sticky Note"
  - "Telegram"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/crypto-news-sentiment.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Rss Feed Read"
steps:
  - stepNumber: 1
    title: "Set Query"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "RSS Cointelegraph"
    description: "Processes and automates operations via the Rss Feed Read integration."
    tool: "Rss Feed Read"
  - stepNumber: 3
    title: "RSS Bitcoinmagazine"
    description: "Processes and automates operations via the Rss Feed Read integration."
    tool: "Rss Feed Read"
  - stepNumber: 4
    title: "RSS Coindesk"
    description: "Processes and automates operations via the Rss Feed Read integration."
    tool: "Rss Feed Read"
  - stepNumber: 5
    title: "RSS Bitcoinist"
    description: "Processes and automates operations via the Rss Feed Read integration."
    tool: "Rss Feed Read"
  - stepNumber: 6
    title: "RSS Newsbtc"
    description: "Processes and automates operations via the Rss Feed Read integration."
    tool: "Rss Feed Read"
  - stepNumber: 7
    title: "RSS Cryptopotato"
    description: "Processes and automates operations via the Rss Feed Read integration."
    tool: "Rss Feed Read"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 21 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Rss Feed Read, Merge, Code, Sticky Note, Telegram, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Rss Feed Read, Merge, Code, Sticky Note, Telegram, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Rss Feed Read, Merge, Code, Sticky Note, Telegram, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
