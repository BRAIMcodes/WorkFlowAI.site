const fs = require('fs');
const path = require('path');

const WORKFLOWS_DIR = path.join(__dirname, '../src/content/workflows');

function cleanTitle(rawTitle) {
  // Remove sequence prefixes like "0181_" or "1283_" or "0283-"
  let title = rawTitle.replace(/^\d+[\s_-]*/, '');
  
  // Replace underscores and multiple dashes/spaces with single spaces
  title = title.replace(/[_-]+/g, ' ').trim();
  
  // Convert camelCase to spaces (e.g. "manualHttp" -> "manual Http")
  title = title.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  const ACRONYMS = ['HTTP', 'API', 'CRM', 'AI', 'PDF', 'URL', 'SEO', 'SMS', 'GPT', 'RAG', 'LLM', 'LLMs', 'FAQ', 'B2B', 'B2C', 'SaaS', 'UI', 'UX', 'IP', 'DEX', 'SIEM', 'MITRE', 'DALL-E', 'Gotenberg', 'RSS', 'CV', 'DB', 'SQL', 'RFP', 'IT', 'HTML', 'CSS', 'PSEO'];
  
  return title
    .split(/\s+/)
    .map(word => {
      const upper = word.toUpperCase();
      if (ACRONYMS.includes(upper)) return upper;
      if (word.toLowerCase() === 'make.com') return 'Make.com';
      if (word.toLowerCase() === 'n8n') return 'n8n';
      // Otherwise, capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function classifyWorkflow(title, description, apps) {
  const content = (title + ' ' + description + ' ' + apps.join(' ')).toLowerCase();
  
  // Sales indicators
  const salesKeywords = ['lead', 'sale', 'customer', 'deal', 'crm', 'opportunity', 'prospect', 'outreach', 'hubspot', 'pipedrive', 'salesforce', 'lemlist', 'stripe', 'apollo', 'lusha', 'hunter', 'b2b'];
  // Marketing indicators
  const marketingKeywords = ['blog', 'post', 'social', 'media', 'tweet', 'twitter', 'marketing', 'instagram', 'youtube', 'rss', 'campaign', 'buffer', 'mailchimp', 'sendgrid', 'activecampaign', 'pinterest', 'tiktok', 'seo', 'pseo', 'newsletter', 'medium', 'ghost', 'reddit'];
  // Recruiting indicators
  const recruitingKeywords = ['resume', 'candidate', 'hire', 'hiring', 'interview', 'job', 'recruitment', 'recruiter', 'employee', 'onboarding', 'greenhouse', 'calendly', 'bamboohr', 'lever', 'workday', 'cv'];
  // Customer Support indicators
  const supportKeywords = ['ticket', 'issue', 'support', 'alert', 'error', 'bug', 'fail', 'incident', 'monitor', 'zendesk', 'intercom', 'freshdesk', 'jira', 'slack', 'discord', 'telegram', 'whatsapp', 'twilio'];

  if (salesKeywords.some(kw => content.includes(kw))) {
    return { category: 'Sales', persona: 'Sales Reps' };
  }
  if (marketingKeywords.some(kw => content.includes(kw))) {
    return { category: 'Marketing', persona: 'Marketers' };
  }
  if (recruitingKeywords.some(kw => content.includes(kw))) {
    return { category: 'Recruiting', persona: 'Recruiters' };
  }
  if (supportKeywords.some(kw => content.includes(kw))) {
    return { category: 'Customer Support', persona: 'Support Teams' };
  }
  
  return { category: 'Operations', persona: 'Operations Managers' };
}

function run() {
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.error(`Error: Directory not found: ${WORKFLOWS_DIR}`);
    return;
  }

  const files = fs.readdirSync(WORKFLOWS_DIR).filter(f => f.endsWith('.md'));
  console.log(`Analyzing ${files.length} markdown workflows...`);

  let salesCount = 0;
  let marketingCount = 0;
  let recruitingCount = 0;
  let supportCount = 0;
  let operationsCount = 0;

  files.forEach(file => {
    const filePath = path.join(WORKFLOWS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Parse frontmatter
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
    const match = content.match(frontmatterRegex);
    if (!match) return;

    const frontmatterStr = match[1];
    const lines = frontmatterStr.split(/\r?\n/);

    let title = '';
    let description = '';
    let category = '';
    let persona = '';
    let apps = [];
    let titleLineIdx = -1;
    let categoryLineIdx = -1;
    let personaLineIdx = -1;
    let tagsLineIdx = -1;
    
    // Parse connectedApps
    let inApps = false;
    lines.forEach((line, idx) => {
      const cleanLine = line.trim();
      if (cleanLine.startsWith('title:') && titleLineIdx === -1) {
        title = line.replace('title:', '').replace(/"/g, '').trim();
        titleLineIdx = idx;
      } else if (cleanLine.startsWith('description:')) {
        description = line.replace('description:', '').replace(/"/g, '').trim();
      } else if (cleanLine.startsWith('category:') && categoryLineIdx === -1) {
        category = line.replace('category:', '').replace(/"/g, '').trim();
        categoryLineIdx = idx;
      } else if (cleanLine.startsWith('persona:') && personaLineIdx === -1) {
        persona = line.replace('persona:', '').replace(/"/g, '').trim();
        personaLineIdx = idx;
      } else if (cleanLine.startsWith('tags:') && tagsLineIdx === -1) {
        tagsLineIdx = idx;
      } else if (cleanLine.startsWith('connectedApps:')) {
        inApps = true;
      } else if (inApps && cleanLine.startsWith('-')) {
        apps.push(cleanLine.replace('-', '').replace(/"/g, '').trim());
      } else if (inApps && !cleanLine.startsWith('-') && !line.startsWith(' ')) {
        inApps = false;
      }
    });

    const newTitle = cleanTitle(title);
    const classification = classifyWorkflow(newTitle, description, apps);

    // Update counts
    if (classification.category === 'Sales') salesCount++;
    else if (classification.category === 'Marketing') marketingCount++;
    else if (classification.category === 'Recruiting') recruitingCount++;
    else if (classification.category === 'Customer Support') supportCount++;
    else operationsCount++;

    // Replace frontmatter lines
    if (titleLineIdx !== -1) {
      lines[titleLineIdx] = `title: "${newTitle}"`;
    }
    if (categoryLineIdx !== -1) {
      lines[categoryLineIdx] = `category: "${classification.category}"`;
    }
    if (personaLineIdx !== -1) {
      lines[personaLineIdx] = `persona: "${classification.persona}"`;
    }
    // Update tags if present
    if (tagsLineIdx !== -1) {
      if (lines[tagsLineIdx + 1] && lines[tagsLineIdx + 1].trim().startsWith('-')) {
        const indent = lines[tagsLineIdx + 1].match(/^\s*/)[0];
        lines[tagsLineIdx + 1] = `${indent}- "${classification.category}"`;
      }
    }

    const newFrontmatterStr = lines.join('\n');
    const newContent = content.replace(frontmatterStr, newFrontmatterStr);

    fs.writeFileSync(filePath, newContent, 'utf8');
  });

  console.log('\nProcessing complete!');
  console.log('Category breakdown:');
  console.log(`- Sales: ${salesCount}`);
  console.log(`- Marketing: ${marketingCount}`);
  console.log(`- Recruiting: ${recruitingCount}`);
  console.log(`- Customer Support: ${supportCount}`);
  console.log(`- Operations: ${operationsCount}`);
}

run();
