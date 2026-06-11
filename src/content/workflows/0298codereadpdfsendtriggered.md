---
title: "0298_Code_Readpdf_Send_Triggered"
description: "Integrate Read P D F and Sticky Note and Set and If and Code and OpenAI and Merge and Google Drive and Gmail automatically using n8n."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Read P D F"
  - "Sticky Note"
  - "Set"
  - "If"
  - "Code"
  - "OpenAI"
  - "Merge"
  - "Google Drive"
  - "Gmail"
downloadUrl: "/blueprints/imported/0298codereadpdfsendtriggered.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Read P D F"
  - "Sticky Note"
steps:
  - stepNumber: 1
    title: "Read PDF"
    description: "Processes and automates operations via the Read P D F integration."
    tool: "Read P D F"
  - stepNumber: 2
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 3
    title: "Configure"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 4
    title: "Is PDF"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 5
    title: "Is matched"
    description: "Processes and automates operations via the If integration."
    tool: "If"
  - stepNumber: 6
    title: "Iterate over email attachments"
    description: "Processes and automates operations via the Code integration."
    tool: "Code"
  - stepNumber: 7
    title: "OpenAI matches PDF textual content"
    description: "Processes and automates operations via the OpenAI integration."
    tool: "OpenAI"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 6 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Read P D F, Sticky Note, Set, If, Code, OpenAI, Merge, Google Drive, Gmail natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Read P D F, Sticky Note, Set, If, Code, OpenAI, Merge, Google Drive, Gmail

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Read P D F, Sticky Note, Set, If, Code, OpenAI, Merge, Google Drive, Gmail and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
