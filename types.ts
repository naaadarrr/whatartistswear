export type HotspotType = 'Top' | 'Bottom' | 'Shoes' | 'Accessory' | 'Suit' | 'Details';

export interface Hotspot {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  label: string;
  description: string;
  keywords: string[];
  type: HotspotType;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  enName: string;
  era: string;
  movement: string;
  country: string;
  styleSummary: string;
  bookInterpretation: string;
  coverImageSeed: number; // Used for picsum
  hotspots: Hotspot[];
  tags: string[]; // For filtering
}

export enum ViewMode {
  GRID = 'GRID',
  DETAIL = 'DETAIL'
}