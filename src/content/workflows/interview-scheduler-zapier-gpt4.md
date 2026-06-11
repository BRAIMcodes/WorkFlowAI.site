---
title: "Automated Interview Scheduling and Prep with Zapier and GPT-4"
description: "Automatically send personalized interview invites with Calendly links when a candidate advances in Greenhouse, using GPT-4o and Gmail."
timeSaved: "3 hours/week"
costToRun: "Free Tier"
primaryTool: "Zapier"
connectedApps:
  - "GPT-4o"
  - "Calendly"
  - "Gmail"
  - "Greenhouse ATS"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Recruiting", "HR", "Scheduling", "Beginner-friendly"]
promptSnippet: |
  You are a warm, professional recruiter at [COMPANY_NAME]. Write a personalized interview invitation email for a candidate who has just advanced to the [INTERVIEW_STAGE] stage.

  Candidate name: [CANDIDATE_NAME]
  Role they applied for: [JOB_TITLE]
  Department: [DEPARTMENT]
  Hiring manager name: [HIRING_MANAGER_NAME]
  Interview format: [INTERVIEW_FORMAT]
  Calendly scheduling link: [CALENDLY_LINK]

  Guidelines:
  - Address the candidate by first name only.
  - Open with a genuine, specific congratulatory line that references the role — not a generic "We were impressed."
  - Explain what the [INTERVIEW_STAGE] stage involves in 1-2 sentences (e.g., "This is a 45-minute conversation with [HIRING_MANAGER_NAME] to discuss your experience with X and how you approach Y").
  - Mention the Calendly link naturally in the flow of the email, not bolted on at the end.
  - Keep the email under 180 words total.
  - Sign off as "[RECRUITER_NAME], Talent Acquisition" — do not include a generic "Best regards."
  - Do NOT use exclamation marks more than once.
  - Do NOT mention salary, equity, or benefits in this email.

  Output only the email body — no subject line, no extra commentary.
promptVariables:
  - name: "COMPANY_NAME"
    label: "Company Name"
    placeholder: "Acme Corp"
    defaultValue: "Our company"
  - name: "CANDIDATE_NAME"
    label: "Candidate Full Name"
    placeholder: "Jordan Rivera"
    defaultValue: ""
  - name: "JOB_TITLE"
    label: "Job Title"
    placeholder: "Senior Product Designer"
    defaultValue: ""
  - name: "DEPARTMENT"
    label: "Department"
    placeholder: "Product"
    defaultValue: ""
  - name: "INTERVIEW_STAGE"
    label: "Interview Stage Name"
    placeholder: "Technical Interview"
    defaultValue: "Interview"
  - name: "HIRING_MANAGER_NAME"
    label: "Hiring Manager Name"
    placeholder: "Sarah Chen"
    defaultValue: ""
  - name: "INTERVIEW_FORMAT"
    label: "Interview Format"
    placeholder: "45-minute video call via Zoom"
    defaultValue: "video call"
  - name: "CALENDLY_LINK"
    label: "Calendly Scheduling Link"
    placeholder: "https://calendly.com/sarah-chen/interview"
    defaultValue: ""
  - name: "RECRUITER_NAME"
    label: "Recruiter Name"
    placeholder: "Alex Thompson"
    defaultValue: ""
downloadUrl: "/blueprints/interview-scheduler-zapier-gpt4.json"
category: "Recruiting"
persona: "Recruiters"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Detect Stage Change in Greenhouse ATS"
    description: "Zapier's Greenhouse trigger fires whenever a candidate is moved to a new stage. The Zap filters specifically for stages that require scheduling (e.g., 'Phone Screen', 'Technical Interview', 'Final Round') using Zapier's built-in Filter step. Other stage changes are ignored."
    tool: "Zapier Greenhouse trigger"
  - stepNumber: 2
    title: "GPT-4o Writes Personalized Interview Invite"
    description: "Candidate name, job title, department, hiring manager, and interview format are pulled from the Greenhouse payload and injected into the GPT-4o prompt via Zapier's OpenAI action. The model returns a complete, personalized email body under 180 words."
    tool: "Zapier OpenAI action"
  - stepNumber: 3
    title: "Auto-Attach Calendly Link"
    description: "A Zapier Lookup Table or Formatter step maps the Greenhouse job ID or department to the correct Calendly scheduling link (each hiring manager has their own Calendly URL stored in the lookup table). This ensures candidates always receive the right link for the right interviewer."
    tool: "Zapier Formatter (Lookup Table)"
  - stepNumber: 4
    title: "Send via Gmail with Recruiter's Address"
    description: "Zapier's Gmail action sends the GPT-4o-generated email from the recruiter's Gmail account (not a noreply address). The subject line is auto-generated as 'Your [Stage Name] with [Company Name] — [First Name]'. A BCC copy is sent to the recruiter's inbox for tracking."
    tool: "Zapier Gmail action"
  - stepNumber: 5
    title: "Log Activity in Greenhouse"
    description: "Zapier's Greenhouse 'Create Note' action logs the sent email text back to the candidate's profile as an activity note, timestamped and tagged with the stage name. This keeps the ATS as the system of record without manual copy-paste by recruiters."
    tool: "Zapier Greenhouse action"
