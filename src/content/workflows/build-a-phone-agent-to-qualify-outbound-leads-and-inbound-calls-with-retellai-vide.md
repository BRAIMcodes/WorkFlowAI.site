---
title: "Build A Phone Agent To Qualify Outbound Leads And Inbound Calls With Retell AI Vide"
description: "Automated workflow: Build a Phone Agent to qualify outbound leads and inbound calls with RetellAI -vide. This workflow integrates 13 different services: webh..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Sticky Note"
  - "Google Sheets"
  - "Twilio"
  - "Wait"
  - "Http Request"
  - "Webhook"
  - "Respond To Webhook"
  - "Filter"
  - "If"
  - "Gmail"
downloadUrl: "/blueprints/imported/build-a-phone-agent-to-qualify-outbound-leads-and-inbound-calls-with-retellai-vide.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Sticky Note"
  - "Google Sheets"
steps:
  - stepNumber: 1
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 2
    title: "Sticky Note4"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Sticky Note2"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Detect new lead in Google Sheets"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 5
    title: "Send SMS reminder to call lead in 5 minutes"
    description: "Processes and automates operations via the Twilio integration."
    tool: "Twilio"
  - stepNumber: 6
    title: "Wait 5 minutes before making call"
    description: "Processes and automates operations via the Wait integration."
    tool: "Wait"
  - stepNumber: 7
    title: "Call new lead using RetellAI"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Sticky Note, Google Sheets, Twilio, Wait, Http Request, Webhook, Respond To Webhook, Filter, If, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Sticky Note, Google Sheets, Twilio, Wait, Http Request, Webhook, Respond To Webhook, Filter, If, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Sticky Note, Google Sheets, Twilio, Wait, Http Request, Webhook, Respond To Webhook, Filter, If, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
