import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Artist } from '../types';
import ScatteredItemsViewer from '../components/ScatteredItemsViewer';
import { ArrowLeft, Info, X } from 'lucide-react';

interface DetailPageProps {
  artist: Artist;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ artist, onBack, onNavigate }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <motion.div
      className="flex flex-col h-full w-full bg-paper overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Bar - Minimal Navigation */}
      <div className="absolute top-0 left-0 w-full h-20 z-40 flex justify-between items-center px-8 pointer-events-none">
        {/* Left side empty now */}
        <div />

        <div className="text-center hidden sm:block">
          <h1 className="text-xl font-serif">{artist.name}</h1>
          <p className="text-[10px] uppercase tracking-widest text-secondary">{artist.era} • {artist.country}</p>
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={onBack}
            className="h-10 px-4 flex items-center justify-center border border-ink bg-paper text-ink text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-white transition-colors"
          >
            [ESC]
          </button>

          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${showInfo ? 'bg-ink text-white border-ink' : 'bg-white text-ink border-divider hover:border-ink hover:scale-105 shadow-sm'}`}
          >
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Main Interaction Area: Scattered Canvas */}
      <div className="flex-1 w-full h-full relative bg-gray-50">
        <ScatteredItemsViewer artist={artist} />

        {/* Instruction Overlay */}
        <div className="absolute bottom-12 left-0 w-full text-center pointer-events-none">
          <p className="text-muted text-xs uppercase tracking-[0.2em] opacity-50">Drag items to inspect</p>
        </div>
      </div>

      {/* Info Panel Overlay */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: showInfo ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white z-50 shadow-2xl overflow-y-auto no-scrollbar border-l border-divider"
      >
        <div className="p-12 min-h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={() => setShowInfo(false)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <X size={20} className="text-ink" />
            </button>
          </div>

          <h2 className="text-4xl font-serif text-ink mb-2 leading-none">{artist.name}</h2>
          <p className="text-xs uppercase tracking-widest text-accent mb-8 font-bold">{artist.styleSummary}</p>

          <div className="prose prose-sm prose-zinc mb-12">
            <p className="font-serif text-lg italic leading-relaxed text-secondary">
              "{artist.bookInterpretation}"
            </p>
          </div>

          <div className="mt-auto">
            <h3 className="text-[10px] uppercase tracking-widest text-muted mb-6 border-b border-divider pb-2">Inventory</h3>
            <div className="space-y-4">
              {artist.hotspots.map(item => (
                <div key={item.id} className="flex gap-4 items-start group cursor-default">
                  <div className="w-12 h-12 bg-gray-50 flex-shrink-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <img src={`https://picsum.photos/seed/${artist.id}${item.id}/100`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink">{item.label}</h4>
                    <p className="text-xs text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailPage;