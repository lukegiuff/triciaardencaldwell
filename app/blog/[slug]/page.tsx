import Container from '@/components/Container';

export const runtime = 'edge';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog Post: {slug}</h1>
        <p className="text-sm text-gray-600 mb-6">Coming soon</p>
        <article className="prose prose-slate max-w-none">
          <p>Blog functionality is being developed. Check back soon for updates and articles.</p>
        </article>
      </Container>
    </main>
  );
}
