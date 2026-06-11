---
title: "Auto-Sync Meeting Notes to CRM with Make.com and Claude"
description: "Sync Google Calendar meeting notes to HubSpot automatically � Claude extracts action items, deal updates, and next steps."
timeSaved: "3 hours/week"
costToRun: "~$0.02 per meeting"
primaryTool: "Make.com"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "Notion"
  - "HubSpot"
  - "Google Calendar"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Operations", "CRM", "Meetings", "Beginner-friendly"]
promptSnippet: |
  You are a CRM data specialist. Analyze the following meeting notes and extract structured information relevant to CRM updates.

  Meeting title: [MEETING_TITLE]
  Meeting date: [MEETING_DATE]
  Attendees: [ATTENDEES]
  Meeting notes: [MEETING_NOTES]

  Extract the following and return as valid JSON:

  {
    "action_items": [
      {
        "task": "...",
        "owner": "...",
        "due_date": "..." or null,
        "priority": "high" | "medium" | "low"
      }
    ],
    "next_steps": "...",
    "deal_stage_change": {
      "new_stage": "..." or null,
      "reason": "..." or null
    },
    "deal_amount_update": {
      "new_amount": number or null,
      "currency": "USD" or null
    },
    "key_concerns": "..." or null,
    "follow_up_date": "YYYY-MM-DD" or null,
    "contact_notes_summary": "A 2-3 sentence summary of this meeting for the CRM contact record. Professional tone."
  }

  Rules:
  - Only extract information explicitly stated in the notes. Do NOT infer or fabricate.
  - For action items, identify the owner by name if mentioned; use "Unassigned" if no owner is stated.
  - For deal stage changes, only flag if the notes explicitly mention moving to a new stage (e.g., "sending proposal", "verbal agreement", "moving to legal").
  - If a field has no relevant information in the notes, return null for that field.
  - Return valid JSON only. No additional text.
promptVariables:
  - name: "MEETING_TITLE"
    label: "Meeting Title"
    placeholder: "Q3 Renewal Discussion — Acme Corp"
    defaultValue: ""
  - name: "MEETING_DATE"
    label: "Meeting Date"
    placeholder: "2026-06-11"
    defaultValue: ""
  - name: "ATTENDEES"
    label: "Meeting Attendees"
    placeholder: "Jordan Lee (AE), Sam Rivera (Acme VP Sales), Dana Kim (Acme IT Lead)"
    defaultValue: ""
  - name: "MEETING_NOTES"
    label: "Full Meeting Notes"
    placeholder: "Paste Notion meeting notes here"
    defaultValue: ""
downloadUrl: "/blueprints/meeting-notes-to-crm-make-claude.json"
category: "Operations"
persona: "Operations Teams"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Google Calendar Meeting End Trigger"
    description: "Sync Google Calendar meeting notes to HubSpot automatically � Claude extracts action items, deal updates, and next steps."
    tool: "Make.com Google Calendar module"
  - stepNumber: 2
    title: "Fetch Notion Meeting Notes"
    description: "Sync Google Calendar meeting notes to HubSpot automatically � Claude extracts action items, deal updates, and next steps."
    tool: "Make.com Notion module"
  - stepNumber: 3
    title: "Claude Extracts Action Items, Next Steps, and Deal Changes"
    description: "Sync Google Calendar meeting notes to HubSpot automatically � Claude extracts action items, deal updates, and next steps."
    tool: "Make.com HTTP Request (Anthropic API)"
  - stepNumber: 4
    title: "Update HubSpot Deal and Contact Notes"
    description: "Sync Google Calendar meeting notes to HubSpot automatically � Claude extracts action items, deal updates, and next steps."
    tool: "Make.com HubSpot module"
  - stepNumber: 5
    title: "Create Follow-Up Tasks in HubSpot"
    description: "Sync Google Calendar meeting notes to HubSpot automatically � Claude extracts action items, deal updates, and next steps."
    tool: "Make.com HubSpot module (iterator)"
---

Sales reps and account managers lose an average of 15–20 minutes after every customer call updating their CRM. Meeting ends, notes are in Notion (or a doc, or nowhere), and the CRM update becomes a manual chore: open HubSpot, find the deal, type a note summary, create follow-up tasks one by one, remember to update the deal stage. It's tedious enough that many reps skip it entirely or do it in batches at the end of the week — when memory fades and deals slip through the cracks.

