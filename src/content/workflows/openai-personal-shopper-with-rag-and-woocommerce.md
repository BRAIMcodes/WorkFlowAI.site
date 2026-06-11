---
title: "OpenAI Personal Shopper with RAG and WooCommerce"
description: "Automated workflow: OpenAI Personal Shopper with RAG and WooCommerce. This workflow integrates 18 different services: stickyNote, httpRequest, textSplitterTo..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Set"
  - "Woo Commerce Tool"
  - "Google Drive"
  - "Manual Trigger"
  - "Http Request"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/openai-personal-shopper-with-rag-and-woocommerce.json"
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
  - "Woo Commerce Tool"
steps:
  - stepNumber: 1
    title: "Edit Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 2
    title: "personal_shopper"
    description: "Processes and automates operations via the Woo Commerce Tool integration."
    tool: "Woo Commerce Tool"
  - stepNumber: 3
    title: "Google Drive2"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Google Drive1"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 5
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 6
    title: "HTTP Request"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Set, Woo Commerce Tool, Google Drive, Manual Trigger, Http Request, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Set, Woo Commerce Tool, Google Drive, Manual Trigger, Http Request, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Set, Woo Commerce Tool, Google Drive, Manual Trigger, Http Request, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
