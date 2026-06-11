---
title: "AI Social Media Content Generator (ollama)"
description: "Integrate Manual Trigger and Set and Http Request and Code automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Set"
  - "Http Request"
  - "Code"
downloadUrl: "/blueprints/imported/ai-social-media-content-generator-ollama.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Manual Trigger"
  - "Set"
steps:
  - stepNumber: 1
    title: "Manual Trigger"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Content Parameters"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Generate All Platform Content (Ollama)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Parse Content JSON"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Review & Polish (Ollama)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Final Content Output"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
---

Optimize your tech stack and automate workflows between Manual Trigger, Set, Http Request, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Set, Http Request, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Set, Http Request, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
