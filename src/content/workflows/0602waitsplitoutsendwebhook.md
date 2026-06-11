---
title: "Wait Splitout Send Webhook"
description: "Integrate WhatsApp and Http Request and LangChain and Set and Split Out and Switch and Sticky Note and Wait and Gemini automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "WhatsApp"
  - "Http Request"
  - "LangChain"
  - "Set"
  - "Split Out"
  - "Switch"
  - "Sticky Note"
  - "Wait"
  - "Gemini"
downloadUrl: "/blueprints/imported/0602waitsplitoutsendwebhook.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "WhatsApp"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "WhatsApp Trigger"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 2
    title: "Get Audio URL"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 3
    title: "Get Video URL"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 4
    title: "Get Image URL"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 5
    title: "Download Video"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Download Audio"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Download Image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 28 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between WhatsApp, Http Request, LangChain, Set, Split Out, Switch, Sticky Note, Wait, Gemini natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: WhatsApp, Http Request, LangChain, Set, Split Out, Switch, Sticky Note, Wait, Gemini

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing WhatsApp, Http Request, LangChain, Set, Split Out, Switch, Sticky Note, Wait, Gemini and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
