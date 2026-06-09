---
title: "YouTube Video to SEO Blog Post with n8n and Llama 3"
description: "Download the n8n JSON blueprint to automatically extract transcripts from YouTube video URLs and rewrite them into long-form SEO blog posts."
timeSaved: "4 hours/post"
costToRun: "Free (using Llama 3 via Groq Free Tier)"
primaryTool: "n8n"
connectedApps:
  - "Llama 3 (Groq)"
  - "YouTube API"
  - "WordPress"
promptSnippet: |
  You are a professional SEO copywriter.
  You are given a transcript of a YouTube video:

  Transcript: {{ $json.transcript }}

  Rewrite this transcript into a fully structured, long-form blog post targeting [Target_Audience].
  Requirements:
  1. Add an engaging, click-worthy title (H1).
  2. Structure the body with subheadings (H2, H3) and bullet points.
  3. Keep the tone [Tone_of_Voice].
  4. Write a short 150-character SEO meta-description.
  5. Output in markdown format only.
promptVariables:
  - name: "Target_Audience"
    label: "Target Audience"
    placeholder: "Operations Managers and Solo Founders"
    defaultValue: "Operations Managers and Solo Founders"
  - name: "Tone_of_Voice"
    label: "Tone of Voice"
    placeholder: "conversational, authoritative, and clear"
    defaultValue: "conversational, authoritative, and clear"
downloadUrl: "/blueprints/youtube-to-blog-n8n-llama.json"
category: "Marketing"
persona: "Marketers"
difficulty: "Advanced"
steps:
  - stepNumber: 1
    title: "New Video Detection"
    description: "Triggers when a new video is posted to a specific YouTube Channel ID or manually entered via n8n webhook."
    tool: "YouTube API"
  - stepNumber: 2
    title: "Fetch Transcript"
    description: "Retrieves the auto-generated or uploaded English captions from the video."
    tool: "YouTube API"
  - stepNumber: 3
    title: "Rewrite into Markdown via Llama 3"
    description: "Llama 3 (running via Groq or Ollama) analyzes the raw transcript and compiles it into a structured, readable blog post."
    tool: "Llama 3 (Groq)"
  - stepNumber: 4
    title: "Publish to WordPress"
    description: "Drafts a new post in WordPress with the generated markdown content, category tags, and titles ready for review."
    tool: "WordPress"
---

Creating written content from video recordings is one of the most effective ways to scale marketing. However, manually transcribing and formatting a 10-minute video into an SEO-friendly blog post can take hours.

This workflow does the heavy lifting programmatically. It listens for new video uploads, retrieves the transcript, and utilizes the ultra-fast Llama 3 model on Groq to write a polished markdown draft directly into your CMS.

### Prerequisites
1. An active **n8n** instance
2. A Groq Cloud API key (free tier is highly generous)
3. YouTube Data API v3 credentials
4. WordPress credentials (Application Password)

### Setup Guide
1. **Import Blueprint:** Download the JSON blueprint and import it into your n8n canvas.
2. **Setup WordPress API:** Generate a WordPress Application Password in your WordPress admin dashboard (Users > Edit User > Application Passwords).
3. **Configure API nodes:** Connect your Google/YouTube account and set up the Groq Chat node.
4. **Publish Mode:** The workflow sets the WordPress post status to `draft` by default, so your editor can polish it before going live.
