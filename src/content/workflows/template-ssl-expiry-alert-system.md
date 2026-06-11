---
title: "Template Ssl Expiry Alert System"
description: "Automated workflow: Template - SSL Expiry Alert System. This workflow integrates 9 different services: stickyNote, httpRequest, Ntfy, telegram, scheduleTrigg..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Sheets"
  - "Schedule Trigger"
  - "Http Request"
  - "Sticky Note"
  - "Switch"
  - "Gmail"
  - "Ntfy"
  - "Telegram"
downloadUrl: "/blueprints/imported/template-ssl-expiry-alert-system.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Google Sheets"
  - "Schedule Trigger"
steps:
  - stepNumber: 1
    title: "URLs to Monitor"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 2
    title: "Weekly Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 3
    title: "Fetch URLs"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Check SSL"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note3"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note4"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Sheets, Schedule Trigger, Http Request, Sticky Note, Switch, Gmail, Ntfy, Telegram natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Sheets, Schedule Trigger, Http Request, Sticky Note, Switch, Gmail, Ntfy, Telegram

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Sheets, Schedule Trigger, Http Request, Sticky Note, Switch, Gmail, Ntfy, Telegram and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
