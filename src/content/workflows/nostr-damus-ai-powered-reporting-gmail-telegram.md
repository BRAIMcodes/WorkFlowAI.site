---
title: "#️⃣Nostr #damus AI Powered Reporting + Gmail + Telegram"
description: "Automated workflow: #️⃣Nostr #damus AI Powered Reporting + Gmail + Telegram. This workflow integrates 12 different services: stickyNote, markdown, telegram,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Markdown"
  - "Gmail"
  - "Aggregate"
  - "Sticky Note"
  - "Merge"
  - "Schedule Trigger"
  - "Telegram"
  - "Nostrobotsread"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/0001_Telegram_Schedule_Automation_Scheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Markdown"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Get HTML"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 3
    title: "Gmail Themes"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Get HTML Report"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
  - stepNumber: 5
    title: "Gmail Report"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 6
    title: "Aggregate #damus Content"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Markdown, Gmail, Aggregate, Sticky Note, Merge, Schedule Trigger, Telegram, Nostrobotsread, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Markdown, Gmail, Aggregate, Sticky Note, Merge, Schedule Trigger, Telegram, Nostrobotsread, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Markdown, Gmail, Aggregate, Sticky Note, Merge, Schedule Trigger, Telegram, Nostrobotsread, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
