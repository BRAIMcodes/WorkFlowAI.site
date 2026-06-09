const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvPath = path.join(process.cwd(), 'src/data/tools.csv');
const csv = fs.readFileSync(csvPath, 'utf-8');
const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });

const newData = parsed.data.map(row => {
    // Generate slug: ai-for-[job]-[action]
    const slug = `ai-for-${row.job.toLowerCase().replace(/\s+/g, '-')}-${row.action.toLowerCase().replace(/\s+/g, '-')}`;

    // Determine variant based on job category (simple heuristic)
    let variant = 'professional';
    const job = row.job.toLowerCase();
    if (job.includes('designer') || job.includes('writer') || job.includes('creator')) variant = 'creative';
    if (job.includes('developer') || job.includes('analyst') || job.includes('engineer')) variant = 'technical';

    // Default weakness for tool_2 (placeholder, user should update)
    const weakness = "lacks specific features for this use case";

    return {
        slug: slug,
        ...row,
        template_variant: variant,
        tool_2_weakness: weakness
    };
});

const newCsv = Papa.unparse(newData);
fs.writeFileSync(csvPath, newCsv);
console.log('Updated tools.csv with new columns.');
