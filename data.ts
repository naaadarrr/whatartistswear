import { Artist } from './types';

// Helper to generate hotspots loosely based on a standing figure
// Note: In a real app, these coordinates would be hand-mapped to real photos.

export const artists: Artist[] = [
  {
    id: 'joseph-beuys',
    slug: 'joseph-beuys',
    name: 'Joseph Beuys',
    sortYear: 1960,
    enName: 'Joseph Beuys',
    era: '1960s',
    movement: 'Fluxus',
    country: 'Germany',
    styleSummary: 'The shaman of art.',
    bookInterpretation: 'His attire was a uniform and a part of his myth-making.',
    coverImageSeed: '103',
    coverImage: '/assets/JosephBeuys.png',
    tags: ['Uniform', 'Felt', 'Mythic'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Headwear', label: 'Felt Hat', description: 'The iconic fedora, rarely removed.', keywords: ['felt', 'hat', 'signature'] },
      { id: 'h2', x: 50, y: 50, type: 'Outerwear', label: 'Fishing Vest', description: 'Multi-pocketed utility vest.', keywords: ['utility', 'vest', 'practical'] },
      { id: 'h3', x: 50, y: 50, type: 'Top', label: 'White Shirt', description: 'Crisp white button-down, always buttoned to the top.', keywords: ['classic', 'white', 'shirt'] },
    ]
  },
  {
    id: 'AndyWarhol',
    slug: 'AndyWarhol',
    name: 'AndyWarhol',
    sortYear: 1965,
    enName: 'AndyWarhol',
    era: '1960s',
    movement: 'Pop Art',
    country: 'USA',
    styleSummary: 'Pop Art personified.',
    bookInterpretation: 'From Brooks Brothers to leather jackets and platinum wigs.',
    coverImageSeed: '104',
    coverImage: '/assets/AndyWorhol.png',
    tags: ['Pop', 'Wig', 'Iconic'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Headwear', label: 'Platinum Wig', description: 'The defining feature of his later look.', keywords: ['wig', 'platinum', 'hair'] },
      { id: 'h2', x: 50, y: 50, type: 'Eyewear', label: 'Crystal Frames', description: 'Clear plastic frames, often with dark lenses.', keywords: ['glasses', 'eyewear', 'clear'] },
      { id: 'h3', x: 50, y: 50, type: 'Top', label: 'Breton Stripe', description: 'Classic French striped shirt.', keywords: ['stripes', 'casual', 'french'] },
    ]
  },
  {
    id: '1',
    slug: 'yves-klein',
    name: 'Yves Klein',
    enName: 'Yves Klein',
    sortYear: 1950,
    era: '1950s',
    movement: 'Nouveau Réalisme',
    country: 'France',
    styleSummary: 'Spotless Tailored Tuxedo',
    bookInterpretation: 'Klein is best known for creating his famous "International Klein Blue" paintings not in paint-stained overalls, but in an exquisite tuxedo. This was a demonstration of ritual, separating himself from the "dirty hands" of manual labor and emphasizing art as a spiritual, sacred act.',
    coverImageSeed: 101,
    tags: ['Formal', 'European', '1950s'],
    hotspots: [
      { id: 'h1', x: 40, y: 30, label: 'Tuxedo Jacket', description: 'Symbol of ritual and precision, completely free of paint.', keywords: ['Satin Lapel', 'Black Wool', 'Bespoke'], type: 'Suit' },
      { id: 'h2', x: 60, y: 25, label: 'Bowtie', description: 'A perfect white or black tie emphasizing the sacred nature of his work.', keywords: ['Silk', 'Formal', 'Knot'], type: 'Accessory' },
      { id: 'h3', x: 50, y: 70, label: 'Dress Shoes', description: 'Polished patent leather, untouched by the studio floor.', keywords: ['Patent', 'Oxford', 'Shine'], type: 'Shoes' }
    ]
  },
  {
    id: '2',
    slug: 'jean-michel-basquiat',
    name: 'Jean-Michel Basquiat',
    enName: 'Jean-Michel Basquiat',
    sortYear: 1980,
    era: '1980s',
    movement: 'Neo-expressionism',
    country: 'USA',
    styleSummary: 'Paint-Splattered Armani Suit',
    bookInterpretation: 'Basquiat painted in expensive Armani suits, letting pigment splatter onto the luxury fabric. This style blurred the lines between street art and high fashion, ironically critiquing the art market—wearing the uniform of the elite while marking it with the chaos of the studio.',
    coverImageSeed: 102,
    tags: ['Street', 'Luxury', '1980s'],
    hotspots: [
      { id: 'h1', x: 30, y: 40, label: 'Armani Suit', description: 'Italian luxury tailoring destroyed by creative chaos.', keywords: ['Oversized', 'Structured', 'Ruined'], type: 'Suit' },
      { id: 'h2', x: 70, y: 80, label: 'Bare Feet', description: 'Often painted barefoot or in unlaced expensive loafers.', keywords: ['Loafers', 'Unlaced', 'Raw'], type: 'Shoes' },
      { id: 'h3', x: 55, y: 20, label: 'Dreadlocks', description: 'His crown, often standing tall and chaotic like his brushstrokes.', keywords: ['Iconic', 'Freeform'], type: 'Accessory' }
    ]
  },
  {
    id: '3',
    slug: 'georgia-okeeffe',
    name: 'Georgia O\'Keeffe',
    sortYear: 1955,
    enName: 'Georgia O\'Keeffe',
    era: '1950s',
    movement: 'Modernism',
    country: 'USA',
    styleSummary: 'Androgynous, practical, and severe.',
    bookInterpretation: 'A pioneer of minimalism in personal style.',
    coverImageSeed: '102',
    tags: ['Minimalist', 'Black', 'Iconic'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Dress', label: 'Black Wrap Dress', description: 'Custom-made black silk dress.', keywords: ['minimalist', 'black', 'silk'] },
      { id: 'h2', x: 50, y: 50, type: 'Accessory', label: 'Hector Aguilar Belt', description: 'Silver belt buckle by Hector Aguilar.', keywords: ['silver', 'accessory', 'vintage'] },
      { id: 'h3', x: 50, y: 50, type: 'Headwear', label: 'Vaquero Hat', description: 'Wide-brimmed black felt hat.', keywords: ['southwest', 'hat', 'iconic'] },
    ]
  },
  {
    id: 'louise-bourgeois',
    slug: 'louise-bourgeois',
    name: 'Louise Bourgeois',
    sortYear: 1970,
    enName: 'Louise Bourgeois',
    era: '1970s',
    movement: 'Confessional Art',
    country: 'France/USA',
    styleSummary: 'Eclectic layers and textures.',
    bookInterpretation: 'Reflecting her psychological depth and textile history.',
    coverImageSeed: '105',
    tags: ['Texture', 'Layered', 'Psychological'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Outerwear', label: 'Faux Fur Coat', description: 'Oversized and textured coat.', keywords: ['fur', 'texture', 'coat'] },
      { id: 'h2', x: 50, y: 50, type: 'Top', label: 'Smock', description: 'Artist smock, practical and layered.', keywords: ['workwear', 'smock'] },
    ]
  },
  {
    id: 'david-hockney',
    slug: 'david-hockney',
    name: 'David Hockney',
    sortYear: 1975,
    enName: 'David Hockney',
    era: '1970s',
    movement: 'Pop Art',
    country: 'UK',
    styleSummary: 'Colorful, preppy, and distinctly British.',
    bookInterpretation: 'A master of mixing patterns and bright hues.',
    coverImageSeed: '106',
    tags: ['Colorful', 'Preppy', 'Glasses'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Eyewear', label: 'Round Glasses', description: 'Thick black round frames.', keywords: ['glasses', 'iconic', 'black'] },
      { id: 'h2', x: 50, y: 50, type: 'Top', label: 'Rugby Shirt', description: 'Striped rugby shirt in bold colors.', keywords: ['preppy', 'stripes', 'sporty'] },
      { id: 'h3', x: 50, y: 50, type: 'Bottom', label: 'Mismatch Socks', description: 'Intentionally mismatched colorful socks.', keywords: ['quirky', 'socks', 'color'] },
    ]
  },
  {
    id: 'gilbert-george',
    slug: 'gilbert-george',
    name: 'Gilbert & George',
    sortYear: 1980,
    enName: 'Gilbert & George',
    era: '1980s',
    movement: 'Conceptual Art',
    country: 'UK',
    styleSummary: 'Living sculptures.',
    bookInterpretation: 'Always in matching worsted suits, indistinguishable from bank clerks.',
    coverImageSeed: '107',
    tags: ['Suits', 'Matching', 'Living Sculpture'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Suit', label: 'Worsted Suit', description: 'Matching three-button suits.', keywords: ['matching', 'suit', 'formal'] },
      { id: 'h2', x: 50, y: 50, type: 'Accessory', label: 'Tie', description: 'Conservative ties, always present.', keywords: ['tie', 'formal'] },
    ]
  },
  {
    id: 'jean-michel-basquiat-2',
    slug: 'jean-michel-basquiat-2',
    name: 'Jean-Michel Basquiat',
    sortYear: 1985,
    enName: 'Jean-Michel Basquiat',
    era: '1980s',
    movement: 'Neo-Expressionism',
    country: 'USA',
    styleSummary: 'Armani suits splattered with paint.',
    bookInterpretation: 'A chaotic mix of high fashion and street style.',
    coverImageSeed: '108',
    tags: ['Street', 'High Fashion', 'Chaotic'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Suit', label: 'Armani Suit', description: 'Oversized designer suit, worn casually.', keywords: ['designer', 'suit', 'oversized'] },
      { id: 'h2', x: 50, y: 50, type: 'Footwear', label: 'Bare Feet', description: 'Often painted barefoot in his studio.', keywords: ['barefoot', 'studio'] },
      { id: 'h3', x: 50, y: 50, type: 'Hair', label: 'Dreadlocks', description: 'Free-form dreadlocks.', keywords: ['hair', 'natural'] },
    ]
  },
  {
    id: 'sarah-lucas',
    slug: 'sarah-lucas',
    name: 'Sarah Lucas',
    sortYear: 1990,
    enName: 'Sarah Lucas',
    era: '1990s',
    movement: 'YBA',
    country: 'UK',
    styleSummary: 'Tough, androgynous, and defiant.',
    bookInterpretation: 'Jeans, boots, and a leather jacket.',
    coverImageSeed: '109',
    tags: ['Tough', 'Androgynous', 'YBA'],
    hotspots: [
      { id: 'h1', x: 50, y: 50, type: 'Outerwear', label: 'Leather Jacket', description: 'Worn-in black leather biker jacket.', keywords: ['leather', 'tough', 'biker'] },
      { id: 'h2', x: 50, y: 50, type: 'Bottom', label: 'Jeans', description: 'Straight leg denim, practical and classic.', keywords: ['denim', 'jeans', 'casual'] },
      { id: 'h3', x: 50, y: 50, type: 'Footwear', label: 'Boots', description: 'Heavy work boots.', keywords: ['boots', 'workwear'] },
    ]
  },
  {
    id: 'yayoi-kusama',
    slug: 'yayoi-kusama',
    name: 'Yayoi Kusama',
    enName: 'Yayoi Kusama',
    sortYear: 1970,
    era: '1970s-Present',
    movement: 'Conceptual Art',
    country: 'UK',
    styleSummary: 'Matching Worsted Suits',
    bookInterpretation: 'Self-proclaimed "Living Sculptures," they have worn nearly identical, conservative British suits for decades. This aggressive "normality" becomes surreal and performance-based when maintained with such rigor over a lifetime.',
    coverImageSeed: 110,
    tags: ['Suits', 'Matching', 'British'],
    hotspots: [
      { id: 'h1', x: 40, y: 40, label: 'Gilbert\'s Suit', description: 'Standard three-button suit, anonymously perfect.', keywords: ['Tweed', 'Brown', 'Conservative'], type: 'Suit' },
      { id: 'h2', x: 60, y: 40, label: 'George\'s Suit', description: 'The mirror image, completing the sculpture.', keywords: ['Tweed', 'Brown', 'Conservative'], type: 'Suit' }
    ]
  }
];