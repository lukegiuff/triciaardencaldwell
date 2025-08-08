import { site } from '@/data/tricia';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import { asset } from '@/utils/asset';

export default async function Footer() {
  const social = site.social;
  return (
    <footer className="border-t border-black/5 mt-16">
      <Container className="py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src={asset('HeaderLogo.png')}
                alt="Tricia Arden Caldwell"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href={social.youtube} aria-label="YouTube"><Youtube className="size-5 hover:text-red-600 transition-colors" /></a>
            <a href={social.instagram} aria-label="Instagram"><Instagram className="size-5 hover:text-pink-600 transition-colors" /></a>
            <a href={social.facebook} aria-label="Facebook"><Facebook className="size-5 hover:text-blue-700 transition-colors" /></a>
            <a href={social.spotify} aria-label="Spotify"><Music2 className="size-5 hover:text-green-600 transition-colors" /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
