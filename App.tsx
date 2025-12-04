import React, { useState, useMemo, useEffect } from 'react';
import { ViewMode } from './types';
import { artists } from './data';
import HomePage from './views/HomePage';
import DetailPage from './views/DetailPage';
import GridNavigation from './components/GridNavigation';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  // Simple state-based routing for this SPA
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);
  const [currentArtistId, setCurrentArtistId] = useState<string | null>(null);

  const handleArtistSelect = (id: string) => {
    if (id === 'GRID') {
      handleBackToGrid();
      return;
    }
    setCurrentArtistId(id);
    setViewMode(ViewMode.DETAIL);
  };

  const handleBackToGrid = () => {
    setViewMode(ViewMode.GRID);
    setCurrentArtistId(null); // Optional: clear selection when going back to grid
  };

  // Global ESC Key Handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleBackToGrid();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentArtist = useMemo(() =>
    artists.find(a => a.id === currentArtistId) || artists[0],
    [currentArtistId]
  );

  return (
    <div className="w-full h-screen text-ink relative overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {viewMode === ViewMode.GRID && (
          <HomePage
            key="home"
            onArtistSelect={handleArtistSelect}
          />
        )}
        {viewMode === ViewMode.DETAIL && (
          <DetailPage
            key="detail"
            artist={currentArtist}
            onBack={handleBackToGrid}
            onNavigate={(id) => setCurrentArtistId(id)}
          />
        )}
      </AnimatePresence>

      {/* Persistent Grid Navigation */}
      <GridNavigation
        artists={artists}
        currentArtistId={viewMode === ViewMode.DETAIL ? currentArtistId : null}
        onSelect={handleArtistSelect}
      />
    </div>
  );
}