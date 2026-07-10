import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getStoryPath } from '../utils/contentRoutes';

export const prerender = true;
const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char);

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(import.meta.env.PUBLIC_SITE_URL || 'https://puldaunion.com');
  const stories = (await getCollection('stories')).filter((entry) => !entry.data.draft).sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  const items = stories.map((entry) => {
    const url = new URL(getStoryPath(entry.id), base);
    return `<item><title>${escapeXml(entry.data.title)}</title><description>${escapeXml(entry.data.description)}</description><link>${url}</link><guid>${url}</guid><pubDate>${entry.data.publishedAt.toUTCString()}</pubDate></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>풀다 이야기</title><description>디자인, 기술, 비즈니스의 복잡함을 풀며 발견한 생각</description><link>${new URL('/story/', base)}</link><language>ko</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
