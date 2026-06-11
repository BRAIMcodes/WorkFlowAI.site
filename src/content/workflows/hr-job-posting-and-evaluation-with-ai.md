---
title: "HR Job Posting and Evaluation with AI"
description: "Automated workflow: HR Job Posting and Evaluation with AI. This workflow integrates 16 different services: stickyNote, formTrigger, airtable, agent, googleDr..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Form Trigger"
  - "Airtable"
  - "Google Drive"
  - "Set"
  - "Sticky Note"
  - "Extract From File"
  - "If"
  - "Form"
  - "Email Send"
  - "Google Calendar"
downloadUrl: "/blueprints/imported/hr-job-posting-and-evaluation-with-ai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Form Trigger"
  - "Airtable"
steps:
  - stepNumber: 1
    title: "On form submission"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 2
    title: "Airtable"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 3
    title: "Upload CV to google drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "applicant details"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "download CV"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 22 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Form Trigger, Airtable, Google Drive, Set, Sticky Note, Extract From File, If, Form, Email Send, Google Calendar natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Form Trigger, Airtable, Google Drive, Set, Sticky Note, Extract From File, If, Form, Email Send, Google Calendar

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Form Trigger, Airtable, Google Drive, Set, Sticky Note, Extract From File, If, Form, Email Send, Google Calendar and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
