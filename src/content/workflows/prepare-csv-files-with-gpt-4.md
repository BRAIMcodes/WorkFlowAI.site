---
title: "Prepare CSV files with GPT-4"
description: "Automated workflow: Prepare CSV files with GPT-4. This workflow integrates 10 different services: writeBinaryFile, stickyNote, itemLists, spreadsheetFile, se..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "OpenAI"
  - "Split In Batches"
  - "Sticky Note"
  - "Set"
  - "Item Lists"
  - "Spreadsheet File"
  - "Write Binary File"
  - "Move Binary Data"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/prepare-csv-files-with-gpt-4.json"
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
    title: "When clicking \"Execute Workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "Split In Batches"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 4
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Parse JSON"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Make JSON Table"
    description: "Processes and automates operations via the Item Lists integration."
    tool: "Item Lists"
  - stepNumber: 7
    title: "Convert to CSV"
    description: "Processes and automates operations via the Spreadsheet File integration."
    tool: "Spreadsheet File"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, OpenAI, Split In Batches, Sticky Note, Set, Item Lists, Spreadsheet File, Write Binary File, Move Binary Data, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, OpenAI, Split In Batches, Sticky Note, Set, Item Lists, Spreadsheet File, Write Binary File, Move Binary Data, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, OpenAI, Split In Batches, Sticky Note, Set, Item Lists, Spreadsheet File, Write Binary File, Move Binary Data, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
