import React from 'react';

/**
 * Formats text by italicizing instances of "soul crushing love"
 */
export function formatSynopsis(text: string): React.ReactNode {
  // Split the text on "soul crushing love" (case insensitive) and wrap matches in italics
  const parts = text.split(/(soul crushing love)/gi);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === 'soul crushing love') {
      return <em key={index}>soul crushing love</em>;
    }
    return part;
  });
}
