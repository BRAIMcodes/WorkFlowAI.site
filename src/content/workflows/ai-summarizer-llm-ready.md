---
title: "AI Summarizer (llm Ready)"
description: "Integrate Webhook and Sticky Note and Set and OpenAI and Function and Respond To Webhook automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Webhook"
  - "Sticky Note"
  - "Set"
  - "OpenAI"
  - "Function"
  - "Respond To Webhook"
downloadUrl: "/blueprints/imported/ai-summarizer-llm-ready.json"
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
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 2
    title: "Notas & Testes"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Prepare Text"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "OpenAI (opcional)"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Local Summarize"
    description: "Processes and automates operations via the Function integration."
    tool: "Function"
  - stepNumber: 6
    title: "Respond"
    description: "Processes and automates operations via the Respond To Webhook integration."
    tool: "Respond To Webhook"
---

Optimize your tech stack and automate workflows between Webhook, Sticky Note, Set, OpenAI, Function, Respond To Webhook natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Webhook, Sticky Note, Set, OpenAI, Function, Respond To Webhook

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Webhook, Sticky Note, Set, OpenAI, Function, Respond To Webhook and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
