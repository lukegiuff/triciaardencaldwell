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
    <main>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden mt-20">
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

        {/* Cast */}
        <Section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Original 2023 <span className="text-gradient font-semibold">Cast</span>
            </h2>
            <p className="text-xl text-gray-600">In order of appearance</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Cast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Main Cast</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {wakeUp.cast.filter(m => m.category === 'main').map((member, index) => (
                  <motion.div
                    key={`${member.role}-${member.performer}`}
                    className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                      {member.role}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {member.performer}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Choir */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Choir</h3>
              
              {/* Choir Director */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Director</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <span className="font-semibold text-gray-900">
                      {wakeUp.cast.find(m => m.category === 'choir' && m.role === 'Choir Director')?.performer}
                    </span>
                  </div>
                </div>
              </div>

              {/* Soloists */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Soloists</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {wakeUp.cast.filter(m => m.category === 'soloist').map((member, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <span className="font-semibold text-gray-900">{member.performer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Choir Members */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Members</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {wakeUp.cast.filter(m => m.category === 'choir' && m.role === 'Choir Member').map((member, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <span className="font-semibold text-gray-900">{member.performer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Production Team */}
        <Section className="py-24 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Production <span className="text-gradient font-semibold">Team</span>
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {wakeUp.credits.map((credit, index) => (
                <motion.div
                  key={credit.label}
                  className="bg-gray-100 rounded-2xl p-6 shadow-elegant"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <dt className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                    {credit.label}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {credit.value}
                  </dd>
                </motion.div>
              ))}
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
      </Container>

      {/* Song List */}
      <div className="bg-gray-50 py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Musical <span className="text-gradient font-semibold">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600">The complete song list featuring all characters</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="overflow-hidden rounded-3xl shadow-elegant-lg bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">#</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Song Title</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Characters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {wakeUp.songs.map((song, index) => (
                      <motion.tr
                        key={song.title}
                        className={`hover:bg-gray-50 transition-colors ${song.act ? 'bg-gray-100' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.02 }}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {song.act ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                              {song.act}
                            </span>
                          ) : (
                            index + 1 - (wakeUp.songs.slice(0, index).filter(s => s.act).length)
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className={`text-lg font-medium ${song.act ? 'text-gray-800 font-bold' : 'text-gray-900'}`}>
                            {song.title}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600">{song.characters}</div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        {/* Gallery */}
        <Section>
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
