import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { artists } from '../data';
import GridNavigation from '../components/GridNavigation';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';

interface HomePageProps {
  onArtistSelect: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onArtistSelect }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative"
    >
      {/* Main Content Area - Fashion Chronicle Timeline */}
      <main
        ref={scrollRef}
        className="w-full h-full relative overflow-x-auto overflow-y-hidden flex items-center cursor-ew-resize scrollbar-hide"
      >
        {/* Title */}
        <div className="fixed top-8 w-full flex justify-center z-50 pointer-events-none mix-blend-difference text-white">
          <h1 className="text-5xl font-sligoil-microbold  tracking-tighter">What Artists Wear?</h1>
        </div>

        <div className="flex items-center pl-24 pr-[50vw] gap-12 sm:gap-2 h-full">
          {artists.map((artist, idx) => (
            <div key={artist.id} className="relative flex flex-col items-center justify-center shrink-0 group">

              {/* Artist Card */}
              <motion.div
                className="relative z-10 w-64 sm:w-80 aspect-[3/4] cursor-pointer transition-all duration-500 hover:scale-105"
                onClick={() => onArtistSelect(artist.id)}
                whileHover={{ y: -20 }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={artist.coverImage || `https://picsum.photos/id/${artist.coverImageSeed}/600/800`}
                    alt={artist.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                    draggable={false}
                  />
                  {/* Name Tag */}
                  < div className="absolute bottom-0 left-0 w-full p-3" >
                    <h3 className="text-lg font-black uppercase tracking-wider text-center mix-blend-difference text-white">{artist.name}</h3>
                  </div >
                </div >
              </motion.div >

            </div >
          ))}
        </div >
      </main >


    </motion.div >
  );
};

export default HomePage;