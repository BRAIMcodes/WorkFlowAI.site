---
title: "Learn Anything From Hn Get Top Resource Recommendations From Hacker News"
description: "Integrate Gemini and LangChain and Hacker News and Http Request and Aggregate and Split Out and Form Trigger and Email Send and Markdown automatically using..."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gemini"
  - "LangChain"
  - "Hacker News"
  - "Http Request"
  - "Aggregate"
  - "Split Out"
  - "Form Trigger"
  - "Email Send"
  - "Markdown"
downloadUrl: "/blueprints/imported/learn-anything-from-hn-get-top-resource-recommendations-from-hacker-news.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Gemini"
  - "LangChain"
steps:
  - stepNumber: 1
    title: "Google Gemini Chat Model"
    description: "Processes and automates operations via the Gemini integration."
    tool: "Gemini"
  - stepNumber: 2
    title: "Basic LLM Chain"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 3
    title: "SearchAskHN"
    description: "Processes and automates operations via the Hacker News integration."
    tool: "Hacker News"
  - stepNumber: 4
    title: "FindHNComments"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "CombineIntoSingleText"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 6
    title: "SplitOutChildrenIDs"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 7
    title: "GetTopicFromToLearn"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gemini, LangChain, Hacker News, Http Request, Aggregate, Split Out, Form Trigger, Email Send, Markdown natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gemini, LangChain, Hacker News, Http Request, Aggregate, Split Out, Form Trigger, Email Send, Markdown

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gemini, LangChain, Hacker News, Http Request, Aggregate, Split Out, Form Trigger, Email Send, Markdown and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
