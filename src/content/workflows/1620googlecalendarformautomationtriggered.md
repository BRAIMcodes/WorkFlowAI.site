---
title: "1620_GoogleCalendar_Form_Automation_Triggered"
description: "Integrate Form Trigger and Form and Set and OpenAI and If and Gmail and Google Calendar and Sticky Note and Execute Workflow and Execute Workflow Trigger and..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Form Trigger"
  - "Form"
  - "Set"
  - "OpenAI"
  - "If"
  - "Gmail"
  - "Google Calendar"
  - "Sticky Note"
  - "Execute Workflow"
  - "Execute Workflow Trigger"
  - "LangChain"
downloadUrl: "/blueprints/imported/1620googlecalendarformautomationtriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Form Trigger"
  - "Form"
steps:
  - stepNumber: 1
    title: "n8n Form Trigger"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 2
    title: "Form End"
    description: "Processes and automates operations via the Form integration."
    tool: "Form"
  - stepNumber: 3
    title: "Enter Date & Time"
    description: "Processes and automates operations via the Form integration."
    tool: "Form"
  - stepNumber: 4
    title: "Get Form Values"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Terms & Conditions"
    description: "Processes and automates operations via the Form integration."
    tool: "Form"
  - stepNumber: 6
    title: "OpenAI Chat Model"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 7
    title: "Has Accepted?"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 18 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Form Trigger, Form, Set, OpenAI, If, Gmail, Google Calendar, Sticky Note, Execute Workflow, Execute Workflow Trigger, LangChain natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Form Trigger, Form, Set, OpenAI, If, Gmail, Google Calendar, Sticky Note, Execute Workflow, Execute Workflow Trigger, LangChain

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Form Trigger, Form, Set, OpenAI, If, Gmail, Google Calendar, Sticky Note, Execute Workflow, Execute Workflow Trigger, LangChain and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
