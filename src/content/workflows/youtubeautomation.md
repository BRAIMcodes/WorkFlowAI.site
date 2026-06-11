---
title: "Youtube_Automation"
description: "Automated workflow: Youtube_Automation. This workflow integrates 15 different services: stickyNote, youTube, httpRequest, wait, code. It contains 38 nodes an..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "You Tube"
  - "Split In Batches"
  - "Manual Trigger"
  - "Sticky Note"
  - "Wait"
  - "Schedule Trigger"
  - "Code"
  - "Set"
  - "Remove Duplicates"
  - "If"
  - "Http Request"
downloadUrl: "/blueprints/imported/youtubeautomation.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "You Tube"
  - "Split In Batches"
steps:
  - stepNumber: 1
    title: "Fetch Latest Videos"
    description: "Processes and automates operations via the You Tube integration."
    tool: "You Tube"
  - stepNumber: 2
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 3
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 4
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note3"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note4"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 22 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between You Tube, Split In Batches, Manual Trigger, Sticky Note, Wait, Schedule Trigger, Code, Set, Remove Duplicates, If, Http Request natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: You Tube, Split In Batches, Manual Trigger, Sticky Note, Wait, Schedule Trigger, Code, Set, Remove Duplicates, If, Http Request

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing You Tube, Split In Batches, Manual Trigger, Sticky Note, Wait, Schedule Trigger, Code, Set, Remove Duplicates, If, Http Request and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
