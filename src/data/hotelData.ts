import type { Suite, Experience, GalleryItem, ArchitecturePillar } from '../types';

export const HOTEL_INFO = {
  name: 'NOCTRA',
  tagline: 'Escape the Surface.',
  descriptor: 'Subterranean Luxury Sanctuary · Western Ghats',
  country: 'India',
  location: 'Mount Sahyadri, Western Ghats / Deccan Basalt Sector, Maharashtra, India',
  coordinates: '18°45′12″N 73°24′36″E · Elevation -380M',
  depth: '-380M Deccan Basalt Vault',
  established: 'MMXXIV',
  phone: '+91 22 6988 8800',
  conciergePhone: '+91 20 6711 8808',
  email: 'sanctuary@noctra-hotel.com',
  reservationsEmail: 'reservations@noctra-hotel.com',
  pressEmail: 'atelier@noctra-hotel.com',
  arrivalDetails: 'Concealed Subterranean Funicular Gate 07 (Sahyadri Valley Terminal), or Private Helipad at Seraph Ridge with subterranean drop chamber, or Private Chauffeured Transit from Mumbai (CSMIA) or Pune.',
};

export const SUITES: Suite[] = [
  {
    id: 'obsidian-suite',
    name: 'The Obsidian Suite',
    tagline: 'Sculpted from raw Deccan volcanic basalt and monolithic dark slate',
    depth: '180m Subterranean · Sahyadri Vault',
    priceINR: 165000,
    priceFormatted: '₹1,65,000',
    sizeM2: 185,
    sizeSqFt: 1990,
    capacity: 2,
    bedConfig: 'Sculpted Basalt Platform King Bed',
    heroImage: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1800&q=85',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=85'
    ],
    overview: 'Carved directly into the 66-million-year-old Deccan volcanic basalt, The Obsidian Suite features hand-chiselled matte charcoal surfaces, a private sunken plunge pool fed by Western Ghats thermal springs, and smart electrochromic glass opening onto an illuminated natural rock fissure.',
    description: 'A masterwork of Indian subterranean minimalism. The suite is shielded by two-meter-thick monolithic basalt that provides total acoustic silence from the surface world. Integrated indirect bronze lighting traces the volcanic contours of the mountain, casting gentle champagne warmth across bespoke smoked-teak furnishings and hand-cast Bidri bronze elements.',
    architecturalNote: 'Preserves the authentic basalt rock face exposed during the Sahyadri geological excavation, sealed with non-reflective natural silicate resin.',
    features: [
      'Private subterranean thermal bath (38°C Western Ghats mineral water)',
      'Subterranean circadian lighting program tailored to your sleep cycle',
      'Acoustic sound isolation rated at 55dB subterranean silence',
      'Bespoke in-suite sommelier reserve and curated Darjeeling single-estate tea atelier',
      'Private rock fissure terrace with ambient architectural illumination',
      '24/7 dedicated subterranean royal butler'
    ],
    amenities: [
      'Bang & Olufsen Beolab subterranean spatial sound system',
      'Indian 1,000-thread Suvin organic cotton linens and weighted mulberry silk throws',
      'Dyson Supersonic Obsidian edition styling suite',
      'Hydronic heated natural stone flooring throughout',
      'Handcrafted sandalwood and vetiver botanical bath amenities',
      'Private humidor and bespoke crystal glassware'
    ],
    floorPlanNote: 'Master bedroom, sunken thermal lounge, private spa bath, walk-in stone wardrobe, private wine cellar alcove.'
  },
  {
    id: 'cavern-residence',
    name: 'The Cavern Residence',
    tagline: 'Dual living pavilions carved within a grand Deccan limestone and basalt vault',
    depth: '240m Subterranean · Sahyadri Vault',
    priceINR: 240000,
    priceFormatted: '₹2,40,000',
    sizeM2: 260,
    sizeSqFt: 2798,
    capacity: 3,
    bedConfig: 'Master King + Secluded Daybed Alcove',
    heroImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=85',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=85'
    ],
    overview: 'The Cavern Residence spans across two grand subterranean levels, linked by a cantilevered blackened-steel staircase that floats over an ancient underground gravel bed. Raw geological textures meet warm brushed titanium, smoked oak, and pure pashmina.',
    description: 'Designed for prolonged retreats away from modern distractions. This residence boasts a private bio-sauna constructed from charred Himalayan cedar, an 8-seat dining table sculpted from an intact slab of Indian granite, and a private stone library holding rare first-edition volumes on Indian rock-cut architecture.',
    architecturalNote: 'The soaring 6.2-meter ceiling retains original Deccan volcanic cooling joints that shimmer under focused micro-aperture spotlights.',
    features: [
      'Private Himalayan cedar bio-sauna and cold immersion stone plunge',
      'Split-level dual living pavilions with suspended fireplace',
      'Monolithic dining table seating up to 8 guests',
      'Curated subterranean library with rare architectural folios on rock-cut heritage',
      'Integrated mixology bar with private vintage selections and Indian single malts',
      'Personal subterranean escort and geological mountain guide'
    ],
    amenities: [
      'Dual stone rain showers with geothermal rainwater recycling',
      'Steinway & Sons Spirio automated grand piano in graphite finish',
      'Custom mattress infused with organic mountain minerals',
      'Private fiber-optic high-bandwidth satellite uplink connection',
      'Hand-loomed cashmere robes woven in Kashmir exclusively for NOCTRA',
      'Bespoke in-room dining menus prepared by Master Chef'
    ],
    floorPlanNote: 'Upper library & reception pavilion, lower sleeping sanctuary, private wellness chamber, dining room, bar.'
  },
  {
    id: 'aurelia-chamber',
    name: 'The Aurelia Chamber',
    tagline: 'Luminous subterranean sanctuary veined with gold pyrite and quartz crystals',
    depth: '210m Subterranean · Sahyadri Vault',
    priceINR: 210000,
    priceFormatted: '₹2,10,000',
    sizeM2: 215,
    sizeSqFt: 2314,
    capacity: 2,
    bedConfig: 'Floating King with Gold-Leaf & Champagne Backlighting',
    heroImage: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1800&q=85',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=85'
    ],
    overview: 'Discovered during the excavation of an unexpected basalt fault in Mount Sahyadri, the walls of Aurelia are naturally laden with shimmering golden pyrite and crystallized quartz veins. The chamber celebrates light and shadow through hand-hammered champagne bronze surfaces.',
    description: 'An intimate haven of sensory restoration. An oval soaking tub carved from a single block of warm Indian travertine sits in a glass atrium looking onto a miniature subterranean rock garden. In the bedroom, the floating bed appears weightless above a perimeter of soft amber ground-glow.',
    architecturalNote: 'Acoustic resonance was calibrated by acoustic architects to create natural white noise harmony using the gentle trickle of an adjacent mountain spring.',
    features: [
      'Pyrite-veined stone fireplace with ventless clean ethanol burner',
      'Oval travertine soaking tub for two overlooking an illuminated rock atrium',
      'Sound therapy alcove with bronze singing bowls and binaural acoustic programs',
      'Bespoke artisan tea bar curated with Makaibari and Kangra valley flushes',
      'Circadian amber lighting system syncs to astronomical twilight',
      'Private mineral hydration station'
    ],
    amenities: [
      'Forest Essentials Haute Botanicals bath amenities in custom stone flacons',
      'Devialet Phantom acoustic speakers tuned to subterranean cave acoustics',
      'Pure mulberry silk eye masks and sleep wellness kits',
      'Dornbracht sensory sky shower with chromotherapy',
      'Underfloor radiant climate control with individualized air ionization',
      'Private in-suite Ayurvedic massage and facial therapy capability'
    ],
    floorPlanNote: 'Central bedroom pavilion, glass-enclosed travertine bath, meditation alcove, dressing room, outdoor rock atrium.'
  },
  {
    id: 'abyss-pool-suite',
    name: 'The Abyss Pool Suite',
    tagline: 'A private 14-meter heated subterranean pool cantilevered over a volcanic gorge',
    depth: '310m Subterranean · Sahyadri Vault',
    priceINR: 320000,
    priceFormatted: '₹3,20,000',
    sizeM2: 340,
    sizeSqFt: 3660,
    capacity: 4,
    bedConfig: 'Two Master Suites with King Beds',
    heroImage: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1800&q=85',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1800&q=85'
    ],
    overview: 'The centerpiece of this awe-inspiring residence is a 14-meter private subterranean infinity pool that appears to drop into the infinite depths of the mountain. Dark reflective water mirrors rough-hewn granite arches and glowing champagne fixtures.',
    description: 'Offering complete autonomy deep inside Mount Sahyadri, the Abyss Pool Suite features two completely independent master wings separated by an expansive sunken salon. Submerged fiber-optic lights create the sensation of floating in starry liquid obsidian, while an integrated underwater speaker system projects soothing frequencies.',
    architecturalNote: 'Engineered with counter-weighted subterranean tension trusses anchored into solid Deccan bedrock.',
    features: [
      '14-meter private heated subterranean infinity pool with underwater acoustics',
      'Dual master suites with independent ensuite stone bathrooms',
      'Subterranean Himalayan cedar sauna overlooking the private pool',
      'Sunken living room with 85-inch discreet flush art display',
      'Private chef prep galley for intimate in-suite private dinners',
      'Dedicated thermal massage and Ayurvedic marma treatment lounge'
    ],
    amenities: [
      'Custom plush shearling slippers and monogrammed pashmina robes',
      'Sub-Zero private wine and champagne preservation cellar',
      'Water purification with quadruple mountain mineral filtration',
      'High-velocity mist shower with organic eucalyptus and camphor infusion',
      'Dedicated 24-hour subterranean butler and mixologist',
      'VIP luggage handling and discreet private check-in at mountain terminal'
    ],
    floorPlanNote: 'Private infinity pool salon, dual master wings, sauna & wellness zone, dining lounge, butler prep station.'
  },
  {
    id: 'presidential-sanctuary',
    name: 'The Presidential Sanctuary',
    tagline: 'The ultimate monolithic underground retreat with private funicular car',
    depth: '380m Subterranean · Deepest Level',
    priceINR: 550000,
    priceFormatted: '₹5,50,000',
    sizeM2: 520,
    sizeSqFt: 5600,
    capacity: 6,
    bedConfig: '3 Grand Master Suites (All King Beds)',
    heroImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=85',
    images: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=85'
    ],
    overview: 'The pinnacle of global underground hospitality, carved inside the deepest cavern of the Western Ghats. Occupying the lowest habitable vault of NOCTRA, this three-bedroom palace has its own dedicated private funicular elevator, an internal geothermal waterfall, a private screening room, and 360-degree security encryption.',
    description: 'An architectural marvel without equal on Earth. The Presidential Sanctuary provides absolute seclusion for dignitaries, visionaries, and those seeking unmatched privacy. Built into a cavernous 500-meter hall, it marries brutalist monumental geometry with supreme comfort: Makrana marble bathtubs, hand-carved monolithic black quartz, a 12-seat banqueting hall, and an executive boardroom with secure subterranean satellite communications.',
    architecturalNote: 'Features a self-contained HEPA positive-pressure climate system and seismic dampening springs guaranteeing perpetual stability.',
    features: [
      'Dedicated private subterranean funicular car with biometric access',
      'Three expansive master suites with private hammams and soaking tubs',
      '12-seat private banquet dining room with open live-fire show kitchen',
      '10-seat private Dolby Atmos screening cinema with acoustic isolation',
      'Geothermal indoor waterfall cascading into an ambient mineral pond',
      'Full private staff: Dedicated Master Chef, Sommelier, and 2 Royal Butlers'
    ],
    amenities: [
      'Unlimited access to rare vintage cellars and personalized culinary menus',
      'Chauffeured helicopter transport from Mumbai, Pune, or Goa',
      'Curated museum-grade contemporary sculpture and lighting installations',
      'Private wellness suite with custom treatments by visiting Ayurvedic masters',
      'Personal security detail quarters and encrypted communication terminal',
      'Bespoke luggage unpacking, wardrobe curation, and tailor on call'
    ],
    floorPlanNote: '3 Master suites, grand reception hall, dining hall, cinema, private spa, commercial kitchen, staff quarters.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'underground-spa',
    title: 'The Underground Spa',
    subtitle: 'Thermal mineral pools, halotherapy caverns, and deep Ayurvedic restoration',
    depth: '260m Subterranean · Sahyadri Vault',
    duration: 'Full Day / Evening Sessions',
    category: 'Wellness & Restoration',
    description: 'Ancient thermal waters naturally heated by deep tectonic thermal vents of the Western Ghats, routed through sculpted basalt chambers to create an immersive restorative journey unlike anything on the surface.',
    longDescription: 'Immerse your body in subterranean silence where external time ceases to exist. The Underground Spa features four thermal pools ranging from 14°C cold plunges to 40°C mineral-dense thermal baths, an active Himalayan pink salt cavern, and obsidian dry saunas lined with 200-year-old Himalayan cedarwood. Each treatment incorporates rare geothermal clays, Western Ghats botanicals, and Ayurvedic Marma sound therapy tailored to reset neurological balance.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=85'
    ],
    highlights: [
      'Four geothermal pools with varying mineral profiles and temperatures',
      'Himalayan halotherapy pink salt cave rich in micro-ionized mineral ions',
      'Obsidian stone steam baths and private cryo-plunges',
      'Sensory sound flotation chambers with water-transmitted meditative ragas'
    ],
    pricingNote: 'Complimentary for residence guests · Private chamber bookings upon request'
  },
  {
    id: 'private-dining',
    title: 'Private Dining at Cripta',
    subtitle: 'Two Michelin-starred subterranean Indian gastronomy inside vaulted stone',
    depth: '220m Subterranean · Sahyadri Vault',
    duration: '3.5 Hours Tasting Menu',
    category: 'Culinary Art',
    description: 'An extraordinary culinary temple carved into a natural acoustic limestone cavern, presenting an avant-garde 9-course menu celebrating foraging, fermentation, and Indian mountain terroir.',
    longDescription: 'At Cripta, dining is an intimate architectural ritual. Illuminated exclusively by warm champagne light and hand-poured beeswax candles, ten bespoke tables sit beneath 15-meter arched stone vaults. Executive Chef Julian Vane curates seasonal 9-course subterranean degustations celebrating forgotten Vedic grains, Western Ghats forest mushrooms, and Himalayan black truffles, paired with rare vintage wines cellared 200 meters underground at consistent 13°C natural humidity.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1800&q=85'
    ],
    highlights: [
      '9-course tasting menu inspired by mountain minerals and ancient Western Ghats botanicals',
      'Grand Subterranean Wine Cave housing over 14,000 vintage bottles and rare Indian single malts',
      'Private Chef’s Counter for 6 guests overlooking the open basalt hearth',
      'Custom ceramic and stone tableware forged from excavated Sahyadri mountain rock'
    ],
    pricingNote: 'From ₹35,000 per guest · Pairing curated by Master Sommelier'
  },
  {
    id: 'the-abyss',
    title: 'The Abyss Thermal Pool',
    subtitle: 'A monumental 40-meter black Deccan basalt pool reflecting monolithic rock',
    depth: '300m Subterranean · Sahyadri Vault',
    duration: 'Open 24 Hours for Guests',
    category: 'Aquatic Architecture',
    description: 'A cathedral of water and silence. The 40-meter black slate pool extends into a shadowy natural mountain crevasse, glowing with subtle champagne optical fibers along the pool floor.',
    longDescription: 'Floating in The Abyss feels like drifting through an infinite cosmic void. The water is drawn directly from deep mountain aquifers, naturally enriched with silica and magnesium. Ambient temperatures remain at an exact 34°C year-round. Monolithic basalt pillars rise out of the water to meet towering stone ceilings, while recessed warm perimeter glow lines reveal centuries of volcanic cooling in the surrounding mountain.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1800&q=85'
    ],
    highlights: [
      '40-meter heated black stone infinity pool with natural magnesium water',
      'Acoustic underwater soundscapes broadcasting meditative ambient recordings',
      'Floating stone cabanas with heated lounger cushions and private champagne service',
      'Subterranean stargazing fiber-optic ceiling simulating ancient Vedic constellations'
    ],
    pricingNote: 'Exclusive to NOCTRA residents · Night sessions available'
  },
  {
    id: 'the-expedition',
    title: 'The Geological Expedition',
    subtitle: 'Private speleological exploration of untouched Deccan crystal grottos',
    depth: '420m to 600m Subterranean · Deep Fissure',
    duration: '4 Hours Guided',
    category: 'Exploration & Adventure',
    description: 'Journey with NOCTRA’s resident speleologists into virgin subterranean chambers, ancient quartz caverns, and zeolite grottos discovered during Sahyadri tunneling.',
    longDescription: 'Equipped with bespoke carbon-fiber exploration gear, guests traverse illuminated subterranean rope bridges, ascend crystalline faultways, and discover prehistoric subterranean streams that have never seen sunlight. The expedition concludes with a private champagne toast and artisan provisions served beside an ancient subterranean crystal waterfall.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85'
    ],
    highlights: [
      'Access to virgin crystal grottos closed to the general public',
      'Led by certified speleologists and geologists of the Geological Survey',
      'Custom lightweight exploration suit and carbon-fiber illumination gear',
      'Private subterranean tasting at the subterranean crystal pool'
    ],
    pricingNote: 'From ₹65,000 per couple · Advanced booking required'
  },
  {
    id: 'the-silent-sanctuary',
    title: 'The Silent Sanctuary (Mauna Pavilion)',
    subtitle: 'Complete sensory deprivation and acoustic isolation at -350m',
    depth: '350m Subterranean · Inner Core',
    duration: '90 Minutes to Overnight',
    category: 'Mind & Meditation',
    description: 'Engineered as the quietest architectural space on the planet, shielded from all electromagnetic radiation, surface vibrations, and environmental turbulence.',
    longDescription: 'Rooted in the timeless Indian discipline of Mauna (profound sacred silence), this sanctuary provides absolute neurological recalibration. Built on decoupled kinetic suspension foundations inside a solid granite sphere, with zero decibels of ambient background noise and complete absence of Wi-Fi or cellular signal, guests experience deep stillness through sensory rest, sound baths, and guided meditation.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1800&q=85',
      'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1800&q=85'
    ],
    highlights: [
      'An anechoic chamber rated at -2.5 dB for profound neurological stillness',
      'Zero-gravity flotation pods saturated with medical-grade Epsom salt',
      'Bespoke vibrational sound therapy tuned to 432Hz harmonic frequencies',
      'Guided Vedic meditation led by resident mindfulness masters'
    ],
    pricingNote: 'Included with Presidential & Abyss suites · ₹28,000 for suite guests'
  }
];

