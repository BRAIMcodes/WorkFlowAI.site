---
title: "AI Email Inbox Auto Responder With Make.com And Chat GPT"
description: "Download the Make.com blueprint to build an automated email answering system that drafts context-aware replies using ChatGPT."
timeSaved: "6 hours/week"
costToRun: "~$0.01 per email"
primaryTool: "Make.com"
connectedApps:
  - "ChatGPT (GPT-4o)"
  - "Gmail"
  - "Google Sheets"
promptSnippet: |
  You are an expert customer relations assistant for a company called [Company_Name].
  Draft a helpful, professional, and concise reply to the following customer email:

  Subject: {{ 1.subject }}
  From: {{ 1.from }}
  Body: {{ 1.body }}

  Company FAQ reference:
  - Refund policy: We offer a [Refund_Policy].
  - Support hours: [Support_Hours].

  If the customer asks a technical question not covered in our FAQ, let them know that you are escalating this to our support team and they'll hear back within 24 hours.

  Draft a response and sign it off as "[Company_Name] Virtual Assistant". Do not include any brackets or placeholders.
promptVariables:
  - name: "Company_Name"
    label: "Company Name"
    placeholder: "SaaSify"
    defaultValue: "SaaSify"
  - name: "Refund_Policy"
    label: "Refund Policy Description"
    placeholder: "14-day refund policy"
    defaultValue: "14-day refund policy"
  - name: "Support_Hours"
    label: "Support Availability Hours"
    placeholder: "9 AM to 5 PM EST, Monday-Friday"
    defaultValue: "9 AM to 5 PM EST, Monday-Friday"
downloadUrl: "/blueprints/ai-email-responder-make-chatgpt.blueprint"
category: "Operations"
persona: "Operations Managers"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Watch New Emails"
    description: "Gmail module triggers when a new email arrives in your inbox or a specific labeled folder."
    tool: "Gmail"
  - stepNumber: 2
    title: "Analyze & Draft with ChatGPT"
    description: "GPT-4o reads the email, checks it against company policy, and drafts a contextual response."
    tool: "ChatGPT (GPT-4o)"
  - stepNumber: 3
    title: "Log Transaction"
    description: "Appends the original email details and the drafted AI response to a Google Sheet for auditing."
    tool: "Google Sheets"
  - stepNumber: 4
    title: "Create Draft or Auto-Send"
    description: "Gmail drafts a response inside the original email thread, allowing you to review before sending (or auto-sends directly)."
    tool: "Gmail"
---

Responding to repetitive customer queries takes up valuable time that could be spent building your product or closing deals. 

This workflow connects your Gmail inbox directly to OpenAI's GPT-4o, drafting responses to common inquiries automatically. By saving the message as a draft first, you retain final editorial control before the message is sent.

### Prerequisites
1. A **Make.com** account (formerly Integromat)
2. OpenAI API key (with access to GPT-4o)
3. A Google account (Gmail & Google Sheets)

### Setup Guide
1. **Import Blueprint:** Download the Make.com blueprint file and upload it to a new scenario.
2. **Authorize Integrations:** Authenticate Gmail and Google Sheets. Connect your OpenAI API key in the OpenAI module.
3. **Set Up Google Sheets Log:** Create a sheet with columns: `Date`, `Sender`, `Subject`, `Body`, `AI Draft`. Map the fields in the Google Sheets module.
4. **Test & Run:** Send a test email to your inbox, verify the draft is correctly generated in your Gmail drafts folder, and toggle the scenario to Active.
