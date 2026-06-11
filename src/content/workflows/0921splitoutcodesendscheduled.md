---
title: "Splitout Code Send Scheduled"
description: "Integrate Slack and Set and Code and Split Out and Aggregate and Filter and Gemini and LangChain and Split In Batches and Execute Workflow Trigger and Switch..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Slack"
  - "Set"
  - "Code"
  - "Split Out"
  - "Aggregate"
  - "Filter"
  - "Gemini"
  - "LangChain"
  - "Split In Batches"
  - "Execute Workflow Trigger"
  - "Switch"
  - "Execute Workflow"
  - "If"
  - "Sticky Note"
  - "Schedule Trigger"
downloadUrl: "/blueprints/imported/0921splitoutcodesendscheduled.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Slack"
  - "Set"
steps:
  - stepNumber: 1
    title: "Get Last Week's Messages"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 2
    title: "Simplify Message"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "Group By User"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Messages to Items"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 6
    title: "Get User"
    description: "Processes and automates operations via the Slack integration."
    tool: "Slack"
  - stepNumber: 7
    title: "Aggregate"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 39 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Slack, Set, Code, Split Out, Aggregate, Filter, Gemini, LangChain, Split In Batches, Execute Workflow Trigger, Switch, Execute Workflow, If, Sticky Note, Schedule Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Slack, Set, Code, Split Out, Aggregate, Filter, Gemini, LangChain, Split In Batches, Execute Workflow Trigger, Switch, Execute Workflow, If, Sticky Note, Schedule Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Slack, Set, Code, Split Out, Aggregate, Filter, Gemini, LangChain, Split In Batches, Execute Workflow Trigger, Switch, Execute Workflow, If, Sticky Note, Schedule Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
