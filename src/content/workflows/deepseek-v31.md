---
title: "DeepSeek v3.1"
description: "Automated workflow: DeepSeek v3.1. This workflow integrates 8 different services: notionTrigger, stickyNote, gmailTool, agent, mcpClientTool. It contains 10..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Notion"
  - "Gmail"
  - "Wordpress Tool"
  - "Mcp Client Tool"
  - "Sticky Note"
  - "Set"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/deepseek-v31.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Notion"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Watch Notion Updates"
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 2
    title: "Send Email"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Publish Blog Post"
    description: "Processes and automates operations via the Wordpress Tool integration."
    tool: "Wordpress Tool"
  - stepNumber: 4
    title: "Notion List Available Tools"
    description: "Processes and automates operations via the Mcp Client Tool integration."
    tool: "Mcp Client Tool"
  - stepNumber: 5
    title: "Notion Run a Tool"
    description: "Processes and automates operations via the Mcp Client Tool integration."
    tool: "Mcp Client Tool"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Edit Workflow Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Notion, Gmail, Wordpress Tool, Mcp Client Tool, Sticky Note, Set, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Notion, Gmail, Wordpress Tool, Mcp Client Tool, Sticky Note, Set, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Notion, Gmail, Wordpress Tool, Mcp Client Tool, Sticky Note, Set, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
