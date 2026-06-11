---
title: "OpenAI-model-examples"
description: "Automated workflow: OpenAI-model-examples. This workflow integrates 9 different services: stickyNote, httpRequest, code, set, stopAndError. It contains 41 no..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "OpenAI"
  - "Code"
  - "Http Request"
  - "Sticky Note"
  - "Set"
  - "Html"
  - "Read Binary Files"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Readbinaryfiles/0171_Readbinaryfiles_Code_Automation_Webhook.json"
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
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "When clicking \"Execute Workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "davinci-003-complete"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "ChatGPT-ex2"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "davinci-003-edit"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "ChatGPT-ex1.1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 6
    title: "ChatGPT-ex1.2"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 7
    title: "Text-example"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 20 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, OpenAI, Code, Http Request, Sticky Note, Set, Html, Read Binary Files natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, OpenAI, Code, Http Request, Sticky Note, Set, Html, Read Binary Files

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, OpenAI, Code, Http Request, Sticky Note, Set, Html, Read Binary Files and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
