export interface Suite {
  id: string;
  name: string;
  tagline: string;
  depth: string;
  priceINR: number;
  priceFormatted: string;
  sizeM2: number;
  sizeSqFt: number;
  capacity: number;
  bedConfig: string;
  heroImage: string;
  images: string[];
  overview: string;
  description: string;
  architecturalNote: string;
  features: string[];
  amenities: string[];
  floorPlanNote: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  depth: string;
  duration: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  galleryImages: string[];
  highlights: string[];
  pricingNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'architecture' | 'residences' | 'experiences' | 'interiors' | 'details';
  depth: string;
  image: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface ArchitecturePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specifications: { label: string; value: string }[];
}

export interface ReservationFormData {
  arrivalDate: string;
  departureDate: string;
  guests: number;
  rooms: number;
  suiteId: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
  flightArrival?: string;
  dietaryRestrictions?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}