---

The average recruiter sends 15–25 interview invitation emails per week. Even with a saved template, each one requires: opening the ATS, copying the candidate name, finding the right template, swapping in the role and stage, finding the hiring manager's Calendly link, and hitting send. That's 3–5 minutes per email — which adds up to over 2 hours of pure mechanical work weekly, work that adds zero recruiting value and pulls focus from actual candidate conversations.

This Zapier workflow eliminates the manual send entirely. The moment you advance a candidate in Greenhouse, the automation fires: GPT-4o writes a genuinely personalized invite (not a mail-merge template with [FIRST_NAME] brackets), the correct Calendly link for that interviewer is auto-attached, and the email goes from the recruiter's own Gmail address — so replies land in their inbox, not a black hole. The full cycle takes under 30 seconds.

The "Free Tier" cost rating reflects that Zapier's free plan (100 tasks/month) covers small recruiting teams. OpenAI API costs at this volume are under $1/month — essentially rounding error. Teams sending more than 100 invites/month will need Zapier's Starter plan ($19.99/month), which remains very cost-effective versus the recruiter time saved.

## Prerequisites

1. A Zapier account (Free plan works for up to ~100 interview invites/month; Starter plan for higher volume)
2. Greenhouse ATS with Zapier integration enabled (requires Greenhouse Admin to generate a Harvest API key under Configure → Dev Center → API Credential Management)
3. An OpenAI API key with GPT-4o access
4. Calendly accounts set up for each hiring manager with event types configured for each interview format (30-min, 45-min, 60-min)
5. A Gmail account for each recruiter connected to Zapier (Google Workspace accounts work; personal Gmail works for testing)
6. A lookup table prepared: Job ID or Department → Hiring Manager Name → Calendly URL (a simple spreadsheet or Zapier Lookup Table)

## Setup Guide

1. **Create a new Zap** — In Zapier, click "Create Zap" and set the trigger app to **Greenhouse**. Select "Candidate Stage Change" as the trigger event.
2. **Authenticate Greenhouse** — Paste your Greenhouse Harvest API key when prompted. Test the trigger by pulling a recent stage change event.
3. **Add a Filter step** — Insert a Filter by Zapier step. Set the condition: `Stage Name` contains any of `Phone Screen, Technical Interview, Final Round` (adjust to match your actual Greenhouse stage names exactly).
4. **Add the Lookup Table step** — Use Formatter by Zapier → Utilities → Lookup Table. Map the input value to `Job ID` from Greenhouse. Add rows for each Job ID → Calendly URL pairing. This step also returns the Hiring Manager name.
5. **Configure the OpenAI step** — Add OpenAI as an action, select "Send Prompt (GPT-4o)". Paste the system prompt. In the user message field, map each `[VARIABLE]` to the corresponding Greenhouse or Lookup Table field using Zapier's variable picker.
6. **Set up Gmail send** — Add Gmail as an action. Set "From" to the recruiter's authenticated Gmail. Map "To" to the candidate's email from Greenhouse. Set "Subject" using Formatter: `Your {{stage_name}} with [Company Name] — {{candidate_first_name}}`. Map "Body" to the OpenAI output. Add BCC to the recruiter's email.
7. **Add Greenhouse note** — Add a second Greenhouse action: "Create Note". Set the candidate ID from the trigger payload and the note body to the GPT-4o email output with a prefix: `Interview invite sent (automated): `.
8. **Test end-to-end** — Move a test candidate to a scheduled stage in Greenhouse and watch the Zap fire. Verify the email arrives, the Calendly link is correct, and the Greenhouse note is logged.

## Who This Is NOT For

- High-volume recruiting teams (50+ hires/month) who need a true scheduling coordination tool like Gem or GoodTime — Zapier's task limits and single-candidate processing will bottleneck at scale
- Companies with complex interview loop structures requiring panel coordination (this workflow handles single-interviewer scheduling only)
- Teams using ATSs other than Greenhouse — Lever, Workday, and other ATS platforms have different Zapier trigger schemas; the blueprint is Greenhouse-specific
- Recruiters who need candidates to select from multiple interview types or have branching logic based on role level — that complexity requires a multi-path Zapier workflow or a custom solution
