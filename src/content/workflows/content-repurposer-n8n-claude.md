---
title: "Multi-Platform Content Repurposer with n8n and Claude"
description: "Turn every new blog post into LinkedIn posts, a Twitter thread, and an email newsletter intro automatically using Claude 3.5 Sonnet and Buffer scheduling."
timeSaved: "5 hours/week"
costToRun: "~$0.02 per piece"
primaryTool: "n8n"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "Notion"
  - "LinkedIn"
  - "Twitter"
  - "Buffer"
lastVerified: "June 2026"
setupTime: "~20 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Marketing", "Content", "Social Media", "Repurposing", "Beginner-friendly"]
promptSnippet: |
  You are an expert content strategist and social media copywriter. A new blog post has just been published. Your job is to repurpose it into three distinct content formats.

  Blog post title: [BLOG_TITLE]
  Blog post URL: [BLOG_URL]
  Blog post content:
  [BLOG_CONTENT]

  Brand voice: [BRAND_VOICE]
  Target audience: [TARGET_AUDIENCE]

  Create all three formats below. Follow each format's rules exactly.

  ---

  FORMAT 1: LINKEDIN POST

  Rules:
  - Length: 1,000–1,200 characters (NOT words)
  - Structure: Strong hook in first line (no "I'm excited to share"), 3-4 short paragraphs, end with a question to drive comments
  - Tone: Professional but conversational, first-person perspective
  - Do NOT start with "Today I want to talk about" or similar clichés
  - Include 3-5 relevant hashtags at the end
  - Do NOT include the blog URL in the body — it goes in the first comment

  LINKEDIN:
  [write the post here]

  ---

  FORMAT 2: TWITTER THREAD

  Rules:
  - Exactly 10 tweets
  - Tweet 1: Hook that creates curiosity without being clickbait. End with "🧵"
  - Tweets 2-9: One key insight per tweet, max 240 characters each
  - Tweet 10: Summary + CTA with the blog URL
  - Number each tweet: "1/" "2/" etc.
  - No filler tweets — every tweet must deliver standalone value

  TWITTER THREAD:
  [write all 10 tweets here, one per line, numbered]

  ---

  FORMAT 3: EMAIL NEWSLETTER INTRO

  Rules:
  - Length: 100-150 words maximum
  - This is the intro paragraph that appears before the "Read the full post" button
  - Tone: Warm, direct, like a note from a knowledgeable friend
  - Do NOT summarize the whole post — tease 1-2 insights and create curiosity
  - End with a sentence that makes clicking feel worthwhile, not obligatory

  EMAIL INTRO:
  [write the intro here]
promptVariables:
  - name: "BLOG_TITLE"
    label: "Blog Post Title"
    placeholder: "10 Ways to Reduce Churn in SaaS"
    defaultValue: ""
  - name: "BLOG_URL"
    label: "Blog Post URL"
    placeholder: "https://yourblog.com/reduce-churn"
    defaultValue: ""
  - name: "BLOG_CONTENT"
    label: "Full Blog Post Content"
    placeholder: "Mapped from Notion page body"
    defaultValue: ""
  - name: "BRAND_VOICE"
    label: "Brand Voice Description"
    placeholder: "Direct, data-driven, no fluff. We respect our reader's intelligence."
    defaultValue: "Direct, helpful, and conversational. No jargon."
  - name: "TARGET_AUDIENCE"
    label: "Target Audience"
    placeholder: "SaaS founders and product leaders"
    defaultValue: ""
downloadUrl: "/blueprints/content-repurposer-n8n-claude.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Notion Webhook Triggers on New Published Post"
    description: "A Notion database webhook fires when a blog post page's Status property changes to 'Published'. Captures the page ID, title, and content."
    tool: "Notion"
  - stepNumber: 2
    title: "Fetch Full Blog Post Content"
    description: "n8n's Notion node retrieves the full page content using the page ID, converting blocks to plain text for the Claude prompt."
    tool: "Notion"
  - stepNumber: 3
    title: "Claude Extracts Insights and Writes All Three Formats"
    description: "Claude 3.5 Sonnet receives the full blog post and writes a LinkedIn post (1,200 chars), a 10-tweet Twitter thread, and an email newsletter intro (150 words) in a single API call."
    tool: "Claude 3.5 Sonnet"
  - stepNumber: 4
    title: "Parse Claude's Structured Output"
    description: "A Function node splits Claude's response by FORMAT delimiters, extracting the LinkedIn post, Twitter thread (split into individual tweets), and email intro as separate variables."
    tool: "n8n"
  - stepNumber: 5
    title: "Schedule All Formats via Buffer"
    description: "Three Buffer API calls schedule the content across platforms: LinkedIn post in 2 hours, Twitter thread as a scheduled thread post for tomorrow morning, email intro added to the newsletter draft queue."
    tool: "Buffer"
