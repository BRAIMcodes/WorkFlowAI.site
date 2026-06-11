---
title: "Load Prompts from Github Repo and auto populate n8n expressions"
description: "Automated workflow: Load Prompts from Github Repo and auto populate n8n expressions. This workflow integrates 10 different services: stickyNote, code, agent,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "GitHub"
  - "Extract From File"
  - "Set"
  - "Code"
  - "If"
  - "Stop And Error"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Stopanderror/1453_Stopanderror_Code_Import_Triggered.json"
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
  - "GitHub"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "GitHub"
    description: "Processes and automates operations via the GitHub integration."
    tool: "GitHub"
  - stepNumber: 3
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 4
    title: "setVars"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "replace variables"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 7
    title: "Check All Prompt Vars Present"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, GitHub, Extract From File, Set, Code, If, Stop And Error, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, GitHub, Extract From File, Set, Code, If, Stop And Error, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, GitHub, Extract From File, Set, Code, If, Stop And Error, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
