---
title: "Telegram Bot with Supabase memory and OpenAI assistant integration"
description: "Integrate Telegram and Http Request and Supabase and Merge and If and Sticky Note automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Telegram"
  - "Http Request"
  - "Supabase"
  - "Merge"
  - "If"
  - "Sticky Note"
downloadUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram Bot with Supabase memory and OpenAI assistant integration.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Telegram"
  - "Http Request"
steps:
  - stepNumber: 1
    title: "Get New Message"
    description: "Processes and automates operations via the Telegram integration."
    tool: "Telegram"
  - stepNumber: 2
    title: "OPENAI - Create thread"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Create User"
    description: "Processes and automates operations via the Supabase integration."
    tool: "Supabase"
  - stepNumber: 4
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 5
    title: "OPENAI - Send message"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "OPENAI - Run assistant"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "OPENAI - Get messages"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 10 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Telegram, Http Request, Supabase, Merge, If, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Telegram, Http Request, Supabase, Merge, If, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file from the GitHub repository.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Telegram, Http Request, Supabase, Merge, If, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
