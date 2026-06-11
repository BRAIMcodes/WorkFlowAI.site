---
title: "Save New Sales Opportunities"
description: "Automated workflow: Save New Sales Opportunities. This workflow integrates 6 different services: stickyNote, gmailTrigger, odoo, stopAndError, lmOpenAi. It c..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Odoo"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Gmail/1565_Gmail_Stickynote_Create_Triggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gmail"
  - "Odoo"
steps:
  - stepNumber: 1
    title: "Received Emails with Sales Label"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Odoo - Create Opportunity"
    description: "Processes and automates operations via the Odoo integration."
    tool: "Odoo"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Gmail, Odoo, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Odoo, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Odoo, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
