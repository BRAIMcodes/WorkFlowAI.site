---
title: "Jira Retrospective"
description: "Automated workflow: Jira Retrospective. This workflow integrates 11 different services: stickyNote, agent, summarize, set, stopAndError. It contains 15 nodes..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Jira"
  - "Set"
  - "Summarize"
  - "Google Docs"
  - "If"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/jira-retrospective.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Jira"
  - "Set"
steps:
  - stepNumber: 1
    title: "Jira Get All Issues"
    description: "Processes and automates operations via the Jira integration."
    tool: "Jira"
  - stepNumber: 2
    title: "Jira Get All Comments"
    description: "Processes and automates operations via the Jira integration."
    tool: "Jira"
  - stepNumber: 3
    title: "Edit Fields"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Summarize"
    description: "Processes and automates operations via the Summarize integration."
    tool: "Summarize"
  - stepNumber: 5
    title: "Google Docs"
    description: "Processes and automates operations via the Google Docs integration."
    tool: "Google Docs"
  - stepNumber: 6
    title: "Jira Trigger"
    description: "Processes and automates operations via the Jira integration."
    tool: "Jira"
  - stepNumber: 7
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Jira, Set, Summarize, Google Docs, If, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Jira, Set, Summarize, Google Docs, If, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Jira, Set, Summarize, Google Docs, If, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
