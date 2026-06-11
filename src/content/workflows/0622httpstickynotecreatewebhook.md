---
title: "HTTP Stickynote Create Webhook"
description: "Integrate Http Request and Sticky Note and Set and OpenAI automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Sticky Note"
  - "Set"
  - "OpenAI"
downloadUrl: "/blueprints/imported/0622httpstickynotecreatewebhook.json"
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
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Upload Img to ImgBB for URL"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "ReSmush.it Image Optimisation"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Store Optimised Image ImgBB"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Sticky Note50"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Sticky Note51"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note52"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Sticky Note53"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Sticky Note, Set, OpenAI natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Sticky Note, Set, OpenAI

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Sticky Note, Set, OpenAI and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
