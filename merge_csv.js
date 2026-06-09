
const fs = require('fs');
const Papa = require('papaparse');
const path = require('path');

const toolsPath = path.join(process.cwd(), 'src/data/tools.csv');
const newToolsPath = path.join(process.cwd(), 'src/data/new_tools.csv');

const toolsCsv = fs.readFileSync(toolsPath, 'utf-8');
const newToolsCsv = fs.readFileSync(newToolsPath, 'utf-8');

const toolsParsed = Papa.parse(toolsCsv, { header: true, skipEmptyLines: true });
const newToolsParsed = Papa.parse(newToolsCsv, { header: true, skipEmptyLines: true });

// Get fields from the original tools.csv to ensure order
const fields = toolsParsed.meta.fields;

// Map new tools to match the fields order
const normalizedNewTools = newToolsParsed.data.map(row => {
  const newRow = {};
  fields.forEach(field => {
    newRow[field] = row[field] || '';
  });
  return newRow;
});

// Combine data
const combinedData = [...toolsParsed.data, ...normalizedNewTools];

// Unparse back to CSV
const updatedCsv = Papa.unparse({
  fields: fields,
  data: combinedData
});

fs.writeFileSync(toolsPath, updatedCsv);
console.log(`Successfully merged ${normalizedNewTools.length} new rows into tools.csv`);
