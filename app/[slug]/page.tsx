import { notFound } from 'next/navigation';

export const dynamic = 'error';

export async function generateStaticParams() {
  // Return empty array to generate no static routes
  // This forces any dynamic route to go to 404
  return [];
}

export default async function Page() {
  // Always return not found for any dynamic route
  return notFound();
}
