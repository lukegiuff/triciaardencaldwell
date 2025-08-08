import Container from '@/components/Container';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // For now, just redirect to the about page since that's our main content
  if (slug === 'about') {
    notFound(); // This will redirect to the static /about page
  }
  
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight mb-6">Page Not Found</h1>
        <p className="text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
      </Container>
    </main>
  );
}
