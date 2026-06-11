---
title: "0948_Filter_Schedule_Create_Scheduled"
description: "Integrate Schedule Trigger and Google Sheets and Filter and If and Split In Batches and LangChain and Gemini and Gmail and Set and Sticky Note automatically..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Google Sheets"
  - "Filter"
  - "If"
  - "Split In Batches"
  - "LangChain"
  - "Gemini"
  - "Gmail"
  - "Set"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0948filterschedulecreatescheduled.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Schedule Trigger"
  - "Google Sheets"
steps:
  - stepNumber: 1
    title: "Scheduled Start: Daily Churn Check"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Fetch Customer Data from Sheet"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 3
    title: "Filter High Churn Risk & No Campaign Customers"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 4
    title: "Check if Eligible Customers Found"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Process Each Eligible Customer"
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 6
    title: "Generate Win-Back Offer"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "(LLM Model for Offer Generation)"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Google Sheets, Filter, If, Split In Batches, LangChain, Gemini, Gmail, Set, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Google Sheets, Filter, If, Split In Batches, LangChain, Gemini, Gmail, Set, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Google Sheets, Filter, If, Split In Batches, LangChain, Gemini, Gmail, Set, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
