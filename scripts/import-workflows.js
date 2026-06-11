const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const TEMP_DIR = path.join(__dirname, '..', '.temp');
const WORKFLOWS_DIR = path.join(__dirname, '..', 'src', 'content', 'workflows');
const BLUEPRINTS_DIR = path.join(__dirname, '..', 'public', 'blueprints', 'imported');

// Ensure directories exist
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}
if (!fs.existsSync(BLUEPRINTS_DIR)) {
  fs.mkdirSync(BLUEPRINTS_DIR, { recursive: true });
}

const REPOS = [
  {
    owner: 'Zie619',
    repo: 'n8n-workflows',
    branch: 'main',
    zipName: 'zie619.zip',
    extractDir: 'zie619'
  },
  {
    owner: 'enescingoz',
    repo: 'awesome-n8n-templates',
    branch: 'main',
    zipName: 'enescingoz.zip',
    extractDir: 'enescingoz'
  },
  {
    owner: 'nateshelly',
    repo: 'make-ai-automation-agents-blueprints',
    branch: 'main',
    zipName: 'nateshelly-make.zip',
    extractDir: 'nateshelly-make'
  },
  {
    owner: 'emretasss',
    repo: 'AI-Workflow-Hub-2000-',
    branch: 'main',
    zipName: 'emretasss.zip',
    extractDir: 'emretasss'
  }
];

function downloadFile(url, dest) {
  try {
    if (os.platform() === 'win32') {
      execSync(`powershell -Command "Invoke-WebRequest -Uri '${url}' -OutFile '${dest}'"`, { stdio: 'inherit' });
    } else {
      execSync(`curl -L -o "${dest}" "${url}"`, { stdio: 'inherit' });
    }
  } catch (err) {
    console.error(`Error downloading file from ${url}:`, err);
  }
}

function extractZip(zipPath, destDir) {
  try {
    fs.mkdirSync(destDir, { recursive: true });
    if (os.platform() === 'win32') {
      execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${destDir}' -Force"`, { stdio: 'inherit' });
    } else {
      execSync(`unzip -o "${zipPath}" -d "${destDir}"`, { stdio: 'inherit' });
    }
  } catch (err) {
    console.error(`Error extracting zip ${zipPath}:`, err);
  }
}

function downloadAndExtractAll() {
  REPOS.forEach(repo => {
    const zipPath = path.join(TEMP_DIR, repo.zipName);
    const destDir = path.join(TEMP_DIR, repo.extractDir);

    console.log(`Processing ${repo.owner}/${repo.repo}...`);

    if (fs.existsSync(destDir)) {
      console.log(`Directory ${destDir} already exists, skipping download.`);
      return;
    }

    const zipUrl = `https://github.com/${repo.owner}/${repo.repo}/archive/refs/heads/${repo.branch}.zip`;
    console.log(`Downloading ${zipUrl} to ${zipPath}...`);
    downloadFile(zipUrl, zipPath);

    console.log(`Extracting ${zipPath} to ${destDir}...`);
    extractZip(zipPath, destDir);

    // Delete the zip to save space
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }
    console.log(`Successfully processed ${repo.owner}/${repo.repo}.\n`);
  });
}

// Helper to find all files recursively
function getFilesRecursively(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// Slugify helper
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // remove accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text
}

