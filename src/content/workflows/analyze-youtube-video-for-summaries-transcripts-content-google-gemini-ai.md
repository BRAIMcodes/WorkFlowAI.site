---
title: "🎥 Analyze You Tube Video For Summaries, Transcripts & Content + Google Gemini AI"
description: "Automated workflow: 🎥 Analyze YouTube Video for Summaries, Transcripts & Content + Google Gemini AI. This workflow integrates 11 different services: stickyN..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Sticky Note"
  - "Http Request"
  - "Code"
  - "Google Drive"
  - "Gmail"
  - "Markdown"
  - "Form"
  - "Form Trigger"
  - "Merge"
downloadUrl: "/blueprints/imported/analyze-youtube-video-for-summaries-transcripts-content-google-gemini-ai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Set"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Config"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Get Video Audience MetaData"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Compose Prompts"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Extract MetaData Object"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Get Prompt by Prompt Type"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Sticky Note, Http Request, Code, Google Drive, Gmail, Markdown, Form, Form Trigger, Merge natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Sticky Note, Http Request, Code, Google Drive, Gmail, Markdown, Form, Form Trigger, Merge

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Sticky Note, Http Request, Code, Google Drive, Gmail, Markdown, Form, Form Trigger, Merge and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
