---
title: "Summarize You Tube Videos & Chat About Content With GPT 4o Mini Via Telegram"
description: "Automated workflow: Summarize YouTube Videos & Chat About Content with GPT-4o-mini via Telegram. This workflow integrates 18 different services: webhook, tel..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "Set"
  - "Code"
  - "Summarize"
  - "Youtube Transcripter"
  - "Telegram"
  - "Webhook"
  - "Respond To Webhook"
  - "Google Docs"
  - "Google Docs Tool"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/summarize-youtube-videos-chat-about-content-with-gpt-4o-mini-via-telegram.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Split Out"
  - "Set"
steps:
  - stepNumber: 1
    title: "Split Transcript into Segments"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "Extract YouTube URL from Input"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Extract Video ID from URL"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Concatenate Transcript Segments"
    description: "Processes and automates operations via the Summarize integration."
    tool: "Summarize"
  - stepNumber: 5
    title: "Extract YouTube Transcript"
    description: "Processes and automates operations via the Youtube Transcripter integration."
    tool: "Youtube Transcripter"
  - stepNumber: 6
    title: "Send Summary via Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 7
    title: "Receive YouTube URL via Webhook"
    description: "Processes and automates operations via the Webhook integration."
    tool: "Webhook"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, Set, Code, Summarize, Youtube Transcripter, Telegram, Webhook, Respond To Webhook, Google Docs, Google Docs Tool, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, Set, Code, Summarize, Youtube Transcripter, Telegram, Webhook, Respond To Webhook, Google Docs, Google Docs Tool, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, Set, Code, Summarize, Youtube Transcripter, Telegram, Webhook, Respond To Webhook, Google Docs, Google Docs Tool, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
