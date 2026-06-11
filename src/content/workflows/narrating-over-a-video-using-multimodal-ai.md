---
title: "Narrating over a Video using Multimodal AI"
description: "Integrate OpenAI and Code and Split Out and Http Request and Convert To File and Manual Trigger and Aggregate and Google Drive and Sticky Note and Wait and S..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "OpenAI"
  - "Code"
  - "Split Out"
  - "Http Request"
  - "Convert To File"
  - "Manual Trigger"
  - "Aggregate"
  - "Google Drive"
  - "Sticky Note"
  - "Wait"
  - "Split In Batches"
  - "Edit Image"
  - "LangChain"
downloadUrl: "/blueprints/imported/narrating-over-a-video-using-multimodal-ai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "OpenAI"
  - "Code"
steps:
  - stepNumber: 1
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 2
    title: "Capture Frames"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "Split Out Frames"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 4
    title: "Download Video"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Convert to Binary"
    description: "Processes and automates operations via the Convert To File integration."
    tool: "Convert To File"
  - stepNumber: 6
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 7
    title: "Combine Script"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 14 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between OpenAI, Code, Split Out, Http Request, Convert To File, Manual Trigger, Aggregate, Google Drive, Sticky Note, Wait, Split In Batches, Edit Image, LangChain natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: OpenAI, Code, Split Out, Http Request, Convert To File, Manual Trigger, Aggregate, Google Drive, Sticky Note, Wait, Split In Batches, Edit Image, LangChain

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing OpenAI, Code, Split Out, Http Request, Convert To File, Manual Trigger, Aggregate, Google Drive, Sticky Note, Wait, Split In Batches, Edit Image, LangChain and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
