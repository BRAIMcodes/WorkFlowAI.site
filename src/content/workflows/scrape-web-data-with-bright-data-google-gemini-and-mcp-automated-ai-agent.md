---
title: "Scrape Web Data with Bright Data, Google Gemini and MCP Automated AI Agent"
description: "Automated workflow: Scrape Web Data with Bright Data, Google Gemini and MCP Automated AI Agent. This workflow integrates 12 different services: stickyNote, h..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Mcp Client"
  - "Sticky Note"
  - "Mcp Client Tool"
  - "Http Request"
  - "Set"
  - "Function"
  - "Read Write File"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Manual/1707_Manual_Stickynote_Automate_Webhook.json"
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
  - "Mcp Client"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "MCP Client list all tools for Bright Data"
    description: "Processes and automates operations via the Mcp Client integration."
    tool: "Mcp Client"
  - stepNumber: 3
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "MCP Client List all tools"
    description: "Processes and automates operations via the Mcp Client Tool integration."
    tool: "Mcp Client Tool"
  - stepNumber: 5
    title: "MCP Client Bright Data Web Scraper"
    description: "Processes and automates operations via the Mcp Client integration."
    tool: "Mcp Client"
  - stepNumber: 6
    title: "Webhook for web scraper"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Set the URLs"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Mcp Client, Sticky Note, Mcp Client Tool, Http Request, Set, Function, Read Write File natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Mcp Client, Sticky Note, Mcp Client Tool, Http Request, Set, Function, Read Write File

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Mcp Client, Sticky Note, Mcp Client Tool, Http Request, Set, Function, Read Write File and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
