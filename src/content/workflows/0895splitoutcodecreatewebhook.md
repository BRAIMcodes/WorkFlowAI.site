---
title: "0895_Splitout_Code_Create_Webhook"
description: "Integrate Split Out and Http Request and Code and Google Sheets and Sticky Note and Set and Manual Trigger and Form Trigger and Extract From File and Merge a..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "Http Request"
  - "Code"
  - "Google Sheets"
  - "Sticky Note"
  - "Set"
  - "Manual Trigger"
  - "Form Trigger"
  - "Extract From File"
  - "Merge"
  - "If"
  - "Form"
  - "Filter"
downloadUrl: "/blueprints/imported/0895splitoutcodecreatewebhook.json"
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
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Split by object"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "Fetch properties from Hubspot"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Define crm_type"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Split results"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Transforms the results"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Append to Google sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Erase Google sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 29 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, Http Request, Code, Google Sheets, Sticky Note, Set, Manual Trigger, Form Trigger, Extract From File, Merge, If, Form, Filter natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, Http Request, Code, Google Sheets, Sticky Note, Set, Manual Trigger, Form Trigger, Extract From File, Merge, If, Form, Filter

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, Http Request, Code, Google Sheets, Sticky Note, Set, Manual Trigger, Form Trigger, Extract From File, Merge, If, Form, Filter and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
