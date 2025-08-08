import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Page = {
  slug: string;
  title: string;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  published?: boolean;
  body: string;
};

export type SiteSettings = {
  siteTitle: string;
  siteDescription: string;
  navigation: { label: string; href: string }[];
  social: { twitter?: string; github?: string; linkedin?: string };
};

const CONTENT_DIR = path.join(process.cwd(), 'content');

function readFile(filepath: string): string {
  return fs.readFileSync(filepath, 'utf8');
}

function listSlugs(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPageSlugs(): string[] {
  const pagesDir = path.join(CONTENT_DIR, 'pages');
  if (!fs.existsSync(pagesDir)) return [];
  return listSlugs(pagesDir);
}

export function getPageBySlug(slug: string): Page | null {
  const filePath = path.join(CONTENT_DIR, 'pages', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const file = readFile(filePath);
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title || slug,
    body: content,
  };
}

export function getAllPages(): Page[] {
  return getAllPageSlugs()
    .map((slug) => getPageBySlug(slug))
    .filter(Boolean) as Page[];
}

export function getAllPostSlugs(): string[] {
  const postsDir = path.join(CONTENT_DIR, 'posts');
  if (!fs.existsSync(postsDir)) return [];
  return listSlugs(postsDir);
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, 'posts', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const file = readFile(filePath);
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    summary: data.summary,
    tags: data.tags,
    published: data.published !== false,
    body: content,
  };
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p && p.published !== false))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getSiteSettings(): SiteSettings {
  const settingsPath = path.join(CONTENT_DIR, 'settings', 'site.json');
  const raw = readFile(settingsPath);
  return JSON.parse(raw) as SiteSettings;
}
