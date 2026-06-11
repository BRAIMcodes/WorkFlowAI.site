---
title: "Lmchatgooglegemini Workflow"
description: "Automated workflow: Lmchatgooglegemini Workflow. This workflow processes data and performs automated tasks."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Hacker News"
  - "Http Request"
  - "Aggregate"
  - "Split Out"
  - "Form Trigger"
  - "Email Send"
  - "Markdown"
downloadUrl: "https://raw.githubusercontent.com/Zie619/n8n-workflows/main/workflows/Splitout/0680_Splitout_HTTP_Send_Webhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Hacker News"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "SearchAskHN"
    description: "Processes and automates operations via the Hacker News integration."
    tool: "Hacker News"
  - stepNumber: 2
    title: "FindHNComments"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "CombineIntoSingleText"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 4
    title: "SplitOutChildrenIDs"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "GetTopicFromToLearn"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 6
    title: "SendEmailWithTopResources"
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 7
    title: "Convert2HTML"
    description: "Processes and automates operations via the Markdown integration."
    tool: "Markdown"
---

Optimize your tech stack and automate workflows between Hacker News, Http Request, Aggregate, Split Out, Form Trigger, Email Send, Markdown natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Hacker News, Http Request, Aggregate, Split Out, Form Trigger, Email Send, Markdown

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Hacker News, Http Request, Aggregate, Split Out, Form Trigger, Email Send, Markdown and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
