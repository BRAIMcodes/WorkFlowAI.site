---
title: "AI Contract Risk Analyzer with Make.com and Claude"
description: "Automatically extract and analyze contracts from Google Drive using Claude 3.5 Sonnet — flags liability clauses, gaps, and risk scores before legal review."
timeSaved: "4 hours/week"
costToRun: "~$0.08 per contract"
primaryTool: "Make.com"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "Google Drive"
  - "Notion"
  - "Gmail"
lastVerified: "June 2026"
setupTime: "~45 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Operations", "Legal", "Document Analysis", "Advanced"]
promptSnippet: |
  You are a senior contracts attorney specializing in commercial agreements. Analyze the following contract and produce a structured risk report.

  Contract text:
  [CONTRACT_TEXT]

  Contract type (if known): [CONTRACT_TYPE]
  Our company name: [COMPANY_NAME]
  Counterparty name: [COUNTERPARTY_NAME]

  Produce your analysis in exactly this format:

  ## RISK SCORE: [X/10]
  (1 = minimal risk, 10 = do not sign without major revisions)

  ## EXECUTIVE SUMMARY
  Plain English description of what this contract does, who the parties are, and your overall assessment in 3-5 sentences.

  ## 🔴 HIGH-RISK CLAUSES (Review Immediately)
  For each: Clause name | Section reference | Quoted text (max 50 words) | Why it's risky | Suggested revision

  ## 🟡 NOTABLE TERMS (Discuss with Legal)
  For each: Clause name | Section reference | Plain English summary | Recommendation

  ## ❌ MISSING STANDARD CLAUSES
  List any of these that are absent: Limitation of Liability, Indemnification, Dispute Resolution, Governing Law, Force Majeure, Confidentiality/NDA, IP Ownership, Termination for Convenience, Data Protection/GDPR

  ## 💰 FINANCIAL TERMS SUMMARY
  - Payment terms: [extract]
  - Late payment penalties: [extract or "Not specified"]
  - Auto-renewal terms: [extract or "Not specified"]
  - Price escalation clauses: [extract or "Not specified"]

  ## 📋 TERMINATION CONDITIONS
  Summarize all termination triggers and notice requirements.

  ## RECOMMENDED NEXT STEPS
  Numbered list of 3-5 specific actions before signing.
promptVariables:
  - name: "CONTRACT_TEXT"
    label: "Extracted Contract Text"
    placeholder: "Full contract text extracted from PDF"
    defaultValue: ""
  - name: "CONTRACT_TYPE"
    label: "Contract Type"
    placeholder: "SaaS Subscription Agreement"
    defaultValue: "Unknown"
  - name: "COMPANY_NAME"
    label: "Your Company Name"
    placeholder: "Acme Inc."
    defaultValue: ""
  - name: "COUNTERPARTY_NAME"
    label: "Counterparty Name"
    placeholder: "Vendor Corp LLC"
    defaultValue: ""
downloadUrl: "/blueprints/contract-analyzer-make-claude.json"
category: "Operations"
persona: "Operations Teams"
difficulty: "Advanced"
steps:
  - stepNumber: 1
    title: "Watch Google Drive Folder for New PDFs"
    description: "Make.com's Google Drive Watch Files module monitors a designated 'Contracts Inbox' folder and triggers when a new file is added."
    tool: "Google Drive"
  - stepNumber: 2
    title: "Download and Extract PDF Text"
    description: "The PDF is downloaded via Google Drive's export API. A PDF Parser module (using Adobe PDF Services or PDF.co) extracts the full text content while preserving section structure."
    tool: "Make.com"
  - stepNumber: 3
    title: "Claude 3.5 Sonnet Analyzes the Contract"
    description: "The full contract text is sent to Claude 3.5 Sonnet with a detailed system prompt. Claude returns a structured risk report including a 1–10 risk score, flagged clauses, missing terms, and financial summary."
    tool: "Claude 3.5 Sonnet"
  - stepNumber: 4
    title: "Create Notion Page with Full Analysis"
    description: "A Notion page is created in the 'Contract Reviews' database with the full Claude analysis, the risk score as a Select property, contract metadata, and a link back to the original Google Drive PDF."
    tool: "Notion"
  - stepNumber: 5
    title: "Email Summary to Legal Team"
    description: "Gmail sends a formatted email to your legal team with the risk score, executive summary, and high-risk clause count, plus a direct link to the Notion page for the full report."
    tool: "Gmail"
---

