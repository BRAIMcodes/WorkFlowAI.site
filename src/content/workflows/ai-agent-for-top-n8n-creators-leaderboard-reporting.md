---
title: "🤖🧑‍💻 AI Agent  for Top n8n Creators Leaderboard Reporting"
description: "Automated workflow: 🤖🧑‍💻 AI Agent  for Top n8n Creators Leaderboard Reporting. This workflow integrates 22 different services: convertToFile, stickyNote,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Set"
  - "Aggregate"
  - "Execute Workflow Trigger"
  - "Convert To File"
  - "Read Write File"
  - "Sticky Note"
  - "Merge"
  - "Split Out"
  - "Sort"
  - "Schedule Trigger"
  - "Limit"
  - "Google Drive"
  - "Markdown"
  - "Gmail"
  - "Telegram"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Telegram/1113_Telegram_Splitout_Automation_Scheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Set"
steps:
  - stepNumber: 1
    title: "stats_aggregate_creators"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "stats_aggregate_workflows"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Global Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Parse Workflow Data"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Parse Creators Data"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 7
    title: "When Executed by Another Workflow"
    description: "Processes and automates operations via the Execute Workflow Trigger integration."
    tool: "Execute Workflow Trigger"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 37 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Set, Aggregate, Execute Workflow Trigger, Convert To File, Read Write File, Sticky Note, Merge, Split Out, Sort, Schedule Trigger, Limit, Google Drive, Markdown, Gmail, Telegram natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Set, Aggregate, Execute Workflow Trigger, Convert To File, Read Write File, Sticky Note, Merge, Split Out, Sort, Schedule Trigger, Limit, Google Drive, Markdown, Gmail, Telegram

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Set, Aggregate, Execute Workflow Trigger, Convert To File, Read Write File, Sticky Note, Merge, Split Out, Sort, Schedule Trigger, Limit, Google Drive, Markdown, Gmail, Telegram and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
