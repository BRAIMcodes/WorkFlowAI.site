---
title: "Analyze & Sort Suspicious Email Contents With Chat GPT"
description: "Integrate Gmail and Microsoft Outlook Trigger and Http Request and Set and Code and OpenAI and Jira and Convert To File and Sticky Note and If automatically..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Gmail"
  - "Microsoft Outlook Trigger"
  - "Http Request"
  - "Set"
  - "Code"
  - "OpenAI"
  - "Jira"
  - "Convert To File"
  - "Sticky Note"
  - "If"
downloadUrl: "/blueprints/imported/analyze-sort-suspicious-email-contents-with-chatgpt.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Gmail"
  - "Microsoft Outlook Trigger"
steps:
  - stepNumber: 1
    title: "Gmail Trigger"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 2
    title: "Microsoft Outlook Trigger"
    description: "Processes and automates operations via the Microsoft Outlook Trigger integration."
    tool: "Microsoft Outlook Trigger"
  - stepNumber: 3
    title: "Screenshot HTML"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Retrieve Screenshot"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Set Outlook Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Set Gmail Variables"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 7
    title: "Retrieve Headers of Email"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 18 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Gmail, Microsoft Outlook Trigger, Http Request, Set, Code, OpenAI, Jira, Convert To File, Sticky Note, If natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Gmail, Microsoft Outlook Trigger, Http Request, Set, Code, OpenAI, Jira, Convert To File, Sticky Note, If

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Gmail, Microsoft Outlook Trigger, Http Request, Set, Code, OpenAI, Jira, Convert To File, Sticky Note, If and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
