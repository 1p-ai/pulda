import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'src', 'content');

const failures = [];
const warnings = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const warn = (condition, message) => {
  if (!condition) warnings.push(message);
};

const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const requiredDistFiles = [
  'dist/index.html',
  'dist/about/index.html',
  'dist/project/index.html',
  'dist/project/a4u-platform/index.html',
  'dist/project/pulda-official-website-renewal/index.html',
  'dist/project/eunjo-imweb-homepage/index.html',
  'dist/story/index.html',
  'dist/story/why-we-are-pulda/index.html',
  'dist/story/clarity-before-decoration/index.html',
  'dist/contact/index.html',
  'dist/admin/index.html',
  'dist/sitemap.xml',
  'dist/rss.xml',
  'dist/robots.txt',
  'dist/llms.txt',
];

for (const file of requiredDistFiles) {
  assert(exists(file), 'Missing build output: ' + file);
}

if (exists('dist/admin/index.html')) {
  const adminHtml = read('dist/admin/index.html');
  assert(adminHtml.includes('noindex'), '/admin must include noindex robots meta.');
  assert(!/(sk-[A-Za-z0-9]|AIza[0-9A-Za-z_-]|SANITY_AUTH_TOKEN|password\s*=|token\s*=|secret\s*=)/i.test(adminHtml), '/admin output should not expose concrete secret values.');
  assert(/Sanity/i.test(adminHtml), '/admin should clearly route content operations to Sanity.');
}

if (exists('dist/robots.txt')) {
  const robots = read('dist/robots.txt');
  assert(/Disallow:\s*\/admin\//i.test(robots), 'robots.txt must disallow /admin/.');
  assert(/Sitemap:/i.test(robots), 'robots.txt must include sitemap location.');
}

if (exists('dist/sitemap.xml')) {
  const sitemap = read('dist/sitemap.xml');
  assert(!sitemap.includes('/admin/'), 'sitemap.xml must not include /admin/.');
  for (const route of ['/project/pulda-official-website-renewal/', '/project/eunjo-imweb-homepage/', '/story/why-we-are-pulda/']) {
    assert(sitemap.includes(route), 'sitemap.xml missing route: ' + route);
  }
}

if (exists('dist/rss.xml')) {
  const rss = read('dist/rss.xml');
  assert(rss.includes('/story/why-we-are-pulda/'), 'rss.xml should include the first sample story.');
}

if (exists('dist/llms.txt')) {
  const llms = read('dist/llms.txt');
  assert(llms.includes('https://www.puldaunion.com/sitemap.xml'), 'llms.txt should point AI agents to the canonical sitemap.');
  assert(llms.includes('/project/pulda-official-website-renewal/'), 'llms.txt should include representative project routes.');
  assert(!/(sk-[A-Za-z0-9]|AIza[0-9A-Za-z_-]|SANITY_AUTH_TOKEN|password\s*=|token\s*=|secret\s*=)/i.test(llms), 'llms.txt should not expose secret-like values.');
}

for (const file of requiredDistFiles.filter((file) => /\.(html|xml|txt)$/.test(file))) {
  if (exists(file)) {
    assert(!read(file).includes('example.com'), file + ' should not contain the placeholder example.com domain.');
  }
}

const parseFrontmatter = (source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) fields[keyMatch[1]] = keyMatch[2].trim();
  }
  return fields;
};

const checkMarkdownCollection = (collection, requiredFields) => {
  const dir = path.join(contentRoot, collection);
  assert(fs.existsSync(dir), 'Missing content collection: ' + collection);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md'));
  assert(files.length > 0, 'No markdown files in collection: ' + collection);
  for (const file of files) {
    const rel = path.join('src', 'content', collection, file);
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    const fields = parseFrontmatter(source);
    for (const field of requiredFields) {
      assert(Boolean(fields[field]), rel + ' missing required frontmatter: ' + field);
    }
    warn(source.length < 900, rel + ' is very short for portfolio/blog quality review.');
  }
};

checkMarkdownCollection('projects', ['title', 'description', 'client', 'year', 'publishedAt', 'services', 'tags', 'outcome']);

for (const file of fs.existsSync(path.join(contentRoot, 'projects')) ? fs.readdirSync(path.join(contentRoot, 'projects')).filter((name) => name.endsWith('.md')) : []) {
  const source = fs.readFileSync(path.join(contentRoot, 'projects', file), 'utf8');
  const fields = parseFrontmatter(source);
  warn(Boolean(fields.cover), path.join('src', 'content', 'projects', file) + ' has no cover image. Portfolio quality review needed.');
}
checkMarkdownCollection('stories', ['title', 'description', 'publishedAt', 'author', 'category', 'tags']);

if (failures.length > 0) {
  console.error('QA check failed');
  for (const failure of failures) console.error('- ' + failure);
  if (warnings.length > 0) {
    console.warn('Warnings');
    for (const warning of warnings) console.warn('- ' + warning);
  }
  throw new Error('QA check failed with ' + failures.length + ' issue(s).');
}

console.log('QA check passed');
if (warnings.length > 0) {
  console.warn('Warnings');
  for (const warning of warnings) console.warn('- ' + warning);
}
