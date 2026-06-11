---
title: "Remove Personally Identifiable Information (pii) From Csv Files With Open AI"
description: "Integrate Google Drive and Extract From File and OpenAI and Merge and Split Out and Code and Sticky Note automatically using n8n."
timeSaved: "5 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "Extract From File"
  - "OpenAI"
  - "Merge"
  - "Split Out"
  - "Code"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/remove-personally-identifiable-information-pii-from-csv-files-with-openai.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Intermediate"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Google Drive"
  - "Extract From File"
steps:
  - stepNumber: 1
    title: "Google Drive Trigger"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Google Drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 3
    title: "Extract from File"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 4
    title: "OpenAI"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 5
    title: "Merge"
    description: "Processes and automates operations via the Merge integration."
    tool: "Merge"
  - stepNumber: 6
    title: "Upload to Drive"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 7
    title: "Get filename"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 3 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, Extract From File, OpenAI, Merge, Split Out, Code, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, Extract From File, OpenAI, Merge, Split Out, Code, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, Extract From File, OpenAI, Merge, Split Out, Code, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
