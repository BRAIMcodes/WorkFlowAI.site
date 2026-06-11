---
title: "Erp AI Chatbot For Odoo Sales Module"
description: "Automated workflow: ERP AI chatbot for Odoo sales module. This workflow integrates 16 different services: convertToFile, stickyNote, scheduleTrigger, agent,..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Schedule Trigger"
  - "Convert To File"
  - "Read Write File"
  - "Odoo"
  - "If"
  - "Aggregate"
  - "Extract From File"
  - "Sticky Note"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/erp-ai-chatbot-for-odoo-sales-module.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "Schedule Trigger"
  - "Convert To File"
steps:
  - stepNumber: 1
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 2
    title: "Convert to File"
    description: "Processes and automates operations via the Convert To File integration."
    tool: "Convert To File"
  - stepNumber: 3
    title: "Save Summary to File"
    description: "Processes and automates operations via the Read Write File integration."
    tool: "Read Write File"
  - stepNumber: 4
    title: "Get All Opportunities from Odoo"
    description: "Processes and automates operations via the Odoo integration."
    tool: "Odoo"
  - stepNumber: 5
    title: "Read Summary From File"
    description: "Processes and automates operations via the Read Write File integration."
    tool: "Read Write File"
  - stepNumber: 6
    title: "If Summary Exists"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 7
    title: "Merge Opportunities"
    description: "Processes and automates operations via the Aggregate integration."
    tool: "Aggregate"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Schedule Trigger, Convert To File, Read Write File, Odoo, If, Aggregate, Extract From File, Sticky Note, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Schedule Trigger, Convert To File, Read Write File, Odoo, If, Aggregate, Extract From File, Sticky Note, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Schedule Trigger, Convert To File, Read Write File, Odoo, If, Aggregate, Extract From File, Sticky Note, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
