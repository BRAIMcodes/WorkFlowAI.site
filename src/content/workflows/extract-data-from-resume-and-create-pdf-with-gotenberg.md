---
title: "Extract Data From Resume And Create PDF With Gotenberg"
description: "Integrate OpenAI and Code and LangChain and Telegram and If and Extract From File and Set and Merge and Convert To File and Http Request and Sticky Note auto..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "Code"
  - "LangChain"
  - "Telegram"
  - "If"
  - "Extract From File"
  - "Set"
  - "Merge"
  - "Convert To File"
  - "Http Request"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/extract-data-from-resume-and-create-pdf-with-gotenberg.json"
category: "Recruiting"
persona: "Recruiters"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Recruiting"
  - "n8n"
  - "OpenAI"
  - "Code"
steps:
  - stepNumber: 1
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "Convert education to HTML"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "Auto-fixing Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "OpenAI Chat Model1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Structured Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Convert employment history to HTML"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "Convert projects to HTML"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 34 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between OpenAI, Code, LangChain, Telegram, If, Extract From File, Set, Merge, Convert To File, Http Request, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, Code, LangChain, Telegram, If, Extract From File, Set, Merge, Convert To File, Http Request, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, Code, LangChain, Telegram, If, Extract From File, Set, Merge, Convert To File, Http Request, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
