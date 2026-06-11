---
title: "Telegram RAG pdf"
description: "Automated workflow: Telegram RAG pdf. This workflow integrates 14 different services: telegramTrigger, vectorStorePinecone, stickyNote, textSplitterRecursive..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Stop And Error"
  - "Sticky Note"
  - "If"
  - "Code"
  - "Limit"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Stopanderror/1061_Stopanderror_Telegram_Automation_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Telegram"
  - "Stop And Error"
steps:
  - stepNumber: 1
    title: "Telegram Trigger"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "Stop and Error"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Check If is a document"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 6
    title: "Change to application/pdf"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "Telegram get File"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Stop And Error, Sticky Note, If, Code, Limit natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Stop And Error, Sticky Note, If, Code, Limit

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Stop And Error, Sticky Note, If, Code, Limit and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
