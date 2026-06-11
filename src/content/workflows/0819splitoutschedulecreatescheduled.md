---
title: "Splitout Schedule Create Scheduled"
description: "Integrate Schedule Trigger and OpenAI and LangChain and Jira and Split In Batches and Remove Duplicates and Set and Sticky Note and Split Out and Summarize a..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "OpenAI"
  - "LangChain"
  - "Jira"
  - "Split In Batches"
  - "Remove Duplicates"
  - "Set"
  - "Sticky Note"
  - "Split Out"
  - "Summarize"
  - "Sort"
  - "If"
downloadUrl: "/blueprints/imported/0819splitoutschedulecreatescheduled.json"
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
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Embeddings OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 3
    title: "Default Data Loader"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "Recursive Character Text Splitter"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "Issues Similarity Database"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 6
    title: "Supabase Vector Store"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "Embeddings OpenAI1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, OpenAI, LangChain, Jira, Split In Batches, Remove Duplicates, Set, Sticky Note, Split Out, Summarize, Sort, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, OpenAI, LangChain, Jira, Split In Batches, Remove Duplicates, Set, Sticky Note, Split Out, Summarize, Sort, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, OpenAI, LangChain, Jira, Split In Batches, Remove Duplicates, Set, Sticky Note, Split Out, Summarize, Sort, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