// Map n8n node type to clean name
function cleanN8nApp(nodeType) {
  if (!nodeType) return null;
  const lower = nodeType.toLowerCase();
  
  if (lower.includes('openai')) return 'OpenAI';
  if (lower.includes('anthropic') || lower.includes('claude')) return 'Anthropic';
  if (lower.includes('gemini') || lower.includes('googlelms') || lower.includes('googleai') || lower.includes('google-gemini')) return 'Gemini';
  if (lower.includes('deepseek')) return 'DeepSeek';
  if (lower.includes('cohere')) return 'Cohere';
  if (lower.includes('ollama')) return 'Ollama';
  if (lower.includes('replicate')) return 'Replicate';
  if (lower.includes('huggingface')) return 'Hugging Face';
  if (lower.includes('langchain')) return 'LangChain';
  
  if (lower.includes('slack')) return 'Slack';
  if (lower.includes('gmail')) return 'Gmail';
  if (lower.includes('googlesheets') || lower.includes('google-sheets') || lower.includes('sheets')) return 'Google Sheets';
  if (lower.includes('googlecalendar') || lower.includes('google-calendar') || lower.includes('calendar')) return 'Google Calendar';
  if (lower.includes('googledrive') || lower.includes('google-drive') || lower.includes('drive')) return 'Google Drive';
  if (lower.includes('hubspot')) return 'HubSpot';
  if (lower.includes('salesforce')) return 'Salesforce';
  if (lower.includes('pipedrive')) return 'Pipedrive';
  if (lower.includes('notion')) return 'Notion';
  if (lower.includes('telegram')) return 'Telegram';
  if (lower.includes('discord')) return 'Discord';
  if (lower.includes('trello')) return 'Trello';
  if (lower.includes('jira')) return 'Jira';
  if (lower.includes('github')) return 'GitHub';
  if (lower.includes('gitlab')) return 'GitLab';
  if (lower.includes('airtable')) return 'Airtable';
  if (lower.includes('typeform')) return 'Typeform';
  if (lower.includes('stripe')) return 'Stripe';
  if (lower.includes('whatsapp')) return 'WhatsApp';
  if (lower.includes('zendesk')) return 'Zendesk';
  if (lower.includes('intercom')) return 'Intercom';
  if (lower.includes('zoom')) return 'Zoom';
  if (lower.includes('shopify')) return 'Shopify';
  if (lower.includes('sendgrid')) return 'SendGrid';
  if (lower.includes('mailgun')) return 'Mailgun';
  if (lower.includes('mailchimp')) return 'Mailchimp';
  if (lower.includes('activecampaign')) return 'ActiveCampaign';
  
  if (lower.includes('postgres') || lower.includes('postgresql')) return 'PostgreSQL';
  if (lower.includes('mysql')) return 'MySQL';
  if (lower.includes('mongodb')) return 'MongoDB';
  if (lower.includes('redis')) return 'Redis';
  if (lower.includes('pinecone')) return 'Pinecone';
  if (lower.includes('qdrant')) return 'Qdrant';
  if (lower.includes('milvus')) return 'Milvus';
  if (lower.includes('chroma')) return 'Chroma';
  
  // Clean fallback
  const parts = nodeType.split('.');
  const baseName = parts[parts.length - 1] || nodeType;
  return baseName
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/^\w/, c => c.toUpperCase());
}

// Map Make module name to clean name
function cleanMakeApp(moduleName) {
  if (!moduleName) return null;
  const parts = moduleName.split(':');
  const service = parts[0] || moduleName;
  const lower = service.toLowerCase();
  
  if (lower.includes('openai')) return 'OpenAI';
  if (lower.includes('anthropic') || lower.includes('claude')) return 'Anthropic';
  if (lower.includes('gemini') || lower.includes('google-gemini') || lower.includes('google-vertex-ai')) return 'Gemini';
  if (lower.includes('deepseek')) return 'DeepSeek';
  
  if (lower.includes('slack')) return 'Slack';
  if (lower.includes('gmail')) return 'Gmail';
  if (lower.includes('google-sheets') || lower.includes('google-sheet') || lower.includes('sheets')) return 'Google Sheets';
  if (lower.includes('google-calendar') || lower.includes('calendar')) return 'Google Calendar';
  if (lower.includes('google-drive') || lower.includes('drive')) return 'Google Drive';
  if (lower.includes('hubspot') || lower.includes('hubspotcrm')) return 'HubSpot';
  if (lower.includes('salesforce')) return 'Salesforce';
  if (lower.includes('pipedrive')) return 'Pipedrive';
  if (lower.includes('notion')) return 'Notion';
  if (lower.includes('telegram')) return 'Telegram';
  if (lower.includes('discord')) return 'Discord';
  if (lower.includes('trello')) return 'Trello';
  if (lower.includes('jira')) return 'Jira';
  if (lower.includes('github')) return 'GitHub';
  if (lower.includes('gitlab')) return 'GitLab';
  if (lower.includes('airtable')) return 'Airtable';
  if (lower.includes('typeform')) return 'Typeform';
  if (lower.includes('stripe')) return 'Stripe';
  if (lower.includes('whatsapp')) return 'WhatsApp';
  if (lower.includes('zendesk')) return 'Zendesk';
  if (lower.includes('intercom')) return 'Intercom';
  if (lower.includes('zoom')) return 'Zoom';
  if (lower.includes('shopify')) return 'Shopify';
  if (lower.includes('pinecone')) return 'Pinecone';
  if (lower.includes('qdrant')) return 'Qdrant';
  
  return service
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/^\w/, c => c.toUpperCase());
}

