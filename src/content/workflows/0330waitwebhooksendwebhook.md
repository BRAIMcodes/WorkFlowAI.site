---
title: "0330_Wait_Webhook_Send_Webhook"
description: "Integrate Http Request and Code and Set and Merge and If and Wait and Webhook and Item Lists and Slack and Gmail and Filter and Sticky Note and Form Trigger..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Code"
  - "Set"
  - "Merge"
  - "If"
  - "Wait"
  - "Webhook"
  - "Item Lists"
  - "Slack"
  - "Gmail"
  - "Filter"
  - "Sticky Note"
  - "Form Trigger"
downloadUrl: "/blueprints/imported/0330waitwebhooksendwebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Code"
steps:
  - stepNumber: 1
    title: "VirusTotal result"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "DNS Lookup"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Set IP From Lookup"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Set IP"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Merge VirusTotal & Greynoise results"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 6
    title: "Is IP?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 7
    title: "Start VirusTotal Scan"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 22 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Code, Set, Merge, If, Wait, Webhook, Item Lists, Slack, Gmail, Filter, Sticky Note, Form Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Code, Set, Merge, If, Wait, Webhook, Item Lists, Slack, Gmail, Filter, Sticky Note, Form Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Code, Set, Merge, If, Wait, Webhook, Item Lists, Slack, Gmail, Filter, Sticky Note, Form Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
