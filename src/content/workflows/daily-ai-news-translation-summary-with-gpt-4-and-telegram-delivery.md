---
title: "Daily AI News Translation & Summary With GPT 4 And Telegram Delivery"
description: "Automated workflow: Daily AI News Translation & Summary with GPT-4 and Telegram Delivery. This workflow integrates 9 different services: stickyNote, httpRequ..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Schedule Trigger"
  - "Http Request"
  - "Set"
  - "Merge"
  - "Telegram"
downloadUrl: "/blueprints/imported/daily-ai-news-translation-summary-with-gpt-4-and-telegram-delivery.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Sticky Note"
  - "Schedule Trigger"
steps:
  - stepNumber: 1
    title: "Workflow Overview"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Trigger at 8am daily"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 3
    title: "Fetch GNews articles"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Fetch NewsAPI articles"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "GNews: Map to articles"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "NewsAPI: Map to articles"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Merge GNews & NewsAPI"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Schedule Trigger, Http Request, Set, Merge, Telegram natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Schedule Trigger, Http Request, Set, Merge, Telegram

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Schedule Trigger, Http Request, Set, Merge, Telegram and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
