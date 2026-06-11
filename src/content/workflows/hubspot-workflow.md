---
title: "Hubspot Workflow"
description: "Automated workflow: Hubspot Workflow. This workflow integrates 10 different services: stickyNote, formTrigger, hubspot, gmailTool, agent. It contains 15 node..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "HubSpot"
  - "Sticky Note"
  - "Form Trigger"
  - "Form"
  - "Set"
  - "Gmail"
  - "Stop And Error"
downloadUrl: "/blueprints/imported/hubspot-workflow.json"
category: "Sales"
persona: "Sales Reps"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Sales"
  - "n8n"
  - "HubSpot"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "HubSpot"
    description: "Processes and automates operations via the HubSpot integration."
    tool: "HubSpot"
  - stepNumber: 2
    title: "HubSpot1"
    description: "Processes and automates operations via the HubSpot integration."
    tool: "HubSpot"
  - stepNumber: 3
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 4
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 5
    title: "Enter Client Transcript"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 6
    title: "Form"
    description: "Processes and automates operations via the Form integration."
    tool: "Form"
  - stepNumber: 7
    title: "Define routing emails here"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between HubSpot, Sticky Note, Form Trigger, Form, Set, Gmail, Stop And Error natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: HubSpot, Sticky Note, Form Trigger, Form, Set, Gmail, Stop And Error

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing HubSpot, Sticky Note, Form Trigger, Form, Set, Gmail, Stop And Error and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
