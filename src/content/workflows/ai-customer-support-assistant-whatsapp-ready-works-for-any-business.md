---
title: "AI Customer-Support Assistant · WhatsApp Ready · Works for Any Business"
description: "Automated workflow: AI Customer-Support Assistant · WhatsApp Ready · Works for Any Business. This workflow integrates 10 different services: stickyNote, code..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "WhatsApp"
  - "Code"
  - "If"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/ai-customer-support-assistant-whatsapp-ready-works-for-any-business.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "WhatsApp"
  - "Code"
steps:
  - stepNumber: 1
    title: "WhatsApp Trigger"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 2
    title: "cleanAnswer"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 3
    title: "24-hour window check"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 4
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Send Pre-approved Template Message to Reopen the Conversation"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 6
    title: "Send AI Agent's Answer"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 7
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between WhatsApp, Code, If, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: WhatsApp, Code, If, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing WhatsApp, Code, If, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
