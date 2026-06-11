---
title: "Auto Create And Publish AI Social Videos With Telegram, GPT 4 And Blotato"
description: "Automated workflow: Auto-create and publish AI social videos with Telegram, GPT-4 and Blotato. This workflow integrates 11 different services: telegramTrigge..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Sticky Note"
  - "Telegram"
  - "Code"
  - "If"
  - "Wait"
  - "Set"
  - "Google Sheets"
downloadUrl: "/blueprints/imported/auto-create-and-publish-ai-social-videos-with-telegram-gpt-4-and-blotato.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Marketing"
  - "n8n"
  - "Http Request"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Upload Video to Blotato"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Post to Instagram"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Post to YouTube"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Post to TikTok"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Post to Facebook Page"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Post to Threads"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Post to Twitter (X)"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 32 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Sticky Note, Telegram, Code, If, Wait, Set, Google Sheets natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Sticky Note, Telegram, Code, If, Wait, Set, Google Sheets

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Sticky Note, Telegram, Code, If, Wait, Set, Google Sheets and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
