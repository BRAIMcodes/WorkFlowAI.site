---
title: "AI Automated TikTok/Youtube Shorts/Reels Generator"
description: "Automated workflow: AI Automated TikTok/Youtube Shorts/Reels Generator. This workflow integrates 13 different services: stickyNote, httpRequest, wait, code,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Code"
  - "Wait"
  - "If"
  - "Sticky Note"
  - "Merge"
  - "Google Drive"
  - "Discord"
  - "Schedule Trigger"
  - "Google Sheets"
  - "Set"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Wait/1805_Wait_Code_Automate_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Code"
steps:
  - stepNumber: 1
    title: "Get image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Generate Image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Image-to-Video"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Get Video"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "List Elements"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Wait 10min"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 7
    title: "Wait 3min"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 31 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Code, Wait, If, Sticky Note, Merge, Google Drive, Discord, Schedule Trigger, Google Sheets, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Code, Wait, If, Sticky Note, Merge, Google Drive, Discord, Schedule Trigger, Google Sheets, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Code, Wait, If, Sticky Note, Merge, Google Drive, Discord, Schedule Trigger, Google Sheets, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
