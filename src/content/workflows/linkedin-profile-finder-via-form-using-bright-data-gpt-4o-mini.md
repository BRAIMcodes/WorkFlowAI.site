---
title: "LinkedIn Profile Finder via Form using Bright Data & GPT-4o-mini"
description: "Automated workflow: LinkedIn Profile Finder via Form using Bright Data & GPT-4o-mini. This workflow processes data and performs automated tasks."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Html"
  - "Form Trigger"
  - "Bright Data"
  - "Form"
  - "Filter"
  - "Limit"
  - "Split Out"
  - "If"
  - "Set"
  - "Merge"
  - "Email Send"
downloadUrl: "/blueprints/imported/linkedin-profile-finder-via-form-using-bright-data-gpt-4o-mini.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Html"
  - "Form Trigger"
steps:
  - stepNumber: 1
    title: "Extract Body and Title from Website"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 2
    title: "When User Completes Form"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 3
    title: "Get LinkedIn Entry on Google"
    description: "Processes and automates operations via the Bright Data integration."
    tool: "Bright Data"
  - stepNumber: 4
    title: "Form Not Found"
    description: "Processes and automates operations via the Form integration."
    tool: "Form"
  - stepNumber: 5
    title: "Get only Matching Profiles"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 6
    title: "Limit to 1 Profile"
    description: "Processes and automates operations via the Limit integration."
    tool: "Limit"
  - stepNumber: 7
    title: "Extract Parsed Results"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 9 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Html, Form Trigger, Bright Data, Form, Filter, Limit, Split Out, If, Set, Merge, Email Send natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Html, Form Trigger, Bright Data, Form, Filter, Limit, Split Out, If, Set, Merge, Email Send

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Html, Form Trigger, Bright Data, Form, Filter, Limit, Split Out, If, Set, Merge, Email Send and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
