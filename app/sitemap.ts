import { MetadataRoute } from 'next';
import { getAllPages, getAllPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

  const pages = getAllPages()
    .map((p) => ({ url: p.slug === 'home' ? baseUrl : `${baseUrl}/${p.slug}`, lastModified: new Date() }));

  const posts = getAllPosts().map((p) => ({ url: `${baseUrl}/blog/${p.slug}`, lastModified: new Date(p.date) }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...pages,
    ...posts,
  ];
}
