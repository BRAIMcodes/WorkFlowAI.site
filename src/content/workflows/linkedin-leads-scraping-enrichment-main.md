---
title: "Linked In Leads Scraping & Enrichment (main)"
description: "Automated workflow: LinkedIn Leads Scraping & Enrichment (Main). This workflow integrates 13 different services: stickyNote, formTrigger, httpRequest, google..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Form Trigger"
  - "Split Out"
  - "Google Sheets"
  - "Sticky Note"
  - "Set"
  - "Schedule Trigger"
  - "Http Request"
  - "Code"
  - "Merge"
  - "If"
downloadUrl: "/blueprints/imported/linkedin-leads-scraping-enrichment-main.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Form Trigger"
  - "Split Out"
steps:
  - stepNumber: 1
    title: "On form submission"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 2
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 3
    title: "Google Sheets Trigger"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Google Sheets Trigger2"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 5
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Clean Data"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 54 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Form Trigger, Split Out, Google Sheets, Sticky Note, Set, Schedule Trigger, Http Request, Code, Merge, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Form Trigger, Split Out, Google Sheets, Sticky Note, Set, Schedule Trigger, Http Request, Code, Merge, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Form Trigger, Split Out, Google Sheets, Sticky Note, Set, Schedule Trigger, Http Request, Code, Merge, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
