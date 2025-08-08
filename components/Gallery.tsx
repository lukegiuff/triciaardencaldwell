"use client";

import Image from 'next/image';
import { useState } from 'react';
import { asset } from '@/utils/asset';
import { motion } from 'framer-motion';

export default function Gallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src) => (
          <motion.button
            key={src}
            onClick={() => setActive(src)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
            whileHover={{ scale: 1.01 }}
          >
            <Image
              src={asset(src)}
              alt="Gallery image"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>
      {active && (
        <button className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setActive(null)}>
          <div className="relative w-[90vw] h-[80vh]">
            <Image src={asset(active)} alt="Preview" fill className="object-contain" />
          </div>
        </button>
      )}
    </div>
  );
}
