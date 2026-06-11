---
title: "Automate PDF Image Extraction & Analysis With GPT 4o And Google Drive"
description: "Automated workflow: Automate PDF Image Extraction & Analysis with GPT-4o and Google Drive. This workflow integrates 10 different services: convertToFile, sti..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Manual Trigger"
  - "Sticky Note"
  - "Google Drive"
  - "Set"
  - "Http Request"
  - "Split Out"
  - "Code"
  - "Convert To File"
downloadUrl: "/blueprints/imported/automate-pdf-image-extraction-analysis-with-gpt-4o-and-google-drive.json"
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
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "When clicking ‘Test workflow’"
    description: "Processes and automates operations via the Manual Trigger integration."
    tool: "Manual Trigger"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Get pdf file"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Get all img_url"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 5
    title: "Extract pdf image"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Get image data"
    description: "Processes and automates operations via the Split Out integration."
    tool: "Split Out"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 4 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Manual Trigger, Sticky Note, Google Drive, Set, Http Request, Split Out, Code, Convert To File natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Manual Trigger, Sticky Note, Google Drive, Set, Http Request, Split Out, Code, Convert To File

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Manual Trigger, Sticky Note, Google Drive, Set, Http Request, Split Out, Code, Convert To File and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
