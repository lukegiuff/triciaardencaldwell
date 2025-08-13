"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from './Container';
import { Facebook, Instagram, Youtube, Music2, Menu, X } from 'lucide-react';
import { asset } from '@/utils/asset';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/wake-up', label: 'WAKE UP' },
    { href: '/soul-crushing-love', label: 'soul crushing love' },
    { href: '/music', label: 'Music' },
  ];

  const socialLinks = [
    { href: '#', icon: Youtube, label: 'YouTube', hoverColor: 'hover:text-red-600' },
    { href: '#', icon: Instagram, label: 'Instagram', hoverColor: 'hover:text-pink-600' },
    { href: '#', icon: Facebook, label: 'Facebook', hoverColor: 'hover:text-blue-700' },
    { href: '#', icon: Music2, label: 'Spotify', hoverColor: 'hover:text-green-600' },
  ];

  return (
    <motion.div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-glass border-b border-gray-200/50 shadow-elegant' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src={asset('HeaderLogo.png')}
              alt="Tricia Arden Caldwell"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
                        <Link
              href="/soul-crushing-love"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-elegant-lg hover:shadow-xl rounded-lg"
            >
              Tickets
            </Link>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-300">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    aria-label={social.label}
                    className={`text-gray-600 ${social.hoverColor} transition-colors transform hover:scale-110`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setOpen(!open)} 
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {open && (
          <motion.div 
            className="lg:hidden mt-6 pt-6 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
                          <Link
              href="/soul-crushing-love"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-center font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-elegant-lg hover:shadow-xl rounded-lg mt-2"
            >
              Tickets
            </Link>
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.label}
                      href={social.href} 
                      aria-label={social.label}
                      className={`text-gray-600 ${social.hoverColor} transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
}
