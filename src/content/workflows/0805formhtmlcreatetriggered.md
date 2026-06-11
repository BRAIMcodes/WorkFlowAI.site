---
title: "Form HTML Create Triggered"
description: "Integrate Bright Data and Document Generator and Split Out and Email Send and Form and Html and OpenAI and Form Trigger automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Bright Data"
  - "Document Generator"
  - "Split Out"
  - "Email Send"
  - "Form"
  - "Html"
  - "OpenAI"
  - "Form Trigger"
downloadUrl: "/blueprints/imported/0805formhtmlcreatetriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Bright Data"
  - "Document Generator"
steps:
  - stepNumber: 1
    title: "Get MediaMarkt Offers Website"
    description: "Processes and automates operations via the Bright Data integration."
    tool: "Bright Data"
  - stepNumber: 2
    title: "Create HTML for Email"
    description: "Processes and automates operations via the Document Generator integration."
    tool: "Document Generator"
  - stepNumber: 3
    title: "Extract items from results"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 4
    title: "Notify End User by Email"
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 5
    title: "Show Form Results Page"
    description: "Processes and automates operations via the Form integration."
    tool: "Form"
  - stepNumber: 6
    title: "Extract Body and Title from Website"
    description: "Processes and automates operations via the Html integration."
    tool: "Html"
  - stepNumber: 7
    title: "Generate List of Deals by Category"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 8
    title: "When User Completes Form"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
---

Optimize your tech stack and automate workflows between Bright Data, Document Generator, Split Out, Email Send, Form, Html, OpenAI, Form Trigger natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Bright Data, Document Generator, Split Out, Email Send, Form, Html, OpenAI, Form Trigger

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Bright Data, Document Generator, Split Out, Email Send, Form, Html, OpenAI, Form Trigger and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
