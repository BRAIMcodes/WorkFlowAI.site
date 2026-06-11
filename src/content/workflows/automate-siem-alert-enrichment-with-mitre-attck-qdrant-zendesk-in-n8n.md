---
title: "Automate SIEM Alert Enrichment With MITRE Att&ck, Qdrant & Zendesk In n8n"
description: "Integrate LangChain and OpenAI and Split Out and Extract From File and Manual Trigger and Split In Batches and Sticky Note and Google Drive and Zendesk autom..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "LangChain"
  - "OpenAI"
  - "Split Out"
  - "Extract From File"
  - "Manual Trigger"
  - "Split In Batches"
  - "Sticky Note"
  - "Google Drive"
  - "Zendesk"
downloadUrl: "/blueprints/imported/automate-siem-alert-enrichment-with-mitre-attck-qdrant-zendesk-in-n8n.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "LangChain"
  - "OpenAI"
steps:
  - stepNumber: 1
    title: "When chat message received"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 2
    title: "AI Agent"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 3
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 4
    title: "Split Out"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 5
    title: "Embeddings OpenAI1"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 6
    title: "Default Data Loader"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 7
    title: "Token Splitter1"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 18 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between LangChain, OpenAI, Split Out, Extract From File, Manual Trigger, Split In Batches, Sticky Note, Google Drive, Zendesk natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: LangChain, OpenAI, Split Out, Extract From File, Manual Trigger, Split In Batches, Sticky Note, Google Drive, Zendesk

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing LangChain, OpenAI, Split Out, Extract From File, Manual Trigger, Split In Batches, Sticky Note, Google Drive, Zendesk and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
