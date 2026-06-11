---
title: "Extract text from PDF and image using Vertex AI (Gemini) into CSV"
description: "Automated workflow: Extract text from PDF and image using Vertex AI (Gemini) into CSV. This workflow integrates 10 different services: convertToFile, stickyN..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Google Drive"
  - "Switch"
  - "Extract From File"
  - "Http Request"
  - "Convert To File"
  - "Sticky Note"
downloadUrl: "/blueprints/imported/extract-text-from-pdf-and-image-using-vertex-ai-gemini-into-csv.json"
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
  - "Switch"
steps:
  - stepNumber: 1
    title: "Get PDF or Images"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Route based on PDF or Image"
    description: "Processes and automates operations via the Switch integration."
    tool: "Switch"
  - stepNumber: 3
    title: "Download PDF"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 4
    title: "Download Image"
    description: "Processes and automates operations via the Google Drive integration."
    tool: "Google Drive"
  - stepNumber: 5
    title: "Extract data from PDF"
    description: "Processes and automates operations via the Extract From File integration."
    tool: "Extract From File"
  - stepNumber: 6
    title: "Send data to A.I."
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 7
    title: "Convert to CSV"
    description: "Processes and automates operations via the Convert To File integration."
    tool: "Convert To File"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 7 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Google Drive, Switch, Extract From File, Http Request, Convert To File, Sticky Note natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Google Drive, Switch, Extract From File, Http Request, Convert To File, Sticky Note

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Google Drive, Switch, Extract From File, Http Request, Convert To File, Sticky Note and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
