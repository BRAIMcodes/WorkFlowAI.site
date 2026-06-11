---
title: "0892_Webhook_Code_Create_Webhook"
description: "Integrate OpenAI and Set and Code and If and Merge and Google Drive and Webhook and Respond To Webhook and Gmail and Read P D F and Filter and Sticky Note au..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "Set"
  - "Code"
  - "If"
  - "Merge"
  - "Google Drive"
  - "Webhook"
  - "Respond To Webhook"
  - "Gmail"
  - "Read P D F"
  - "Filter"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0892webhookcodecreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "OpenAI"
  - "Set"
steps:
  - stepNumber: 1
    title: "OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "Configure"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Iterate over email attachments"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Is text within token limit?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 6
    title: "Is matched"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 7
    title: "Upload file to folder"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between OpenAI, Set, Code, If, Merge, Google Drive, Webhook, Respond To Webhook, Gmail, Read P D F, Filter, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, Set, Code, If, Merge, Google Drive, Webhook, Respond To Webhook, Gmail, Read P D F, Filter, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, Set, Code, If, Merge, Google Drive, Webhook, Respond To Webhook, Gmail, Read P D F, Filter, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