Most small and mid-size companies review dozens of contracts per quarter — vendor agreements, SaaS subscriptions, NDAs, client MSAs — but can't afford to send every one to outside counsel. The result is that contracts get skimmed by whoever is least busy, signed without proper review, and become liability problems 18 months later. This workflow isn't a replacement for legal counsel, but it's an extremely effective first-pass filter that ensures nothing gets signed without a structured analysis of the terms that matter most.

Claude 3.5 Sonnet is uniquely suited for contract analysis because of its 200K context window — even a 60-page enterprise agreement fits in a single API call. More importantly, Claude has been trained on enough legal text to recognize that a clause saying "Customer indemnifies Vendor for any and all claims" is categorically different from a mutual indemnification provision, and to flag it accordingly. The prompt in this workflow is structured to force output in a consistent schema, making downstream automation (risk score routing, Notion properties) reliable.

The $0.08 per contract cost breakdown: PDF parsing ($0.01 via PDF.co), Claude 3.5 Sonnet input/output tokens for a typical 20-page contract (~$0.06), and Make.com operations (~$0.01). At 4 hours saved per week from manual pre-review, the workflow pays for itself after the first contract.

## Prerequisites

1. Make.com account — Core plan ($9/month) minimum; this scenario uses ~15 operations per contract
2. Google Drive folder structure: create a `Contracts Inbox` folder and a `Contracts Processed` folder
3. Anthropic API key with Claude 3.5 Sonnet access (pay-as-you-go; confirm your account has claude-3-5-sonnet-20241022 available)
4. A PDF text extraction service — PDF.co ($0.01/page, Make.com native integration) or Adobe PDF Services (free tier: 500 document transactions/month)
5. Notion workspace with a `Contract Reviews` database; required properties: `Contract Name` (title), `Risk Score` (select: 1–10), `Status` (select), `Counterparty` (text), `Date Received` (date), `Drive Link` (URL), `Summary` (rich text)
6. Gmail account (or any SMTP provider) for legal team notification emails

## Setup Guide

1. **Create the Google Drive folder** named `Contracts Inbox`. Share it with your team and instruct them to drop all inbound contracts here — this is the only behavioral change your team needs to make.
2. **Set up the PDF extraction module** — in Make.com, search for PDF.co. Authenticate with your PDF.co API key. Use the "PDF to Text" action. Map the Google Drive file ID as input. Test with a sample PDF to confirm text extraction quality.
3. **Configure Claude API call** — in Make.com, add an HTTP module (POST to `https://api.anthropic.com/v1/messages`). Set headers: `x-api-key: your-key`, `anthropic-version: 2023-06-01`, `content-type: application/json`. Body: `{"model": "claude-3-5-sonnet-20241022", "max_tokens": 4096, "messages": [{"role": "user", "content": "[your prompt with mapped variables]"}]}`.
4. **Parse Claude's output** — add a Text Parser module to extract the risk score (regex: `RISK SCORE: (\d+)/10`). This numeric value will populate the Notion Risk Score property.
5. **Create the Notion page** — map the parsed fields: Contract Name from filename, Risk Score from regex output, Summary from the EXECUTIVE SUMMARY section, full analysis into the page body.
6. **Set up Gmail notification** — compose the email template with risk score prominently in the subject line: `[RISK: X/10] Contract Review Required - [Counterparty Name]`. This allows legal to triage by subject line alone.
7. **Add error handling** — create an error route for PDF extraction failures (password-protected PDFs, scanned images). Route these to a separate Slack alert asking for manual intervention.
8. **Test with 3 real contracts** of varying length and type before going live. Verify risk scores seem calibrated and high-risk clauses are being accurately identified.
9. **Set up a Google Drive file mover** — after processing, move the PDF from `Contracts Inbox` to `Contracts Processed` to prevent re-triggering.

## Who This Is NOT For

- **Contracts requiring human judgment on strategic terms** — this workflow identifies risks; it does not negotiate or make signing decisions. Always have a qualified person review before execution.
- **Jurisdictions with scanned-only contracts** — if counterparties send you image PDFs (scanned paper), text extraction will fail unless you add an OCR step (e.g., Google Cloud Vision). Add ~$0.03/page for OCR.
- **Companies processing more than 50 contracts/month on Make.com Core** — you'll need to upgrade to the Team plan to handle the scenario operation volume without throttling.
- **Legally binding automated analysis pipelines** — this is a triage tool, not a legal opinion. Do not configure the workflow to auto-approve or auto-reject contracts based on Claude's risk score alone.