export const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    number: '01',
    title: 'Deccan Basalt Integration',
    subtitle: 'Honoring 66 Million Years of Volcanic Formation',
    description: 'Rather than blasting into Mount Sahyadri, NOCTRA was carved using precision water-jet cutting and diamond-wire sawing, following natural basalt columns. 85% of all exposed rock faces remain completely intact and untouched, celebrating the raw texture of prehistoric volcanic magma flows.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    specifications: [
      { label: 'Bedrock Age', value: '66 Million Years (Deccan Traps Era)' },
      { label: 'Excavation Method', value: 'Precision Diamond Wire & Acoustic Hydro-Splitting' },
      { label: 'Exposed Raw Surface', value: '85% Authentic Basalt Face' },
      { label: 'Max Structural Depth', value: '-380m below mountain summit' }
    ]
  },
  {
    number: '02',
    title: 'The Art of Disappearing',
    subtitle: 'Invisible Footprint from the Surface World',
    description: 'From the Western Ghats ridge above, NOCTRA is entirely invisible. No chimneys, no glittering facade, no surface disturbance. Arrival takes place via an alpine funicular hidden inside a natural stone fissure, sliding silently into the earth down a 45-degree incline into the subterranean grand atrium.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=85',
    specifications: [
      { label: 'Surface Visibility', value: '0% from aerial or satellite scan' },
      { label: 'Transit Method', value: 'Concealed Funicular / Private Helipad Airlock' },
      { label: 'Descent Distance', value: '620m Track Length at 42° Slope' },
      { label: 'Arrival Atrium Height', value: '18m Vaulted Natural Arch' }
    ]
  },
  {
    number: '03',
    title: 'Circadian Light Architecture',
    subtitle: 'Simulating Solar Cycles Deep Underground',
    description: 'Deprived of surface sun, NOCTRA commissioned leading chronobiologists to engineer a dynamic lighting ecosystem. Concealed LED linear arrays simulate the exact color temperature and angle of natural daylight — moving smoothly from soft morning champagne (2200K) to vibrant daylight (5500K) to deep evening amber (1800K).',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    specifications: [
      { label: 'Color Spectrum', value: '1800K Amber to 5600K Pure Daylight' },
      { label: 'CRI Rating', value: '98.5 True Color Rendering Index' },
      { label: 'Light Engine', value: 'Fiber-Optic Micro-Aperture Arrays' },
      { label: 'Biological Calibration', value: 'Synchronized with IST Melatonin Cycle' }
    ]
  },
  {
    number: '04',
    title: 'Passive Geothermal Thermodynamics',
    subtitle: 'Zero Net Carbon Thermal Stability',
    description: 'At a depth of 200m to 380m, the Sahyadri basalt stone maintains a naturally constant temperature of 17.5°C throughout the year, irrespective of whether the tropical surface is in monsoon storms or scorching summer heat. Using closed-loop geothermal heat exchange, NOCTRA uses 82% less energy than a surface hotel.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    specifications: [
      { label: 'Ambient Rock Temp', value: '17.5°C Natural Perpetual Constant' },
      { label: 'Energy Reduction', value: '82% compared to surface resort' },
      { label: 'Water Source', value: '100% Subterranean Mountain Aquifer' },
      { label: 'Air Circulation', value: 'Double-Filtered Positive Pressure Airflow' }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Great Subterranean Atrium',
    category: 'architecture',
    depth: '-190m',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'The monolithic arrival hall carved from dark Deccan basalt, illuminated by linear champagne floor channels.'
  },
  {
    id: 'g-2',
    title: 'The Abyss Reflection Pool',
    category: 'experiences',
    depth: '-300m',
    image: 'https://images.unsplash.com/photo-1536746803623-cef87080bfc8?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'portrait',
    caption: '40 meters of still thermal mineral water mirroring the raw volcanic rock faults above.'
  },
  {
    id: 'g-3',
    title: 'The Obsidian Suite Bedchamber',
    category: 'residences',
    depth: '-180m',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'Sculpted basalt platform bed surrounded by acoustic charcoal stone paneling and smoked Indian teak.'
  },
  {
    id: 'g-4',
    title: 'Hand-Chiseled Stone & Bidri Bronze Finishes',
    category: 'details',
    depth: '-210m',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'portrait',
    caption: 'Macro view of patinated champagne bronze fixtures meeting rough Western Ghats granite.'
  },
  {
    id: 'g-5',
    title: 'Cripta Subterranean Restaurant',
    category: 'experiences',
    depth: '-220m',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'Candlelit dining alcoves carved into natural stone vaults for intimate 9-course degustations.'
  },
  {
    id: 'g-6',
    title: 'The Cavern Living Lounge',
    category: 'residences',
    depth: '-240m',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'Double-height subterranean pavilion featuring suspended fireplace and bespoke bespoke furniture.'
  },
  {
    id: 'g-7',
    title: 'Subterranean Corridor of Shadows',
    category: 'architecture',
    depth: '-250m',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'portrait',
    caption: 'A 120-meter private access corridor demonstrating dramatic light and shadow balance.'
  },
  {
    id: 'g-8',
    title: 'Monolithic Travertine Soaking Bath',
    category: 'interiors',
    depth: '-210m',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'square',
    caption: 'Custom bathtub carved from a solid block of warm travertine with mineral spring taps.'
  },
  {
    id: 'g-9',
    title: 'The Silent Sanctuary Chamber',
    category: 'experiences',
    depth: '-350m',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'Acoustically isolated chamber designed for absolute neurological stillness and Vedic silence.'
  },
  {
    id: 'g-10',
    title: 'The Presidential Vault Pavilion',
    category: 'residences',
    depth: '-380m',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'The master salon of the deepest luxury retreat, complete with indoor geothermal water garden.'
  },
  {
    id: 'g-11',
    title: 'Raw Pyrite Vein in Deccan Basalt Wall',
    category: 'details',
    depth: '-210m',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'portrait',
    caption: 'Natural metallic veins running through the Aurelia Chamber stone walls.'
  },
  {
    id: 'g-12',
    title: 'The Geothermal Spa Thermal Grotto',
    category: 'experiences',
    depth: '-260m',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'Steaming mineral water baths sheltered beneath natural cavern ceilings.'
  },
  {
    id: 'g-13',
    title: 'Minimalist Monolithic Bar',
    category: 'interiors',
    depth: '-230m',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'square',
    caption: 'Blackened zinc and fluted volcanic basalt counter serving artisanal spirits.'
  },
  {
    id: 'g-14',
    title: 'Cantilevered Black Steel Stairway',
    category: 'architecture',
    depth: '-240m',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'portrait',
    caption: 'Precision engineered staircase connecting the dual levels of the Cavern Residence.'
  },
  {
    id: 'g-15',
    title: 'Private In-Suite Infinity Plunge',
    category: 'residences',
    depth: '-310m',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'landscape',
    caption: 'Private 14-meter heated plunge pool cantilevered inside the Abyss Pool Suite.'
  },
  {
    id: 'g-16',
    title: 'Mountain Aquifer Water Feature',
    category: 'details',
    depth: '-280m',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85',
    aspectRatio: 'portrait',
    caption: 'Pure mountain aquifer water trickling along chiseled slate channels.'
  }
];

export const PRESS_ACCOLADES = [
  {
    quote: 'The most extraordinary architectural achievement in modern Indian hospitality. NOCTRA transforms prehistoric Deccan basalt into pure spatial poetry.',
    publication: 'Architectural Digest India',
    year: '2025'
  },
  {
    quote: 'A radical redefinition of seclusion. In an overcrowded world, the ultimate luxury is descending into the stillness of the Western Ghats.',
    publication: 'Wallpaper* Magazine',
    year: '2025'
  },
  {
    quote: 'Sublime, mysterious, and unforgettable. The abyss pool carved into volcanic rock sets a standard surface resorts cannot reach.',
    publication: 'Condé Nast Traveller India',
    year: 'Gold List'
  },
  {
    quote: 'Flawless culinary artistry combined with ancient geology. A monumental triumph of experiential Indian luxury.',
    publication: 'Robb Report India',
    year: 'Best of the Best'
  }
];
