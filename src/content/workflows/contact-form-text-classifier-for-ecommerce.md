---
title: "Contact Form Text Classifier for eCommerce"
description: "Automated workflow: Contact Form Text Classifier for eCommerce. This workflow integrates 7 different services: textClassifier, stickyNote, formTrigger, stopA..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Form Trigger"
  - "Email Send"
  - "Google Sheets"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/contact-form-text-classifier-for-ecommerce.json"
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
  - "Email Send"
steps:
  - stepNumber: 1
    title: "On form submission"
    description: "Processes and automates operations via the Form Trigger integration."
    tool: "Form Trigger"
  - stepNumber: 2
    title: "Prod. Dep."
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 3
    title: "Quote Dep."
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 4
    title: "Gen. Dep."
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 5
    title: "Order Dep."
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 6
    title: "Other Dep."
    description: "Processes and automates operations via the Email Send integration."
    tool: "Email Send"
  - stepNumber: 7
    title: "Quote DB"
    description: "Processes and automates operations via the Google Sheets integration."
    tool: "Google Sheets"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 5 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Form Trigger, Email Send, Google Sheets, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Form Trigger, Email Send, Google Sheets, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Form Trigger, Email Send, Google Sheets, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
