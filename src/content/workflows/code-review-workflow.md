---
title: "Code Review Workflow"
description: "Automated workflow: Code Review workflow. This workflow integrates 9 different services: stickyNote, httpRequest, code, agent, githubTrigger. It contains 18..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "GitHub"
  - "Http Request"
  - "Code"
  - "Google Sheets"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/code-review-workflow.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "GitHub"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "PR Trigger"
    description: "Processes and automates operations via the GitHub integration."
    tool: "GitHub"
  - stepNumber: 2
    title: "Get file's Diffs from PR"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Create target Prompt from PR Diffs"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "GitHub Robot"
    description: "Processes and automates operations via the GitHub integration."
    tool: "GitHub"
  - stepNumber: 5
    title: "Add Label to PR"
    description: "Processes and automates operations via the GitHub integration."
    tool: "GitHub"
  - stepNumber: 6
    title: "Code Best Practices"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between GitHub, Http Request, Code, Google Sheets, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: GitHub, Http Request, Code, Google Sheets, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing GitHub, Http Request, Code, Google Sheets, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
