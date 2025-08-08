import Link from 'next/link';
import { getSiteSettings } from '@/lib/content';
import { Feather } from 'lucide-react';

export default async function Header() {
  const settings = getSiteSettings();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Feather className="size-5" />
          <span>{settings.siteTitle}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {settings.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
