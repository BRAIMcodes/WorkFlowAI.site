---
title: "SupportFlow Lite — Simple AI Support Bot (No RAG)"
description: "Integrate Webhook and Code and OpenAI and Google Sheets and Respond To Webhook and Sticky Note automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Code"
  - "OpenAI"
  - "Google Sheets"
  - "Respond To Webhook"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/SupportFlow Lite - Simple AI Customer Support Chatbot.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Webhook"
  - "Code"
steps:
  - stepNumber: 1
    title: "Receive Message"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Validate Input"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "AI: Generate Response"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "Merge Response"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Log to Sheets"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Respond to Customer"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
  - stepNumber: 7
    title: "Sticky Note: Lite"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Webhook, Code, OpenAI, Google Sheets, Respond To Webhook, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Code, OpenAI, Google Sheets, Respond To Webhook, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Code, OpenAI, Google Sheets, Respond To Webhook, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
