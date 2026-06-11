---
title: "Sentiment Analysis Tracking on Support Issues with Linear and Slack"
description: "Integrate Split Out and OpenAI and Set and Split In Batches and Airtable and Switch and Graphql and Schedule Trigger and Remove Duplicates and Slack and Stic..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Split Out"
  - "OpenAI"
  - "Set"
  - "Split In Batches"
  - "Airtable"
  - "Switch"
  - "Graphql"
  - "Schedule Trigger"
  - "Remove Duplicates"
  - "Slack"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/sentiment-analysis-tracking-on-support-issues-with-linear-and-slack.json"
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
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "Issues to List"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 2
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "Combine Sentiment Analysis"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Copy of Issue"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "For Each Issue..."
    description: "Processes and automates operations via the Split In Batches integration."
    tool: "Split In Batches"
  - stepNumber: 6
    title: "Get Existing Sentiment"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 7
    title: "Update Row"
    description: "Processes and automates operations via the Airtable integration."
    tool: "Airtable"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 11 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Split Out, OpenAI, Set, Split In Batches, Airtable, Switch, Graphql, Schedule Trigger, Remove Duplicates, Slack, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Split Out, OpenAI, Set, Split In Batches, Airtable, Switch, Graphql, Schedule Trigger, Remove Duplicates, Slack, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Split Out, OpenAI, Set, Split In Batches, Airtable, Switch, Graphql, Schedule Trigger, Remove Duplicates, Slack, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
