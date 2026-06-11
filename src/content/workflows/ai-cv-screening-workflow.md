---
title: "AI CV Screening Workflow"
description: "Automated workflow: AI CV Screening Workflow. This workflow processes data and performs automated tasks."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Extract From File"
  - "Form Trigger"
  - "Google Sheets"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/ai-cv-screening-workflow.json"
category: "Recruiting"
persona: "Recruiters"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Recruiting"
  - "n8n"
  - "Gmail"
  - "Extract From File"
steps:
  - stepNumber: 1
    title: "Confirmation of CV Submission"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Inform HR New CV Received"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 3
    title: "Convert Binary to Json"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 4
    title: "Application Form"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 5
    title: "Candidate Lists"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 6
    title: "Error Handler"
    description: "Processes and automates operations via the Stop And Error integration."
    tool: "Stop And Error"
---

Optimize your tech stack and automate workflows between Gmail, Extract From File, Form Trigger, Google Sheets, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Extract From File, Form Trigger, Google Sheets, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Extract From File, Form Trigger, Google Sheets, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
