---
title: "AI Agent To Chat With Files In Supabase Storage"
description: "Integrate Http Request and LangChain and Extract From File and OpenAI and Supabase and If and Split In Batches and Manual Trigger and Aggregate and Switch an..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "LangChain"
  - "Extract From File"
  - "OpenAI"
  - "Supabase"
  - "If"
  - "Split In Batches"
  - "Manual Trigger"
  - "Aggregate"
  - "Switch"
  - "Merge"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/ai-agent-to-chat-with-files-in-supabase-storage.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "LangChain"
steps:
  - stepNumber: 1
    title: "Get All files"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Default Data Loader"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 3
    title: "Recursive Character Text Splitter"
    description: "Processes and automates operations via the LangChain integration."
    tool: "LangChain"
  - stepNumber: 4
    title: "Extract Document PDF"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Embeddings OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 6
    title: "Create File record2"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 7
    title: "If"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 26 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, LangChain, Extract From File, OpenAI, Supabase, If, Split In Batches, Manual Trigger, Aggregate, Switch, Merge, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, LangChain, Extract From File, OpenAI, Supabase, If, Split In Batches, Manual Trigger, Aggregate, Switch, Merge, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, LangChain, Extract From File, OpenAI, Supabase, If, Split In Batches, Manual Trigger, Aggregate, Switch, Merge, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
