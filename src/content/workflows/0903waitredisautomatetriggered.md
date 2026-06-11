---
title: "Wait Redis Automate Triggered"
description: "Integrate Manual Trigger and OpenAI and Code and Redis and Set and If and LangChain and Wait and Execute Workflow Trigger and Sticky Note automatically using..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "OpenAI"
  - "Code"
  - "Redis"
  - "Set"
  - "If"
  - "LangChain"
  - "Wait"
  - "Execute Workflow Trigger"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0903waitredisautomatetriggered.json"
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
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "get wait seconds"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Set last_seen"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 5
    title: "Get waiting_reply"
    description: "Processes and automates operations via the Redis integration."
    tool: "Redis"
  - stepNumber: 6
    title: "Mod input"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "waiting_reply?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 19 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, OpenAI, Code, Redis, Set, If, LangChain, Wait, Execute Workflow Trigger, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, OpenAI, Code, Redis, Set, If, LangChain, Wait, Execute Workflow Trigger, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, OpenAI, Code, Redis, Set, If, LangChain, Wait, Execute Workflow Trigger, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
