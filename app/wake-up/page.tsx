"use client";

import Container from '@/components/Container';
import Section from '@/components/Section';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import VideoFallback from '@/components/VideoFallback';
import MasonryGallery from '@/components/MasonryGallery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { wakeUp } from '@/data/tricia';
import { asset } from '@/utils/asset';
import { Play } from 'lucide-react';

export const dynamic = 'error';

export default function WakeUpPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={asset('wakeup/WAKEUP.3.jpg')}
            alt="WAKE UP"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <Container className="relative z-10">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-light mb-6 leading-tight">
              <span className="text-yellow-300 font-semibold">WAKE UP</span>
              <br />
              <span className="text-3xl lg:text-4xl">The Musical</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              A coming-of-age story for young adults that plays with concepts of logic and literary absurdity
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="py-24">
        {/* Synopsis */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
                The <span className="text-gradient font-semibold">Story</span>
              </h2>
              <div className="prose prose-xl max-w-none text-center">
                <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {wakeUp.synopsis}
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Video Section */}
        <Section className="py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className="w-8 h-8 text-gray-400" />
                <h2 className="text-4xl font-light text-gray-900">
                  Featured <span className="text-gradient font-semibold">Performance</span>
                </h2>
              </div>
              <p className="text-gray-600 text-lg">{wakeUp.video.title}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-elegant-lg"
            >
              <YouTubeEmbed id={wakeUp.video.youtubeId} title={wakeUp.video.title} poster={wakeUp.video.poster} />
            </motion.div>
            
            {wakeUp.video.credit && (
              <p className="text-center mt-6 text-gray-600 italic">{wakeUp.video.credit}</p>
            )}
            
            {wakeUp.video.fallbackSrc && (
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <VideoFallback src={wakeUp.video.fallbackSrc} poster={wakeUp.video.poster} title={wakeUp.video.title} />
              </motion.div>
            )}
          </div>
        </Section>

        {/* Gallery */}
        <Section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Production <span className="text-gradient font-semibold">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600">Behind the scenes and performance highlights</p>
          </motion.div>
          <MasonryGallery images={wakeUp.gallery} />
        </Section>
      </Container>
    </main>
  );
}
