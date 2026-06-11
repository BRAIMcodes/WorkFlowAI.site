---
title: "AI SEO Content Brief Generator with n8n and Claude"
description: "Automatically generate comprehensive SEO content briefs from a keyword list using Ahrefs SERP data and Claude 3.5 Sonnet analysis."
timeSaved: "5 hours/week"
costToRun: "~$0.04 per brief"
primaryTool: "n8n"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "Ahrefs API"
  - "Notion"
  - "Slack"
lastVerified: "June 2026"
setupTime: "~35 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Marketing", "SEO", "Content Strategy", "Claude"]
promptSnippet: |
  You are a senior SEO strategist with 10+ years of experience. Analyze the following SERP data for the target keyword and generate a comprehensive content brief for a writer.

  Target keyword: [TARGET_KEYWORD]
  Monthly search volume: [SEARCH_VOLUME]
  Keyword difficulty: [KD_SCORE]

  Top 5 ranking URLs and their key characteristics:
  [SERP_DATA]

  Generate a content brief with the following sections:

  1. **Search Intent**: Classify as informational/navigational/transactional/commercial. Explain in 2 sentences what the searcher actually wants.
  2. **Recommended Format**: Article, listicle, how-to guide, comparison page, etc. Justify based on SERP patterns.
  3. **Target Word Count**: Provide a specific range (e.g., 1,400–1,800 words) based on top-ranking competitors.
  4. **Proposed H1 Title**: Write 3 title options that balance keyword inclusion with click-worthiness.
  5. **Content Outline**: Provide H2 and H3 structure with brief descriptions of what each section should cover.
  6. **Semantic Keywords to Include**: List 8–12 related terms and LSI keywords found across the top-ranking pages.
  7. **Unique Angle**: Identify one differentiated approach this content can take to outperform current results.
  8. **Internal Linking Opportunities**: Note 2–3 common internal link targets relevant to this topic.

  Be specific. Do not give generic advice. Base every recommendation on the actual SERP data provided.
promptVariables:
  - name: "TARGET_KEYWORD"
    label: "Target Keyword"
    placeholder: "best project management software for agencies"
    defaultValue: ""
  - name: "SEARCH_VOLUME"
    label: "Monthly Search Volume"
    placeholder: "4,400"
    defaultValue: ""
  - name: "KD_SCORE"
    label: "Keyword Difficulty (0-100)"
    placeholder: "52"
    defaultValue: ""
  - name: "SERP_DATA"
    label: "SERP Data (auto-populated from Ahrefs)"
    placeholder: "Auto-populated by workflow from Ahrefs API"
    defaultValue: ""
downloadUrl: "/blueprints/seo-brief-generator-n8n-claude.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Intermediate"
steps:
  - stepNumber: 1
    title: "Read Keyword List from Notion"
    description: "A manual trigger or weekly schedule reads rows from a Notion database where the 'Brief Status' property is set to 'Needs Brief'. Each row must contain a keyword, monthly search volume, and keyword difficulty score (imported from Ahrefs or manually entered)."
    tool: "n8n Notion node"
  - stepNumber: 2
    title: "Fetch SERP Data from Ahrefs API"
    description: "For each keyword, an HTTP Request node calls the Ahrefs SERP Overview API endpoint, retrieving the top 10 organic results including URL, domain rating, estimated traffic, title, and word count. The response is parsed and the top 5 results are formatted into a structured summary string."
    tool: "n8n HTTP Request node (Ahrefs API)"
  - stepNumber: 3
    title: "Claude 3.5 Sonnet Analyzes Top-Ranking Content"
    description: "The keyword metadata and Ahrefs SERP data are injected into the system prompt. Claude 3.5 Sonnet analyzes patterns across the top 5 results — content format, typical structure, word count ranges, and topic gaps — using its extended context window to process all data in a single call."
    tool: "n8n HTTP Request node (Anthropic API)"
  - stepNumber: 4
    title: "Generate Comprehensive Content Brief"
    description: "Claude outputs the full brief in structured markdown covering search intent classification, recommended format, target word count, three title options, a full H2/H3 outline, semantic keywords, a unique differentiation angle, and internal linking suggestions. The n8n Code node formats this into Notion-compatible rich text blocks."
    tool: "n8n Code node + Anthropic API"
  - stepNumber: 5
    title: "Post Brief to Notion and Alert via Slack"
    description: "The formatted brief is written to a new Notion page linked back to the original keyword row, and the keyword row status is updated to 'Brief Ready'. A Slack message is sent to the #content-team channel with the keyword, a brief summary, and a direct link to the Notion brief."
    tool: "n8n Notion node + Slack node"
