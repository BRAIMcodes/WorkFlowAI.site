---
title: "SQL Agent With Memory"
description: "Automated workflow: SQL agent with memory. This workflow integrates 11 different services: stickyNote, httpRequest, compression, readWriteFile, agent. It con..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Compression"
  - "Read Write File"
  - "Sticky Note"
  - "Set"
downloadUrl: "/blueprints/imported/sql-agent-with-memory.json"
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
  - "Http Request"
steps:
  - stepNumber: 1
    title: "When clicking \"Test workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Get chinook.zip example"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Extract zip file"
    description: "Processes and automates operations via the Compression integration."
    tool: "Compression"
  - stepNumber: 4
    title: "Save chinook.db locally"
    description: "Processes and automates operations via the Read Write File integration."
    tool: "Read Write File"
  - stepNumber: 5
    title: "Load local chinook.db"
    description: "Processes and automates operations via the Read Write File integration."
    tool: "Read Write File"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Compression, Read Write File, Sticky Note, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Compression, Read Write File, Sticky Note, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Compression, Read Write File, Sticky Note, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