This Make.com workflow automates the entire post-meeting CRM update. The moment a Google Calendar meeting ends, it fetches the linked Notion meeting notes, sends them to Claude 3.5 Sonnet for structured extraction, and writes the results directly to HubSpot: contact notes updated, deal stage changed if appropriate, follow-up tasks created for each action item. The whole process runs in under 60 seconds and requires zero input from the rep after the meeting ends.

The $0.02-per-meeting cost reflects Claude 3.5 Sonnet API usage (~800 input tokens + ~400 output tokens). At 10 customer meetings per week, that's $0.20/week in API costs — less than a cup of coffee — to recover 2–3 hours of manual CRM work.

## Prerequisites

1. A Make.com account (Core plan at $10.59/month recommended; the Free plan's 1,000 operations/month may be tight for active sales teams)
2. An Anthropic API key with Claude 3.5 Sonnet access (usage-based billing)
3. Google Calendar access — the Make.com Google Calendar module requires OAuth authentication
4. A Notion workspace where meeting notes are stored in individual pages linked in calendar invites (teams add the Notion URL in the Google Calendar event's description or notes field)
5. A HubSpot CRM account with Deal and Contact records in use (Works, Professional, or Enterprise tier — the free CRM tier supports this workflow)
6. A consistent meeting title naming convention that includes the company name: e.g., `[Meeting Type] — [Company Name]` (required for HubSpot deal lookup)
7. A HubSpot user list mapping real names to HubSpot user IDs (for task assignment — a simple Make.com Data Store works for this)

## Setup Guide

1. **Import the Make.com blueprint** — Go to Make.com → Scenarios → Create a new scenario → Import Blueprint. Upload the JSON file.
2. **Connect Google Calendar** — Authenticate the Google Calendar module with the account used for customer meetings. In the "Watch Events" module, set the calendar to your primary calendar and the trigger to "Event end."
3. **Add the Notion link filter** — After the Calendar trigger, a Filter module checks that the event description contains "notion.so". Adjust the URL pattern if your Notion workspace uses a custom domain.
4. **Connect Notion** — Authenticate the Notion module. The "Get Page Content" module uses the Notion page URL extracted from the Calendar event description via a regex Text Parser module (included in the blueprint).
5. **Configure the Anthropic HTTP Request** — In the HTTP Request module, add a header: `x-api-key: YOUR_ANTHROPIC_API_KEY` and `anthropic-version: 2023-06-01`. The model is pre-set to `claude-3-5-sonnet-20241022`. Max tokens: `1024`.
6. **Connect HubSpot** — Authenticate the HubSpot module. The "Search Deal" module uses the company name parsed from the meeting title as the search query. Adjust the search field if your deal naming convention differs.
7. **Set up the task owner lookup** — In Make.com, go to Data Stores → Create a new data store. Add rows mapping team member names (as they appear in meeting notes) to their HubSpot User IDs. Connect this Data Store to the "Lookup Owner" module in the blueprint.
8. **Configure the iterator for tasks** — The Iterator module loops over Claude's `action_items` array. Each iteration creates one HubSpot task. Set the maximum iterations to 10 to prevent runaway loops from malformed data.
9. **Test with a real meeting** — Hold or simulate a test meeting in your calendar with a linked Notion page containing sample notes. Manually trigger the scenario and verify each HubSpot update appears correctly.

## Who This Is NOT For

- Teams that don't take meeting notes in Notion — the workflow is built around the Notion → CRM pipeline; Google Docs or Confluence users need a modified version with a different note-fetching step
- Sales orgs using Salesforce instead of HubSpot — the HubSpot-specific module and API field mappings are not portable to Salesforce without rebuilding the CRM update steps
- Internal-only meetings (1:1s, all-hands, planning sessions) — this workflow is designed for external customer meetings; applying it to internal meetings creates unnecessary CRM noise
- Teams without a consistent calendar + Notion note-taking workflow — the automation depends on people reliably linking Notion pages in calendar invites; if that habit isn't established, the trigger will fire blank frequently