---

Content briefs are one of the most time-consuming deliverables in SEO — and also one of the most inconsistent. When created manually, their quality depends entirely on how much time the strategist has. A rushed brief gets one paragraph of vague direction. A thorough brief takes 45–60 minutes per keyword: pulling SERP data, reading competitor articles, identifying topic gaps, and structuring an outline. For teams managing 10+ keywords per week, that's an entire day of work before a word is written.

This workflow compresses that 45-minute manual process into about 90 seconds per keyword, with quality that rivals a thorough human-written brief. The key is combining real Ahrefs SERP data with Claude 3.5 Sonnet's analytical capability. Unlike prompt-only approaches that ask the AI to imagine what ranks, this workflow feeds Claude actual ranking URLs, domain ratings, traffic estimates, and word counts — then asks it to draw conclusions from evidence, not assumption.

The Intermediate difficulty rating reflects the Ahrefs API setup and the custom data transformation required in the Code node, not the conceptual complexity. If your team already uses Ahrefs and has basic n8n experience, plan for 35–45 minutes of setup. The $0.04-per-brief cost comes from Claude 3.5 Sonnet API usage (~1,500 input tokens + ~800 output tokens at Sonnet pricing).

## Prerequisites

1. An n8n instance (Cloud or self-hosted; n8n Cloud Starter plan recommended for reliable scheduling)
2. An Anthropic API key with Claude 3.5 Sonnet access (usage-based; ~$2–4/month for 50 briefs/week)
3. An Ahrefs account with API access (available on Ahrefs Advanced or Enterprise plans; the SERP Overview endpoint is required)
4. A Notion database for keywords with properties: **Keyword** (text), **Monthly Volume** (number), **KD Score** (number), **Brief Status** (select: "Needs Brief" / "Brief Ready"), **Brief Page** (relation or URL)
5. A Slack workspace with a `#content-team` channel (or similar) and an incoming webhook or Slack bot token
6. Basic familiarity with n8n's Code node (JavaScript) — needed to reshape the Ahrefs API response into Claude's prompt format

## Setup Guide

1. **Import the blueprint** — Download and import the workflow JSON into n8n via the Import from File option.
2. **Configure Notion credentials** — Authenticate the Notion node with your integration token. Select your keywords database. The filter should read: `Brief Status = Needs Brief`.
3. **Set up Ahrefs API** — In the HTTP Request node labeled "Fetch SERP Data", add your Ahrefs API token as a Header Auth credential (`Authorization: Bearer YOUR_TOKEN`). The endpoint used is `https://api.ahrefs.com/v3/serp-overview` with query parameters `keyword`, `country` (default: `us`), and `limit=10`.
4. **Add Anthropic credentials** — In the HTTP Request node labeled "Claude Brief Generator", add your Anthropic API key as a Header Auth credential (`x-api-key`). The model is set to `claude-3-5-sonnet-20241022`.
5. **Review the Code node** — The Code node transforms the Ahrefs response array into the `[SERP_DATA]` string injected into the prompt. Inspect the default transformation logic and adjust if Ahrefs changes its response schema.
6. **Connect Slack** — Add your Slack credential (Bot Token preferred over Incoming Webhook for richer message formatting). Update the channel name in the Slack node from `#content-team` to your actual channel.
7. **Update Notion write node** — Configure the "Create Brief Page" Notion node to write to the same or a linked database. Map the `content` field from the Claude response to the Notion page body using the Text block type.
8. **Set the trigger** — Default is a manual trigger. Change to a weekly Schedule Trigger (e.g., Monday 8 AM) if you want fully automatic processing of accumulated keywords.
9. **Test with a single keyword** — Add one row to Notion with a real keyword and status "Needs Brief". Run manually and inspect each node's output before enabling the schedule.

## Who This Is NOT For

- Teams without Ahrefs API access — the workflow degrades significantly without real SERP data; a DataForSEO or SemRush API adaptation is possible but requires custom node configuration not included in the blueprint
- Local SEO teams targeting city-specific or hyper-local keywords where Ahrefs SERP data may not reflect true local pack results
- Teams producing content at fewer than 5 briefs per month — at that volume, manual briefing is faster than the setup investment
- E-commerce teams needing product page briefs — the prompt and outline structure is optimized for editorial/blog content; product SEO requires different signals (schema, reviews, pricing data)
