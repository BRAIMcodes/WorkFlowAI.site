---
title: "Insert and retrieve documents"
description: "Automated workflow: Insert and retrieve documents. This workflow integrates 16 different services: stickyNote, httpRequest, textSplitterRecursiveCharacterTex..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Http Request"
  - "Html"
  - "Split Out"
  - "Limit"
  - "Sticky Note"
  - "Set"
  - "Code"
downloadUrl: "/blueprints/imported/insert-and-retrieve-documents.json"
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
    title: "When clicking \"Execute Workflow\""
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Fetch Essay List"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Extract essay names"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 4
    title: "Split out into items"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Fetch essay texts"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Limit to first 3"
    description: "Processes and automates operations via the Limit integration."
    tool: "Limit"
  - stepNumber: 7
    title: "Extract Text Only"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Http Request, Html, Split Out, Limit, Sticky Note, Set, Code natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Http Request, Html, Split Out, Limit, Sticky Note, Set, Code

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Http Request, Html, Split Out, Limit, Sticky Note, Set, Code and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
