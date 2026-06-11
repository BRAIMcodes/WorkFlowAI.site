const fs = require('fs');
const path = require('path');

// Read the issue body from file or argument
const issueBodyPath = process.argv[2];
if (!issueBodyPath) {
  console.error('Error: Please provide path to issue body file.');
  process.exit(1);
}

if (!fs.existsSync(issueBodyPath)) {
  console.error(`Error: File not found at ${issueBodyPath}`);
  process.exit(1);
}

const body = fs.readFileSync(issueBodyPath, 'utf8');

// Helper to extract value under a markdown header
function getHeaderValue(text, header) {
  const regex = new RegExp(`### ${header}\\s*\\n\\s*([\\s\\S]*?)(?=\\n\\s*###|$)`, 'i');
  const match = text.match(regex);
  if (!match) return '';
  return match[1].trim();
}

// Extract fields
const title = getHeaderValue(body, 'Workflow Title');
const tool = getHeaderValue(body, 'Primary Orchestration Tool');
const category = getHeaderValue(body, 'Workflow Category');
const persona = getHeaderValue(body, 'Persona / Target Role');
const appsStr = getHeaderValue(body, 'Connected Apps \\(comma-separated\\)');
const saved = getHeaderValue(body, 'Est. Time Saved \\(per week\\)') || '5 hours/week';
const description = getHeaderValue(body, 'Description / Problem Solved');
const prompt = getHeaderValue(body, 'System AI Prompt \\(optional\\)');
const contributor = getHeaderValue(body, 'Contributor GitHub Username \\(optional\\)');

let jsonRaw = getHeaderValue(body, 'Raw JSON Blueprint Config');
// Clean up markdown code blocks if any inside the json field
if (jsonRaw.startsWith('```')) {
  jsonRaw = jsonRaw.replace(/^```[a-z]*\n/, '').replace(/\n```$/, '').trim();
}

if (!title || !tool || !category || !persona || !description || !jsonRaw) {
  console.error('Error: Required fields are missing in the issue template submission.');
  console.log('Parsed details:');
  console.log('- Title:', title);
  console.log('- Tool:', tool);
  console.log('- Category:', category);
  console.log('- Persona:', persona);
  console.log('- Description:', description);
  console.log('- JSON Present:', !!jsonRaw);
  process.exit(1);
}

// Generate unique slug
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const finalSlug = `submission-${slug}`;

// Validate JSON
try {
  JSON.parse(jsonRaw);
} catch (e) {
  console.error('Error: Raw JSON Blueprint Config is not valid JSON.', e.message);
  process.exit(1);
}

// Ensure target directories exist
const submissionsDir = path.join(__dirname, '../public/blueprints/imported/submissions');
if (!fs.existsSync(submissionsDir)) {
  fs.mkdirSync(submissionsDir, { recursive: true });
}

// Write the JSON blueprint
const jsonPath = path.join(submissionsDir, `${finalSlug}.json`);
fs.writeFileSync(jsonPath, jsonRaw, 'utf8');

// Format Connected Apps array
const connectedApps = appsStr
  ? appsStr.split(',').map(a => a.trim()).filter(Boolean)
  : [];

// Determine timeline steps automatically from the JSON or default to description
let steps = [
  { stepNumber: 1, title: 'Trigger', description: 'Initiates the automation workflow sequence.' },
  { stepNumber: 2, title: 'AI Processing', description: 'Runs AI models to extract, filter, or generate results.' },
  { stepNumber: 3, title: 'Action Execution', description: 'Updates connected destination applications.' }
];

try {
  const jsonParsed = JSON.parse(jsonRaw);
  if (jsonParsed.nodes && Array.isArray(jsonParsed.nodes)) {
    steps = jsonParsed.nodes
      .slice(0, 5) // max 5 steps for brevity
      .map((node, i) => ({
        stepNumber: i + 1,
        title: node.name || 'Execute Action',
        description: `Process execution using node type: ${node.type || 'Action'}.`,
        tool: tool
      }));
  }
} catch (e) {
  // fallback to default
}

const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

// Build Frontmatter Markdown file
const frontmatter = {
  title: title,
  description: description.substring(0, 160).replace(/\n/g, ' '),
  timeSaved: saved,
  costToRun: 'Free Tier',
  primaryTool: tool,
  connectedApps: connectedApps,
  downloadUrl: `/blueprints/imported/submissions/${finalSlug}.json`,
  category: category,
  persona: persona,
  difficulty: 'Intermediate',
  lastVerified: currentMonth,
  setupTime: '~15 minutes',
  verifiedBy: contributor ? `@${contributor}` : 'WorkflowAI Team',
  tags: [category, tool].concat(connectedApps),
  contributor: contributor || undefined,
  steps: steps
};

// Write the Markdown File
const mdDir = path.join(__dirname, '../src/content/workflows');
const mdPath = path.join(mdDir, `${finalSlug}.md`);

const mdBody = `---
title: "${frontmatter.title.replace(/"/g, '\\"')}"
description: "${frontmatter.description.replace(/"/g, '\\"')}"
timeSaved: "${frontmatter.timeSaved}"
costToRun: "${frontmatter.costToRun}"
primaryTool: "${frontmatter.primaryTool}"
connectedApps: ${JSON.stringify(frontmatter.connectedApps)}
downloadUrl: "${frontmatter.downloadUrl}"
category: "${frontmatter.category}"
persona: "${frontmatter.persona}"
difficulty: "${frontmatter.difficulty}"
lastVerified: "${frontmatter.lastVerified}"
setupTime: "${frontmatter.setupTime}"
verifiedBy: "${frontmatter.verifiedBy}"
tags: ${JSON.stringify(frontmatter.tags)}
${contributor ? `contributor: "${contributor}"` : ''}
steps:
${steps.map(s => `  - stepNumber: ${s.stepNumber}\n    title: "${s.title.replace(/"/g, '\\"')}"\n    description: "${s.description.replace(/"/g, '\\"')}"${s.tool ? `\n    tool: "${s.tool}"` : ''}`).join('\n')}
---

### Setup Guide & Prerequisites
This workflow blueprint was submitted by a community member. To deploy it:
1. Copy or download the raw JSON blueprint assets above.
2. In your ${tool} interface, create a new workflow canvas.
3. Import or paste the JSON directly into your editor.
4. Configure credentials and API connections for: ${connectedApps.join(', ') || 'Connected Apps'}.

### Key Objectives
* **Automation Focus:** Built to optimize manual bottlenecks for ${persona}.
* **Orchestration:** Seamless execution on ${tool}.
* **Time Saved:** Frees up an estimated ${saved} of operational overhead.
`;

fs.writeFileSync(mdPath, mdBody, 'utf8');

console.log(`Success: Generated workflow assets for ${finalSlug}!`);
console.log(`Markdown Path: ${mdPath}`);
console.log(`JSON Path: ${jsonPath}`);
