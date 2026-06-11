---
title: "Translate questions about e-mails into SQL queries and run them"
description: "Automated workflow: Translate questions about e-mails into SQL queries and run them. This workflow integrates 14 different services: convertToFile, stickyNot..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Convert To File"
  - "Read Write File"
  - "Extract From File"
  - "Sticky Note"
  - "Manual Trigger"
  - "If"
  - "Merge"
  - "PostgreSQL"
  - "Execute Workflow Trigger"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Postgres/1245_Postgres_Extractfromfile_Automation_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Convert To File"
steps:
  - stepNumber: 1
    title: "Add table name to output"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "Convert data to binary"
    description: "Processes and automates operations via the Convert To File integration."
    tool: "Convert To File"
  - stepNumber: 3
    title: "Save file locally"
    description: "Processes and automates operations via the Read Write File integration."
    tool: "Read Write File"
  - stepNumber: 4
    title: "Extract data from file"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "When clicking \"Test workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 7
    title: "Combine schema data and chat input"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 17 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Convert To File, Read Write File, Extract From File, Sticky Note, Manual Trigger, If, Merge, PostgreSQL, Execute Workflow Trigger, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Convert To File, Read Write File, Extract From File, Sticky Note, Manual Trigger, If, Merge, PostgreSQL, Execute Workflow Trigger, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Convert To File, Read Write File, Extract From File, Sticky Note, Manual Trigger, If, Merge, PostgreSQL, Execute Workflow Trigger, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
