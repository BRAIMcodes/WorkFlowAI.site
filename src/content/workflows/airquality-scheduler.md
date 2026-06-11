---
title: "Air Quality Scheduler"
description: "Automated workflow: AirQuality Scheduler. This workflow integrates 9 different services: stickyNote, httpRequest, gmailTool, agent, scheduleTrigger. It conta..."
timeSaved: "8 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Http Request"
  - "Gmail"
  - "Schedule Trigger"
  - "Sticky Note"
  - "Set"
downloadUrl: "/blueprints/imported/airquality-scheduler.json"
category: "Operations"
persona: "Operations Managers"
difficulty: "Advanced"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags:
  - "Operations"
  - "n8n"
  - "Http Request"
  - "Gmail"
steps:
  - stepNumber: 1
    title: "Get Air data"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 2
    title: "Get Pollen data"
    description: "Processes and automates operations via the Http Request integration."
    tool: "Http Request"
  - stepNumber: 3
    title: "Gmail"
    description: "Processes and automates operations via the Gmail integration."
    tool: "Gmail"
  - stepNumber: 4
    title: "Schedule Trigger"
    description: "Processes and automates operations via the Schedule Trigger integration."
    tool: "Schedule Trigger"
  - stepNumber: 5
    title: "Sticky Note"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 6
    title: "Sticky Note1"
    description: "Processes and automates operations via the Sticky Note integration."
    tool: "Sticky Note"
  - stepNumber: 7
    title: "Set Your Location Coordinates"
    description: "Processes and automates operations via the Set integration."
    tool: "Set"
  - stepNumber: 8
    title: "Finalize Pipeline Processing"
    description: "Runs the remaining 2 actions to complete the workflow."
    tool: "n8n"
---

Optimize your tech stack and automate workflows between Http Request, Gmail, Schedule Trigger, Sticky Note, Set natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: Http Request, Gmail, Schedule Trigger, Sticky Note, Set

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing Http Request, Gmail, Schedule Trigger, Sticky Note, Set and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
