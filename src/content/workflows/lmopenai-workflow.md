---
title: "Lmopenai Workflow"
description: "Automated workflow: Lmopenai Workflow. This workflow integrates 16 different services: stickyNote, httpRequest, wait, gmailTrigger, splitOut. It contains 34..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Sticky Note"
  - "Gmail"
  - "Google Sheets"
  - "Wait"
  - "Switch"
  - "Set"
  - "If"
  - "Split Out"
  - "Aggregate"
  - "Merge"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Wait/0523_Wait_Splitout_Create_Webhook.json"
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
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Upload to LlamaParse"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Receiving Invoices"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Append to Reconciliation Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 5
    title: "Get Processing Status"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Wait to stay within service limits"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 7
    title: "Is Job Ready?"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 16 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Sticky Note, Gmail, Google Sheets, Wait, Switch, Set, If, Split Out, Aggregate, Merge natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Sticky Note, Gmail, Google Sheets, Wait, Switch, Set, If, Split Out, Aggregate, Merge

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Sticky Note, Gmail, Google Sheets, Wait, Switch, Set, If, Split Out, Aggregate, Merge and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
