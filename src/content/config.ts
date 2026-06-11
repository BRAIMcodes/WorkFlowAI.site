import { defineCollection, z } from 'astro:content';

const workflows = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    timeSaved: z.string(),
    costToRun: z.string().default("Free Tier"),
    primaryTool: z.string(),
    connectedApps: z.array(z.string()),
    promptSnippet: z.string().optional(),
    promptVariables: z.array(z.object({
      name: z.string(),
      label: z.string(),
      placeholder: z.string(),
      defaultValue: z.string()
    })).optional(),
    downloadUrl: z.string(),
    category: z.string(),
    persona: z.string(),
    difficulty: z.string().default("Intermediate"),
    // Trust & UX fields
    lastVerified: z.string().optional().default("June 2026"),
    setupTime: z.string().optional().default("~30 minutes"),
    verifiedBy: z.string().optional().default("WorkflowAI Team"),
    tags: z.array(z.string()).optional().default([]),
    steps: z.array(z.object({
      stepNumber: z.number(),
      title: z.string(),
      description: z.string(),
      tool: z.string().optional()
    }))
  })
});

export const collections = { workflows };
