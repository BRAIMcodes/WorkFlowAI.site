---
title: "1830_Splitout_Filter_Create_Webhook"
description: "Integrate Http Request and Split Out and Email Read Imap and Set and OpenAI and Filter and Sticky Note automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Split Out"
  - "Email Read Imap"
  - "Set"
  - "OpenAI"
  - "Filter"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/1830splitoutfiltercreatewebhook.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Split Out"
steps:
  - stepNumber: 1
    title: "Session"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Get Mailbox IDs"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 4
    title: "Email Trigger (IMAP)"
    description: "Processes and automates operations via the Email Read Imap integration."
    tool: "Email Read Imap"
  - stepNumber: 5
    title: "Get fields from source email"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 7
    title: "Filter for drafts folder"
    description: "Processes and automates operations via the Filter integration."
    tool: "Filter"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Split Out, Email Read Imap, Set, OpenAI, Filter, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Split Out, Email Read Imap, Set, OpenAI, Filter, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Split Out, Email Read Imap, Set, OpenAI, Filter, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
