---
title: "Hacker News to Video Template - AlexK1919"
description: "Automated workflow: Hacker News to Video Template - AlexK1919. This workflow integrates 22 different services: stickyNote, youTube, lmChatOpenAi, if, splitIn..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Hacker News"
  - "Split In Batches"
  - "S3"
  - "Set"
  - "Http Request"
  - "Wait"
  - "Sticky Note"
  - "If"
  - "Limit"
  - "Dropbox"
  - "Google Drive"
  - "You Tube"
  - "Twitter"
  - "Linked In"
downloadUrl: "/blueprints/imported/hacker-news-to-video-template-alexk1919.json"
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
  - "Hacker News"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Hacker News"
    description: "Processes and automates operations via the Hacker News integration."
    tool: "Hacker News"
  - stepNumber: 3
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 4
    title: "Upload to Minio"
    description: "Processes and automates operations via the S3 integration."
    tool: "S3"
  - stepNumber: 5
    title: "News1"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Leo - Improve Prompt"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Leo - Get imageId"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 35 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Hacker News, Split In Batches, S3, Set, Http Request, Wait, Sticky Note, If, Limit, Dropbox, Google Drive, You Tube, Twitter, Linked In natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Hacker News, Split In Batches, S3, Set, Http Request, Wait, Sticky Note, If, Limit, Dropbox, Google Drive, You Tube, Twitter, Linked In

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Hacker News, Split In Batches, S3, Set, Http Request, Wait, Sticky Note, If, Limit, Dropbox, Google Drive, You Tube, Twitter, Linked In and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
