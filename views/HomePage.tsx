import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { artists } from '../data';
import GridCard from '../components/GridCard';

interface HomePageProps {
  onArtistSelect: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onArtistSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-paper flex flex-col relative"
    >
      {/* Main Content Area - Scattered Pile */}
      <main className="w-full h-full relative overflow-hidden">

        {/* Centered Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none">
          <h1 className="text-[10vw] leading-[0.8] font-sans font-black text-ink text-center uppercase tracking-tighter opacity-10">
            <div>What Artists</div>
            <div>Wear?</div>
          </h1>
        </div>

        {/* Scattered Items */}
        {artists.map((artist, idx) => {
          // Deterministic positions based on index
          const randomRotate = (idx * 137.5) % 30 - 15; // Spread between -15 and 15
          const randomX = (idx * 53) % 60 + 20; // 20% to 80%
          const randomY = (idx * 79) % 60 + 20; // 20% to 80%

          return (
            <motion.div
              key={artist.id}
              drag
              dragMomentum={false}
              whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
              whileDrag={{ scale: 1.2, zIndex: 60, cursor: 'grabbing' }}
              initial={{
                top: `${randomY}%`,
                left: `${randomX}%`,
                rotate: randomRotate,
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: idx * 0.1, duration: 0.5 }
              }}
              className="absolute w-48 sm:w-64 aspect-[3/4] cursor-grab"
              style={{
                x: '-50%',
                y: '-50%',
              }}
              onTap={() => onArtistSelect(artist.id)}
            >
              <div className="w-full h-full bg-white p-2 shadow-xl border border-divider transition-colors hover:border-ink">
                <div className="w-full h-full relative overflow-hidden bg-gray-50">
                  <img
                    src={`https://picsum.photos/id/${artist.coverImageSeed}/600/800`}
                    alt={artist.name}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                  {/* Hover Name Tag */}
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-2 text-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <span className="text-xs font-black uppercase tracking-widest text-ink">{artist.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </main>


    </motion.div>
  );
};

export default HomePage;