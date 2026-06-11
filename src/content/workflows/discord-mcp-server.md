---
title: "Discord MCP Server"
description: "Integrate Discord and LangChain and Http Request Tool and Sticky Note automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Discord"
  - "LangChain"
  - "Http Request Tool"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/discord-mcp-server.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Discord"
  - "LangChain"
steps:
  - stepNumber: 1
    title: "Send Discord Message to Channel"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 2
    title: "Add Role To Member"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 3
    title: "Remove Role from member"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 4
    title: "Discord MCP Server Trigger"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "Get channels of server by server ID"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 6
    title: "Get members of server by server ID"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 7
    title: "Send DM and Wait for reply"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Discord, LangChain, Http Request Tool, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Discord, LangChain, Http Request Tool, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Discord, LangChain, Http Request Tool, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
