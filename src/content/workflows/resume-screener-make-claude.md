---
title: "AI Resume Screener With Make.com And Claude"
description: "Download the Make.com blueprint to scan PDF resumes uploaded to Google Drive, screen them against a job description, and log them in Google Sheets."
timeSaved: "8 hours/week"
costToRun: "~$0.03 per candidate"
primaryTool: "Make.com"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "Google Drive"
  - "Google Sheets"
promptSnippet: |
  You are an expert HR recruitment specialist.
  Evaluate the candidate's resume text against the following Job Description (JD):

  Job Description:
  - Role: Senior React Developer
  - Requirements: 5+ years JavaScript, 3+ years React, experience with TypeScript, Next.js, and Tailwind CSS.

  Candidate Resume Text:
  {{ 2.text_content }}

  Determine if the candidate should be moved to the interview round.
  Output a JSON object with:
  {
    "status": "APPROVED" | "REJECTED",
    "score": number (1-10),
    "key_strengths": "1-2 sentences summarizing candidate strengths",
    "gaps": "gaps between candidate skills and JD"
  }
downloadUrl: "/blueprints/resume-screener-make-claude.blueprint"
category: "Recruiting"
persona: "Recruiters"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "Watch Folder for Uploads"
    description: "Triggers when a candidate uploads their PDF resume to a specific folder in Google Drive."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Extract PDF Text"
    description: "Converts the raw PDF document into plain readable text using Make's native parser."
    tool: "Make PDF Parser"
  - stepNumber: 3
    title: "Score Candidate via Claude"
    description: "Claude 3.5 Sonnet matches candidate skills against the JD and scores them, listing gaps and strengths."
    tool: "Claude 3.5 Sonnet"
  - stepNumber: 4
    title: "Log Candidate Details"
    description: "Appends the candidate's name, email, score, status, and feedback to a master Google Sheet tracker."
    tool: "Google Sheets"
---

Sifting through hundreds of resumes for a single open role is a massive time sink for recruiting teams. 

This automation uses the advanced reading comprehension of Claude 3.5 Sonnet to screen resumes. When an applicant uploads a PDF resume, the file is parsed, analyzed, scored, and logged automatically. Your team only has to review the pre-screened list of qualified candidates.

### Prerequisites
1. A **Make.com** account
2. Google Drive and Google Sheets accounts
3. Anthropic API key (for Claude 3.5 Sonnet)

### Setup Guide
1. **Import Blueprint:** Download the Make.com blueprint file and import it into a new Make scenario.
2. **Setup Folder Structure:** Create a Google Drive folder named `Incoming Resumes`. Configure the Google Drive trigger node to monitor this folder.
3. **Master spreadsheet:** Create a Google Sheet with headers: `Name`, `Email`, `AI Score`, `Status`, `Key Strengths`, `Gaps`. Link it in the Google Sheets node.
4. **Define Job Description:** Paste your job description into the Claude API system prompt block inside the scenario.
