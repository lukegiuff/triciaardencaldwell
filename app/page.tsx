"use client";

import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Section from '@/components/Section';
import MasonryGallery from '@/components/MasonryGallery';
import AudioCard from '@/components/AudioCard';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { about, wakeUp, scl, miscMusic } from '@/data/tricia';
import { asset } from '@/utils/asset';
import { ArrowRight, Calendar, Music } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Container className="py-24">

        <Section id="projects" className="py-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-light text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="text-gradient font-semibold">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Exploring the depths of human emotion through musical storytelling
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href="/wake-up" className="block">
                <div className="relative overflow-hidden rounded-3xl shadow-elegant-lg group-hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={asset('wakeup/WAKEUP.1.jpg')}
                      alt="WAKE UP — The Musical"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-semibold text-white mb-3">{wakeUp.title}</h3>
                      <p className="text-white/90 line-clamp-3">{wakeUp.synopsis.slice(0, 200)}...</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href="/soul-crushing-love" className="block">
                <div className="relative overflow-hidden rounded-3xl shadow-elegant-lg group-hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={asset('scl/May.jpg')}
                      alt="Soul Crushing Love"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-white/80" />
                        <span className="text-white/80 text-sm">Sept 18-27</span>
                      </div>
                      <h3 className="text-3xl font-semibold text-white mb-3">{scl.title}</h3>
                      <p className="text-white/90 line-clamp-3">{scl.synopsis.slice(0, 200)}...</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </Section>

        <Section id="gallery" className="py-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-light text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Behind the <span className="text-gradient font-semibold">Scenes</span>
            </motion.h2>
          </div>
          <MasonryGallery images={wakeUp.gallery} />
        </Section>

        <Section id="music" className="py-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                <span className="text-gradient font-semibold">Music</span> Collection
              </h2>
              <p className="text-xl text-gray-600">{miscMusic.blurb}</p>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudioCard title="Children's Songs" />
            <AudioCard title="Christmas Collection" />
            <AudioCard title="Original Compositions" />
          </div>
        </Section>
      </Container>
    </main>
  );
}
