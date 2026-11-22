const fs = require('fs');
const path = require('path');
const files = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.tsx')) files.push(full);
  }
}
walk('src');
const counts = {};
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const imgs = content.match(/<Image[^>]*>/g) || [];
  for (const img of imgs) {
    const w = img.match(/width=\{(\d+)\}/);
    const h = img.match(/height=\{(\d+)\}/);
    if (w && h) {
      const key = w[1] + 'x' + h[1];
      counts[key] = (counts[key] || 0) + 1;
    }
  }
}
Object.entries(counts).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(v + 'x ' + k));
