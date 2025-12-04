import React from 'react';
import { Artist } from '../types';
import clsx from 'clsx';

interface GridNavigationProps {
  artists: Artist[];
  currentArtistId: string | null;
  onSelect: (id: string) => void;
}

const GridNavigation: React.FC<GridNavigationProps> = ({ artists, currentArtistId, onSelect }) => {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] pointer-events-none flex justify-center">
      <div className="flex flex-wrap justify-center max-w-4xl">
        {/* GRID Reset Button */}
        <button
          onClick={() => onSelect('GRID')}
          className={clsx(
            "h-8 px-2 flex items-center justify-center border-2 border-ink text-base font-black uppercase tracking-wider transition-colors duration-200 pointer-events-auto -mr-[2px] -mb-[2px]",
            !currentArtistId
              ? "bg-ink text-white"
              : "bg-white text-ink hover:bg-ink hover:text-white"
          )}
        >
          GRID
        </button>

        {artists.map((artist) => {
          const isActive = currentArtistId === artist.id;
          return (
            <button
              key={artist.id}
              onClick={() => onSelect(artist.id)}
              className={clsx(
                "h-8 px-2 flex items-center justify-center border-2 border-ink text-base font-black uppercase tracking-wider transition-colors duration-200 pointer-events-auto -mr-[2px] -mb-[2px]",
                isActive
                  ? "bg-ink text-white"
                  : "bg-white text-ink hover:bg-ink hover:text-white"
              )}
            >
              {artist.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GridNavigation;
