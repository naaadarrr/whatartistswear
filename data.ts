import { Artist } from './types';

// Helper to generate hotspots loosely based on a standing figure
// Note: In a real app, these coordinates would be hand-mapped to real photos.

export const artists: Artist[] = [
  {
    id: '1',
    slug: 'yves-klein',
    name: 'Yves Klein',
    enName: 'Yves Klein',
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
    enName: 'Georgia O\'Keeffe',
    era: '1930s-70s',
    movement: 'American Modernism',
    country: 'USA',
    styleSummary: 'Androgynous Black Wrap',
    bookInterpretation: 'O\'Keeffe\'s style was as modern as her paintings. She rejected the ornamentation of her era, opting for severe black wool suits, men\'s shirts, and simple wrap dresses. She often made her own clothes, prioritizing function and silhouette.',
    coverImageSeed: 103,
    tags: ['Minimalist', 'Androgynous', 'Black'],
    hotspots: [
      { id: 'h1', x: 35, y: 30, label: 'Men\'s Shirt', description: 'Crisp cotton or silk, stripped of gender norms.', keywords: ['White', 'Structured', 'Collar'], type: 'Top' },
      { id: 'h2', x: 65, y: 60, label: 'Wrap Skirt', description: 'Handmade black wool, focusing on texture and utility.', keywords: ['Wool', 'Black', 'Drape'], type: 'Bottom' },
      { id: 'h3', x: 50, y: 15, label: 'Hector Aguilar Pin', description: 'A single silver belt buckle or pin, her only jewelry.', keywords: ['Silver', 'Taxco', 'Modern'], type: 'Accessory' }
    ]
  },
  {
    id: '4',
    slug: 'joseph-beuys',
    name: 'Joseph Beuys',
    enName: 'Joseph Beuys',
    era: '1960s-70s',
    movement: 'Fluxus',
    country: 'Germany',
    styleSummary: 'Felt Hat & Fishing Vest',
    bookInterpretation: 'His attire was a uniform, almost a Shaman\'s robe. The felt hat referenced his personal myth of being saved by Tatars who wrapped him in felt; the fishing vest with its many pockets represented his role as a "social sculptor"—utilitarian and prepared.',
    coverImageSeed: 104,
    tags: ['Utilitarian', 'Mythic', 'Uniform'],
    hotspots: [
      { id: 'h1', x: 50, y: 15, label: 'Felt Fedora', description: 'A symbol of warmth, protection, and resurrection.', keywords: ['Felt', 'Brimmed', 'Grey'], type: 'Accessory' },
      { id: 'h2', x: 40, y: 50, label: 'Fishing Vest', description: 'A container for tools, ideas, and materials.', keywords: ['Pockets', 'Utility', 'Canvas'], type: 'Top' },
      { id: 'h3', x: 60, y: 85, label: 'Field Boots', description: 'Sturdy footwear for walking the line between art and life.', keywords: ['Leather', 'Workwear'], type: 'Shoes' }
    ]
  },
  {
    id: '5',
    slug: 'andy-warhol',
    name: 'Andy Warhol',
    enName: 'Andy Warhol',
    era: '1960s-80s',
    movement: 'Pop Art',
    country: 'USA',
    styleSummary: 'Camouflage & Denim',
    bookInterpretation: 'Warhol was a devotee of Levi\'s 501s, wearing them even under tuxedo pants. His silver wig, clear glasses, and striped shirts formed a deliberate armor, allowing him to hide in plain sight while observing the world.',
    coverImageSeed: 105,
    tags: ['Pop', 'Denim', 'Iconic'],
    hotspots: [
      { id: 'h1', x: 50, y: 10, label: 'Silver Wig', description: 'A messy, metallic toupee acting as a public mask.', keywords: ['Synthetic', 'Platinum', 'Icon'], type: 'Accessory' },
      { id: 'h2', x: 30, y: 25, label: 'Clear Frames', description: 'A barrier between the voyeur and the subject.', keywords: ['Plastic', 'Transparent'], type: 'Accessory' },
      { id: 'h3', x: 60, y: 75, label: 'Levi\'s 501s', description: 'The democratic uniform of the American century.', keywords: ['Denim', 'Blue', 'Straight Leg'], type: 'Bottom' }
    ]
  },
  {
    id: '6',
    slug: 'louise-bourgeois',
    name: 'Louise Bourgeois',
    enName: 'Louise Bourgeois',
    era: '1990s-2000s',
    movement: 'Confessional Art',
    country: 'France/USA',
    styleSummary: 'Memory Coats & Helmut Lang',
    bookInterpretation: 'Clothing was a vessel for memory. Late in life, she became an unlikely fashion icon in Helmut Lang. In her art, she deconstructed her old clothes, restitching them into sculptures to process trauma and history.',
    coverImageSeed: 106,
    tags: ['Avant-garde', 'Memory', 'Textile'],
    hotspots: [
      { id: 'h1', x: 45, y: 40, label: 'Helmut Lang Coat', description: 'Minimalist structure meeting deep psychological weight.', keywords: ['Coat', 'Austere', 'Black'], type: 'Top' },
      { id: 'h2', x: 65, y: 60, label: 'Textile Scraps', description: 'Remnants of past lives woven into new forms.', keywords: ['Fabric', 'Stitched', 'Memory'], type: 'Details' }
    ]
  },
  {
    id: '7',
    slug: 'david-hockney',
    name: 'David Hockney',
    enName: 'David Hockney',
    era: '1960s-Present',
    movement: 'Pop Art',
    country: 'UK',
    styleSummary: 'Round Glasses & Mismatched Socks',
    bookInterpretation: 'Hockney dresses like his paintings: vibrant and joyful. He favors round glasses, bold rugby shirts, and intentionally mismatched socks—a habit started when he couldn\'t find a matching pair and decided it looked better that way.',
    coverImageSeed: 107,
    tags: ['Colorful', 'British', 'Playful'],
    hotspots: [
      { id: 'h1', x: 50, y: 20, label: 'Owl Glasses', description: 'Intellectual yet childlike thick round frames.', keywords: ['Tortoiseshell', 'Round', 'Statement'], type: 'Accessory' },
      { id: 'h2', x: 40, y: 50, label: 'Rugby Shirt', description: 'Broad stripes and primary colors.', keywords: ['Cotton', 'Stripes', 'Green/Blue'], type: 'Top' },
      { id: 'h3', x: 60, y: 90, label: 'Mismatched Socks', description: 'A subtle rebellion against conformity.', keywords: ['Cotton', 'Bright', 'Asymmetric'], type: 'Shoes' }
    ]
  },
  {
    id: '8',
    slug: 'sarah-lucas',
    name: 'Sarah Lucas',
    enName: 'Sarah Lucas',
    era: '1990s',
    movement: 'YBA',
    country: 'UK',
    styleSummary: 'Slouchy Denim & Boots',
    bookInterpretation: 'A core member of the YBA movement, Lucas adopted a "tough" aesthetic: baggy jeans, plain tees, and heavy boots. This anti-fashion stance was a reclaiming of power, rejecting the male gaze typically cast upon female artists.',
    coverImageSeed: 108,
    tags: ['Grunge', 'Casual', 'YBA'],
    hotspots: [
      { id: 'h1', x: 40, y: 35, label: 'White Tee', description: 'Basic, unisex, and aggressively normal.', keywords: ['Cotton', 'Cheap', 'Boxy'], type: 'Top' },
      { id: 'h2', x: 60, y: 65, label: 'Boyfriend Jeans', description: 'Denim worn loose, prioritizing attitude over fit.', keywords: ['Denim', 'Faded', 'Baggy'], type: 'Bottom' },
      { id: 'h3', x: 50, y: 90, label: 'Dr. Martens', description: 'The uniform of British rebellion.', keywords: ['Leather', 'Boots', 'Heavy'], type: 'Shoes' }
    ]
  },
  {
    id: '9',
    slug: 'yayoi-kusama',
    name: 'Yayoi Kusama',
    enName: 'Yayoi Kusama',
    era: '1960s-Present',
    movement: 'Pop / Minimalism',
    country: 'Japan',
    styleSummary: 'Polka Dot Obliteration',
    bookInterpretation: 'She dresses in the same patterns she paints. This is not just fashion; it is "self-obliteration." By camouflaging herself into her environment, she symbolizes the dissolution of the ego into the infinite universe.',
    coverImageSeed: 109,
    tags: ['Avant-garde', 'Pattern', 'Japanese'],
    hotspots: [
      { id: 'h1', x: 50, y: 20, label: 'Neon Wig', description: 'A bright bob that turns her head into a graphic element.', keywords: ['Red', 'Synthetic', 'Bob'], type: 'Accessory' },
      { id: 'h2', x: 50, y: 60, label: 'Dot Robe', description: 'A garment that merges the body with the background.', keywords: ['Silk', 'Polka Dot', 'Yellow'], type: 'Suit' }
    ]
  },
  {
    id: '10',
    slug: 'gilbert-george',
    name: 'Gilbert & George',
    enName: 'Gilbert & George',
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