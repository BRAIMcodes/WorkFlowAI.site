---
title: "🎦💌advanced You Tube RSS Feed Buddy For Your Favorite Channels"
description: "Automated workflow: 🎦💌Advanced YouTube RSS Feed Buddy for Your Favorite Channels. This workflow integrates 17 different services: stickyNote, httpRequest,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Form Trigger"
  - "Set"
  - "Code"
  - "Http Request"
  - "Sticky Note"
  - "Merge"
  - "Rss Feed Read"
  - "Filter"
  - "Aggregate"
  - "Split Out"
  - "Schedule Trigger"
  - "Gmail"
  - "Telegram"
  - "Manual Trigger"
downloadUrl: "/blueprints/imported/advanced-youtube-rss-feed-buddy-for-your-favorite-channels.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Form Trigger"
  - "Set"
steps:
  - stepNumber: 1
    title: "On form submission"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 2
    title: "Create RSS Feed URLs1"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Get Channel Ids"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Create YouTube API URL"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Get YouTube Video Details"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Sticky Note14"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Workflow Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 30 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Form Trigger, Set, Code, Http Request, Sticky Note, Merge, Rss Feed Read, Filter, Aggregate, Split Out, Schedule Trigger, Gmail, Telegram, Manual Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Form Trigger, Set, Code, Http Request, Sticky Note, Merge, Rss Feed Read, Filter, Aggregate, Split Out, Schedule Trigger, Gmail, Telegram, Manual Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Form Trigger, Set, Code, Http Request, Sticky Note, Merge, Rss Feed Read, Filter, Aggregate, Split Out, Schedule Trigger, Gmail, Telegram, Manual Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
