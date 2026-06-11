---
title: "Extract Spend Details (template)"
description: "Automated workflow: Extract spend details (template). This workflow integrates 14 different services: stickyNote, gmailTrigger, lmChatGoogleGemini, splitOut,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Extract From File"
  - "Html"
  - "Split Out"
  - "Google Sheets"
  - "Set"
  - "Switch"
  - "Merge"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/extract-spend-details-template.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Gmail"
  - "Extract From File"
steps:
  - stepNumber: 1
    title: "Get invoice"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Get payment"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Extract invoice"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 4
    title: "Extract payment"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "HTML"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 6
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 7
    title: "Send"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Extract From File, Html, Split Out, Google Sheets, Set, Switch, Merge, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Extract From File, Html, Split Out, Google Sheets, Set, Switch, Merge, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Extract From File, Html, Split Out, Google Sheets, Set, Switch, Merge, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
