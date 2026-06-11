---
title: "AI agent chat"
description: "Integrate OpenAI and LangChain automatically using n8n."
timeSaved: "3 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "LangChain"
downloadUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI agent chat.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Beginner"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "OpenAI"
  - "LangChain"
steps:
  - stepNumber: 1
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "Window Buffer Memory"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 3
    title: "SerpAPI"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "When chat message received"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "AI Agent"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
---

Optimize your tech stack and automate workflows between OpenAI, LangChain natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, LangChain

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, LangChain and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