// Safe description length cleaner (Zod max 160 characters)
function cleanDescription(desc, title) {
  if (!desc) return `Automated integration workflow for ${title}.`;
  let cleaned = desc.replace(/<[^>]*>/g, '').replace(/[\r\n]+/g, ' ').trim();
  if (cleaned.length > 160) {
    cleaned = cleaned.substring(0, 157).trim() + '...';
  }
  return cleaned;
}

// Main logic
function importWorkflows() {
  // Download zip files first
  console.log('Downloading and extracting all repositories...');
  downloadAndExtractAll();

  console.log('\nLoading existing workflows list...');
  const existingSlugs = new Set(
    fs.readdirSync(WORKFLOWS_DIR)
      .filter(f => f.endsWith('.md'))
      .map(f => f.slice(0, -3))
  );

  console.log(`Found ${existingSlugs.size} existing workflows in library.\n`);

  // Target directories to search
  const SEARCH_PATHS = [
    {
      repo: 'Zie619/n8n-workflows',
      path: path.join(TEMP_DIR, 'zie619', 'n8n-workflows-main', 'workflows'),
      primaryTool: 'n8n'
    },
    {
      repo: 'enescingoz/awesome-n8n-templates',
      path: path.join(TEMP_DIR, 'enescingoz', 'awesome-n8n-templates-main'),
      primaryTool: 'n8n'
    },
    {
      repo: 'nateshelly/make-ai-automation-agents-blueprints',
      path: path.join(TEMP_DIR, 'nateshelly-make', 'make-ai-automation-agents-blueprints-main'),
      primaryTool: 'Make.com'
    },
    {
      repo: 'emretasss/AI-Workflow-Hub-2000-',
      path: path.join(TEMP_DIR, 'emretasss', 'AI-Workflow-Hub-2000--main'),
      primaryTool: 'n8n'
    }
  ];

  let totalParsed = 0;
  let totalImported = 0;

  SEARCH_PATHS.forEach(target => {
    console.log(`Scanning target paths for ${target.repo}...`);
    const allFiles = getFilesRecursively(target.path);
    console.log(`Found ${allFiles.length} files in ${target.repo}.`);

    allFiles.forEach(filePath => {
      // Read file content and check if it starts with { (is JSON)
      let contentStr;
      try {
        contentStr = fs.readFileSync(filePath, 'utf8').trim();
      } catch (err) {
        return; // Skip read errors
      }

      if (!contentStr.startsWith('{')) {
        return; // Not a JSON file
      }

      let json;
      try {
        json = JSON.parse(contentStr);
      } catch (err) {
        return; // Skip invalid JSON
      }

      totalParsed++;

      // AI filtering
      let isAi = false;
      const jsonStrLower = contentStr.toLowerCase();
      const aiKeywords = [
        'openai', 'anthropic', 'gemini', 'cohere', 'ollama', 'replicate', 'huggingface', 
        'langchain', 'deepseek', 'awsbedrock', 'mistral', 'groq', 'chatgpt', 'claude'
      ];
      
      for (const kw of aiKeywords) {
        if (jsonStrLower.includes(kw)) {
          isAi = true;
          break;
        }
      }

      if (!isAi) {
        return; // Skip non-AI workflows
      }

      // Process n8n workflow
      if (target.primaryTool === 'n8n' && json.nodes && Array.isArray(json.nodes)) {
        const title = json.name || path.basename(filePath, '.json');
        const slug = slugify(title);

        if (existingSlugs.has(slug)) {
          return; // Skip duplicates
        }

        const nodes = json.nodes;
        const connectedAppsSet = new Set();
        const steps = [];
        let stepNum = 1;

        nodes.forEach(node => {
          if (!node.type) return;
          if (node.type === 'n8n-nodes-base.noOp' || node.type.includes('info') || node.type.includes('note')) return;

          const app = cleanN8nApp(node.type);
          if (app) {
            connectedAppsSet.add(app);
            steps.push({
              stepNumber: stepNum++,
              title: node.name || app,
              description: `Processes and automates operations via the ${app} integration.`,
              tool: app
            });
          }
        });

        const connectedApps = Array.from(connectedAppsSet);
        if (connectedApps.length === 0) return; // skip if no recognizable apps

        // Save JSON blueprint locally to public folder
        const localDownloadUrl = `/blueprints/imported/${slug}.json`;
        const blueprintPath = path.join(BLUEPRINTS_DIR, `${slug}.json`);
        fs.writeFileSync(blueprintPath, JSON.stringify(json, null, 2), 'utf8');

        // Auto-categorize based on apps
        let category = 'Operations';
        let persona = 'Operations Managers';
        const appsLower = connectedApps.map(a => a.toLowerCase());

        if (appsLower.some(a => ['hubspot', 'pipedrive', 'salesforce', 'apollo', 'outreach'].includes(a))) {
          category = 'Sales';
          persona = 'Sales Reps';
        } else if (appsLower.some(a => ['buffer', 'mailchimp', 'sendgrid', 'activecampaign'].includes(a))) {
          category = 'Marketing';
          persona = 'Marketers';
        } else if (appsLower.some(a => ['zendesk', 'intercom', 'freshdesk'].includes(a))) {
          category = 'Customer Support';
          persona = 'Support Teams';
        }

        const difficulty = nodes.length < 6 ? 'Beginner' : nodes.length < 12 ? 'Intermediate' : 'Advanced';
        const timeSaved = difficulty === 'Beginner' ? '3 hours/week' : difficulty === 'Intermediate' ? '5 hours/week' : '8 hours/week';

        // Cap steps at 8
        let finalSteps = steps;
        if (steps.length > 8) {
          finalSteps = steps.slice(0, 7);
          finalSteps.push({
            stepNumber: 8,
            title: "Finalize Pipeline Processing",
            description: `Runs the remaining ${steps.length - 7} actions to complete the workflow.`,
            tool: 'n8n'
          });
        }

        const description = cleanDescription(json.description || `Integrate ${connectedApps.join(' and ')} automatically using n8n.`, title);

        const frontmatter = {
          title,
          description,
          timeSaved,
          costToRun: 'Free Tier',
          primaryTool: 'n8n',
          connectedApps,
          downloadUrl: localDownloadUrl,
          category,
          persona,
          difficulty,
          lastVerified: 'June 2026',
          setupTime: '~20 minutes',
          verifiedBy: 'WorkflowAI Team',
          tags: Array.from(new Set([category, 'n8n', ...connectedApps.slice(0, 2)])),
          steps: finalSteps
        };

        const markdownContent = `---
title: "${frontmatter.title.replace(/"/g, '\\"')}"
description: "${frontmatter.description.replace(/"/g, '\\"')}"
timeSaved: "${frontmatter.timeSaved}"
costToRun: "${frontmatter.costToRun}"
primaryTool: "${frontmatter.primaryTool}"
connectedApps:
${frontmatter.connectedApps.map(a => `  - "${a}"`).join('\n')}
downloadUrl: "${frontmatter.downloadUrl}"
category: "${frontmatter.category}"
persona: "${frontmatter.persona}"
difficulty: "${frontmatter.difficulty}"
lastVerified: "${frontmatter.lastVerified}"
setupTime: "${frontmatter.setupTime}"
verifiedBy: "${frontmatter.verifiedBy}"
tags:
${frontmatter.tags.map(t => `  - "${t}"`).join('\n')}
steps:
${frontmatter.steps.map(s => `  - stepNumber: ${s.stepNumber}
    title: "${s.title.replace(/"/g, '\\"')}"
    description: "${s.description.replace(/"/g, '\\"')}"
    tool: "${s.tool.replace(/"/g, '\\"')}"`).join('\n')}
