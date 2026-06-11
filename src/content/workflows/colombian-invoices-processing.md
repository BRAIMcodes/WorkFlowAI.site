---
title: "Colombian Invoices Processing"
description: "Automated workflow: Colombian Invoices Processing. This workflow integrates 19 different services: stickyNote, merge, switch, lmChatOpenAi, xml. It contains..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split In Batches"
  - "Gmail"
  - "Code"
  - "Filter"
  - "Compression"
  - "Switch"
  - "Extract From File"
  - "Xml"
  - "Merge"
  - "Aggregate"
  - "Google Drive"
  - "Google Sheets"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Code/1765_Code_Filter_Process_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Split In Batches"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 2
    title: "On Email receipt"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Get Filename and mimeType"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Filter ZIP files only"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 5
    title: "Unzip Invoice"
    description: "Processes and automates operations via the Compression integration."
    tool: "Compression"
  - stepNumber: 6
    title: "Get filename and mimeType on extracted docs"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "Split XML and PDF"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split In Batches, Gmail, Code, Filter, Compression, Switch, Extract From File, Xml, Merge, Aggregate, Google Drive, Google Sheets, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split In Batches, Gmail, Code, Filter, Compression, Switch, Extract From File, Xml, Merge, Aggregate, Google Drive, Google Sheets, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split In Batches, Gmail, Code, Filter, Compression, Switch, Extract From File, Xml, Merge, Aggregate, Google Drive, Google Sheets, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
