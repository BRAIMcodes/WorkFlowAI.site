const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvPath = path.join(__dirname, '../src/data/tools.csv');
const publicPath = path.join(__dirname, '../public');

function generate() {
  const csv = fs.readFileSync(csvPath, 'utf8');
  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
  const rows = parsed.data;

  const hostname = process.env.SITE || 'https://example.com';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  rows.forEach(r => {
    const loc = `${hostname}/${r.job}/${r.action}`;
    xml += `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  });

  xml += `</urlset>`;

  if (!fs.existsSync(publicPath)) fs.mkdirSync(publicPath, { recursive: true });
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), xml, 'utf8');
  console.log('Sitemap generated with', rows.length, 'entries');
}

generate();
