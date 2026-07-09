import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getProjectPath, getStoryPath } from '../utils/contentRoutes';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(import.meta.env.PUBLIC_SITE_URL || 'https://example.com');
  const [projects, stories] = await Promise.all([getCollection('projects'), getCollection('stories')]);
  const pages = [
    { path: '/', changed: new Date() },
    { path: '/about/', changed: new Date() },
    { path: '/project/', changed: new Date() },
    { path: '/story/', changed: new Date() },
    { path: '/contact/', changed: new Date() },
    ...projects.filter((entry) => !entry.data.draft && !entry.data.noindex).map((entry) => ({ path: getProjectPath(entry.id), changed: entry.data.updatedAt ?? entry.data.publishedAt })),
    ...stories.filter((entry) => !entry.data.draft && !entry.data.noindex).map((entry) => ({ path: getStoryPath(entry.id), changed: entry.data.updatedAt ?? entry.data.publishedAt })),
  ];
  const body = pages.map(({ path, changed }) => `<url><loc>${new URL(path, base)}</loc><lastmod>${changed.toISOString()}</lastmod></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};