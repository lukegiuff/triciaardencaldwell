"use client";

import { motion } from 'framer-motion';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@/utils/asset';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={asset('wakeup/WAKEUP.3.jpg')}
          alt="Background"
          fill
          className="object-cover opacity-8"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/80" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 max-w-3xl">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                Composer & Creator
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-none mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient font-semibold">Tricia</span>
              <br />
              <span className="text-gray-900">Arden</span>
              <br />
              <span className="text-gray-700 font-light">Caldwell</span>
            </motion.h1>
            
            <motion.p
              className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creating powerful musical narratives that resonate with the human experience
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link 
                href="#projects" 
                className="group inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-elegant-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/soul-crushing-love" 
                className="group inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get Tickets</span>
              </Link>
              <Link 
                href="/about" 
                className="group inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                <span>Read full biography</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Portrait */}
          <motion.div 
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] w-full max-w-sm lg:max-w-md overflow-hidden rounded-3xl shadow-elegant-lg">
              <Image 
                src={asset('bio/C0A4BB18-2906-4342-8409-D9E0F70F2CBB.jpeg')} 
                alt="Tricia Arden Caldwell portrait" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
