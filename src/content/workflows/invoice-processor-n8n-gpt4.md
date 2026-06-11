---
title: "Automated Invoice Processing and Approval with n8n and GPT-4o"
description: "Automatically extract vendor, amount, and line items from email-attached invoices, create QuickBooks draft bills, and route high-value invoices for Slack approval."
timeSaved: "5 hours/week"
costToRun: "~$0.04 per invoice"
primaryTool: "n8n"
connectedApps:
  - "GPT-4o"
  - "Gmail"
  - "Google Drive"
  - "QuickBooks"
  - "Slack"
lastVerified: "June 2026"
setupTime: "~45 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Operations", "Finance", "Accounting", "Document Processing"]
promptSnippet: |
  You are an expert accounts payable specialist. Extract structured data from the following invoice text. The text has been extracted from a PDF via OCR and may contain formatting artifacts.

  Invoice text:
  [INVOICE_TEXT]

  Extract and return the following as valid JSON:

  {
    "vendor_name": "...",
    "vendor_address": "..." or null,
    "invoice_number": "...",
    "invoice_date": "YYYY-MM-DD" or null,
    "due_date": "YYYY-MM-DD" or null,
    "payment_terms": "..." or null,
    "currency": "USD",
    "subtotal": number or null,
    "tax_amount": number or null,
    "total_amount": number,
    "line_items": [
      {
        "description": "...",
        "quantity": number or null,
        "unit_price": number or null,
        "amount": number
      }
    ],
    "po_number": "..." or null,
    "bank_details": {
      "account_name": "..." or null,
      "account_number": "..." or null,
      "routing_number": "..." or null,
      "swift_bic": "..." or null
    },
    "extraction_confidence": "high" | "medium" | "low",
    "extraction_notes": "..." or null
  }

  Rules:
  - Return numeric values as numbers, not strings (e.g., 1250.00 not "$1,250.00").
  - If a field cannot be found with confidence, return null rather than guessing.
  - Set extraction_confidence to "low" if the PDF text quality is poor, dates are ambiguous, or total_amount is unclear.
  - Set extraction_notes to a brief explanation of any issues or ambiguities encountered.
  - Return valid JSON only. No additional text outside the JSON object.
promptVariables:
  - name: "INVOICE_TEXT"
    label: "Invoice OCR Text"
    placeholder: "Auto-populated from PDF extraction"
    defaultValue: ""
downloadUrl: "/blueprints/invoice-processor-n8n-gpt4.json"
category: "Operations"
persona: "Operations Teams"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "Detect Invoice Email Attachment in Gmail"
    description: "The n8n Gmail trigger polls every 15 minutes for emails with PDF attachments in a designated Gmail label (e.g., 'invoices'). A filter checks that the email subject or body contains keywords like 'invoice', 'bill', 'payment due', or 'remittance'. Emails with no PDF attachment or non-invoice keywords are skipped. The Gmail label is applied by a separate Gmail filter rule set up manually once."
    tool: "n8n Gmail trigger node"
  - stepNumber: 2
    title: "Save PDF to Google Drive"
    description: "The PDF attachment binary data is extracted and saved to a Google Drive folder named 'Invoices/[YEAR]/[MONTH]' using n8n's Google Drive node. The filename is standardized as `[YYYY-MM-DD]_[sender-domain]_[original-filename].pdf`. The Drive file ID is stored for later reference in the QuickBooks bill."
    tool: "n8n Google Drive node"
  - stepNumber: 3
    title: "Extract Invoice Text via PDF Parsing"
    description: "The PDF is sent to a PDF-to-text extraction service (the blueprint uses the free PDF.co API, which includes 1,000 pages/month free). The returned plain text is cleaned by an n8n Code node that removes repeated whitespace, page headers/footers, and common OCR artifacts. The cleaned text is then passed to GPT-4o."
    tool: "n8n HTTP Request node (PDF.co API) + Code node"
  - stepNumber: 4
    title: "GPT-4o Extracts Vendor, Amount, Due Date, and Line Items"
    description: "The cleaned invoice text is sent to GPT-4o with the extraction prompt. The model returns a structured JSON object with all invoice fields. The n8n JSON Parse node validates the structure. If extraction_confidence is 'low', the workflow routes to a separate Slack alert requesting human review rather than continuing to QuickBooks."
    tool: "n8n OpenAI node"
  - stepNumber: 5
    title: "Validate Against Vendor Database"
    description: "The extracted vendor_name is checked against a vendor allowlist stored in a Google Sheet ('Approved Vendors'). The n8n Google Sheets node does a VLOOKUP-style search for the vendor name (fuzzy matching via an n8n Code node using Levenshtein distance). Unknown vendors are flagged for review; known vendors have their QuickBooks Vendor ID retrieved for the next step."
    tool: "n8n Google Sheets node + Code node"
  - stepNumber: 6
    title: "Create QuickBooks Draft Bill"
    description: "Using the QuickBooks Online API (via n8n HTTP Request), the workflow creates a draft Bill object with the vendor ID, invoice number, invoice date, due date, line items, and total amount. The bill is created in 'Draft' status — it does not post to the ledger until approved. The Google Drive file URL is added to the bill's AttachableRef for document linking."
    tool: "n8n HTTP Request node (QuickBooks API)"
  - stepNumber: 7
    title: "Slack Approval Request for Amounts Over $1,000"
    description: "An n8n IF node checks whether total_amount > 1000. If yes, a formatted Slack message is sent to #finance-approvals containing: vendor name, invoice number, due date, total amount, line item summary, and a direct link to the QuickBooks draft bill and Google Drive PDF. Invoices under $1,000 are auto-approved and the bill status is updated to 'Approved' via a follow-up API call."
    tool: "n8n Slack node"
