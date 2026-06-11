---
title: "Gmail Google Sheets Create Triggered"
description: "Integrate LangChain and Sticky Note and Extract From File and OpenAI and Google Sheets and Gmail automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "LangChain"
  - "Sticky Note"
  - "Extract From File"
  - "OpenAI"
  - "Google Sheets"
  - "Gmail"
downloadUrl: "/blueprints/imported/0852gmailgooglesheetscreatetriggered.json"
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
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Structured Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Extract text from PDF File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 4
    title: "AI Agent to evaluate Resume"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "OpenAI Chat Model (GPT 4o-mini)"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 6
    title: "Add Resume Evaluation to Google Sheets"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Trigger on new Email Received"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
---

Optimize your tech stack and automate workflows between LangChain, Sticky Note, Extract From File, OpenAI, Google Sheets, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: LangChain, Sticky Note, Extract From File, OpenAI, Google Sheets, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing LangChain, Sticky Note, Extract From File, OpenAI, Google Sheets, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
