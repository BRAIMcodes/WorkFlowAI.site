---
title: "Schedule Removeduplicates Create Scheduled"
description: "Integrate Schedule Trigger and Jira and Set and OpenAI and LangChain and Split In Batches and Aggregate and Sticky Note and Remove Duplicates automatically u..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Jira"
  - "Set"
  - "OpenAI"
  - "LangChain"
  - "Split In Batches"
  - "Aggregate"
  - "Sticky Note"
  - "Remove Duplicates"
downloadUrl: "/blueprints/imported/0907scheduleremoveduplicatescreatescheduled.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Schedule Trigger"
  - "Jira"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Get Open Tickets"
    description: "Processes and automates operations via the Jira integration."
    tool: "Jira"
  - stepNumber: 3
    title: "Simplify Ticket"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Structured Output Parser"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Label, Prioritize & Rewrite"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "Update Labels, Priority and Description"
    description: "Processes and automates operations via the Jira integration."
    tool: "Jira"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 19 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Jira, Set, OpenAI, LangChain, Split In Batches, Aggregate, Sticky Note, Remove Duplicates natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Jira, Set, OpenAI, LangChain, Split In Batches, Aggregate, Sticky Note, Remove Duplicates

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Jira, Set, OpenAI, LangChain, Split In Batches, Aggregate, Sticky Note, Remove Duplicates and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
