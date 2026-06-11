---
title: "Google Analytics: Weekly Report"
description: "Automated workflow: Google Analytics: Weekly Report. This workflow integrates 11 different services: stickyNote, toolCalculator, telegram, code, scheduleTrig..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Google Analytics"
  - "Email Send"
  - "Telegram"
  - "Summarize"
  - "Code"
  - "Set"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/google-analytics-weekly-report.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Schedule Trigger"
  - "Google Analytics"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Google Analytics Letzte 7 Tage"
    description: "Processes and automates operations via the Google Analytics integration."
    tool: "Google Analytics"
  - stepNumber: 3
    title: "Send Email"
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 4
    title: "Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 5
    title: "Google Analytics: Past 7 days of the previous year"
    description: "Processes and automates operations via the Google Analytics integration."
    tool: "Google Analytics"
  - stepNumber: 6
    title: "Summarize Data"
    description: "Processes and automates operations via the Summarize integration."
    tool: "Summarize"
  - stepNumber: 7
    title: "Summarize Data1"
    description: "Processes and automates operations via the Summarize integration."
    tool: "Summarize"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Google Analytics, Email Send, Telegram, Summarize, Code, Set, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Google Analytics, Email Send, Telegram, Summarize, Code, Set, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Google Analytics, Email Send, Telegram, Summarize, Code, Set, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
