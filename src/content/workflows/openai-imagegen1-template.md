---
title: "Open AI Image Gen1 Template"
description: "Automated workflow: OpenAI ImageGen1 Template. This workflow integrates 6 different services: convertToFile, stickyNote, httpRequest, set, stopAndError. It c..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Convert To File"
  - "Sticky Note"
  - "Set"
downloadUrl: "/blueprints/imported/openai-imagegen1-template.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Manual Trigger"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "HTTP Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Convert to File"
    description: "Processes and automates operations via the Convert To File integration."
    tool: "Convert To File"
  - stepNumber: 4
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "API KEY"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Convert To File, Sticky Note, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Convert To File, Sticky Note, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Convert To File, Sticky Note, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