---

Most content teams publish a blog post and move on. The post gets one share on LinkedIn, maybe a tweet, and then lives in silence on the website for years. Repurposing is universally acknowledged as high-ROI — the same ideas packaged for different platforms and formats — but it never happens consistently because it takes another 2–3 hours per post that no one has.

This workflow makes repurposing automatic. The moment your team marks a Notion post as "Published," Claude receives the full content and simultaneously writes platform-native versions: a LinkedIn post with proper hooks and formatting for that algorithm, a genuine 10-tweet thread where every tweet has standalone value (not just "here's tweet 4 of 10: ..."), and a newsletter intro that teases rather than summarizes. Each format follows explicit stylistic rules in the prompt — no generic AI-sounding content, no copy-pasted summaries.

Buffer handles the scheduling intelligence: LinkedIn posts at your account's peak engagement time, the Twitter thread hits the next morning when your audience is online, and the email intro queues into your newsletter workflow. The entire process from publish to "all three formats scheduled" takes under 90 seconds and costs $0.02 in API fees.

## Prerequisites

1. n8n instance (Cloud or self-hosted; the free tier of n8n Cloud handles this workflow comfortably)
2. Notion workspace with a blog posts database; minimum required properties: `Title` (title), `Status` (select with a "Published" option), `Content` (page body — this is where the post is written)
3. Anthropic API key with Claude 3.5 Sonnet access
4. Buffer account with connected social profiles — LinkedIn Page or Personal, Twitter/X account, and optionally your email platform connected (Buffer supports Mailchimp and others)
5. Buffer API key — found at buffer.com/developers

## Setup Guide

1. **Set up the Notion database** with a `Status` select field. Add the options: `Draft`, `Review`, `Published`. Instruct your team to flip status to `Published` when a post is ready — this is the only trigger step that requires a human action.
2. **Configure the Notion Webhook in n8n** — use n8n's Notion trigger with event type "Page Updated." Add a filter: only proceed if `Status` equals "Published." Without this filter, every page edit will trigger the workflow.
3. **Fetch the full Notion page content** — use the Notion "Get a Page" node with the page ID from the trigger, then use "Get Block Children" to retrieve all blocks. Use an n8n Code node to flatten block content into plain text: concatenate paragraph text, heading text, and list items.
4. **Map prompt variables** — in the Claude HTTP Request node, map: `BLOG_TITLE` from the Notion page title, `BLOG_URL` from a custom Notion property (you'll add this after publishing), `BLOG_CONTENT` from the flattened text, and hardcode `BRAND_VOICE` and `TARGET_AUDIENCE` with your company's specifics.
5. **Parse the output** — Claude returns all three formats in one response separated by `---`. Use n8n's Split Out node or a Code node with `response.split('---')` to extract each format into separate fields. Split the Twitter thread by newline to get individual tweet strings.
6. **Configure Buffer API calls** — three HTTP POST requests to `https://api.bufferapp.com/1/updates/create.json`:
   - LinkedIn: `text = linkedInPost`, `profile_ids[] = your_linkedin_id`, `scheduled_at = now + 2 hours`
   - Twitter Thread: use Buffer's thread endpoint with the array of tweet strings
   - Email: if using Buffer's email integration, POST to the newsletter draft endpoint
7. **Test end-to-end** — create a Notion test page, set status to Published, and verify all three Buffer drafts appear correctly. Check character counts on the LinkedIn post (Buffer will reject posts over the limit).
8. **Add a Slack notification** (optional but recommended) — after Buffer scheduling, send a Slack message to your marketing channel with links to review the drafts before they go live. This gives a human checkpoint without adding friction.

## Who This Is NOT For

- **Teams publishing fewer than 2 posts per month** — the setup time isn't justified below that cadence. Manual repurposing is faster.
- **Highly technical or niche content** (e.g., academic papers, medical content, legal analysis) — Claude may over-simplify complex technical content when adapting for social formats. Always have a subject matter expert review outputs.
- **Brands with very strict tone-of-voice guidelines** — Claude follows the `BRAND_VOICE` prompt variable, but if your brand voice is unusually specific (a particular named personality, proprietary vocabulary), you'll need to extend the prompt significantly with examples.
- **Teams that need LinkedIn and Twitter posts to go live immediately upon publishing** — this workflow has built-in scheduling delays. If you need instant posting, remove the Buffer scheduling and post directly via the LinkedIn and Twitter APIs instead.
