/**
 * Centralized business data and configuration for WellBeing Design.
 * Only verified facts provided in the prompt are used.
 * Placeholders are cleanly documented so the business owner can easily update project images or links.
 */

import wellbeingBedroomOriginal from '../assets/images/wellbeing_bedroom_original.webp';
import wellbeingProject2Img from '../assets/images/wellbeing_portfolio_project_2.webp';
import realPort1 from '../assets/images/portfolio_real_1.webp';
import realPort2 from '../assets/images/portfolio_real_2.webp';
import realPort3 from '../assets/images/portfolio_real_3.webp';
import realPort4 from '../assets/images/portfolio_real_4.webp';
import realPort5 from '../assets/images/portfolio_real_5.webp';
import realPort6 from '../assets/images/portfolio_real_6.webp';

export interface BusinessConfig {
  name: string;
  category: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  ratingMax: number;
  phoneDisplay: string;
  phoneSecondary?: string;
  phoneRaw: string;
  telLink: string;
  whatsappLink: string;
  addressFull: string;
  addressShort: string;
  city: string;
  state: string;
  pincode: string;
  plusCode: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  isLgbtqFriendly: boolean;
}

export const BUSINESS_INFO: BusinessConfig = {
  name: 'WellBeing Design',
  category: 'Interior Designer',
  tagline: 'Design Creates Happiness',
  rating: 4.8,
  reviewCount: 103,
  ratingMax: 5,
  phoneDisplay: '099230 28897',
  phoneSecondary: '96657 34466',
  phoneRaw: '+919923028897',
  telLink: 'tel:09923028897',
  whatsappLink: 'https://wa.me/919923028897?text=Hello%20WellBeing%20Design%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20consultation.',
  addressFull: 'Jayanti Nagari, F-29, Besa - Manish Nagar Rd, beside Purti Super Bazar, Manish Nagar, Besa, Besa Pipla, Nagpur, Maharashtra 440034, India',
  addressShort: 'Besa / Manish Nagar, Nagpur, Maharashtra',
  city: 'Nagpur',
  state: 'Maharashtra',
  pincode: '440034',
  plusCode: '33QM+GR Nagpur, Maharashtra',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=WellBeing+Design+Jayanti+Nagari+F-29+Besa+Manish+Nagar+Rd+Nagpur+Maharashtra+440034',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=WellBeing+Design+Jayanti+Nagari+Nagpur+Reviews',
  isLgbtqFriendly: true,
};

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Interiors',
    description: 'Thoughtful interiors for homes, apartments, and personal living spaces crafted around your daily life.',
    tags: ['Apartments', 'Villas', 'Full Homes'],
  },
  {
    id: 'living',
    title: 'Living Room Design',
    description: 'Balanced layouts, furniture, lighting, materials, and décor for comfortable, welcoming everyday living.',
    tags: ['Layouts', 'Lighting', 'Furniture Curation'],
  },
  {
    id: 'bedroom',
    title: 'Bedroom Interiors',
    description: 'Calm, functional, and personalized bedroom environments that serve as serene personal retreats.',
    tags: ['Master Suites', 'Wardrobes', 'Ambient Lighting'],
  },
  {
    id: 'kitchen-dining',
    title: 'Kitchen & Dining Spaces',
    description: 'Practical layouts combined with cohesive materials, colors, and finishes for culinary and gathering warmth.',
    tags: ['Modular Ergonomics', 'Stone Finishes', 'Dining Flow'],
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Efficient use of available space with meticulous attention to movement, functionality, and visual balance.',
    tags: ['Circulation', 'Storage Solutions', 'Zoning'],
  },
  {
    id: 'styling',
    title: 'Interior Styling',
    description: 'Finishing touches, furniture, lighting, colors, textures, and décor that seamlessly bring the design together.',
    tags: ['Textures', 'Art Placement', 'Soft Furnishings'],
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    description: 'Professional and visually engaging environments tailored for suitable commercial and boutique spaces.',
    tags: ['Boutique Workspaces', 'Studios', 'Client Lounges'],
  },
  {
    id: 'consultation',
    title: 'Design Consultation',
    description: 'A focused conversation about your space, requirements, preferences, and design direction.',
    tags: ['Concept Discovery', 'Material Guidance', 'Budget Discussion'],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}

export const DESIGN_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your space, lifestyle, requirements, preferences, and vision.',
    deliverables: 'Spatial brief & lifestyle requirements discussion',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Develop the design direction, spatial planning, materials, colors, and overall aesthetic.',
    deliverables: 'Layout proposals & mood boards',
  },
  {
    step: '03',
    title: 'Refine',
    description: 'Review the design details and refine the concept around your practical and visual needs.',
    deliverables: 'Material swatches, lighting plan & furniture selection',
  },
  {
    step: '04',
    title: 'Create',
    description: 'Move toward transforming the design vision into a finished interior.',
    deliverables: 'Comprehensive design guidance for final realization',
  },
];

export interface WhyUsItem {
  title: string;
  description: string;
  note?: string;
}

export const WHY_US: WhyUsItem[] = [
  {
    title: 'Thoughtful Design',
    description: 'Every design decision should contribute to the overall experience and peacefulness of the space.',
    note: 'Intentional harmony between light, space, and texture.',
  },
  {
    title: 'Budget-Conscious Thinking',
    description: "Design suggestions should consider the client's budget and practical requirements with honesty and care.",
    note: 'Backed by real client appreciation for transparent budget guidance.',
  },
  {
    title: 'Personalized Approach',
    description: "Create spaces around the client's lifestyle, taste, daily habits, and family requirements.",
    note: 'No one-size-fits-all templates; every home tells its own story.',
  },
  {
    title: 'Beauty Meets Function',
    description: 'Prioritize interiors that are visually appealing while remaining durable and practical for everyday use.',
    note: 'Comfortable living environments built to withstand genuine daily life.',
  },
];

