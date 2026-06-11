---
title: "Scrape Trustpilot Reviews With Deep Seek, Analyze Sentiment With Open AI"
description: "Automated workflow: Scrape Trustpilot Reviews with DeepSeek, Analyze Sentiment with OpenAI. This workflow integrates 13 different services: stickyNote, httpR..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "If"
  - "Manual Trigger"
  - "Limit"
  - "Sticky Note"
  - "Set"
  - "Http Request"
  - "Html"
  - "Google Sheets"
downloadUrl: "/blueprints/imported/scrape-trustpilot-reviews-with-deepseek-analyze-sentiment-with-openai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Split Out"
  - "If"
steps:
  - stepNumber: 1
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 3
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 4
    title: "Limit1"
    description: "Processes and automates operations via the Limit integration."
    tool: "Limit"
  - stepNumber: 5
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, If, Manual Trigger, Limit, Sticky Note, Set, Http Request, Html, Google Sheets natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, If, Manual Trigger, Limit, Sticky Note, Set, Http Request, Html, Google Sheets

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, If, Manual Trigger, Limit, Sticky Note, Set, Http Request, Html, Google Sheets and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
