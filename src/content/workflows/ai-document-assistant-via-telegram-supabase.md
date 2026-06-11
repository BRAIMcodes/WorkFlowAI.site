---
title: "AI Document Assistant Via Telegram + Supabase"
description: "Automated workflow: AI Document Assistant via Telegram + Supabase. This workflow integrates 20 different services: stickyNote, textSplitterRecursiveCharacter..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Open Weather Map Tool"
  - "Telegram"
  - "Extract From File"
  - "Sticky Note"
  - "Switch"
  - "Aggregate"
  - "Split Out"
  - "Code"
  - "Set"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/ai-document-assistant-via-telegram-supabase.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Customer Support"
  - "n8n"
  - "Open Weather Map Tool"
  - "Telegram"
steps:
  - stepNumber: 1
    title: "OpenWeatherMap"
    description: "Processes and automates operations via the Open Weather Map Tool integration."
    tool: "Open Weather Map Tool"
  - stepNumber: 2
    title: "Telegram Trigger"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 3
    title: "Telegram"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 4
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 5
    title: "Sticky Note10"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note11"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Telegram - Embedding Complete"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 12 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Open Weather Map Tool, Telegram, Extract From File, Sticky Note, Switch, Aggregate, Split Out, Code, Set, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Open Weather Map Tool, Telegram, Extract From File, Sticky Note, Switch, Aggregate, Split Out, Code, Set, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Open Weather Map Tool, Telegram, Extract From File, Sticky Note, Switch, Aggregate, Split Out, Code, Set, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
