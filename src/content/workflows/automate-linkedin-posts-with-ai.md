---
title: "Automate LinkedIn Posts with AI"
description: "Automated workflow: Automate LinkedIn Posts with AI. This workflow integrates 9 different services: stickyNote, httpRequest, scheduleTrigger, merge, stopAndE..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Sticky Note"
  - "Notion"
  - "Linked In"
  - "Merge"
  - "Http Request"
  - "Aggregate"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Linkedin/1330_Linkedin_Schedule_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Set post status to \"Done\""
    description: "Processes and automates operations via the Notion integration."
    tool: "Notion"
  - stepNumber: 5
    title: "Post on LinkedIn"
    description: "Processes and automates operations via the Linked In integration."
    tool: "Linked In"
  - stepNumber: 6
    title: "Combine text+image"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 7
    title: "Fetch image from post"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Sticky Note, Notion, Linked In, Merge, Http Request, Aggregate natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Sticky Note, Notion, Linked In, Merge, Http Request, Aggregate

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Sticky Note, Notion, Linked In, Merge, Http Request, Aggregate and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
