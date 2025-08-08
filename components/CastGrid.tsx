"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { asset } from '@/utils/asset';

export type CastMember = { role: string; performer: string; image?: string };

export default function CastGrid({ cast }: { cast: CastMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cast.map((m, index) => (
        <motion.div 
          key={`${m.role}-${m.performer}`} 
          className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
        >
          <div className="relative aspect-[3/4]">
            {m.image ? (
              <Image
                src={asset(m.image)}
                alt={`${m.performer} as ${m.role}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl text-gray-400 font-light">
                  {m.performer.charAt(0)}
                </div>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs uppercase tracking-wider text-white/80 font-medium mb-1">
                  {m.role}
                </div>
                <div className="text-lg font-semibold text-white leading-tight">
                  {m.performer}
                </div>
              </div>
            </div>
            
            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-300 rounded-2xl" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
