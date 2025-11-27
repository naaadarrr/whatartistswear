import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Artist, Hotspot } from '../types';

interface ScatteredItemsViewerProps {
  artist: Artist;
}

const ScatteredItemsViewer: React.FC<ScatteredItemsViewerProps> = ({ artist }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Deterministic "random" position based on index to ensure consistent SSR/hydration
  const getPosition = (index: number) => {
    const positions = [
      { top: '20%', left: '20%', rotate: -5 },
      { top: '15%', left: '60%', rotate: 8 },
      { top: '60%', left: '30%', rotate: -12 },
      { top: '55%', left: '70%', rotate: 4 },
      { top: '40%', left: '50%', rotate: 0 },
    ];
    return positions[index % positions.length];
  };

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-paper perspective-[1000px]">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h1 className="text-[15vw] font-bold font-serif leading-none tracking-tighter text-ink uppercase">{artist.name.split(' ')[0]}</h1>
      </div>

      {artist.hotspots.map((item, index) => {
        const pos = getPosition(index);

        return (
          <DraggableItem
            key={item.id}
            item={item}
            artistId={artist.id}
            initialPos={pos}
            containerRef={containerRef}
          />
        );
      })}
    </div>
  );
};

const DraggableItem: React.FC<{
  item: Hotspot;
  artistId: string;
  initialPos: { top: string; left: string; rotate: number };
  containerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ item, artistId, initialPos, containerRef }) => {

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragMomentum={false}
      initial={{
        top: initialPos.top,
        left: initialPos.left,
        rotate: initialPos.rotate,
        scale: 0.9,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, type: 'spring' }
      }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 100 }}
      className="absolute cursor-grab group"
      style={{ width: '280px' }}
    >
      {/* The Physical Card Object */}
      <div className="bg-white p-3 pb-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] transform transition-transform duration-300 border border-divider">
        <div className="aspect-square bg-gray-50 mb-4 overflow-hidden relative">
          <img
            src={`https://picsum.photos/seed/${artistId}${item.id}/300/300`}
            alt={item.label}
            className="w-full h-full object-cover mix-blend-multiply contrast-125 hover:mix-blend-normal transition-all duration-500"
            draggable={false}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
        </div>

        <div className="px-1">
          <span className="text-[9px] font-mono text-secondary block mb-1 uppercase tracking-widest">{item.type} // REF-{item.id}</span>
          <h3 className="font-serif text-xl text-ink leading-none">{item.label}</h3>
        </div>

        {/* Tooltip that appears on Hover */}
        <div className="absolute top-full left-0 w-full pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-ink text-white p-4 text-xs leading-relaxed shadow-xl">
            <p>{item.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {item.keywords.map(k => (
                <span key={k} className="text-[9px] text-gray-400">#{k}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ScatteredItemsViewer;