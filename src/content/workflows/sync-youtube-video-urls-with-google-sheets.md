---
title: "Sync Youtube Video Urls With Google Sheets"
description: "Integrate Split Out and Manual Trigger and Google Sheets and Http Request and Set and Sticky Note automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "Manual Trigger"
  - "Google Sheets"
  - "Http Request"
  - "Set"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/sync-youtube-video-urls-with-google-sheets.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Split Out"
  - "Manual Trigger"
steps:
  - stepNumber: 1
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "Manual Trigger (When Clicking 'Test workflow'"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 3
    title: "Get Youtube Channel Ids from Google Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Get Youtube Video Urls form specific channel"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Format fields as required to save in google sheet"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Insert & Update Youtube Urls in Google Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Split Out, Manual Trigger, Google Sheets, Http Request, Set, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, Manual Trigger, Google Sheets, Http Request, Set, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, Manual Trigger, Google Sheets, Http Request, Set, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
