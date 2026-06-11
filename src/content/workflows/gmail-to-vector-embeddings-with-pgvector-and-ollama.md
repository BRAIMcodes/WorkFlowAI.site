---
title: "Gmail To Vector Embeddings With Pgvector And Ollama"
description: "Automated workflow: Gmail to Vector Embeddings with PGVector and Ollama. This workflow integrates 15 different services: stickyNote, textSplitterRecursiveCha..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Split In Batches"
  - "Split Out"
  - "If"
  - "Manual Trigger"
  - "Sticky Note"
  - "Set"
  - "PostgreSQL"
  - "Code"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/gmail-to-vector-embeddings-with-pgvector-and-ollama.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Gmail"
  - "Split In Batches"
steps:
  - stepNumber: 1
    title: "Gmail Trigger"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 3
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 4
    title: "Was manually triggered?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Manual Trigger"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
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
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Split In Batches, Split Out, If, Manual Trigger, Sticky Note, Set, PostgreSQL, Code, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Split In Batches, Split Out, If, Manual Trigger, Sticky Note, Set, PostgreSQL, Code, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Split In Batches, Split Out, If, Manual Trigger, Sticky Note, Set, PostgreSQL, Code, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
