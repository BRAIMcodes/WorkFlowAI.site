---
title: "News Extraction"
description: "Automated workflow: News Extraction. This workflow integrates 11 different services: stickyNote, httpRequest, itemLists, code, scheduleTrigger. It contains 4..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Html"
  - "OpenAI"
  - "Set"
  - "Merge"
  - "Code"
  - "Http Request"
  - "Sticky Note"
  - "Schedule Trigger"
  - "Noco Db"
  - "Item Lists"
downloadUrl: "/blueprints/imported/news-extraction.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Html"
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "Extract the HTML with the right css class"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 2
    title: "Summary"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "Keywords"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "Rename keywords"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Rename Summary"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 7
    title: "Extract date"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 29 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Html, OpenAI, Set, Merge, Code, Http Request, Sticky Note, Schedule Trigger, Noco Db, Item Lists natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Html, OpenAI, Set, Merge, Code, Http Request, Sticky Note, Schedule Trigger, Noco Db, Item Lists

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Html, OpenAI, Set, Merge, Code, Http Request, Sticky Note, Schedule Trigger, Noco Db, Item Lists and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