---

Finance and operations teams at small and mid-size companies spend disproportionate time on invoice processing — a task that feels like it should have been automated years ago. The problem isn't receiving invoices; it's the downstream work: opening the PDF, reading the fields, re-typing vendor name, amount, due date, and line items into QuickBooks, getting approval from a manager for anything over a threshold, and filing the document somewhere findable. A moderately busy company processing 20–30 invoices per week can lose 5–8 hours to this mechanical work, and errors are common when numbers are transcribed by hand.

This n8n workflow handles the full invoice-to-QuickBooks pipeline with human oversight preserved exactly where it matters. GPT-4o extracts structured data from PDF invoices with high accuracy across standard vendor invoice formats — it handles varied layouts, non-standard date formats, and partial OCR artifacts far better than template-based extraction tools. Validation against your approved vendor list catches new or unexpected vendors before they reach the ledger. The $1,000 approval threshold (fully configurable) ensures finance has a final review gate on material spend while letting routine small invoices flow through automatically.

The Intermediate difficulty rating reflects the QuickBooks API OAuth setup and the PDF.co integration — these are the two steps that require more careful configuration. Budget 45–60 minutes for a thorough first setup and testing with 3–5 real invoices.

## Prerequisites

1. An n8n instance with a public HTTPS URL (required for QuickBooks OAuth callback; n8n Cloud works out of the box)
2. A Gmail account (or Google Workspace) with a Gmail filter rule that labels incoming invoices with a custom label (e.g., "invoices")
3. An OpenAI API key with GPT-4o access
4. A PDF.co account for PDF text extraction (free tier: 1,000 pages/month; paid plans start at $29/month for 10,000 pages)
5. A Google Sheet named "Approved Vendors" with columns: **Vendor Name**, **QuickBooks Vendor ID**, **Default Account Code**, **Approval Threshold Override** (optional)
6. A QuickBooks Online account with API access — requires creating an app at developer.intuit.com and completing OAuth 2.0 setup (the most complex prerequisite; plan 15–20 minutes for this alone)
7. A Slack workspace with a `#finance-approvals` channel and an approved Slack app/bot for posting messages
8. A Google Drive folder structure: `Invoices/2026/June/` etc. (the workflow auto-creates monthly subfolders)

## Setup Guide

1. **Import the blueprint** — Import the n8n JSON workflow. You'll see 12 nodes arranged across the main success path and two error/review branches.
2. **Set up Gmail trigger** — Authenticate the Gmail node with your invoices email account. Set the label filter to your custom "invoices" label. Set poll frequency to every 15 minutes (adjust to 5 minutes if invoice processing speed is critical).
3. **Configure Google Drive** — Authenticate the Drive node. The folder path uses a Code node that generates the `Invoices/[YEAR]/[MONTH]` structure dynamically from the current date. No manual folder creation needed.
4. **Set up PDF.co** — Create a PDF.co account and generate an API key. In the HTTP Request node "Extract PDF Text", replace `YOUR_PDFCO_API_KEY` in the request header. The endpoint used is `https://api.pdf.co/v1/pdf/convert/to/text`.
5. **Configure OpenAI** — Add your OpenAI API key to the OpenAI node. Set model to `gpt-4o`, temperature to `0.1` (very low for consistent structured extraction), max tokens to `2000`.
6. **Set up the Vendor database** — Populate your "Approved Vendors" Google Sheet with at least your top 10–15 regular vendors. The fuzzy matching Code node uses a similarity threshold of 85% — vendors with names that are 85%+ similar to an approved vendor are matched automatically. Adjust the threshold in the Code node if you get false positives.
7. **Complete QuickBooks OAuth** — This is the most involved step. In the QuickBooks HTTP Request node, open the credential settings and follow n8n's QuickBooks OAuth flow. You'll need your app's Client ID, Client Secret, and to add your n8n callback URL to the QuickBooks app's redirect URIs in the Intuit developer portal. Use the QuickBooks sandbox first for testing.
8. **Configure Slack** — Add your Slack bot token. Update the `#finance-approvals` channel name. The message template uses Slack Block Kit for rich formatting (pre-built in the blueprint).
9. **Set the approval threshold** — In the IF node "Check Amount > $1000", change `1000` to your preferred approval threshold. Teams with different thresholds by vendor can extend the vendor database with a "Threshold Override" column.
10. **Test with 5 real invoices** — Run the workflow manually on test invoices of varying formats (different vendors, different layouts). Check each QuickBooks draft bill for accuracy. Expect 90-95% field accuracy on clean PDFs; scanned/handwritten invoices will have lower accuracy.

## Who This Is NOT For

- Companies using accounting software other than QuickBooks Online — Xero, FreshBooks, Sage, or NetSuite users need different API integration steps (the extraction and Drive filing steps remain reusable)
- Businesses receiving invoices in formats other than PDF email attachments (EDI, web portal submissions, paper mail scanning) — those require different ingestion trigger nodes
- Teams processing invoices in languages other than English — the extraction prompt and vendor matching are English-optimized; add language detection and translated prompts for multilingual AP operations
- Finance teams at companies with complex PO-matching requirements, multi-entity accounting structures, or audit trails requiring immutable document management — those needs exceed what this blueprint addresses and typically require dedicated AP automation software like Tipalti or Bill.com
