---
title: "Airtable Create Triggered"
description: "Integrate LangChain and Gemini and Set and Airtable automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "LangChain"
  - "Gemini"
  - "Set"
  - "Airtable"
downloadUrl: "/blueprints/imported/0756airtablecreatetriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "LangChain"
  - "Gemini"
steps:
  - stepNumber: 1
    title: "When chat message received"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 2
    title: "Google Gemini Chat Model"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 3
    title: "Auto-fixing Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "Structured Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "Edit Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Google Gemini Chat Model1"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 7
    title: "Return results"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between LangChain, Gemini, Set, Airtable natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: LangChain, Gemini, Set, Airtable

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing LangChain, Gemini, Set, Airtable and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