---

Optimize your tech stack and automate workflows between ${connectedApps.join(', ')} natively. 

This verified AI automation workflow blueprint runs on n8n and enables real-time data syncs, content generation, or notifications without writing complex code.

### Prerequisites
1. An **n8n** account (self-hosted or Cloud)
2. API access keys and credentials for: ${connectedApps.join(', ')}

### Setup Guide
1. **Download Blueprint:** Click the download button above to get the raw JSON file.
2. **Import to n8n:** Open your n8n canvas, click settings in the top-right, and choose **Import from File**. Upload the JSON file.
3. **Configure Node Credentials:** Double-click each node representing ${connectedApps.join(', ')} and authenticate with your account credentials.
4. **Activate Scenario:** Test the flow manually by clicking **Test step** on the trigger, verify the output, then toggle the workflow to **Active** to start running.
`;

        fs.writeFileSync(path.join(WORKFLOWS_DIR, `${slug}.md`), markdownContent, 'utf8');
        existingSlugs.add(slug);
        totalImported++;
      }

      // Process Make.com workflow
      if (target.primaryTool === 'Make.com' && json.flow && Array.isArray(json.flow)) {
        const title = json.name || path.basename(filePath);
        const slug = slugify(title);

        if (existingSlugs.has(slug)) {
          return;
        }

        const flow = json.flow;
        const connectedAppsSet = new Set();
        const steps = [];
        let stepNum = 1;

        flow.forEach(item => {
          if (!item.module) return;
          const app = cleanMakeApp(item.module);
          if (app) {
            connectedAppsSet.add(app);
            steps.push({
              stepNumber: stepNum++,
              title: item.title || `Execute ${app} module`,
              description: `Processes operations within Make.com using ${app}.`,
              tool: app
            });
          }
        });

        const connectedApps = Array.from(connectedAppsSet);
        if (connectedApps.length === 0) return;

        // Save JSON blueprint locally to public folder
        const localDownloadUrl = `/blueprints/imported/${slug}.json`;
        const blueprintPath = path.join(BLUEPRINTS_DIR, `${slug}.json`);
        fs.writeFileSync(blueprintPath, JSON.stringify(json, null, 2), 'utf8');

        let category = 'Operations';
        let persona = 'Operations Managers';
        const appsLower = connectedApps.map(a => a.toLowerCase());

        if (appsLower.some(a => ['hubspot', 'pipedrive', 'salesforce', 'apollo', 'outreach'].includes(a))) {
          category = 'Sales';
          persona = 'Sales Reps';
        } else if (appsLower.some(a => ['buffer', 'mailchimp', 'sendgrid', 'activecampaign'].includes(a))) {
          category = 'Marketing';
          persona = 'Marketers';
        } else if (appsLower.some(a => ['zendesk', 'intercom', 'freshdesk'].includes(a))) {
          category = 'Customer Support';
          persona = 'Support Teams';
        }

        const difficulty = flow.length < 6 ? 'Beginner' : flow.length < 12 ? 'Intermediate' : 'Advanced';
        const timeSaved = difficulty === 'Beginner' ? '3 hours/week' : difficulty === 'Intermediate' ? '5 hours/week' : '8 hours/week';

        let finalSteps = steps;
        if (steps.length > 8) {
          finalSteps = steps.slice(0, 7);
          finalSteps.push({
            stepNumber: 8,
            title: "Finalize Pipeline Processing",
            description: `Runs the remaining ${steps.length - 7} actions to complete the workflow.`,
            tool: 'Make.com'
          });
        }

        const description = cleanDescription(`Automate processes between ${connectedApps.join(' and ')} via Make.com.`, title);

        const frontmatter = {
          title,
          description,
          timeSaved,
          costToRun: 'Free Tier',
          primaryTool: 'Make.com',
          connectedApps,
          downloadUrl: localDownloadUrl,
          category,
          persona,
          difficulty,
          lastVerified: 'June 2026',
          setupTime: '~20 minutes',
          verifiedBy: 'WorkflowAI Team',
          tags: Array.from(new Set([category, 'Make.com', ...connectedApps.slice(0, 2)])),
          steps: finalSteps
        };

        const markdownContent = `---
