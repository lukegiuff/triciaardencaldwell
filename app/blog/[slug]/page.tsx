import { getAllPosts, getPostBySlug } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import AnimatedFadeIn from '@/components/AnimatedFadeIn';
import { notFound } from 'next/navigation';

export const dynamic = 'error';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPostBySlug(slug);
  if (!data) return notFound();
  const html = await markdownToHtml(data.body);
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <AnimatedFadeIn>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{data.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{new Date(data.date).toLocaleDateString()}</p>
        <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </AnimatedFadeIn>
    </main>
  );
}
