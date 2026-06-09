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
      name: z.string(),       // The variable to look for in the prompt template, e.g. "company_name"
      label: z.string(),      // Human-readable form label, e.g. "Company Name"
      placeholder: z.string(), // Input placeholder text
      defaultValue: z.string() // Fallback value
    })).optional(),
    downloadUrl: z.string(),
    category: z.string(),
    persona: z.string(),
    difficulty: z.string().default("Intermediate"),
    steps: z.array(z.object({
      stepNumber: z.number(),
      title: z.string(),
      description: z.string(),
      tool: z.string().optional()
    }))
  })
});

export const collections = { workflows };
