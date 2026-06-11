---
title: "AI Agent - Cv Resume - Automated Screening , Sorting , Rating and Tracker System"
description: "Automated workflow: AI Agent - Cv Resume - Automated Screening , Sorting , Rating and Tracker System. This workflow integrates 11 different services: stickyN..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Docs"
  - "Google Drive"
  - "Extract From File"
  - "Gmail"
  - "Sticky Note"
  - "Google Sheets"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/ai-agent-cv-resume-automated-screening-sorting-rating-and-tracker-system.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Docs"
  - "Google Drive"
steps:
  - stepNumber: 1
    title: "GDocs - Get Job Desc"
    description: "Processes and automates operations via the Google Docs integration."
    tool: "Google Docs"
  - stepNumber: 2
    title: "Google Drive - Resume CV File Created"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 3
    title: "Download Resume File From Gdrive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Gmail:Notification"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
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
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Docs, Google Drive, Extract From File, Gmail, Sticky Note, Google Sheets, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Docs, Google Drive, Extract From File, Gmail, Sticky Note, Google Sheets, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Docs, Google Drive, Extract From File, Gmail, Sticky Note, Google Sheets, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
