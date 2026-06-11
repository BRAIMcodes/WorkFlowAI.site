---
title: "Search Linked In Companies, Score With AI And Add Them To Google Sheet CRM"
description: "Automated workflow: Search LinkedIn companies, Score with AI and add them to Google Sheet CRM. This workflow integrates 11 different services: stickyNote, ht..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split In Batches"
  - "Http Request"
  - "If"
  - "Set"
  - "Split Out"
  - "Google Sheets"
  - "Sticky Note"
  - "Wait"
  - "Manual Trigger"
downloadUrl: "/blueprints/imported/search-linkedin-companies-score-with-ai-and-add-them-to-google-sheet-crm.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Split In Batches"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Process Each Company"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 2
    title: "Get Company Info"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Filter Valid Companies"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "Is New Company?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Set Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Search Companies"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Extract Company Data"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split In Batches, Http Request, If, Set, Split Out, Google Sheets, Sticky Note, Wait, Manual Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split In Batches, Http Request, If, Set, Split Out, Google Sheets, Sticky Note, Wait, Manual Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split In Batches, Http Request, If, Set, Split Out, Google Sheets, Sticky Note, Wait, Manual Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
