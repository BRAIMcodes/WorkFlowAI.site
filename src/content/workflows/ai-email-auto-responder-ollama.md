---
title: "AI Email Auto-Responder (Ollama)"
description: "Integrate Schedule Trigger and Email Read Imap and Http Request and Filter and Set automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Email Read Imap"
  - "Http Request"
  - "Filter"
  - "Set"
downloadUrl: "/blueprints/imported/ai-email-auto-responder-ollama.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "Email Read Imap"
steps:
  - stepNumber: 1
    title: "Check Every 5 Minutes"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Get Unread Emails (IMAP)"
    description: "Processes and automates operations via the Email Read Imap integration."
    tool: "Email Read Imap"
  - stepNumber: 3
    title: "1. Classify Email (Ollama)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Filter Spam"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 5
    title: "2. Draft Reply (Ollama)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Prepare Draft for Review"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Email Read Imap, Http Request, Filter, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Email Read Imap, Http Request, Filter, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Email Read Imap, Http Request, Filter, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
