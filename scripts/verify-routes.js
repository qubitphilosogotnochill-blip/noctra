import { SUITES, EXPERIENCES, GALLERY_ITEMS, ARCHITECTURE_PILLARS, HOTEL_INFO } from '../src/data/hotelData.ts';

console.log('=== NOCTRA DATA & ARCHITECTURE AUDIT ===');

// 1. Audit Suites
console.log(`\n[SUITES AUDIT] Found ${SUITES.length} suites (Required: 5)`);
if (SUITES.length !== 5) {
  console.error('FAIL: Expected exactly 5 suites.');
  process.exit(1);
}

const requiredSuites = [
  'obsidian-suite',
  'cavern-residence',
  'aurelia-chamber',
  'abyss-pool-suite',
  'presidential-sanctuary',
];

for (const reqId of requiredSuites) {
  const found = SUITES.find((s) => s.id === reqId);
  if (!found) {
    console.error(`FAIL: Missing required suite: ${reqId}`);
    process.exit(1);
  }
  if (!found.priceFormatted.includes('₹') || found.priceINR <= 0) {
    console.error(`FAIL: Suite ${found.name} missing INR price.`);
    process.exit(1);
  }
  if (!found.sizeM2 || !found.sizeSqFt || !found.capacity || !found.bedConfig) {
    console.error(`FAIL: Suite ${found.name} missing key metrics.`);
    process.exit(1);
  }
  if (found.features.length === 0 || found.amenities.length === 0) {
    console.error(`FAIL: Suite ${found.name} missing features or amenities.`);
    process.exit(1);
  }
  if (found.images.length < 3) {
    console.error(`FAIL: Suite ${found.name} has fewer than 3 images.`);
    process.exit(1);
  }
  console.log(`✓ Suite validated: ${found.name} (${found.priceFormatted} INR, ${found.sizeM2}m², ${found.capacity} guests)`);
}

// 2. Audit Experiences
console.log(`\n[EXPERIENCES AUDIT] Found ${EXPERIENCES.length} experiences (Required: 5)`);
const requiredExps = [
  'underground-spa',
  'private-dining',
  'the-abyss',
  'the-expedition',
  'the-silent-sanctuary',
];

for (const expId of requiredExps) {
  const found = EXPERIENCES.find((e) => e.id === expId);
  if (!found) {
    console.error(`FAIL: Missing required experience: ${expId}`);
    process.exit(1);
  }
  if (!found.image || found.galleryImages.length === 0) {
    console.error(`FAIL: Experience ${found.title} missing imagery.`);
    process.exit(1);
  }
  console.log(`✓ Experience validated: ${found.title} (${found.depth})`);
}

// 3. Audit Gallery
console.log(`\n[GALLERY AUDIT] Found ${GALLERY_ITEMS.length} gallery items`);
const categories = new Set(GALLERY_ITEMS.map((g) => g.category));
console.log('Categories present:', Array.from(categories));
const requiredCats = ['architecture', 'residences', 'experiences', 'interiors', 'details'];
for (const cat of requiredCats) {
  if (!categories.has(cat)) {
    console.error(`FAIL: Missing gallery category: ${cat}`);
    process.exit(1);
  }
}
console.log('✓ All 5 gallery categories verified.');

// 4. Audit Architecture Pillars
console.log(`\n[ARCHITECTURE AUDIT] Found ${ARCHITECTURE_PILLARS.length} architectural pillars`);
for (const p of ARCHITECTURE_PILLARS) {
  if (!p.title || !p.description || p.specifications.length === 0) {
    console.error(`FAIL: Architecture pillar ${p.number} incomplete.`);
    process.exit(1);
  }
  console.log(`✓ Pillar validated: ${p.number} - ${p.title}`);
}

console.log('\n=======================================');
console.log('ALL NOCTRA DATA INTEGRITY AUDITS PASSED!');
console.log('=======================================');