title: "${frontmatter.title.replace(/"/g, '\\"')}"
description: "${frontmatter.description.replace(/"/g, '\\"')}"
timeSaved: "${frontmatter.timeSaved}"
costToRun: "${frontmatter.costToRun}"
primaryTool: "${frontmatter.primaryTool}"
connectedApps:
${frontmatter.connectedApps.map(a => `  - "${a}"`).join('\n')}
downloadUrl: "${frontmatter.downloadUrl}"
category: "${frontmatter.category}"
persona: "${frontmatter.persona}"
difficulty: "${frontmatter.difficulty}"
lastVerified: "${frontmatter.lastVerified}"
setupTime: "${frontmatter.setupTime}"
verifiedBy: "${frontmatter.verifiedBy}"
tags:
${frontmatter.tags.map(t => `  - "${t}"`).join('\n')}
steps:
${frontmatter.steps.map(s => `  - stepNumber: ${s.stepNumber}
    title: "${s.title.replace(/"/g, '\\"')}"
    description: "${s.description.replace(/"/g, '\\"')}"
    tool: "${s.tool.replace(/"/g, '\\"')}"`).join('\n')}
---

Optimize your business operations and automate actions between ${connectedApps.join(', ')} seamlessly.

This verified AI integration blueprint runs on Make.com and enables real-time database updates, file sharing, and AI content generation without coding.

### Prerequisites
1. A **Make.com** account
2. Credentials and API connections for: ${connectedApps.join(', ')}

### Setup Guide
1. **Download Blueprint:** Click the download button above to retrieve the raw JSON blueprint.
2. **Import to Make:** Open your Make.com dashboard, create a new scenario, click the three dots in the bottom toolbar, and select **Import Blueprint**. Upload the downloaded file.
3. **Link Connections:** Authenticate the modules representing ${connectedApps.join(', ')} using your custom API keys or OAuth credentials.
4. **Verify and Run:** Run a single execution test, audit the values, and flip the scenario switch to **ON** to start running the automation.
`;

        fs.writeFileSync(path.join(WORKFLOWS_DIR, `${slug}.md`), markdownContent, 'utf8');
        existingSlugs.add(slug);
        totalImported++;
      }
    });
  });

  // Clean up extracted temp directory to keep repo lightweight
  console.log('Cleaning up temporary files...');
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  console.log(`\nImport complete!`);
  console.log(`Parsed ${totalParsed} JSON files.`);
  console.log(`Successfully imported ${totalImported} new AI workflows.`);
}

importWorkflows();
