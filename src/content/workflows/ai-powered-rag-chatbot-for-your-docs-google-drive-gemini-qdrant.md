---
title: "🤖 AI Powered RAG Chatbot For Your Docs + Google Drive + Gemini + Qdrant"
description: "Automated workflow: 🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant. This workflow integrates 25 different services: stickyNote, vec..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split In Batches"
  - "Wait"
  - "Manual Trigger"
  - "Merge"
  - "Extract From File"
  - "Google Drive"
  - "Set"
  - "Summarize"
  - "Sticky Note"
  - "Telegram"
  - "If"
  - "Webhook"
  - "Google Docs"
downloadUrl: "/blueprints/imported/ai-powered-rag-chatbot-for-your-docs-google-drive-gemini-qdrant.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Split In Batches"
  - "Wait"
steps:
  - stepNumber: 1
    title: "Loop Over Items"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 2
    title: "Wait"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 3
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 4
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 5
    title: "Get File Contents"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 6
    title: "Download File From Google Drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 7
    title: "Find File Ids in Google Drive Folder"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 28 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split In Batches, Wait, Manual Trigger, Merge, Extract From File, Google Drive, Set, Summarize, Sticky Note, Telegram, If, Webhook, Google Docs natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split In Batches, Wait, Manual Trigger, Merge, Extract From File, Google Drive, Set, Summarize, Sticky Note, Telegram, If, Webhook, Google Docs

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split In Batches, Wait, Manual Trigger, Merge, Extract From File, Google Drive, Set, Summarize, Sticky Note, Telegram, If, Webhook, Google Docs and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
