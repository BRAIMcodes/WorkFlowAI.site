---
title: "UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports"
description: "Automated workflow: UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports. This workflow integrates 13 different services: stickyNote,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Analytics Tool"
  - "Manual Trigger"
  - "Set"
  - "Code"
  - "Airtable"
  - "Http Request"
  - "Schedule Trigger"
  - "Gmail"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Code/1644_Code_Schedule_Automation_Scheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Analytics Tool"
  - "Manual Trigger"
steps:
  - stepNumber: 1
    title: "Google Analytics"
    description: "Processes and automates operations via the Google Analytics Tool integration."
    tool: "Google Analytics Tool"
  - stepNumber: 2
    title: "Create UTM Link & Send To Database"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 3
    title: "Set UTM Parameters For Link"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Create UTM Link With Parameters"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 5
    title: "Submit UTM Link To Database"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 6
    title: "Create QR Code With Submitted QR Link"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Schedule Google Analytics Report To Marketing Manager"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Analytics Tool, Manual Trigger, Set, Code, Airtable, Http Request, Schedule Trigger, Gmail, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Analytics Tool, Manual Trigger, Set, Code, Airtable, Http Request, Schedule Trigger, Gmail, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Analytics Tool, Manual Trigger, Set, Code, Airtable, Http Request, Schedule Trigger, Gmail, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