export interface ReviewItem {
  id: string;
  quote: string;
  context: string;
  rating: number;
}

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Very Good Response with Proper Budget with Good Design Suggestion.',
    context: 'Verified Google Review',
    rating: 5,
  },
  {
    id: 'rev-2',
    quote: 'Right place to Decorate your Dream home.',
    context: 'Verified Google Review',
    rating: 5,
  },
  {
    id: 'rev-3',
    quote: 'The service provided by Wellbeing Design was fantastic!',
    context: 'Verified Google Review',
    rating: 5,
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Living Spaces' | 'Bedrooms' | 'Kitchens' | 'Modern Interiors' | 'Details & Décor';
  categoryLabel: string;
  description: string;
  image: string;
  aspect: string;
  materials?: string[];
  tone?: string;
}

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: 'real-port-1',
    title: 'Master Bedroom & Powder Blue Vanity Suite',
    category: 'Bedrooms',
    categoryLabel: 'Bedrooms',
    description: 'Modern bedroom execution featuring off-white accent wall with vertical gold inlay profiles, floating marble TV console, powder blue dressing vanity with vanity mirror, and linear false ceiling lighting.',
    image: realPort1,
    aspect: 'aspect-[4/3]',
    materials: ['Gold Inlay Strips', 'Marble Fluted Console', 'Powder Blue Cabinetry', 'Concealed LED Profiles'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'real-port-2',
    title: 'Duplex Architectural Staircase & Storage',
    category: 'Living Spaces',
    categoryLabel: 'Living Spaces',
    description: 'Sophisticated duplex interior featuring black granite floating staircase with frameless glass balustrade, rich wood-clad pillar partition, curated wall frames, and custom integrated under-stair storage cabinetry.',
    image: realPort2,
    aspect: 'aspect-[4/3]',
    materials: ['Black Polished Granite', 'Toughened Glass Railing', 'Warm Teak Cladding', 'Integrated Storage'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'real-port-3',
    title: 'Bespoke Salon & Beauty Studio Interior',
    category: 'Modern Interiors',
    categoryLabel: 'Modern Interiors',
    description: 'Turnkey commercial salon interior featuring custom wooden styling mirror stations, hydraulic salon chairs, illuminated back-lit nail display showcase, decorative CNC jali divider screen, and layered task lighting.',
    image: realPort3,
    aspect: 'aspect-[4/3]',
    materials: ['CNC Jali Screen', 'Warm Woodwork', 'Illuminated Display Niches', 'Ergonomic Salon Stations'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'real-port-4',
    title: 'Double-Height Grand Living & TV Feature Wall',
    category: 'Living Spaces',
    categoryLabel: 'Living Spaces',
    description: 'Striking double-height residential living hall showcasing natural pine-finish wood TV backdrop, wall-mounted console, tall vertical window louvers, black granite staircase with glass banister, and polished marble flooring.',
    image: realPort4,
    aspect: 'aspect-[3/4]',
    materials: ['Natural Pine Wood Paneling', 'Double-Height Louvers', 'Glass Balustrade', 'Polished Marble'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'real-port-5',
    title: 'Dual-Tone Sliding Wardrobe Suite',
    category: 'Bedrooms',
    categoryLabel: 'Bedrooms',
    description: 'Tailored bedroom storage featuring full-height sliding wardrobe in slate grey and warm ivory with overhead lofts, coordinated textured curtain drapery, and clean architectural lines.',
    image: realPort5,
    aspect: 'aspect-[4/3]',
    materials: ['Dual-Tone Matte Laminate', 'Smooth Sliding Hardware', 'Overhead Lofts', 'Textured Drapery'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'real-port-6',
    title: 'L-Shaped Granite Modular Kitchen',
    category: 'Kitchens',
    categoryLabel: 'Kitchens',
    description: 'Heavy-duty turnkey modular kitchen with polished black granite countertop with raised water retention lip, mocha and marble-textured tandem box cabinetry, stainless steel sink with swivel faucet, and full-height wall tiling.',
    image: realPort6,
    aspect: 'aspect-[4/3]',
    materials: ['Jet Black Granite Counter', 'Mocha & Marble Textured Laminate', 'Soft-Close Hardware', 'Dado Wall Tiles'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'port-teal-bedroom',
    title: 'Teal & Marble Accent Master Bedroom',
    category: 'Bedrooms',
    categoryLabel: 'Bedrooms',
    description: 'Rich teal focal wall with concealed LED strip glow, veined marble wainscot paneling, brass artwork lighting, and custom crafted platform bed.',
    image: wellbeingBedroomOriginal,
    aspect: 'aspect-[4/3]',
    materials: ['Teal Accent Finish', 'Veined Marble Panel', 'Concealed LED Strip', 'Brass Fixtures'],
    tone: 'Authentic Project Photo',
  },
  {
    id: 'port-official-showcase-2',
    title: 'Custom Millwork & Architectural Living Space',
    category: 'Modern Interiors',
    categoryLabel: 'Modern Interiors',
    description: 'Authentic WellBeing Design interior project in Nagpur featuring custom cabinetry, layered architectural lighting, and refined contemporary materials.',
    image: wellbeingProject2Img,
    aspect: 'aspect-[4/3]',
    materials: ['Custom Cabinetry', 'Architectural Finishes', 'Concealed LED Strips', 'Designer Hardware'],
    tone: 'Authentic Project Photo',
  },
];
