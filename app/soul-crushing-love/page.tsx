"use client";

import Container from '@/components/Container';
import CastGrid from '@/components/CastGrid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { scl } from '@/data/tricia';
import { asset } from '@/utils/asset';
import { Calendar, MapPin, Users } from 'lucide-react';

export const dynamic = 'error';

export default function SclPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src={asset('scl/rows-red-seats-theater.jpg')}
            alt="Theater seats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        
        <Container className="relative z-10 py-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Logo and Info */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <Image
                  src={asset('scl/Logo.png')}
                  alt="Soul Crushing Love Logo"
                  width={400}
                  height={200}
                  className="w-full max-w-md h-auto"
                  priority
                />
              </div>
              
              <p className="text-base lg:text-lg text-white/90 mb-6 leading-relaxed">
                A powerful theatrical experience exploring family dynamics, secrets, and the devastating consequences of hidden truths.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-white/80 flex-shrink-0" />
                  <span className="text-white/90 font-medium">September 18-27</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-white/80 flex-shrink-0" />
                  <span className="text-white/90 font-medium">West Gate Theatre</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-white/80 flex-shrink-0" />
                  <span className="text-white/90 font-medium">23 Cast Members</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div
              className="flex flex-col items-start lg:items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center lg:text-center">
                <h2 className="text-xl lg:text-2xl font-light text-white/90 mb-4">
                  Don&apos;t miss this gripping experience
                </h2>
                <Link 
                  href={scl.ticketUrl}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-elegant-lg hover:shadow-xl rounded-lg"
                >
                  Get Tickets Now
                </Link>
                <p className="text-white/70 text-sm mt-3">
                  Limited seating available
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Show Dates */}
      <div className="bg-gray-50 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Performance <span className="text-gradient font-semibold">Schedule</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {scl.dates.map((date, index) => (
                <motion.div
                  key={date}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {date}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Synopsis */}
      <div className="bg-white py-16">
        <Container>
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
              <div className="prose prose-xl max-w-none">
                <p className="whitespace-pre-line text-gray-700 leading-relaxed text-center">
                  {scl.synopsis}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Cast */}
      <div className="bg-gray-50 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Meet the <span className="text-gradient font-semibold">Cast</span>
            </h2>
            <p className="text-xl text-gray-600">Talented performers bringing these complex characters to life</p>
          </motion.div>
          <CastGrid cast={scl.cast} />
        </Container>
      </div>

      {/* Credits */}
      <div className="bg-white py-16">
        <Container>
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
              {scl.credits.map((credit, index) => (
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
        </Container>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-50 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Don&apos;t Miss <span className="text-gradient font-semibold">This Experience</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Secure your seats for this gripping theatrical masterpiece that will leave you questioning everything you thought you knew about family.
            </p>
            <Link 
              href={scl.ticketUrl}
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-elegant-lg hover:shadow-xl"
            >
              Reserve Your Tickets
            </Link>
          </motion.div>
        </Container>
      </div>
    </main>
  );
}
