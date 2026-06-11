---
title: "GitLab MR Auto-Review & Risk Assessment"
description: "Automated workflow: GitLab MR Auto-Review & Risk Assessment. This workflow integrates 12 different services: stickyNote, httpRequest, code, agent, merge. It..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Code"
  - "If"
  - "Merge"
  - "Sticky Note"
  - "GitLab"
  - "Gmail"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Gitlab/1895_Gitlab_Code_Automation_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Code"
steps:
  - stepNumber: 1
    title: "Extract Diff"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Distribution List Generator"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "If Some Change"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 4
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 5
    title: "Comment Back on MR"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "GitLab Trigger"
    description: "Processes and automates operations via the GitLab integration."
    tool: "GitLab"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 11 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Code, If, Merge, Sticky Note, GitLab, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Code, If, Merge, Sticky Note, GitLab, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Code, If, Merge, Sticky Note, GitLab, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
