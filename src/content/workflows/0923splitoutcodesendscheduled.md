---
title: "Splitout Code Send Scheduled"
description: "Integrate Schedule Trigger and Microsoft Teams and OpenAI and LangChain and Set and Aggregate and Markdown and Sticky Note and Code and Split Out automatical..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Microsoft Teams"
  - "OpenAI"
  - "LangChain"
  - "Set"
  - "Aggregate"
  - "Markdown"
  - "Sticky Note"
  - "Code"
  - "Split Out"
downloadUrl: "/blueprints/imported/0923splitoutcodesendscheduled.json"
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
  - "Microsoft Teams"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Fetch Latest Channel Messages"
    description: "Processes and automates operations via the Microsoft Teams integration."
    tool: "Microsoft Teams"
  - stepNumber: 3
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "Team Member Weekly Report Agent"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 5
    title: "Merge Report With User Data"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "OpenAI Chat Model1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 7
    title: "Reports to Single List"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Microsoft Teams, OpenAI, LangChain, Set, Aggregate, Markdown, Sticky Note, Code, Split Out natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Microsoft Teams, OpenAI, LangChain, Set, Aggregate, Markdown, Sticky Note, Code, Split Out

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Microsoft Teams, OpenAI, LangChain, Set, Aggregate, Markdown, Sticky Note, Code, Split Out and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
