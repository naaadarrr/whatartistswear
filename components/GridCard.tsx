import React from 'react';
import { motion } from 'framer-motion';
import { Artist } from '../types';

interface GridCardProps {
  artist: Artist;
  onClick: (id: string) => void;
  index: number;
}

const GridCard: React.FC<GridCardProps> = ({ artist, onClick, index }) => {
  return (
    <motion.div
      layoutId={`card-${artist.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(artist.id)}
      className="group cursor-pointer flex flex-col gap-4"
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden relative bg-gray-50">
        <img
          src={`https://picsum.photos/id/${artist.coverImageSeed}/600/800`}
          alt={artist.name}
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
          loading="lazy"
        />
        {/* Artist Name on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <div className="bg-white px-4 py-2 text-sm uppercase tracking-widest font-black">{artist.name}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default GridCard;