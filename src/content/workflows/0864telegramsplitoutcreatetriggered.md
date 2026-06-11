---
title: "Telegram Splitout Create Triggered"
description: "Integrate LangChain and OpenAI and Telegram and Limit and If and Set and Split Out and Code and Google Sheets and Sticky Note automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "LangChain"
  - "OpenAI"
  - "Telegram"
  - "Limit"
  - "If"
  - "Set"
  - "Split Out"
  - "Code"
  - "Google Sheets"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0864telegramsplitoutcreatetriggered.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "LangChain"
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "When chat message received"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 2
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "Structured Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "Get Audio File"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 5
    title: "Transcribe Recording"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 6
    title: "Limit"
    description: "Processes and automates operations via the Limit integration."
    tool: "Limit"
  - stepNumber: 7
    title: "Receive Telegram message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between LangChain, OpenAI, Telegram, Limit, If, Set, Split Out, Code, Google Sheets, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: LangChain, OpenAI, Telegram, Limit, If, Set, Split Out, Code, Google Sheets, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing LangChain, OpenAI, Telegram, Limit, If, Set, Split Out, Code, Google Sheets, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
