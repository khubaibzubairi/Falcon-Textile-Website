// ── Product Interface ────────────────────────────────────────────────────────
export interface Product {
  // Basic info (used everywhere)
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  primaryImage: string;
  hoverImage: string;
  tag?: string;
  isHovered: boolean;

  // Details page specific
  season?: string;
  description?: string;
  moq?: string;
  leadTime?: string;
  fabricOrigin?: string;
  construction?: string;
  specs?: { label: string; value: string }[];

  // Gallery images (for product details page)
  galleryImages?: {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
  }[];
}

// ── Categories ────────────────────────────────────────────────────────────────
export const Categories = [
  { label: 'All', count: 0 },
  { label: 'Coveralls', count: 0 },
  { label: 'Trousers & Cargo Trousers', count: 0 },
  { label: 'Safety Jackets', count: 0 },
  { label: 'Wool Jackets', count: 0 },
  { label: 'Winter Clothing', count: 0 },
  { label: 'Heavy-Duty Denim/Canvas Clothing', count: 0 },
  { label: 'Bibs and Braces', count: 0 },
  { label: 'Flame-Resistant Clothing', count: 0 },
  { label: 'Corporate Contract Clothing', count: 0 },
  { label: 'Hi-Visibility Clothing', count: 0 },
  { label: 'FR + Antistatic Flame-Resistant Clothing', count: 0 },
  { label: 'Flame Retardant with Nomex®', count: 0 },
  { label: 'Flame Retardant with Nomex® by Carpenter & DuPont™', count: 0 },
  { label: 'Chemical Suits', count: 0 },
  { label: 'Industrial Shirts', count: 0 },
  { label: 'Nomex Coveralls', count: 0 },
];
// ── All Products ──────────────────────────────────────────────────────────────
export const AllProducts: Product[] = [
  {
    id: 1,
    name: 'Atelier Coat',
    category: 'Women',
    subCategory: 'Outerwear',
    primaryImage: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
    tag: 'New',
    isHovered: false,
    season: 'AW 2024',
    description: `The Atelier Coat is our signature outerwear piece — a study in restraint and precision. Cut from double-faced cashmere sourced from a family-run mill in Biella, Italy, it is constructed with a minimal lapel, single-button closure, and hand-finished seams throughout.

Designed to be worn for a decade, not a season. The silhouette is clean and elongated, draping naturally across the body without stiffness. Available for wholesale, custom colour runs, and private label production.`,
    moq: '50 units per colourway',
    leadTime: '3–4 weeks from approved sample',
    fabricOrigin: 'Biella, Italy',
    construction: 'Hand-finished, fully lined',
    specs: [
      { label: 'Fabric', value: 'Double-faced cashmere, 400g/m²' },
      { label: 'Origin', value: 'Biella, Italy (Certified mill)' },
      { label: 'Construction', value: 'Hand-finished seams, fully lined' },
      { label: 'Closure', value: 'Single horn button' },
      { label: 'Sizes', value: 'XS – XXL (custom grading available)' },
      { label: 'Colourways', value: 'Camel, Ivory, Charcoal, Midnight Navy' },
      { label: 'MOQ', value: '50 units per colourway' },
      { label: 'Lead time', value: '3–4 weeks from approved sample' },
      { label: 'Care', value: 'Dry clean only' },
    ],
    galleryImages: [
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1000&q=85',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&q=70',
        alt: 'Atelier Coat — front view',
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1000&q=85',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=200&q=70',
        alt: 'Atelier Coat — side view',
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=85',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70',
        alt: 'Atelier Coat — back view',
      },
      {
        itemImageSrc: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=85',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&q=70',
        alt: 'Atelier Coat — detail shot',
      },
    ],
  },
  {
    id: 2,
    name: 'Fluid Silk Shirt',
    category: 'Women',
    subCategory: 'Tops',
    primaryImage: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    isHovered: false,
    season: 'SS 2025',
    description: `A relaxed silk shirt with a fluid drape. Made from 19-momme silk charmeuse, it features a classic collar, mother-of-pearl buttons, and a slightly oversized fit.`,
    moq: '30 units per colourway',
    leadTime: '2–3 weeks',
    fabricOrigin: 'Como, Italy',
    construction: 'French seams, hand-rolled hems',
  },
  {
    id: 3,
    name: 'Tailored Trouser',
    category: 'Women',
    subCategory: 'Bottoms',
    primaryImage: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&q=80',
    isHovered: false,
    season: 'AW 2024',
    description: `High-waisted tailored trousers with a straight leg. Cut from Italian wool-blend suiting fabric with a subtle stretch for comfort.`,
    moq: '40 units per colourway',
    leadTime: '3 weeks',
    fabricOrigin: 'Prato, Italy',
    construction: 'Fully lined, zip fly',
  },
  {
    id: 4,
    name: 'Minimal Shift Dress',
    category: 'Women',
    subCategory: 'Dresses',
    primaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    tag: 'Limited',
    isHovered: false,
    season: 'SS 2025',
    description: `A sleeveless shift dress with a clean A-line silhouette. Made from linen-cotton blend with invisible side zip closure.`,
    moq: '25 units per colourway',
    leadTime: '2–3 weeks',
    fabricOrigin: 'Portugal',
    construction: 'Unlined, raw-edge finish',
  },
  {
    id: 5,
    name: 'Linen Wide Trouser',
    category: 'Women',
    subCategory: 'Bottoms',
    primaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    tag: 'Bestseller',
    isHovered: false,
    season: 'SS 2025',
    description: `Wide-leg linen trousers with a relaxed fit. Features an elasticated waistband and side pockets. Perfect for warm-weather dressing.`,
    moq: '35 units per colourway',
    leadTime: '2 weeks',
    fabricOrigin: 'Belgium',
    construction: 'Unlined, flat-felled seams',
  },
  {
    id: 6,
    name: 'Oversized Blazer',
    category: 'Women',
    subCategory: 'Outerwear',
    primaryImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    isHovered: false,
    season: 'AW 2024',
    description: `An oversized single-breasted blazer with dropped shoulders. Cut from wool-blend suiting with a relaxed, contemporary fit.`,
    moq: '40 units per colourway',
    leadTime: '3–4 weeks',
    fabricOrigin: 'Prato, Italy',
    construction: 'Half-lined, notch lapel',
  },
  {
    id: 7,
    name: 'Structured Wool Coat',
    category: 'Men',
    subCategory: 'Outerwear',
    primaryImage: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    tag: 'New',
    isHovered: false,
    season: 'AW 2024',
    description: `A structured wool overcoat with a classic double-breasted closure. Made from heavyweight wool melton with peak lapels.`,
    moq: '50 units per colourway',
    leadTime: '4 weeks',
    fabricOrigin: 'Yorkshire, UK',
    construction: 'Fully lined, canvas interlining',
  },
  {
    id: 8,
    name: 'Relaxed Linen Shirt',
    category: 'Men',
    subCategory: 'Tops',
    primaryImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
    isHovered: false,
    season: 'SS 2025',
    description: `A relaxed-fit linen shirt with a camp collar. Made from European linen with coconut shell buttons.`,
    moq: '30 units per colourway',
    leadTime: '2 weeks',
    fabricOrigin: 'Belgium',
    construction: 'Unlined, flat-felled seams',
  },
  {
    id: 9,
    name: 'Tapered Chino',
    category: 'Men',
    subCategory: 'Bottoms',
    primaryImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    isHovered: false,
    season: 'SS 2025',
    description: `Tapered chinos with a mid-rise fit. Made from organic cotton twill with a soft hand feel.`,
    moq: '40 units per colourway',
    leadTime: '2–3 weeks',
    fabricOrigin: 'Turkey',
    construction: 'Zip fly, slant pockets',
  },
  {
    id: 10,
    name: 'Classic Merino Knit',
    category: 'Men',
    subCategory: 'Tops',
    primaryImage: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80',
    tag: 'Bestseller',
    isHovered: false,
    season: 'AW 2024',
    description: `A crew-neck merino wool sweater with a classic fit. Made from 100% extra-fine merino with ribbed trims.`,
    moq: '35 units per colourway',
    leadTime: '3 weeks',
    fabricOrigin: 'Scotland',
    construction: 'Fully fashioned, linked seams',
  },
  {
    id: 11,
    name: 'Leather Card Holder',
    category: 'Accessories',
    subCategory: 'Accessories',
    primaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    isHovered: false,
    season: 'AW 2024',
    description: `A slim leather card holder with four card slots. Made from vegetable-tanned Italian leather.`,
    moq: '50 units',
    leadTime: '2 weeks',
    fabricOrigin: 'Tuscany, Italy',
    construction: 'Hand-stitched, edge-painted',
  },
  {
    id: 12,
    name: 'Silk Scarf',
    category: 'Accessories',
    subCategory: 'Accessories',
    primaryImage: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1608731267464-c0c889c2ff92?w=800&q=80',
    tag: 'New',
    isHovered: false,
    season: 'SS 2025',
    description: `A square silk scarf with hand-rolled edges. Made from 100% silk twill with a custom print.`,
    moq: '25 units per design',
    leadTime: '3 weeks',
    fabricOrigin: 'Como, Italy',
    construction: 'Hand-rolled hems',
  },
];
