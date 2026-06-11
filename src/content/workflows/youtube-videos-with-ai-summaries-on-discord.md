---
title: "YouTube Videos with AI Summaries on Discord"
description: "Automated workflow: YouTube Videos with AI Summaries on Discord. This workflow integrates 8 different services: stickyNote, httpRequest, rssFeedReadTrigger,..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Rss Feed Read Trigger"
  - "Http Request"
  - "Extract From File"
  - "Discord"
  - "Set"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/youtube-videos-with-ai-summaries-on-discord.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Rss Feed Read Trigger"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "YouTube Video Trigger"
    description: "Processes and automates operations via the Rss Feed Read Trigger integration."
    tool: "Rss Feed Read Trigger"
  - stepNumber: 2
    title: "Retrieve Caption Data"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Download Captions"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Caption File Conversion"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Post to Discord"
    description: "Processes and automates operations via the Discord integration."
    tool: "Discord"
  - stepNumber: 6
    title: "Find English Captions"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Rss Feed Read Trigger, Http Request, Extract From File, Discord, Set, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Rss Feed Read Trigger, Http Request, Extract From File, Discord, Set, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Rss Feed Read Trigger, Http Request, Extract From File, Discord, Set, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
