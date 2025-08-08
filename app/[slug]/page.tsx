import { getAllPages, getPageBySlug } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import AnimatedFadeIn from '@/components/AnimatedFadeIn';
import { notFound } from 'next/navigation';

export const dynamic = 'error';

export async function generateStaticParams() {
  const pages = getAllPages().filter((p) => p.slug !== 'home');
  return pages.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPageBySlug(slug);
  if (!data) return notFound();
  const html = await markdownToHtml(data.body);
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <AnimatedFadeIn>
        <h1 className="text-4xl font-bold tracking-tight mb-6">{data.title}</h1>
        <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </AnimatedFadeIn>
    </main>
  );
}
