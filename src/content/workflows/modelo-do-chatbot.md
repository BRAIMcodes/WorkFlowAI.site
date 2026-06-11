---
title: "Modelo Do Chatbot"
description: "Automated workflow: modelo do chatbot. This workflow integrates 9 different services: stickyNote, toolHttpRequest, mySqlTool, memoryPostgresChat, set. It con..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "If"
  - "Set"
  - "MySQL"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/modelo-do-chatbot.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Manual Trigger"
  - "If"
steps:
  - stepNumber: 1
    title: "Manual Trigger"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "If Node"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 3
    title: "Edit Fields1"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Edit Fields2"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Products in Daatabase"
    description: "Processes and automates operations via the MySQL integration."
    tool: "MySQL"
  - stepNumber: 6
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
---

Optimize your tech stack and automate workflows between Manual Trigger, If, Set, MySQL, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, If, Set, MySQL, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, If, Set, MySQL, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
