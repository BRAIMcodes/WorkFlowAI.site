---
title: "Daily Slack Channel Summarizer With n8n And Claude"
description: "Automatically summarize key decisions, action items, and open questions from Slack channels into a daily digest using Claude 3.5 Sonnet."
timeSaved: "2 hours/week"
costToRun: "Free Tier"
primaryTool: "n8n"
connectedApps:
  - "Claude 3.5 Sonnet"
  - "Slack"
  - "Notion"
lastVerified: "June 2026"
setupTime: "~15 minutes"
verifiedBy: "WorkflowAI Team"
tags: ["Operations", "Slack", "Summarization", "Beginner-friendly"]
promptSnippet: |
  You are a professional operations assistant. Below are Slack messages from the past 24 hours in the channel #[CHANNEL_NAME].

  Your job is to produce a structured digest with exactly these sections:

  ## 🏆 Key Decisions Made
  - Bullet each confirmed decision with the decision-maker's name if mentioned.

  ## ✅ Action Items
  - List each task, who owns it, and any deadline mentioned.

  ## ❓ Open Questions
  - List unresolved questions still needing an answer.

  ## 📌 FYI / Notable Mentions
  - Any links, announcements, or context worth preserving.

  Be concise. Skip casual chitchat and emoji-only messages. Merge duplicate threads into single items.

  Messages:
  [SLACK_MESSAGES]
promptVariables:
  - name: "CHANNEL_NAME"
    label: "Slack Channel Name"
    placeholder: "#engineering"
    defaultValue: "#general"
  - name: "SLACK_MESSAGES"
    label: "Raw Slack Message Block"
    placeholder: "Paste or map raw Slack messages here"
    defaultValue: ""
downloadUrl: "/blueprints/slack-summarizer-n8n-claude.json"
category: "Customer Support"
persona: "Support Teams"
difficulty: "Beginner"
steps:
  - stepNumber: 1
    title: "Daily Schedule Trigger"
    description: "n8n Schedule node fires every weekday at 8:00 AM in your local timezone."
    tool: "n8n"
  - stepNumber: 2
    title: "Fetch Last 24 Hours of Slack Messages"
    description: "Slack API node calls conversations.history for each target channel, filtering to messages from the past 86,400 seconds."
    tool: "Slack"
  - stepNumber: 3
    title: "Aggregate & Deduplicate Messages"
    description: "A Function node formats messages into a flat text block, stripping bot messages and reactions-only entries."
    tool: "n8n"
  - stepNumber: 4
    title: "Claude Generates Structured Digest"
    description: "Claude 3.5 Sonnet receives the raw messages and returns a structured digest with decisions, action items, and open questions."
    tool: "Claude 3.5 Sonnet"
  - stepNumber: 5
    title: "Post Digest to #daily-digest"
    description: "The formatted summary is posted as a threaded message to your #daily-digest Slack channel."
    tool: "Slack"
  - stepNumber: 6
    title: "Save to Notion Database"
    description: "The digest is saved to a Notion database page with the date, channel name, and full summary for searchable archiving."
    tool: "Notion"
---

If you've ever come into work to find 400 unread Slack messages and spent 20 minutes skimming to figure out what actually matters — this workflow fixes that. It runs every morning before your team starts their day, reads every message posted in your chosen channels over the past 24 hours, and hands Claude a clean transcript to summarize into four actionable sections: decisions made, tasks assigned, questions still open, and notable links.

The real value isn't just time savings — it's organizational memory. Most teams lose critical decisions in Slack threads within 72 hours. This workflow pipes everything into a searchable Notion database, so six months from now you can actually find when and why a decision was made, who owned what, and what questions were never resolved. The #daily-digest channel also creates a natural entry point for async teammates in other timezones who'd otherwise have to read the full fire hose.

Claude 3.5 Sonnet is particularly well-suited here because it handles long context windows and accurately distinguishes substantive decisions from casual conversation — a distinction that simpler keyword-extraction approaches consistently get wrong.

## Prerequisites

1. An active n8n instance (n8n Cloud free tier or self-hosted with the community edition)
2. A Slack workspace where you have permission to create an app with `channels:history` and `chat:write` scopes
3. An Anthropic API key (Claude 3.5 Sonnet is available on the free tier with rate limits)
4. A Notion integration token and a target database with at minimum `Date`, `Channel`, and `Summary` properties
5. The target Slack channels must be public, or your Slack bot must be invited to private channels

## Setup Guide

1. **Create a Slack app** at api.slack.com/apps — add OAuth scopes `channels:history`, `groups:history`, and `chat:write`. Install it to your workspace and copy the Bot Token.
2. **Import the n8n blueprint** from the download link above. Open it in your n8n editor.
3. **Configure the Schedule node** — set your preferred trigger time (default: weekdays 8:00 AM). Select your timezone explicitly or it will default to UTC.
4. **Set your channel IDs** in the Slack nodes. Use channel IDs (starting with `C`), not display names — IDs are stable even if channels are renamed. Find them by right-clicking a channel in Slack → View channel details.
5. **Add your Anthropic API key** in the Claude HTTP Request node header as `x-api-key`.
6. **Connect Notion** — paste your integration token and select the target database. Map `Date` to `{{$now}}`, `Channel` to the channel name variable, and `Summary` to Claude's output.
7. **Test with a single channel** first using the manual trigger before enabling the schedule.
8. **Invite your Slack bot** to the #daily-digest channel with `/invite @your-bot-name`.

## Who This Is NOT For

- **Teams smaller than 5 people** — if your Slack is quiet, the digest will be trivial and not worth maintaining.
- **Highly regulated industries** requiring data residency controls — Slack messages will pass through Anthropic's API. Check your compliance requirements before deploying.
- **Teams that need real-time alerts** — this is a batch summarizer, not a monitoring tool. For urgent keyword alerts, pair it with a separate Slack bot.
- **Workspaces using Slack Enterprise Grid** with strict export policies — confirm API access is permitted by your Slack admin before building.
