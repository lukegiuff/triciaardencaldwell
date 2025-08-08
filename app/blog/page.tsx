import Link from 'next/link';
import { getAllPosts } from '@/lib/content';
import AnimatedFadeIn from '@/components/AnimatedFadeIn';

export const dynamic = 'error';

export default async function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <AnimatedFadeIn key={post.slug}>
            <li className="group">
              <Link href={`/blog/${post.slug}`} className="block rounded-lg border border-black/5 p-5 hover:border-black/10 transition-colors">
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                {post.summary && <p className="mt-2 text-gray-700">{post.summary}</p>}
              </Link>
            </li>
          </AnimatedFadeIn>
        ))}
      </ul>
    </main>
  );
}
