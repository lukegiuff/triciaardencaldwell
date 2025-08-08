import Container from '@/components/Container';

export const dynamic = 'error';

export default async function BlogIndex() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-4">Blog Coming Soon</p>
          <p className="text-gray-500">
            We&apos;re working on bringing you insightful articles and updates. 
            Check back soon for content about music, composition, and theatrical productions.
          </p>
        </div>
      </Container>
    </main>
  );
}
