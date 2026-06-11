---
title: "AI Powered Whats App Chatbot For Text, Voice, Images & Pdfs"
description: "Automated workflow: AI-Powered WhatsApp Chatbot for Text, Voice, Images & PDFs. This workflow integrates 14 different services: stickyNote, httpRequest, code..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "WhatsApp"
  - "Http Request"
  - "Extract From File"
  - "If"
  - "Code"
  - "Set"
  - "Sticky Note"
  - "Switch"
downloadUrl: "/blueprints/imported/ai-powered-whatsapp-chatbot-for-text-voice-images-pdfs.json"
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
    title: "Download Image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Download Audio"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 4
    title: "Download File"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 5
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 6
    title: "Get File Url"
    description: "Processes and automates operations via the WhatsApp integration."
    tool: "WhatsApp"
  - stepNumber: 7
    title: "Only PDF File"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 19 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between WhatsApp, Http Request, Extract From File, If, Code, Set, Sticky Note, Switch natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: WhatsApp, Http Request, Extract From File, If, Code, Set, Sticky Note, Switch

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing WhatsApp, Http Request, Extract From File, If, Code, Set, Sticky Note, Switch and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
