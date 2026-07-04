import type { APIRoute } from 'astro';

export const prerender = true;
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(import.meta.env.PUBLIC_SITE_URL || 'https://example.com');
  return new Response(`User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: ${new URL('/sitemap.xml', base)}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};