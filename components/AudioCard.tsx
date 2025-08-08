"use client";

import { motion } from 'framer-motion';

export default function AudioCard({ title, src }: { title: string; src?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="rounded-xl border border-black/5 p-5 shadow-sm bg-white"
    >
      <h3 className="font-medium">{title}</h3>
      {src ? (
        <audio className="mt-3 w-full" controls>
          <source src={src} />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p className="text-sm mt-2 text-gray-600">Coming soon</p>
      )}
    </motion.div>
  );
}
