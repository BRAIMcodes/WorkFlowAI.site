---
title: "0625_Splitout_Code_Create_Triggered"
description: "Integrate Google Drive and Set and Merge and Sort and Aggregate and Form Trigger and Google Sheets and Convert To File and Split Out and If and Code and Open..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "Set"
  - "Merge"
  - "Sort"
  - "Aggregate"
  - "Form Trigger"
  - "Google Sheets"
  - "Convert To File"
  - "Split Out"
  - "If"
  - "Code"
  - "OpenAI"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/0625splitoutcodecreatetriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Drive"
  - "Set"
steps:
  - stepNumber: 1
    title: "create_folder"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "input_brief"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 3
    title: "new_lines"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "input_sections"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "section_text"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 6
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 7
    title: "Sort"
    description: "Processes and automates operations via the Sort integration."
    tool: "Sort"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 32 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, Set, Merge, Sort, Aggregate, Form Trigger, Google Sheets, Convert To File, Split Out, If, Code, OpenAI, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, Set, Merge, Sort, Aggregate, Form Trigger, Google Sheets, Convert To File, Split Out, If, Code, OpenAI, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, Set, Merge, Sort, Aggregate, Form Trigger, Google Sheets, Convert To File, Split Out, If, Code, OpenAI, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
